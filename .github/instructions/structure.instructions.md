# Project Structure: CQL to ELM Converter

## Directory Organization

```
elm-flow/
├── .github/
│   ├── instructions/           # Project steering documents
│   │   ├── requirements.instructions.md
│   │   ├── design.instructions.md
│   │   ├── tech.instructions.md
│   │   ├── structure.instructions.md
│   │   ├── tasks.instructions.md
│   │   └── product.instructions.md
│   └── workflows/             # CI/CD workflows
│       ├── test.yml
│       ├── lint.yml
│       └── release.yml
├── .vscode/                   # VS Code configuration
│   ├── settings.json
│   ├── tasks.json
│   ├── launch.json
│   └── extensions.json
├── docs/                      # Documentation
│   ├── api/                   # API documentation
│   ├── examples/              # Usage examples
│   ├── tutorials/             # Step-by-step guides
│   └── reference/             # Reference materials
├── resources/                 # External resources
│   ├── grammar/              # CQL ANTLR grammar files
│   ├── schemas/              # ELM JSON schemas
│   ├── test-data/            # Test CQL libraries
│   └── examples/             # Example CQL/ELM pairs
├── src/
│   └── cql_flow/             # Main package
│       ├── __init__.py
│       ├── cli/              # Command-line interface
│       ├── core/             # Core conversion logic
│       ├── parser/           # CQL parsing components
│       ├── validator/        # Semantic validation
│       ├── generator/        # ELM generation
│       ├── models/           # Data models and AST
│       ├── utils/            # Utility functions
│       └── web/              # Web interface (stretch goal)
├── tests/                    # Test suite
│   ├── unit/                 # Unit tests
│   ├── integration/          # Integration tests
│   ├── performance/          # Performance benchmarks
│   ├── fixtures/             # Test data and fixtures
│   └── golden/               # Expected outputs
├── scripts/                  # Development scripts
│   ├── setup-dev.sh         # Development environment setup
│   ├── run-tests.sh         # Test execution script
│   └── generate-docs.sh     # Documentation generation
├── pyproject.toml           # Project configuration
├── uv.lock                  # Dependency lock file
├── README.md                # Project overview
├── CHANGELOG.md             # Version history
├── LICENSE                  # License file
└── .gitignore              # Git ignore patterns
```

## Source Code Organization

### Core Package Structure (`src/cql_flow/`)

#### Main Entry Points
```
cql_flow/
├── __init__.py              # Package initialization, public API
├── main.py                  # CLI entry point
└── api.py                   # Python API entry point
```

#### Command-Line Interface (`cli/`)
```
cli/
├── __init__.py
├── main.py                  # CLI application entry
├── commands/                # Command implementations
│   ├── __init__.py
│   ├── convert.py          # Single file conversion
│   ├── batch.py            # Batch processing
│   ├── validate.py         # Validation only
│   └── serve.py            # Web server (stretch goal)
├── options.py              # CLI option definitions
└── output.py               # Output formatting
```

#### Core Conversion Logic (`core/`)
```
core/
├── __init__.py
├── converter.py            # Main CQLToELMConverter class
├── pipeline.py             # Conversion pipeline orchestration
├── context.py              # Conversion context management
├── options.py              # Conversion options
├── result.py               # Result objects
└── exceptions.py           # Core exceptions
```

#### CQL Parser Components (`parser/`)
```
parser/
├── __init__.py
├── lexer.py                # CQL lexical analysis
├── parser.py               # CQL syntactic analysis
├── grammar/                # ANTLR grammar files
│   ├── CQL.g4             # CQL grammar definition
│   └── generated/         # Generated parser files
├── ast_builder.py          # AST construction
├── error_handler.py        # Parse error handling
└── source_info.py          # Source location tracking
```

#### Semantic Validation (`validator/`)
```
validator/
├── __init__.py
├── semantic_validator.py   # Main validation logic
├── type_system.py          # CQL type system
├── symbol_table.py         # Symbol resolution
├── scope_manager.py        # Scope management
├── dependency_resolver.py  # Library dependency resolution
└── rules/                  # Validation rules
    ├── __init__.py
    ├── type_rules.py
    ├── scope_rules.py
    └── semantic_rules.py
```

#### ELM Generation (`generator/`)
```
generator/
├── __init__.py
├── elm_builder.py          # ELM tree construction
├── expression_builder.py   # Expression conversion
├── optimizer.py            # ELM optimization
├── serializer.py           # JSON serialization
└── templates/              # ELM templates
    ├── library_template.py
    └── expression_templates.py
```

#### Data Models (`models/`)
```
models/
├── __init__.py
├── cql/                    # CQL AST models
│   ├── __init__.py
│   ├── library.py         # Library structure
│   ├── expressions.py     # Expression AST
│   ├── statements.py      # Statement AST
│   └── types.py           # Type system models
├── elm/                    # ELM models
│   ├── __init__.py
│   ├── library.py         # ELM library structure
│   ├── expressions.py     # ELM expression tree
│   └── types.py           # ELM type representations
├── common/                 # Shared models
│   ├── __init__.py
│   ├── source_info.py     # Source location info
│   ├── errors.py          # Error models
│   └── metadata.py        # Metadata models
└── schemas/                # JSON schemas
    ├── elm_schema.py      # ELM schema definitions
    └── validation.py      # Schema validation
```

