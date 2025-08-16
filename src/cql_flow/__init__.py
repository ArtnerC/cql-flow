"""
ELM Flow: Clinical Quality Language (CQL) to Expression Logical Model (ELM) JSON converter.

This package provides tools for converting CQL libraries to ELM JSON format,
including a Python API, command-line interface, and validation capabilities.
"""

__version__ = "0.1.0"
__author__ = "ELM Flow Contributors"
__email__ = "elm-flow@example.com"

# Import main API class
from cql_flow.api import ConversionResult, CQLToELMConverter, convert_cql_library

__all__ = ["CQLToELMConverter", "ConversionResult", "convert_cql_library"]


def main() -> None:
    """Temporary main function - will be replaced by CLI."""
    print("Hello from elm-flow!")
