# Technology Stack (Condensed)

## Language & Build
- Python 3.12+, UV for env and packaging; hatchling for builds.

## Key Dependencies
- antlr4-python3-runtime (grammar), jsonschema, pydantic, orjson, typer, rich.

Version notes:
- antlr4-python3-runtime pinned to 4.13.1 due to a regression in 4.13.2 that triggers an AttributeError ('EpsilonTransition' has no attribute 'followState') during parsing nested expressions in let/aggregate. Revisit pin when upstream fixes.
- Dev: pytest (+cov/xdist/benchmark), ruff, mypy, pre-commit, safety, bandit.

## Editors & Tasks
- VS Code tasks: test:watch, test:all, lint:fix, format, typecheck, build, dev:install, ci:check, security:scan, performance:test.
- Auto-format on save; ruff + mypy + pytest via CI and tasks.

## Typechecking Hygiene
- Exclude generated ANTLR files from mypy.
- Relax mypy for non-core modules: exclude `src/cql_flow/web/` and `src/cql_flow/mcp/`.
- Provide/declare stubs as needed (antlr4, psutil, etc.).

## Testing & Coverage
- Maintain tests for all new features (TASK-021).
- Targets: keep/improve coverage; run via `test:all` and `ci:check`.
- Include ELM integration tests for query conversion.

## CI/CD
- Lint (ruff format/check), typecheck (mypy), unit tests (pytest + coverage), security scans (safety, bandit).
- Multi-OS matrix; Dependabot; release workflow.

## Resources
- HL7 CQL v1.5 grammar (resources/grammar/), ELM JSON schema (resources/schemas/).

## VS Code Tasks

- test:watch — uv run ptw tests/
- test:all — uv run pytest tests --cov=src/cql_flow --cov-report=term-missing -v
- test:coverage — uv run pytest tests --cov=src/cql_flow
- lint:fix — uv run ruff check --fix .
- format:check — uv run ruff format --check .
- lint:check — uv run ruff check .
- format — uv run ruff format .
- typecheck — uv run mypy src/cql_flow tests
- build — uv build
- dev:install — uv sync --all-extras --dev
- ci:check — aggregate task that depends on format:check, lint:check, typecheck, and test:coverage (cross-shell safe)
- performance:test — uv run pytest tests/performance/ -v
- docs:build — uv run sphinx-build -b html docs docs/_build/html
- docs:serve — uv run python -m http.server -d docs/_build/html 8000 (background)

Notes:
- antlr4-python3-runtime is pinned to 4.13.1 (avoid 4.13.2 regression). Review periodically.
- ci:check is an aggregate that dependsOn other tasks; duplicate ruff output may occur; harmless.

Note: ci:check no longer uses shell chaining; it's implemented with dependsOn for cross-shell compatibility.

## Docs

- Sphinx config under docs/ (see conf.py). Build HTML with the `docs:build` task; output goes to docs/_build/html.
- New page: docs/elm_json.rst documents the ELM JSON serialization, including top-level schemaIdentifier.
 - LLM quick reference lives at `llms.md` (stable API, examples for automation).

## Tests

- Smoke tests live under tests/smoke/ and include checks for:
  - Basic converter round-trip and presence of schemaIdentifier in ELM JSON
  - ELMDocument JSON shape
  - FastAPI web API root/health presence and payload shape (auto-skips if web extra not installed)
