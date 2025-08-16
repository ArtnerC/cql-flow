"""CQL Expression AST models.

This module defines the abstract syntax tree (AST) models for CQL expressions.
These models are used to represent parsed CQL expressions in a structured format
that can be converted to ELM expressions.
"""

from __future__ import annotations

from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import Any, List, Optional

from ..common.source_info import SourceInfo


class CQLExpression(ABC):
    """Base class for all CQL expressions."""

    @abstractmethod
    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        """Accept a visitor for traversing the expression tree."""
        pass


@dataclass
class StringLiteral(CQLExpression):
    """String literal expression."""

    value: str
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_string_literal(self)


@dataclass
class IntegerLiteral(CQLExpression):
    """Integer literal expression."""

    value: int
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_integer_literal(self)


@dataclass
class DecimalLiteral(CQLExpression):
    """Decimal literal expression."""

    value: float
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_decimal_literal(self)


@dataclass
class BooleanLiteral(CQLExpression):
    """Boolean literal expression."""

    value: bool
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_boolean_literal(self)


@dataclass
class NullLiteral(CQLExpression):
    """Null literal expression."""

    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_null_literal(self)


@dataclass
class IdentifierRef(CQLExpression):
    """Reference to an identifier (variable, parameter, expression)."""

    name: str
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_identifier_ref(self)


@dataclass
class PropertyAccess(CQLExpression):
    """Property access expression (e.g., Patient.name)."""

    source: CQLExpression
    property_name: str
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_property_access(self)


@dataclass
class FunctionCall(CQLExpression):
    """Function call expression."""

    function_name: str
    arguments: List[CQLExpression] = field(default_factory=list)
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_function_call(self)


@dataclass
class BinaryExpression(CQLExpression):
    """Binary operation expression (arithmetic, comparison, logical)."""

    left: CQLExpression
    operator: str  # +, -, *, /, =, !=, <, >, <=, >=, and, or, etc.
    right: CQLExpression
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_binary_expression(self)


@dataclass
class UnaryExpression(CQLExpression):
    """Unary operation expression (negation, not)."""

    operator: str  # -, not, exists, etc.
    operand: CQLExpression
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_unary_expression(self)


@dataclass
class ParenthesizedExpression(CQLExpression):
    """Parenthesized expression."""

    expression: CQLExpression
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_parenthesized_expression(self)


@dataclass
class ConditionalExpression(CQLExpression):
    """Conditional expression (if-then-else, case)."""

    condition: CQLExpression
    then_expression: CQLExpression
    else_expression: CQLExpression
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_conditional_expression(self)


@dataclass
class CaseExpression(CQLExpression):
    """Case expression with multiple when clauses."""

    case_items: List["CaseItem"] = field(default_factory=list)
    else_expression: Optional[CQLExpression] = None
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_case_expression(self)


@dataclass
class CaseItem:
    """Individual when-then clause in a case expression."""

    when_condition: CQLExpression
    then_expression: CQLExpression
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class ListExpression(CQLExpression):
    """List expression."""

    elements: List[CQLExpression] = field(default_factory=list)
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_list_expression(self)


@dataclass
class TupleExpression(CQLExpression):
    """Tuple expression."""

    elements: List["TupleElement"] = field(default_factory=list)
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_tuple_expression(self)


@dataclass
class TupleElement:
    """Individual element in a tuple expression."""

    name: str
    value: CQLExpression
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class IntervalExpression(CQLExpression):
    """Interval expression."""

    low: CQLExpression
    high: CQLExpression
    low_closed: bool = True  # [ vs (
    high_closed: bool = True  # ] vs )
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_interval_expression(self)


@dataclass
class DateTimeLiteral(CQLExpression):
    """Date/time literal expression."""

    value: str  # ISO format date/time string
    precision: str = "day"  # year, month, day, hour, minute, second, millisecond
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_datetime_literal(self)


@dataclass
class TimeLiteral(CQLExpression):
    """Time literal expression."""

    value: str  # ISO format time string
    precision: str = "second"  # hour, minute, second, millisecond
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_time_literal(self)


@dataclass
class QuantityLiteral(CQLExpression):
    """Quantity literal with units."""

    value: float
    unit: str
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_quantity_literal(self)


@dataclass
class CodeLiteral(CQLExpression):
    """Code literal expression."""

    code: str
    system: str
    version: Optional[str] = None
    display: Optional[str] = None
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_code_literal(self)


@dataclass
class ConceptLiteral(CQLExpression):
    """Concept literal expression."""

    codes: List[CodeLiteral] = field(default_factory=list)
    display: Optional[str] = None
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_concept_literal(self)


@dataclass
class QueryExpression(CQLExpression):
    """Query expression (from, where, select, etc.)."""

    source: "AliasedQuerySource"
    # Phase 2: support multiple sources. Preserve 'source' for backward compatibility
    # and accumulate any additional sources here. When present, the full ordered
    # list of sources should be [source] + sources.
    sources: List["AliasedQuerySource"] = field(default_factory=list)
    where_clause: Optional[CQLExpression] = None
    return_clause: Optional[CQLExpression] = None
    sort_clause: Optional["SortClause"] = None
    # Phase 2 additions
    let_bindings: List["LetBinding"] = field(default_factory=list)
    relationships: List["RelationshipClause"] = field(default_factory=list)
    aggregate_clause: Optional["AggregateClause"] = None
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_query_expression(self)


