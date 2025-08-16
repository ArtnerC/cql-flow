"""Scope management for CQL semantic analysis."""

from __future__ import annotations

from contextlib import AbstractContextManager, contextmanager
from dataclasses import dataclass
from typing import Dict, Generator, List, Optional, Set

from .symbol_table import LibraryScope, SymbolTable
from .symbols import Scope, Symbol


class ScopeManager:
    """Manages nested scopes during CQL semantic analysis."""

    def __init__(self, symbol_table: SymbolTable):
        self.symbol_table = symbol_table
        self._scope_counter = 0

    @contextmanager
    def scope(self, name: Optional[str] = None) -> Generator[Scope, None, None]:
        """Context manager for entering and automatically exiting a scope."""
        if name is None:
            self._scope_counter += 1
            name = f"scope_{self._scope_counter}"

        scope = self.symbol_table.enter_scope(name)
        try:
            yield scope
        finally:
            self.symbol_table.exit_scope()

    def function_scope(self, function_name: str) -> AbstractContextManager[Scope]:
        """Create a scope for a function definition."""
        return self.scope(f"function_{function_name}")

    def expression_scope(self, expression_name: str) -> AbstractContextManager[Scope]:
        """Create a scope for an expression definition."""
        return self.scope(f"expression_{expression_name}")

    def query_scope(self) -> AbstractContextManager[Scope]:
        """Create a scope for a query expression."""
        return self.scope("query")

    def let_scope(self) -> AbstractContextManager[Scope]:
        """Create a scope for a let expression."""
        return self.scope("let")


@dataclass
class DependencyResolver:
    """Resolves library dependencies and detects circular references."""

    def __init__(self):
        self.library_registry: Dict[str, LibraryScope] = {}
        self._resolution_stack: List[str] = []

    def register_library(self, library: LibraryScope) -> None:
        """Register a library in the dependency resolver."""
        library_key = self._get_library_key(library.name, library.version)
        self.library_registry[library_key] = library

    def resolve_dependency(
        self, library_name: str, version: Optional[str] = None
    ) -> Optional[LibraryScope]:
        """Resolve a library dependency by name and version."""
        library_key = self._get_library_key(library_name, version)
        return self.library_registry.get(library_key)

    def resolve_dependencies(
        self, library: LibraryScope, dependencies: List[tuple[str, str, Optional[str]]]
    ) -> List[str]:
        """
        Resolve all dependencies for a library.

        Args:
            library: The library to resolve dependencies for
            dependencies: List of (alias, library_name, version) tuples

        Returns:
            List of error messages for unresolved dependencies
        """
        errors: List[str] = []

        # Check for circular dependencies before resolving
        if library.name in self._resolution_stack:
            circular_path = " -> ".join(self._resolution_stack + [library.name])
            errors.append(f"Circular dependency detected: {circular_path}")
            return errors

        self._resolution_stack.append(library.name)

        try:
            for alias, dep_name, version in dependencies:
                dep_library = self.resolve_dependency(dep_name, version)
                if dep_library is None:
                    version_str = f" version {version}" if version else ""
                    errors.append(f"Cannot resolve dependency '{dep_name}'{version_str}'")
                    continue

                # Check for circular dependency
                if library.has_circular_dependency(dep_name):
                    errors.append(
                        f"Circular dependency detected between '{library.name}' and '{dep_name}'"
                    )
                    continue

                # Add the dependency
                library.add_dependency(alias, dep_library)

        finally:
            self._resolution_stack.pop()

        return errors

    def get_dependency_order(self, libraries: List[LibraryScope]) -> List[LibraryScope]:
        """
        Get libraries in dependency resolution order (topological sort).

        Returns libraries ordered such that dependencies come before dependents.
        """
        # Build dependency graph
        in_degree = {lib.name: 0 for lib in libraries}
        graph: Dict[str, List[str]] = {lib.name: [] for lib in libraries}
        lib_map = {lib.name: lib for lib in libraries}

        for library in libraries:
            for _, dep_library in library.dependencies.items():
                if dep_library.name in graph:
                    graph[dep_library.name].append(library.name)
                    in_degree[library.name] += 1

        # Topological sort using Kahn's algorithm
        queue = [name for name, degree in in_degree.items() if degree == 0]
        result: List[LibraryScope] = []

        while queue:
            current = queue.pop(0)
            result.append(lib_map[current])

            for neighbor in graph[current]:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)

        # Check for cycles
        if len(result) != len(libraries):
            remaining = [name for name, degree in in_degree.items() if degree > 0]
            raise ValueError(f"Circular dependencies detected among libraries: {remaining}")

        return result

    def check_circular_dependencies(self, libraries: List[LibraryScope]) -> List[str]:
        """Check for circular dependencies among a set of libraries."""
        errors: List[str] = []

        for library in libraries:
            visited: Set[str] = set()
            if self._has_cycle(library, visited, set()):
                errors.append(f"Circular dependency detected involving library '{library.name}'")

        return errors

    def _has_cycle(self, library: LibraryScope, visited: Set[str], rec_stack: Set[str]) -> bool:
        """Helper method to detect cycles using DFS."""
        if library.name in rec_stack:
            return True

        if library.name in visited:
            return False

        visited.add(library.name)
        rec_stack.add(library.name)

        for dep_library in library.dependencies.values():
            if self._has_cycle(dep_library, visited, rec_stack):
                return True

        rec_stack.remove(library.name)
        return False

    def _get_library_key(self, name: str, version: Optional[str]) -> str:
        """Generate a unique key for a library."""
        if version:
            return f"{name}@{version}"
        return name

    def clear(self) -> None:
        """Clear all registered libraries."""
        self.library_registry.clear()
        self._resolution_stack.clear()


class SymbolResolver:
    """High-level symbol resolution with dependency management."""

    def __init__(self):
        self.dependency_resolver = DependencyResolver()
        self.libraries: Dict[str, LibraryScope] = {}

    def create_library_scope(self, name: str, version: Optional[str] = None) -> LibraryScope:
        """Create and register a new library scope."""
        library = LibraryScope(name=name, version=version)
        self.dependency_resolver.register_library(library)
        self.libraries[name] = library
        return library

    def resolve_library_dependencies(
        self, library: LibraryScope, dependencies: List[tuple[str, str, Optional[str]]]
    ) -> List[str]:
        """Resolve dependencies for a library."""
        return self.dependency_resolver.resolve_dependencies(library, dependencies)

    def get_symbol_resolution_order(self) -> List[LibraryScope]:
        """Get libraries in symbol resolution order."""
        return self.dependency_resolver.get_dependency_order(list(self.libraries.values()))

    def validate_dependencies(self) -> List[str]:
        """Validate all library dependencies."""
        return self.dependency_resolver.check_circular_dependencies(list(self.libraries.values()))

    def lookup_symbol(self, name: str, current_library: Optional[str] = None) -> Optional[Symbol]:
        """Look up a symbol in the appropriate library context."""
        if current_library and current_library in self.libraries:
            return self.libraries[current_library].lookup_symbol(name)
        return None

    def lookup_qualified_symbol(
        self, qualifier: str, name: str, current_library: Optional[str] = None
    ) -> Optional[Symbol]:
        """Look up a qualified symbol."""
        if current_library and current_library in self.libraries:
            return self.libraries[current_library].lookup_qualified_symbol(qualifier, name)
        return None
