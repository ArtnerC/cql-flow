"""Integration tests for end-to-end workflows."""
# type: ignore

import json
import tempfile
from pathlib import Path
from typing import Any, List

import pytest

from cql_flow.api import ConversionResult, CQLToELMConverter, convert_cql_library
from cql_flow.models.common.source_info import SourceInfo
from cql_flow.models.cql.expressions import (
    BinaryExpression,
    BooleanLiteral,
    IdentifierRef,
    IntegerLiteral,
    StringLiteral,
)
from cql_flow.models.cql.library import (
    CQLLibrary,
    ExpressionDef,
    ParameterDef,
    UsingStatement,
    VersionSpecifier,
)


class TestEndToEndWorkflows:
    """End-to-end integration tests."""

    @pytest.mark.integration
    def test_complete_library_conversion_workflow(self):
        """Test complete workflow from CQL library to ELM JSON."""
        # Create a comprehensive CQL library
        cql_library = CQLLibrary(
            name="IntegrationTest",
            version=VersionSpecifier(version="1.0.0"),
            using_statements=[
                UsingStatement(model_identifier="FHIR", version=VersionSpecifier(version="4.0.1")),
                UsingStatement(model_identifier="QDM", version=VersionSpecifier(version="5.6")),
            ],
            parameters=[
                ParameterDef(name="MeasurementPeriod", type_specifier="Interval<DateTime>"),
                ParameterDef(
                    name="ProductLine",
                    type_specifier="String",
                    default_value="'commercial'",
                ),
            ],
            expressions=[
                # TODO: Implement function calls - AgeInYearsAt(start of MeasurementPeriod) >= 18
                ExpressionDef(
                    name="InitialPopulation",
                    expression=BinaryExpression(
                        left=IntegerLiteral(value=25),
                        operator=">=",
                        right=IntegerLiteral(value=18),
                    ),
                    expression_text="25 >= 18",  # Simplified for now
                ),
                # TODO: Implement identifier references - InitialPopulation
                ExpressionDef(
                    name="Denominator",
                    expression=BooleanLiteral(value=True),
                    expression_text="true",  # Simplified for now
                ),
                # TODO: Implement complex binary expressions with identifiers - Denominator and HasQualifyingEncounter
                ExpressionDef(
                    name="Numerator",
                    expression=BinaryExpression(
                        left=BooleanLiteral(value=True),
                        operator="and",
                        right=BooleanLiteral(value=False),
                    ),
                    expression_text="true and false",  # Simplified for now
                ),
            ],
        )

        # Convert using the API
        converter = (
            CQLToELMConverter()
            .with_validation(enabled=True, strict=False)
            .with_optimization(True)
            .with_annotations(preserve=True)
        )

        result = converter.convert_library(cql_library)

        # Verify conversion success
        assert result.success
        assert result.elm_document is not None
        assert result.validation_result is not None
        assert result.generation_result is not None

        # Verify ELM structure
        elm_lib = result.elm_document.library
        assert elm_lib.identifier.id == "IntegrationTest"
        assert elm_lib.identifier.version == "1.0.0"

        # Verify using statements
        assert len(elm_lib.usings.definitions) == 2
        using_names = [u.uri for u in elm_lib.usings.definitions]
        assert "http://hl7.org/fhir" in using_names

        # Verify statements (parameters + expressions)
        assert len(elm_lib.statements.definitions) >= 5  # 2 params + 3 expressions

        # Verify JSON serialization
        elm_json = result.get_elm_json()
        assert elm_json is not None

        # Parse JSON to verify it's valid
        parsed_json = json.loads(elm_json)
        assert "library" in parsed_json
        assert parsed_json["library"]["identifier"]["id"] == "IntegrationTest"

    @pytest.mark.integration
    def test_file_based_conversion_workflow(self):
        """Test file-based conversion workflow."""
        # Create a simple library directly (parser integration tested separately)
        cql_library = CQLLibrary(
            name="FileBasedTest",
            version=None,
            using_statements=[UsingStatement(model_identifier="FHIR", version=None)],
            parameters=[
                ParameterDef(name="MeasurementPeriod", type_specifier="Interval<DateTime>")
            ],
            expressions=[
                # TODO: Implement function calls - AgeInYearsAt(start of MeasurementPeriod) >= 18
                ExpressionDef(
                    name="InitialPopulation",
                    expression=BinaryExpression(
                        left=IntegerLiteral(value=25),
                        operator=">=",
                        right=IntegerLiteral(value=18),
                    ),
                    expression_text="25 >= 18",  # Simplified for now
                ),
                # TODO: Implement identifier references - InitialPopulation
                ExpressionDef(
                    name="Denominator",
                    expression=BooleanLiteral(value=True),
                    expression_text="true",  # Simplified for now
                ),
            ],
        )

        # Convert the library
        result = convert_cql_library(cql_library, validate=True, optimize=False)

        assert result.success
        assert result.elm_document is not None

        # Save ELM to file
        with tempfile.NamedTemporaryFile(mode="w", suffix=".json", delete=False) as elm_file:
            elm_file_path = Path(elm_file.name)

        try:
            success = result.save_elm(elm_file_path)
            assert success
            assert elm_file_path.exists()

            # Verify saved ELM file
            with open(elm_file_path, "r") as f:
                saved_elm = json.load(f)

            assert saved_elm["library"]["identifier"]["id"] == "FileBasedTest"

        finally:
            # Clean up temporary files
            if elm_file_path.exists():
                elm_file_path.unlink()

    @pytest.mark.integration
    def test_batch_conversion_integration(self):
        """Test batch conversion of multiple libraries."""
        # Create multiple CQL libraries
        libraries: List[CQLLibrary] = []
        for i in range(5):
            lib = CQLLibrary(
                name=f"BatchLib{i}",
                version=VersionSpecifier(version="1.0.0"),
                using_statements=[UsingStatement(model_identifier="FHIR", version=None)],
                parameters=[ParameterDef(name="TestParam", type_specifier="String")],
                expressions=[
                    ExpressionDef(
                        name=f"Expression{j}",
                        expression=StringLiteral(value=f"value {j}", source_info=SourceInfo()),
                        expression_text=f"'value {j}'",
                    )
                    for j in range(3)
                ],
            )
            libraries.append(lib)

        # Convert all libraries
        converter = CQLToELMConverter().with_validation(enabled=True)
        results: List[ConversionResult] = []

        for lib in libraries:
            result = converter.convert_library(lib)
            results.append(result)

        # Verify all conversions succeeded
        assert all(r.success for r in results)
        assert len(results) == 5

        # Verify each result has correct structure
        for i, result in enumerate(results):
            assert result.elm_document is not None  # type: ignore
            assert result.elm_document.library.identifier.id == f"BatchLib{i}"  # type: ignore

    @pytest.mark.integration
    def test_error_handling_integration(self):
        """Test error handling in end-to-end workflow."""
        # Create a library with validation errors
        invalid_library = CQLLibrary(
            name="ErrorTest",
            version=None,
            expressions=[
                # This should cause a validation error (undefined reference)
                ExpressionDef(name="InvalidExpr", expression_text="UndefinedSymbol + 42"),
            ],
        )

        # Convert with strict validation
        converter = CQLToELMConverter().with_validation(enabled=True, strict=True)
        result = converter.convert_library(invalid_library)

        # Should fail validation
        assert not result.success
        assert len(result.errors) > 0
        assert result.validation_result is not None
        assert not result.validation_result.success

    @pytest.mark.integration
    def test_optimization_integration(self):
        """Test optimization integration in workflow."""
        # Create library that can benefit from optimization
        cql_library = CQLLibrary(
            name="OptimizationTest",
            version=None,
            expressions=[
                ExpressionDef(
                    name="Constant1",
                    expression=IntegerLiteral(value=42),
                    expression_text="42",
                ),
                # TODO: Implement identifier references - Constant1 + 0
                ExpressionDef(
                    name="Constant2",
                    expression=BinaryExpression(
                        left=IntegerLiteral(value=42),
                        operator="+",
                        right=IntegerLiteral(value=0),
                    ),
                    expression_text="42 + 0",  # Simplified for now
                ),  # Can be optimized
                # TODO: Implement identifier references - Constant2 * 1
                ExpressionDef(
                    name="Identity",
                    expression=BinaryExpression(
                        left=IntegerLiteral(value=42),
                        operator="*",
                        right=IntegerLiteral(value=1),
                    ),
                    expression_text="42 * 1",  # Simplified for now
                ),  # Can be optimized
            ],
        )

        # Convert with optimization enabled
        converter = CQLToELMConverter().with_optimization(True)
        result = converter.convert_library(cql_library)

        assert result.success
        assert result.elm_document is not None

        # Should have optimization warnings
        assert len(result.warnings) > 0
        assert any("optimization" in warning.lower() for warning in result.warnings)

    @pytest.mark.integration
    def test_validation_levels_integration(self):
        """Test different validation levels in integration."""
        # Create library with minor issues
        cql_library = CQLLibrary(
            name="ValidationLevelTest",
            version=None,
            parameters=[
                # Unused parameter (should generate warning)
                ParameterDef(name="UnusedParam", type_specifier="String"),
            ],
            expressions=[
                ExpressionDef(
                    name="SimpleExpr",
                    expression=IntegerLiteral(value=42),
                    expression_text="42",
                ),
            ],
        )

        # Test with different validation levels
        from cql_flow.validator.rules import ValidationLevel

        # Strict validation
        strict_converter = CQLToELMConverter().with_validation_level(ValidationLevel.STRICT)
        strict_result = strict_converter.convert_library(cql_library)

        # Normal validation
        normal_converter = CQLToELMConverter().with_validation_level(ValidationLevel.NORMAL)
        normal_result = normal_converter.convert_library(cql_library)

        # Permissive validation
        permissive_converter = CQLToELMConverter().with_validation_level(ValidationLevel.PERMISSIVE)
        permissive_result = permissive_converter.convert_library(cql_library)

        # All should succeed but with different warning levels
        assert strict_result.success
        assert normal_result.success
        assert permissive_result.success

        # Strict should have more warnings/errors than permissive
        strict_total = len(strict_result.errors) + len(strict_result.warnings)
        permissive_total = len(permissive_result.errors) + len(permissive_result.warnings)
        assert strict_total >= permissive_total


