"""Example usage of the CQL to ELM conversion API."""

from cql_flow.api import CQLToELMConverter, convert_cql_library
from cql_flow.models.cql.library import (
    CQLLibrary,
    ExpressionDef,
    ParameterDef,
    UsingStatement,
)


def basic_example():
    """Basic example of converting a CQL library to ELM."""
    print("=== Basic CQL to ELM Conversion Example ===")

    # Create a simple CQL library
    cql_library = CQLLibrary(
        name="ExampleLibrary",
        version=None,
        using_statements=[UsingStatement(model_identifier="FHIR", version=None)],
        parameters=[
            ParameterDef(name="MeasurementPeriod", type_specifier="Interval<DateTime>")
        ],
        expressions=[ExpressionDef(name="InInitialPopulation", expression="true")],
    )

    # Convert using convenience function
    result = convert_cql_library(cql_library, validate=True, optimize=False)

    if result.success:
        print("✅ Conversion successful!")
        print(f"   Processing time: {result.processing_time_ms:.2f}ms")
        print(f"   Warnings: {len(result.warnings)}")

        # Get ELM as JSON
        elm_json = result.get_elm_json(indent=2)
        print(f"   ELM JSON length: {len(elm_json)} characters")

        # Show a snippet of the ELM
        print("\n📄 ELM snippet:")
        lines = elm_json.split("\n")
        for i, line in enumerate(lines[:10]):
            print(f"   {line}")
        if len(lines) > 10:
            print(f"   ... ({len(lines) - 10} more lines)")

    else:
        print("❌ Conversion failed!")
        for error in result.errors:
            print(f"   Error: {error}")


def fluent_api_example():
    """Example using the fluent API with method chaining."""
    print("\n=== Fluent API Example ===")

    # Create a more complex CQL library
    cql_library = CQLLibrary(
        name="QualityMeasure",
        version=None,
        using_statements=[
            UsingStatement(model_identifier="FHIR", version=None),
            UsingStatement(model_identifier="CDS", version=None),
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
                expression="AgeInYearsAt(start of MeasurementPeriod) >= 18",
            ),
            ExpressionDef(name="Denominator", expression="InitialPopulation"),
            ExpressionDef(
                name="Numerator", expression="Denominator and HasQualifyingEncounter"
            ),
        ],
    )

    # Progress callback to track conversion
    def progress_callback(current: int, total: int, status: str):
        percentage = (current / total) * 100
        print(f"   📊 Progress: {percentage:.0f}% - {status}")

    # Error callback for error handling
    def error_callback(message: str, exception: Exception):
        print(f"   🚨 Error callback: {message}")

    # Use fluent API with full configuration
    converter = (
        CQLToELMConverter()
        .with_validation(enabled=True, strict=False)
        .with_optimization(True)
        .with_annotations(preserve=True)
        .with_progress_callback(progress_callback)
        .with_error_callback(error_callback)
    )

    result = converter.convert_library(cql_library)

    if result.success:
        print("✅ Fluent API conversion successful!")

        # Show validation results
        if result.validation_result:
            print(
                f"   🔍 Validation: {len(result.validation_result.errors)} errors, {len(result.validation_result.warnings)} warnings"
            )

        # Show generation results
        if result.generation_result:
            print(
                f"   🔧 Generation: {len(result.generation_result.errors)} errors, {len(result.generation_result.warnings)} warnings"
            )

        # Show library structure
        elm_lib = result.elm_document.library
        print(f"   📚 Library: {elm_lib.identifier.id}")
        print(f"   🔧 Using statements: {len(elm_lib.usings.definitions)}")
        print(f"   📝 Statements: {len(elm_lib.statements.definitions)}")

        # Show any warnings from optimization
        if result.warnings:
            print("   ⚠️  Warnings:")
            for warning in result.warnings:
                print(f"      - {warning}")

    else:
        print("❌ Fluent API conversion failed!")
        for error in result.errors:
            print(f"   Error: {error}")


