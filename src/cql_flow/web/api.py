"""
FastAPI web service for ELM Flow CQL to ELM conversion.
Provides REST API endpoints for CQL conversion with file upload support.
"""

import logging
import tempfile
from pathlib import Path
from typing import Any, Dict, List, Optional, cast
import json

from fastapi import (
    FastAPI,
    File,
    Form,
    HTTPException,
    UploadFile,
    WebSocket,
    WebSocketDisconnect,
)
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from cql_flow.api import CQLToELMConverter
from cql_flow.optimization import OptimizedCQLToELMConverter

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize converters
converter = CQLToELMConverter()
optimized_converter = OptimizedCQLToELMConverter()

# FastAPI app
app = FastAPI(
    title="ELM Flow API",
    description="REST API for CQL to ELM conversion",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Pydantic models
class ConversionRequest(BaseModel):
    """Request model for CQL content conversion."""

    cql_content: str = Field(..., description="CQL library content to convert")
    library_name: Optional[str] = Field(None, description="Optional library name")
    optimize: bool = Field(False, description="Use optimized converter")


class ValidationRequest(BaseModel):
    """Request model for CQL validation."""

    cql_content: str = Field(..., description="CQL library content to validate")


class ConversionResponse(BaseModel):
    """Response model for conversion results."""

    success: bool = Field(..., description="Whether the conversion was successful")
    elm_json: Optional[Dict[str, Any]] = Field(
        None, description="Generated ELM JSON (if successful)"
    )
    errors: List[str] = Field(default_factory=list, description="List of errors (if any)")
    warnings: List[str] = Field(default_factory=list, description="List of warnings (if any)")
    processing_time_ms: Optional[float] = Field(None, description="Processing time in milliseconds")


class ValidationResponse(BaseModel):
    """Response model for validation results."""

    success: bool = Field(..., description="Whether the validation was successful")
    errors: List[str] = Field(default_factory=list, description="List of validation errors")
    warnings: List[str] = Field(default_factory=list, description="List of warnings")


class BatchConversionResponse(BaseModel):
    """Response model for batch conversion results."""

    total_files: int = Field(..., description="Total number of files processed")
    successful_conversions: int = Field(..., description="Number of successful conversions")
    failed_conversions: int = Field(..., description="Number of failed conversions")
    results: List[Dict[str, Any]] = Field(..., description="Individual conversion results")
    processing_time_ms: float = Field(..., description="Total processing time")


# WebSocket connection manager
class ConnectionManager:
    """Manages WebSocket connections for real-time validation."""

    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        logger.info(f"WebSocket connected. Total connections: {len(self.active_connections)}")

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)
        logger.info(f"WebSocket disconnected. Total connections: {len(self.active_connections)}")

    async def send_message(self, websocket: WebSocket, message: Dict[str, Any]):
        try:
            await websocket.send_json(message)
        except Exception as e:
            logger.error(f"Error sending WebSocket message: {e}")


manager = ConnectionManager()


# API Routes
@app.get("/")
async def root() -> Dict[str, Any]:
    """Root endpoint with API information."""
    return {
        "name": "ELM Flow API",
        "version": "1.0.0",
        "description": "REST API for CQL to ELM conversion",
        "endpoints": {
            "docs": "/docs",
            "health": "/health",
            "convert": "/convert",
            "validate": "/validate",
            "upload": "/upload",
            "batch": "/batch",
            "websocket": "/ws",
        },
    }


@app.get("/health")
async def health_check() -> Dict[str, str]:
    """Health check endpoint."""
    return {"status": "healthy", "service": "cql-flow-api"}


