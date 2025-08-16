"""Validation rule framework for CQL semantic analysis."""

from __future__ import annotations

from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from enum import Enum
from typing import TYPE_CHECKING, Any, Dict, List, Optional, Set

if TYPE_CHECKING:
    from cql_flow.models.cql.library import CQLLibrary
    from cql_flow.validator.symbol_table import SymbolTable


class ValidationLevel(Enum):
    """Validation strictness levels."""

    STRICT = "strict"  # Maximum validation, no warnings ignored
    NORMAL = "normal"  # Standard validation level
    PERMISSIVE = "permissive"  # Minimal validation, allows more flexibility


class ValidationSeverity(Enum):
    """Severity levels for validation messages."""

    ERROR = "error"  # Fatal error, prevents compilation
    WARNING = "warning"  # Warning, compilation can continue
    INFO = "info"  # Informational message
    HINT = "hint"  # Optimization or style suggestion


@dataclass
class ValidationMessage:
    """A validation message (error, warning, info, or hint)."""

    severity: ValidationSeverity
    code: str
    message: str
    source_location: Optional[Any] = None  # SourceInfo object
    suggestion: Optional[str] = None
    related_messages: List[ValidationMessage] = field(default_factory=list)

    def __str__(self) -> str:
        location_str = f" at {self.source_location}" if self.source_location else ""
        suggestion_str = f"\nSuggestion: {self.suggestion}" if self.suggestion else ""
        return f"{self.severity.value.upper()}: {self.code}: {self.message}{location_str}{suggestion_str}"


@dataclass
class ValidationContext:
    """Context for validation operations."""

    library: Any  # CQLLibrary - using Any to avoid import issues
    symbol_table: Any  # SymbolTable - using Any to avoid import issues
    validation_level: ValidationLevel
    messages: List[ValidationMessage] = field(default_factory=list)
    visited_expressions: Set[str] = field(default_factory=set)
    current_function: Optional[str] = None
    current_expression: Optional[str] = None

    def add_error(
        self,
        code: str,
        message: str,
        source_location: Optional[Any] = None,
        suggestion: Optional[str] = None,
    ) -> None:
        """Add an error message."""
        self.messages.append(
            ValidationMessage(
                severity=ValidationSeverity.ERROR,
                code=code,
                message=message,
                source_location=source_location,
                suggestion=suggestion,
            )
        )

    def add_warning(
        self,
        code: str,
        message: str,
        source_location: Optional[Any] = None,
        suggestion: Optional[str] = None,
    ) -> None:
        """Add a warning message."""
        self.messages.append(
            ValidationMessage(
                severity=ValidationSeverity.WARNING,
                code=code,
                message=message,
                source_location=source_location,
                suggestion=suggestion,
            )
        )

    def add_info(self, code: str, message: str, source_location: Optional[Any] = None) -> None:
        """Add an info message."""
        self.messages.append(
            ValidationMessage(
                severity=ValidationSeverity.INFO,
                code=code,
                message=message,
                source_location=source_location,
            )
        )

    def has_errors(self) -> bool:
        """Check if any error messages exist."""
        return any(msg.severity == ValidationSeverity.ERROR for msg in self.messages)

    def get_errors(self) -> List[ValidationMessage]:
        """Get all error messages."""
        return [msg for msg in self.messages if msg.severity == ValidationSeverity.ERROR]

    def get_warnings(self) -> List[ValidationMessage]:
        """Get all warning messages."""
        return [msg for msg in self.messages if msg.severity == ValidationSeverity.WARNING]


class ValidationRule(ABC):
    """Abstract base class for validation rules."""

    def __init__(self, rule_id: str, description: str):
        self.rule_id = rule_id
        self.description = description
        self.enabled = True

    @abstractmethod
    def validate(self, context: ValidationContext, node: Any) -> None:
        """Validate a node and add messages to context."""
        pass

    def should_run(self, context: ValidationContext) -> bool:
        """Check if this rule should run for the given context."""
        return self.enabled

    def __str__(self) -> str:
        return f"Rule({self.rule_id}: {self.description})"


class ExpressionValidationRule(ValidationRule):
    """Base class for expression validation rules."""

    @abstractmethod
    def validate_expression(self, context: ValidationContext, expression: Any) -> None:
        """Validate a specific expression."""
        pass

    def validate(self, context: ValidationContext, node: Any) -> None:
        """Validate if node is an expression."""
        # For now, treat any node as potentially an expression
        # Later we can add proper type checking
        self.validate_expression(context, node)


class LibraryValidationRule(ValidationRule):
    """Base class for library-level validation rules."""

    @abstractmethod
    def validate_library(self, context: ValidationContext, library: Any) -> None:
        """Validate a library."""
        pass

    def validate(self, context: ValidationContext, node: Any) -> None:
        """Validate if node is a library."""
        # For now, assume the node passed is the library we want to validate
        self.validate_library(context, node)


class ValidationRuleEngine:
    """Engine for running validation rules."""

    def __init__(self):
        self.rules: Dict[str, ValidationRule] = {}
        self.rule_dependencies: Dict[str, List[str]] = {}

    def register_rule(self, rule: ValidationRule, dependencies: Optional[List[str]] = None) -> None:
        """Register a validation rule with optional dependencies."""
        self.rules[rule.rule_id] = rule
        self.rule_dependencies[rule.rule_id] = dependencies or []

    def unregister_rule(self, rule_id: str) -> None:
        """Unregister a validation rule."""
        if rule_id in self.rules:
            del self.rules[rule_id]
        if rule_id in self.rule_dependencies:
            del self.rule_dependencies[rule_id]

    def enable_rule(self, rule_id: str) -> None:
        """Enable a specific rule."""
        if rule_id in self.rules:
            self.rules[rule_id].enabled = True

    def disable_rule(self, rule_id: str) -> None:
        """Disable a specific rule."""
        if rule_id in self.rules:
            self.rules[rule_id].enabled = False

    def get_rule_execution_order(self) -> List[str]:
        """Get rules in dependency order using topological sort."""
        # Simple topological sort
        visited: Set[str] = set()
        temp_visited: Set[str] = set()
        result: List[str] = []

        def visit(rule_id: str) -> None:
            if rule_id in temp_visited:
                raise ValueError(f"Circular dependency detected involving rule {rule_id}")
            if rule_id in visited:
                return

            temp_visited.add(rule_id)
            for dep in self.rule_dependencies.get(rule_id, []):
                if dep in self.rules:
                    visit(dep)
            temp_visited.remove(rule_id)
            visited.add(rule_id)
            result.append(rule_id)

        for rule_id in self.rules:
            if rule_id not in visited:
                visit(rule_id)

        return result

    def validate(self, context: ValidationContext, node: Any) -> None:
        """Run all applicable rules on a node."""
        execution_order = self.get_rule_execution_order()

        for rule_id in execution_order:
            rule = self.rules[rule_id]
            if rule.should_run(context):
                try:
                    rule.validate(context, node)
                except Exception as e:
                    context.add_error(
                        "RULE_EXECUTION_ERROR",
                        f"Error executing rule {rule_id}: {str(e)}",
                    )

    def get_enabled_rules(self) -> List[ValidationRule]:
        """Get all enabled rules."""
        return [rule for rule in self.rules.values() if rule.enabled]

    def get_rule_count(self) -> int:
        """Get total number of registered rules."""
        return len(self.rules)


# Rule registry for built-in rules
DEFAULT_RULE_ENGINE = ValidationRuleEngine()
