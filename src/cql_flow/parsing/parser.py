"""CQL parser implementation using ANTLR4."""

from pathlib import Path
from typing import Any, List, Optional

from antlr4 import CommonTokenStream, InputStream, ParseTreeWalker
from antlr4.error.ErrorListener import ErrorListener

from ..models.common.source_info import SourceInfo
from ..models.cql.library import CQLLibrary
from .errors import CQLParseError, CQLSyntaxError
from .generated.cqlLexer import cqlLexer
from .generated.cqlListener import cqlListener
from .generated.cqlParser import cqlParser


class CQLErrorListener(ErrorListener):
    """Custom error listener for CQL parsing."""

    def __init__(self, filename: Optional[str] = None):
        super().__init__()
        self.filename = filename
        self.errors: List[CQLSyntaxError] = []

    def syntaxError(
        self,
        recognizer: Any,
        offendingSymbol: Any,
        line: int,
        column: int,
        msg: str,
        e: Any,
    ) -> None:
        """Handle syntax errors during parsing."""
        error = CQLSyntaxError(
            message=f"Syntax error: {msg}",
            line=line,
            column=column,
            filename=self.filename,
        )
        self.errors.append(error)


class CQLTreeBuilder(cqlListener):
    """Builds CQL AST from ANTLR parse tree."""

    def __init__(self, filename: Optional[str] = None):
        self.filename = filename
        self.library: Optional[CQLLibrary] = None
        self._current_source_info: Optional[SourceInfo] = None

    def _create_source_info(self, ctx: Any) -> SourceInfo:
        """Create source info from parse tree context."""
        if hasattr(ctx, "start") and ctx.start:
            from ..models.common.source_info import SourceLocation

            location = SourceLocation(
                line=ctx.start.line,
                column=ctx.start.column,
                start_char=ctx.start.start if hasattr(ctx.start, "start") else None,
            )
            return SourceInfo(location=location)
        return SourceInfo()

    def enterLibrary(self, ctx: cqlParser.LibraryContext) -> None:
        """Enter library definition."""
        source_info = self._create_source_info(ctx)

        # Initialize empty library - we'll populate it as we traverse
        # We start with a placeholder name that will be updated in enterLibraryDefinition
        self.library = CQLLibrary(
            name="Unknown",  # Will be updated when we encounter libraryDefinition
            version=None,
            using_statements=[],
            include_statements=[],
            parameters=[],
            valuesets=[],
            codesystems=[],
            codes=[],
            expressions=[],
            functions=[],
            source_info=source_info,
        )

    def enterLibraryDefinition(self, ctx: cqlParser.LibraryDefinitionContext) -> None:
        """Handle library definition statement."""
        if not self.library:
            return

        # Extract library name from context
        library_name = "Unknown"
        if hasattr(ctx, "qualifiedIdentifier") and ctx.qualifiedIdentifier():
            # Extract the library name from the qualified identifier
            library_name = str(ctx.qualifiedIdentifier().getText())

        # Extract version if present
        version = None
        if hasattr(ctx, "versionSpecifier") and ctx.versionSpecifier():
            # Version is a STRING token - extract without quotes
            version_text = str(ctx.versionSpecifier().getText())
            # Remove surrounding quotes if present
            if version_text.startswith('"') and version_text.endswith('"'):
                version_text = version_text[1:-1]
            elif version_text.startswith("'") and version_text.endswith("'"):
                version_text = version_text[1:-1]

            from ..models.cql.library import VersionSpecifier

            version = VersionSpecifier(
                version=version_text,
                source_info=self._create_source_info(ctx.versionSpecifier()),
            )

        # Update the library name and version
        self.library.name = library_name
        self.library.version = version

    def enterUsingDefinition(self, ctx: cqlParser.UsingDefinitionContext) -> None:
        """Handle using statement."""
        if not self.library:
            return

        # Extract model identifier
        model_identifier = "Unknown"
        if hasattr(ctx, "modelIdentifier") and ctx.modelIdentifier():
            model_identifier = str(ctx.modelIdentifier().getText())

        # Extract version if present
        version = None
        if hasattr(ctx, "versionSpecifier") and ctx.versionSpecifier():
            version_text = str(ctx.versionSpecifier().getText())
            # Remove surrounding quotes if present
            if version_text.startswith('"') and version_text.endswith('"'):
                version_text = version_text[1:-1]
            elif version_text.startswith("'") and version_text.endswith("'"):
                version_text = version_text[1:-1]

            from ..models.cql.library import VersionSpecifier

            version = VersionSpecifier(
                version=version_text,
                source_info=self._create_source_info(ctx.versionSpecifier()),
            )

        # Create using statement
        from ..models.cql.library import UsingStatement

        using_stmt = UsingStatement(
            model_identifier=model_identifier,
            version=version,
            source_info=self._create_source_info(ctx),
        )

        self.library.using_statements.append(using_stmt)

    def enterCodesystemDefinition(self, ctx: cqlParser.CodesystemDefinitionContext) -> None:
        """Handle codesystem definition."""
        if not self.library:
            return

        name = "Unknown"
        if hasattr(ctx, "identifier") and ctx.identifier():
            raw_name = str(ctx.identifier().getText())
            # Unquote quoted identifiers like "LOINC"
            name = (
                raw_name[1:-1]
                if (raw_name.startswith('"') and raw_name.endswith('"'))
                or (raw_name.startswith("'") and raw_name.endswith("'"))
                else raw_name
            )

        url = ""
        if hasattr(ctx, "codesystemId") and ctx.codesystemId():
            raw = str(ctx.codesystemId().getText())
            url = raw[1:-1] if (raw.startswith('"') or raw.startswith("'")) else raw

        version = None
        if hasattr(ctx, "versionSpecifier") and ctx.versionSpecifier():
            vraw = str(ctx.versionSpecifier().getText())
            v = vraw[1:-1] if (vraw.startswith('"') or vraw.startswith("'")) else vraw
            from ..models.cql.library import VersionSpecifier

            version = VersionSpecifier(version=v, source_info=self._create_source_info(ctx))

        from ..models.cql.library import CodesystemDef

        self.library.codesystems.append(
            CodesystemDef(
                name=name,
                url=url,
                version=version.version if version else None,
                source_info=self._create_source_info(ctx),
            )
        )

    def enterCodeDefinition(self, ctx: cqlParser.CodeDefinitionContext) -> None:
        """Handle code definition."""
        if not self.library:
            return

        name = "Unknown"
        if hasattr(ctx, "identifier") and ctx.identifier():
            raw_name = str(ctx.identifier().getText())
            # Unquote quoted identifiers used for code names
            name = (
                raw_name[1:-1]
                if (raw_name.startswith('"') and raw_name.endswith('"'))
                or (raw_name.startswith("'") and raw_name.endswith("'"))
                else raw_name
            )

        code_val = ""
        if hasattr(ctx, "codeId") and ctx.codeId():
            raw = str(ctx.codeId().getText())
            code_val = raw[1:-1] if (raw.startswith('"') or raw.startswith("'")) else raw

        codesystem_name = ""
        if hasattr(ctx, "codesystemIdentifier") and ctx.codesystemIdentifier():
            codesystem_name = str(ctx.codesystemIdentifier().getText())

        display = None
        if hasattr(ctx, "displayClause") and ctx.displayClause():
            try:
                draw = str(ctx.displayClause().STRING().getText())
                display = draw[1:-1] if (draw.startswith('"') or draw.startswith("'")) else draw
            except Exception:
                display = None

        from ..models.cql.library import CodeDef

        self.library.codes.append(
            CodeDef(
                name=name,
                code=code_val,
                codesystem=codesystem_name,
                display=display,
                source_info=self._create_source_info(ctx),
            )
        )

    def enterStatement(self, ctx: cqlParser.StatementContext) -> None:
        """Handle statement (can contain expression definitions, function definitions, context definitions, etc)."""
        if not self.library:
            return

        # Check if this statement contains an expression definition
        if hasattr(ctx, "expressionDefinition") and ctx.expressionDefinition():
            self._handle_expression_definition(ctx.expressionDefinition())
        # Check if this statement contains a function definition
        elif hasattr(ctx, "functionDefinition") and ctx.functionDefinition():
            self._handle_function_definition(ctx.functionDefinition())
        # Note: context definitions and other statement types handled elsewhere

    def enterDefinition(self, ctx: cqlParser.DefinitionContext) -> None:
        """Handle definition statement (either expression or function)."""
        if not self.library:
            return

        # Check if this is an expression definition or function definition
        if hasattr(ctx, "expressionDefinition") and ctx.expressionDefinition():
            self._handle_expression_definition(ctx.expressionDefinition())
        elif hasattr(ctx, "functionDefinition") and ctx.functionDefinition():
            self._handle_function_definition(ctx.functionDefinition())

    def _handle_expression_definition(self, ctx: cqlParser.ExpressionDefinitionContext) -> None:
        """Handle expression definition (define statement)."""
        from ..models.cql.library import ExpressionDef
        from .expression_parser import CQLExpressionParser

        # Extract expression name
        expr_name = "Unknown"
        if hasattr(ctx, "identifier") and ctx.identifier():
            expr_name = str(ctx.identifier().getText())

        # Extract expression text for backward compatibility
        expression_text = ""
        expression_ast = None
        if hasattr(ctx, "expression") and ctx.expression():
            expression_text = ctx.expression().getText()

            # Parse the actual expression using our expression parser
            expression_parser = CQLExpressionParser(self.filename)
            expression_ast = expression_parser.parse_expression(ctx.expression())

        # Create expression definition with both AST and text
        expr_def = ExpressionDef(
            name=expr_name,
            expression=expression_ast,
            expression_text=expression_text,
            source_info=self._create_source_info(ctx),
        )
        # mypy: self.library is Optional; assert before use
        assert self.library is not None
        self.library.expressions.append(expr_def)

    def _handle_function_definition(self, ctx: cqlParser.FunctionDefinitionContext) -> None:
        """Handle function definition."""
        from ..models.cql.library import FunctionDef

        # Extract function name
        func_name = "Unknown"
        if hasattr(ctx, "identifierOrFunctionIdentifier") and ctx.identifierOrFunctionIdentifier():
            func_name = str(ctx.identifierOrFunctionIdentifier().getText())

        # Create function definition (simplified for now)
        func_def = FunctionDef(
            name=func_name,
            parameters=[],  # TODO: Parse function parameters
            return_type=None,  # TODO: Parse return type
            expression=None,  # AST not yet parsed
            expression_text="TODO: Parse function body",  # TODO: Parse function body
            source_info=self._create_source_info(ctx),
        )

        assert self.library is not None
        self.library.functions.append(func_def)


