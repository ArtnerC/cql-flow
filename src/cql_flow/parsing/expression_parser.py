"""CQL Expression Parser.

This module provides functionality to parse CQL expressions from ANTLR parse trees
into our CQL expression AST models.
"""

from typing import Any, Optional, cast

from antlr4 import ParserRuleContext

from ..models.common.source_info import SourceInfo, SourceLocation
from ..models.cql.expressions import (
    BetweenExpression,
    BinaryExpression,
    BooleanLiteral,
    CodeLiteral,
    ConceptLiteral,
    CQLExpression,
    DateTimeLiteral,
    DecimalLiteral,
    FunctionCall,
    IdentifierRef,
    InExpression,
    IntegerLiteral,
    NullLiteral,
    PropertyAccess,
    QuantityLiteral,
    QueryExpression,
    StringLiteral,
    TimeLiteral,
    TypeExpression,
    UnaryExpression,
)


class CQLExpressionParser:
    """Parser for converting ANTLR parse trees to CQL expression AST."""

    def __init__(self, filename: Optional[str] = None):
        self.filename = filename

    def parse_expression(self, ctx: ParserRuleContext) -> Optional[CQLExpression]:
        """Parse an expression from ANTLR context to CQL expression AST."""
        if ctx is None:
            return None

        # Import ANTLR parser classes for type checks
        from .generated.cqlParser import cqlParser

        # Handle specific expression context types we care about explicitly
        if isinstance(ctx, cqlParser.TermExpressionContext):
            return self._parse_term_expression(ctx)
        if isinstance(ctx, cqlParser.QueryExpressionContext):
            return self._parse_query_expression(ctx)
        # Terminology literal selectors
        if isinstance(ctx, cqlParser.CodeSelectorContext):
            return self._parse_code_selector(ctx)
        if isinstance(ctx, cqlParser.ConceptSelectorContext):
            return self._parse_concept_selector(ctx)

        # Generic structural handling: recurse by arity
        if hasattr(ctx, "getChildCount") and hasattr(ctx, "getChild"):
            count = ctx.getChildCount()
            if count == 1:
                return self.parse_expression(ctx.getChild(0))
            if count == 3:
                left = self.parse_expression(ctx.getChild(0))
                op = ctx.getChild(1)
                right = self.parse_expression(ctx.getChild(2))
                if left is not None and right is not None and hasattr(op, "getText"):
                    return BinaryExpression(
                        left=left,
                        operator=op.getText(),
                        right=right,
                        source_info=self._create_source_info(ctx),
                    )
            if count == 2:
                op = ctx.getChild(0)
                operand = self.parse_expression(ctx.getChild(1))
                if operand is not None and hasattr(op, "getText"):
                    return UnaryExpression(
                        operator=op.getText(),
                        operand=operand,
                        source_info=self._create_source_info(ctx),
                    )

        # Fallback: treat as identifier-like token
        try:
            text = ctx.getText()
        except Exception:
            text = "PlaceholderExpression"
        return IdentifierRef(
            name=text or "PlaceholderExpression", source_info=self._create_source_info(ctx)
        )

    def _strip_quotes(self, text: str) -> str:
        """Remove surrounding single or double quotes from a token text if present."""
        if len(text) >= 2 and (
            (text[0] == '"' and text[-1] == '"') or (text[0] == "'" and text[-1] == "'")
        ):
            return text[1:-1]
        return text

    def _parse_code_selector(self, ctx) -> Optional[CQLExpression]:
        """Parse Code '<code>' from <codesystemIdentifier> [display '<text>'] into CodeLiteral."""
        try:
            code_text = ctx.STRING().getText() if hasattr(ctx, "STRING") and ctx.STRING() else None
            code_val = self._strip_quotes(str(code_text)) if code_text is not None else ""
        except Exception:
            code_val = ""

        system = ""
        try:
            if hasattr(ctx, "codesystemIdentifier") and ctx.codesystemIdentifier() is not None:
                system = str(ctx.codesystemIdentifier().getText())
        except Exception:
            system = ""

        display_val = None
        try:
            if hasattr(ctx, "displayClause") and ctx.displayClause() is not None:
                d = ctx.displayClause().STRING().getText()
                display_val = self._strip_quotes(str(d))
        except Exception:
            display_val = None

        return CodeLiteral(
            code=code_val,
            system=system,
            version=None,
            display=display_val,
            source_info=self._create_source_info(ctx),
        )

    def _parse_concept_selector(self, ctx) -> Optional[CQLExpression]:
        """Parse Concept { Code ... (, Code ...)* } [display '<text>'] into ConceptLiteral."""
        codes: list[CodeLiteral] = []
        try:
            code_ctxs = ctx.codeSelector()
            if not isinstance(code_ctxs, list):
                code_ctxs = [code_ctxs]
        except Exception:
            code_ctxs = []
        for c in code_ctxs:
            code_expr = self._parse_code_selector(c)
            if isinstance(code_expr, CodeLiteral):
                codes.append(code_expr)

        display_val = None
        try:
            if hasattr(ctx, "displayClause") and ctx.displayClause() is not None:
                d = ctx.displayClause().STRING().getText()
                display_val = self._strip_quotes(str(d))
        except Exception:
            display_val = None

        return ConceptLiteral(
            codes=codes, display=display_val, source_info=self._create_source_info(ctx)
        )

    def _parse_term_expression(self, ctx) -> Optional[CQLExpression]:
        """Parse a term expression by examining its children."""
        if not hasattr(ctx, "getChildCount") or not hasattr(ctx, "getChild"):
            return None
        for i in range(ctx.getChildCount()):
            child = ctx.getChild(i)
            if child is None:
                continue
            res = self.parse_expression(child)
            if res is not None:
                # Prefer anything that isn't our placeholder
                if not isinstance(res, IdentifierRef) or res.name != "PlaceholderExpression":
                    return res
        return None

    def _parse_datetime_literal(self, ctx) -> DateTimeLiteral:
        """Parse datetime literal context."""
        text = ctx.getText()
        # Remove @ prefix if present
        value = text[1:] if text.startswith("@") else text
        return DateTimeLiteral(value=value, source_info=self._create_source_info(ctx))

    def _parse_time_literal(self, ctx) -> TimeLiteral:
        """Parse time literal context."""
        text = ctx.getText()
        # Remove @ prefix if present
        value = text[1:] if text.startswith("@") else text
        return TimeLiteral(value=value, source_info=self._create_source_info(ctx))

    def _parse_quantity_literal(self, ctx) -> QuantityLiteral:
        """Parse quantity literal context."""
        text = ctx.getText()
        # Split value and unit (simplified)
        parts = text.split()
        if len(parts) >= 2:
            value = float(parts[0])
            unit = " ".join(parts[1:]).strip("'\"")
        else:
            value = float(text)
            unit = ""

        return QuantityLiteral(value=value, unit=unit, source_info=self._create_source_info(ctx))

    def _parse_binary_expression(self, ctx, operator: str) -> Optional[BinaryExpression]:
        """Parse binary expression with specific operator."""
        if not hasattr(ctx, "getChildCount") or ctx.getChildCount() != 3:
            return None

        left = self.parse_expression(ctx.getChild(0))
        right = self.parse_expression(ctx.getChild(2))

        if left and right:
            return BinaryExpression(
                left=left,
                operator=operator,
                right=right,
                source_info=self._create_source_info(ctx),
            )
        return None

    def _parse_equality_expression(self, ctx) -> Optional[BinaryExpression]:
        """Parse equality expression (=, !=, etc.)."""
        if not hasattr(ctx, "getChildCount") or ctx.getChildCount() != 3:
            return None

        left = self.parse_expression(ctx.getChild(0))
        operator_ctx = ctx.getChild(1)
        right = self.parse_expression(ctx.getChild(2))

        if left and right and hasattr(operator_ctx, "getText"):
            operator = operator_ctx.getText()
            return BinaryExpression(
                left=left,
                operator=operator,
                right=right,
                source_info=self._create_source_info(ctx),
            )
        return None

    def _parse_inequality_expression(self, ctx) -> Optional[BinaryExpression]:
        """Parse inequality expression (<, >, <=, >=)."""
        return self._parse_equality_expression(ctx)  # Same logic

    def _parse_not_expression(self, ctx) -> Optional[UnaryExpression]:
        """Parse not expression."""
        if not hasattr(ctx, "getChildCount") or ctx.getChildCount() != 2:
            return None

        operand = self.parse_expression(ctx.getChild(1))
        if operand:
            return UnaryExpression(
                operator="not",
                operand=operand,
                source_info=self._create_source_info(ctx),
            )
        return None

    def _parse_existence_expression(self, ctx) -> Optional[UnaryExpression]:
        """Parse exists expression."""
        if not hasattr(ctx, "getChildCount") or ctx.getChildCount() != 2:
            return None

        operand = self.parse_expression(ctx.getChild(1))
        if operand:
            return UnaryExpression(
                operator="exists",
                operand=operand,
                source_info=self._create_source_info(ctx),
            )
        return None

    def _parse_between_expression(self, ctx) -> Optional[BetweenExpression]:
        """Parse between expression."""
        # Simplified - would need more complex parsing for actual between syntax
        return None

    def _parse_in_expression(self, ctx) -> Optional[InExpression]:
        """Parse in expression."""
        # Simplified - would need more complex parsing for actual in syntax
        return None

    def _parse_membership_expression(self, ctx) -> Optional[CQLExpression]:
        """Parse membership expression (property access, indexing, etc.)."""
        # Check for property access pattern
        if hasattr(ctx, "getChildCount") and ctx.getChildCount() >= 3:
            for i in range(1, ctx.getChildCount()):
                child = ctx.getChild(i)
                if hasattr(child, "getText") and child.getText() == ".":
                    if i > 0 and i < ctx.getChildCount() - 1:
                        obj_expr = self.parse_expression(ctx.getChild(i - 1))
                        prop_ctx = ctx.getChild(i + 1)
                        if obj_expr and hasattr(prop_ctx, "getText"):
                            return PropertyAccess(
                                source=obj_expr,
                                property_name=prop_ctx.getText(),
                                source_info=self._create_source_info(ctx),
                            )
        return None

    def _parse_cast_expression(self, ctx) -> Optional[TypeExpression]:
        """Parse cast expression."""
        # Simplified - would need more complex parsing
        return None

    def _parse_query_expression(self, ctx) -> Optional[CQLExpression]:
        """Parse query expression (Phase 1: single source + where/return/sort)."""
        # ctx is QueryExpressionContext with a single child query()
        if not hasattr(ctx, "query") or ctx.query() is None:
            return None

        qctx = ctx.query()

        # Parse sourceClause (required)
        if not hasattr(qctx, "sourceClause") or qctx.sourceClause() is None:
            return None

        source_clause = qctx.sourceClause()
        # Collect one or more aliasedQuerySource entries (Phase 2)
        aliased_sources: list[Any] = []
        if hasattr(source_clause, "aliasedQuerySource"):
            try:
                aqs_all = source_clause.aliasedQuerySource()
                if not isinstance(aqs_all, list):
                    aqs_all = [aqs_all]
                for aqs in aqs_all:
                    parsed = self._parse_aliased_query_source(aqs)
                    if parsed is not None:
                        aliased_sources.append(parsed)
            except Exception:
                # Fallback to index 0 if list retrieval fails
                first = self._parse_aliased_query_source(source_clause.aliasedQuerySource(0))
                if first is not None:
                    aliased_sources.append(first)

        if not aliased_sources:
            return None
        aliased = aliased_sources[0]
        additional_sources = aliased_sources[1:] if len(aliased_sources) > 1 else []

        # Optional let bindings (Phase 2)
        let_bindings: list[Any] = []
        # Collect one or more LetClause contexts robustly
        let_clause_ctxs: list[Any] = []
        # Ensure a manual-items accumulator exists for type-checkers
        _manual_items: list[Any] = []
        if hasattr(qctx, "letClause"):
            try:
                lc = qctx.letClause()
                if lc is not None:
                    if isinstance(lc, list):
                        let_clause_ctxs.extend([c for c in lc if c is not None])
                    else:
                        let_clause_ctxs.append(lc)
            except Exception:
                pass
        # Fallback: scan children to find LetClause contexts if none found
        q_any: Any = qctx
        if not let_clause_ctxs and hasattr(q_any, "getChildCount") and hasattr(q_any, "getChild"):
            try:
                # Import parser types for isinstance checks
                from .generated.cqlParser import cqlParser as _CQLP

                for i in range(q_any.getChildCount()):
                    ch = q_any.getChild(i)
                    if isinstance(ch, _CQLP.LetClauseContext):
                        let_clause_ctxs.append(ch)
            except Exception:
                pass
            # If typed check didn't find it, use a text-based heuristic
            if not let_clause_ctxs:
                try:
                    for i in range(q_any.getChildCount()):
                        ch = q_any.getChild(i)
                        txt = None
                        try:
                            txt = ch.getText()
                        except Exception:
                            txt = None
                        if txt is not None and txt.lower().startswith("let"):
                            let_clause_ctxs.append(ch)
                except Exception:
                    pass

        # If we still have no LetClause contexts, attempt range-based scan between 'let' and next clause keyword
        if not let_clause_ctxs and hasattr(q_any, "getChildCount") and hasattr(q_any, "getChild"):
            try:
                child_count = int(q_any.getChildCount())
                let_idx = -1
                # locate 'let'
                for i in range(child_count):
                    try:
                        txt = cast(str, (q_any.getChild(i).getText() or ""))
                        if txt.lower() == "let":
                            let_idx = i
                            break
                    except Exception:
                        continue
                if let_idx >= 0:
                    # find boundary of next major clause keyword
                    stop_idx: int = child_count
                    keywords = {"with", "without", "aggregate", "return", "where", "sort"}
                    for j in range(let_idx + 1, child_count):
                        try:
                            t_raw = q_any.getChild(j).getText() or ""
                            t = str(t_raw).lower()
                        except Exception:
                            t = None
                        if t in keywords:
                            stop_idx = j
                            break
                    # Collect candidate nodes between let and stop
                    candidates: list[Any] = []
                    for j in range(let_idx + 1, stop_idx):
                        try:
                            candidates.append(q_any.getChild(j))
                        except Exception:
                            pass
                    # BFS over candidates to find nodes with identifier() and expression()
                    try:
                        scan_queue: list[Any] = list(candidates)
                        seen: set[int] = set()
                        found_items: list[Any] = []
                        while scan_queue:
                            node = scan_queue.pop(0)
                            try:
                                node_id = id(node)
                                if node_id in seen:
                                    continue
                                seen.add(node_id)
                            except Exception:
                                pass
                            ident = None
                            expr_ctx = None
                            try:
                                ident = node.identifier() if hasattr(node, "identifier") else None
                            except Exception:
                                ident = None
                            try:
                                expr_ctx = (
                                    node.expression() if hasattr(node, "expression") else None
                                )
                            except Exception:
                                expr_ctx = None
                            if ident is not None and expr_ctx is not None:
                                found_items.append(node)
                                # don't break; there may be multiple items
                            # enqueue children
                            try:
                                for k in range(node.getChildCount()):
                                    scan_queue.append(node.getChild(k))
                            except Exception:
                                pass
                        if found_items:
                            let_clause_ctxs.append(q_any)  # sentinel to drive extraction below
                            # Stash found_items temporarily into local var to reuse extraction loop
                            _manual_items = found_items
                        else:
                            _manual_items = []
                    except Exception:
                        _manual_items = []
            except Exception:
                _manual_items = []
        else:
            _manual_items = []

        # Extract let items from any discovered LetClause contexts
        for lctx in let_clause_ctxs:
            l_any: Any = lctx
            items: list[Any] = []
            # Try index-based access until OOB, collecting as we go
            try:
                idx = 0
                while True:
                    it_ctx = l_any.letClauseItem(idx)
                    if it_ctx is None:
                        break
                    items.append(it_ctx)
                    idx += 1
            except Exception:
                # Fallback to no-arg variant
                try:
                    maybe_items: Any = l_any.letClauseItem()
                    if isinstance(maybe_items, list):
                        items.extend(maybe_items)
                    elif maybe_items is not None:
                        items.append(maybe_items)
                except Exception:
                    pass

            # Last-resort A: scan children for LetClauseItem contexts
            if not items and hasattr(l_any, "getChildCount") and hasattr(l_any, "getChild"):
                try:
                    from .generated.cqlParser import cqlParser as _CQLP

                    for i in range(l_any.getChildCount()):
                        ch = l_any.getChild(i)
                        if isinstance(ch, _CQLP.LetClauseItemContext):
                            items.append(ch)
                except Exception:
                    pass
            # Last-resort B: BFS search for nodes that look like LetClauseItem
            if not items and hasattr(l_any, "getChildCount") and hasattr(l_any, "getChild"):
                try:
                    bfs_queue: list[Any] = [l_any]
                    seen = set()
                    while bfs_queue and len(items) == 0:
                        node = bfs_queue.pop(0)
                        try:
                            node_id = id(node)
                            if node_id in seen:
                                continue
                            seen.add(node_id)
                        except Exception:
                            pass
                        # If node exposes identifier() and expression(), treat as item
                        try:
                            ident = node.identifier() if hasattr(node, "identifier") else None
                        except Exception:
                            ident = None
                        try:
                            expr_ctx = node.expression() if hasattr(node, "expression") else None
                        except Exception:
                            expr_ctx = None
                        if ident is not None and expr_ctx is not None:
                            items.append(node)
                            break
                        # Enqueue children
                        try:
                            for i in range(node.getChildCount()):
                                ch = node.getChild(i)
                                bfs_queue.append(ch)
                        except Exception:
                            pass
                except Exception:
                    pass
            # Last-resort C: use any manually found items from the range scan
            if not items and _manual_items:
                try:
                    for it_node in _manual_items:
                        items.append(it_node)
                except Exception:
                    pass

            for it in items:
                it_any: Any = it
                try:
                    name: str = cast(str, it_any.identifier().getText())
                except Exception:
                    name = "_"
                value_expr = None
                try:
                    if hasattr(it_any, "expression") and it_any.expression() is not None:
                        value_expr = self.parse_expression(
                            cast(ParserRuleContext, it_any.expression())
                        )
                except Exception:
                    value_expr = None

                from ..models.cql.expressions import LetBinding as _Let

                if name and value_expr is not None:
                    let_bindings.append(
                        _Let(
                            name=name,
                            expression=value_expr,
                            source_info=self._create_source_info(it_any),
                        )
                    )

        # Optional relationships (with/without) - multiple allowed
        relationships = []
        if hasattr(qctx, "queryInclusionClause"):
            try:
                incls = qctx.queryInclusionClause()
                if not isinstance(incls, list):
                    incls = [incls]
            except Exception:
                incls = []
            for ic in incls:
                kind = None
                aliased_ctx = None
                such_expr_ctx = None
                # Determine with/without branch
                if hasattr(ic, "withClause") and ic.withClause() is not None:
                    kind = "with"
                    w = ic.withClause()
                    aliased_ctx = (
                        w.aliasedQuerySource() if hasattr(w, "aliasedQuerySource") else None
                    )
                    such_expr_ctx = w.expression() if hasattr(w, "expression") else None
                elif hasattr(ic, "withoutClause") and ic.withoutClause() is not None:
                    kind = "without"
                    w = ic.withoutClause()
                    aliased_ctx = (
                        w.aliasedQuerySource() if hasattr(w, "aliasedQuerySource") else None
                    )
                    such_expr_ctx = w.expression() if hasattr(w, "expression") else None
                if kind and aliased_ctx is not None and such_expr_ctx is not None:
                    src = self._parse_aliased_query_source(aliased_ctx)
                    such_expr = self.parse_expression(such_expr_ctx)
                    if src is not None and such_expr is not None:
                        from ..models.cql.expressions import RelationshipClause as _Rel

                        relationships.append(
                            _Rel(
                                kind=kind,
                                source=src,
                                such_that=such_expr,
                                source_info=self._create_source_info(ic),
                            )
                        )

        # Optional where
        where_expr: Optional[CQLExpression] = None
        if hasattr(qctx, "whereClause") and qctx.whereClause() is not None:
            wctx = qctx.whereClause()
            if hasattr(wctx, "expression") and wctx.expression() is not None:
                where_expr = self.parse_expression(wctx.expression())

        # Optional return/select
        return_expr: Optional[CQLExpression] = None
        if hasattr(qctx, "returnClause") and qctx.returnClause() is not None:
            rctx = qctx.returnClause()
            if hasattr(rctx, "expression") and rctx.expression() is not None:
                return_expr = self.parse_expression(rctx.expression())

        # Optional aggregate vs return/select (mutually exclusive in grammar)
        aggregate = None
        if hasattr(qctx, "aggregateClause") and qctx.aggregateClause() is not None:
            actx = qctx.aggregateClause()
            acc_name = None
            try:
                acc_name = actx.identifier().getText()
            except Exception:
                acc_name = None
            init_expr = None
            if hasattr(actx, "startingClause") and actx.startingClause() is not None:
                sctx = actx.startingClause()
                # Prefer expression in parentheses form
                if hasattr(sctx, "expression") and sctx.expression() is not None:
                    init_expr = self.parse_expression(sctx.expression())
                else:
                    # Fallback: treat the starting literal text as an identifier placeholder
                    init_expr = IdentifierRef(
                        name="StartingLiteral", source_info=self._create_source_info(sctx)
                    )
            body_expr = None
            if hasattr(actx, "expression") and actx.expression() is not None:
                body_expr = self.parse_expression(actx.expression())
            if acc_name and body_expr is not None:
                from ..models.cql.expressions import AggregateClause as _Agg

                aggregate = _Agg(
                    accumulator=acc_name,
                    expression=body_expr,
                    initializer=init_expr,
                    source_info=self._create_source_info(actx),
                )

        # Optional sort
        sort_clause = None
        if hasattr(qctx, "sortClause") and qctx.sortClause() is not None:
            sort_clause = self._parse_sort_clause(qctx.sortClause())

        return QueryExpression(
            source=aliased,
            sources=additional_sources,
            let_bindings=let_bindings,
            relationships=relationships,
            where_clause=where_expr,
            return_clause=return_expr,
            aggregate_clause=aggregate,
            sort_clause=sort_clause,
            source_info=self._create_source_info(qctx),
        )

    def _parse_aliased_query_source(self, ctx) -> Optional[Any]:
        """Parse aliasedQuerySource into AliasedQuerySource (Phase 1)."""
        if ctx is None:
            return None
        # children: querySource alias
        # Parse querySource: either retrieve, qualifiedIdentifierExpression, or (expression)
        expr = None
        if hasattr(ctx, "querySource") and ctx.querySource() is not None:
            qs = ctx.querySource()
            # Prefer expressionTerm path via expression() inside parens or qualifiedIdentifierExpression
            if hasattr(qs, "expression") and qs.expression() is not None:
                expr = self.parse_expression(qs.expression())
            elif (
                hasattr(qs, "qualifiedIdentifierExpression")
                and qs.qualifiedIdentifierExpression() is not None
            ):
                expr = self._parse_identifier_ref(qs.qualifiedIdentifierExpression())
            elif hasattr(qs, "retrieve") and qs.retrieve() is not None:
                # For Phase 1, treat retrieve as an identifier-like placeholder
                expr = self._parse_identifier_ref(qs.retrieve())

        alias_text = ""
        if hasattr(ctx, "alias") and ctx.alias() is not None:
            alias_text = ctx.alias().getText()

        if expr is None or not alias_text:
            return None

        # Import model to construct AliasedQuerySource
        from ..models.cql.expressions import AliasedQuerySource as _Aliased

        return _Aliased(
            expression=expr,
            alias=alias_text,
            source_info=self._create_source_info(ctx),
        )

    def _parse_sort_clause(self, ctx):
        """Parse sortClause into SortClause with SortByItem list."""
        if ctx is None:
            return None
        from ..models.cql.expressions import SortByItem, SortClause

        items: list[SortByItem] = []
        # Grammar allows either sortDirection alone or 'by' items
        # We handle the common 'sort by <expr> dir (, <expr> dir)*' form
        if hasattr(ctx, "sortByItem"):
            sort_by_ctxs = ctx.sortByItem()
            if not isinstance(sort_by_ctxs, list):
                sort_by_ctxs = [sort_by_ctxs]
            for item_ctx in sort_by_ctxs:
                expr = None
                direction = "asc"
                if hasattr(item_ctx, "expressionTerm") and item_ctx.expressionTerm() is not None:
                    expr = self.parse_expression(item_ctx.expressionTerm())
                # Direction keyword optional
                if hasattr(item_ctx, "sortDirection") and item_ctx.sortDirection() is not None:
                    direction = item_ctx.sortDirection().getText().lower()
                    if direction == "ascending":
                        direction = "asc"
                    elif direction == "descending":
                        direction = "desc"
                if expr is not None:
                    items.append(
                        SortByItem(
                            expression=expr,
                            direction=direction,
                            source_info=self._create_source_info(item_ctx),
                        )
                    )
        return SortClause(sort_by_items=items, source_info=self._create_source_info(ctx))

    def _parse_literal(self, ctx: ParserRuleContext) -> Optional[CQLExpression]:
        """Parse literal expressions."""
        source_info = self._create_source_info(ctx)

        # Check for string literal
        if hasattr(ctx, "STRING") and ctx.STRING():
            # Remove quotes from string literal
            text = ctx.STRING().getText()
            value = text[1:-1]  # Remove surrounding quotes
            return StringLiteral(value=value, source_info=source_info)

        # Check for number literal
        if hasattr(ctx, "NUMBER") and ctx.NUMBER():
            text = ctx.NUMBER().getText()
            if "." in text:
                return DecimalLiteral(value=float(text), source_info=source_info)
            else:
                return IntegerLiteral(value=int(text), source_info=source_info)

        # Check for boolean literal
        if hasattr(ctx, "BOOLEAN") and ctx.BOOLEAN():
            text = ctx.BOOLEAN().getText().lower()
            value = text == "true"
            return BooleanLiteral(value=value, source_info=source_info)

        # Check for null literal
        if hasattr(ctx, "NULL") and ctx.NULL():
            return NullLiteral(source_info=source_info)

        return None

    def _parse_identifier_ref(self, ctx: ParserRuleContext) -> IdentifierRef:
        """Parse identifier reference."""
        name = ctx.getText()
        source_info = self._create_source_info(ctx)
        return IdentifierRef(name=name, source_info=source_info)

    def _parse_function_call(self, ctx: ParserRuleContext) -> Optional[FunctionCall]:
        """Parse function call expression."""
        # Extract function name
        function_name = "Unknown"
        if hasattr(ctx, "identifier") and ctx.identifier():
            function_name = ctx.identifier().getText()

        # For now, we'll create function calls without parsing arguments
        # TODO: Parse function arguments
        arguments: list[CQLExpression] = []

        source_info = self._create_source_info(ctx)
        return FunctionCall(
            function_name=function_name,
            arguments=arguments,
            source_info=source_info,
        )

    def _create_source_info(self, ctx: Optional[ParserRuleContext]) -> SourceInfo:
        """Create SourceInfo from either a rule context or a terminal node.

        Safely handles both ParserRuleContext (with 'start' token) and
        TerminalNodeImpl (with 'symbol' token) to avoid attribute errors.
        """
        if ctx is None:
            return SourceInfo()

        # Try to get an underlying token from the context
        token = None
        # ParserRuleContext typically has 'start'
        if hasattr(ctx, "start") and getattr(ctx, "start") is not None:
            token = getattr(ctx, "start")
        # TerminalNodeImpl exposes 'symbol' and sometimes getSymbol()
        elif hasattr(ctx, "symbol") and getattr(ctx, "symbol") is not None:
            token = getattr(ctx, "symbol")
        elif hasattr(ctx, "getSymbol"):
            try:
                token = ctx.getSymbol()
            except Exception:
                token = None

        if token is None:
            # Provide a minimal default location to satisfy non-Optional fields
            return SourceInfo(location=SourceLocation(line=0, column=0))

        # Some token implementations may not have all attributes; use getattr with defaults
        raw_line = getattr(token, "line", None)
        raw_column = getattr(token, "column", None)
        if raw_column is None:
            raw_column = getattr(token, "charPositionInLine", None)
        raw_start = getattr(token, "start", None)
        raw_stop = getattr(token, "stop", None)

        def _to_int(value, default: int = 0) -> int:
            try:
                return int(value) if value is not None else default
            except Exception:
                return default

        line = _to_int(raw_line, 0)
        column = _to_int(raw_column, 0)
        start_char = raw_start if isinstance(raw_start, int) else None
        end_char = raw_stop if isinstance(raw_stop, int) else None

        location = SourceLocation(
            line=line,
            column=column,
            start_char=start_char,
            end_char=end_char,
        )

        return SourceInfo(location=location)

    def parse_expression_string(self, expression_text: str) -> Optional[CQLExpression]:
        """Parse expression from string using ANTLR."""
        # For now, create a simple placeholder that includes the original text
        # In a full implementation, we would:
        # 1. Create a new ANTLR input stream from expression_text
        # 2. Parse it with the CQL grammar
        # 3. Convert the parse tree to our AST

        # This is a temporary implementation - return an identifier with the text
        return IdentifierRef(
            name=f"Expression({expression_text})",
            source_info=SourceInfo(),
        )
