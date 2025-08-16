"""
Performance analysis script for ELM Flow.
Identifies bottlenecks and optimization opportunities.
"""

import cProfile
import io
import pstats
import time
from pathlib import Path
from typing import Any, Dict

from memory_profiler import profile

from cql_flow.api import CQLToELMConverter
from cql_flow.models.cql.library import CQLLibrary, ExpressionDef, UsingStatement


class PerformanceAnalyzer:
    """Analyze performance characteristics of ELM Flow."""

    def __init__(self):
        self.converter = CQLToELMConverter()
        self.results: Dict[str, Any] = {}

    def create_test_library(self, complexity: str = "simple") -> CQLLibrary:
        """Create test CQL library with varying complexity."""
        base_expressions = [
            ExpressionDef(name="SimpleValue", expression="'test'"),
            ExpressionDef(name="CurrentDate", expression="Today()"),
            ExpressionDef(name="PatientAge", expression="AgeInYears()"),
        ]

        if complexity == "medium":
            # Add more complex expressions
            base_expressions.extend(
                [
                    ExpressionDef(name="ComplexCalc", expression="2 + 3 * 4 - 1"),
                    ExpressionDef(name="StringConcat", expression="'Hello' + ' World'"),
                    ExpressionDef(
                        name="Conditional", expression="if true then 'yes' else 'no'"
                    ),
                    ExpressionDef(name="ListOperation", expression="[1, 2, 3, 4, 5]"),
                    ExpressionDef(name="Comparison", expression="PatientAge >= 18"),
                ]
            )

        elif complexity == "large":
            # Create many expressions to simulate large library
            for i in range(50):
                base_expressions.append(
                    ExpressionDef(
                        name=f"Expression{i}", expression=f"'Value{i}' + ToString({i})"
                    )
                )

        return CQLLibrary(
            name=f"TestLib_{complexity}",
            version="1.0.0",
            using_statements=[UsingStatement(model_identifier="FHIR", version=None)],
            expressions=base_expressions,
        )

    def benchmark_conversion_speed(self) -> Dict[str, float]:
        """Benchmark conversion speed for different library sizes."""
        results = {}

        for complexity in ["simple", "medium", "large"]:
            library = self.create_test_library(complexity)

            # Time the conversion
            start_time = time.perf_counter()
            result = self.converter.convert_library(library)
            end_time = time.perf_counter()

            conversion_time = (end_time - start_time) * 1000  # Convert to ms
            results[f"{complexity}_conversion_ms"] = conversion_time

            print(f"{complexity.title()} library conversion: {conversion_time:.2f}ms")

            if result.success:
                elm_size = len(str(result.elm_json))
                results[f"{complexity}_elm_size_chars"] = elm_size
                print(f"  Generated ELM size: {elm_size:,} characters")
            else:
                print(f"  Conversion failed: {result.errors}")

        return results

    @profile
    def profile_memory_usage(self):
        """Profile memory usage during conversion."""
        print("\n=== Memory Profile ===")

        # Create a large library for memory testing
        library = self.create_test_library("large")

        # Convert and measure memory
        result = self.converter.convert_library(library)

        if result.success:
            print("Conversion successful, ELM generated")
        else:
            print(f"Conversion failed: {result.errors}")

    def profile_cpu_usage(self) -> str:
        """Profile CPU usage and identify bottlenecks."""
        print("\n=== CPU Profile ===")

        # Create profiler
        profiler = cProfile.Profile()

        # Profile the conversion process
        library = self.create_test_library("large")

        profiler.enable()
        result = self.converter.convert_library(library)
        profiler.disable()

        # Capture profile results
        stream = io.StringIO()
        stats = pstats.Stats(profiler, stream=stream)
        stats.sort_stats("cumulative")
        stats.print_stats(20)  # Top 20 functions

        profile_output = stream.getvalue()
        print(profile_output)

        return profile_output

    def analyze_batch_performance(self) -> Dict[str, float]:
        """Analyze batch processing performance."""
        print("\n=== Batch Processing Analysis ===")

        # Create multiple libraries
        libraries = [self.create_test_library("simple") for _ in range(5)]

        # Sequential processing
        start_time = time.perf_counter()
        sequential_results = []
        for library in libraries:
            result = self.converter.convert_library(library)
            sequential_results.append(result)
        sequential_time = time.perf_counter() - start_time

        print(f"Sequential processing: {sequential_time:.3f}s")

        # TODO: Implement parallel processing when available
        # For now, just return sequential timing
        return {
            "sequential_batch_time_s": sequential_time,
            "libraries_processed": len(libraries),
            "avg_time_per_library_ms": (sequential_time / len(libraries)) * 1000,
        }

    def run_full_analysis(self) -> Dict[str, Any]:
        """Run complete performance analysis."""
        print("Starting ELM Flow Performance Analysis...")
        print("=" * 50)

        # Speed benchmarks
        speed_results = self.benchmark_conversion_speed()

        # Memory profiling
        self.profile_memory_usage()

        # CPU profiling
        cpu_profile = self.profile_cpu_usage()

        # Batch processing
        batch_results = self.analyze_batch_performance()

        # Combine results
        all_results = {**speed_results, **batch_results, "cpu_profile": cpu_profile}

        # Generate summary
        self.print_summary(all_results)

        return all_results

    def print_summary(self, results: Dict[str, Any]):
        """Print performance analysis summary."""
        print("\n" + "=" * 50)
        print("PERFORMANCE ANALYSIS SUMMARY")
        print("=" * 50)

        print("\nConversion Speed:")
        for key, value in results.items():
            if key.endswith("_conversion_ms"):
                complexity = key.replace("_conversion_ms", "")
                print(f"  {complexity.title()}: {value:.2f}ms")

        print("\nBatch Processing:")
        if "avg_time_per_library_ms" in results:
            print(f"  Average per library: {results['avg_time_per_library_ms']:.2f}ms")
            print(f"  Libraries processed: {results['libraries_processed']}")

        print("\nOptimization Opportunities:")
        print("  • Memory usage: Profile shows peak memory consumption")
        print("  • CPU hotspots: Check profile for expensive functions")
        print("  • Batch processing: Could benefit from parallelization")
        print("  • Caching: Repeated operations could be cached")


def main():
    """Run performance analysis."""
    analyzer = PerformanceAnalyzer()
    results = analyzer.run_full_analysis()

    # Save results to file
    output_dir = Path("performance_analysis")
    output_dir.mkdir(exist_ok=True)

    # Save detailed results
    import json

    with open(output_dir / "performance_results.json", "w") as f:
        # Remove non-serializable items
        serializable_results = {k: v for k, v in results.items() if k != "cpu_profile"}
        json.dump(serializable_results, f, indent=2)

    # Save CPU profile
    with open(output_dir / "cpu_profile.txt", "w") as f:
        f.write(results.get("cpu_profile", ""))

    print(f"\nResults saved to {output_dir}/")


if __name__ == "__main__":
    main()
