# Design Architecture (Condensed)

## Architecture
- Layers: Parser → AST → Validator → ELM Builder → JSON.
- Separation: parsing (ANTLR contexts → AST), semantic validation, ELM generation.

## AST Contracts (Key Types)
- Always attach SourceInfo when creating nodes.
- Keep arguments as Expressions; do not evaluate during parse.

Expressions (selected):
- PropertyAccess(source, property_name)
- IndexerExpression(expression, index)
- InExpression(element, collection)
- BetweenExpression(expression, low, high)
- TypeExpression(expression, target_type)
- IntervalExpression(low, high, low_closed, high_closed)
- TemporalExpression(operator: 'start'|'end', operand)
- DateTimeExpression(year?, month?, day?, hour?, minute?, second?, millisecond?, timezone?)
- Terminology:
  - CodeLiteral(code: str, system: str, version?: str, display?: str)
  - ConceptLiteral(codes: List[CodeLiteral], display?: str)

QueryExpression (incremental):
- source: AliasedQuerySource               # Phase 1
- where_clause?: Expression                # Phase 1
- return_clause?: Expression               # Phase 1
- sort_clause?: SortClause                 # Phase 1
- let_clauses: List[(name: str, expr: Expression)]           # Phase 2
- relationships: List[RelationshipClause]  # Phase 2 (with/without)
- aggregate_clause?: AggregateClause       # Phase 2
  # Grammar constraint: aggregate and return/select are mutually exclusive within one query
- source_info: SourceInfo

Supporting types:
- AliasedQuerySource(expression: Expression, alias: str, source_info)
- SortClause(sort_by_items: List[SortByItem], source_info)
- SortByItem(expression: Expression, direction: 'asc'|'desc', source_info)
- RelationshipClause(kind: 'with'|'without', source: AliasedQuerySource, such_that: Expression, source_info)
- LetBinding(name: str, expression: Expression, source_info)
- AggregateClause(accumulator: str, initializer: Expression, source_info)

Phase 2 concrete shapes (parser/converter contracts):
- LetBinding: { name: str, expression: Expression, source_info }
- RelationshipClause: { kind: 'with'|'without', source: AliasedQuerySource, such_that: Expression, source_info }
- AggregateClause: { accumulator: str, initializer?: Expression, expression: Expression, source_info }

Naming rules:
- Use explicit field names (e.g., source vs object)
- Keep small, focused helpers per grammar construct
- Prefer typed ANTLR accessors; fallback to child scans guardedly

## Parser Strategy (Essentials)
- Dispatch on specific context classes first; then fallback on children.
- Parenthesized detection via '(' expr ')'. 
- Temporal boundary via start|end of X or TimeBoundaryExpressionTerm.
- Interval selector via bracket/paren delimiters.
- Query parsing: support multiple sources, let, relationships, where, return/select, sort, aggregate.
  - Enforce exclusivity: aggregate and return/select are mutually exclusive in a single query.
- Terminology declarations:
  - Implement enterCodesystemDefinition/enterCodeDefinition in tree builder to populate CQLLibrary.codesystems and CQLLibrary.codes.
- Terminology literals:
  - Handle codeSelector and conceptSelector contexts in expression parser, producing CodeLiteral and ConceptLiteral with SourceInfo.
  - Extract STRING tokens and optional display clauses; resolve codesystemIdentifier as plain text for now.

## ELM Mapping (Essentials)
- QueryExpression → ELM Query:
  - Phase 1 shape:
    - type: Query
    - source: [{ alias, expression }]
    - where?: <ELMExpression>
    - return?: <ELMExpression>
    - sort?: { by: [{ direction: 'asc'|'desc', expression }] }
  - Phase 2 additions:
  - let: [{ name, expression }]
  - relationships: [{ type: 'With'|'Without', source: { alias, expression }, suchThat: <ELMExpression> }]
  - aggregate: { starting?: <ELMExpression>, accumulator: { name, expression: <ELMExpression> } }
- Preserve SourceInfo via ELM annotations.
- Terminology mapping (minimal viable):
  - CodeLiteral → FunctionRef(name="Code", operand=[Literal(String code), Literal(String system), (optional) Literal(String version), (optional) Literal(String display)])
  - ConceptLiteral → FunctionRef(name="Concept", operand=[Code(...), ...])

## Conventions
- Reuse existing helpers; avoid duplicate utilities.
- Record any abstraction limits and TODOs inline near implementation.

## Validator Strategy
- Rules executed by DEFAULT_RULE_ENGINE; scope/type/symbol resolution kept lightweight.
- Undefined symbol detection heuristic:
  - Strip quoted string literals before scanning for identifiers.
  - Skip expressions containing non-basic characters (anything beyond [A-Za-z0-9_\s+\-*/%]).
  - Exclude CQL keywords and common built-ins.
  - Intent: avoid false positives from display strings and compacted query strings in reference corpus.

## CLI Design Notes
- Typer app (`cql_flow.cli.main:app`) exposes `convert`, `batch`, `validate`, and `version` commands.
- Plain mode: use `--plain` or env `CQL_FLOW_PLAIN_TEXT=true` to avoid rich formatting for CI/Windows.
- Contracts for smoke tests:
  - `version --plain` prints a single line containing "cql-flow version" and exits 0.
  - `convert <file> --plain` or with env `CQL_FLOW_PLAIN_TEXT=true` defaults output to `<file>.elm.json` and exits 0 on success.
  - `validate <file>` prints "Validation passed" when env `CQL_FLOW_PLAIN_TEXT=true` and exits 0 on success.
  - `batch <dir> --output-dir <out>` processes `*.cql` when env `CQL_FLOW_PLAIN_TEXT=true` and writes `<name>.elm.json` files to `<out>`.
  - These tests are black-box; no parser/grammar changes are permitted.
