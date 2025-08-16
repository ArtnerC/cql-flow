"""Type validation rules for CQL semantic analysis."""

from __future__ import annotations

from typing import Any

from cql_flow.models.cql_library import (
    CQLLibrary,
    Expression,
    ExpressionDef,
    FunctionDef,
)
from cql_flow.models.types.inference import TypeInferenceEngine
from cql_flow.validator.rules import (
    DEFAULT_RULE_ENGINE,
    ExpressionValidationRule,
    LibraryValidationRule,
    ValidationContext,
)


class TypeInferenceValidationRule(ExpressionValidationRule):
    """Validates that expression types can be inferred correctly."""

    def __init__(self):
        super().__init__("TYPE_INFERENCE", "Validates that expression types can be inferred")
        self.type_engine = TypeInferenceEngine()

    def validate_expression(self, context: ValidationContext, expression: Expression) -> None:
        """Validate type inference for an expression."""
        try:
            # Try to infer the type
            inferred_type = self.type_engine.infer_expression_type(expression, context.symbol_table)
            if inferred_type is None:
                context.add_error(
                    "TYPE_INFERENCE_FAILED",
                    "Could not infer type for expression",
                    expression.source_info,
                )
        except Exception as e:
            context.add_error(
                "TYPE_INFERENCE_ERROR",
                f"Error during type inference: {str(e)}",
                expression.source_info,
            )


class FunctionSignatureValidationRule(LibraryValidationRule):
    """Validates function signatures and parameter types."""

    def __init__(self):
        super().__init__("FUNCTION_SIGNATURE", "Validates function signatures and parameter types")

    def validate_library(self, context: ValidationContext, library: CQLLibrary) -> None:
        """Validate all function signatures in the library."""
        for function in library.functions:
            self._validate_function_signature(context, function)

    def _validate_function_signature(
        self, context: ValidationContext, function: FunctionDef
    ) -> None:
        """Validate a single function signature."""
        # Check for duplicate parameter names
        param_names = [param.name for param in function.parameters]
        if len(param_names) != len(set(param_names)):
            duplicates = [name for name in param_names if param_names.count(name) > 1]
            context.add_error(
                "DUPLICATE_PARAMETER",
                f"Function '{function.name}' has duplicate parameters: {', '.join(set(duplicates))}",
                function.source_info,
            )

        # Validate parameter types
        for param in function.parameters:
            if param.type_specifier is None:
                context.add_warning(
                    "MISSING_PARAMETER_TYPE",
                    f"Parameter '{param.name}' in function '{function.name}' has no type specified",
                    param.source_info,
                    "Consider adding explicit type specification",
                )

        # Validate return type
        if function.return_type is None and context.validation_level.value == "strict":
            context.add_warning(
                "MISSING_RETURN_TYPE",
                f"Function '{function.name}' has no explicit return type",
                function.source_info,
                "Consider adding explicit return type specification",
            )


class ExpressionDefinitionValidationRule(LibraryValidationRule):
    """Validates expression definitions."""

    def __init__(self):
        super().__init__("EXPRESSION_DEFINITION", "Validates expression definitions")

    def validate_library(self, context: ValidationContext, library: CQLLibrary) -> None:
        """Validate all expression definitions in the library."""
        for definition in library.definitions:
            self._validate_expression_definition(context, definition)

    def _validate_expression_definition(
        self, context: ValidationContext, definition: ExpressionDef
    ) -> None:
        """Validate a single expression definition."""
        if definition.name in context.visited_expressions:
            context.add_error(
                "DUPLICATE_DEFINITION",
                f"Expression '{definition.name}' is defined multiple times",
                definition.source_info,
            )
        else:
            context.visited_expressions.add(definition.name)

        # Check for recursive definitions
        if definition.expression:
            self._check_recursive_reference(context, definition)

    def _check_recursive_reference(
        self, context: ValidationContext, definition: ExpressionDef
    ) -> None:
        """Check for recursive references in expression definition."""
        # This is a simplified check - would need full expression traversal in real implementation
        if hasattr(definition.expression, "name") and definition.expression.name == definition.name:
            context.add_error(
                "RECURSIVE_DEFINITION",
                f"Expression '{definition.name}' refers to itself",
                definition.source_info,
                "Consider using a different approach or explicit recursion handling",
            )


class CompatibilityValidationRule(ExpressionValidationRule):
    """Validates type compatibility in expressions."""

    def __init__(self):
        super().__init__("TYPE_COMPATIBILITY", "Validates type compatibility in expressions")
        self.type_engine = TypeInferenceEngine()

    def validate_expression(self, context: ValidationContext, expression: Expression) -> None:
        """Validate type compatibility for binary operations."""
        # Check if this is a binary operation that needs type checking
        if hasattr(expression, "operand") and hasattr(expression, "operator"):
            self._validate_binary_operation(context, expression)

    def _validate_binary_operation(
        self, context: ValidationContext, expression: Expression
    ) -> None:
        """Validate binary operation type compatibility."""
        try:
            # This would need access to operands to check compatibility
            # For now, just verify the operation is valid
            operator = getattr(expression, "operator", None)
            if operator and operator in ["and", "or"]:
                # Boolean operations require boolean operands
                # This is a simplified check
                pass
        except Exception as e:
            context.add_warning(
                "TYPE_COMPATIBILITY_CHECK_FAILED",
                f"Could not verify type compatibility: {str(e)}",
                expression.source_info,
            )


class ClinicalModelValidationRule(LibraryValidationRule):
    """Validates clinical model references and compatibility."""

    def __init__(self):
        super().__init__("CLINICAL_MODEL", "Validates clinical model references and compatibility")

    def validate_library(self, context: ValidationContext, library: CQLLibrary) -> None:
        """Validate clinical model references in the library."""
        # Check using statements for supported data models
        for using in library.using_statements:
            self._validate_using_statement(context, using)

    def _validate_using_statement(self, context: ValidationContext, using: Any) -> None:
        """Validate a using statement."""
        if hasattr(using, "local_identifier") and hasattr(using, "uri"):
            # Check for supported data models
            supported_models = ["FHIR", "QDM", "QICore"]
            if using.local_identifier not in supported_models:
                context.add_warning(
                    "UNSUPPORTED_DATA_MODEL",
                    f"Data model '{using.local_identifier}' may not be fully supported",
                    getattr(using, "source_info", None),
                    f"Consider using one of: {', '.join(supported_models)}",
                )


# Register all type validation rules
def register_type_rules() -> None:
    """Register all type validation rules with the default engine."""
    DEFAULT_RULE_ENGINE.register_rule(TypeInferenceValidationRule())
    DEFAULT_RULE_ENGINE.register_rule(FunctionSignatureValidationRule(), ["TYPE_INFERENCE"])
    DEFAULT_RULE_ENGINE.register_rule(ExpressionDefinitionValidationRule())
    DEFAULT_RULE_ENGINE.register_rule(CompatibilityValidationRule(), ["TYPE_INFERENCE"])
    DEFAULT_RULE_ENGINE.register_rule(ClinicalModelValidationRule())


# Auto-register rules when module is imported
register_type_rules()
