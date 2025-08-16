==========
Quickstart
==========

This guide will get you up and running with ELM Flow in just a few minutes.

Installation
============

Using UV (Recommended)
----------------------

.. code-block:: bash

   uv add elm-flow

Using pip
---------

.. code-block:: bash

   pip install elm-flow

Basic Usage
===========

Python API
----------

Convert a single CQL file:

.. code-block:: python

   from cql_flow import CQLToELMConverter
   
   converter = CQLToELMConverter()
   result = converter.convert_file("my_library.cql")
   
   if result.success:
       print("Conversion successful!")
       print(f"ELM JSON: {result.elm_json}")
   else:
       print("Conversion failed:")
       for error in result.errors:
           print(f"  - {error}")

Convert CQL text directly:

.. code-block:: python

   cql_text = '''
   library SimpleExample version '1.0.0'
   
   using FHIR version '4.0.1'
   
   define "Hello": 'World'
   '''
   
   result = converter.convert_text(cql_text, library_name="SimpleExample")
   print(result.elm_json)

Batch processing:

.. code-block:: python

   import asyncio
   
   async def batch_convert():
       converter = CQLToELMConverter()
       files = ["lib1.cql", "lib2.cql", "lib3.cql"]
       
       results = await converter.convert_batch(files)
       
       for file_path, result in results.results.items():
           if result.success:
               print(f"✓ {file_path}")
           else:
               print(f"✗ {file_path}: {result.errors}")
   
   asyncio.run(batch_convert())

Command Line Interface
======================

Convert a single file:

.. code-block:: bash

   elm-flow convert my_library.cql --output my_library.json

Validate CQL without conversion:

.. code-block:: bash

   elm-flow validate my_library.cql

Batch convert multiple files:

.. code-block:: bash

   elm-flow batch src/cql/ --output-dir output/

Get help:

.. code-block:: bash

   elm-flow --help

Next Steps
==========

- Read the :doc:`installation` guide for more detailed installation instructions
- Explore the :doc:`api/index` documentation for comprehensive API reference
- Check out :doc:`examples/index` for real-world usage examples
- Learn advanced techniques in :doc:`tutorials/index`
