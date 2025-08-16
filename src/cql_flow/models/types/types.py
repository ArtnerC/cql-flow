"""
CQL Type System Implementation.

This module defines the type hierarchy and type checking for CQL expressions.
Based on the CQL specification, the type system includes:

- System.Any (base type for all types)
- System.Boolean
- System.Integer
- System.Decimal
- System.String
- System.DateTime
- System.Time
- Collection types (List, Interval, Tuple)
- User-defined types
"""

from __future__ import annotations

from abc import ABC, abstractmethod
from dataclasses import dataclass
from enum import Enum
from typing import Dict, List, Optional, Set


class TypeKind(Enum):
    """Kind of CQL type."""

    ANY = "Any"
    BOOLEAN = "Boolean"
    INTEGER = "Integer"
    DECIMAL = "Decimal"
    STRING = "String"
    DATE_TIME = "DateTime"
    TIME = "Time"
    LIST = "List"
    INTERVAL = "Interval"
    TUPLE = "Tuple"
    CHOICE = "Choice"
    NAMED = "Named"
    CLASS = "Class"


@dataclass(frozen=True)
class CQLType(ABC):
    """Base class for all CQL types."""

    @property
    @abstractmethod
    def kind(self) -> TypeKind:
        """Get the kind of this type."""
        pass

    @abstractmethod
    def is_subtype_of(self, other: CQLType) -> bool:
        """Check if this type is a subtype of another type."""
        pass

    @abstractmethod
    def is_compatible_with(self, other: CQLType) -> bool:
        """Check if this type is compatible with another type."""
        pass

    @abstractmethod
    def to_string(self) -> str:
        """Get string representation of this type."""
        pass

    def __str__(self) -> str:
        return self.to_string()


@dataclass(frozen=True)
class SystemType(CQLType):
    """Built-in system types."""

    type_name: str

    @property
    def kind(self) -> TypeKind:
        """Get the kind of this system type."""
        return TypeKind(self.type_name)

    def is_subtype_of(self, other: CQLType) -> bool:
        """Check if this type is a subtype of another type."""
        if isinstance(other, SystemType):
            # Everything is a subtype of Any
            if other.type_name == "Any":
                return True
            # Same type
            if self.type_name == other.type_name:
                return True
            # Integer is subtype of Decimal
            if self.type_name == "Integer" and other.type_name == "Decimal":
                return True
        elif isinstance(other, ChoiceType):
            # A type is a subtype of a choice type if it's a subtype of any of the choices
            return any(self.is_subtype_of(choice) for choice in other.choice_types)
        return False

    def is_compatible_with(self, other: CQLType) -> bool:
        """Check if this type is compatible with another type."""
        # Compatible if either is subtype of the other
        return self.is_subtype_of(other) or other.is_subtype_of(self)

    def to_string(self) -> str:
        """Get string representation."""
        return f"System.{self.type_name}"


@dataclass(frozen=True)
class ListType(CQLType):
    """List type with element type."""

    element_type: CQLType

    @property
    def kind(self) -> TypeKind:
        return TypeKind.LIST

    def is_subtype_of(self, other: CQLType) -> bool:
        """List[A] is subtype of List[B] if A is subtype of B."""
        if isinstance(other, ListType):
            return self.element_type.is_subtype_of(other.element_type)
        if isinstance(other, SystemType) and other.type_name == "Any":
            return True
        elif isinstance(other, ChoiceType):
            # A type is a subtype of a choice type if it's a subtype of any of the choices
            return any(self.is_subtype_of(choice) for choice in other.choice_types)
        return False

    def is_compatible_with(self, other: CQLType) -> bool:
        """Check compatibility with another type."""
        if isinstance(other, ListType):
            return self.element_type.is_compatible_with(other.element_type)
        return self.is_subtype_of(other) or other.is_subtype_of(self)

    def to_string(self) -> str:
        return f"List<{self.element_type.to_string()}>"


@dataclass(frozen=True)
class IntervalType(CQLType):
    """Interval type with point type."""

    point_type: CQLType

    @property
    def kind(self) -> TypeKind:
        return TypeKind.INTERVAL

    def is_subtype_of(self, other: CQLType) -> bool:
        """Interval[A] is subtype of Interval[B] if A is subtype of B."""
        if isinstance(other, IntervalType):
            return self.point_type.is_subtype_of(other.point_type)
        if isinstance(other, SystemType) and other.type_name == "Any":
            return True
        elif isinstance(other, ChoiceType):
            # A type is a subtype of a choice type if it's a subtype of any of the choices
            return any(self.is_subtype_of(choice) for choice in other.choice_types)
        return False

    def is_compatible_with(self, other: CQLType) -> bool:
        """Check compatibility with another type."""
        if isinstance(other, IntervalType):
            return self.point_type.is_compatible_with(other.point_type)
        return self.is_subtype_of(other) or other.is_subtype_of(self)

    def to_string(self) -> str:
        return f"Interval<{self.point_type.to_string()}>"


@dataclass(frozen=True)
class TupleTypeElement:
    """Element of a tuple type."""

    name: str
    element_type: CQLType


