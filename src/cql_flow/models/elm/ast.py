"""ELM (Expression Logical Model) data structures."""

from __future__ import annotations

import json
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional, Union


@dataclass
class ELMIdentifier:
    """ELM library identifier."""

    id: str
    version: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        return {"id": self.id, "version": self.version}


@dataclass
class ELMSchemaIdentifier:
    """ELM schema identifier."""

    id: str = "urn:hl7-org:elm:r1"
    version: str = "r1"

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        return {"id": self.id, "version": self.version}


@dataclass
class ELMUsingDef:
    """ELM using definition."""

    local_identifier: str
    uri: str
    version: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        result = {"localIdentifier": self.local_identifier, "uri": self.uri}
        if self.version:
            result["version"] = self.version
        return result


@dataclass
class ELMExpression:
    """Base class for ELM expressions."""

    result_type_name: Optional[str] = None
    result_type_specifier: Optional[Any] = None
    locator: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        result: Dict[str, Any] = {}
        if self.result_type_name:
            result["resultTypeName"] = self.result_type_name
        if self.result_type_specifier:
            result["resultTypeSpecifier"] = self.result_type_specifier
        if self.locator:
            result["locator"] = self.locator
        return result


@dataclass
class ELMLiteral(ELMExpression):
    """ELM literal expression."""

    value: Any = None
    value_type: str = ""

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        result: Dict[str, Any] = super().to_dict()
        result.update(
            {
                "type": "Literal",
                "value": self.value,
                "valueType": self.value_type,
            }
        )
        return result


@dataclass
class ELMIdentifierRef(ELMExpression):
    """ELM identifier reference."""

    name: str = ""
    library_name: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        result: Dict[str, Any] = super().to_dict()
        result.update({"type": "IdentifierRef", "name": self.name})
        if self.library_name:
            result["libraryName"] = self.library_name
        return result


@dataclass
class ELMFunctionRef(ELMExpression):
    """ELM function reference."""

    name: str = ""
    library_name: Optional[str] = None
    operands: List["ELMExpression"] = field(default_factory=list)

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        result: Dict[str, Any] = super().to_dict()
        result.update({"type": "FunctionRef", "name": self.name})
        if self.library_name:
            result["libraryName"] = self.library_name
        if self.operands:
            result["operand"] = [op.to_dict() for op in self.operands]
        return result


@dataclass
class ELMQuerySource:
    """ELM Query source descriptor."""

    alias: Optional[str] = None
    expression: Optional[ELMExpression] = None

    def to_dict(self) -> Dict[str, Any]:
        result: Dict[str, Any] = {}
        if self.alias is not None:
            result["alias"] = self.alias
        if self.expression is not None:
            result["expression"] = self.expression.to_dict()
        return result


@dataclass
class ELMSortByItem:
    """ELM sort-by item within a query sort clause."""

    direction: str = "asc"  # 'asc' or 'desc'
    expression: Optional[ELMExpression] = None

    def to_dict(self) -> Dict[str, Any]:
        result: Dict[str, Any] = {"direction": self.direction}
        if self.expression is not None:
            result["expression"] = self.expression.to_dict()
        return result


@dataclass
class ELMSortClause:
    """ELM sort clause for queries."""

    by: List[ELMSortByItem] = field(default_factory=list)

    def to_dict(self) -> Dict[str, Any]:
        return {"by": [item.to_dict() for item in self.by]}


@dataclass
class ELMQueryLetBinding:
    """ELM representation of a let binding inside a query."""

    name: str
    expression: ELMExpression

    def to_dict(self) -> Dict[str, Any]:
        return {"name": self.name, "expression": self.expression.to_dict()}


@dataclass
class ELMRelationship:
    """ELM representation of a query relationship (With/Without)."""

    type: str  # 'With' | 'Without'
    source: ELMQuerySource
    suchThat: ELMExpression

    def to_dict(self) -> Dict[str, Any]:
        return {
            "type": self.type,
            "source": self.source.to_dict(),
            "suchThat": self.suchThat.to_dict(),
        }


@dataclass
class ELMAggregateAccumulator:
    name: str
    expression: ELMExpression

    def to_dict(self) -> Dict[str, Any]:
        return {"name": self.name, "expression": self.expression.to_dict()}


@dataclass
class ELMAggregate:
    starting: Optional[ELMExpression] = None
    accumulator: Optional[ELMAggregateAccumulator] = None

    def to_dict(self) -> Dict[str, Any]:
        result: Dict[str, Any] = {}
        if self.starting is not None:
            result["starting"] = self.starting.to_dict()
        if self.accumulator is not None:
            result["accumulator"] = self.accumulator.to_dict()
        return result


@dataclass
class ELMQuery(ELMExpression):
    """ELM Query expression (Phase 1 subset)."""

    sources: List[ELMQuerySource] = field(default_factory=list)
    where: Optional[ELMExpression] = None
    return_expr: Optional[ELMExpression] = None
    sort: Optional[ELMSortClause] = None
    # Phase 2 extensions
    let: List[ELMQueryLetBinding] = field(default_factory=list)
    relationships: List[ELMRelationship] = field(default_factory=list)
    aggregate: Optional[ELMAggregate] = None

    def to_dict(self) -> Dict[str, Any]:
        result: Dict[str, Any] = super().to_dict()
        result.update(
            {
                "type": "Query",
                "source": [s.to_dict() for s in self.sources],
            }
        )
        if self.where is not None:
            result["where"] = self.where.to_dict()
        if self.return_expr is not None:
            result["return"] = self.return_expr.to_dict()
        if self.sort is not None:
            result["sort"] = self.sort.to_dict()
        if self.let:
            result["let"] = [b.to_dict() for b in self.let]
        if self.relationships:
            # Emit singular key to match common ELM JSON shape and our tests
            result["relationship"] = [r.to_dict() for r in self.relationships]
        if self.aggregate is not None:
            result["aggregate"] = self.aggregate.to_dict()
        return result


