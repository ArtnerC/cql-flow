"""Tests for converting QueryExpression AST to ELM Query (Phase 1)."""

from cql_flow.generator.expression_converter import CQLToELMExpressionConverter
from cql_flow.models.cql.expressions import (
    AliasedQuerySource,
    IdentifierRef,
    QueryExpression,
    SortByItem,
    SortClause,
)


def test_query_expression_to_elm_minimal_shape():
    # from Patients p where p.active return p.id sort by p.id desc, p.name asc
    source = AliasedQuerySource(expression=IdentifierRef(name="Patients"), alias="p")
    sort = SortClause(
        sort_by_items=[
            SortByItem(expression=IdentifierRef(name="p.id"), direction="desc"),
            SortByItem(expression=IdentifierRef(name="p.name"), direction="asc"),
        ]
    )
    query = QueryExpression(
        source=source,
        where_clause=IdentifierRef(name="p.active"),
        return_clause=IdentifierRef(name="p.id"),
        sort_clause=sort,
    )

    converter = CQLToELMExpressionConverter()
    elm_query = converter.convert_expression(query)

    # Validate structure
    assert elm_query is not None
    elm_dict = elm_query.to_dict()

    assert elm_dict.get("type") == "Query"
    assert "source" in elm_dict and isinstance(elm_dict["source"], list)
    assert len(elm_dict["source"]) == 1
    assert elm_dict["source"][0]["alias"] == "p"
    assert elm_dict["source"][0]["expression"]["type"] == "IdentifierRef"
    assert elm_dict["where"]["type"] == "IdentifierRef"
    assert elm_dict["return"]["type"] == "IdentifierRef"

    sort = elm_dict.get("sort")
    assert sort is not None
    assert isinstance(sort.get("by"), list)
    assert [i["direction"] for i in sort["by"]] == ["desc", "asc"]
