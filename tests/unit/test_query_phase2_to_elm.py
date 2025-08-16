from cql_flow.generator.expression_converter import CQLToELMExpressionConverter
from cql_flow.models.cql.expressions import (
    AliasedQuerySource,
    IdentifierRef,
    QueryExpression,
)


def test_query_phase2_minimal_shape_in_elm_contains_extensions():
    # Build a minimal QueryExpression with Phase 2 fields populated
    source = AliasedQuerySource(expression=IdentifierRef(name="Patients"), alias="p")
    query = QueryExpression(
        source=source,
        where_clause=IdentifierRef(name="true"),
    )
    # manually add let/relationships/aggregate simple placeholders
    from cql_flow.models.cql.expressions import LetBinding, RelationshipClause, AggregateClause
    query.let_bindings.append(LetBinding(name="a", expression=IdentifierRef(name="1")))
    query.relationships.append(
        RelationshipClause(
            kind="with",
            source=AliasedQuerySource(expression=IdentifierRef(name="Encounter"), alias="e"),
            such_that=IdentifierRef(name="p.id = e.patientId"),
        )
    )
    query.aggregate_clause = AggregateClause(
        accumulator="sum",
        initializer=IdentifierRef(name="0"),
        expression=IdentifierRef(name="a"),
    )

    converter = CQLToELMExpressionConverter()
    elm_query = converter.convert_expression(query)
    assert elm_query is not None
    elm_dict = elm_query.to_dict()

    # Ensure new fields present
    assert isinstance(elm_dict.get("let"), list) and elm_dict["let"]
    # HL7 ELM uses singular key 'relationship' for an array of relationship clauses
    assert isinstance(elm_dict.get("relationship"), list) and elm_dict["relationship"]
    assert isinstance(elm_dict.get("aggregate"), dict) and "accumulator" in elm_dict["aggregate"]
