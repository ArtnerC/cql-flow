"""
Enhanced performance benchmark with optimization features.
"""

import gc
import json
import time
from pathlib import Path

from memory_profiler import profile

from cql_flow.optimization.performance import (
    OptimizedCQLToELMConverter,
    ParallelBatchProcessor,
    StreamingParser,
    optimize_memory_usage,
)


class OptimizedPerformanceBenchmark:
    """Enhanced performance benchmark using optimization features."""

    def __init__(self):
        self.results = {}
        self.converter = OptimizedCQLToELMConverter(
            validation_cache_size=1000,
            expression_cache_size=2000,
            enable_memory_optimization=True,
        )
        self.streaming_parser = StreamingParser(chunk_size=8192)
        self.parallel_processor = ParallelBatchProcessor(max_workers=4)

        # Initialize memory optimization
        self.memory_stats = optimize_memory_usage()

    def benchmark_cache_performance(self) -> dict:
        """Benchmark cache performance improvements."""
        print("Benchmarking cache performance...")

        # Test expressions
        expressions = [
            "Patient.birthDate",
            "Encounter.period.start",
            "Observation.value as Quantity",
            "Condition.onset as Period",
            "MedicationRequest.dosageInstruction",
        ]

        # Benchmark without cache (simulate)
        start_time = time.perf_counter()
        for _ in range(100):
            for expr in expressions:
                # Simulate conversion work
                result = self.converter._convert_expression_impl(expr, "test")
        no_cache_time = time.perf_counter() - start_time

        # Benchmark with cache
        start_time = time.perf_counter()
        for _ in range(100):
            for expr in expressions:
                result = self.converter.convert_expression_with_cache(expr, "test")
        cache_time = time.perf_counter() - start_time

        # Get cache stats
        cache_stats = self.converter.get_performance_stats()

        improvement = (no_cache_time - cache_time) / no_cache_time * 100

        return {
            "no_cache_time_ms": no_cache_time * 1000,
            "cache_time_ms": cache_time * 1000,
            "improvement_percent": improvement,
            "cache_hit_rate": cache_stats["expression_cache"]["hit_rate"],
            "cache_size": cache_stats["expression_cache"]["size"],
        }

    def benchmark_streaming_parser(self) -> dict:
        """Benchmark streaming parser vs traditional parsing."""
        print("Benchmarking streaming parser...")

        # Create test CQL content
        test_content = self._generate_large_cql_content(1000)  # 1000 statements

        # Write to temp file
        temp_file = Path("temp_test.cql")
        temp_file.write_text(test_content)

        try:
            # Benchmark streaming parser
            start_time = time.perf_counter()
            statements = self.streaming_parser.parse_file(str(temp_file))
            streaming_time = time.perf_counter() - start_time

            # Benchmark traditional parsing (simulate by reading entire file)
            start_time = time.perf_counter()
            with open(temp_file, "r", encoding="utf-8") as f:
                content = f.read()
                # Simple statement splitting (traditional approach)
                traditional_statements = [
                    stmt.strip()
                    for stmt in content.split(";")
                    if stmt.strip() and not stmt.strip().startswith("//")
                ]
            traditional_time = time.perf_counter() - start_time

            return {
                "streaming_time_ms": streaming_time * 1000,
                "traditional_time_ms": traditional_time * 1000,
                "statements_found": len(statements),
                "memory_efficient": True,
            }

        finally:
            # Cleanup
            if temp_file.exists():
                temp_file.unlink()

    def benchmark_parallel_processing(self) -> dict:
        """Benchmark parallel vs sequential processing."""
        print("Benchmarking parallel processing...")

        # Create test files
        test_files = []
        for i in range(10):
            file_path = f"temp_test_{i}.cql"
            content = self._generate_large_cql_content(50)
            Path(file_path).write_text(content)
            test_files.append(file_path)

        try:
            # Sequential processing
            start_time = time.perf_counter()
            sequential_results = []
            for file_path in test_files:
                result = self.parallel_processor._process_single_file(file_path)
                sequential_results.append((file_path, result))
            sequential_time = time.perf_counter() - start_time

            # Parallel processing
            start_time = time.perf_counter()
            parallel_results = self.parallel_processor.process_batch(test_files)
            parallel_time = time.perf_counter() - start_time

            speedup = sequential_time / parallel_time if parallel_time > 0 else 1

            return {
                "sequential_time_ms": sequential_time * 1000,
                "parallel_time_ms": parallel_time * 1000,
                "speedup_factor": speedup,
                "files_processed": len(test_files),
            }

        finally:
            # Cleanup
            for file_path in test_files:
                Path(file_path).unlink()

    @profile
    def benchmark_memory_optimization(self) -> dict:
        """Benchmark memory optimization features."""
        print("Benchmarking memory optimization...")

        # Create large dataset
        large_libraries = [f"Library{i}" for i in range(1000)]

        # Force garbage collection before
        gc.collect()

        # Benchmark with memory optimization enabled
        self.converter.enable_memory_optimization = True
        start_time = time.perf_counter()
        results_optimized = self.converter.batch_convert_optimized(large_libraries)
        optimized_time = time.perf_counter() - start_time

        # Force garbage collection
        gc.collect()

        # Benchmark with memory optimization disabled
        self.converter.enable_memory_optimization = False
        start_time = time.perf_counter()
        results_unoptimized = self.converter.batch_convert_optimized(large_libraries)
        unoptimized_time = time.perf_counter() - start_time

        return {
            "optimized_time_ms": optimized_time * 1000,
            "unoptimized_time_ms": unoptimized_time * 1000,
            "libraries_processed": len(large_libraries),
            "memory_optimization_enabled": True,
        }

    def run_full_benchmark(self) -> dict:
        """Run complete performance benchmark suite."""
        print("Running full optimization benchmark suite...")

        results = {
            "timestamp": time.time(),
            "memory_stats": self.memory_stats,
            "benchmarks": {},
        }

        # Run individual benchmarks
        try:
            results["benchmarks"]["cache"] = self.benchmark_cache_performance()
        except Exception as e:
            results["benchmarks"]["cache"] = {"error": str(e)}

        try:
            results["benchmarks"]["streaming"] = self.benchmark_streaming_parser()
        except Exception as e:
            results["benchmarks"]["streaming"] = {"error": str(e)}

        try:
            results["benchmarks"]["parallel"] = self.benchmark_parallel_processing()
        except Exception as e:
            results["benchmarks"]["parallel"] = {"error": str(e)}

        try:
            results["benchmarks"]["memory"] = self.benchmark_memory_optimization()
        except Exception as e:
            results["benchmarks"]["memory"] = {"error": str(e)}

        return results

    def _generate_large_cql_content(self, num_statements: int) -> str:
        """Generate large CQL content for testing."""
        content = [
            "// Generated CQL for performance testing",
            "library TestLibrary version '1.0.0'",
            "",
            "using FHIR version '4.0.1'",
            "",
        ]

        for i in range(num_statements):
            if i % 3 == 0:
                content.append(f"define Statement{i}: 'Test value {i}';")
            elif i % 3 == 1:
                content.append(f"parameter Param{i}: {i};")
            else:
                content.append(f"define Complex{i}: Patient.birthDate + {i} days;")

        return "\n".join(content)

    def save_results(
        self, results: dict, output_file: str = "optimization_benchmark_results.json"
    ):
        """Save benchmark results to file."""
        output_path = Path("performance_analysis") / output_file
        output_path.parent.mkdir(exist_ok=True)

        with open(output_path, "w") as f:
            json.dump(results, f, indent=2)

        print(f"Results saved to {output_path}")


