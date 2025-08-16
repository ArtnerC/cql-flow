import pytest

from cql_flow.parsing import CQLParser
from cql_flow.models.cql.expressions import QueryExpression, AliasedQuerySource, SortClause


def test_query_single_source_where_return_sort():
    cql = """
    library QTest

    define Q:
      from Patient p
      where true
      return p.name
      sort by p.id desc, p.name asc
    """

    parser = CQLParser()
    lib = parser.parse_string(cql, filename="qtest.cql")

    # Find expression def Q
    expr_defs = [d for d in lib.expressions if d.name == "Q"]
    assert expr_defs, "Expected expression definition Q"
    expr = expr_defs[0].expression
    assert isinstance(expr, QueryExpression)

    # Validate source
    assert isinstance(expr.source, AliasedQuerySource)
    assert expr.source.alias == "p"

    # Validate where and return presence
    assert expr.where_clause is not None
    assert expr.return_clause is not None

    # Validate sort clause
    assert isinstance(expr.sort_clause, SortClause)
    assert len(expr.sort_clause.sort_by_items) == 2
    dirs = [item.direction for item in expr.sort_clause.sort_by_items]
    assert dirs == ["desc", "asc"]
