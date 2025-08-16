"""Python API for CQL to ELM conversion.

This module provides a high-level Python API for converting Clinical Quality Language (CQL)
to Expression Logical Model (ELM). The API supports both single file and batch processing
with comprehensive error handling and progress tracking.

This file was fully rewritten to normalize indentation and strip any stray invisible
whitespace characters that intermittently caused Ruff's parser to report
"Unexpected indentation". Functional logic is unchanged.
"""

from __future__ import annotations

import asyncio
import logging
import time
from dataclasses import dataclass, field
from pathlib import Path
from typing import Awaitable, Callable, List, Optional, Union

from cql_flow.generator.elm_builder import ELMBuilder, ELMGenerationResult
from cql_flow.models.cql.library import CQLLibrary
from cql_flow.models.elm.ast import ELMDocument
from cql_flow.parsing import CQLParseError, CQLParser
from cql_flow.validator.rules import ValidationLevel
from cql_flow.validator.semantic_validator import SemanticValidator, ValidationResult

logger = logging.getLogger(__name__)


@dataclass
class ConversionResult:
    """Result of a CQL to ELM conversion operation."""

    source_file: Optional[Path] = None
    cql_library: Optional[CQLLibrary] = None
    elm_document: Optional[ELMDocument] = None
    validation_result: Optional[ValidationResult] = None
    generation_result: Optional[ELMGenerationResult] = None
    success: bool = False
    errors: List[str] = field(default_factory=list)
    warnings: List[str] = field(default_factory=list)
    processing_time_ms: Optional[float] = None

    @property
    def has_errors(self) -> bool:
        """Check if conversion has any errors."""
        return len(self.errors) > 0

    @property
    def has_warnings(self) -> bool:
        """Check if conversion has any warnings."""
        return len(self.warnings) > 0

    def get_elm_json(self, indent: Optional[int] = 2) -> Optional[str]:
        """Get ELM as JSON string."""
        if self.elm_document:
            return self.elm_document.to_json(indent=indent)
        return None

    def save_elm(self, output_path: Union[str, Path], indent: Optional[int] = 2) -> bool:
        """Save ELM to file."""
        if not self.elm_document:
            return False

        try:
            output_path = Path(output_path)
            output_path.parent.mkdir(parents=True, exist_ok=True)

            with open(output_path, "w", encoding="utf-8") as f:
                f.write(self.elm_document.to_json(indent=indent))
            return True
        except Exception as e:
            logger.error(f"Failed to save ELM to {output_path}: {e}")
            return False


@dataclass
class BatchConversionResult:
    """Result of a batch CQL to ELM conversion operation."""

    total_files: int = 0
    successful_conversions: int = 0
    failed_conversions: int = 0
    results: List[ConversionResult] = field(default_factory=list)
    total_processing_time_ms: Optional[float] = None

    @property
    def success_rate(self) -> float:
        """Get success rate as percentage."""
        if self.total_files == 0:
            return 0.0
        return (self.successful_conversions / self.total_files) * 100.0

    @property
    def has_failures(self) -> bool:
        """Check if batch has any failures."""
        return self.failed_conversions > 0

    def get_failed_results(self) -> List[ConversionResult]:
        """Get results that failed conversion."""
        return [r for r in self.results if not r.success]

    def get_successful_results(self) -> List[ConversionResult]:
        """Get results that succeeded conversion."""
        return [r for r in self.results if r.success]


# Type aliases for callback functions
ProgressCallback = Callable[[int, int, str], None]
ErrorCallback = Callable[[str, Exception], None]
AsyncProgressCallback = Callable[[int, int, str], Awaitable[None]]


