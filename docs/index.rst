=====================================
ELM Flow: CQL to ELM Converter
=====================================

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   quickstart
   installation
   api/index
   cli
   examples/index
   tutorials/index
    elm_json
   contributing
   troubleshooting

Overview
========

ELM Flow is a high-performance Python library and CLI tool for converting Clinical Quality Language (CQL) to Expression Logical Model (ELM) JSON format.

Features
========

- 🚀 High performance CQL parsing and ELM generation
- 🔍 Semantic validation with clear error reporting
- 🧪 Robust automated tests and coverage reporting
- 🔒 Optional security scanning tasks
- 🌐 Cross-platform: Windows, macOS, Linux
- 📚 Rich CLI with plain-mode for CI/Windows
- 🐍 Modern Python (3.12+)

Quick Example
=============

.. code-block:: python

   from cql_flow import CQLToELMConverter
   
   # Convert CQL to ELM
   converter = CQLToELMConverter()
   result = converter.convert_file("library.cql")
   
   if result.success:
       print(f"Generated ELM: {result.elm_json}")
   else:
       print(f"Conversion failed: {result.errors}")

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
