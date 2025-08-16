============
Contributing
============

We welcome contributions to ELM Flow! This guide will help you get started.

Getting Started
===============

Prerequisites
-------------

- Python 3.11 or higher
- `UV <https://github.com/astral-sh/uv>`_ (recommended) or pip
- Git
- VS Code (recommended for development)

Development Environment Setup
-----------------------------

1. **Fork and Clone**

   .. code-block:: bash

      git clone https://github.com/your-username/elm-flow.git
      cd elm-flow

2. **Install Dependencies**

   .. code-block:: bash

      # With UV (recommended)
      uv sync --all-extras --dev
      
      # Or with pip
      pip install -e ".[dev,web,docs]"

3. **Install Pre-commit Hooks**

   .. code-block:: bash

      uv run pre-commit install

4. **Verify Setup**

   .. code-block:: bash

      uv run pytest
      uv run ruff check .
      uv run mypy src/cql_flow

VS Code Integration
===================

The project includes comprehensive VS Code configuration:

Required Extensions
-------------------

Install these extensions (`.vscode/extensions.json`):

- Python (ms-python.python)
- Pylance (ms-python.vscode-pylance)
- Ruff (charliermarsh.ruff)
- Python Test Explorer (ms-python.pytest)
- MyPy Type Checker (ms-python.mypy-type-checker)

Available Tasks
---------------

Access via `Ctrl+Shift+P` → "Tasks: Run Task":

- **test:all**: Run full test suite with coverage
- **ci:check**: Run complete CI pipeline locally
- **security:scan**: Run security analysis
- **performance:test**: Run performance benchmarks
- **lint:fix**: Fix linting issues automatically
- **format**: Format all code

Development Workflow
====================

1. **Create Feature Branch**

   .. code-block:: bash

      git checkout -b feature/your-feature-name

2. **Make Changes**

   - Follow the code style guidelines
   - Add tests for new functionality
   - Update documentation as needed

3. **Run Quality Checks**

   .. code-block:: bash

      # Format code
      uv run ruff format .
      
      # Fix linting issues
      uv run ruff check --fix .
      
      # Check types
      uv run mypy src/cql_flow tests
      
      # Run tests
      uv run pytest

4. **Run Full CI Pipeline**

   .. code-block:: bash

      # All quality checks in one command
      uv run ruff format --check . && \
      uv run ruff check . && \
      uv run mypy src/cql_flow tests && \
      uv run pytest tests --cov=src/cql_flow

5. **Commit Changes**

   .. code-block:: bash

      git add .
      git commit -m "feat: add your feature description"

6. **Push and Create PR**

   .. code-block:: bash

      git push origin feature/your-feature-name

Code Style Guidelines
=====================

We follow these conventions:

Formatting
----------

- **Black/Ruff formatting**: Enforced automatically
- **Line length**: 88 characters (ruff default)
- **Import sorting**: Handled by ruff
- **Quote style**: Double quotes preferred

Type Hints
----------

- **Required**: All public APIs must have type hints
- **Style**: Use `typing` module for Python 3.11 compatibility
- **Generics**: Use proper generic types for containers

.. code-block:: python

   from typing import List, Dict, Optional, Union
   
   def convert_files(files: List[str]) -> Dict[str, ConversionResult]:
       """Convert multiple CQL files."""
       ...

Documentation
-------------

- **Docstrings**: Google-style docstrings for all public APIs
- **Type information**: Include parameter and return types
- **Examples**: Provide usage examples for complex functions

.. code-block:: python

   def convert_file(self, file_path: str, library_name: Optional[str] = None) -> ConversionResult:
       """Convert a CQL file to ELM JSON.
       
       Args:
           file_path: Path to the CQL file to convert
           library_name: Optional library name override
           
       Returns:
           ConversionResult containing ELM JSON and metadata
           
       Raises:
           FileNotFoundError: If the input file doesn't exist
           CQLParseError: If the CQL file has syntax errors
           
       Example:
           >>> converter = CQLToELMConverter()
           >>> result = converter.convert_file("library.cql")
           >>> if result.success:
           ...     print(result.elm_json)
       """

Testing Guidelines
==================

We maintain comprehensive test coverage:

Test Structure
--------------

.. code-block:: text

   tests/
   ├── models/          # AST model tests
   ├── parsing/         # Parser tests
   ├── validation/      # Validation rule tests
   ├── generation/      # ELM generation tests
   ├── api/            # API interface tests
   ├── cli/            # CLI tests
   ├── integration/    # End-to-end tests
   ├── performance/    # Benchmark tests
   └── property/       # Property-based tests

Writing Tests
-------------

- **Unit tests**: Test individual components in isolation
- **Integration tests**: Test complete workflows
- **Property tests**: Use Hypothesis for edge case discovery
- **Performance tests**: Benchmark critical paths

.. code-block:: python

   import pytest
   from hypothesis import given, strategies as st
   from cql_flow import CQLToELMConverter
   
   class TestCQLConverter:
       
       def test_simple_conversion(self):
           """Test basic CQL to ELM conversion."""
           converter = CQLToELMConverter()
           result = converter.convert_text(
               "library Test version '1.0.0'\ndefine 'Hello': 'World'",
               library_name="Test"
           )
           
           assert result.success
           assert result.elm_json["library"]["identifier"]["id"] == "Test"
       
       @given(st.text(min_size=1, max_size=100))
       def test_string_literals(self, text):
           """Test string literal handling with property-based testing."""
           converter = CQLToELMConverter()
           cql = f"library Test version '1.0.0'\ndefine 'TestString': '{text}'"
           result = converter.convert_text(cql, library_name="Test")
           
           # Should either succeed or fail gracefully
           if result.success:
               assert result.elm_json is not None
           else:
               assert len(result.errors) > 0

