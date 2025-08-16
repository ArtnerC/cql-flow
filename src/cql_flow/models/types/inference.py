"""
CQL Type Inference Engine.

This module provides type inference for CQL expressions during parsing and semantic analysis.
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Dict, List, Optional

from ..cql.library import CQLLibrary, ExpressionDef, FunctionDef
from .types import TYPE_SYSTEM, CQLType, SystemType


@dataclass
class TypeInferenceError:
    """Error during type inference."""

    message: str
    expression: Optional[str] = None
    line: Optional[int] = None
    column: Optional[int] = None


class TypeInferenceContext:
    """Context for type inference with symbol table."""

    def __init__(self, library: Optional[CQLLibrary] = None):
        self.library = library
        self.symbols: Dict[str, CQLType] = {}
        self.errors: List[TypeInferenceError] = []
        self._initialize_builtins()

    def _initialize_builtins(self) -> None:
        """Initialize built-in functions and operators."""
        # Add built-in mathematical operators
        self.symbols["add"] = (
            TYPE_SYSTEM.get_decimal_type()
        )  # Simplified: actual would be function type
        self.symbols["subtract"] = TYPE_SYSTEM.get_decimal_type()
        self.symbols["multiply"] = TYPE_SYSTEM.get_decimal_type()
        self.symbols["divide"] = TYPE_SYSTEM.get_decimal_type()

        # Add built-in comparison operators
        self.symbols["equal"] = TYPE_SYSTEM.get_boolean_type()
        self.symbols["not_equal"] = TYPE_SYSTEM.get_boolean_type()
        self.symbols["less_than"] = TYPE_SYSTEM.get_boolean_type()
        self.symbols["greater_than"] = TYPE_SYSTEM.get_boolean_type()

        # Add built-in logical operators
        self.symbols["and"] = TYPE_SYSTEM.get_boolean_type()
        self.symbols["or"] = TYPE_SYSTEM.get_boolean_type()
        self.symbols["not"] = TYPE_SYSTEM.get_boolean_type()

        # Add built-in string functions
        self.symbols["length"] = TYPE_SYSTEM.get_integer_type()
        self.symbols["substring"] = TYPE_SYSTEM.get_string_type()
        self.symbols["concatenate"] = TYPE_SYSTEM.get_string_type()

    def add_symbol(self, name: str, symbol_type: CQLType) -> None:
        """Add a symbol to the type context."""
        self.symbols[name] = symbol_type

    def lookup_symbol(self, name: str) -> Optional[CQLType]:
        """Look up a symbol type."""
        return self.symbols.get(name)

    def add_error(self, error: TypeInferenceError) -> None:
        """Add a type inference error."""
        self.errors.append(error)

    def has_errors(self) -> bool:
        """Check if there are any type errors."""
        return len(self.errors) > 0


class TypeInferenceEngine:
    """CQL type inference engine."""

    def __init__(self):
        self.context: Optional[TypeInferenceContext] = None

    def infer_library_types(self, library: CQLLibrary) -> TypeInferenceContext:
        """Infer types for an entire CQL library."""
        self.context = TypeInferenceContext(library)

        # Add library symbols to context
        self._add_library_symbols(library)

        # Infer types for all expressions
        for expression in library.expressions:
            self._infer_expression_type(expression)

        # Infer types for all functions
        for function in library.functions:
            self._infer_function_type(function)

        return self.context

    def _add_library_symbols(self, library: CQLLibrary) -> None:
        """Add library symbols to the inference context."""
        if not self.context:
            return

        # Add parameters
        for param in library.parameters:
            param_type = (
                self._resolve_type_specifier(param.type_specifier)
                if param.type_specifier
                else TYPE_SYSTEM.get_any_type()
            )
            self.context.add_symbol(param.name, param_type)

        # Add expressions (initially with Any type, will be refined)
        for expr in library.expressions:
            self.context.add_symbol(expr.name, TYPE_SYSTEM.get_any_type())

        # Add functions (initially with Any type, will be refined)
        for func in library.functions:
            self.context.add_symbol(func.name, TYPE_SYSTEM.get_any_type())

    def _resolve_type_specifier(self, type_spec: Optional[str]) -> CQLType:
        """Resolve a type specifier string to a CQL type."""
        if not type_spec:
            return TYPE_SYSTEM.get_any_type()

        # Handle simple system types
        type_mapping = {
            "Boolean": TYPE_SYSTEM.get_boolean_type(),
            "Integer": TYPE_SYSTEM.get_integer_type(),
            "Decimal": TYPE_SYSTEM.get_decimal_type(),
            "String": TYPE_SYSTEM.get_string_type(),
            "DateTime": TYPE_SYSTEM.get_datetime_type(),
            "Time": TYPE_SYSTEM.get_time_type(),
        }

        if type_spec in type_mapping:
            return type_mapping[type_spec]

        # Handle list types: List<ElementType>
        if type_spec.startswith("List<") and type_spec.endswith(">"):
            element_type_spec = type_spec[5:-1]
            element_type = self._resolve_type_specifier(element_type_spec)
            return TYPE_SYSTEM.create_list_type(element_type)

        # Handle interval types: Interval<PointType>
        if type_spec.startswith("Interval<") and type_spec.endswith(">"):
            point_type_spec = type_spec[9:-1]
            point_type = self._resolve_type_specifier(point_type_spec)
            return TYPE_SYSTEM.create_interval_type(point_type)

        # Default to Any for unrecognized types
        return TYPE_SYSTEM.get_any_type()

    def _infer_expression_type(self, expression: ExpressionDef) -> CQLType:
        """Infer the type of an expression definition."""
        if not self.context:
            return TYPE_SYSTEM.get_any_type()

        # For now, implement basic literal type inference
        # In a full implementation, this would parse and analyze the expression
        if not expression.expression and not expression.expression_text:
            return TYPE_SYSTEM.get_any_type()

        # Prefer explicit text when available; fall back to placeholder
        expr_text = (expression.expression_text or "").strip()
        # Some tests and callers may set `expression` to a raw string literal
        # instead of populating expression_text. Handle that here for basic inference.
        if not expr_text and isinstance(expression.expression, str):
            expr_text = expression.expression.strip()

        # Infer type from literal patterns
        inferred_type = self._infer_literal_type(expr_text)

        # Update symbol table with inferred type
        self.context.add_symbol(expression.name, inferred_type)

        return inferred_type

    def _infer_literal_type(self, expr_text: str) -> CQLType:
        """Infer type from literal expression text."""
        # Boolean literals
        if expr_text.lower() in ["true", "false"]:
            return TYPE_SYSTEM.get_boolean_type()

        # Integer literals
        if expr_text.isdigit() or (expr_text.startswith("-") and expr_text[1:].isdigit()):
            return TYPE_SYSTEM.get_integer_type()

        # Decimal literals
        try:
            if "." in expr_text:
                float(expr_text)
                return TYPE_SYSTEM.get_decimal_type()
        except ValueError:
            pass

        # String literals
        if (expr_text.startswith('"') and expr_text.endswith('"')) or (
            expr_text.startswith("'") and expr_text.endswith("'")
        ):
            return TYPE_SYSTEM.get_string_type()

        # Simple arithmetic expressions
        if any(op in expr_text for op in ["+", "-", "*", "/"]):
            # For simplicity, assume arithmetic returns Decimal
            return TYPE_SYSTEM.get_decimal_type()

        # Boolean expressions
        if any(op in expr_text.lower() for op in ["and", "or", "not", "=", ">", "<"]):
            return TYPE_SYSTEM.get_boolean_type()

        # Default to Any for complex expressions
        return TYPE_SYSTEM.get_any_type()

    def _infer_function_type(self, function: FunctionDef) -> CQLType:
        """Infer the type of a function definition."""
        if not self.context:
            return TYPE_SYSTEM.get_any_type()

        # For now, use the declared return type if available
        if function.return_type:
            return_type = self._resolve_type_specifier(function.return_type)
        else:
            # In a full implementation, would analyze function body
            return_type = TYPE_SYSTEM.get_any_type()

        # Update symbol table with function type
        self.context.add_symbol(function.name, return_type)

        return return_type

    def check_type_compatibility(
        self, expected: CQLType, actual: CQLType, context: str = ""
    ) -> bool:
        """Check if actual type is compatible with expected type."""
        if not self.context:
            return True

        compatible = TYPE_SYSTEM.are_types_compatible(expected, actual)

        if not compatible:
            error = TypeInferenceError(
                message=f"Type mismatch in {context}: expected {expected.to_string()}, got {actual.to_string()}"
            )
            self.context.add_error(error)

        return compatible

    def infer_binary_operation_type(
        self, left_type: CQLType, right_type: CQLType, operator: str
    ) -> CQLType:
        """Infer the result type of a binary operation."""
        # Arithmetic operators
        if operator in ["+", "-", "*", "/"]:
            # If both are numeric, promote to most general type
            if (
                isinstance(left_type, SystemType)
                and isinstance(right_type, SystemType)
                and left_type.type_name in ["Integer", "Decimal"]
                and right_type.type_name in ["Integer", "Decimal"]
            ):
                return TYPE_SYSTEM.find_common_supertype(left_type, right_type)

            # String concatenation
            if (
                operator == "+"
                and isinstance(left_type, SystemType)
                and isinstance(right_type, SystemType)
                and left_type.type_name == "String"
                and right_type.type_name == "String"
            ):
                return TYPE_SYSTEM.get_string_type()

        # Comparison operators always return Boolean
        if operator in ["=", "!=", "<", ">", "<=", ">="]:
            return TYPE_SYSTEM.get_boolean_type()

        # Logical operators
        if operator in ["and", "or"]:
            if (
                isinstance(left_type, SystemType)
                and isinstance(right_type, SystemType)
                and left_type.type_name == "Boolean"
                and right_type.type_name == "Boolean"
            ):
                return TYPE_SYSTEM.get_boolean_type()

        # Default to Any for unsupported operations
        return TYPE_SYSTEM.get_any_type()

    def infer_unary_operation_type(self, operand_type: CQLType, operator: str) -> CQLType:
        """Infer the result type of a unary operation."""
        # Negation
        if operator == "-":
            if isinstance(operand_type, SystemType) and operand_type.type_name in [
                "Integer",
                "Decimal",
            ]:
                return operand_type

        # Logical not
        if operator == "not":
            if isinstance(operand_type, SystemType) and operand_type.type_name == "Boolean":
                return TYPE_SYSTEM.get_boolean_type()

        # Default to Any
        return TYPE_SYSTEM.get_any_type()


def infer_types(library: CQLLibrary) -> TypeInferenceContext:
    """Convenience function to infer types for a library."""
    engine = TypeInferenceEngine()
    return engine.infer_library_types(library)
