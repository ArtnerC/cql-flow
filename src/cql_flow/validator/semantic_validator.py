"""Main semantic validator for CQL libraries."""

from __future__ import annotations

from typing import List, Optional

from cql_flow.models.cql.library import CQLLibrary
from cql_flow.validator.rules import (
    DEFAULT_RULE_ENGINE,
    ValidationContext,
    ValidationLevel,
    ValidationMessage,
)
from cql_flow.validator.scope_manager import SymbolResolver
from cql_flow.validator.symbol_table import SymbolTable


class SemanticValidator:
    """Main semantic validator for CQL libraries."""

    def __init__(
        self,
        validation_level: ValidationLevel = ValidationLevel.NORMAL,
        symbol_resolver: Optional[SymbolResolver] = None,
    ):
        self.validation_level = validation_level
        self.symbol_resolver = symbol_resolver or SymbolResolver()
        self.rule_engine = DEFAULT_RULE_ENGINE

        # Import rules to register them
        self._import_validation_rules()

    def _import_validation_rules(self) -> None:
        """Import all validation rule modules to register them."""
        try:
            # Import rule modules to trigger registration
            import cql_flow.validator.rules.scope_rules  # noqa: F401
            # Import other rule modules as they're created
        except ImportError:
            # Rules might not be available yet during development
            pass

    def validate_library(self, library: CQLLibrary) -> ValidationResult:
        """Validate a complete CQL library."""
        # Create library scope in symbol resolver
        library_scope = self.symbol_resolver.create_library_scope(library.name)

        # Create validation context
        context = ValidationContext(
            library=library,
            symbol_table=library_scope.symbol_table,
            validation_level=self.validation_level,
        )

        # Run validation rules on the library
        self.rule_engine.validate(context, library)

        # Validate individual components
        self._validate_library_structure(context, library)
        self._validate_dependencies(context, library)

        # Create and return result
        return ValidationResult(
            library_name=library.name,
            messages=context.messages,
            validation_level=self.validation_level,
            success=not context.has_errors(),
        )

    def _validate_library_structure(self, context: ValidationContext, library: CQLLibrary) -> None:
        """Validate basic library structure."""
        # Check library name
        if not library.name:
            context.add_error(
                "MISSING_LIBRARY_NAME", "Library must have a name", library.source_info
            )
        elif not library.name.isidentifier():
            context.add_error(
                "INVALID_LIBRARY_NAME",
                f"Library name '{library.name}' is not a valid identifier",
                library.source_info,
                "Use only letters, numbers, and underscores",
            )

        # Check version format if present
        if library.version and hasattr(library.version, "version"):
            version_str = library.version.version
            if not self._is_valid_version(version_str):
                context.add_warning(
                    "INVALID_VERSION_FORMAT",
                    f"Version '{version_str}' does not follow semantic versioning",
                    library.version.source_info,
                    "Use format like '1.0.0' or '1.0'",
                )

    def _validate_dependencies(self, context: ValidationContext, library: CQLLibrary) -> None:
        """Validate library dependencies."""
        # Prepare dependency list for resolution
        dependencies: List[tuple[str, str, Optional[str]]] = []

        for include in library.include_statements:
            alias = include.local_identifier or include.library_identifier
            version = include.version.version if include.version else None
            dependencies.append((alias, include.library_identifier, version))

        # Resolve dependencies
        if dependencies:
            library_scope = self.symbol_resolver.libraries.get(library.name)
            if library_scope:
                errors = self.symbol_resolver.resolve_library_dependencies(
                    library_scope, dependencies
                )

                # Add dependency errors to context
                for error in errors:
                    context.add_error("DEPENDENCY_RESOLUTION_ERROR", error)

    def _is_valid_version(self, version: str) -> bool:
        """Check if version string follows semantic versioning."""
        parts = version.split(".")
        if len(parts) < 2 or len(parts) > 3:
            return False

        try:
            for part in parts:
                int(part)
            return True
        except ValueError:
            return False

    def validate_expression(
        self, expression_text: str, library_context: Optional[CQLLibrary] = None
    ) -> ValidationResult:
        """Validate a single expression."""
        # This would parse and validate a single expression
        # For now, just create a minimal validation result
        context = ValidationContext(
            library=library_context or CQLLibrary(name="__expression__"),
            symbol_table=SymbolTable(),
            validation_level=self.validation_level,
        )

        # Basic expression validation
        if not expression_text.strip():
            context.add_error("EMPTY_EXPRESSION", "Expression cannot be empty")

        return ValidationResult(
            library_name="__expression__",
            messages=context.messages,
            validation_level=self.validation_level,
            success=not context.has_errors(),
        )


