# ELM Flow Web Interface

This directory contains the web components for ELM Flow, providing a REST API and web-based user interface for CQL to ELM conversion.

## Components

### FastAPI Web Service (`api.py`)

A comprehensive REST API built with FastAPI that provides:

**Endpoints:**

- `GET /` - API information and available endpoints
- `GET /health` - Health check endpoint  
- `POST /convert` - Convert CQL content to ELM JSON
- `POST /validate` - Validate CQL content for syntax/semantic errors
- `POST /upload` - Upload and process CQL files
- `POST /batch` - Batch convert multiple CQL files
- `WebSocket /ws` - Real-time CQL validation
- `GET /ui` - Serve the web user interface
- `GET /docs` - OpenAPI documentation (Swagger UI)
- `GET /redoc` - Alternative API documentation

**Features:**

- Full request/response validation with Pydantic models
- CORS middleware for cross-origin requests
- File upload/download with proper content type handling
- WebSocket support for real-time validation
- Comprehensive error handling and status reporting
- Integration with both standard and optimized converters
- OpenAPI/Swagger documentation generation

### Web User Interface (`static/index.html`)

A modern, responsive web application providing:

**User Interface Features:**

- Dual-panel layout with CQL input and ELM output
- Real-time validation with visual feedback
- File upload/download functionality
- Syntax highlighting and error display
- Mobile-responsive design
- Processing status and timing information

**Functionality:**

- Load CQL files via file picker or drag-and-drop
- Real-time validation with debounced API calls
- Convert CQL to ELM with optimization options
- Download converted ELM JSON files
- Copy results to clipboard
- Clear workspace for new conversions

**Technical Features:**

- WebSocket connection for real-time validation
- Responsive CSS Grid/Flexbox layout
- Modern JavaScript with async/await
- Comprehensive error and warning display
- Status indicators with visual feedback
- Cross-browser compatibility

## Quick Start

### Start the Web Server

```bash
# Using the start script
python scripts/start_web_server.py

# Or using uvicorn directly
uv run uvicorn cql_flow.web.api:app --host 0.0.0.0 --port 8000 --reload
```

### Access the Interface

- **Web UI**: <http://localhost:8000/ui>
- **API Documentation**: <http://localhost:8000/docs>
- **Health Check**: <http://localhost:8000/health>

### Test the API

```bash
# Run API tests
python scripts/test_web_api.py

# Or use curl for quick testing
curl http://localhost:8000/health
```

## API Usage Examples

### Convert CQL to ELM

```bash
curl -X POST http://localhost:8000/convert \
  -H "Content-Type: application/json" \
  -d '{
    "cql_content": "library Test version \"1.0.0\"\ndefine \"Result\": true",
    "optimize": false
  }'
```

### Validate CQL Content

```bash
curl -X POST http://localhost:8000/validate \
  -H "Content-Type: application/json" \
  -d '{
    "cql_content": "library Test version \"1.0.0\"\ndefine \"Result\": true"
  }'
```

### Upload CQL File

```bash
curl -X POST http://localhost:8000/upload \
  -F "file=@example.cql" \
  -F "convert=true" \
  -F "optimize=false"
```

## Architecture

### Request/Response Flow

1. **Web UI** → JavaScript calls → **FastAPI endpoints**
2. **FastAPI** → Uses → **ELM Flow converters**
3. **Converters** → Return → **Structured results**
4. **FastAPI** → Validates → **Pydantic models**
5. **Results** → Returned as → **JSON responses**

### WebSocket Real-time Validation

1. **Client** connects to `/ws` WebSocket endpoint
2. **User types** in CQL editor (debounced)
3. **JavaScript** sends CQL content via WebSocket
4. **Server** validates using CQL converter
5. **Results** sent back immediately
6. **UI updates** with validation feedback

### File Processing

1. **File upload** via form or drag-and-drop
2. **Server validation** of file type and content
3. **CQL processing** with chosen converter
4. **Result download** as JSON or display in UI

## Dependencies

### Required Dependencies (web extras)

```toml
web = [
    "fastapi>=0.104.0",
    "uvicorn[standard]>=0.24.0", 
    "python-multipart>=0.0.6",
    "pydantic-settings>=2.0.0",
]
```

### Test Dependencies

```toml
test = [
    "httpx>=0.25.0",
    "pytest-asyncio>=0.21.0",
]
```

## Configuration

### Environment Variables

- `CORS_ORIGINS` - Allowed CORS origins (default: "*")
- `API_HOST` - Server host (default: "0.0.0.0")
- `API_PORT` - Server port (default: 8000)

### FastAPI Configuration

The API is configured with:

- Automatic OpenAPI schema generation
- CORS middleware for cross-origin requests
- Comprehensive request/response validation
- Error handling with proper HTTP status codes
- WebSocket support for real-time features

## Deployment

### Development Server

```bash
# Install dependencies
uv sync --extra web --extra test

# Start development server with hot reload
python scripts/start_web_server.py
```

### Production Deployment

```bash
# Install production dependencies
uv sync --extra web

# Run with production server
uvicorn cql_flow.web.api:app --host 0.0.0.0 --port 8000 --workers 4
```

### Docker Deployment

```dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY . .

RUN pip install uv && uv sync --extra web
EXPOSE 8000

CMD ["uvicorn", "cql_flow.web.api:app", "--host", "0.0.0.0", "--port", "8000"]
```

## Testing

### Automated Tests

```bash
# Run web API tests
python scripts/test_web_api.py

# Run with pytest
pytest tests/web/ -v
```

### Manual Testing

1. **Start the server**: `python scripts/start_web_server.py`
2. **Open browser**: Navigate to <http://localhost:8000/ui>
3. **Test functionality**:
   - Load a CQL file
   - Validate syntax
   - Convert to ELM
   - Download results

## Troubleshooting

### Common Issues

**Import Errors**: Ensure web dependencies are installed

```bash
uv sync --extra web
```

**WebSocket Connection Issues**: Check firewall and proxy settings

**File Upload Problems**: Verify content-type and file size limits

**CORS Errors**: Configure proper origins in production

### Debug Mode

Start the server with debug logging:

```bash
uvicorn cql_flow.web.api:app --log-level debug --reload
```

## Future Enhancements

- User authentication and session management
- CQL syntax highlighting with CodeMirror
- Advanced file management and workspace features  
- Batch conversion job queuing
- Integration with external CQL repositories
- Advanced validation rule configuration
- Performance monitoring and analytics
