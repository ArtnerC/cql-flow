import pytest

from cql_flow.parsing import CQLParser
from cql_flow.models.cql.expressions import (
    QueryExpression,
    AliasedQuerySource,
    LetBinding,
    RelationshipClause,
    AggregateClause,
    SortClause,
)


def test_query_phase2_multiple_sources_lets_relationships_aggregate_starting_and_sort():
    cql = """
    library EdgeQP2

    define Q:
      from Patient p, Encounter e
      let a: 1,
          b: 2,
          c: a + b
      with Observation o such that o.subject = p.id
      without Condition cnd such that cnd.subject = p.id
    aggregate total starting 0: total + c
    sort by p.id asc, e.id desc
    """

    parser = CQLParser()
    lib = parser.parse_string(cql, filename="edge_qp2.cql")
    expr_defs = [d for d in lib.expressions if d.name == "Q"]
    assert expr_defs, "Expected expression definition Q"
    expr = expr_defs[0].expression
    assert isinstance(expr, QueryExpression)

    # sources
    # Phase 2 stores multiple sources; ensure at least primary source present
    assert isinstance(expr.source, AliasedQuerySource)
    assert expr.source.alias == "p"

    # let bindings present and count >= 3
    assert len(expr.let_bindings) >= 3
    assert all(isinstance(b, LetBinding) for b in expr.let_bindings)

    # relationships include both with and without
    assert len(expr.relationships) >= 2
    kinds = {r.kind for r in expr.relationships}
    assert {"with", "without"}.issubset(kinds)
    assert all(isinstance(r, RelationshipClause) for r in expr.relationships)

    # aggregate with starting clause
    assert isinstance(expr.aggregate_clause, AggregateClause)
    # initializer (starting) may be None or present; for this case it should be present
    assert expr.aggregate_clause.initializer is not None

    # no return when aggregate is present; sort present
    assert expr.return_clause is None
    assert isinstance(expr.sort_clause, SortClause)
    assert len(expr.sort_clause.sort_by_items) >= 2


def test_query_phase2_let_parsing_with_linebreaks_and_commas_and_spacing():
    # Exercises robust let-clause extraction logic across whitespace and commas
    cql = """
    library LetWeird

    define Weird:
      from Patient p
      let   x: "X"
          ,  y:  "Y"
          ,
             z:  x & y   
      with Encounter e such that e.patientId=p.id
  aggregate acc: z
    """

    parser = CQLParser()
    lib = parser.parse_string(cql, filename="let_weird.cql")
    expr_defs = [d for d in lib.expressions if d.name == "Weird"]
    assert expr_defs, "Expected expression definition Weird"
    expr = expr_defs[0].expression
    assert isinstance(expr, QueryExpression)

    # let bindings parsed even with odd spacing/commas/linebreaks
    assert len(expr.let_bindings) >= 3
    names = {b.name for b in expr.let_bindings}
    assert {"x", "y", "z"}.issubset(names)

    # aggregate present
    assert isinstance(expr.aggregate_clause, AggregateClause)
