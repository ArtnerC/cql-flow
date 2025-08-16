# CQL to ELM Converter

Python library and CLI for converting Clinical Quality Language (CQL) to Expression Logical Model (ELM) JSON.

## Highlights

- Query parsing Phases 1–2 supported (multi-source FROM, let, with/without, aggregate; aggregate XOR return/select)
- CLI plain mode for Windows/CI via `--plain` or env `CQL_FLOW_PLAIN_TEXT=true`
- Cross-shell VS Code tasks: format, lint, typecheck, tests; aggregate `ci:check`

## Quick Start

### Installation

Use a local clone and UV for development.

```bat
git clone https://github.com/<your-org>/cql-flow.git
cd cql-flow
uv sync --all-extras --dev
```

### Basic Usage

```python
from cql_flow import CQLToELMConverter

# Convert CQL to ELM
converter = CQLToELMConverter()
result = converter.convert_file("library.cql")

if result.success:
    print(f"Generated ELM: {result.elm_json}")
else:
    print(f"Conversion failed: {result.errors}")
```

### CLI Usage

```bat
:: Show version in plain mode
uv run cql-flow version --plain

:: Convert a single file (plain mode recommended on Windows/CI)
uv run cql-flow convert examples\simple.cql --plain

:: Validate a CQL file (plain mode via env)
set CQL_FLOW_PLAIN_TEXT=true && uv run cql-flow validate examples\simple.cql

:: Batch convert a folder to an output directory (plain mode via env)
set CQL_FLOW_PLAIN_TEXT=true && uv run cql-flow batch examples\cql --output-dir examples\elm
```

### Development

- Requires Python 3.12+ and UV
- Predefined VS Code tasks (Run Task):
  - test:all, test:coverage, test:watch
  - format, lint:fix, lint:check
  - typecheck, build, dev:install
  - ci:check (aggregates format:check, lint:check, typecheck, test:coverage)

### Running Tests

```bat
uv run pytest tests --cov=src/cql_flow
```

### Code Quality

```bat
uv run ruff format --check .
uv run ruff check .
uv run mypy src/cql_flow tests
uv run pytest tests --cov=src/cql_flow
```

### VS Code Integration

The project includes comprehensive VS Code configuration:

- **Tasks**: Run tests, linting, formatting, and CI checks via Command Palette
- **Settings**: Auto-format on save, integrated linting
- **Extensions**: Recommended extensions for Python development
- **Debugging**: Pre-configured debug configurations

Access tasks via `Ctrl+Shift+P` → "Tasks: Run Task":

- `test:all` - Run full test suite with coverage
- `ci:check` - Run complete CI pipeline locally
- `security:scan` - Run security analysis
- `performance:test` - Run performance benchmarks

## Notes

- The ANTLR runtime is pinned to 4.13.1 due to a regression in 4.13.2. See `.github/instructions/tech.instructions.md`.

## LLM quick reference

If you're integrating this package in an LLM toolchain, see `llms.md` for a concise, stable API overview with examples.

## Testing

The project maintains comprehensive automated tests:

- Unit tests across core modules
- Integration and CLI smoke tests
- Property-based tests (Hypothesis)
- Performance and security checks (optional tasks)

### Test Categories

- `tests/models/` - AST model validation
- `tests/parsing/` - Parser and grammar tests
- `tests/validation/` - Semantic validation rules
- `tests/generation/` - ELM output generation
- `tests/api/` - Python API interface
- `tests/cli/` - Command-line interface
- `tests/integration/` - End-to-end workflows
- `tests/performance/` - Benchmarks and profiling

## Contributing

Contributions are welcome. Please add tests for any changes and keep CI green.
