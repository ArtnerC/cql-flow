"""
Test performance optimizations.
"""

import time

from cql_flow.optimization.performance import (
    OptimizedCQLToELMConverter,
    ParallelBatchProcessor,
    PerformanceCache,
    StreamingParser,
    optimize_memory_usage,
)


class TestPerformanceCache:
    """Test performance cache functionality."""

    def test_cache_hit_miss(self):
        """Test cache hit and miss behavior."""
        cache = PerformanceCache(max_size=5)

        # Test miss
        result = cache.get("key1")
        assert result is None
        assert cache.stats.misses == 1
        assert cache.stats.hits == 0

        # Put and test hit
        cache.put("key1", "value1")
        result = cache.get("key1")
        assert result == "value1"
        assert cache.stats.hits == 1

        # Test hit rate
        assert cache.stats.hit_rate == 0.5  # 1 hit, 1 miss

    def test_lru_eviction(self):
        """Test LRU eviction when cache is full."""
        cache = PerformanceCache(max_size=3)

        # Fill cache
        cache.put("key1", "value1")
        cache.put("key2", "value2")
        cache.put("key3", "value3")

        # Access key1 to make it more recent
        cache.get("key1")

        # Add new item, should evict key2 (least recently used)
        cache.put("key4", "value4")

        assert cache.get("key1") == "value1"  # Still there
        assert cache.get("key2") is None  # Evicted
        assert cache.get("key3") == "value3"  # Still there
        assert cache.get("key4") == "value4"  # Newly added

    def test_cache_clear(self):
        """Test cache clear functionality."""
        cache = PerformanceCache()
        cache.put("key1", "value1")
        cache.get("key1")  # Generate a hit

        cache.clear()

        assert cache.get("key1") is None
        assert cache.stats.hits == 0
        assert cache.stats.misses == 1  # The get after clear
        assert cache.stats.size == 0


class TestOptimizedConverter:
    """Test optimized CQL to ELM converter."""

    def test_converter_initialization(self):
        """Test converter initializes correctly."""
        converter = OptimizedCQLToELMConverter(
            validation_cache_size=100,
            expression_cache_size=200,
            enable_memory_optimization=True,
        )

        assert converter.validation_cache.max_size == 100
        assert converter.expression_cache.max_size == 200
        assert converter.enable_memory_optimization is True

    def test_expression_caching(self):
        """Test expression caching functionality."""
        converter = OptimizedCQLToELMConverter()

        # First conversion should cache result
        result1 = converter.convert_expression_with_cache("test expression", "context1")

        # Second conversion should use cache
        result2 = converter.convert_expression_with_cache("test expression", "context1")

        assert result1 == result2
        assert converter.expression_cache.stats.hits >= 1

    def test_batch_convert_optimized(self):
        """Test batch conversion with optimization."""
        converter = OptimizedCQLToELMConverter()
        libraries = ["lib1", "lib2", "lib3"]

        results = converter.batch_convert_optimized(libraries, max_workers=2)

        assert len(results) == 3
        for result in results:
            assert result["status"] == "converted"

    def test_performance_stats(self):
        """Test performance statistics collection."""
        converter = OptimizedCQLToELMConverter()

        # Generate some cache activity
        converter.convert_expression_with_cache("expr1")
        converter.convert_expression_with_cache("expr1")  # Hit
        converter.convert_expression_with_cache("expr2")  # Miss

        stats = converter.get_performance_stats()

        assert "validation_cache" in stats
        assert "expression_cache" in stats
        assert "hit_rate" in stats["expression_cache"]
        assert stats["expression_cache"]["hits"] >= 1


