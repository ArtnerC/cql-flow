"""CQL to ELM Expression Converter.

This module provides functionality to convert CQL expression AST to ELM expressions.
"""

from typing import Optional

from ..models.cql.expressions import (
    BetweenExpression,
    BinaryExpression,
    BooleanLiteral,
    CaseExpression,
    CodeLiteral,
    ConceptLiteral,
    ConditionalExpression,
    CQLExpression,
    CQLExpressionVisitor,
    DateTimeLiteral,
    DecimalLiteral,
    FunctionCall,
    IdentifierRef,
    IndexerExpression,
    InExpression,
    InstanceExpression,
    IntegerLiteral,
    IntervalExpression,
    ListExpression,
    NullLiteral,
    ParenthesizedExpression,
    PropertyAccess,
    QuantityLiteral,
    QueryExpression,
    StringLiteral,
    TimeLiteral,
    TupleExpression,
    TypeExpression,
    UnaryExpression,
)
from ..models.elm.ast import (
    ELMAggregate,
    ELMAggregateAccumulator,
    ELMExpression,
    ELMFunctionRef,
    ELMIdentifierRef,
    ELMLiteral,
    ELMQuery,
    ELMQueryLetBinding,
    ELMQuerySource,
    ELMRelationship,
    ELMSortByItem,
    ELMSortClause,
)


