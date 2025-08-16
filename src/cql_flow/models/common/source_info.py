"""
Source information tracking for CQL parsing.
"""

from dataclasses import dataclass
from typing import Optional


@dataclass(frozen=True)
class SourceLocation:
    """Represents a location in CQL source code."""

    line: int
    column: int
    start_char: Optional[int] = None
    end_char: Optional[int] = None

    def __str__(self) -> str:
        return f"line {self.line}, column {self.column}"


@dataclass(frozen=True)
class SourceInfo:
    """Source information for AST nodes."""

    location: Optional[SourceLocation] = None
    text: Optional[str] = None

    def __bool__(self) -> bool:
        """Return True if source info is available."""
        return self.location is not None or self.text is not None
