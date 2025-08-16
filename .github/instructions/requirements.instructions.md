# Requirements Specification: CQL to ELM Converter (Condensed)

## Vision & Scope
- Convert CQL (HL7 v1.5.x) to valid ELM JSON with Python API and CLI.
- Primary users: clinical informaticists and developers.

## Core Functional Requirements

### US-001: Parse CQL Library Structure
- Parse library header, includes, definitions, parameters, functions.
- Validate syntax; return structured errors with source locations.

### US-002: Validate CQL Semantics
- Type checking, symbol resolution, scope validation.
- Data model compatibility; function signature checks.

### US-011: Parse Core Expression Forms
- Literals: string, boolean, integer, decimal, null, date/time/quantity.
- Unary: not, exists, numeric negation.
- Binary: equality/inequality, and/or, +, -, *, /.
- Property/indexing: obj.prop, list[index].
- Parenthesized: (expr).
- Membership/range: in, between.
- Cast: expr as TypeName.
- Temporal: start|end of X; DateTime(...).
- Interval selector: Interval [low, high] | (low, high).
- SourceInfo attached for all.

### US-013: Terminology Literals and Declarations
- Parse top-level terminology declarations:
	- codesystem <Identifier>: <STRING> [version <STRING>]
	- code <Identifier>: <STRING> from <CodesystemIdentifier> [display <STRING>]
- Parse terminology literals in expressions:
	- Code '<code>' from <CodesystemIdentifier> [display '<text>']
	- Concept { Code '<code>' from <CodesystemIdentifier> [display '<text>'], ... } [display '<text>']
- Populate CQLLibrary.codesystems and CQLLibrary.codes; ensure SourceInfo on each.
- Expression AST must include CodeLiteral and ConceptLiteral nodes with SourceInfo.
- Validator should treat 'code', 'concept', and 'display' as keywords to avoid false undefined symbol errors.
- ELM conversion: map CodeLiteral/ConceptLiteral to reasonable ELM nodes (placeholder FunctionRef acceptable for now) to keep pipeline green.

### US-012: Parse Query Expressions (Incremental)
- Phase 1 (Minimal slice):
	- Parse single aliased source: `from <expr> <alias>`
	- Optional `where` predicate
	- Optional `return` projection (or `select`)
	- Optional `sort by` with one or more items and directions (`asc|ascending|desc|descending`)
	- Attach SourceInfo to QueryExpression, AliasedQuerySource, SortClause, SortByItem
	- Gracefully ignore unsupported clauses (let/with/without/aggregate) for now
- Phase 2 (Full):
	- Support multiple sources in `from`
	- Support `let` bindings (multiple)
	- Support `with`/`without` relationship clauses with `such that`
	- Support `aggregate` clause with optional initializer and required accumulator name and expression
	- Note: Per canonical grammar, `aggregate` and `return` are mutually exclusive in a single query (i.e., a query may have either an `aggregate` clause or a `return`/`select` clause, not both)
	- Preserve SourceInfo for all additional nodes; emit clear errors on invalid queries
	- Acceptance (minimal ELM shape parity):
		- let: list of { name, expression }
	  - relationships: list of { type: 'With'|'Without', source: { alias, expression }, suchThat }
	  - aggregate: { starting?: <expr>, accumulator: { name, expression } }

  Phase 2 breakdown (deliver incrementally, each with tests):
  - P2a Let: parse letClause items -> AST let bindings -> ELM let list
  - P2b Relationships: parse queryInclusionClause (with/without) with aliasedQuerySource and such that -> AST relationships -> ELM relationships list
  - P2c Aggregate: parse aggregateClause (identifier, optional startingClause, body expression) -> AST aggregate -> ELM aggregate object

Acceptance for US-013 (minimal):
- Libraries with codesystem/code declarations parse without errors and surface them in the AST.
- Expressions using Code/Concept literals parse into AST and survive ELM conversion.
- Reference corpus samples previously skipped due to terminology literals can be enabled incrementally.

### US-003: Generate ELM JSON
- Convert validated AST to ELM; include locations; validate against schema.

## Non-Functional Requirements (Essentials)
- Performance: typical library (<1000 lines) < 2s; large files up to 10MB.
- Compatibility: Python 3.12+, cross-platform.
- Security: safe input handling; no code execution.
- CLI UX: Typer-based CLI must respond in plain output mode for CI/Windows shells; minimal commands
	- `version` prints version string and exits 0
	- `convert <file>` with `--plain` (or env `CQL_FLOW_PLAIN_TEXT=true`) produces `<file>.elm.json` and exits 0 on success
	- `validate <file>` reports pass/fail in plain mode when env `CQL_FLOW_PLAIN_TEXT=true`
	- `batch <dir>` processes matching files and writes outputs to `--output-dir` in plain mode when env `CQL_FLOW_PLAIN_TEXT=true`

Validation behavior constraints:
- The undefined-symbol validator must avoid false positives from words inside quoted strings (e.g., display texts) and complex CQL query strings. Limit undefined-symbol scanning to simple identifier/math forms only.

## Success Metrics
- Convert HL7 reference libraries; ELM validates.
- Tests green with high coverage; CI gates pass.
 - CLI smoke tests pass on Windows (cmd.exe) and Unix shells in CI.

## Backlog (Selected Advanced Features)

- Advanced temporal operations beyond start/end (durations, arithmetic)
- Set literals and membership operators (in, contains) where not already implemented
- Code/Concept literals and terminology operations
- Additional query capabilities not covered by Phases 1–2 (e.g., collapse/flatten helpers)
- Enhanced built-in function coverage (exists, First/Count variations, list/aggregate funcs)
