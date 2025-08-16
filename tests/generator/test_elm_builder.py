"""Tests for ELM Builder."""

from cql_flow.generator.elm_builder import (
    ELMBuilder,
    ELMGenerationError,
    ELMGenerationResult,
)
from cql_flow.models.cql.library import (
    CQLLibrary,
    ExpressionDef,
    FunctionDef,
    ParameterDef,
    UsingStatement,
)
from cql_flow.models.elm.ast import ELMDocument, ELMIdentifier, ELMLibrary


class TestELMBuilder:
    """Test cases for ELM Builder."""

    def test_elm_builder_creation(self):
        """Test creating an ELM builder."""
        builder = ELMBuilder()
        assert not builder.optimize
        assert len(builder.errors) == 0
        assert len(builder.warnings) == 0

    def test_elm_builder_with_optimization(self):
        """Test creating an ELM builder with optimization enabled."""
        builder = ELMBuilder(optimize=True)
        assert builder.optimize

    def test_generate_elm_basic_library(self):
        """Test generating ELM from a basic CQL library."""
        # Create a simple CQL library
        cql_library = CQLLibrary(
            name="TestLibrary",
            version=None,
            using_statements=[UsingStatement(model_identifier="FHIR", version=None)],
            parameters=[],
            expressions=[],
            functions=[],
        )

        builder = ELMBuilder()
        result = builder.generate_elm(cql_library)

        # Verify successful generation
        assert result.success
        assert result.elm_document is not None
        assert len(result.errors) == 0

        # Verify ELM document structure
        elm_doc = result.elm_document
        assert elm_doc.library.identifier.id == "TestLibrary"
        assert elm_doc.library.identifier.version is None
        assert elm_doc.library.schema_identifier.id == "urn:hl7-org:elm:r1"

    def test_generate_elm_with_parameters(self):
        """Test generating ELM from a CQL library with parameters."""
        # Create a CQL library with parameters
        cql_library = CQLLibrary(
            name="TestLibrary",
            version=None,
            using_statements=[],
            parameters=[ParameterDef(name="TestParam", type_specifier=None)],
            expressions=[],
            functions=[],
        )

        builder = ELMBuilder()
        result = builder.generate_elm(cql_library)

        # Verify successful generation
        assert result.success
        assert result.elm_document is not None

        # Verify parameter conversion
        elm_lib = result.elm_document.library
        assert len(elm_lib.statements.definitions) == 1
        elm_param = elm_lib.statements.definitions[0]
        assert elm_param.name == "TestParam"

    def test_generate_elm_with_expressions(self):
        """Test generating ELM from a CQL library with expressions."""
        from cql_flow.models.cql.expressions import StringLiteral

        # Create a CQL library with expressions
        cql_library = CQLLibrary(
            name="TestLibrary",
            version=None,
            using_statements=[],
            parameters=[],
            expressions=[
                ExpressionDef(
                    name="TestExpression",
                    expression=StringLiteral(value="Hello World"),
                    expression_text="'Hello World'",
                )
            ],
            functions=[],
        )

        builder = ELMBuilder()
        result = builder.generate_elm(cql_library)

        # Verify successful generation
        assert result.success
        assert result.elm_document is not None

        # Verify expression conversion
        elm_lib = result.elm_document.library
        assert len(elm_lib.statements.definitions) == 1
        elm_expr = elm_lib.statements.definitions[0]
        assert elm_expr.name == "TestExpression"

    def test_generate_elm_with_functions(self):
        """Test generating ELM from a CQL library with functions."""
        # Create a CQL library with functions
        cql_library = CQLLibrary(
            name="TestLibrary",
            version=None,
            using_statements=[],
            parameters=[],
            expressions=[],
            functions=[
                FunctionDef(
                    name="TestFunction",
                    parameters=[],
                    expression=None,
                    expression_text="placeholder",
                )
            ],
        )

        builder = ELMBuilder()
        result = builder.generate_elm(cql_library)

        # Verify successful generation
        assert result.success
        assert result.elm_document is not None

        # Verify function conversion
        elm_lib = result.elm_document.library
        assert len(elm_lib.statements.definitions) == 1
        elm_func = elm_lib.statements.definitions[0]
        assert elm_func.name == "TestFunction"

    def test_generate_elm_with_optimization_warning(self):
        """Test generating ELM with optimization enabled shows warning."""
        cql_library = CQLLibrary(
            name="TestLibrary",
            version=None,
            using_statements=[],
            parameters=[],
            expressions=[],
            functions=[],
        )

        builder = ELMBuilder(optimize=True)
        result = builder.generate_elm(cql_library)

        # Verify optimization warning is present
        assert result.success
        assert len(result.warnings) > 0
        assert any("optimization" in warning.lower() for warning in result.warnings)

    def test_elm_generation_error_creation(self):
        """Test creating ELM generation errors."""
        error = ELMGenerationError(
            message="Test error",
            source_location="line 5",
            context="expression evaluation",
        )

        assert error.message == "Test error"
        assert error.source_location == "line 5"
        assert error.context == "expression evaluation"

        error_str = str(error)
        assert "Test error" in error_str
        assert "line 5" in error_str
        assert "expression evaluation" in error_str

    def test_elm_generation_result_success(self):
        """Test creating successful ELM generation result."""
        # Create a minimal ELM document
        elm_doc = ELMDocument(
            library=ELMLibrary(identifier=ELMIdentifier(id="TestLib", version="1.0.0"))
        )

        result = ELMGenerationResult(success=True, elm_document=elm_doc, errors=[], warnings=[])

        assert result.success
        assert result.elm_document is not None
        assert len(result.errors) == 0
        assert len(result.warnings) == 0

    def test_elm_generation_result_failure(self):
        """Test creating failed ELM generation result."""
        error = ELMGenerationError(message="Test error")

        result = ELMGenerationResult(success=False, elm_document=None, errors=[error], warnings=[])

        assert not result.success
        assert result.elm_document is None
        assert len(result.errors) == 1
        assert result.errors[0].message == "Test error"

    def test_builder_error_handling(self):
        """Test builder error and warning handling."""
        builder = ELMBuilder()

        # Test adding errors
        builder.add_error("Test error message", "line 10", "parsing")
        assert len(builder.errors) == 1
        assert builder.errors[0].message == "Test error message"
        assert builder.errors[0].source_location == "line 10"
        assert builder.errors[0].context == "parsing"

        # Test adding warnings
        builder.add_warning("Test warning message")
        assert len(builder.warnings) == 1
        assert builder.warnings[0] == "Test warning message"

    def test_convert_usings(self):
        """Test converting CQL using statements to ELM usings."""
        using_statements = [
            UsingStatement(model_identifier="FHIR", version=None),
            UsingStatement(model_identifier="CDS", version=None),
        ]

        # Create a CQL library and test the conversion through generate_elm
        cql_library = CQLLibrary(
            name="TestLibrary",
            version=None,
            using_statements=using_statements,
            parameters=[],
            expressions=[],
            functions=[],
        )

        builder = ELMBuilder()
        result = builder.generate_elm(cql_library)

        assert result.success
        elm_usings = result.elm_document.library.usings

        assert len(elm_usings.definitions) == 2
        assert elm_usings.definitions[0].local_identifier == "FHIR"
        assert elm_usings.definitions[1].local_identifier == "CDS"

        # Verify correct URI mapping - FHIR gets its specific URI, CDS gets default
        assert elm_usings.definitions[0].uri == "http://hl7.org/fhir"
        assert elm_usings.definitions[1].uri == "urn:hl7-org:elm-types:r1"

    def test_elm_document_json_serialization(self):
        """Test that generated ELM document can be serialized to JSON."""
        cql_library = CQLLibrary(
            name="TestLibrary",
            version=None,
            using_statements=[UsingStatement(model_identifier="FHIR", version=None)],
            parameters=[],
            expressions=[],
            functions=[],
        )

        builder = ELMBuilder()
        result = builder.generate_elm(cql_library)

        # Verify successful generation
        assert result.success
        assert result.elm_document is not None

        # Test JSON serialization
        elm_dict = result.elm_document.to_dict()
        assert isinstance(elm_dict, dict)
        assert "library" in elm_dict
        assert "schemaIdentifier" in elm_dict

        # Verify library structure
        library_dict = elm_dict["library"]
        assert library_dict["identifier"]["id"] == "TestLibrary"
        assert library_dict["identifier"]["version"] is None