class CQLParser:
    """Main CQL parser class."""

    def __init__(self):
        self.errors: List[CQLParseError] = []

    def parse_file(self, file_path: str | Path) -> CQLLibrary:
        """Parse a CQL file and return the AST."""
        file_path = Path(file_path)

        if not file_path.exists():
            raise CQLParseError(f"File not found: {file_path}")

        try:
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            return self.parse_string(content, filename=str(file_path))
        except UnicodeDecodeError as e:
            raise CQLParseError(f"Failed to decode file {file_path}: {e}")
        except IOError as e:
            raise CQLParseError(f"Failed to read file {file_path}: {e}")

    def parse_string(self, cql_content: str, filename: Optional[str] = None) -> CQLLibrary:
        """Parse CQL content from string and return the AST."""
        self.errors.clear()

        try:
            # Create input stream
            input_stream = InputStream(cql_content)

            # Create lexer
            lexer = cqlLexer(input_stream)
            error_listener = CQLErrorListener(filename)
            lexer.removeErrorListeners()
            lexer.addErrorListener(error_listener)

            # Create token stream
            stream = CommonTokenStream(lexer)

            # Create parser
            parser = cqlParser(stream)
            parser.removeErrorListeners()
            parser.addErrorListener(error_listener)

            # Parse starting from library rule
            tree = parser.library()

            # Check for syntax errors
            if error_listener.errors:
                self.errors.extend(error_listener.errors)
                # Raise the first error
                raise error_listener.errors[0]

            # Build AST
            builder = CQLTreeBuilder(filename)
            walker = ParseTreeWalker()
            walker.walk(builder, tree)

            if not builder.library:
                raise CQLParseError("Failed to build library AST", filename=filename)

            return builder.library

        except Exception as e:
            if isinstance(e, CQLParseError):
                raise
            raise CQLParseError(f"Unexpected error during parsing: {e}", filename=filename)

    def get_errors(self) -> List[CQLParseError]:
        """Get all parsing errors from the last parse operation."""
        return self.errors.copy()

    def has_errors(self) -> bool:
        """Check if there were any parsing errors."""
        return len(self.errors) > 0
