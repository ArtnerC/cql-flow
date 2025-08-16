"""CQL parsing errors."""

from typing import Optional


class CQLParseError(Exception):
    """Base exception for CQL parsing errors."""

    def __init__(
        self,
        message: str,
        line: Optional[int] = None,
        column: Optional[int] = None,
        filename: Optional[str] = None,
    ):
        super().__init__(message)
        self.message = message
        self.line = line
        self.column = column
        self.filename = filename

    def __str__(self) -> str:
        location_parts = []
        if self.filename:
            location_parts.append(f"file {self.filename}")
        if self.line is not None:
            location_parts.append(f"line {self.line}")
        if self.column is not None:
            location_parts.append(f"column {self.column}")

        if location_parts:
            location = " at " + ", ".join(location_parts)
        else:
            location = ""

        return f"{self.message}{location}"


class CQLSyntaxError(CQLParseError):
    """Exception for CQL syntax errors."""

    pass


class CQLSemanticError(CQLParseError):
    """Exception for CQL semantic errors."""

    pass
