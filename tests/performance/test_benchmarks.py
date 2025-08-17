"""Performance benchmarks for CQL to ELM conversion."""
# mypy: ignore-errors

import pytest

# Try to import required modules, skip tests if not available
try:
    from cql_flow.api import CQLToELMConverter, convert_cql_library
    from cql_flow.models.cql.library import (
        CQLLibrary,
        ExpressionDef,
        ParameterDef,
        UsingStatement,
    )
    HAS_CORE_MODULES = True
except ImportError as e:
    HAS_CORE_MODULES = False
    IMPORT_ERROR = str(e)

try:
    from memory_profiler import profile

    HAS_MEMORY_PROFILER = True
except ImportError:
    HAS_MEMORY_PROFILER = False

    def profile(func):  # type: ignore
        """Dummy decorator when memory_profiler is not available."""
        return func


class TestConversionPerformance:
    """Performance tests for CQL to ELM conversion."""

    @pytest.mark.skipif(not HAS_CORE_MODULES, reason=f"Core modules not available: {IMPORT_ERROR if not HAS_CORE_MODULES else ''}")
    @pytest.mark.benchmark
    def test_simple_library_conversion_speed(self, benchmark):
        """Benchmark simple library conversion speed."""
        # Create a simple CQL library
        cql_library = CQLLibrary(
            name="BenchmarkLib",
            version=None,
            using_statements=[UsingStatement(model_identifier="FHIR", version=None)],
            parameters=[
                ParameterDef(name="MeasurementPeriod", type_specifier="Interval<DateTime>")
            ],
            expressions=[
                ExpressionDef(name="SimpleExpression", expression="true"),
            ],
        )

        def convert_library():
            return convert_cql_library(cql_library, validate=True, optimize=False)

        result = benchmark(convert_library)
        assert result.success

    @pytest.mark.skipif(not HAS_CORE_MODULES, reason=f"Core modules not available: {IMPORT_ERROR if not HAS_CORE_MODULES else ''}")
    @pytest.mark.benchmark
    def test_complex_library_conversion_speed(self, benchmark):
        """Benchmark complex library conversion speed."""
        # Create a more complex CQL library
        expressions = []
        parameters = []

        # Add multiple parameters
        for i in range(10):
            parameters.append(
                ParameterDef(
                    name=f"Parameter{i}",
                    type_specifier="String" if i % 2 == 0 else "Integer",
                )
            )

        # Add multiple expressions
        for i in range(50):
            expressions.append(
                ExpressionDef(
                    name=f"Expression{i}",
                    expression=f"Parameter{i % 10}" if i < 10 else f"Expression{i - 1}",
                )
            )

        cql_library = CQLLibrary(
            name="ComplexBenchmarkLib",
            version=None,
            using_statements=[
                UsingStatement(model_identifier="FHIR", version=None),
                UsingStatement(model_identifier="QDM", version=None),
            ],
            parameters=parameters,
            expressions=expressions,
        )

        def convert_complex_library():
            return convert_cql_library(cql_library, validate=True, optimize=True)

        result = benchmark(convert_complex_library)
        assert result.success

    @pytest.mark.skipif(not HAS_CORE_MODULES, reason=f"Core modules not available: {IMPORT_ERROR if not HAS_CORE_MODULES else ''}")
    @pytest.mark.benchmark
    def test_batch_conversion_performance(self, benchmark):
        """Benchmark batch conversion performance."""
        # Create multiple libraries
        libraries = []
        for i in range(10):
            lib = CQLLibrary(
                name=f"BatchLib{i}",
                version=None,
                expressions=[ExpressionDef(name=f"Expr{j}", expression="42") for j in range(5)],
            )
            libraries.append(lib)

        def convert_batch():
            converter = CQLToELMConverter()
            results = []
            for lib in libraries:
                result = converter.convert_library(lib)
                results.append(result)
            return results

        results = benchmark(convert_batch)
        assert all(r.success for r in results)

    @pytest.mark.skipif(not HAS_CORE_MODULES, reason=f"Core modules not available: {IMPORT_ERROR if not HAS_CORE_MODULES else ''}")
    @pytest.mark.benchmark
    @pytest.mark.slow
    def test_validation_performance_impact(self, benchmark):
        """Test performance impact of validation."""
        cql_library = CQLLibrary(
            name="ValidationBenchmark",
            version=None,
            expressions=[ExpressionDef(name=f"Expr{i}", expression="true") for i in range(20)],
        )

        # Just benchmark with validation since we can only use benchmark once
        def convert_with_validation():
            return convert_cql_library(cql_library, validate=True, optimize=False)

        result = benchmark.pedantic(convert_with_validation, rounds=5, iterations=3)
        assert result.success

    @pytest.mark.skipif(not HAS_CORE_MODULES, reason=f"Core modules not available: {IMPORT_ERROR if not HAS_CORE_MODULES else ''}")
    @pytest.mark.slow
    def test_memory_usage_profiling(self):
        """Profile memory usage during conversion."""

        @profile
        def convert_with_memory_tracking():
            # Create a library with many expressions
            expressions = [
                ExpressionDef(name=f"LargeExpr{i}", expression=f"42 + {i}") for i in range(100)
            ]

            cql_library = CQLLibrary(
                name="MemoryTestLib",
                version=None,
                expressions=expressions,
            )

            converter = CQLToELMConverter()
            result = converter.convert_library(cql_library)
            return result

        result = convert_with_memory_tracking()
        assert result.success

    @pytest.mark.skipif(not HAS_CORE_MODULES, reason=f"Core modules not available: {IMPORT_ERROR if not HAS_CORE_MODULES else ''}")
    @pytest.mark.benchmark
    def test_type_inference_performance(self, benchmark):
        """Benchmark type inference performance."""
        # Create library with complex type relationships
        expressions = []

        # Add expressions that require type inference
        for i in range(30):
            if i == 0:
                expressions.append(ExpressionDef(name="BaseExpr", expression="42"))
            else:
                expressions.append(
                    ExpressionDef(
                        name=f"DerivedExpr{i}",
                        expression=f"BaseExpr + {i}",
                    )
                )

        cql_library = CQLLibrary(
            name="TypeInferenceBenchmark",
            version=None,
            expressions=expressions,
        )

        def convert_with_type_inference():
            return convert_cql_library(cql_library, validate=True, optimize=False)

        result = benchmark(convert_with_type_inference)
        assert result.success

    @pytest.mark.skipif(not HAS_CORE_MODULES, reason=f"Core modules not available: {IMPORT_ERROR if not HAS_CORE_MODULES else ''}")
    @pytest.mark.benchmark
    def test_elm_generation_performance(self, benchmark):
        """Benchmark ELM generation performance."""
        # Create library focused on ELM generation complexity
        cql_library = CQLLibrary(
            name="ELMGenerationBenchmark",
            version=None,
            using_statements=[UsingStatement(model_identifier="FHIR", version=None)],
            parameters=[
                ParameterDef(name="StartDate", type_specifier="DateTime"),
                ParameterDef(name="EndDate", type_specifier="DateTime"),
            ],
            expressions=[
                ExpressionDef(
                    name="MeasurementPeriod",
                    expression="Interval[StartDate, EndDate)",
                ),
                ExpressionDef(
                    name="CurrentYear",
                    expression="year from Now()",
                ),
                ExpressionDef(
                    name="IsCurrentYear",
                    expression="year from start of MeasurementPeriod = CurrentYear",
                ),
            ],
        )

        def generate_elm():
            return convert_cql_library(cql_library, validate=False, optimize=False)

        result = benchmark(generate_elm)
        assert result.success


