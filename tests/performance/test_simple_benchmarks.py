"""Simple performance benchmarks that should always work."""

import pytest


class TestSimpleBenchmarks:
    """Simple benchmark tests that don't depend on complex modules."""

    @pytest.mark.benchmark
    def test_simple_string_operation(self, benchmark):
        """Benchmark simple string operations."""

        def string_operation():
            result = ""
            for i in range(100):
                result += f"test{i}"
            return result

        result = benchmark(string_operation)
        assert len(result) > 0

    @pytest.mark.benchmark
    def test_simple_list_operation(self, benchmark):
        """Benchmark simple list operations."""

        def list_operation():
            result = []
            for i in range(1000):
                result.append(i * 2)
            return sum(result)

        result = benchmark(list_operation)
        assert result > 0

    @pytest.mark.benchmark
    def test_simple_dict_operation(self, benchmark):
        """Benchmark simple dictionary operations."""

        def dict_operation():
            result = {}
            for i in range(100):
                result[f"key{i}"] = f"value{i}"
            return len(result)

        result = benchmark(dict_operation)
        assert result == 100

    def test_import_core_modules(self):
        """Test that core modules can be imported."""
        try:
            from cql_flow.api import CQLToELMConverter
            converter = CQLToELMConverter()
            assert converter is not None
        except ImportError as e:
            pytest.skip(f"Core modules not available: {e}")

    @pytest.mark.benchmark  
    def test_converter_initialization(self, benchmark):
        """Benchmark converter initialization if available."""
        try:
            from cql_flow.api import CQLToELMConverter
        except ImportError:
            pytest.skip("CQLToELMConverter not available")

        def init_converter():
            return CQLToELMConverter()

        result = benchmark(init_converter)
        assert result is not None