@dataclass(frozen=True)
class TupleType(CQLType):
    """Tuple type with named elements."""

    elements: List[TupleTypeElement]

    @property
    def kind(self) -> TypeKind:
        return TypeKind.TUPLE

    def is_subtype_of(self, other: CQLType) -> bool:
        """Tuple subtyping is structural."""
        if isinstance(other, TupleType):
            # All elements in self must have corresponding compatible elements in other
            for self_elem in self.elements:
                other_elem = next((e for e in other.elements if e.name == self_elem.name), None)
                if not other_elem:
                    return False
                if not self_elem.element_type.is_subtype_of(other_elem.element_type):
                    return False
            return True
        if isinstance(other, SystemType) and other.type_name == "Any":
            return True
        elif isinstance(other, ChoiceType):
            # A type is a subtype of a choice type if it's a subtype of any of the choices
            return any(self.is_subtype_of(choice) for choice in other.choice_types)
        return False

    def is_compatible_with(self, other: CQLType) -> bool:
        """Check compatibility with another type."""
        if isinstance(other, TupleType):
            # Compatible if they have the same element names with compatible types
            if len(self.elements) != len(other.elements):
                return False
            for self_elem in self.elements:
                other_elem = next((e for e in other.elements if e.name == self_elem.name), None)
                if not other_elem:
                    return False
                if not self_elem.element_type.is_compatible_with(other_elem.element_type):
                    return False
            return True
        return self.is_subtype_of(other) or other.is_subtype_of(self)

    def to_string(self) -> str:
        elements_str = ", ".join(
            f"{elem.name}: {elem.element_type.to_string()}" for elem in self.elements
        )
        return f"Tuple{{ {elements_str} }}"


@dataclass(frozen=True)
class ChoiceType(CQLType):
    """Choice type representing union of types."""

    choice_types: List[CQLType]

    @property
    def kind(self) -> TypeKind:
        return TypeKind.CHOICE

    def is_subtype_of(self, other: CQLType) -> bool:
        """Choice is subtype if all choice types are subtypes."""
        if isinstance(other, ChoiceType):
            # All types in self must be subtypes of some type in other
            for self_type in self.choice_types:
                if not any(
                    self_type.is_subtype_of(other_type) for other_type in other.choice_types
                ):
                    return False
            return True
        # All choice types must be subtypes of the other type
        return all(choice_type.is_subtype_of(other) for choice_type in self.choice_types)

    def is_compatible_with(self, other: CQLType) -> bool:
        """Check compatibility with another type."""
        if isinstance(other, ChoiceType):
            # Compatible if any choice type is compatible
            return any(
                self_type.is_compatible_with(other_type)
                for self_type in self.choice_types
                for other_type in other.choice_types
            )
        # Compatible if any choice type is compatible with other
        return any(choice_type.is_compatible_with(other) for choice_type in self.choice_types)

    def to_string(self) -> str:
        types_str = " | ".join(t.to_string() for t in self.choice_types)
        return f"Choice<{types_str}>"


class TypeSystem:
    """CQL Type System with built-in types and type operations."""

    def __init__(self):
        """Initialize the type system with built-in types."""
        self._types: Dict[str, CQLType] = {}
        self._initialize_system_types()

    def _initialize_system_types(self) -> None:
        """Initialize built-in system types."""
        system_types = [
            "Any",
            "Boolean",
            "Integer",
            "Decimal",
            "String",
            "DateTime",
            "Time",
        ]

        for type_name in system_types:
            self._types[type_name] = SystemType(type_name)

    def get_system_type(self, type_name: str) -> Optional[CQLType]:
        """Get a system type by name."""
        return self._types.get(type_name)

    def get_any_type(self) -> CQLType:
        """Get the Any type."""
        return self._types["Any"]

    def get_boolean_type(self) -> CQLType:
        """Get the Boolean type."""
        return self._types["Boolean"]

    def get_integer_type(self) -> CQLType:
        """Get the Integer type."""
        return self._types["Integer"]

    def get_decimal_type(self) -> CQLType:
        """Get the Decimal type."""
        return self._types["Decimal"]

    def get_string_type(self) -> CQLType:
        """Get the String type."""
        return self._types["String"]

    def get_datetime_type(self) -> CQLType:
        """Get the DateTime type."""
        return self._types["DateTime"]

    def get_time_type(self) -> CQLType:
        """Get the Time type."""
        return self._types["Time"]

    def create_list_type(self, element_type: CQLType) -> ListType:
        """Create a list type with the given element type."""
        return ListType(element_type)

    def create_interval_type(self, point_type: CQLType) -> IntervalType:
        """Create an interval type with the given point type."""
        return IntervalType(point_type)

    def create_tuple_type(self, elements: List[TupleTypeElement]) -> TupleType:
        """Create a tuple type with the given elements."""
        return TupleType(elements)

    def create_choice_type(self, choice_types: List[CQLType]) -> CQLType:
        """Create a choice type with the given choice types."""
        # Remove duplicates and flatten nested choices
        flattened_types: List[CQLType] = []
        for choice_type in choice_types:
            if isinstance(choice_type, ChoiceType):
                flattened_types.extend(choice_type.choice_types)
            else:
                flattened_types.append(choice_type)

        # Remove duplicates by converting to dict keys and back
        seen: Set[CQLType] = set()
        unique_types: List[CQLType] = []
        for t in flattened_types:
            if t not in seen:
                seen.add(t)
                unique_types.append(t)

        if len(unique_types) == 1:
            return unique_types[0]

        return ChoiceType(unique_types)

    def find_common_supertype(self, type1: CQLType, type2: CQLType) -> CQLType:
        """Find the most specific common supertype of two types."""
        if type1.is_subtype_of(type2):
            return type2
        if type2.is_subtype_of(type1):
            return type1

        # For numeric types, promote to Decimal
        if (
            isinstance(type1, SystemType)
            and isinstance(type2, SystemType)
            and type1.type_name in ["Integer", "Decimal"]
            and type2.type_name in ["Integer", "Decimal"]
        ):
            return self.get_decimal_type()

        # For incompatible types, return Any
        return self.get_any_type()

    def are_types_compatible(self, type1: CQLType, type2: CQLType) -> bool:
        """Check if two types are compatible."""
        return type1.is_compatible_with(type2)


# Global type system instance
TYPE_SYSTEM = TypeSystem()