@app.post("/convert", response_model=ConversionResponse)
async def convert_cql(request: ConversionRequest):
    """Convert CQL content to ELM JSON format."""
    import time

    start_time = time.perf_counter()

    try:
        # Choose converter based on optimization flag
        conv = optimized_converter if request.optimize else converter

        # Perform conversion
        result: Any = conv.convert_string(request.cql_content)

        # Normalize output across converter implementations
        success: bool = False
        elm_json_obj: Optional[Dict[str, Any]] = None
        errors_out: List[str] = []
        warnings_out: List[str] = []

        if isinstance(result, dict):
            data = cast(Dict[str, Any], result)
            success = bool(data.get("success", False))
            # Best-effort extraction
            doc = data.get("elm_document") or data.get("elm_json")
            if isinstance(doc, dict):
                elm_json_obj = cast(Dict[str, Any], doc)
            errors_out = [str(e) for e in data.get("errors", [])]
            warnings_out = [str(w) for w in data.get("warnings", [])]
        elif hasattr(result, "elm_document"):
            # Result from builder API (cql_flow.api.converter)
            success = bool(getattr(result, "success", False))
            elm_doc = getattr(result, "elm_document", None)
            elm_json_obj = elm_doc.to_dict() if elm_doc is not None else None
            errors_out = list(getattr(result, "errors", []) or [])
            warnings_out = list(getattr(result, "warnings", []) or [])
        else:
            # Result from simple API (cql_flow.api)
            success = bool(getattr(result, "success", False))
            elm_json_obj = cast(Optional[Dict[str, Any]], getattr(result, "elm_json", None))
            err_list = cast(Optional[List[Any]], getattr(result, "errors", None))
            warn_list = cast(Optional[List[Any]], getattr(result, "warnings", None))
            errors_out = [getattr(e, "message", str(e)) for e in (err_list or [])]
            warnings_out = [getattr(w, "message", str(w)) for w in (warn_list or [])]

        processing_time = (time.perf_counter() - start_time) * 1000

        return ConversionResponse(
            success=success,
            elm_json=elm_json_obj,
            errors=errors_out,
            warnings=warnings_out,
            processing_time_ms=processing_time,
        )

    except Exception as e:
        logger.error(f"Conversion error: {e}")
        raise HTTPException(status_code=500, detail=f"Conversion failed: {str(e)}")


@app.post("/validate", response_model=ValidationResponse)
async def validate_cql(request: ValidationRequest):
    """Validate CQL content for syntax and semantic errors."""
    try:
        # Use convert_string to validate - just check if conversion succeeds
        result = converter.convert_string(request.cql_content)

        # Extract error messages as strings
        error_messages = result.errors if result.errors else []
        warning_messages = result.warnings if result.warnings else []

        return ValidationResponse(
            success=result.success, errors=error_messages, warnings=warning_messages
        )

    except Exception as e:
        logger.error(f"Validation error: {e}")
        raise HTTPException(status_code=500, detail=f"Validation failed: {str(e)}")


@app.post("/upload")
async def upload_cql_file(
    file: UploadFile = File(...),
    convert: bool = Form(True),
    optimize: bool = Form(False),
):
    """Upload and process a CQL file."""
    # Validate file type
    if not (file.filename and file.filename.lower().endswith(".cql")):
        raise HTTPException(status_code=400, detail="Only .cql files are supported")

    try:
        # Read file content
        content = await file.read()
        cql_content = content.decode("utf-8")

        if convert:
            # Convert to ELM
            conv = optimized_converter if optimize else converter
            result: Any = conv.convert_string(cql_content)

            # Handle possible dict fallback from optimized converter
            if isinstance(result, dict):
                data = cast(Dict[str, Any], result)
                success = bool(data.get("success", False))
                elm_doc = data.get("elm_document")
                errors = [str(e) for e in data.get("errors", [])] if "errors" in data else []
                if isinstance(elm_doc, dict):
                    elm_json = json.dumps(elm_doc, indent=2)
                elif isinstance(elm_doc, str):
                    elm_json = elm_doc
                else:
                    elm_json = None
            else:
                success = result.success
                elm_json = result.get_elm_json(indent=2)
                errors = result.errors

            if success:
                # Return ELM as downloadable file
                if elm_json:
                    # Create temporary file for download
                    with tempfile.NamedTemporaryFile(
                        mode="w", suffix=".json", delete=False
                    ) as temp_file:
                        temp_file.write(elm_json)
                        temp_file_path = temp_file.name

                    output_filename = (file.filename or "output.cql").replace(".cql", ".json")

                    return FileResponse(
                        path=temp_file_path,
                        filename=output_filename,
                        media_type="application/json",
                    )
                else:
                    raise HTTPException(status_code=500, detail="Failed to generate ELM JSON")
            else:
                raise HTTPException(
                    status_code=400,
                    detail=f"Conversion failed: {', '.join(errors)}",
                )

        else:
            # Just validate using convert_string
            result = converter.convert_string(cql_content)

            return ValidationResponse(
                success=result.success, errors=result.errors, warnings=result.warnings
            )

    except UnicodeDecodeError:
        raise HTTPException(status_code=400, detail="File must be UTF-8 encoded")
    except Exception as e:
        logger.error(f"Upload processing error: {e}")
        raise HTTPException(status_code=500, detail=f"Processing failed: {str(e)}")


