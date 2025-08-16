=================
API Documentation
=================

This section contains comprehensive documentation for the ELM Flow Python API.

.. toctree::
   :maxdepth: 2

   converter
   models
   parsing
   validation
   generation
   exceptions

Overview
========

The ELM Flow API is designed for ease of use with sensible defaults while providing flexibility for advanced use cases.

Main Components
===============

Converter API
-------------

The primary interface for converting CQL to ELM:

.. automodule:: cql_flow.api.converter
   :members:
   :undoc-members:
   :show-inheritance:

Quick Reference
===============

Basic Conversion
----------------

.. code-block:: python

   from cql_flow import CQLToELMConverter
   
   converter = CQLToELMConverter()
   result = converter.convert_file("library.cql")

With Validation Level
---------------------

.. code-block:: python

   from cql_flow import CQLToELMConverter, ValidationLevel
   
   converter = CQLToELMConverter().with_validation_level(ValidationLevel.STRICT)
   result = converter.convert_text(cql_text, library_name="MyLibrary")

Batch Processing
----------------

.. code-block:: python

   import asyncio
   from cql_flow import CQLToELMConverter
   
   async def main():
       converter = CQLToELMConverter()
       results = await converter.convert_batch(["lib1.cql", "lib2.cql"])
       return results
   
   results = asyncio.run(main())

Error Handling
--------------

.. code-block:: python

   result = converter.convert_file("library.cql")
   
   if not result.success:
       for error in result.errors:
           print(f"Error at line {error.line}: {error.message}")

Type Annotations
================

ELM Flow is fully typed and provides comprehensive type hints for all public APIs:

.. code-block:: python

   from typing import List, Optional
   from cql_flow import CQLToELMConverter, ConversionResult
   
   def convert_libraries(files: List[str]) -> List[ConversionResult]:
       converter = CQLToELMConverter()
       results: List[ConversionResult] = []
       
       for file_path in files:
           result: ConversionResult = converter.convert_file(file_path)
           results.append(result)
       
       return results