@dataclass
class ELMBinaryExpression(ELMExpression):
    """Base class for ELM binary expressions."""

    operator_type: str = ""
    operand1: Optional["ELMExpression"] = None
    operand2: Optional["ELMExpression"] = None

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        result = super().to_dict()
        result.update(
            {
                "type": self.operator_type,
                "operand": [
                    self.operand1.to_dict() if self.operand1 else {},
                    self.operand2.to_dict() if self.operand2 else {},
                ],
            }
        )
        return result


@dataclass
class ELMAdd(ELMBinaryExpression):
    """ELM addition expression."""

    operator_type: str = "Add"


@dataclass
class ELMSubtract(ELMBinaryExpression):
    """ELM subtraction expression."""

    operator_type: str = "Subtract"


@dataclass
class ELMMultiply(ELMBinaryExpression):
    """ELM multiplication expression."""

    operator_type: str = "Multiply"


@dataclass
class ELMDivide(ELMBinaryExpression):
    """ELM division expression."""

    operator_type: str = "Divide"


@dataclass
class ELMEqual(ELMBinaryExpression):
    """ELM equality expression."""

    operator_type: str = "Equal"


@dataclass
class ELMExpressionDef:
    """ELM expression definition."""

    name: str
    expression: ELMExpression
    access_level: str = "Public"
    context: str = "Patient"

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        return {
            "name": self.name,
            "context": self.context,
            "accessLevel": self.access_level,
            "expression": self.expression.to_dict(),
        }


@dataclass
class ELMParameterDef:
    """ELM parameter definition."""

    name: str
    access_level: str = "Public"
    parameter_type_specifier: Optional[Any] = None
    default: Optional[ELMExpression] = None

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        result: Dict[str, Any] = {"name": self.name, "accessLevel": self.access_level}
        if self.parameter_type_specifier:
            result["parameterTypeSpecifier"] = self.parameter_type_specifier
        if self.default:
            result["default"] = self.default.to_dict()
        return result


@dataclass
class ELMFunctionDef:
    """ELM function definition."""

    name: str
    operands: List[Dict[str, Any]] = field(default_factory=list)
    expression: Optional[ELMExpression] = None
    access_level: str = "Public"

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        result: Dict[str, Any] = {"name": self.name, "accessLevel": self.access_level}
        if self.operands:
            result["operand"] = self.operands
        if self.expression:
            result["expression"] = self.expression.to_dict()
        return result


@dataclass
class ELMStatements:
    """ELM statements container."""

    definitions: List[Union[ELMExpressionDef, ELMParameterDef, ELMFunctionDef]] = field(
        default_factory=list
    )

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        return {"def": [defn.to_dict() for defn in self.definitions]}


@dataclass
class ELMUsings:
    """ELM usings container."""

    definitions: List[ELMUsingDef] = field(default_factory=list)

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        return {"def": [using.to_dict() for using in self.definitions]}


@dataclass
class ELMLibrary:
    """ELM library representation."""

    identifier: ELMIdentifier
    schema_identifier: ELMSchemaIdentifier = field(default_factory=ELMSchemaIdentifier)
    usings: ELMUsings = field(default_factory=ELMUsings)
    statements: ELMStatements = field(default_factory=ELMStatements)
    includes: Optional[Dict[str, Any]] = None
    parameters: Optional[Dict[str, Any]] = None
    contexts: Optional[Dict[str, Any]] = None

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        result: Dict[str, Any] = {
            "identifier": self.identifier.to_dict(),
            "schemaIdentifier": self.schema_identifier.to_dict(),
            "usings": self.usings.to_dict(),
            "statements": self.statements.to_dict(),
        }

        if self.includes is not None:
            result["includes"] = self.includes
        if self.parameters is not None:
            result["parameters"] = self.parameters
        if self.contexts is not None:
            result["contexts"] = self.contexts

        return result

    def to_json(self, indent: Optional[int] = 2) -> str:
        """Convert to JSON string."""
        return json.dumps({"library": self.to_dict()}, indent=indent)


@dataclass
class ELMDocument:
    """Complete ELM document."""

    library: ELMLibrary

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        # Some consumers expect the schemaIdentifier at the top level as well
        # as within the library object. Preserve the library structure and
        # surface schemaIdentifier at the document root for compatibility.
        return {
            "library": self.library.to_dict(),
            "schemaIdentifier": self.library.schema_identifier.to_dict(),
        }

    def to_json(self, indent: Optional[int] = 2) -> str:
        """Convert to JSON string."""
        return json.dumps(self.to_dict(), indent=indent)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> ELMDocument:
        """Create ELM document from dictionary."""
        # This is a simplified implementation
        # In a full implementation, we'd need to handle all the nested structures
        library_data = data["library"]
        identifier = ELMIdentifier(
            id=library_data["identifier"]["id"],
            version=library_data["identifier"].get("version"),
        )

        library = ELMLibrary(identifier=identifier)
        return cls(library=library)
