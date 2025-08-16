===============
Troubleshooting
===============

Common Issues and Solutions
===========================

Installation Issues
-------------------

**Problem**: ``pip install elm-flow`` fails with dependency conflicts

**Solution**:

1. Use UV instead of pip:

   .. code-block:: bash

      curl -LsSf https://astral.sh/uv/install.sh | sh
      uv add elm-flow

2. Or create a fresh virtual environment:

   .. code-block:: bash

      python -m venv elm-flow-env
      source elm-flow-env/bin/activate  # Windows: elm-flow-env\Scripts\activate
      pip install --upgrade pip
      pip install elm-flow

**Problem**: ANTLR4 runtime version mismatch

**Solution**: Ensure compatible versions:

.. code-block:: bash

   pip install --upgrade antlr4-python3-runtime==4.13.1

**Problem**: ``ModuleNotFoundError: No module named 'cql_flow'``

**Solution**: Verify installation and Python path:

.. code-block:: bash

   # Check installation
   pip list | grep elm-flow
   
   # Check Python path
   python -c "import sys; print(sys.path)"
   
   # Reinstall if needed
   pip uninstall elm-flow
   pip install elm-flow

Parsing Issues
--------------

**Problem**: ``SyntaxError: Unexpected token`` on valid CQL

**Symptoms**:

.. code-block:: text

   Error: Failed to parse CQL file
   Line 5: SyntaxError: Unexpected token 'define'

**Solution**:

1. Check for hidden characters or encoding issues:

   .. code-block:: bash

      # Check file encoding
      file -i your_library.cql
      
      # Convert to UTF-8 if needed
      iconv -f ISO-8859-1 -t UTF-8 your_library.cql > fixed_library.cql

2. Verify CQL syntax against the official specification
3. Check for missing semicolons or quote marks
4. Use validation mode to get detailed error information:

   .. code-block:: bash

      elm-flow validate your_library.cql --validation-level strict

**Problem**: Parser crashes on large files

**Symptoms**:

.. code-block:: text

   MemoryError: Unable to allocate array
   Segmentation fault (core dumped)

**Solution**:

1. Increase memory limits:

   .. code-block:: bash

      # Increase Python memory limit
      export PYTHONMALLOC=malloc
      ulimit -m unlimited

2. Process files in smaller chunks:

   .. code-block:: python

      # Split large CQL files into smaller libraries
      from cql_flow import CQLToELMConverter
      
      converter = CQLToELMConverter()
      # Process one statement at a time for very large files

3. Use streaming mode (if available) or contact support for large file handling

Validation Issues
-----------------

**Problem**: False positive undefined symbol errors

**Symptoms**:

.. code-block:: text

   ValidationError: Undefined symbol 'Patient'
   Line 10: Cannot resolve identifier 'Patient'

**Solution**:

1. Check include statements:

   .. code-block:: cql

      // Ensure proper includes
      library MyLibrary version '1.0.0'
      
      using FHIR version '4.0.1'
      include FHIRHelpers version '4.0.1' called FHIRHelpers

2. Set proper search paths:

   .. code-block:: python

      from cql_flow import CQLToELMConverter
      from cql_flow.models import ConversionOptions
      
      options = ConversionOptions(
          include_search_paths=["./lib", "./fhir-helpers"]
      )
      converter = CQLToELMConverter(options=options)

3. Use less strict validation for development:

   .. code-block:: bash

      elm-flow validate library.cql --validation-level basic

**Problem**: Type errors on valid operations

**Symptoms**:

.. code-block:: text

   TypeError: Cannot add String and Integer
   Line 15: 'someString' + 123

**Solution**:

1. Check CQL type system rules
2. Add explicit type conversions:

   .. code-block:: cql

      define "Result": ToString(someString) + ToString(123)

3. Verify function signatures in the CQL specification

Conversion Issues
-----------------

**Problem**: ELM output missing expected elements

**Symptoms**: Converted ELM JSON is incomplete or missing statements

**Solution**:

1. Enable source annotations to track conversion:

   .. code-block:: python

      converter = CQLToELMConverter().with_include_source_annotations(True)
      result = converter.convert_file("library.cql")

2. Check for conversion warnings:

   .. code-block:: python

      if result.warnings:
           for warning in result.warnings:
               print(f"Warning: {warning}")

3. Verify CQL construct support in the converter

**Problem**: Invalid ELM JSON output

**Symptoms**: Generated ELM fails JSON schema validation

**Solution**:

1. Validate ELM against official schema:

   .. code-block:: bash

      # Install ELM schema validator
      pip install jsonschema
      
   .. code-block:: python

      import json
      import jsonschema
      
      # Load ELM schema (download from HL7)
      with open("elm-schema.json") as f:
           schema = json.load(f)
      
      # Validate generated ELM
      try:
           jsonschema.validate(result.elm_json, schema)
           print("ELM is valid")
      except jsonschema.ValidationError as e:
           print(f"Invalid ELM: {e}")

2. Report schema validation issues as bugs

Performance Issues
------------------

**Problem**: Slow conversion performance

**Symptoms**: Conversion takes significantly longer than expected

**Solution**:

1. Use parallel processing for batch operations:

   .. code-block:: bash

      elm-flow batch cql_files/ --parallel --max-workers 8

2. Profile performance to identify bottlenecks:

   .. code-block:: python

      import cProfile
      from cql_flow import CQLToELMConverter
      
      def profile_conversion():
           converter = CQLToELMConverter()
           converter.convert_file("large_library.cql")
      
      cProfile.run('profile_conversion()', 'profile.out')

3. Optimize CQL libraries:
   - Remove unused includes
   - Simplify complex expressions
   - Break large libraries into smaller modules

**Problem**: High memory usage

**Symptoms**: Process uses excessive RAM during conversion

**Solution**:

1. Monitor memory usage:

   .. code-block:: python

      from memory_profiler import profile
      
      @profile
      def memory_intensive_conversion():
           converter = CQLToELMConverter()
           result = converter.convert_file("large_library.cql")
      
      memory_intensive_conversion()

2. Process files sequentially instead of in parallel:

   .. code-block:: bash

      elm-flow batch cql_files/ --no-parallel

3. Clear cache between conversions:

   .. code-block:: python

      converter = CQLToELMConverter()
      for file_path in large_file_list:
           result = converter.convert_file(file_path)
           # Process result
           converter.clear_cache()  # If available

CLI Issues
----------

**Problem**: ``elm-flow: command not found``

**Solution**:

1. Verify installation:

   .. code-block:: bash

      pip list | grep elm-flow

2. Check PATH environment:

   .. code-block:: bash

      echo $PATH
      pip show elm-flow  # Check installation location

3. Use full path or Python module execution:

   .. code-block:: bash

      python -m cql_flow convert library.cql

**Problem**: Progress bar not displaying correctly

**Symptoms**: Garbled output or no progress bar on Windows

**Solution**:

1. Use Windows Terminal or PowerShell Core:

   .. code-block:: bash

      # Install Windows Terminal from Microsoft Store
      # Or use PowerShell 7+
      pwsh

2. Force plain output:

   .. code-block:: bash

      elm-flow batch cql_files/ --no-progress

3. Set proper terminal encoding:

   .. code-block:: bash

      chcp 65001  # UTF-8 encoding on Windows

Integration Issues
------------------

**Problem**: VS Code tasks not working

**Solution**:

1. Verify Python interpreter selection:
   - Open Command Palette (`Ctrl+Shift+P`)
   - Select "Python: Select Interpreter"
   - Choose the environment with ELM Flow installed

2. Check task configuration:

   .. code-block:: json

      // .vscode/tasks.json
      {
           "version": "2.0.0",
           "tasks": [
               {
                   "label": "test:all",
                   "type": "shell",
                   "command": "uv run pytest tests --cov=src/cql_flow",
                   "group": "test",
                   "problemMatcher": []
               }
           ]
       }

3. Reload VS Code window after changes

