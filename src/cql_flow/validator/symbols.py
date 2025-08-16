"""Symbol definitions for CQL semantic analysis."""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Dict, List, Optional

from cql_flow.models.types import CQLType


class SymbolKind(Enum):
    """Types of symbols that can be defined in CQL."""

    LIBRARY = "library"
    PARAMETER = "parameter"
    VALUESET = "valueset"
    CODESYSTEM = "codesystem"
    CODE = "code"
    CONTEXT = "context"
    EXPRESSION = "expression"
    FUNCTION = "function"
    VARIABLE = "variable"  # For let expressions and function parameters
    ALIAS = "alias"  # For query aliases


@dataclass
class Symbol:
    """Represents a named symbol in the CQL symbol table."""

    name: str
    kind: SymbolKind
    type_: Optional[CQLType] = None
    source_library: Optional[str] = None  # For imported symbols
    definition: Optional[Any] = None  # Reference to AST node
    is_imported: bool = False

    def __str__(self) -> str:
        type_str = f": {self.type_.to_string()}" if self.type_ else ""
        lib_str = f" from {self.source_library}" if self.source_library else ""
        return f"{self.kind.value} {self.name}{type_str}{lib_str}"


@dataclass
class Scope:
    """Represents a lexical scope with local symbol definitions."""

    name: str
    parent: Optional["Scope"] = None
    symbols: Dict[str, Symbol] = field(default_factory=dict)
    children: List["Scope"] = field(default_factory=list)

    def define_symbol(self, symbol: Symbol) -> None:
        """Define a symbol in this scope."""
        if symbol.name in self.symbols:
            existing = self.symbols[symbol.name]
            raise ValueError(
                f"Symbol '{symbol.name}' already defined as {existing.kind.value} "
                f"in scope '{self.name}'"
            )
        self.symbols[symbol.name] = symbol

    def lookup_local(self, name: str) -> Optional[Symbol]:
        """Look up a symbol only in this scope."""
        return self.symbols.get(name)

    def lookup(self, name: str) -> Optional[Symbol]:
        """Look up a symbol in this scope and parent scopes."""
        symbol = self.lookup_local(name)
        if symbol is not None:
            return symbol

        if self.parent is not None:
            return self.parent.lookup(name)

        return None

    def has_symbol(self, name: str) -> bool:
        """Check if a symbol exists in this scope or parent scopes."""
        return self.lookup(name) is not None

    def get_all_symbols(self) -> Dict[str, Symbol]:
        """Get all symbols visible in this scope (including parent scopes)."""
        result: Dict[str, Symbol] = {}

        # Add parent symbols first (so local ones can override)
        if self.parent:
            result.update(self.parent.get_all_symbols())

        # Add local symbols
        result.update(self.symbols)

        return result

    def __str__(self) -> str:
        symbol_names = list(self.symbols.keys())
        return f"Scope({self.name}, symbols={symbol_names})"