class CQLToELMConverter:
    """Fluent API for converting CQL to ELM.

    This class provides a builder pattern interface for configuring and executing
    CQL to ELM conversions. It supports both single file and batch processing
    with comprehensive error handling and progress tracking.
    Example (usage)::

        converter = CQLToELMConverter()
        result = (
            converter
            .with_validation(strict=True)
            .with_optimization(True)
            .convert_file("library.cql")
        )

        if result.success:
            result.save_elm("library.json")
    """

    def __init__(self):
        """Initialize converter with default configuration."""
        self._cql_library: Optional[CQLLibrary] = None
        self._validator: Optional[SemanticValidator] = None
        self._elm_builder: Optional[ELMBuilder] = None

        # Configuration options
        self._validate_cql: bool = True
        self._strict_validation: bool = False
        self._validation_level: ValidationLevel = ValidationLevel.NORMAL
        self._enable_optimization: bool = False
        self._format_json: bool = True
        self._preserve_annotations: bool = True
        self._max_parallel_jobs: int = 4

        # Callbacks
        self._progress_callback: Optional[ProgressCallback] = None
        self._error_callback: Optional[ErrorCallback] = None
        self._async_progress_callback: Optional[AsyncProgressCallback] = None

    def with_library(self, cql_library: CQLLibrary) -> CQLToELMConverter:
        """Configure CQL library directly.

        Args:
            cql_library: CQL library object to convert

        Returns:
            Self for method chaining
        """
        self._cql_library = cql_library
        return self

    def with_validator(self, validator: SemanticValidator) -> CQLToELMConverter:
        """Configure custom semantic validator.

        Args:
            validator: Custom semantic validator instance

        Returns:
            Self for method chaining
        """
        self._validator = validator
        return self

    def with_validation(self, enabled: bool = True, strict: bool = False) -> CQLToELMConverter:
        """Configure validation options.

        Args:
            enabled: Whether to perform semantic validation
            strict: Whether to treat warnings as errors

        Returns:
            Self for method chaining
        """
        self._validate_cql = enabled
        self._strict_validation = strict
        return self

    def with_validation_level(self, level: ValidationLevel) -> CQLToELMConverter:
        """Configure validation strictness level.

        Args:
            level: ValidationLevel (STRICT, NORMAL, or PERMISSIVE)

        Returns:
            Self for method chaining
        """
        self._validation_level = level
        # Map validation level to boolean flags for compatibility
        if level == ValidationLevel.STRICT:
            self._validate_cql = True
            self._strict_validation = True
        elif level == ValidationLevel.NORMAL:
            self._validate_cql = True
            self._strict_validation = False
        elif level == ValidationLevel.PERMISSIVE:
            self._validate_cql = True
            self._strict_validation = False
        return self

    def with_optimization(self, enabled: bool = True) -> CQLToELMConverter:
        """Configure ELM optimization.

        Args:
            enabled: Whether to enable ELM optimizations

        Returns:
            Self for method chaining
        """
        self._enable_optimization = enabled
        return self

    def with_formatting(self, enabled: bool = True) -> CQLToELMConverter:
        """Configure JSON formatting for ELM output.

        Args:
            enabled: Whether to pretty-print JSON output with indentation

        Returns:
            Self for method chaining
        """
        self._format_json = enabled
        return self

    def with_annotations(self, preserve: bool = True) -> CQLToELMConverter:
        """Configure source annotation preservation.

        Args:
            preserve: Whether to preserve source annotations in ELM

        Returns:
            Self for method chaining
        """
        self._preserve_annotations = preserve
        return self

    def with_parallelism(self, max_jobs: int = 4) -> CQLToELMConverter:
        """Configure parallel processing for batch operations.

        Args:
            max_jobs: Maximum number of parallel conversion jobs

        Returns:
            Self for method chaining
        """
        self._max_parallel_jobs = max(1, max_jobs)
        return self

    def with_progress_callback(self, callback: ProgressCallback) -> CQLToELMConverter:
        """Configure progress tracking callback.

        Args:
            callback: Function called with (current, total, status) for progress updates

        Returns:
            Self for method chaining
        """
        self._progress_callback = callback
        return self

    def with_async_progress_callback(self, callback: AsyncProgressCallback) -> CQLToELMConverter:
        """Configure async progress tracking callback.

        Args:
            callback: Async function called with (current, total, status) for progress updates

        Returns:
            Self for method chaining
        """
        self._async_progress_callback = callback
        return self

    def with_error_callback(self, callback: ErrorCallback) -> CQLToELMConverter:
        """Configure error handling callback.

        Args:
            callback: Function called with (message, exception) for error handling

        Returns:
            Self for method chaining
        """
        self._error_callback = callback
        return self

    def convert_string(self, cql_content: str, source_name: str = "string") -> ConversionResult:
        """Convert CQL string to ELM.

        Args:
            cql_content: CQL content as string
            source_name: Name for error reporting

        Returns:
            ConversionResult with conversion details
        """
        start_time = time.perf_counter()
        result = ConversionResult()

        try:
            if self._progress_callback:
                self._progress_callback(0, 3, f"Parsing CQL content from {source_name}")

            parser = CQLParser()
            cql_library = parser.parse_string(cql_content, filename=source_name)
            result.cql_library = cql_library

            conversion_result = self.convert_library(cql_library)
            result.elm_document = conversion_result.elm_document
            result.validation_result = conversion_result.validation_result
            result.generation_result = conversion_result.generation_result
            result.success = conversion_result.success
            result.errors.extend(conversion_result.errors)
            result.warnings.extend(conversion_result.warnings)
        except CQLParseError as e:
            logger.error("CQL parsing failed for %s: %s", source_name, e)
            result.errors.append(f"Parse error: {e}")
            result.success = False
            if self._error_callback:
                self._error_callback(f"Parse error in {source_name}", e)
        except Exception as e:  # noqa: BLE001
            logger.exception("Unexpected error converting %s", source_name)
            result.errors.append(f"Conversion error: {e}")
            result.success = False
            if self._error_callback:
                self._error_callback(f"Conversion error in {source_name}", e)
        finally:
            end_time = time.perf_counter()
            result.processing_time_ms = (end_time - start_time) * 1000

        return result

    def convert_library(self, cql_library: CQLLibrary) -> ConversionResult:
        """Convert CQL library to ELM.

        Args:
            cql_library: The CQL library to convert

        Returns:
            ConversionResult with conversion details
        """
        start_time = time.perf_counter()

        result = ConversionResult()
        result.cql_library = cql_library

        try:
            # Initialize components if needed
            self._ensure_components()

            # Validate if enabled
            if self._validate_cql:
                if self._progress_callback:
                    self._progress_callback(1, 3, f"Validating library {cql_library.name}")

                assert self._validator is not None, "Validator not initialized"
                validation_result = self._validator.validate_library(cql_library)
                result.validation_result = validation_result

                if not validation_result.success:
                    result.errors.extend([e.message for e in validation_result.errors])
                    if self._strict_validation and validation_result.warnings:
                        result.errors.extend([w.message for w in validation_result.warnings])

                    if result.errors:
                        result.success = False
                        return result

                result.warnings.extend([w.message for w in validation_result.warnings])

            # Generate ELM
            if self._progress_callback:
                self._progress_callback(2, 3, f"Generating ELM for library {cql_library.name}")

            assert self._elm_builder is not None, "ELMBuilder not initialized"
            generation_result = self._elm_builder.generate_elm(cql_library)
            result.generation_result = generation_result

            if generation_result.success:
                result.elm_document = generation_result.elm_document
                result.success = True
            else:
                result.errors.extend([e.message for e in generation_result.errors])

            result.warnings.extend(generation_result.warnings)

            if self._progress_callback:
                self._progress_callback(3, 3, f"Completed library {cql_library.name}")

        except Exception as e:
            logger.exception(f"Unexpected error converting library {cql_library.name}")
            result.errors.append(f"Unexpected error: {str(e)}")
            result.success = False

            if self._error_callback:
                self._error_callback(f"Failed to convert library {cql_library.name}", e)

        finally:
            end_time = time.perf_counter()
            result.processing_time_ms = (end_time - start_time) * 1000

        return result

    def convert_file(self, file_path: Union[str, Path]) -> ConversionResult:
        """Convert CQL file to ELM.

        Args:
            file_path: Path to CQL file

        Returns:
            ConversionResult with conversion details
        """
        file_path = Path(file_path)
        result = ConversionResult(source_file=file_path)

        try:
            if not file_path.exists():
                result.errors.append(f"File not found: {file_path}")
                return result

            if not file_path.is_file():
                result.errors.append(f"Path is not a file: {file_path}")
                return result

            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            result = self.convert_string(content, str(file_path))
            result.source_file = file_path

        except Exception as e:
            logger.exception(f"Failed to read file {file_path}")
            result.errors.append(f"Failed to read file: {str(e)}")
            result.success = False

            if self._error_callback:
                self._error_callback(f"Failed to read {file_path}", e)

        return result

    def convert_files(
        self,
        file_paths: List[Union[str, Path]],
        output_dir: Optional[Union[str, Path]] = None,
    ) -> BatchConversionResult:
        """Convert multiple CQL files to ELM.

        Args:
            file_paths: List of CQL file paths
            output_dir: Optional directory to save ELM files

        Returns:
            BatchConversionResult with conversion details
        """
        import time

        start_time = time.perf_counter()

        batch_result = BatchConversionResult(total_files=len(file_paths))

        for i, file_path in enumerate(file_paths):
            if self._progress_callback:
                self._progress_callback(i + 1, len(file_paths), f"Converting {file_path}")

            result = self.convert_file(file_path)
            batch_result.results.append(result)

            if result.success:
                batch_result.successful_conversions += 1

                # Save to output directory if specified
                if output_dir and result.elm_document:
                    output_path = Path(output_dir) / f"{Path(file_path).stem}.json"
                    result.save_elm(output_path)
            else:
                batch_result.failed_conversions += 1

        end_time = time.perf_counter()
        batch_result.total_processing_time_ms = (end_time - start_time) * 1000

        return batch_result

    async def convert_files_async(
        self,
        file_paths: List[Union[str, Path]],
        output_dir: Optional[Union[str, Path]] = None,
    ) -> BatchConversionResult:
        """Convert multiple CQL files to ELM asynchronously.

        Args:
            file_paths: List of CQL file paths
            output_dir: Optional directory to save ELM files

        Returns:
            BatchConversionResult with conversion details
        """
        import time

        start_time = time.perf_counter()

        batch_result = BatchConversionResult(total_files=len(file_paths))

        # Create semaphore to limit concurrent operations
        semaphore = asyncio.Semaphore(self._max_parallel_jobs)

        async def convert_single(i: int, file_path: Union[str, Path]) -> ConversionResult:
            async with semaphore:
                if self._async_progress_callback:
                    await self._async_progress_callback(
                        i + 1, len(file_paths), f"Converting {file_path}"
                    )

                # Run conversion in thread pool to avoid blocking
                loop = asyncio.get_running_loop()
                result = await loop.run_in_executor(None, self.convert_file, file_path)

                # Save to output directory if specified
                if output_dir and result.elm_document and result.success:
                    output_path = Path(output_dir) / f"{Path(file_path).stem}.json"
                    await loop.run_in_executor(None, result.save_elm, output_path)

                return result

        # Process all files concurrently
        tasks = [convert_single(i, path) for i, path in enumerate(file_paths)]
        results = await asyncio.gather(*tasks, return_exceptions=True)

        # Process results
        for result in results:
            if isinstance(result, Exception):
                error_result = ConversionResult()
                error_result.errors.append(f"Async conversion error: {str(result)}")
                batch_result.results.append(error_result)
                batch_result.failed_conversions += 1
            elif isinstance(result, ConversionResult):
                batch_result.results.append(result)
                if result.success:
                    batch_result.successful_conversions += 1
                else:
                    batch_result.failed_conversions += 1

        end_time = time.perf_counter()
        batch_result.total_processing_time_ms = (end_time - start_time) * 1000

        return batch_result

    def validate_only(self, file_path: Union[str, Path]) -> ConversionResult:
        """Validate CQL file without generating ELM.

        Args:
            file_path: Path to CQL file

        Returns:
            ConversionResult with validation details only
        """
        # Temporarily disable ELM generation
        original_validate = self._validate_cql
        self._validate_cql = True

        try:
            result = self.convert_file(file_path)
            # Clear ELM generation results for validation-only operation
            result.elm_document = None
            result.generation_result = None
            return result
        finally:
            self._validate_cql = original_validate

    def _ensure_components(self) -> None:
        """Ensure all required components are initialized."""
        if self._validator is None:
            self._validator = SemanticValidator(validation_level=self._validation_level)

        if self._elm_builder is None:
            self._elm_builder = ELMBuilder(
                semantic_validator=self._validator,
                preserve_annotations=self._preserve_annotations,
                optimize=self._enable_optimization,
            )