**Problem**: CI/CD pipeline failures

**Solution**:

1. Check GitHub Actions logs for specific errors
2. Run the same commands locally:

   .. code-block:: bash

      # Simulate CI environment
      uv sync --all-extras --dev
      uv run ruff format --check .
      uv run ruff check .
      uv run mypy src/cql_flow tests
      uv run pytest tests

3. Verify environment variables and secrets are configured

Error Messages Reference
========================

Common Error Codes
-------------------

**Exit Code 1**: General error

- File not found
- Invalid command line arguments
- Permission denied

**Exit Code 2**: Conversion/validation errors

- CQL syntax errors
- Semantic validation failures
- Type checking errors

**Exit Code 3**: Multiple errors in batch processing

- Some files failed to convert
- Mixed success/failure results

Detailed Error Messages
-----------------------

**``FileNotFoundError: CQL file 'library.cql' not found``**

Solution: Check file path and permissions

**``CQLParseError: Syntax error at line 5, column 12``**

Solution: Review CQL syntax at specified location

**``CQLValidationError: Undefined symbol 'UnknownFunction'``**

Solution: Check function name spelling and includes

**``ELMGenerationError: Cannot convert expression to ELM``**

Solution: Check if CQL construct is supported

**``MemoryError: Unable to allocate memory for parsing``**

Solution: Increase system memory or process smaller files

Debug Mode
==========

Enable debug logging for detailed troubleshooting:

**Python API**:

.. code-block:: python

   import logging
   
   # Enable debug logging
   logging.basicConfig(level=logging.DEBUG)
   
   from cql_flow import CQLToELMConverter
   
   converter = CQLToELMConverter()
   result = converter.convert_file("library.cql")

**CLI Debug Mode**:

.. code-block:: bash

   # Set environment variable
   export CQL_FLOW_DEBUG=1
   elm-flow convert library.cql --verbose

**Log Output Location**:

- Linux/macOS: ``~/.elm-flow/logs/``
- Windows: ``%APPDATA%\elm-flow\logs\``

Getting Additional Help
=======================

Community Support
------------------

- **GitHub Issues**: Report bugs and request features
- **GitHub Discussions**: Ask questions and share solutions  
- **Documentation**: Comprehensive guides and API reference

Bug Reports
-----------

When reporting bugs, please include:

1. **cql-flow version**: ``cql-flow version``
2. **Python version**: ``python --version``
3. **Operating system**: Windows/macOS/Linux version
4. **Input CQL file**: Minimal example that reproduces the issue
5. **Error message**: Complete error output with stack trace
6. **Steps to reproduce**: Exact commands or code used

**Bug Report Template**:

.. code-block:: text

   **Environment:**
   - cql-flow version: 0.1.0
   - Python version: 3.12.1
   - OS: Windows 11
   
   **Issue Description:**
   Brief description of the problem
   
   **Steps to Reproduce:**
   1. Run `elm-flow convert example.cql`
   2. Observe error message
   
   **Expected Behavior:**
   What you expected to happen
   
   **Actual Behavior:**
   What actually happened
   
   **Input CQL:**
   ```cql
   library Example version '1.0.0'
   define "Test": 'value'
   ```
   
   **Error Output:**
   ```
   Complete error message and stack trace
   ```

Performance Issues
------------------

For performance issues, include:

1. **File size**: Size of input CQL files
2. **System specs**: RAM, CPU, disk speed
3. **Processing time**: How long the operation takes
4. **Resource usage**: Memory and CPU utilization
5. **Profiling data**: If available

Feature Requests
----------------

For feature requests:

1. **Use case**: Describe the problem you're trying to solve
2. **Proposed solution**: How you envision the feature working
3. **Alternatives**: Other solutions you've considered
4. **Examples**: Sample input/output if applicable

Contact Information
===================

- **GitHub Issues**: https://github.com/your-org/elm-flow/issues
- **GitHub Discussions**: https://github.com/your-org/elm-flow/discussions
- **Email**: support@your-org.com (for security issues only)