class TestMemoryEfficiency:
    """Memory efficiency tests."""

    @pytest.mark.skipif(not HAS_CORE_MODULES, reason=f"Core modules not available: {IMPORT_ERROR if not HAS_CORE_MODULES else ''}")
    @pytest.mark.slow
    def test_large_library_memory_usage(self):
        """Test memory usage with large libraries."""
        # Create a very large library
        large_expressions = [
            ExpressionDef(
                name=f"LargeExpression{i}",
                expression=f"'String value {i}' + ToString({i})",
            )
            for i in range(500)
        ]

        large_library = CQLLibrary(
            name="LargeMemoryTest",
            version=None,
            expressions=large_expressions,
        )

        # Measure memory before conversion
        import os

        import psutil

        process = psutil.Process(os.getpid())
        memory_before = process.memory_info().rss

        # Convert the library
        result = convert_cql_library(large_library, validate=True, optimize=True)

        # Measure memory after conversion
        memory_after = process.memory_info().rss
        memory_used = memory_after - memory_before

        assert result.success
        # Memory usage should be reasonable (less than 100MB for this test)
        assert memory_used < 100 * 1024 * 1024  # 100MB

    @pytest.mark.skipif(not HAS_CORE_MODULES, reason=f"Core modules not available: {IMPORT_ERROR if not HAS_CORE_MODULES else ''}")
    @pytest.mark.slow
    def test_memory_cleanup_after_conversion(self):
        """Test that memory is properly cleaned up after conversion."""
        import gc
        import os

        import psutil

        process = psutil.Process(os.getpid())

        # Baseline memory
        gc.collect()
        baseline_memory = process.memory_info().rss

        # Convert multiple libraries
        for i in range(20):
            lib = CQLLibrary(
                name=f"CleanupTest{i}",
                version=None,
                expressions=[
                    ExpressionDef(name=f"Expr{j}", expression=f"42 + {j}") for j in range(25)
                ],
            )
            result = convert_cql_library(lib)
            assert result.success

        # Force garbage collection
        gc.collect()
        final_memory = process.memory_info().rss

        # Memory growth should be minimal
        memory_growth = final_memory - baseline_memory
        # Allow some growth but not excessive (less than 50MB)
        assert memory_growth < 50 * 1024 * 1024  # 50MB


