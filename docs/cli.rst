=======================
Command Line Interface
=======================

ELM Flow provides a comprehensive command-line interface for converting CQL to ELM.

Installation
============

The CLI is automatically installed with ELM Flow:

.. code-block:: bash

   uv add elm-flow
   
   # Verify installation
   elm-flow --version

Global Commands
===============

Help
----

Get help for any command:

.. code-block:: bash

   elm-flow --help
   elm-flow convert --help
   elm-flow validate --help
   elm-flow batch --help

Version
-------

Show version information:

.. code-block:: bash

   elm-flow --version

Convert Command
===============

Convert a single CQL file to ELM JSON:

Basic Usage
-----------

.. code-block:: bash

   elm-flow convert input.cql

With output file:

.. code-block:: bash

   elm-flow convert input.cql --output output.json

With validation level:

.. code-block:: bash

   elm-flow convert input.cql --validation-level strict

Options
-------

.. code-block:: text

   Usage: elm-flow convert [OPTIONS] INPUT_FILE
   
   Convert a CQL file to ELM JSON format.
   
   Arguments:
     INPUT_FILE  Path to the CQL file to convert  [required]
   
   Options:
     -o, --output PATH           Output file path (default: <input>.json)
     -v, --validation-level      Validation level: basic, standard, strict
                                 [default: standard]
     --pretty / --no-pretty      Pretty-print JSON output  [default: pretty]
     --include-source / --no-include-source
                                 Include source annotations in ELM
                                 [default: include-source]
     --help                      Show this message and exit.

Examples
--------

Convert with custom output:

.. code-block:: bash

   elm-flow convert library.cql --output my_library.json

Strict validation:

.. code-block:: bash

   elm-flow convert library.cql --validation-level strict

Compact JSON output:

.. code-block:: bash

   elm-flow convert library.cql --no-pretty

Validate Command
================

Validate CQL syntax and semantics without generating ELM:

Basic Usage
-----------

.. code-block:: bash

   elm-flow validate input.cql

Options
-------

.. code-block:: text

   Usage: elm-flow validate [OPTIONS] INPUT_FILE
   
   Validate a CQL file without converting to ELM.
   
   Arguments:
     INPUT_FILE  Path to the CQL file to validate  [required]
   
   Options:
     -v, --validation-level      Validation level: basic, standard, strict
                                 [default: standard]
     --show-warnings / --no-show-warnings
                                 Show validation warnings  [default: show-warnings]
     --help                      Show this message and exit.

Examples
--------

Basic validation:

.. code-block:: bash

   elm-flow validate library.cql

Strict validation with warnings:

.. code-block:: bash

   elm-flow validate library.cql --validation-level strict --show-warnings

Batch Command
=============

Convert multiple CQL files in a directory:

Basic Usage
-----------

.. code-block:: bash

   elm-flow batch src/cql/

With output directory:

.. code-block:: bash

   elm-flow batch src/cql/ --output-dir output/

Options
-------

.. code-block:: text

   Usage: elm-flow batch [OPTIONS] INPUT_DIR
   
   Convert multiple CQL files to ELM JSON format.
   
   Arguments:
     INPUT_DIR  Directory containing CQL files  [required]
   
   Options:
     -o, --output-dir PATH       Output directory (default: same as input)
     -v, --validation-level      Validation level: basic, standard, strict
                                 [default: standard]
     --pattern TEXT              File pattern to match  [default: *.cql]
     --parallel / --no-parallel  Process files in parallel  [default: parallel]
     --max-workers INTEGER       Maximum parallel workers  [default: 4]
     --fail-fast / --no-fail-fast
                                 Stop on first error  [default: no-fail-fast]
     --pretty / --no-pretty      Pretty-print JSON output  [default: pretty]
     --progress / --no-progress  Show progress bar  [default: progress]
     --help                      Show this message and exit.

Examples
--------

Convert all CQL files in a directory:

.. code-block:: bash

   elm-flow batch src/cql/ --output-dir output/

Process with custom pattern:

.. code-block:: bash

   elm-flow batch src/ --pattern "**/*.cql"

Sequential processing:

.. code-block:: bash

   elm-flow batch src/cql/ --no-parallel

Stop on first error:

.. code-block:: bash

   elm-flow batch src/cql/ --fail-fast

Output Formats
==============

JSON Output
-----------

By default, ELM Flow outputs pretty-printed JSON:

.. code-block:: json

   {
     "library": {
       "identifier": {
         "id": "SimpleExample",
         "version": "1.0.0"
       },
       "schemaIdentifier": {
         "id": "urn:hl7-org:elm",
         "version": "r1"
       },
       "usings": {
         "def": [
           {
             "localIdentifier": "System",
             "uri": "urn:hl7-org:elm-types:r1"
           }
         ]
       }
     }
   }

Compact JSON (--no-pretty):

.. code-block:: json

   {"library":{"identifier":{"id":"SimpleExample","version":"1.0.0"}...}}

Error Handling
==============

Exit Codes
----------

ELM Flow uses standard exit codes:

- **0**: Success
- **1**: General error (invalid arguments, file not found)
- **2**: Conversion/validation errors
- **3**: Multiple errors in batch processing

Error Output
------------

Errors are written to stderr with detailed information:

.. code-block:: text

   Error: Failed to parse CQL file 'library.cql'
     Line 5, Column 12: Syntax error: unexpected token 'defin'
     Line 5, Column 12: Did you mean 'define'?

Validation errors include context:

.. code-block:: text

   Validation Error in 'library.cql':
     Line 10: Undefined symbol 'UnknownFunction'
     Line 15: Type mismatch: expected Integer, got String

Progress Bars
=============

For batch operations, ELM Flow shows rich progress bars:

.. code-block:: text

   Converting CQL files... ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100% 10/10 files
   ✓ library1.cql → library1.json
   ✓ library2.cql → library2.json
   ✗ library3.cql → Error: Syntax error on line 5

Configuration
=============

Environment Variables
--------------------

- ``CQL_FLOW_VALIDATION_LEVEL``: Default validation level (basic, standard, strict)
- ``CQL_FLOW_MAX_WORKERS``: Default number of parallel workers for batch processing
- ``CQL_FLOW_PROGRESS``: Show progress bars by default (true/false)

Configuration File
------------------

Create ``.elm-flow.toml`` in your project directory:

.. code-block:: toml

   [elm-flow]
   validation_level = "strict"
   pretty_print = true
   include_source = true
   max_workers = 8
   show_progress = true
   
   [elm-flow.batch]
   pattern = "**/*.cql"
   fail_fast = false
   parallel = true

Integration
===========

Shell Scripts
-------------

Use ELM Flow in shell scripts:

.. code-block:: bash

   #!/bin/bash
   
   for file in src/cql/*.cql; do
       if elm-flow validate "$file" --validation-level strict; then
           elm-flow convert "$file" --output "output/$(basename "$file" .cql).json"
       else
           echo "Validation failed for $file"
           exit 1
       fi
   done

Makefile Integration
--------------------

.. code-block:: makefile

   .PHONY: validate convert clean
   
   CQL_FILES = $(wildcard src/cql/*.cql)
   ELM_FILES = $(CQL_FILES:src/cql/%.cql=output/%.json)
   
   validate:
       elm-flow batch src/cql/ --validation-level strict --no-output
   
   convert: $(ELM_FILES)
   
   output/%.json: src/cql/%.cql
       elm-flow convert $< --output $@
   
   clean:
       rm -f output/*.json

CI/CD Integration
-----------------

Use in GitHub Actions:

.. code-block:: yaml

   - name: Validate CQL Files
     run: elm-flow batch src/cql/ --validation-level strict
   
   - name: Convert CQL to ELM
     run: elm-flow batch src/cql/ --output-dir output/
