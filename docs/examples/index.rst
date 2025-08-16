========
Examples
========

This section contains practical examples of using ELM Flow for common use cases.

.. toctree::
   :maxdepth: 2
   
   basic_usage
   advanced_usage
   real_world_examples
   integration_examples

Quick Examples
==============

Simple Library Conversion
--------------------------

**Input CQL** (``simple_library.cql``):

.. code-block:: cql

   library SimpleExample version '1.0.0'
   
   using FHIR version '4.0.1'
   
   define "Hello": 'World'
   define "CurrentDate": Today()
   define "Age": AgeInYears()

**Python Code**:

.. code-block:: python

   from cql_flow import CQLToELMConverter
   
   converter = CQLToELMConverter()
   result = converter.convert_file("simple_library.cql")
   
   if result.success:
       print("Conversion successful!")
       # Pretty print the ELM JSON
       import json
       print(json.dumps(result.elm_json, indent=2))
   else:
       print("Errors:")
       for error in result.errors:
           print(f"  {error}")

**CLI Command**:

.. code-block:: bash

   elm-flow convert simple_library.cql --output simple_library.json

Patient Data Query
------------------

**Input CQL** (``patient_query.cql``):

.. code-block:: cql

   library PatientQuery version '1.0.0'
   
   using FHIR version '4.0.1'
   
   include FHIRHelpers version '4.0.1'
   
   context Patient
   
   define "Patient Age":
     AgeInYears()
   
   define "Active Conditions":
     [Condition: status = 'active']
   
   define "Recent Encounters":
     [Encounter: date during Interval[Today() - 30 days, Today()]]

**Python Code with Validation**:

.. code-block:: python

   from cql_flow import CQLToELMConverter, ValidationLevel
   
   converter = (CQLToELMConverter()
               .with_validation_level(ValidationLevel.STRICT)
               .with_include_source_annotations(True))
   
   result = converter.convert_file("patient_query.cql")
   
   if result.success:
       print(f"Conversion took {result.processing_time_ms}ms")
       print(f"Generated {len(result.elm_json['library']['statements']['def'])} statements")
   else:
       print("Validation errors found:")
       for error in result.errors:
           print(f"  Line {error.line}: {error.message}")

Batch Processing
----------------

**Directory Structure**:

.. code-block:: text

   cql_libraries/
   ├── core/
   │   ├── FHIRHelpers.cql
   │   └── Common.cql
   ├── measures/
   │   ├── DiabetesCare.cql
   │   ├── HypertensionCare.cql
   │   └── PreventiveCare.cql
   └── utils/
       └── DateUtils.cql

**Python Batch Processing**:

.. code-block:: python

   import asyncio
   from pathlib import Path
   from cql_flow import CQLToELMConverter
   
   async def convert_library_directory():
       converter = CQLToELMConverter()
       
       # Find all CQL files recursively
       cql_files = list(Path("cql_libraries").rglob("*.cql"))
       file_paths = [str(f) for f in cql_files]
       
       print(f"Found {len(file_paths)} CQL files")
       
       # Convert all files
       results = await converter.convert_batch(
           file_paths,
           max_workers=4,
           show_progress=True
       )
       
       # Process results
       successful = 0
       failed = 0
       
       for file_path, result in results.results.items():
           if result.success:
               successful += 1
               # Save ELM file
               elm_path = Path(file_path).with_suffix('.json')
               elm_path.parent.mkdir(parents=True, exist_ok=True)
               
               import json
               with open(elm_path, 'w') as f:
                   json.dump(result.elm_json, f, indent=2)
           else:
               failed += 1
               print(f"Failed to convert {file_path}:")
               for error in result.errors:
                   print(f"  {error}")
       
       print(f"Conversion complete: {successful} successful, {failed} failed")
       print(f"Total processing time: {results.total_processing_time_ms}ms")
   
   # Run the batch conversion
   asyncio.run(convert_library_directory())

**CLI Batch Processing**:

.. code-block:: bash

   # Convert all CQL files in directory tree
   elm-flow batch cql_libraries/ --output-dir elm_libraries/ --parallel
   
   # With custom pattern and validation
   elm-flow batch cql_libraries/ --pattern "**/*.cql" --validation-level strict

Error Handling Example
----------------------

**Input CQL with Errors** (``broken_library.cql``):

.. code-block:: cql

   library BrokenExample version '1.0.0'
   
   using FHIR version '4.0.1'
   
   // Syntax error: missing 'define'
   "InvalidSyntax": 'This will fail'
   
   // Semantic error: undefined function
   define "UndefinedFunction": SomeUnknownFunction()
   
   // Type error: incompatible types
   define "TypeError": 'string' + 123

