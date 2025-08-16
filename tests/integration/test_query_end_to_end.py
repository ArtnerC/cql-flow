"""End-to-end test for QueryExpression (Phase 1) through the public API.

This validates that a CQL library containing a minimal query parses and
converts to ELM JSON with a Query node of the expected shape.
"""

import json
from typing import Any, Dict, List

import pytest

from cql_flow.api import convert_cql_string


@pytest.mark.integration
def test_query_phase1_end_to_end_produces_elm_query():
    cql = """
    library QEndToEnd

    define Q:
      from Patient p
      where true
      return p.id
      sort by p.id desc, p.name asc
    """

    result = convert_cql_string(cql)
    assert result is not None

    # Don't enforce success strictly yet, but ensure we obtained an ELM document
    assert result.elm_document is not None, "Expected an ELM document to be produced"

    elm_json = result.elm_document.to_json(indent=None)
    assert isinstance(elm_json, str) and elm_json.strip()

    data: Dict[str, Any] = json.loads(elm_json)

    # Navigate to the expression named 'Q'
    lib = data.get("library", {})
    assert isinstance(lib, dict)
    statements = lib.get("statements", {})
    assert isinstance(statements, dict)
    defs = statements.get("def", [])
    assert isinstance(defs, list)
    defs_typed: List[Dict[str, Any]] = [d for d in defs if isinstance(d, dict)]
    by_name: Dict[str, Dict[str, Any]] = {d.get("name"): d for d in defs_typed if isinstance(d.get("name"), str)}  # type: ignore[dict-item]
    assert "Q" in by_name, "Expected expression definition 'Q' in statements"

    expr = by_name["Q"].get("expression")
    assert isinstance(expr, dict)
    assert expr.get("type") == "Query"

    # Validate Phase 1 shape fields exist
    sources = expr.get("source")
    assert isinstance(sources, list) and len(sources) == 1
    first_source = sources[0]
    assert isinstance(first_source, dict)
    assert first_source.get("alias") == "p"
    where = expr.get("where", {})
    assert isinstance(where, dict) and where.get("type") is not None
    ret = expr.get("return", {})
    assert isinstance(ret, dict) and ret.get("type") is not None

    sort = expr.get("sort")
    assert isinstance(sort, dict)
    by_items = sort.get("by", [])
    assert isinstance(by_items, list)
    assert [i.get("direction") for i in by_items if isinstance(i, dict)] == ["desc", "asc"]