Running Tests
-------------

.. code-block:: bash

   # All tests
   uv run pytest
   
   # With coverage
   uv run pytest --cov=src/cql_flow --cov-report=term-missing
   
   # Specific test file
   uv run pytest tests/api/test_converter.py -v
   
   # Performance tests only
   uv run pytest tests/performance/ -v
   
   # Property-based tests (may take longer)
   uv run pytest tests/property/ -v

Architecture Guidelines
=======================

Project Structure
-----------------

.. code-block:: text

   src/cql_flow/
   ├── __init__.py          # Public API exports
   ├── models/              # CQL and ELM AST models
   │   ├── cql/            # CQL AST classes
   │   ├── elm/            # ELM AST classes
   │   └── shared/         # Shared model components
   ├── parsing/            # CQL parsing components
   │   ├── generated/      # ANTLR generated files
   │   ├── lexer.py        # CQL lexer wrapper
   │   └── parser.py       # CQL parser wrapper
   ├── validation/         # Semantic validation
   │   ├── rules/          # Individual validation rules
   │   └── validator.py    # Main validation coordinator
   ├── generation/         # ELM generation
   │   └── elm_builder.py  # CQL to ELM converter
   ├── api/               # Public Python API
   │   └── converter.py    # Main converter interface
   └── cli/               # Command-line interface
       └── main.py         # CLI implementation

Design Principles
-----------------

1. **Separation of Concerns**: Each module has a single, well-defined responsibility
2. **Immutable Data**: AST models are immutable where possible
3. **Error Handling**: Comprehensive error collection and reporting
4. **Performance**: Efficient parsing and processing for large files
5. **Extensibility**: Plugin architecture for custom validation rules

Adding New Features
===================

Parser Extensions
-----------------

To add support for new CQL constructs:

1. Update the ANTLR grammar (if needed)
2. Add new AST model classes
3. Extend the tree builder to handle new nodes
4. Add validation rules
5. Update ELM generation
6. Write comprehensive tests

Validation Rules
----------------

To add new validation rules:

1. Create a new rule class inheriting from `ValidationRule`
2. Implement the `validate` method
3. Add the rule to the validator configuration
4. Write tests covering all edge cases

.. code-block:: python

   from cql_flow.validation.rules.base import ValidationRule
   from cql_flow.models.cql import CQLLibrary
   from cql_flow.validation.errors import ValidationError
   
   class MyCustomRule(ValidationRule):
       def validate(self, library: CQLLibrary) -> List[ValidationError]:
           """Validate custom business rule."""
           errors = []
           
           # Implementation here
           
           return errors

API Extensions
--------------

To extend the public API:

1. Add methods to the appropriate interface class
2. Maintain backward compatibility
3. Add comprehensive type hints
4. Write docstrings with examples
5. Add integration tests

Documentation Updates
=====================

Documentation Structure
-----------------------

- **README.md**: High-level overview and quick start
- **docs/**: Comprehensive documentation
- **Docstrings**: API documentation in code
- **Examples**: Practical usage examples
- **Tutorials**: Step-by-step guides

Building Documentation
----------------------

.. code-block:: bash

   # Install docs dependencies
   uv sync --extra docs
   
   # Build documentation
   cd docs
   uv run sphinx-build -b html . _build/html
   
   # Serve locally
   python -m http.server 8000 --directory _build/html

Updating Documentation
----------------------

When making changes:

1. Update relevant `.rst` files in `docs/`
2. Update docstrings for changed APIs
3. Add examples for new features
4. Update the changelog
5. Test documentation builds locally

Release Process
===============

Version Management
------------------

We use semantic versioning:

- **Major** (1.0.0): Breaking API changes
- **Minor** (0.1.0): New features, backward compatible
- **Patch** (0.0.1): Bug fixes

Creating Releases
-----------------

1. **Update Version**

   .. code-block:: python

      # In src/cql_flow/__init__.py
      __version__ = "0.2.0"

2. **Update Changelog**

   Document all changes in `CHANGELOG.md`

3. **Create Release Tag**

   .. code-block:: bash

      git tag v0.2.0
      git push origin v0.2.0

4. **Automated Release**

   GitHub Actions will automatically:
   - Build and test the package
   - Publish to PyPI
   - Create GitHub release with changelog

Contribution Types
==================

We welcome various types of contributions:

Code Contributions
------------------

- **Bug fixes**: Fix issues in the issue tracker
- **New features**: Implement requested features
- **Performance improvements**: Optimize critical paths
- **Refactoring**: Improve code quality and maintainability

Documentation
-------------

- **API documentation**: Improve docstrings and examples
- **User guides**: Write tutorials and how-to guides
- **Examples**: Create practical usage examples
- **Translations**: Help translate documentation

Testing
-------

- **Test coverage**: Add tests for uncovered code
- **Performance tests**: Add benchmarks for critical operations
- **Edge case testing**: Find and test unusual scenarios
- **Integration testing**: Test real-world workflows

Community
---------

- **Issue triage**: Help organize and prioritize issues
- **Code review**: Review pull requests from other contributors
- **User support**: Help users in discussions and issues
- **Evangelism**: Blog posts, talks, and community outreach

Getting Help
============

If you need help while contributing:

- **Documentation**: Check this guide and the API docs
- **Discussions**: Use GitHub Discussions for questions
- **Issues**: Create issues for bugs or feature requests
- **Code Review**: Ask for feedback on pull requests

Code of Conduct
===============

Please read and follow our Code of Conduct to ensure a welcoming environment for all contributors.

Recognition
===========

All contributors are recognized in:

- **CONTRIBUTORS.md**: List of all contributors
- **GitHub Releases**: Contributors for each release
- **Documentation**: Special thanks section

Thank you for contributing to ELM Flow! 🎉
