"""Tests for CQL Type Inference Engine."""

from cql_flow.models.common.source_info import SourceInfo
from cql_flow.models.cql.library import (
    CQLLibrary,
    ExpressionDef,
    FunctionDef,
    ParameterDef,
    VersionSpecifier,
)
from cql_flow.models.types import (
    TYPE_SYSTEM,
    TypeInferenceContext,
    TypeInferenceEngine,
    infer_types,
)


class TestTypeInferenceContext:
    """Test type inference context."""

    def test_context_initialization(self):
        """Test context initializes with built-ins."""
        context = TypeInferenceContext()

        # Should have built-in operators
        assert context.lookup_symbol("add") is not None
        assert context.lookup_symbol("equal") is not None
        assert context.lookup_symbol("and") is not None
        assert context.lookup_symbol("length") is not None

        # Should start with no errors
        assert not context.has_errors()
        assert len(context.errors) == 0

    def test_symbol_management(self):
        """Test adding and looking up symbols."""
        context = TypeInferenceContext()

        int_type = TYPE_SYSTEM.get_integer_type()
        context.add_symbol("myVar", int_type)

        assert context.lookup_symbol("myVar") == int_type
        assert context.lookup_symbol("nonexistent") is None


class TestTypeInferenceEngine:
    """Test type inference engine."""

    def test_binary_operation_type_inference(self):
        """Test binary operation type inference."""
        engine = TypeInferenceEngine()
        int_type = TYPE_SYSTEM.get_integer_type()
        decimal_type = TYPE_SYSTEM.get_decimal_type()
        string_type = TYPE_SYSTEM.get_string_type()
        bool_type = TYPE_SYSTEM.get_boolean_type()

        # Arithmetic operations
        assert engine.infer_binary_operation_type(int_type, int_type, "+") == int_type
        assert engine.infer_binary_operation_type(int_type, decimal_type, "+") == decimal_type
        assert engine.infer_binary_operation_type(decimal_type, int_type, "-") == decimal_type

        # String concatenation
        assert engine.infer_binary_operation_type(string_type, string_type, "+") == string_type

        # Comparison operations
        assert engine.infer_binary_operation_type(int_type, int_type, "=") == bool_type
        assert engine.infer_binary_operation_type(decimal_type, int_type, ">") == bool_type
        assert engine.infer_binary_operation_type(string_type, string_type, "!=") == bool_type

        # Logical operations
        assert engine.infer_binary_operation_type(bool_type, bool_type, "and") == bool_type
        assert engine.infer_binary_operation_type(bool_type, bool_type, "or") == bool_type

    def test_unary_operation_type_inference(self):
        """Test unary operation type inference."""
        engine = TypeInferenceEngine()
        int_type = TYPE_SYSTEM.get_integer_type()
        decimal_type = TYPE_SYSTEM.get_decimal_type()
        bool_type = TYPE_SYSTEM.get_boolean_type()

        # Negation
        assert engine.infer_unary_operation_type(int_type, "-") == int_type
        assert engine.infer_unary_operation_type(decimal_type, "-") == decimal_type

        # Logical not
        assert engine.infer_unary_operation_type(bool_type, "not") == bool_type

    def test_library_type_inference(self):
        """Test type inference for a complete library."""
        engine = TypeInferenceEngine()

        # Create a simple library
        library = CQLLibrary(
            name="TestLibrary",
            version=VersionSpecifier("1.0.0"),
            using_statements=[],
            include_statements=[],
            parameters=[
                ParameterDef(name="TestParam", type_specifier="Integer", source_info=SourceInfo())
            ],
            valuesets=[],
            codesystems=[],
            codes=[],
            expressions=[
                ExpressionDef(name="Five", expression="5", source_info=SourceInfo()),
                ExpressionDef(name="Addition", expression="3 + 2", source_info=SourceInfo()),
                ExpressionDef(name="Comparison", expression="5 > 3", source_info=SourceInfo()),
            ],
            functions=[
                FunctionDef(
                    name="TestFunction",
                    parameters=[],
                    return_type="Boolean",
                    expression="true",
                    source_info=SourceInfo(),
                )
            ],
            source_info=SourceInfo(),
        )

        context = engine.infer_library_types(library)

        # Check parameter types
        assert context.lookup_symbol("TestParam") == TYPE_SYSTEM.get_integer_type()

        # Check expression types
        assert context.lookup_symbol("Five") == TYPE_SYSTEM.get_integer_type()
        assert context.lookup_symbol("Addition") == TYPE_SYSTEM.get_decimal_type()
        assert context.lookup_symbol("Comparison") == TYPE_SYSTEM.get_boolean_type()

        # Check function types
        assert context.lookup_symbol("TestFunction") == TYPE_SYSTEM.get_boolean_type()

        # Should have no errors for valid expressions
        assert not context.has_errors()

    def test_type_compatibility_checking(self):
        """Test type compatibility checking."""
        engine = TypeInferenceEngine()
        engine.context = TypeInferenceContext()

        int_type = TYPE_SYSTEM.get_integer_type()
        decimal_type = TYPE_SYSTEM.get_decimal_type()
        string_type = TYPE_SYSTEM.get_string_type()

        # Compatible types
        assert engine.check_type_compatibility(decimal_type, int_type, "test")
        assert engine.check_type_compatibility(int_type, int_type, "test")

        # Incompatible types should add error
        assert not engine.check_type_compatibility(string_type, int_type, "assignment")
        assert engine.context.has_errors()
        assert len(engine.context.errors) == 1
        assert "Type mismatch" in engine.context.errors[0].message


class TestGlobalTypeInference:
    """Test the global type inference function."""

    def test_infer_types_function(self):
        """Test the convenience infer_types function."""
        library = CQLLibrary(
            name="TestLibrary",
            version=None,
            using_statements=[],
            include_statements=[],
            parameters=[],
            valuesets=[],
            codesystems=[],
            codes=[],
            expressions=[
                ExpressionDef(name="TestExpression", expression="42", source_info=SourceInfo())
            ],
            functions=[],
            source_info=SourceInfo(),
        )

        context = infer_types(library)

        assert isinstance(context, TypeInferenceContext)
        assert context.lookup_symbol("TestExpression") == TYPE_SYSTEM.get_integer_type()
        assert not context.has_errors()
