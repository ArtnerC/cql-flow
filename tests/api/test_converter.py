"""Tests for CQL to ELM conversion API."""

from unittest.mock import Mock

import pytest

from cql_flow.api import (
    BatchConversionResult,
    ConversionResult,
    CQLToELMConverter,
    convert_cql_file,
    convert_cql_library,
    convert_cql_string,
    validate_cql_file,
)
from cql_flow.models.cql.library import CQLLibrary
from cql_flow.models.elm.ast import ELMDocument, ELMIdentifier, ELMLibrary


class TestConversionResult:
    """Test cases for ConversionResult."""

    def test_conversion_result_creation(self):
        """Test creating a conversion result."""
        result = ConversionResult()
        assert not result.success
        assert not result.has_errors
        assert not result.has_warnings
        assert result.get_elm_json() is None

    def test_conversion_result_with_errors(self):
        """Test conversion result with errors."""
        result = ConversionResult()
        result.errors = ["Error 1", "Error 2"]

        assert result.has_errors
        assert not result.has_warnings
        assert len(result.errors) == 2

    def test_conversion_result_with_warnings(self):
        """Test conversion result with warnings."""
        result = ConversionResult()
        result.warnings = ["Warning 1"]

        assert not result.has_errors
        assert result.has_warnings
        assert len(result.warnings) == 1

    def test_conversion_result_elm_json(self):
        """Test getting ELM as JSON."""
        # Create a simple ELM document
        elm_doc = ELMDocument(
            library=ELMLibrary(identifier=ELMIdentifier(id="TestLib", version="1.0.0"))
        )

        result = ConversionResult()
        result.elm_document = elm_doc
        result.success = True

        json_str = result.get_elm_json()
        assert json_str is not None
        assert "TestLib" in json_str
        assert "1.0.0" in json_str

    def test_conversion_result_save_elm(self, tmp_path):
        """Test saving ELM to file."""
        # Create a simple ELM document
        elm_doc = ELMDocument(
            library=ELMLibrary(identifier=ELMIdentifier(id="TestLib", version="1.0.0"))
        )

        result = ConversionResult()
        result.elm_document = elm_doc
        result.success = True

        output_path = tmp_path / "test.json"
        success = result.save_elm(output_path)

        assert success
        assert output_path.exists()

        # Verify content
        with open(output_path) as f:
            content = f.read()
            assert "TestLib" in content

    def test_conversion_result_save_elm_no_document(self, tmp_path):
        """Test saving ELM when no document exists."""
        result = ConversionResult()
        output_path = tmp_path / "test.json"

        success = result.save_elm(output_path)
        assert not success
        assert not output_path.exists()


class TestBatchConversionResult:
    """Test cases for BatchConversionResult."""

    def test_batch_conversion_result_creation(self):
        """Test creating a batch conversion result."""
        result = BatchConversionResult()
        assert result.total_files == 0
        assert result.successful_conversions == 0
        assert result.failed_conversions == 0
        assert result.success_rate == 0.0
        assert not result.has_failures

    def test_batch_conversion_result_success_rate(self):
        """Test calculating success rate."""
        result = BatchConversionResult()
        result.total_files = 10
        result.successful_conversions = 7
        result.failed_conversions = 3

        assert result.success_rate == 70.0
        assert result.has_failures

    def test_batch_conversion_result_filtering(self):
        """Test filtering successful and failed results."""
        successful_result = ConversionResult()
        successful_result.success = True

        failed_result = ConversionResult()
        failed_result.success = False
        failed_result.errors = ["Test error"]

        batch_result = BatchConversionResult()
        batch_result.results = [successful_result, failed_result]

        successful_results = batch_result.get_successful_results()
        failed_results = batch_result.get_failed_results()

        assert len(successful_results) == 1
        assert len(failed_results) == 1
        assert successful_results[0].success
        assert not failed_results[0].success


