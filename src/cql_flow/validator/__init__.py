"""Validator module for CQL semantic analysis."""

# Core symbols and symbol table (base components first)
# Validation framework and rules (depends on core components)
from .rules import (
    DEFAULT_RULE_ENGINE,
    ValidationContext,
    ValidationLevel,
    ValidationMessage,
    ValidationRule,
    ValidationRuleEngine,
    ValidationSeverity,
)
from .scope_manager import DependencyResolver, ScopeManager, SymbolResolver

# Main semantic validator (depends on everything else)
from .semantic_validator import (
    SemanticValidator,
    ValidationOptions,
    ValidationResult,
    create_validator,
)
from .symbol_table import LibraryScope, SymbolTable
from .symbols import Scope, Symbol, SymbolKind

__all__ = [
    # Core symbols
    "Symbol",
    "Scope",
    "SymbolKind",
    # Symbol table
    "SymbolTable",
    "LibraryScope",
    # Scope management
    "ScopeManager",
    "DependencyResolver",
    "SymbolResolver",
    # Validation framework
    "ValidationLevel",
    "ValidationSeverity",
    "ValidationMessage",
    "ValidationContext",
    "ValidationRule",
    "ValidationRuleEngine",
    "DEFAULT_RULE_ENGINE",
    # Semantic validator
    "SemanticValidator",
    "ValidationResult",
    "ValidationOptions",
    "create_validator",
]
