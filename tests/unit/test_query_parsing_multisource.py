import pytest

from cql_flow.parsing import CQLParser
from cql_flow.models.cql.expressions import QueryExpression, AliasedQuerySource

def test_query_multiple_sources_from_clause():
    cql = """
    library QMulti

    define Q:
      from Patient p, Encounter e
      where true
      return p.id
    """

    parser = CQLParser()
    lib = parser.parse_string(cql, filename="qmulti.cql")

    expr_defs = [d for d in lib.expressions if d.name == "Q"]
    assert expr_defs, "Expected expression definition Q"
    expr = expr_defs[0].expression
    assert isinstance(expr, QueryExpression)

    assert isinstance(expr.source, AliasedQuerySource)
    assert expr.source.alias == "p"
    # Additional sources should contain Encounter e
    assert any(s.alias == "e" for s in expr.sources), "Expected additional source alias 'e'"
