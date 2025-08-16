"""Smoke tests for docs build requirements and public API invariants."""

from cql_flow import CQLToELMConverter
from cql_flow.models.elm.ast import ELMDocument, ELMLibrary, ELMIdentifier


def test_public_api_basic_conversion_and_elm_json_shape():
    converter = CQLToELMConverter()
    # Minimal valid library declaration
    result = converter.convert_string("library SmokeLib version '0.0.1'")

    assert result.success, "Conversion should succeed for minimal library"
    assert result.elm_document is not None

    # Ensure ELM JSON exists and contains the top-level schemaIdentifier
    elm_json = result.get_elm_json()
    assert elm_json is not None
    assert "schemaIdentifier" in elm_json
    assert "SmokeLib" in elm_json


def test_elm_document_to_json_includes_top_level_schema_identifier():
    # Construct a minimal ELMDocument and ensure serialization includes top-level schemaIdentifier
    doc = ELMDocument(library=ELMLibrary(identifier=ELMIdentifier(id="TestLibrary", version=None)))
    json_str = doc.to_json()
    assert "\"library\"" in json_str
    assert "schemaIdentifier" in json_str
