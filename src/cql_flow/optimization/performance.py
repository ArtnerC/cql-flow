"""
Performance optimizations for ELM Flow converter.
"""

import gc
import weakref
from dataclasses import dataclass
from functools import lru_cache
from threading import RLock
from typing import TYPE_CHECKING, Any, Dict, Optional, TextIO

if TYPE_CHECKING:  # pragma: no cover - typing only
    from cql_flow.api.converter import ConversionResult


@dataclass
class CacheStats:
    """Statistics for performance cache."""

    hits: int = 0
    misses: int = 0
    size: int = 0

    @property
    def hit_rate(self) -> float:
        """Calculate cache hit rate."""
        total = self.hits + self.misses
        return self.hits / total if total > 0 else 0.0


class PerformanceCache:
    """High-performance cache with memory management."""

    def __init__(self, max_size: int = 1000):
        self.max_size = max_size
        self.cache: Dict[str, Any] = {}
        self.access_order: Dict[str, int] = {}
        self.access_counter = 0
        self.stats = CacheStats()
        self.lock = RLock()

    def get(self, key: str) -> Optional[Any]:
        """Get item from cache."""
        with self.lock:
            if key in self.cache:
                self.stats.hits += 1
                self.access_order[key] = self.access_counter
                self.access_counter += 1
                return self.cache[key]
            else:
                self.stats.misses += 1
                return None

    def put(self, key: str, value: Any) -> None:
        """Put item in cache with LRU eviction."""
        with self.lock:
            if len(self.cache) >= self.max_size and key not in self.cache:
                self._evict_lru()

            self.cache[key] = value
            self.access_order[key] = self.access_counter
            self.access_counter += 1
            self.stats.size = len(self.cache)

    def _evict_lru(self) -> None:
        """Evict least recently used item."""
        if not self.access_order:
            return

        lru_key = min(self.access_order.keys(), key=lambda k: self.access_order[k])
        del self.cache[lru_key]
        del self.access_order[lru_key]

    def clear(self) -> None:
        """Clear cache."""
        with self.lock:
            self.cache.clear()
            self.access_order.clear()
            self.access_counter = 0
            self.stats = CacheStats()

    def get_stats(self) -> CacheStats:
        """Get cache statistics."""
        with self.lock:
            self.stats.size = len(self.cache)
            return self.stats


