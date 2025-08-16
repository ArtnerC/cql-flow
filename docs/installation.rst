============
Installation
============

System Requirements
===================

- **Python**: 3.11 or higher
- **Operating System**: Windows, macOS, or Linux
- **Memory**: At least 512MB RAM (2GB recommended for large CQL files)
- **Disk Space**: 100MB for installation, additional space for CQL/ELM files

Python Version Support
======================

ELM Flow supports the following Python versions:

- **Python 3.11**: Fully supported ✓
- **Python 3.12**: Fully supported ✓ (recommended)
- **Python 3.13**: Fully supported ✓

Installation Methods
====================

Method 1: UV (Recommended)
---------------------------

`UV <https://github.com/astral-sh/uv>`_ is the fastest Python package manager and is our recommended installation method:

.. code-block:: bash

   # Install UV if you haven't already
   curl -LsSf https://astral.sh/uv/install.sh | sh
   
   # Install ELM Flow
   uv add elm-flow
   
   # Or install with all optional dependencies
   uv add "elm-flow[web,docs]"

Method 2: pip
-------------

.. code-block:: bash

   # Basic installation
   pip install elm-flow
   
   # With optional dependencies
   pip install "elm-flow[web,docs]"

Method 3: pipx (For CLI-only usage)
------------------------------------

If you only want to use the CLI tool:

.. code-block:: bash

   pipx install elm-flow

Development Installation
========================

For development or contributing:

.. code-block:: bash

   # Clone the repository
   git clone https://github.com/your-org/elm-flow.git
   cd elm-flow
   
   # Install with UV (recommended)
   uv sync --all-extras --dev
   
   # Or with pip
   pip install -e ".[dev,web,docs]"

Optional Dependencies
=====================

ELM Flow comes with several optional dependency groups:

Web Interface
-------------

For running the web API (future feature):

.. code-block:: bash

   uv add "elm-flow[web]"

The ``web`` group includes:
- ``fastapi``: Web framework
- ``uvicorn``: ASGI server
- ``jinja2``: Templating engine
- ``python-multipart``: File upload support

Documentation
-------------

For building documentation:

.. code-block:: bash

   uv add "elm-flow[docs]"

The ``docs`` group includes:
- ``sphinx``: Documentation generator
- ``sphinx-autodoc-typehints``: Type hint support
- ``myst-parser``: Markdown support

Development Tools
-----------------

For development and testing:

.. code-block:: bash

   uv add "elm-flow[dev]"

The ``dev`` group includes:
- ``pytest``: Testing framework
- ``pytest-cov``: Coverage reporting
- ``pytest-xdist``: Parallel testing
- ``pytest-benchmark``: Performance testing
- ``ruff``: Linting and formatting
- ``mypy``: Type checking
- ``hypothesis``: Property-based testing
- ``safety``: Security scanning
- ``bandit``: Static security analysis

Verification
============

Verify your installation:

.. code-block:: bash

   # Check version
   elm-flow --version
   
   # Run a quick test
   elm-flow --help

Python API verification:

.. code-block:: python

   import cql_flow
   print(f"cql-flow version: {cql_flow.__version__}")

Troubleshooting
===============

Installation Issues
-------------------

**Problem**: ``pip install elm-flow`` fails with dependency conflicts

**Solution**: Use UV instead, or create a fresh virtual environment:

.. code-block:: bash

   python -m venv elm-flow-env
   source elm-flow-env/bin/activate  # On Windows: elm-flow-env\\Scripts\\activate
   pip install --upgrade pip
   pip install elm-flow

**Problem**: ANTLR4 runtime issues

**Solution**: Make sure you have the correct ANTLR4 runtime version:

.. code-block:: bash

   pip install --upgrade antlr4-python3-runtime

Performance Issues
------------------

**Problem**: Slow parsing performance

**Solution**: Install optional performance dependencies:

.. code-block:: bash

   uv add orjson  # Faster JSON serialization

**Problem**: Memory usage with large files

**Solution**: Use streaming processing for large CQL libraries (see Advanced Usage).

Platform-Specific Notes
========================

Windows
-------

- Use PowerShell or Command Prompt
- Some features may require Windows 10/11
- UV provides the best experience on Windows

macOS
-----

- Requires macOS 10.15+ (Catalina)
- Install via Homebrew for system-wide availability:

.. code-block:: bash

   brew install uv
   uv add elm-flow

Linux
-----

- Works on most modern Linux distributions
- Tested on Ubuntu 20.04+, CentOS 8+, and Alpine Linux
- UV installation:

.. code-block:: bash

   curl -LsSf https://astral.sh/uv/install.sh | sh

Next Steps
==========

After installation:

1. Read the :doc:`quickstart` guide
2. Explore :doc:`examples/index` for real-world usage
3. Check :doc:`api/index` for detailed API documentation
4. Set up your development environment following :doc:`contributing`