class TestAPIIntegration:
    """Integration tests for API components working together."""

    @pytest.mark.integration
    def test_fluent_api_integration(self):
        """Test fluent API integration with all components."""
        cql_library = CQLLibrary(
            name="FluentAPITest",
            version=None,
            using_statements=[UsingStatement(model_identifier="FHIR", version=None)],
            expressions=[
                ExpressionDef(
                    name="TestExpr",
                    expression=BooleanLiteral(value=True, source_info=SourceInfo()),
                    expression_text="true",
                ),
            ],
        )

        # Progress tracking
        progress_calls: List[Any] = []

        def track_progress(current, total, status):  # type: ignore
            progress_calls.append((current, total, status))

        # Error tracking
        error_calls: List[Any] = []

        def track_errors(message, exception):  # type: ignore
            error_calls.append((message, str(exception)))

        # Use fluent API with all features
        converter = (
            CQLToELMConverter()
            .with_validation(enabled=True, strict=False)
            .with_optimization(True)
            .with_annotations(preserve=True)
            .with_formatting(enabled=True)
            .with_progress_callback(track_progress)
            .with_error_callback(track_errors)
        )

        result = converter.convert_library(cql_library)

        # Verify success
        assert result.success
        assert result.elm_document is not None

        # Verify callbacks were called
        assert len(progress_calls) > 0
        # Error callback should not be called for successful conversion
        assert len(error_calls) == 0

        # Verify JSON formatting
        elm_json = result.get_elm_json(indent=2)
        assert elm_json is not None
        assert "\n" in elm_json  # Should be formatted with newlines

    @pytest.mark.integration
    def test_component_integration_consistency(self):
        """Test that all components work together consistently."""
        # Create the same library multiple times
        base_library = CQLLibrary(
            name="ConsistencyTest",
            version=VersionSpecifier(version="1.0.0"),
            expressions=[
                ExpressionDef(
                    name="Expr1",
                    expression=IntegerLiteral(value=42, source_info=SourceInfo()),
                    expression_text="42",
                ),
                ExpressionDef(
                    name="Expr2",
                    expression=BinaryExpression(
                        left=IdentifierRef(name="Expr1", source_info=SourceInfo()),
                        operator="+",
                        right=IntegerLiteral(value=1, source_info=SourceInfo()),
                        source_info=SourceInfo(),
                    ),
                    expression_text="Expr1 + 1",
                ),
            ],
        )

        # Convert multiple times with same settings
        converter = CQLToELMConverter().with_validation(enabled=True)

        results = []
        for i in range(3):
            result = converter.convert_library(base_library)
            results.append(result)

        # All results should be successful and consistent
        assert all(r.success for r in results)

        # ELM JSON should be identical
        json_results = [r.get_elm_json() for r in results]
        assert all(json_str == json_results[0] for json_str in json_results)

        # Validation results should be consistent
        validation_results = [r.validation_result for r in results]
        assert all(v.success == validation_results[0].success for v in validation_results)