**Python Error Handling**:

.. code-block:: python

   from cql_flow import CQLToELMConverter, ValidationLevel
   from cql_flow.exceptions import CQLParseError, CQLValidationError
   
   converter = CQLToELMConverter().with_validation_level(ValidationLevel.STRICT)
   
   try:
       result = converter.convert_file("broken_library.cql")
       
       if not result.success:
           print(f"Found {len(result.errors)} errors:")
           
           for error in result.errors:
               print(f"\n{error.severity.upper()}: {error.message}")
               if error.line:
                   print(f"  Location: Line {error.line}, Column {error.column}")
               if error.context:
                   print(f"  Context: {error.context}")
               if error.suggestion:
                   print(f"  Suggestion: {error.suggestion}")
   
   except CQLParseError as e:
       print(f"Parse error: {e}")
   except CQLValidationError as e:
       print(f"Validation error: {e}")
   except Exception as e:
       print(f"Unexpected error: {e}")

Configuration Example
---------------------

**Advanced Configuration**:

.. code-block:: python

   from cql_flow import CQLToELMConverter, ValidationLevel
   from cql_flow.models import ConversionOptions
   
   # Create converter with custom options
   options = ConversionOptions(
       validation_level=ValidationLevel.STRICT,
       include_source_annotations=True,
       optimize_elm_output=True,
       resolve_includes=True,
       max_include_depth=5,
       include_search_paths=["./lib", "./common"]
   )
   
   converter = CQLToELMConverter(options=options)
   
   # Convert with progress callback
   def progress_callback(current: int, total: int, current_file: str):
       print(f"Processing {current}/{total}: {current_file}")
   
   result = converter.convert_file(
       "complex_library.cql",
       progress_callback=progress_callback
   )

Integration with Build Systems
------------------------------

**Maven Integration** (``pom.xml``):

.. code-block:: xml

   <plugin>
       <groupId>org.codehaus.mojo</groupId>
       <artifactId>exec-maven-plugin</artifactId>
       <version>3.1.0</version>
       <executions>
           <execution>
               <id>convert-cql</id>
               <phase>generate-resources</phase>
               <goals>
                   <goal>exec</goal>
               </goals>
               <configuration>
                   <executable>elm-flow</executable>
                   <arguments>
                       <argument>batch</argument>
                       <argument>src/main/cql</argument>
                       <argument>--output-dir</argument>
                       <argument>target/classes/elm</argument>
                       <argument>--validation-level</argument>
                       <argument>strict</argument>
                   </arguments>
               </configuration>
           </execution>
       </executions>
   </plugin>

**Gradle Integration** (``build.gradle``):

.. code-block:: groovy

   task convertCQL(type: Exec) {
       description 'Convert CQL files to ELM JSON'
       commandLine 'elm-flow', 'batch', 'src/main/cql',
                   '--output-dir', 'build/resources/main/elm',
                   '--validation-level', 'strict'
   }
   
   processResources.dependsOn convertCQL

Testing Integration
-------------------

**pytest Integration**:

.. code-block:: python

   import pytest
   from pathlib import Path
   from cql_flow import CQLToELMConverter, ValidationLevel
   
   class TestCQLConversion:
       
       @pytest.fixture
       def converter(self):
           return CQLToELMConverter().with_validation_level(ValidationLevel.STRICT)
       
       @pytest.mark.parametrize("cql_file", Path("test_data").glob("*.cql"))
       def test_cql_files_convert_successfully(self, converter, cql_file):
           result = converter.convert_file(cql_file)
           
           assert result.success, f"Conversion failed: {result.errors}"
           assert result.elm_json is not None
           assert result.elm_json["library"]["identifier"]["id"] is not None
       
       def test_batch_conversion_performance(self, converter):
           cql_files = list(Path("test_data").glob("*.cql"))
           
           import asyncio
           import time
           
           async def timed_batch_convert():
               start_time = time.time()
               results = await converter.convert_batch([str(f) for f in cql_files])
               end_time = time.time()
               
               return results, end_time - start_time
           
           results, duration = asyncio.run(timed_batch_convert())
           
           # Assert performance requirements
           assert duration < 10.0, f"Batch conversion too slow: {duration}s"
           assert all(r.success for r in results.results.values())

Next Steps
==========

- Explore :doc:`advanced_usage` for complex scenarios
- Check :doc:`real_world_examples` for production use cases
- Learn about :doc:`integration_examples` for CI/CD pipelines
