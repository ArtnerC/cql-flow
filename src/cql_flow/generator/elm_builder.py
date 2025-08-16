"""ELM Builder for converting CQL AST to ELM."""

from __future__ import annotations

import logging
from dataclasses import dataclass, field
from typing import TYPE_CHECKING, Any, List, Optional, Union

from cql_flow.models.cql.library import (
    CQLLibrary,
    ExpressionDef,
    FunctionDef,
    ParameterDef,
    UsingStatement,
)
from cql_flow.models.elm.ast import (
    ELMDocument,
    ELMExpression,
    ELMExpressionDef,
    ELMFunctionDef,
    ELMIdentifier,
    ELMIdentifierRef,
    ELMLibrary,
    ELMLiteral,
    ELMParameterDef,
    ELMSchemaIdentifier,
    ELMStatements,
    ELMUsingDef,
    ELMUsings,
)
from cql_flow.validator import SemanticValidator, ValidationResult

logger = logging.getLogger(__name__)

if TYPE_CHECKING:
    from cql_flow.models.cql.expressions import CQLExpression


@dataclass
class ELMGenerationError:
    """Error that occurred during ELM generation."""

    message: str
    source_location: Optional[str] = None
    error_type: Optional[str] = None
    context: Optional[str] = None

    def __str__(self) -> str:
        location_str = f" at {self.source_location}" if self.source_location else ""
        context_str = f" ({self.context})" if self.context else ""
        return f"ELM Generation Error: {self.message}{location_str}{context_str}"


@dataclass
class ELMGenerationResult:
    """Result of ELM generation."""

    elm_document: Optional[ELMDocument] = None
    errors: List[ELMGenerationError] = field(default_factory=list)
    warnings: List[str] = field(default_factory=list)
    success: bool = False
    validation_result: Optional[ValidationResult] = None

    def has_errors(self) -> bool:
        """Check if generation had errors."""
        return len(self.errors) > 0

    def has_warnings(self) -> bool:
        """Check if generation had warnings."""
        return len(self.warnings) > 0

    def get_elm_json(self, indent: Optional[int] = 2) -> Optional[str]:
        """Get ELM as JSON string."""
        if self.elm_document:
            return self.elm_document.to_json(indent=indent)
        return None