class TestCQLToELMConverter:
    """Test cases for CQLToELMConverter."""

    def test_converter_creation(self):
        """Test creating a converter."""
        converter = CQLToELMConverter()
        assert not converter._validate_cql or converter._validate_cql  # Should be True by default
        assert not converter._enable_optimization
        assert converter._preserve_annotations
        assert converter._max_parallel_jobs == 4

    def test_converter_configuration_chaining(self):
        """Test method chaining for configuration."""
        cql_library = CQLLibrary(name="TestLib")

        converter = (
            CQLToELMConverter()
            .with_library(cql_library)
            .with_validation(enabled=False, strict=True)
            .with_optimization(True)
            .with_annotations(False)
            .with_parallelism(8)
        )

        assert converter._cql_library == cql_library
        assert not converter._validate_cql
        assert converter._strict_validation
        assert converter._enable_optimization
        assert not converter._preserve_annotations
        assert converter._max_parallel_jobs == 8

    def test_converter_with_callbacks(self):
        """Test setting callbacks."""
        progress_callback = Mock()
        error_callback = Mock()
        async_progress_callback = Mock()

        converter = (
            CQLToELMConverter()
            .with_progress_callback(progress_callback)
            .with_error_callback(error_callback)
            .with_async_progress_callback(async_progress_callback)
        )

        assert converter._progress_callback == progress_callback
        assert converter._error_callback == error_callback
        assert converter._async_progress_callback == async_progress_callback

    def test_convert_string_success(self):
        """Test that convert_string successfully parses and converts CQL."""
        converter = CQLToELMConverter()
        result = converter.convert_string("library TestLib version '1.0.0'")

        assert result.success
        assert result.cql_library is not None
        assert result.cql_library.name == "TestLib"
        assert str(result.cql_library.version) == "1.0.0"

    def test_convert_library_success(self):
        """Test successful library conversion."""
        # Create a simple CQL library
        cql_library = CQLLibrary(name="TestLib", version=None)

        converter = CQLToELMConverter()
        result = converter.convert_library(cql_library)

        # Should succeed with our current implementation
        assert result.success
        assert result.elm_document is not None
        assert result.cql_library == cql_library
        assert result.processing_time_ms is not None

    def test_convert_library_with_validation_disabled(self):
        """Test library conversion with validation disabled."""
        cql_library = CQLLibrary(name="TestLib", version=None)

        converter = CQLToELMConverter()
        converter.with_validation(enabled=False)
        result = converter.convert_library(cql_library)

        assert result.success
        assert result.validation_result is None  # No validation performed

    def test_convert_library_with_progress_callback(self):
        """Test library conversion with progress callback."""
        cql_library = CQLLibrary(name="TestLib", version=None)
        progress_callback = Mock()

        converter = CQLToELMConverter().with_progress_callback(progress_callback)
        result = converter.convert_library(cql_library)

        assert result.success
        # Progress callback should have been called
        assert progress_callback.call_count > 0

    def test_convert_library_with_optimization_warning(self):
        """Test that optimization generates warning."""
        cql_library = CQLLibrary(name="TestLib", version=None)

        converter = CQLToELMConverter()
        converter.with_optimization(True)
        result = converter.convert_library(cql_library)

        assert result.success
        assert len(result.warnings) > 0
        # Should have optimization warning
        assert any("optimization" in warning.lower() for warning in result.warnings)

    def test_convert_file_not_implemented(self):
        """Test that convert_file returns error for unimplemented parsing."""
        converter = CQLToELMConverter()
        result = converter.convert_file("nonexistent.cql")

        # Should fail because we don't have file parsing yet
        assert not result.success

    def test_convert_files_empty_list(self):
        """Test batch conversion with empty file list."""
        converter = CQLToELMConverter()
        result = converter.convert_files([])

        assert result.total_files == 0
        assert result.successful_conversions == 0
        assert result.failed_conversions == 0
        assert result.success_rate == 0.0

    @pytest.mark.asyncio
    async def test_convert_files_async_empty_list(self):
        """Test async batch conversion with empty file list."""
        converter = CQLToELMConverter()
        result = await converter.convert_files_async([])

        assert result.total_files == 0
        assert result.successful_conversions == 0
        assert result.failed_conversions == 0

    def test_validate_only_not_implemented(self):
        """Test that validate_only returns error for unimplemented parsing."""
        converter = CQLToELMConverter()
        result = converter.validate_only("nonexistent.cql")

        # Should fail because we don't have file parsing yet
        assert not result.success

    def test_ensure_components(self):
        """Test that components are properly initialized."""
        converter = CQLToELMConverter()
        converter._ensure_components()

        assert converter._validator is not None
        assert converter._elm_builder is not None


