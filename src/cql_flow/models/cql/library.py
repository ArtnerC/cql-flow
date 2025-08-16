"""
CQL library AST model.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import TYPE_CHECKING, List, Optional

from cql_flow.models.common.source_info import SourceInfo

if TYPE_CHECKING:
    from .expressions import CQLExpression


@dataclass
class VersionSpecifier:
    """Version specification for libraries."""

    version: str
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def __str__(self) -> str:
        """Return the version string."""
        return self.version


@dataclass
class UsingStatement:
    """CQL using statement for data models."""

    model_identifier: str
    version: Optional[VersionSpecifier] = None
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class IncludeStatement:
    """CQL include statement for library dependencies."""

    library_identifier: str
    version: Optional[VersionSpecifier] = None
    local_identifier: Optional[str] = None
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class ParameterDef:
    """CQL parameter definition."""

    name: str
    type_specifier: Optional[str] = None
    default_value: Optional[str] = None
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class ValuesetDef:
    """CQL valueset definition."""

    name: str
    url: Optional[str] = None
    version: Optional[str] = None
    codesystems: List[str] = field(default_factory=list)
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class CodesystemDef:
    """CQL codesystem definition."""

    name: str
    url: str
    version: Optional[str] = None
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class CodeDef:
    """CQL code definition."""

    name: str
    code: str
    codesystem: str
    display: Optional[str] = None
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class ExpressionDef:
    """CQL expression definition."""

    name: str
    expression: Optional["CQLExpression"] = None  # Now uses AST for actual expressions
    expression_text: str = ""  # Keep text for backward compatibility
    context: Optional[str] = None
    access_level: str = "Public"
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class FunctionDef:
    """CQL function definition."""

    name: str
    parameters: List[ParameterDef] = field(default_factory=list)
    return_type: Optional[str] = None
    expression: Optional["CQLExpression"] = None  # Now uses AST for actual expressions
    expression_text: str = ""  # Keep text for backward compatibility
    access_level: str = "Public"
    source_info: SourceInfo = field(default_factory=SourceInfo)


@dataclass
class CQLLibrary:
    """Root AST node for a CQL library."""

    name: str
    version: Optional[VersionSpecifier] = None
    using_statements: List[UsingStatement] = field(default_factory=list)
    include_statements: List[IncludeStatement] = field(default_factory=list)
    parameters: List[ParameterDef] = field(default_factory=list)
    valuesets: List[ValuesetDef] = field(default_factory=list)
    codesystems: List[CodesystemDef] = field(default_factory=list)
    codes: List[CodeDef] = field(default_factory=list)
    expressions: List[ExpressionDef] = field(default_factory=list)
    functions: List[FunctionDef] = field(default_factory=list)
    source_info: SourceInfo = field(default_factory=SourceInfo)

    def __post_init__(self):
        """Validate library structure."""
        if not self.name:
            raise ValueError("Library name is required")

    def get_qualified_name(self) -> str:
        """Get fully qualified library name including version."""
        if self.version:
            return f"{self.name} version '{self.version.version}'"
        return self.name