class CQLToELMExpressionConverter(CQLExpressionVisitor):
    """Converts CQL expression AST to ELM expressions using visitor pattern."""

    def convert_expression(self, cql_expr: Optional[CQLExpression]) -> Optional[ELMExpression]:
        """Convert a CQL expression to ELM expression."""
        if cql_expr is None:
            return None

        return cql_expr.accept(self)

    def visit_string_literal(self, expr: StringLiteral) -> ELMLiteral:
        """Convert string literal to ELM literal."""
        return ELMLiteral(value_type="String", value=expr.value)

    def visit_integer_literal(self, expr: IntegerLiteral) -> ELMLiteral:
        """Convert integer literal to ELM literal."""
        return ELMLiteral(value_type="Integer", value=str(expr.value))

    def visit_decimal_literal(self, expr: DecimalLiteral) -> ELMLiteral:
        """Convert decimal literal to ELM literal."""
        return ELMLiteral(value_type="Decimal", value=str(expr.value))

    def visit_boolean_literal(self, expr: BooleanLiteral) -> ELMLiteral:
        """Convert boolean literal to ELM literal."""
        return ELMLiteral(value_type="Boolean", value="true" if expr.value else "false")

    def visit_null_literal(self, expr: NullLiteral) -> ELMLiteral:
        """Convert null literal to ELM literal."""
        return ELMLiteral(value_type="Null", value=None)

    def visit_identifier_ref(self, expr: IdentifierRef) -> ELMIdentifierRef:
        """Convert identifier reference to ELM identifier reference."""
        return ELMIdentifierRef(name=expr.name)

    def visit_property_access(self, expr: PropertyAccess) -> ELMIdentifierRef:
        """Convert property access to ELM identifier reference (simplified)."""
        source_name = getattr(expr.source, "name", None)
        name = f"{source_name}.{expr.property_name}" if source_name else expr.property_name
        return ELMIdentifierRef(name=name)

    def visit_function_call(self, expr: FunctionCall) -> ELMFunctionRef:
        """Convert function call to ELM function reference."""
        operands: list[ELMExpression] = []
        for arg in expr.arguments:
            converted = self.convert_expression(arg)
            if converted is not None:
                operands.append(converted)
        return ELMFunctionRef(name=expr.function_name, operands=operands)

    def visit_binary_expression(self, expr: BinaryExpression) -> ELMFunctionRef:
        """Convert binary expression to ELM equivalent."""
        left_elm = self.convert_expression(expr.left)
        right_elm = self.convert_expression(expr.right)
        ops: list[ELMExpression] = []
        if left_elm is not None:
            ops.append(left_elm)
        if right_elm is not None:
            ops.append(right_elm)
        return ELMFunctionRef(name=f"Binary{expr.operator.title()}", operands=ops)

    def visit_unary_expression(self, expr: UnaryExpression) -> ELMFunctionRef:
        """Convert unary expression to ELM equivalent."""
        operand_elm = self.convert_expression(expr.operand)
        ops: list[ELMExpression] = []
        if operand_elm is not None:
            ops.append(operand_elm)
        return ELMFunctionRef(name=f"Unary{expr.operator.title()}", operands=ops)

    def visit_parenthesized_expression(self, expr: ParenthesizedExpression) -> ELMExpression:
        """Convert parenthesized expression to ELM equivalent."""
        result = self.convert_expression(expr.expression)
        return result if result is not None else ELMIdentifierRef(name="Error")

    def visit_conditional_expression(self, expr: ConditionalExpression) -> ELMFunctionRef:
        """Convert conditional expression to ELM equivalent."""
        condition_elm = self.convert_expression(expr.condition)
        then_elm = self.convert_expression(expr.then_expression)
        else_elm = self.convert_expression(expr.else_expression)
        ops: list[ELMExpression] = []
        if condition_elm is not None:
            ops.append(condition_elm)
        if then_elm is not None:
            ops.append(then_elm)
        if else_elm is not None:
            ops.append(else_elm)
        return ELMFunctionRef(name="If", operands=ops)

    def visit_case_expression(self, expr: CaseExpression) -> ELMExpression:
        """Convert case expression to ELM equivalent."""
        return ELMIdentifierRef(name="CaseExpression")

    def visit_list_expression(self, expr: ListExpression) -> ELMFunctionRef:
        """Convert list expression to ELM equivalent."""
        elm_elements: list[ELMExpression] = []
        for element in expr.elements:
            converted = self.convert_expression(element)
            if converted is not None:
                elm_elements.append(converted)
        return ELMFunctionRef(name="List", operands=elm_elements)

    def visit_tuple_expression(self, expr: TupleExpression) -> ELMExpression:
        """Convert tuple expression to ELM equivalent."""
        return ELMIdentifierRef(name="TupleExpression")

    def visit_interval_expression(self, expr: IntervalExpression) -> ELMFunctionRef:
        """Convert interval expression to ELM equivalent."""
        low_elm = self.convert_expression(expr.low)
        high_elm = self.convert_expression(expr.high)
        ops: list[ELMExpression] = []
        if low_elm is not None:
            ops.append(low_elm)
        if high_elm is not None:
            ops.append(high_elm)
        return ELMFunctionRef(name="Interval", operands=ops)

    def visit_datetime_literal(self, expr: DateTimeLiteral) -> ELMLiteral:
        """Convert datetime literal to ELM literal."""
        return ELMLiteral(value_type="DateTime", value=expr.value)

    def visit_time_literal(self, expr: TimeLiteral) -> ELMLiteral:
        """Convert time literal to ELM literal."""
        return ELMLiteral(value_type="Time", value=expr.value)

    def visit_quantity_literal(self, expr: QuantityLiteral) -> ELMFunctionRef:
        """Convert quantity literal to ELM equivalent."""
        ops: list[ELMExpression] = []
        ops.append(ELMLiteral(value_type="Decimal", value=str(expr.value)))
        ops.append(ELMLiteral(value_type="String", value=expr.unit))
        return ELMFunctionRef(name="Quantity", operands=ops)

    def visit_code_literal(self, expr: CodeLiteral) -> ELMFunctionRef:
        """Convert code literal to ELM equivalent."""
        operands: list[ELMExpression] = [
            ELMLiteral(value_type="String", value=expr.code),
            ELMLiteral(value_type="String", value=expr.system),
        ]
        if expr.version is not None:
            operands.append(ELMLiteral(value_type="String", value=expr.version))
        if expr.display is not None:
            operands.append(ELMLiteral(value_type="String", value=expr.display))
        return ELMFunctionRef(name="Code", operands=operands)

    def visit_concept_literal(self, expr: ConceptLiteral) -> ELMFunctionRef:
        """Convert concept literal to ELM equivalent."""
        code_operands: list[ELMExpression] = []
        for code in expr.codes:
            code_elm = self.convert_expression(code)
            if code_elm is not None:
                code_operands.append(code_elm)
        return ELMFunctionRef(name="Concept", operands=code_operands)

    def visit_query_expression(self, expr: QueryExpression) -> ELMExpression:
        """Convert query expression to ELM equivalent."""
        # Phase 1+2: at least one source, optionally additional sources
        sources: list[ELMQuerySource] = []
        first_expr = self.convert_expression(expr.source.expression)
        sources.append(ELMQuerySource(alias=expr.source.alias, expression=first_expr))
        if getattr(expr, "sources", None):
            for add_src in expr.sources:
                add_expr = self.convert_expression(add_src.expression)
                sources.append(ELMQuerySource(alias=add_src.alias, expression=add_expr))

        where_elm = self.convert_expression(expr.where_clause)
        return_elm = self.convert_expression(expr.return_clause)

        sort_elm: ELMSortClause | None = None
        if expr.sort_clause is not None and expr.sort_clause.sort_by_items:
            by_items: list[ELMSortByItem] = []
            for item in expr.sort_clause.sort_by_items:
                item_expr = self.convert_expression(item.expression)
                by_items.append(ELMSortByItem(direction=item.direction, expression=item_expr))
            sort_elm = ELMSortClause(by=by_items)

        # Phase 2: let bindings
        let_bindings: list[ELMQueryLetBinding] = []
        if getattr(expr, "let_bindings", None):
            for b in expr.let_bindings:
                b_expr = self.convert_expression(b.expression)
                if b_expr is not None:
                    let_bindings.append(ELMQueryLetBinding(name=b.name, expression=b_expr))
        # Phase 2: relationships
        relationships: list[ELMRelationship] = []
        if getattr(expr, "relationships", None):
            for r in expr.relationships:
                src_expr = self.convert_expression(r.source.expression)
                src = ELMQuerySource(alias=r.source.alias, expression=src_expr)
                such = self.convert_expression(r.such_that)
                rel_type = "With" if r.kind.lower() == "with" else "Without"
                if such is not None:
                    relationships.append(ELMRelationship(type=rel_type, source=src, suchThat=such))
        # Phase 2: aggregate
        aggregate: ELMAggregate | None = None
        agg_src = getattr(expr, "aggregate_clause", None)
        if agg_src is not None:
            init_elm = self.convert_expression(agg_src.initializer)
            body_elm = self.convert_expression(agg_src.expression)
            acc = None
            if body_elm is not None:
                acc = ELMAggregateAccumulator(name=agg_src.accumulator, expression=body_elm)
            aggregate = ELMAggregate(starting=init_elm, accumulator=acc)

        return ELMQuery(
            sources=sources,
            where=where_elm,
            return_expr=return_elm,
            sort=sort_elm,
            let=let_bindings,
            relationships=relationships,
            aggregate=aggregate,
        )

    def visit_indexer_expression(self, expr: IndexerExpression) -> ELMFunctionRef:
        """Convert indexer expression to ELM equivalent."""
        expr_elm = self.convert_expression(expr.expression)
        index_elm = self.convert_expression(expr.index)
        ops: list[ELMExpression] = []
        if expr_elm is not None:
            ops.append(expr_elm)
        if index_elm is not None:
            ops.append(index_elm)
        return ELMFunctionRef(name="Indexer", operands=ops)

    def visit_in_expression(self, expr: InExpression) -> ELMFunctionRef:
        """Convert 'in' expression to ELM equivalent."""
        element_elm = self.convert_expression(expr.element)
        collection_elm = self.convert_expression(expr.collection)
        ops: list[ELMExpression] = []
        if element_elm is not None:
            ops.append(element_elm)
        if collection_elm is not None:
            ops.append(collection_elm)
        return ELMFunctionRef(name="In", operands=ops)

    def visit_between_expression(self, expr: BetweenExpression) -> ELMExpression:
        """Convert 'between' expression to ELM equivalent."""
        expr_elm = self.convert_expression(expr.expression)
        low_elm = self.convert_expression(expr.low)
        high_elm = self.convert_expression(expr.high)
        ops: list[ELMExpression] = []
        if expr_elm is not None:
            ops.append(expr_elm)
        if low_elm is not None:
            ops.append(low_elm)
        if high_elm is not None:
            ops.append(high_elm)
        return ELMFunctionRef(name="Between", operands=ops)

    def visit_type_expression(self, expr: TypeExpression) -> ELMExpression:
        """Convert type expression to ELM equivalent."""
        expr_elm = self.convert_expression(expr.expression)
        ops: list[ELMExpression] = []
        if expr_elm is not None:
            ops.append(expr_elm)
            ops.append(ELMLiteral(value_type="String", value=expr.target_type))
        return ELMFunctionRef(name="As", operands=ops)

    def visit_instance_expression(self, expr: InstanceExpression) -> ELMExpression:
        """Convert instance expression to ELM equivalent."""
        return ELMIdentifierRef(name="InstanceExpression")
