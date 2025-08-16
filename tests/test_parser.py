"""Tests for CQL parser."""

import pytest

from cql_flow.parsing import CQLParseError, CQLParser, CQLSyntaxError


class TestCQLParser:
    """Test cases for CQL parser."""

    def test_simple_library_parsing(self):
        """Test parsing a simple CQL library."""
        cql_content = """
        library TestLibrary version '1.0.0'
        
        using FHIR version '4.0.1'
        
        define TestExpression:
            5 + 3
        """

        parser = CQLParser()
        library = parser.parse_string(cql_content, filename="test.cql")

        assert library is not None
        assert library.name == "TestLibrary"
        assert library.source_info is not None
        assert not parser.has_errors()

    def test_empty_library_parsing(self):
        """Test parsing an empty library."""
        cql_content = """
        library EmptyLibrary
        """

        parser = CQLParser()
        library = parser.parse_string(cql_content, filename="empty.cql")

        assert library is not None
        assert library.name == "EmptyLibrary"
        assert len(library.using_statements) == 0
        assert len(library.expressions) == 0

    def test_syntax_error_handling(self):
        """Test handling of syntax errors."""
        cql_content = """
        library SyntaxError
        
        invalid syntax here!
        """

        parser = CQLParser()

        with pytest.raises(CQLSyntaxError) as exc_info:
            parser.parse_string(cql_content, filename="error.cql")

        error = exc_info.value
        assert "Syntax error" in str(error)
        assert error.filename == "error.cql"
        assert error.line is not None
        assert error.column is not None

    def test_file_not_found(self):
        """Test handling when file doesn't exist."""
        parser = CQLParser()

        with pytest.raises(CQLParseError) as exc_info:
            parser.parse_file("nonexistent.cql")

        assert "File not found" in str(exc_info.value)

    def test_parser_error_collection(self):
        """Test that parser collects errors properly."""
        parser = CQLParser()

        # Start with no errors
        assert not parser.has_errors()
        assert len(parser.get_errors()) == 0

        # Try to parse invalid content and catch the exception
        try:
            parser.parse_string("invalid cql content", filename="test.cql")
        except CQLParseError:
            pass  # Expected

        # After parsing error, should have errors recorded
        assert parser.has_errors()
        errors = parser.get_errors()
        assert len(errors) > 0