@app.post("/batch", response_model=BatchConversionResponse)
async def batch_convert(files: List[UploadFile] = File(...), optimize: bool = Form(False)):
    """Batch convert multiple CQL files."""
    import time

    start_time = time.perf_counter()

    # Validate files
    for file in files:
        fname = file.filename or ""
        if not fname.lower().endswith(".cql"):
            raise HTTPException(
                status_code=400,
                detail=f"Only .cql files are supported: {file.filename}",
            )

    results: List[Dict[str, Any]] = []
    successful_conversions = 0
    failed_conversions = 0

    try:
        conv = optimized_converter if optimize else converter

        for file in files:
            try:
                # Read file content
                content = await file.read()
                cql_content = content.decode("utf-8")

                # Convert
                result: Any = conv.convert_string(cql_content)

                # Normalize result
                if isinstance(result, dict):
                    data = cast(Dict[str, Any], result)
                    success = bool(data.get("success", False))
                    elm_doc = data.get("elm_document")
                    errors = [str(e) for e in data.get("errors", [])]
                else:
                    success = result.success
                    elm_doc = result.elm_document.to_dict() if result.elm_document else None
                    errors = result.errors

                if success:
                    successful_conversions += 1
                    results.append(
                        {
                            "filename": file.filename,
                            "status": "success",
                            "elm_json": elm_doc,
                        }
                    )
                else:
                    failed_conversions += 1
                    results.append(
                        {
                            "filename": file.filename,
                            "status": "failed",
                            "errors": errors,
                        }
                    )

            except Exception as e:
                failed_conversions += 1
                results.append({"filename": file.filename, "status": "error", "errors": [str(e)]})

        processing_time = (time.perf_counter() - start_time) * 1000

        return BatchConversionResponse(
            total_files=len(files),
            successful_conversions=successful_conversions,
            failed_conversions=failed_conversions,
            results=results,
            processing_time_ms=processing_time,
        )

    except Exception as e:
        logger.error(f"Batch conversion error: {e}")
        raise HTTPException(status_code=500, detail=f"Batch conversion failed: {str(e)}")


# WebSocket endpoint for real-time validation
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    """WebSocket endpoint for real-time CQL validation."""
    await manager.connect(websocket)

    try:
        while True:
            # Receive CQL content from client
            data = await websocket.receive_json()

            if "cql_content" in data:
                try:
                    # Validate CQL content using convert_string
                    result = converter.convert_string(data["cql_content"])

                    # Extract error and warning messages
                    error_messages = result.errors if result.errors else []
                    warning_messages = result.warnings if result.warnings else []

                    # Send validation result
                    response: Dict[str, Any] = {
                        "type": "validation_result",
                        "success": result.success,
                        "errors": error_messages,
                        "warnings": warning_messages,
                    }

                    await manager.send_message(websocket, response)

                except Exception as e:
                    await manager.send_message(
                        websocket,
                        {"type": "error", "message": f"Validation error: {str(e)}"},
                    )

            else:
                await manager.send_message(
                    websocket,
                    {"type": "error", "message": "Missing 'cql_content' in request"},
                )

    except WebSocketDisconnect:
        manager.disconnect(websocket)
    except Exception as e:
        logger.error(f"WebSocket error: {e}")
        manager.disconnect(websocket)


# Add static file serving and web UI routes
try:
    static_dir = Path(__file__).parent / "static"
    if static_dir.exists():
        app.mount("/static", StaticFiles(directory=static_dir), name="static")

        # Serve the main UI at /ui route
        @app.get("/ui")
        async def web_ui():
            """Serve the web UI."""
            return FileResponse(static_dir / "index.html", media_type="text/html")

except Exception as e:
    logger.warning(f"Could not mount static files: {e}")


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("cql_flow.web.api:app", host="0.0.0.0", port=8000, reload=True, log_level="info")