def error_handling_example():
    """Example demonstrating error handling."""
    print("\n=== Error Handling Example ===")

    # Create a library that might have validation issues
    # Note: We'll use a valid library but force an error during conversion
    cql_library = CQLLibrary(name="TestLib", version=None)

    # Test with an invalid configuration to demonstrate error handling
    converter = CQLToELMConverter()

    # First, show a successful conversion
    result = converter.convert_library(cql_library)

    if result.success:
        print("✅ Basic conversion successful (as expected)")

    # Now demonstrate string parsing limitation (expected error)
    print("\n📝 Testing CQL string parsing (expected to fail):")
    result = converter.convert_string("library Test version '1.0.0'")

    if not result.success:
        print("❌ Expected failure occurred!")
        print(f"   Errors ({len(result.errors)}):")
        for i, error in enumerate(result.errors, 1):
            print(f"   {i}. {error}")

    if result.warnings:
        print(f"   Warnings ({len(result.warnings)}):")
        for i, warning in enumerate(result.warnings, 1):
            print(f"   {i}. {warning}")


def json_serialization_example():
    """Example showing ELM JSON serialization."""
    print("\n=== JSON Serialization Example ===")

    cql_library = CQLLibrary(
        name="SerializationExample",
        version=None,
        expressions=[ExpressionDef(name="SimpleExpression", expression="42")],
    )

    result = convert_cql_library(cql_library)

    if result.success:
        # Get ELM as formatted JSON
        elm_json = result.get_elm_json(indent=2)
        print("📄 Formatted ELM JSON:")
        print(elm_json)

        # Get ELM as compact JSON
        compact_json = result.get_elm_json(indent=None)
        print(f"\n📦 Compact ELM JSON ({len(compact_json)} chars):")
        print(compact_json[:100] + "..." if len(compact_json) > 100 else compact_json)

        # Save to file (using a temporary path for demo)
        import os
        import tempfile

        with tempfile.NamedTemporaryFile(mode="w", suffix=".json", delete=False) as f:
            temp_path = f.name

        try:
            success = result.save_elm(temp_path, indent=2)
            if success:
                print(f"\n💾 ELM saved to: {temp_path}")

                # Read back and verify
                with open(temp_path, "r") as f:
                    saved_content = f.read()
                print(f"   File size: {len(saved_content)} characters")
            else:
                print("❌ Failed to save ELM to file")
        finally:
            # Clean up temp file
            if os.path.exists(temp_path):
                os.unlink(temp_path)


def parser_limitation_example():
    """Example showing current parser limitations."""
    print("\n=== Parser Limitation Example ===")

    cql_content = """
    library ExampleLibrary version '1.0.0'
    
    using FHIR version '4.0.1'
    
    parameter MeasurementPeriod Interval<DateTime>
    
    define InitialPopulation:
        [Patient] P where AgeInYearsAt(start of MeasurementPeriod) >= 18
    """

    converter = CQLToELMConverter()
    result = converter.convert_string(cql_content)

    print("📝 Attempting to parse CQL string...")
    if not result.success:
        print("⚠️  Expected limitation:")
        for error in result.errors:
            print(f"   {error}")

        print("\n💡 Workaround: Create CQLLibrary objects directly:")
        print("   cql_library = CQLLibrary(name='ExampleLibrary', ...)")
        print("   result = converter.convert_library(cql_library)")


if __name__ == "__main__":
    """Run all examples."""
    basic_example()
    fluent_api_example()
    error_handling_example()
    json_serialization_example()
    parser_limitation_example()

    print("\n🎉 All examples completed!")
    print("\n📚 Next steps:")
    print("   - Implement CQL parser for string/file input")
    print("   - Add more expression types to CQL library models")
    print("   - Enhance ELM optimization algorithms")
    print("   - Create CLI interface (TASK-010)")