class TestScalabilityBenchmarks:
    """Scalability benchmarks for various scenarios."""

    @pytest.mark.skipif(not HAS_CORE_MODULES, reason=f"Core modules not available: {IMPORT_ERROR if not HAS_CORE_MODULES else ''}")
    @pytest.mark.benchmark
    @pytest.mark.parametrize("num_expressions", [10, 50, 100, 200])
    def test_expression_scaling(self, benchmark, num_expressions):
        """Test how conversion time scales with number of expressions."""
        expressions = [
            ExpressionDef(name=f"ScaleExpr{i}", expression=f"42 + {i}")
            for i in range(num_expressions)
        ]

        cql_library = CQLLibrary(
            name=f"ScalingTest{num_expressions}",
            version=None,
            expressions=expressions,
        )

        def convert_scaled_library():
            return convert_cql_library(cql_library, validate=True, optimize=False)

        result = benchmark(convert_scaled_library)
        assert result.success

    @pytest.mark.skipif(not HAS_CORE_MODULES, reason=f"Core modules not available: {IMPORT_ERROR if not HAS_CORE_MODULES else ''}")
    @pytest.mark.benchmark
    @pytest.mark.parametrize("nesting_depth", [1, 3, 5, 8])
    def test_nesting_complexity_scaling(self, benchmark, nesting_depth):
        """Test how conversion time scales with expression nesting depth."""
        # Create nested expressions
        expressions = []
        for i in range(nesting_depth):
            if i == 0:
                expressions.append(ExpressionDef(name="Base", expression="42"))
            else:
                prev_name = expressions[i - 1].name
                expressions.append(
                    ExpressionDef(
                        name=f"Nested{i}",
                        expression=f"({prev_name} + {i}) * 2",
                    )
                )

        cql_library = CQLLibrary(
            name=f"NestingTest{nesting_depth}",
            version=None,
            expressions=expressions,
        )

        def convert_nested_library():
            return convert_cql_library(cql_library, validate=True, optimize=False)

        result = benchmark(convert_nested_library)
        assert result.success

    @pytest.mark.skipif(not HAS_CORE_MODULES, reason=f"Core modules not available: {IMPORT_ERROR if not HAS_CORE_MODULES else ''}")
    @pytest.mark.benchmark
    @pytest.mark.slow
    def test_concurrent_conversion_performance(self, benchmark):  # type: ignore
        """Test performance of concurrent conversions."""
        from concurrent.futures import ThreadPoolExecutor, as_completed

        # Create multiple libraries for concurrent processing
        libraries = []
        for i in range(8):
            lib = CQLLibrary(
                name=f"ConcurrentLib{i}",
                version=None,
                expressions=[
                    ExpressionDef(name=f"Expr{j}", expression=f"42 + {i} + {j}") for j in range(10)
                ],
            )
            libraries.append(lib)

        def convert_concurrently():
            results = []
            with ThreadPoolExecutor(max_workers=4) as executor:
                # Submit all conversion tasks
                future_to_lib = {
                    executor.submit(convert_cql_library, lib): lib for lib in libraries
                }

                # Collect results
                for future in as_completed(future_to_lib):
                    result = future.result()
                    results.append(result)

            return results

        results = benchmark(convert_concurrently)
        assert all(r.success for r in results)
        assert len(results) == len(libraries)
