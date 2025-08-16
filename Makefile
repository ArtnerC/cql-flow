# Makefile for ELM Flow documentation

.PHONY: help docs docs-serve docs-clean api-docs example-elm install-docs test-docs

# Default target
help:
	@echo "Available targets:"
	@echo "  docs        - Build all documentation"
	@echo "  docs-serve  - Build and serve documentation locally"  
	@echo "  docs-clean  - Clean documentation build files"
	@echo "  api-docs    - Generate API documentation"
	@echo "  example-elm - Convert example CQL files to ELM"
	@echo "  install-docs- Install documentation dependencies"
	@echo "  test-docs   - Test documentation build"

# Install documentation dependencies
install-docs:
	uv sync --extra docs

# Build all documentation
docs: api-docs example-elm
	cd docs && uv run sphinx-build -b html . _build/html
	@echo "Documentation built in docs/_build/html/"

# Serve documentation locally
docs-serve: docs
	@echo "Serving documentation at http://localhost:8000"
	cd docs/_build/html && python -m http.server 8000

# Clean documentation build files
docs-clean:
	rm -rf docs/_build/
	rm -rf docs/api/generated/
	find . -name "*.pyc" -delete
	find . -name "__pycache__" -delete

# Generate API documentation
api-docs: install-docs
	mkdir -p docs/api/generated
	cd docs && uv run sphinx-apidoc -o api/generated ../src/cql_flow --separate --force

# Convert example CQL files to ELM for documentation
example-elm:
	mkdir -p examples/elm
	uv run elm-flow convert examples/cql/SimpleExample.cql --output examples/elm/SimpleExample.json --format
	uv run elm-flow convert examples/cql/PatientDataExample.cql --output examples/elm/PatientDataExample.json --format
	uv run elm-flow convert examples/cql/MeasureExample.cql --output examples/elm/MeasureExample.json --format

# Test documentation build (fast check)
test-docs: install-docs
	cd docs && uv run sphinx-build -W -b html . _build/test
	@echo "Documentation test build successful"

# Live reload documentation development
docs-dev: install-docs
	cd docs && uv run sphinx-autobuild . _build/html --host 0.0.0.0 --port 8000