class OptimizedCQLToELMConverter:
    """Performance-optimized CQL to ELM converter."""

    # Cache of libraries using weak references to avoid memory leaks
    library_cache: "weakref.WeakValueDictionary[str, Any]"

    def __init__(
        self,
        validation_cache_size: int = 500,
        expression_cache_size: int = 1000,
        enable_memory_optimization: bool = True,
    ):
        # Initialize caches and options
        self.validation_cache = PerformanceCache(validation_cache_size)
        self.expression_cache = PerformanceCache(expression_cache_size)
        self.enable_memory_optimization = enable_memory_optimization
        # Weak references to avoid memory leaks
        self.library_cache = weakref.WeakValueDictionary()

    @lru_cache(maxsize=256)
    def _cached_expression_hash(self, expression_text: str) -> str:
        """Create hash for expression with caching."""
        import hashlib

        return hashlib.sha256(expression_text.encode()).hexdigest()

    def _get_expression_cache_key(self, expression: str, context: str = "") -> str:
        """Generate cache key for expression."""
        return f"{context}:{self._cached_expression_hash(expression)}"

    def convert_expression_with_cache(self, expression: str, context: str = "") -> Any:
        """Convert expression with caching."""
        cache_key = self._get_expression_cache_key(expression, context)

        # Check cache first
        cached_result = self.expression_cache.get(cache_key)
        if cached_result is not None:
            return cached_result

        # Convert expression (placeholder - actual implementation would go here)
        result = self._convert_expression_impl(expression, context)

        # Cache result
        self.expression_cache.put(cache_key, result)

        return result

    def _convert_expression_impl(self, expression: str, context: str) -> Dict[str, Any]:
        """Actual expression conversion implementation."""
        # Placeholder implementation
        return {
            "type": "Literal",
            "valueType": "{urn:hl7-org:elm-types:r1}String",
            "value": expression,
        }

    def batch_convert_optimized(
        self, libraries: list[Any], max_workers: int = 4
    ) -> list[dict[str, Any]]:
        """Optimized batch conversion with memory management."""
        results: list[dict[str, Any]] = []

        try:
            # Process in chunks to manage memory
            chunk_size = max(1, len(libraries) // max_workers)

            for i in range(0, len(libraries), chunk_size):
                chunk = libraries[i : i + chunk_size]
                chunk_results: list[dict[str, Any]] = []

                for library in chunk:
                    result = self._convert_single_optimized(library)
                    chunk_results.append(result)

                results.extend(chunk_results)

                # Memory optimization
                if self.enable_memory_optimization:
                    self._cleanup_memory()

        except Exception as e:
            print(f"Batch conversion error: {e}")

        return results

    def _convert_single_optimized(self, library: Any) -> Any:
        """Convert single library with optimizations."""
        # Implementation would go here
        return {"status": "converted", "library": str(library)}

    def _cleanup_memory(self) -> None:
        """Clean up memory during batch processing."""
        # Clear expression cache if it gets too large
        if self.expression_cache.stats.size > 800:
            # Keep only most recently used 50%
            self.expression_cache.clear()

        # Force garbage collection periodically
        gc.collect()

    def get_performance_stats(self) -> Dict[str, Any]:
        """Get performance statistics."""
        return {
            "validation_cache": {
                "hit_rate": self.validation_cache.get_stats().hit_rate,
                "size": self.validation_cache.get_stats().size,
                "hits": self.validation_cache.get_stats().hits,
                "misses": self.validation_cache.get_stats().misses,
            },
            "expression_cache": {
                "hit_rate": self.expression_cache.get_stats().hit_rate,
                "size": self.expression_cache.get_stats().size,
                "hits": self.expression_cache.get_stats().hits,
                "misses": self.expression_cache.get_stats().misses,
            },
        }

    # Compatibility shim with high-level API used by web layer
    def convert_string(self, cql_content: str) -> "ConversionResult":
        """Convert a CQL string using the standard pipeline (compat shim).

        This optimized converter focuses on caching and memory behavior, but to
        satisfy callers that expect a `convert_string` method, delegate to the
        high-level API for now.
        """
        try:
            from cql_flow.api.converter import CQLToELMConverter

            return CQLToELMConverter().convert_string(cql_content)
        except Exception as e:  # pragma: no cover - defensive
            from cql_flow.api.converter import ConversionResult

            # Return a proper ConversionResult on failure
            return ConversionResult(success=False, errors=[f"Optimized conversion error: {e}"])


def optimize_memory_usage():
    """Global memory optimization utilities."""

    # Configure garbage collection for better performance
    import gc

    # Increase garbage collection thresholds for better performance
    gc.set_threshold(1000, 15, 15)  # More objects before collection

    # Enable garbage collection debugging if needed
    # gc.set_debug(gc.DEBUG_STATS)

    return {"gc_threshold": gc.get_threshold(), "gc_counts": gc.get_count()}


class StreamingParser:
    """Streaming parser for large CQL files."""

    def __init__(self, chunk_size: int = 8192):
        self.chunk_size = chunk_size
        self.buffer: str = ""
        self.statements: list[str] = []

    def parse_stream(self, file_stream: TextIO) -> list[str]:
        """Parse CQL file in chunks to reduce memory usage."""
        statements: list[str] = []
        current_statement: str = ""
        in_statement: bool = False

        while True:
            chunk = file_stream.read(self.chunk_size)
            if not chunk:
                break

            self.buffer += chunk

            # Process complete lines
            while "\n" in self.buffer:
                line, self.buffer = self.buffer.split("\n", 1)
                line = line.strip()

                if not line or line.startswith("//"):
                    continue

                # Simple statement detection
                if line.startswith("define ") or line.startswith("parameter "):
                    if current_statement:
                        statements.append(current_statement)
                    current_statement = line
                    in_statement = True
                elif in_statement:
                    current_statement += " " + line

                # End of statement detection
                if line.endswith(";") or (in_statement and not line):
                    if current_statement:
                        statements.append(current_statement)
                    current_statement = ""
                    in_statement = False

        # Handle remaining buffer
        if current_statement:
            statements.append(current_statement)

        return statements

    def parse_file(self, file_path: str) -> list[str]:
        """Parse CQL file using streaming approach."""
        statements = []

        try:
            with open(file_path, "r", encoding="utf-8") as f:
                statements = self.parse_stream(f)
        except Exception as e:
            print(f"Error parsing file {file_path}: {e}")

        return statements


class ParallelBatchProcessor:
    """Parallel batch processing for multiple CQL files."""

    def __init__(self, max_workers: int = 4):
        self.max_workers = max_workers

    def process_batch(self, file_paths: list[str]) -> list[tuple[str, dict[str, Any]]]:
        """Process batch of files with parallel processing."""
        import concurrent.futures

        results: list[tuple[str, dict[str, Any]]] = []

        # Use thread pool for I/O bound operations
        with concurrent.futures.ThreadPoolExecutor(max_workers=self.max_workers) as executor:
            # Submit all tasks
            future_to_file = {
                executor.submit(self._process_single_file, file_path): file_path
                for file_path in file_paths
            }

            # Collect results as they complete
            for future in concurrent.futures.as_completed(future_to_file):
                file_path = future_to_file[future]
                try:
                    result = future.result()
                    results.append((file_path, result))
                except Exception as e:
                    results.append((file_path, {"error": str(e)}))

        return results

    def _process_single_file(self, file_path: str) -> dict[str, Any]:
        """Process single file (placeholder implementation)."""
        import time

        # Simulate processing time
        time.sleep(0.001)

        return {"file": file_path, "status": "processed", "size": len(file_path)}
