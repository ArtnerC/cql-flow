"""Integration test demonstrating semantic validator usage."""

from cql_flow.models.cql.library import CQLLibrary, VersionSpecifier
from cql_flow.validator.semantic_validator import (
    SemanticValidator,
    ValidationLevel,
    ValidationOptions,
    create_validator,
)


def test_semantic_validator_integration():
    """Test semantic validator with a complete example."""

    # Create a simple library
    library = CQLLibrary(
        name="TestLibrary",
        version=VersionSpecifier("1.0.0"),
        expressions=[],
        include_statements=[],
    )

    # Create validator
    validator = SemanticValidator(validation_level=ValidationLevel.NORMAL)

    # Validate library
    result = validator.validate_library(library)

    print(f"Validation result: {result}")
    print(f"Success: {result.success}")
    print(f"Errors: {result.get_error_count()}")
    print(f"Warnings: {result.get_warning_count()}")

    if result.messages:
        print("\nMessages:")
        print(result.format_messages())
    else:
        print("\nNo validation messages")

    # Test with validation options
    options = ValidationOptions(
        validation_level=ValidationLevel.STRICT,
        enable_type_checking=True,
        enable_scope_checking=True,
    )

    strict_validator = create_validator(options)
    strict_result = strict_validator.validate_library(library)

    print(f"\nStrict validation result: {strict_result}")

    # Assert that both validations succeed
    assert result.success, f"Normal validation failed: {result.format_messages()}"
    assert strict_result.success, f"Strict validation failed: {strict_result.format_messages()}"


if __name__ == "__main__":
    test_semantic_validator_integration()
    print("\nIntegration test PASSED")