class ValidationResult:
    """Result of semantic validation."""

    def __init__(
        self,
        library_name: str,
        messages: List[ValidationMessage],
        validation_level: ValidationLevel,
        success: bool,
    ):
        self.library_name = library_name
        self.messages = messages
        self.validation_level = validation_level
        self.success = success

        # Categorize messages
        self.errors = [msg for msg in messages if msg.severity.value == "error"]
        self.warnings = [msg for msg in messages if msg.severity.value == "warning"]
        self.infos = [msg for msg in messages if msg.severity.value == "info"]
        self.hints = [msg for msg in messages if msg.severity.value == "hint"]

    def has_errors(self) -> bool:
        """Check if validation found any errors."""
        return len(self.errors) > 0

    def has_warnings(self) -> bool:
        """Check if validation found any warnings."""
        return len(self.warnings) > 0

    def get_error_count(self) -> int:
        """Get number of errors."""
        return len(self.errors)

    def get_warning_count(self) -> int:
        """Get number of warnings."""
        return len(self.warnings)

    def get_message_summary(self) -> str:
        """Get a summary of all messages."""
        if self.success:
            if self.warnings:
                return f"Validation passed with {len(self.warnings)} warning(s)"
            else:
                return "Validation passed"
        else:
            return f"Validation failed with {len(self.errors)} error(s)"

    def format_messages(self) -> str:
        """Format all messages as a string."""
        lines: List[str] = []

        for message in self.messages:
            lines.append(str(message))

        if not lines:
            return "No validation messages"

        return "\n".join(lines)

    def __str__(self) -> str:
        return f"ValidationResult({self.library_name}: {self.get_message_summary()})"


class ValidationOptions:
    """Configuration options for semantic validation."""

    def __init__(
        self,
        validation_level: ValidationLevel = ValidationLevel.NORMAL,
        enable_type_checking: bool = True,
        enable_scope_checking: bool = True,
        enable_dependency_checking: bool = True,
        enable_clinical_model_checking: bool = True,
        custom_rules: Optional[List[str]] = None,
    ):
        self.validation_level = validation_level
        self.enable_type_checking = enable_type_checking
        self.enable_scope_checking = enable_scope_checking
        self.enable_dependency_checking = enable_dependency_checking
        self.enable_clinical_model_checking = enable_clinical_model_checking
        self.custom_rules = custom_rules or []


def create_validator(options: Optional[ValidationOptions] = None) -> SemanticValidator:
    """Create a semantic validator with specified options."""
    opts = options or ValidationOptions()

    validator = SemanticValidator(validation_level=opts.validation_level)

    # Configure rule engine based on options
    if not opts.enable_type_checking:
        validator.rule_engine.disable_rule("TYPE_INFERENCE")
        validator.rule_engine.disable_rule("TYPE_COMPATIBILITY")

    if not opts.enable_scope_checking:
        validator.rule_engine.disable_rule("SCOPE_VALIDATION")
        validator.rule_engine.disable_rule("SYMBOL_RESOLUTION")

    if not opts.enable_clinical_model_checking:
        validator.rule_engine.disable_rule("CLINICAL_MODEL")

    return validator