class TestELMBuilderIntegration:
    """Integration tests for ELM Builder with semantic validator."""

    def test_elm_builder_with_validator_integration(self):
        """Test ELM builder integration with semantic validator."""
        # Create a valid CQL library
        cql_library = CQLLibrary(
            name="TestLibrary",
            version=None,
            using_statements=[],
            parameters=[],
            expressions=[],
            functions=[],
        )

        # Test with validation enabled
        builder = ELMBuilder()
        result = builder.generate_elm(cql_library)

        # Should succeed since the library is valid
        assert result.success
        assert result.elm_document is not None

    def test_complex_library_conversion(self):
        """Test converting a more complex CQL library to ELM."""
        # Create a complex CQL library
        cql_library = CQLLibrary(
            name="ComplexLibrary",
            version=None,
            using_statements=[
                UsingStatement(model_identifier="FHIR", version=None),
                UsingStatement(model_identifier="CDS", version=None),
            ],
            parameters=[
                ParameterDef(name="Param1", type_specifier=None),
                ParameterDef(name="Param2", type_specifier=None),
            ],
            expressions=[
                ExpressionDef(name="Expression1", expression=None, expression_text="placeholder"),
                ExpressionDef(name="Expression2", expression=None, expression_text="placeholder"),
            ],
            functions=[
                FunctionDef(
                    name="Function1",
                    parameters=[],
                    expression=None,
                    expression_text="placeholder",
                )
            ],
        )

        builder = ELMBuilder(optimize=True)
        result = builder.generate_elm(cql_library)

        # Verify successful generation
        assert result.success
        assert result.elm_document is not None

        # Verify all components were converted
        elm_lib = result.elm_document.library

        # Check usings
        assert len(elm_lib.usings.definitions) == 2

        # Check statements (parameters + expressions + functions)
        assert len(elm_lib.statements.definitions) == 5  # 2 params + 2 exprs + 1 func

        # Check library metadata
        assert elm_lib.identifier.id == "ComplexLibrary"
        assert elm_lib.identifier.version is None

        # Check optimization warning
        assert len(result.warnings) > 0
        assert any("optimization" in warning.lower() for warning in result.warnings)