class TestRealWorldScenarios:
    """Integration tests for real-world usage scenarios."""

    @pytest.mark.integration
    def test_quality_measure_scenario(self):
        """Test a realistic quality measure scenario."""
        # Create a quality measure-like library
        quality_measure = CQLLibrary(
            name="DiabetesHbA1cTest",
            version=VersionSpecifier(version="2.0.0"),
            using_statements=[
                UsingStatement(model_identifier="FHIR", version=VersionSpecifier(version="4.0.1")),
            ],
            parameters=[
                ParameterDef(name="MeasurementPeriod", type_specifier="Interval<DateTime>"),
                ParameterDef(
                    name="ProductLine",
                    type_specifier="String",
                    default_value="'commercial'",
                ),
            ],
            expressions=[
                ExpressionDef(
                    name="InitialPopulation",
                    expression="AgeInYearsAt(start of MeasurementPeriod) >= 18 and AgeInYearsAt(start of MeasurementPeriod) <= 75",
                ),
                ExpressionDef(
                    name="DiabetesConditions",
                    expression="[Condition: \"Diabetes\"] C where C.clinicalStatus = 'active'",
                ),
                ExpressionDef(name="HasDiabetes", expression="exists(DiabetesConditions)"),
                ExpressionDef(name="Denominator", expression="InitialPopulation and HasDiabetes"),
                ExpressionDef(
                    name="HbA1cTests",
                    expression='[Observation: "HbA1c Test"] O where O.effective during MeasurementPeriod',
                ),
                ExpressionDef(name="HasRecentHbA1cTest", expression="exists(HbA1cTests)"),
                ExpressionDef(name="Numerator", expression="Denominator and HasRecentHbA1cTest"),
            ],
        )

        # Convert with realistic settings
        converter = (
            CQLToELMConverter()
            .with_validation(enabled=True, strict=False)
            .with_optimization(True)
            .with_annotations(preserve=True)
        )

        result = converter.convert_library(quality_measure)

        # Verify successful conversion
        assert result.success
        assert result.elm_document is not None

        # Verify measure structure
        elm_lib = result.elm_document.library
        assert elm_lib.identifier.id == "DiabetesHbA1cTest"
        assert elm_lib.identifier.version == "2.0.0"

        # Should have proper population definitions
        statement_names = [stmt.name for stmt in elm_lib.statements.definitions]
        assert "InitialPopulation" in statement_names
        assert "Denominator" in statement_names
        assert "Numerator" in statement_names

    @pytest.mark.integration
    def test_library_dependency_scenario(self):
        """Test scenario with library dependencies."""
        # Create a common library
        common_lib = CQLLibrary(
            name="Common",
            version=VersionSpecifier(version="1.0.0"),
            expressions=[
                ExpressionDef(name="IsAdult", expression="AgeInYears() >= 18"),
                ExpressionDef(name="IsElderly", expression="AgeInYears() >= 65"),
            ],
        )

        # Create a library that would depend on Common
        dependent_lib = CQLLibrary(
            name="DependentMeasure",
            version=VersionSpecifier(version="1.0.0"),
            # Note: In a real scenario, this would have include statements
            # For this test, we'll create standalone expressions
            expressions=[
                ExpressionDef(name="AdultPopulation", expression="AgeInYears() >= 18"),
                ExpressionDef(name="ElderlyPopulation", expression="AgeInYears() >= 65"),
                ExpressionDef(
                    name="MiddleAgedPopulation",
                    expression="AdultPopulation and not ElderlyPopulation",
                ),
            ],
        )

        # Convert both libraries
        converter = CQLToELMConverter().with_validation(enabled=True)

        common_result = converter.convert_library(common_lib)
        dependent_result = converter.convert_library(dependent_lib)

        # Both should convert successfully
        assert common_result.success
        assert dependent_result.success

        # Verify library identities
        assert common_result.elm_document.library.identifier.id == "Common"
        assert dependent_result.elm_document.library.identifier.id == "DependentMeasure"