@dataclass
class AliasedQuerySource:
    """Query source with alias."""

    expression: CQLExpression
    alias: str
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class SortClause:
    """Sort clause in query expression."""

    sort_by_items: List["SortByItem"] = field(default_factory=list)
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class SortByItem:
    """Individual sort by item."""

    expression: CQLExpression
    direction: str = "asc"  # asc, desc
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class LetBinding:
    """Let binding within a query let clause."""

    name: str
    expression: CQLExpression
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class RelationshipClause:
    """With/Without relationship clause with such that predicate."""

    kind: str  # 'with' | 'without'
    source: AliasedQuerySource
    such_that: CQLExpression
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class AggregateClause:
    """Aggregate clause within a query."""

    accumulator: str
    expression: CQLExpression
    initializer: Optional[CQLExpression] = None
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class IndexerExpression(CQLExpression):
    """Indexer expression (list[index])."""

    expression: CQLExpression
    index: CQLExpression
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_indexer_expression(self)


@dataclass
class InExpression(CQLExpression):
    """'in' expression for membership testing."""

    element: CQLExpression
    collection: CQLExpression
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_in_expression(self)


@dataclass
class BetweenExpression(CQLExpression):
    """'between' expression for range testing."""

    expression: CQLExpression
    low: CQLExpression
    high: CQLExpression
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_between_expression(self)


@dataclass
class TypeExpression(CQLExpression):
    """Type conversion/casting expression."""

    expression: CQLExpression
    target_type: str
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_type_expression(self)


@dataclass
class InstanceExpression(CQLExpression):
    """Instance creation expression."""

    class_type: str
    elements: List[TupleElement] = field(default_factory=list)
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def accept(self, visitor: "CQLExpressionVisitor") -> Any:
        return visitor.visit_instance_expression(self)


class CQLExpressionVisitor(ABC):
    """Visitor interface for traversing CQL expression trees."""

    @abstractmethod
    def visit_string_literal(self, expr: StringLiteral) -> Any:
        pass

    @abstractmethod
    def visit_integer_literal(self, expr: IntegerLiteral) -> Any:
        pass

    @abstractmethod
    def visit_decimal_literal(self, expr: DecimalLiteral) -> Any:
        pass

    @abstractmethod
    def visit_boolean_literal(self, expr: BooleanLiteral) -> Any:
        pass

    @abstractmethod
    def visit_null_literal(self, expr: NullLiteral) -> Any:
        pass

    @abstractmethod
    def visit_identifier_ref(self, expr: IdentifierRef) -> Any:
        pass

    @abstractmethod
    def visit_property_access(self, expr: PropertyAccess) -> Any:
        pass

    @abstractmethod
    def visit_function_call(self, expr: FunctionCall) -> Any:
        pass

    @abstractmethod
    def visit_binary_expression(self, expr: BinaryExpression) -> Any:
        pass

    @abstractmethod
    def visit_unary_expression(self, expr: UnaryExpression) -> Any:
        pass

    @abstractmethod
    def visit_parenthesized_expression(self, expr: ParenthesizedExpression) -> Any:
        pass

    @abstractmethod
    def visit_conditional_expression(self, expr: ConditionalExpression) -> Any:
        pass

    @abstractmethod
    def visit_case_expression(self, expr: CaseExpression) -> Any:
        pass

    @abstractmethod
    def visit_list_expression(self, expr: ListExpression) -> Any:
        pass

    @abstractmethod
    def visit_tuple_expression(self, expr: TupleExpression) -> Any:
        pass

    @abstractmethod
    def visit_interval_expression(self, expr: IntervalExpression) -> Any:
        pass

    @abstractmethod
    def visit_datetime_literal(self, expr: DateTimeLiteral) -> Any:
        pass

    @abstractmethod
    def visit_time_literal(self, expr: TimeLiteral) -> Any:
        pass

    @abstractmethod
    def visit_quantity_literal(self, expr: QuantityLiteral) -> Any:
        pass

    @abstractmethod
    def visit_code_literal(self, expr: CodeLiteral) -> Any:
        pass

    @abstractmethod
    def visit_concept_literal(self, expr: ConceptLiteral) -> Any:
        pass

    @abstractmethod
    def visit_query_expression(self, expr: QueryExpression) -> Any:
        pass

    @abstractmethod
    def visit_indexer_expression(self, expr: IndexerExpression) -> Any:
        pass

    @abstractmethod
    def visit_in_expression(self, expr: InExpression) -> Any:
        pass

    @abstractmethod
    def visit_between_expression(self, expr: BetweenExpression) -> Any:
        pass

    @abstractmethod
    def visit_type_expression(self, expr: TypeExpression) -> Any:
        pass

    @abstractmethod
    def visit_instance_expression(self, expr: InstanceExpression) -> Any:
        pass
