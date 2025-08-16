"""Symbol table implementation for CQL semantic analysis."""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Dict, List, Optional, Set

from .symbols import Scope, Symbol


class SymbolTable:
    """Manages symbol resolution and scoping for CQL semantic analysis."""

    def __init__(self):
        self.global_scope = Scope("global")
        self.current_scope = self.global_scope
        self.scope_stack: List[Scope] = [self.global_scope]
        self.libraries: Dict[str, LibraryScope] = {}

    def enter_scope(self, name: str) -> Scope:
        """Enter a new nested scope."""
        new_scope = Scope(name, parent=self.current_scope)
        self.current_scope.children.append(new_scope)
        self.current_scope = new_scope
        self.scope_stack.append(new_scope)
        return new_scope

    def exit_scope(self) -> Optional[Scope]:
        """Exit the current scope and return to parent."""
        if len(self.scope_stack) <= 1:
            raise ValueError("Cannot exit global scope")

        exited_scope = self.scope_stack.pop()
        self.current_scope = self.scope_stack[-1]
        return exited_scope

    def define_symbol(self, symbol: Symbol) -> None:
        """Define a symbol in the current scope."""
        self.current_scope.define_symbol(symbol)

    def lookup_symbol(self, name: str) -> Optional[Symbol]:
        """Look up a symbol starting from current scope."""
        return self.current_scope.lookup(name)

    def lookup_qualified_symbol(self, qualifier: str, name: str) -> Optional[Symbol]:
        """Look up a symbol with library qualifier."""
        if qualifier in self.libraries:
            library_scope = self.libraries[qualifier]
            return library_scope.lookup_symbol(name)
        return None

    def has_symbol(self, name: str) -> bool:
        """Check if a symbol exists in current scope chain."""
        return self.current_scope.has_symbol(name)

    def register_library(self, library_name: str, library_scope: LibraryScope) -> None:
        """Register a library scope for qualified lookups."""
        self.libraries[library_name] = library_scope

    def get_current_scope(self) -> Scope:
        """Get the current active scope."""
        return self.current_scope

    def get_global_scope(self) -> Scope:
        """Get the global scope."""
        return self.global_scope

    def reset(self) -> None:
        """Reset the symbol table to initial state."""
        self.global_scope = Scope("global")
        self.current_scope = self.global_scope
        self.scope_stack = [self.global_scope]
        self.libraries.clear()


@dataclass
class LibraryScope:
    """Represents the scope of an entire CQL library."""

    name: str
    version: Optional[str] = None
    symbol_table: SymbolTable = field(default_factory=SymbolTable)
    dependencies: Dict[str, LibraryScope] = field(default_factory=dict)
    _is_resolving: bool = field(default=False, init=False)

    def define_symbol(self, symbol: Symbol) -> None:
        """Define a symbol in this library's global scope."""
        self.symbol_table.define_symbol(symbol)

    def lookup_symbol(self, name: str) -> Optional[Symbol]:
        """Look up a symbol in this library."""
        return self.symbol_table.lookup_symbol(name)

    def lookup_qualified_symbol(self, qualifier: str, name: str) -> Optional[Symbol]:
        """Look up a symbol with library qualifier."""
        if qualifier in self.dependencies:
            return self.dependencies[qualifier].lookup_symbol(name)
        return self.symbol_table.lookup_qualified_symbol(qualifier, name)

    def add_dependency(self, alias: str, library: LibraryScope) -> None:
        """Add a library dependency with alias."""
        self.dependencies[alias] = library
        self.symbol_table.register_library(alias, library)

    def has_circular_dependency(
        self, target_library: str, visited: Optional[Set[str]] = None
    ) -> bool:
        """Check for circular dependencies."""
        if visited is None:
            visited = set()

        if self.name in visited:
            return True

        visited.add(self.name)

        for _, dep_library in self.dependencies.items():
            if dep_library.name == target_library or dep_library.has_circular_dependency(
                target_library, visited.copy()
            ):
                return True

        return False

    def __str__(self) -> str:
        deps = list(self.dependencies.keys())
        return f"LibraryScope({self.name}, deps={deps})"
