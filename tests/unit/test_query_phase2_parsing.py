import pytest

from cql_flow.parsing import CQLParser
from cql_flow.models.cql.expressions import QueryExpression, AliasedQuerySource, LetBinding, RelationshipClause, AggregateClause


def test_query_with_let_relationships_and_aggregate_parsing():
    cql = """
    library QP2

    define Q:
      from Patient p
  let a: "A", b: "B"
      with Encounter e such that e.patientId = p.id
      without Observation o such that o.status = 'entered-in-error'
  aggregate sum: a + b
    """

    parser = CQLParser()
    lib = parser.parse_string(cql, filename="qp2.cql")
    expr_defs = [d for d in lib.expressions if d.name == "Q"]
    assert expr_defs, "Expected expression definition Q"
    expr = expr_defs[0].expression
    assert isinstance(expr, QueryExpression)

    assert isinstance(expr.source, AliasedQuerySource)
    assert expr.source.alias == "p"

    # Let bindings
    assert len(expr.let_bindings) >= 2
    assert all(isinstance(b, LetBinding) for b in expr.let_bindings)

    # Relationships
    assert len(expr.relationships) >= 2
    kinds = {r.kind for r in expr.relationships}
    assert {"with", "without"}.issubset(kinds)
    assert all(isinstance(r, RelationshipClause) for r in expr.relationships)

    # Aggregate
    assert isinstance(expr.aggregate_clause, AggregateClause)