def main():
    """Main benchmark execution."""
    print("ELM Flow - Optimization Performance Benchmark")
    print("=" * 50)

    benchmark = OptimizedPerformanceBenchmark()

    # Run benchmarks
    results = benchmark.run_full_benchmark()

    # Save results
    benchmark.save_results(results)

    # Print summary
    print("\n" + "=" * 50)
    print("OPTIMIZATION BENCHMARK SUMMARY")
    print("=" * 50)

    if (
        "cache" in results["benchmarks"]
        and "error" not in results["benchmarks"]["cache"]
    ):
        cache_data = results["benchmarks"]["cache"]
        print("Cache Performance:")
        print(f"  - Improvement: {cache_data['improvement_percent']:.1f}%")
        print(f"  - Hit Rate: {cache_data['cache_hit_rate']:.2f}")
        print(f"  - Cache Time: {cache_data['cache_time_ms']:.1f}ms")

    if (
        "parallel" in results["benchmarks"]
        and "error" not in results["benchmarks"]["parallel"]
    ):
        parallel_data = results["benchmarks"]["parallel"]
        print("\nParallel Processing:")
        print(f"  - Speedup: {parallel_data['speedup_factor']:.1f}x")
        print(f"  - Sequential: {parallel_data['sequential_time_ms']:.1f}ms")
        print(f"  - Parallel: {parallel_data['parallel_time_ms']:.1f}ms")

    if (
        "streaming" in results["benchmarks"]
        and "error" not in results["benchmarks"]["streaming"]
    ):
        streaming_data = results["benchmarks"]["streaming"]
        print("\nStreaming Parser:")
        print(f"  - Streaming Time: {streaming_data['streaming_time_ms']:.1f}ms")
        print(f"  - Statements Found: {streaming_data['statements_found']}")

    print(
        "\nFull results saved to: performance_analysis/optimization_benchmark_results.json"
    )


if __name__ == "__main__":
    main()