#### Utilities (`utils/`)
```
utils/
├── __init__.py
├── file_utils.py           # File I/O utilities
├── json_utils.py           # JSON processing
├── logging_config.py       # Logging configuration
├── performance.py          # Performance monitoring
└── validation_utils.py     # Validation helpers
```

#### Web Interface (`web/`) - Stretch Goal
```
web/
├── __init__.py
├── app.py                  # FastAPI application
├── routes/                 # API routes
│   ├── __init__.py
│   ├── conversion.py      # Conversion endpoints
│   └── validation.py      # Validation endpoints
├── static/                 # Static files
│   ├── css/
│   ├── js/
│   └── assets/
├── templates/              # HTML templates
│   ├── index.html
│   ├── editor.html
│   └── results.html
└── models/                 # Web-specific models
    ├── __init__.py
    ├── requests.py        # Request models
    └── responses.py       # Response models
```

## Test Organization (`tests/`)

### Test Structure
```
tests/
├── conftest.py             # Pytest configuration
├── unit/                   # Unit tests (mirror src structure)
│   ├── test_core/
│   ├── test_parser/
│   ├── test_validator/
│   ├── test_generator/
│   └── test_models/
├── integration/            # Integration tests
│   ├── test_end_to_end.py
│   ├── test_cli_integration.py
│   └── test_api_integration.py
├── performance/            # Performance tests
│   ├── test_conversion_speed.py
│   ├── test_memory_usage.py
│   └── benchmarks/
├── fixtures/               # Test data
│   ├── cql_libraries/     # Sample CQL files
│   ├── expected_elm/      # Expected ELM outputs
│   └── invalid_cql/       # Error test cases
└── golden/                 # Golden file testing
    ├── reference_outputs/
    └── test_runner.py
```

## Configuration Files

### VS Code Configuration (`.vscode/`)

#### `settings.json` - Workspace Settings
```json
{
    "python.defaultInterpreterPath": "./.venv/bin/python",
    "python.testing.pytestEnabled": true,
    "python.testing.pytestArgs": ["tests"],
    "python.linting.enabled": true,
    "python.linting.ruffEnabled": true,
    "python.formatting.provider": "ruff",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.organizeImports": true,
        "source.fixAll": true
    },
    "files.watcherExclude": {
        "**/.venv/**": true,
        "**/node_modules/**": true
    }
}
```

#### `tasks.json` - Development Tasks
```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "test:watch",
            "type": "shell",
            "command": "uv run pytest --watch",
            "group": "test",
            "isBackground": true
        },
        {
            "label": "lint:fix", 
            "type": "shell",
            "command": "uv run ruff check --fix .",
            "group": "build"
        },
        {
            "label": "typecheck",
            "type": "shell", 
            "command": "uv run mypy src/",
            "group": "build"
        }
    ]
}
```

## File Naming Conventions

### Python Files
- **Modules**: `snake_case.py`
- **Classes**: `PascalCase` in files named after primary class
- **Functions**: `snake_case`
- **Constants**: `UPPER_SNAKE_CASE`
- **Private members**: `_leading_underscore`

### Test Files
- **Pattern**: `test_<module_name>.py`
- **Test classes**: `Test<ClassName>`
- **Test methods**: `test_<functionality>`
- **Fixtures**: `<resource_name>_fixture`

### Resource Files
- **CQL files**: `*.cql`
- **ELM files**: `*.elm.json`
- **Schema files**: `*.schema.json`
- **Grammar files**: `*.g4`

### Documentation Files
- **Markdown**: `snake_case.md`
- **API docs**: Auto-generated from docstrings
- **Examples**: `example_<use_case>.py`

## Import Organization

### Import Ordering (per PEP 8)
```python
# Standard library imports
import os
import sys
from pathlib import Path
from typing import List, Optional, Dict, Any

# Third-party imports
import click
from pydantic import BaseModel

# Local application imports
from cql_flow.core import converter
from cql_flow.models.cql import library
from cql_flow.utils import file_utils
```

### Namespace Guidelines
- **Absolute imports**: Always use absolute imports in src/
- **Relative imports**: Only for internal package modules
- **Public API**: Export through `__init__.py` files
- **Private modules**: Use `_` prefix for internal modules

## Dependency Management

### Development Dependencies Organization
```toml
[project.optional-dependencies]
# Core development tools
dev = [
    "pytest>=8.0.0",
    "ruff>=0.1.14", 
    "mypy>=1.8.0",
    "pre-commit>=3.6.0"
]

# Performance testing
perf = [
    "pytest-benchmark>=4.0.0",
    "memory-profiler>=0.61.0"
]

# Web interface (stretch goal)
web = [
    "fastapi>=0.109.2",
    "uvicorn>=0.27.0"
]

# Documentation
docs = [
    "sphinx>=7.2.6",
    "sphinx-autodoc-typehints>=1.25.2"
]
```

## Build and Deployment Structure

### Package Configuration
- **Entry points**: Defined in `pyproject.toml`
- **Scripts**: Located in `scripts/` directory
- **Resources**: Included via `package_data`
- **Version**: Single source in `src/cql_flow/__init__.py`

### Distribution
- **Source distribution**: Via `uv build`
- **Wheel distribution**: Cross-platform Python wheel
- **Docker image**: Optional containerized deployment
- **CLI binary**: Consider PyInstaller for standalone executable

This structure ensures:
1. **Clear separation of concerns** between different components
2. **Scalable organization** that can grow with the project
3. **Standard Python practices** for packaging and distribution
4. **Comprehensive testing** with appropriate test organization
5. **Developer-friendly** configuration and tooling setup