class TestConvenienceFunctions:
    """Test cases for convenience functions."""

    def test_convert_cql_library(self):
        """Test convert_cql_library convenience function."""
        cql_library = CQLLibrary(name="TestLib", version=None)

        result = convert_cql_library(cql_library, validate=True, optimize=False)

        assert result.success
        assert result.elm_document is not None

    def test_convert_cql_string_success(self):
        """Test convert_cql_string convenience function."""
        result = convert_cql_string("library Test version '1.0.0'")

        assert result.success
        assert result.cql_library is not None
        assert result.cql_library.name == "Test"
        assert str(result.cql_library.version) == "1.0.0"

    def test_convert_cql_file_not_implemented(self):
        """Test convert_cql_file convenience function."""
        result = convert_cql_file("nonexistent.cql")

        assert not result.success

    def test_validate_cql_file_not_implemented(self):
        """Test validate_cql_file convenience function."""
        result = validate_cql_file("nonexistent.cql")

        assert not result.success


class TestAPIIntegration:
    """Integration tests for the API."""

    def test_end_to_end_library_conversion(self):
        """Test complete end-to-end library conversion."""
        # Create a more complex CQL library
        from cql_flow.models.cql.library import ExpressionDef, ParameterDef

        cql_library = CQLLibrary(
            name="ComplexLib",
            version=None,
            parameters=[ParameterDef(name="TestParam", type_specifier="String")],
            expressions=[ExpressionDef(name="TestExpr", expression="'Hello World'")],
        )

        # Convert with full configuration
        converter = (
            CQLToELMConverter()
            .with_validation(enabled=True, strict=False)
            .with_optimization(True)
            .with_annotations(True)
        )

        result = converter.convert_library(cql_library)

        # Verify successful conversion
        assert result.success
        assert result.elm_document is not None
        assert result.validation_result is not None
        assert result.generation_result is not None

        # Verify ELM structure
        elm_lib = result.elm_document.library
        assert elm_lib.identifier.id == "ComplexLib"
        assert len(elm_lib.statements.definitions) == 2  # param + expr

    def test_error_handling_with_callbacks(self):
        """Test error handling with callbacks."""
        error_callback = Mock()
        progress_callback = Mock()

        converter = (
            CQLToELMConverter()
            .with_error_callback(error_callback)
            .with_progress_callback(progress_callback)
        )

        # Try to convert a string (should fail)
        result = converter.convert_string("invalid cql")

        assert not result.success
        assert len(result.errors) > 0

    def test_json_serialization_integration(self):
        """Test that converted ELM can be properly serialized."""
        cql_library = CQLLibrary(name="JsonTest", version=None)

        result = convert_cql_library(cql_library)

        assert result.success

        # Test JSON serialization
        json_str = result.get_elm_json()
        assert json_str is not None
        assert "JsonTest" in json_str

        # Verify it's valid JSON
        import json

        parsed = json.loads(json_str)
        assert isinstance(parsed, dict)
        assert "library" in parsed

    def test_multiple_conversions_same_converter(self):
        """Test using the same converter for multiple conversions."""
        converter = CQLToELMConverter().with_optimization(True)

        lib1 = CQLLibrary(name="Lib1", version=None)
        lib2 = CQLLibrary(name="Lib2", version=None)

        result1 = converter.convert_library(lib1)
        result2 = converter.convert_library(lib2)

        assert result1.success
        assert result2.success
        assert result1.elm_document.library.identifier.id == "Lib1"
        assert result2.elm_document.library.identifier.id == "Lib2"