class TestStreamingParser:
    """Test streaming parser functionality."""

    def test_streaming_parser_initialization(self):
        """Test parser initializes with correct chunk size."""
        parser = StreamingParser(chunk_size=4096)
        assert parser.chunk_size == 4096

    def test_parse_stream_basic(self):
        """Test basic stream parsing."""
        from io import StringIO

        cql_content = """
        // This is a comment
        define TestExpression:
            'Hello World';
        
        parameter TestParam:
            42;
        """

        parser = StreamingParser()
        stream = StringIO(cql_content)

        statements = parser.parse_stream(stream)

        # Should find define and parameter statements
        assert len(statements) >= 2
        assert any("define TestExpression:" in stmt for stmt in statements)
        assert any("parameter TestParam:" in stmt for stmt in statements)

    def test_parse_file_not_exists(self):
        """Test parsing non-existent file."""
        parser = StreamingParser()
        statements = parser.parse_file("nonexistent.cql")
        assert statements == []


class TestParallelBatchProcessor:
    """Test parallel batch processing."""

    def test_processor_initialization(self):
        """Test processor initializes with correct worker count."""
        processor = ParallelBatchProcessor(max_workers=8)
        assert processor.max_workers == 8

    def test_process_batch(self):
        """Test batch processing functionality."""
        processor = ParallelBatchProcessor(max_workers=2)
        file_paths = ["file1.cql", "file2.cql", "file3.cql"]

        results = processor.process_batch(file_paths)

        assert len(results) == 3
        for file_path, result in results:
            assert file_path in file_paths
            assert "status" in result
            assert result["status"] == "processed"

    def test_process_batch_with_error(self):
        """Test batch processing handles errors gracefully."""
        processor = ParallelBatchProcessor(max_workers=1)

        # Mock the _process_single_file to raise an exception
        original_method = processor._process_single_file

        def mock_process_file(file_path: str) -> dict[str, str]:
            if file_path == "error.cql":
                raise Exception("Test error")
            return original_method(file_path)

        processor._process_single_file = mock_process_file

        file_paths = ["good.cql", "error.cql"]
        results = processor.process_batch(file_paths)

        assert len(results) == 2

        # Find error result
        error_result = next((r for f, r in results if f == "error.cql"), None)
        assert error_result is not None
        assert "error" in error_result


class TestMemoryOptimization:
    """Test memory optimization utilities."""

    def test_optimize_memory_usage(self):
        """Test memory optimization configuration."""
        stats = optimize_memory_usage()

        assert "gc_threshold" in stats
        assert "gc_counts" in stats
        assert isinstance(stats["gc_threshold"], tuple)
        assert len(stats["gc_threshold"]) == 3


class TestPerformanceBenchmark:
    """Performance benchmark tests."""

    def test_cache_performance(self):
        """Test cache performance impact."""
        cache = PerformanceCache(max_size=1000)

        # Warm up cache
        for i in range(100):
            cache.put(f"key_{i}", f"value_{i}")

        # Measure cache hit performance
        start_time = time.time()
        for i in range(100):
            cache.get(f"key_{i}")
        hit_time = time.time() - start_time

        # Measure cache miss performance
        start_time = time.time()
        for i in range(100, 200):
            cache.get(f"key_{i}")
        miss_time = time.time() - start_time

        # Hits should be faster than misses (though both very fast)
        assert hit_time <= miss_time + 0.1  # Allow some tolerance

    def test_batch_processing_performance(self):
        """Test batch processing performance scales."""
        processor = ParallelBatchProcessor(max_workers=1)

        # Small batch
        small_files = ["file1.cql", "file2.cql"]
        start_time = time.time()
        results1 = processor.process_batch(small_files)
        time1 = time.time() - start_time

        # Larger batch with parallel processing
        processor_parallel = ParallelBatchProcessor(max_workers=4)
        large_files = [f"file{i}.cql" for i in range(10)]
        start_time = time.time()
        results2 = processor_parallel.process_batch(large_files)
        time2 = time.time() - start_time

        assert len(results1) == 2
        assert len(results2) == 10

        # Parallel processing should handle more files efficiently
        # (This is a rough test - actual performance depends on system)
        assert time2 < time1 * 10  # Should be much better than linear scaling