class ELMBuilder:
    """Builds ELM documents from validated CQL libraries."""

    def __init__(
        self,
        semantic_validator: Optional[SemanticValidator] = None,
        preserve_annotations: bool = True,
        optimize: bool = False,
    ):
        """Initialize ELM builder.

        Args:
            semantic_validator: Validator to use for pre-generation validation
            preserve_annotations: Whether to preserve source annotations in ELM
            optimize: Whether to perform basic optimizations
        """
        self.semantic_validator = semantic_validator or SemanticValidator()
        self.preserve_annotations = preserve_annotations
        self.optimize = optimize
        self.errors: List[ELMGenerationError] = []
        self.warnings: List[str] = []

    def generate_elm(self, cql_library: CQLLibrary) -> ELMGenerationResult:
        """Generate ELM document from CQL library.

        Args:
            cql_library: The CQL library to convert

        Returns:
            ELMGenerationResult containing the generated ELM or errors
        """
        self.errors.clear()
        self.warnings.clear()

        # Validate the CQL library first
        validation_result = self.semantic_validator.validate_library(cql_library)

        if not validation_result.success:
            # Convert validation errors to generation errors
            for error in validation_result.errors:
                self.errors.append(
                    ELMGenerationError(
                        message=f"Validation failed: {error.message}",
                        source_location=error.source_location,
                        context="pre-validation",
                    )
                )

            return ELMGenerationResult(
                errors=self.errors.copy(),
                warnings=self.warnings.copy(),
                success=False,
                validation_result=validation_result,
            )

        try:
            # Generate ELM library
            elm_library = self._convert_library(cql_library)
            elm_document = ELMDocument(library=elm_library)

            # Perform optimizations if enabled
            if self.optimize:
                self._optimize_elm(elm_document)

            return ELMGenerationResult(
                elm_document=elm_document,
                errors=self.errors.copy(),
                warnings=self.warnings.copy(),
                success=True,
                validation_result=validation_result,
            )

        except Exception as e:
            logger.exception("Unexpected error during ELM generation")
            self.errors.append(
                ELMGenerationError(message=f"Unexpected error: {str(e)}", context="elm-generation")
            )

            return ELMGenerationResult(
                errors=self.errors.copy(),
                warnings=self.warnings.copy(),
                success=False,
                validation_result=validation_result,
            )

    def _convert_library(self, cql_library: CQLLibrary) -> ELMLibrary:
        """Convert a CQL library to ELM library."""
        # Create ELM identifier
        elm_identifier = ELMIdentifier(
            id=cql_library.name,
            version=cql_library.version.version if cql_library.version else None,
        )

        # Create schema identifier
        elm_schema = ELMSchemaIdentifier()

        # Convert using statements
        elm_usings = self._convert_usings(cql_library.using_statements)

        # Convert statements (expressions, parameters, functions)
        elm_statements = self._convert_statements(cql_library)

        return ELMLibrary(
            identifier=elm_identifier,
            schema_identifier=elm_schema,
            usings=elm_usings,
            statements=elm_statements,
        )

    def _convert_usings(self, using_statements: List[UsingStatement]) -> ELMUsings:
        """Convert CQL using statements to ELM usings."""
        elm_using_defs = []

        # Map model identifiers to their standard URIs
        model_uri_mapping = {
            "FHIR": "http://hl7.org/fhir",
            "QDM": "urn:healthit-gov:qdm:v5_6",
            "QICore": "http://hl7.org/fhir/us/qicore",
            "QUICK": "http://hl7.org/fhir/us/qicore",
            "System": "urn:hl7-org:elm-types:r1",
        }

        for using in using_statements:
            # Get the appropriate URI for the model identifier
            uri = model_uri_mapping.get(using.model_identifier, "urn:hl7-org:elm-types:r1")

            elm_using = ELMUsingDef(
                local_identifier=using.model_identifier,
                uri=uri,
                version=using.version.version if using.version else None,
            )
            elm_using_defs.append(elm_using)

        return ELMUsings(definitions=elm_using_defs)

    def _convert_statements(self, cql_library: CQLLibrary) -> ELMStatements:
        """Convert CQL statements to ELM statements."""
        elm_definitions: List[Union[ELMExpressionDef, ELMParameterDef, ELMFunctionDef]] = []

        # Convert parameters
        for param in cql_library.parameters:
            elm_param = self._convert_parameter(param)
            elm_definitions.append(elm_param)

        # Convert expressions
        for expr in cql_library.expressions:
            elm_expr = self._convert_expression_def(expr)
            elm_definitions.append(elm_expr)

        # Convert functions
        for func in cql_library.functions:
            elm_func = self._convert_function_def(func)
            elm_definitions.append(elm_func)

        return ELMStatements(definitions=elm_definitions)

    def _convert_parameter(self, param: ParameterDef) -> ELMParameterDef:
        """Convert CQL parameter to ELM parameter."""
        elm_param = ELMParameterDef(
            name=param.name,
            access_level="Public",  # Default for now
        )

        # TODO: Add parameter type specifier conversion
        # TODO: Add default value conversion if present

        return elm_param

    # Note: _parse_expression_string implemented later in file

    def _convert_expression_def(self, expr_def: ExpressionDef) -> ELMExpressionDef:
        """Convert CQL expression definition to ELM expression definition."""
        from .expression_converter import CQLToELMExpressionConverter

        # Use expression AST if available, otherwise try to parse from text
        elm_expression: Optional[ELMExpression] = None
        cql_expression: Optional["CQLExpression"] = None

        # Prefer explicit AST if provided, but support str for backward-compat
        if isinstance(expr_def.expression, str) and expr_def.expression.strip():
            cql_expression = self._parse_expression_string(expr_def.expression)
        elif expr_def.expression is not None:
            cql_expression = expr_def.expression  # type: ignore[assignment]
        elif expr_def.expression_text and expr_def.expression_text.strip():
            cql_expression = self._parse_expression_string(expr_def.expression_text)

        # Convert AST to ELM if we have one
        if cql_expression is not None:
            try:
                converter = CQLToELMExpressionConverter()
                elm_expression = converter.convert_expression(cql_expression)  # type: ignore[arg-type]
            except Exception as e:
                logger.warning(f"Failed to convert expression for {expr_def.name}: {e}")
                elm_expression = None

        # If conversion failed or no expression AST, use placeholder
        if elm_expression is None:
            elm_expression = ELMIdentifierRef(name="PlaceholderExpression")

        elm_expr_def = ELMExpressionDef(
            name=expr_def.name,
            expression=elm_expression,
            access_level="Public",  # Default for now
            context="Patient",  # Default for now
        )

        # TODO: Determine proper access level from expr_def.access_level
        # TODO: Determine proper context from expr_def.context

        return elm_expr_def

    def _convert_function_def(self, func_def: FunctionDef) -> ELMFunctionDef:
        """Convert CQL function definition to ELM function definition."""
        from .expression_converter import CQLToELMExpressionConverter

        # Convert function body expression if available
        elm_expression: Optional[ELMExpression] = None
        cql_expression: Optional["CQLExpression"] = None

        # Prefer explicit AST if provided, but support str for backward-compat
        if isinstance(func_def.expression, str) and func_def.expression.strip():
            cql_expression = self._parse_expression_string(func_def.expression)
        elif func_def.expression is not None:
            cql_expression = func_def.expression  # type: ignore[assignment]
        elif func_def.expression_text and func_def.expression_text.strip():
            cql_expression = self._parse_expression_string(func_def.expression_text)

        # Convert AST to ELM if we have one
        if cql_expression is not None:
            try:
                converter = CQLToELMExpressionConverter()
                elm_expression = converter.convert_expression(cql_expression)  # type: ignore[arg-type]
            except Exception as e:
                logger.warning(f"Failed to convert function expression for {func_def.name}: {e}")
                elm_expression = None

        # If conversion failed or no expression AST, use placeholder
        if elm_expression is None:
            elm_expression = ELMIdentifierRef(name="PlaceholderExpression")

        # Convert parameters
        elm_operands: List[dict[str, Any]] = []
        for param in func_def.parameters:
            param_dict = {
                "name": param.name,
                "parameterTypeSpecifier": param.type_specifier
                if param.type_specifier
                else "System.Any",
            }
            elm_operands.append(param_dict)

        elm_func_def = ELMFunctionDef(
            name=func_def.name,
            access_level="Public",  # Default for now
            operands=elm_operands,
            expression=elm_expression,
        )

        return elm_func_def

    def _parse_expression_string(self, expression_text: str):
        """Parse a CQL expression string into a CQLExpression AST.

        This is a lightweight shim so ELMBuilder can accept either pre-parsed
        ASTs or raw strings for expressions and functions.
        """
        try:
            from ..parsing.expression_parser import CQLExpressionParser

            parser = CQLExpressionParser()
            return parser.parse_expression_string(expression_text)
        except Exception as e:
            logger.warning(f"Failed to parse expression string '{expression_text}': {e}")
            return None

    def _convert_expression(self, expression: Any) -> ELMExpression:
        """Convert a CQL expression to ELM expression."""
        # This is a placeholder implementation
        # In a full implementation, we'd have a visitor pattern
        # to handle all different expression types

        # For now, return a simple literal
        return ELMLiteral(value="placeholder", value_type="String")

    def _optimize_elm(self, elm_document: ELMDocument) -> None:
        """Perform basic optimizations on the ELM document."""
        # TODO: Implement basic optimizations like:
        # - Constant folding
        # - Dead code elimination
        # - Expression simplification

        # For now, just log that optimization was requested
        if self.optimize:
            self.warnings.append("ELM optimization requested but not yet implemented")

    def add_error(
        self,
        message: str,
        source_location: Optional[Any] = None,
        context: Optional[str] = None,
    ) -> None:
        """Add an error to the generation process."""
        self.errors.append(
            ELMGenerationError(message=message, source_location=source_location, context=context)
        )

    def add_warning(self, message: str) -> None:
        """Add a warning to the generation process."""
        self.warnings.append(message)