# Convenience functions for simple use cases
def convert_cql_library(
    cql_library: CQLLibrary, validate: bool = True, optimize: bool = False
) -> ConversionResult:
    """Convert CQL library to ELM with default settings.

    Args:
        cql_library: CQL library object to convert
        validate: Whether to perform semantic validation
        optimize: Whether to enable ELM optimizations

    Returns:
        ConversionResult with conversion details
    """
    converter = CQLToELMConverter()
    return (
        converter.with_validation(validate).with_optimization(optimize).convert_library(cql_library)
    )


def convert_cql_string(
    cql_content: str, validate: bool = True, optimize: bool = False
) -> ConversionResult:
    """Convert CQL string to ELM with default settings.

    Args:
        cql_content: CQL content as string
        validate: Whether to perform semantic validation
        optimize: Whether to enable ELM optimizations

    Returns:
        ConversionResult with conversion details
    """
    converter = CQLToELMConverter()
    return (
        converter.with_validation(validate).with_optimization(optimize).convert_string(cql_content)
    )


def convert_cql_file(
    file_path: Union[str, Path],
    output_path: Optional[Union[str, Path]] = None,
    validate: bool = True,
    optimize: bool = False,
) -> ConversionResult:
    """Convert CQL file to ELM with default settings.

    Note: CQL parsing not yet implemented. This will return an error.

    Args:
        file_path: Path to CQL file
        output_path: Optional path to save ELM JSON
        validate: Whether to perform semantic validation
        optimize: Whether to enable ELM optimizations

    Returns:
        ConversionResult with conversion details
    """
    converter = CQLToELMConverter()
    result = converter.convert_file(file_path)

    if output_path and result.success:
        result.save_elm(output_path)

    return result


def validate_cql_file(file_path: Union[str, Path]) -> ConversionResult:
    """Validate CQL file without generating ELM.

    Note: CQL parsing not yet implemented. This will return an error.

    Args:
        file_path: Path to CQL file

    Returns:
        ConversionResult with validation details only
    """
    converter = CQLToELMConverter()
    return converter.validate_only(file_path)
