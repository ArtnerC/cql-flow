# Copilot instructions: elm-flow (CQL → ELM)

Use these repo-specific rules to be productive fast.

## Read first (repo steering)
- Consult `.github/instructions/` before changes:
  - requirements.instructions.md (scope, acceptance)
  - design.instructions.md (types/contracts, naming)
  - tech.instructions.md (stack, tasks, build)
  - tasks.instructions.md (active work only)

## Architecture (big picture)
- Pipeline: Parsing → AST → Validation → ELM Generation → JSON
  - Parsing: `src/cql_flow/parsing/` (ANTLR in `parsing/generated/`). Always attach `SourceInfo`.
  - Models: `src/cql_flow/models/{cql,elm,common}/`
  - Validation: `src/cql_flow/validator/` (+ `validator/rules/`)
  - ELM build: `src/cql_flow/generator/elm_builder.py`
  - Public API: `src/cql_flow/api/converter.py` (`CQLToELMConverter`, `ConversionResult`)
- JSON shape: top-level `schemaIdentifier` duplicated by design (see `docs/elm_json.rst`).

## Workflows (Windows-friendly)
- Setup (Python 3.12+): `uv sync --all-extras --dev`
- CI gates locally:
  - Format: `uv run ruff format --check .`
  - Lint: `uv run ruff check .`
  - Types: `uv run mypy src/cql_flow tests`
  - Tests: `uv run pytest tests --cov=src/cql_flow`
- VS Code tasks: `ci:check`, `test:all`, `test:watch`, `typecheck`, `format`, `lint:fix`.
- CLI plain mode (Windows/CI): `--plain` or env `CQL_FLOW_PLAIN_TEXT=true`.

## Conventions & constraints
- Python 3.12+, Ruff formatting (line-length 100). Imports organized per Ruff.
- Mypy excludes: generated ANTLR, `src/cql_flow/web/`, `src/cql_flow/mcp/`.
- ANTLR runtime pinned to 4.13.1 (avoid 4.13.2).
- Keep `SourceInfo` propagation intact; reuse existing helpers and types.

## Public surfaces & examples
- Python API:
  ```python
  from cql_flow.api.converter import CQLToELMConverter
  res = CQLToELMConverter().with_validation(True).convert_file("examples/cql/simple.cql")
  if res.success: print(res.get_elm_json())
  ```
- CLI (Typer): `uv run elm-flow convert examples\simple.cql --plain`
- Web (FastAPI): `cql_flow.web.api:app` → `GET /health`, `POST /convert|/validate|/upload|/batch`, `WS /ws`, `GET /ui`
- MCP server: `src/cql_flow/mcp/server.py` → tools `convert_cql_file|content`, `validate_cql_file|content`, `batch_convert_cql`, `analyze_cql_performance`

## Tests & reference corpus
- Tests in `tests/` (unit/integration/CLI/reference). Keep output signatures stable.
- Reference data under `tests/reference/`.

## When changing behavior
- Update requirements/design docs; add focused tests (happy path + 1 edge).
- Preserve JSON shapes (see `docs/elm_json.rst`) and CLI plain-mode behaviors.

See also: `llms.md` (LLM usage), `docs/elm_json.rst` (JSON specifics).
