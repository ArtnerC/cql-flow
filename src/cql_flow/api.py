"""
Python API for CQL to ELM conversion.

This module provides the main CQLToELMConverter class that serves as the primary
interface for converting Clinical Quality Language libraries to Expression Logical Model JSON.
"""

from __future__ import annotations

from dataclasses import dataclass
from enum import Enum
from pathlib import Path
from typing import Any, Dict, List, Optional, Union

from .parsing import CQLParseError, CQLParser


class ValidationLevel(Enum):
    """Validation strictness levels."""

    PERMISSIVE = "permissive"
    NORMAL = "normal"
    STRICT = "strict"


@dataclass
class ConversionOptions:
    """Configuration options for CQL to ELM conversion."""

    validation_level: ValidationLevel = ValidationLevel.NORMAL
    optimize: bool = True
    include_source_info: bool = True
    format_output: bool = False


@dataclass
class ConversionError:
    """Represents an error that occurred during conversion."""

    message: str
    line: Optional[int] = None
    column: Optional[int] = None
    severity: str = "error"
    suggestions: Optional[List[str]] = None

    def __post_init__(self):
        if self.suggestions is None:
            self.suggestions = []


@dataclass
class ConversionResult:
    """Result of CQL to ELM conversion."""

    success: bool
    elm_json: Optional[Dict[str, Any]] = None
    errors: Optional[List[ConversionError]] = None
    warnings: Optional[List[ConversionError]] = None

    def __post_init__(self):
        if self.errors is None:
            self.errors = []
        if self.warnings is None:
            self.warnings = []

    def has_errors(self) -> bool:
        """Check if conversion had errors."""
        return self.errors is not None and len(self.errors) > 0

    def has_warnings(self) -> bool:
        """Check if conversion had warnings."""
        return self.warnings is not None and len(self.warnings) > 0

    def save_elm(self, output_path: Path) -> None:
        """Save ELM JSON to file."""
        if not self.success or self.elm_json is None:
            raise ValueError("Cannot save ELM - conversion was not successful")

        import orjson

        with open(output_path, "wb") as f:
            f.write(orjson.dumps(self.elm_json, option=orjson.OPT_INDENT_2))


class CQLToELMConverter:
    """
    Main converter class providing fluent interface for CQL to ELM conversion.
    
    Example usage:
        converter = CQLToELMConverter()
        result = converter.with_validation_level(ValidationLevel.STRICT)\
                         .with_optimization(True)\
                         .convert_file(Path("my_library.cql"))
    """

    def __init__(self):
        self._options = ConversionOptions()

    @property
    def options(self) -> ConversionOptions:
        """Get current conversion options."""
        return self._options

    def with_validation_level(self, level: ValidationLevel) -> CQLToELMConverter:
        """Set validation strictness level."""
        self._options.validation_level = level
        return self

    def with_optimization(self, enabled: bool = True) -> CQLToELMConverter:
        """Enable/disable ELM optimization."""
        self._options.optimize = enabled
        return self

    def with_source_info(self, enabled: bool = True) -> CQLToELMConverter:
        """Include source location information in ELM output."""
        self._options.include_source_info = enabled
        return self

    def with_formatting(self, enabled: bool = True) -> CQLToELMConverter:
        """Enable pretty-printing of JSON output."""
        self._options.format_output = enabled
        return self

    def convert_file(self, file_path: Union[str, Path]) -> ConversionResult:
        """Convert CQL file to ELM JSON."""
        if isinstance(file_path, str):
            file_path = Path(file_path)

        if not file_path.exists():
            return ConversionResult(
                success=False, errors=[ConversionError(f"File not found: {file_path}")]
            )

        try:
            content = file_path.read_text(encoding="utf-8")
            return self.convert_string(content, filename=str(file_path))
        except Exception as e:
            return ConversionResult(
                success=False, errors=[ConversionError(f"Error reading file: {e}")]
            )

    def convert_string(self, cql_content: str, filename: Optional[str] = None) -> ConversionResult:
        """Convert CQL string content to ELM JSON."""
        try:
            # Parse CQL into AST
            parser = CQLParser()
            library_ast = parser.parse_string(cql_content, filename=filename)

            # TODO: Implement AST to ELM conversion
            # For now, return a placeholder result with parsed library info
            elm_placeholder = {
                "library": {
                    "identifier": {
                        "id": library_ast.name,
                        "version": library_ast.version.version if library_ast.version else None,
                    },
                    "schemaIdentifier": {"id": "urn:hl7-org:elm", "version": "r1"},
                    "usings": {
                        "def": [
                            {
                                "localIdentifier": stmt.model_identifier,
                                "uri": "http://hl7.org/fhir",
                                "version": stmt.version.version if stmt.version else None,
                            }
                            for stmt in library_ast.using_statements
                        ]
                    },
                    "statements": {"def": []},
                }
            }

            return ConversionResult(
                success=True,
                elm_json=elm_placeholder,
                warnings=[
                    ConversionError(
                        "Full ELM conversion not yet implemented - returning placeholder structure"
                    )
                ],
            )

        except CQLParseError as e:
            return ConversionResult(
                success=False,
                errors=[ConversionError(message=str(e), line=e.line, column=e.column)],
            )
        except Exception as e:
            return ConversionResult(
                success=False, errors=[ConversionError(f"Unexpected error: {e}")]
            )

    def convert_batch(self, file_paths: List[Union[str, Path]]) -> List[ConversionResult]:
        """Convert multiple CQL files to ELM JSON."""
        results = []
        for file_path in file_paths:
            result = self.convert_file(file_path)
            results.append(result)
        return results
