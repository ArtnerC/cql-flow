"""
Tests for CQL AST models.
"""

import pytest

from cql_flow.models.common.source_info import SourceInfo, SourceLocation
from cql_flow.models.cql.library import (
    CQLLibrary,
    ExpressionDef,
    IncludeStatement,
    ParameterDef,
    UsingStatement,
    VersionSpecifier,
)


class TestSourceInfo:
    """Test source information classes."""

    def test_source_location(self):
        """Test SourceLocation creation."""
        loc = SourceLocation(line=10, column=5)
        assert loc.line == 10
        assert loc.column == 5
        assert str(loc) == "line 10, column 5"

    def test_source_info(self):
        """Test SourceInfo creation."""
        loc = SourceLocation(line=1, column=1)
        info = SourceInfo(location=loc, text="test")
        assert info.location == loc
        assert info.text == "test"
        assert bool(info) is True

        empty_info = SourceInfo()
        assert bool(empty_info) is False


class TestVersionSpecifier:
    """Test VersionSpecifier model."""

    def test_version_creation(self):
        """Test creating a version specifier."""
        version = VersionSpecifier("1.0.0")
        assert version.version == "1.0.0"
        assert version.source_info is not None


class TestCQLLibrary:
    """Test CQLLibrary model."""

    def test_library_creation(self):
        """Test creating a basic library."""
        library = CQLLibrary(name="TestLibrary")
        assert library.name == "TestLibrary"
        assert library.version is None
        assert len(library.using_statements) == 0
        assert len(library.expressions) == 0

    def test_library_with_version(self):
        """Test creating a library with version."""
        version = VersionSpecifier("1.0.0")
        library = CQLLibrary(name="TestLibrary", version=version)
        assert library.name == "TestLibrary"
        assert library.version is not None
        assert library.version.version == "1.0.0"

    def test_qualified_name(self):
        """Test getting qualified library name."""
        library = CQLLibrary(name="TestLibrary")
        assert library.get_qualified_name() == "TestLibrary"

        version = VersionSpecifier("1.0.0")
        library_with_version = CQLLibrary(name="TestLibrary", version=version)
        assert library_with_version.get_qualified_name() == "TestLibrary version '1.0.0'"

    def test_library_validation(self):
        """Test library validation."""
        with pytest.raises(ValueError, match="Library name is required"):
            CQLLibrary(name="")

    def test_library_with_statements(self):
        """Test library with various statements."""
        using_stmt = UsingStatement(model_identifier="FHIR")
        include_stmt = IncludeStatement(library_identifier="Common")
        param = ParameterDef(name="MeasurementPeriod", type_specifier="Interval<DateTime>")
        expr = ExpressionDef(name="TestExpression", expression="true")

        library = CQLLibrary(
            name="TestLibrary",
            using_statements=[using_stmt],
            include_statements=[include_stmt],
            parameters=[param],
            expressions=[expr],
        )

        assert len(library.using_statements) == 1
        assert library.using_statements[0].model_identifier == "FHIR"

        assert len(library.include_statements) == 1
        assert library.include_statements[0].library_identifier == "Common"

        assert len(library.parameters) == 1
        assert library.parameters[0].name == "MeasurementPeriod"

        assert len(library.expressions) == 1
        assert library.expressions[0].name == "TestExpression"


class TestStatements:
    """Test various CQL statement models."""

    def test_using_statement(self):
        """Test UsingStatement creation."""
        using = UsingStatement(model_identifier="FHIR")
        assert using.model_identifier == "FHIR"
        assert using.version is None

        version = VersionSpecifier("4.0.1")
        using_with_version = UsingStatement(model_identifier="FHIR", version=version)
        assert using_with_version.version is not None
        assert using_with_version.version.version == "4.0.1"

    def test_include_statement(self):
        """Test IncludeStatement creation."""
        include = IncludeStatement(library_identifier="Common")
        assert include.library_identifier == "Common"
        assert include.local_identifier is None

        include_with_alias = IncludeStatement(library_identifier="Common", local_identifier="C")
        assert include_with_alias.local_identifier == "C"

    def test_parameter_def(self):
        """Test ParameterDef creation."""
        param = ParameterDef(name="MeasurementPeriod")
        assert param.name == "MeasurementPeriod"
        assert param.type_specifier is None
        assert param.default_value is None

        typed_param = ParameterDef(
            name="MeasurementPeriod",
            type_specifier="Interval<DateTime>",
            default_value="Interval[@2023-01-01T00:00:00.0, @2023-12-31T23:59:59.999]",
        )
        assert typed_param.type_specifier == "Interval<DateTime>"
        assert typed_param.default_value is not None

    def test_expression_def(self):
        """Test ExpressionDef creation."""
        expr = ExpressionDef(name="TestExpression", expression="true")
        assert expr.name == "TestExpression"
        assert expr.expression == "true"
        assert expr.context is None
        assert expr.access_level == "Public"

        contextual_expr = ExpressionDef(
            name="PatientExpression", expression="Patient", context="Patient"
        )
        assert contextual_expr.context == "Patient"
