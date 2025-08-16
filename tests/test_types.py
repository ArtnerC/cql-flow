"""Tests for CQL Type System."""

from cql_flow.models.types import (
    TYPE_SYSTEM,
    ChoiceType,
    IntervalType,
    ListType,
    SystemType,
    TupleType,
    TupleTypeElement,
    TypeKind,
    TypeSystem,
)


class TestSystemTypes:
    """Test system type functionality."""

    def test_system_type_creation(self):
        """Test creating system types."""
        bool_type = SystemType("Boolean")
        assert bool_type.type_name == "Boolean"
        assert bool_type.kind == TypeKind.BOOLEAN
        assert bool_type.to_string() == "System.Boolean"

    def test_system_type_subtyping(self):
        """Test system type subtyping rules."""
        any_type = SystemType("Any")
        bool_type = SystemType("Boolean")
        int_type = SystemType("Integer")
        decimal_type = SystemType("Decimal")

        # Everything is subtype of Any
        assert bool_type.is_subtype_of(any_type)
        assert int_type.is_subtype_of(any_type)
        assert decimal_type.is_subtype_of(any_type)

        # Same type is subtype
        assert bool_type.is_subtype_of(bool_type)
        assert int_type.is_subtype_of(int_type)

        # Integer is subtype of Decimal
        assert int_type.is_subtype_of(decimal_type)

        # Boolean is not subtype of Integer
        assert not bool_type.is_subtype_of(int_type)

        # Decimal is not subtype of Integer
        assert not decimal_type.is_subtype_of(int_type)

    def test_system_type_compatibility(self):
        """Test system type compatibility."""
        bool_type = SystemType("Boolean")
        int_type = SystemType("Integer")
        decimal_type = SystemType("Decimal")

        # Integer and Decimal are compatible (bidirectional)
        assert int_type.is_compatible_with(decimal_type)
        assert decimal_type.is_compatible_with(int_type)

        # Boolean and Integer are not compatible
        assert not bool_type.is_compatible_with(int_type)
        assert not int_type.is_compatible_with(bool_type)


class TestCollectionTypes:
    """Test collection type functionality."""

    def test_list_type_creation(self):
        """Test creating list types."""
        int_type = SystemType("Integer")
        list_type = ListType(int_type)

        assert list_type.element_type == int_type
        assert list_type.kind == TypeKind.LIST
        assert list_type.to_string() == "List<System.Integer>"

    def test_list_type_subtyping(self):
        """Test list type subtyping."""
        any_type = SystemType("Any")
        int_type = SystemType("Integer")
        decimal_type = SystemType("Decimal")

        list_int = ListType(int_type)
        list_decimal = ListType(decimal_type)
        list_any = ListType(any_type)

        # List[Integer] is subtype of List[Decimal] (covariant)
        assert list_int.is_subtype_of(list_decimal)

        # List[Integer] is subtype of List[Any]
        assert list_int.is_subtype_of(list_any)

        # List[Decimal] is not subtype of List[Integer]
        assert not list_decimal.is_subtype_of(list_int)

    def test_interval_type_creation(self):
        """Test creating interval types."""
        int_type = SystemType("Integer")
        interval_type = IntervalType(int_type)

        assert interval_type.point_type == int_type
        assert interval_type.kind == TypeKind.INTERVAL
        assert interval_type.to_string() == "Interval<System.Integer>"

    def test_interval_type_subtyping(self):
        """Test interval type subtyping."""
        int_type = SystemType("Integer")
        decimal_type = SystemType("Decimal")

        interval_int = IntervalType(int_type)
        interval_decimal = IntervalType(decimal_type)

        # Interval[Integer] is subtype of Interval[Decimal]
        assert interval_int.is_subtype_of(interval_decimal)

        # Interval[Decimal] is not subtype of Interval[Integer]
        assert not interval_decimal.is_subtype_of(interval_int)


class TestTupleTypes:
    """Test tuple type functionality."""

    def test_tuple_type_creation(self):
        """Test creating tuple types."""
        int_type = SystemType("Integer")
        string_type = SystemType("String")

        elements = [
            TupleTypeElement("id", int_type),
            TupleTypeElement("name", string_type),
        ]

        tuple_type = TupleType(elements)

        assert len(tuple_type.elements) == 2
        assert tuple_type.elements[0].name == "id"
        assert tuple_type.elements[0].element_type == int_type
        assert tuple_type.kind == TypeKind.TUPLE
        assert "id: System.Integer" in tuple_type.to_string()
        assert "name: System.String" in tuple_type.to_string()

    def test_tuple_type_subtyping(self):
        """Test tuple type structural subtyping."""
        int_type = SystemType("Integer")
        decimal_type = SystemType("Decimal")
        string_type = SystemType("String")

        # Tuple with Integer id
        tuple1 = TupleType(
            [TupleTypeElement("id", int_type), TupleTypeElement("name", string_type)]
        )

        # Tuple with Decimal id (supertype)
        tuple2 = TupleType(
            [
                TupleTypeElement("id", decimal_type),
                TupleTypeElement("name", string_type),
            ]
        )

        # tuple1 is subtype of tuple2 (Integer -> Decimal)
        assert tuple1.is_subtype_of(tuple2)

        # tuple2 is not subtype of tuple1
        assert not tuple2.is_subtype_of(tuple1)

    def test_tuple_type_compatibility(self):
        """Test tuple type compatibility."""
        int_type = SystemType("Integer")
        string_type = SystemType("String")

        tuple1 = TupleType(
            [TupleTypeElement("id", int_type), TupleTypeElement("name", string_type)]
        )

        tuple2 = TupleType(
            [TupleTypeElement("id", int_type), TupleTypeElement("name", string_type)]
        )

        # Same structure - compatible
        assert tuple1.is_compatible_with(tuple2)

        # Different field names - not compatible
        tuple3 = TupleType(
            [
                TupleTypeElement("identifier", int_type),
                TupleTypeElement("name", string_type),
            ]
        )

        assert not tuple1.is_compatible_with(tuple3)


class TestChoiceTypes:
    """Test choice type functionality."""

    def test_choice_type_creation(self):
        """Test creating choice types."""
        int_type = SystemType("Integer")
        string_type = SystemType("String")

        choice_type = ChoiceType([int_type, string_type])

        assert len(choice_type.choice_types) == 2
        assert int_type in choice_type.choice_types
        assert string_type in choice_type.choice_types
        assert choice_type.kind == TypeKind.CHOICE
        assert "System.Integer | System.String" in choice_type.to_string()

    def test_choice_type_subtyping(self):
        """Test choice type subtyping."""
        int_type = SystemType("Integer")
        decimal_type = SystemType("Decimal")
        string_type = SystemType("String")
        any_type = SystemType("Any")

        choice1 = ChoiceType([int_type, string_type])
        choice2 = ChoiceType([decimal_type, string_type])

        # Choice[Integer, String] is subtype of Choice[Decimal, String]
        assert choice1.is_subtype_of(choice2)

        # All choice types are subtypes of Any
        assert choice1.is_subtype_of(any_type)

    def test_choice_type_compatibility(self):
        """Test choice type compatibility."""
        int_type = SystemType("Integer")
        decimal_type = SystemType("Decimal")
        string_type = SystemType("String")

        choice1 = ChoiceType([int_type, string_type])
        choice2 = ChoiceType([decimal_type])

        # Compatible because Integer and Decimal are compatible
        assert choice1.is_compatible_with(choice2)


class TestTypeSystem:
    """Test type system functionality."""

    def test_type_system_initialization(self):
        """Test type system creates built-in types."""
        ts = TypeSystem()

        assert ts.get_any_type() is not None
        assert ts.get_boolean_type() is not None
        assert ts.get_integer_type() is not None
        assert ts.get_decimal_type() is not None
        assert ts.get_string_type() is not None
        assert ts.get_datetime_type() is not None
        assert ts.get_time_type() is not None

        # Check type names
        assert ts.get_integer_type().to_string() == "System.Integer"
        assert ts.get_string_type().to_string() == "System.String"

    def test_type_system_collection_creation(self):
        """Test type system creates collection types."""
        ts = TypeSystem()
        int_type = ts.get_integer_type()

        list_type = ts.create_list_type(int_type)
        assert isinstance(list_type, ListType)
        assert list_type.element_type == int_type

        interval_type = ts.create_interval_type(int_type)
        assert isinstance(interval_type, IntervalType)
        assert interval_type.point_type == int_type

    def test_type_system_tuple_creation(self):
        """Test type system creates tuple types."""
        ts = TypeSystem()
        int_type = ts.get_integer_type()
        string_type = ts.get_string_type()

        elements = [
            TupleTypeElement("id", int_type),
            TupleTypeElement("name", string_type),
        ]

        tuple_type = ts.create_tuple_type(elements)
        assert isinstance(tuple_type, TupleType)
        assert len(tuple_type.elements) == 2

    def test_type_system_choice_creation(self):
        """Test type system creates choice types."""
        ts = TypeSystem()
        int_type = ts.get_integer_type()
        string_type = ts.get_string_type()

        # Single type should return the type itself
        choice_single = ts.create_choice_type([int_type])
        assert choice_single == int_type

        # Multiple types should return ChoiceType
        choice_multi = ts.create_choice_type([int_type, string_type])
        assert isinstance(choice_multi, ChoiceType)
        assert len(choice_multi.choice_types) == 2

    def test_type_system_choice_flattening(self):
        """Test choice type flattening."""
        ts = TypeSystem()
        int_type = ts.get_integer_type()
        string_type = ts.get_string_type()
        bool_type = ts.get_boolean_type()

        # Create nested choice
        inner_choice = ChoiceType([int_type, string_type])
        outer_choice = ts.create_choice_type([inner_choice, bool_type])

        # Should flatten to Choice[Integer, String, Boolean]
        assert isinstance(outer_choice, ChoiceType)
        assert len(outer_choice.choice_types) == 3
        assert int_type in outer_choice.choice_types
        assert string_type in outer_choice.choice_types
        assert bool_type in outer_choice.choice_types

    def test_find_common_supertype(self):
        """Test finding common supertypes."""
        ts = TypeSystem()
        int_type = ts.get_integer_type()
        decimal_type = ts.get_decimal_type()
        string_type = ts.get_string_type()
        any_type = ts.get_any_type()

        # Integer and Decimal -> Decimal
        common = ts.find_common_supertype(int_type, decimal_type)
        assert common == decimal_type

        # Integer and String -> Any
        common = ts.find_common_supertype(int_type, string_type)
        assert common == any_type

        # Same type -> same type
        common = ts.find_common_supertype(int_type, int_type)
        assert common == int_type

    def test_are_types_compatible(self):
        """Test type compatibility checking."""
        ts = TypeSystem()
        int_type = ts.get_integer_type()
        decimal_type = ts.get_decimal_type()
        string_type = ts.get_string_type()

        # Integer and Decimal are compatible
        assert ts.are_types_compatible(int_type, decimal_type)

        # Integer and String are not compatible
        assert not ts.are_types_compatible(int_type, string_type)


class TestGlobalTypeSystem:
    """Test the global type system instance."""

    def test_global_type_system_available(self):
        """Test that global TYPE_SYSTEM is available."""
        assert TYPE_SYSTEM is not None
        assert isinstance(TYPE_SYSTEM, TypeSystem)

        # Should have all built-in types
        assert TYPE_SYSTEM.get_any_type() is not None
        assert TYPE_SYSTEM.get_integer_type() is not None
        assert TYPE_SYSTEM.get_string_type() is not None

    def test_global_type_system_consistent(self):
        """Test that global type system is consistent."""
        int_type1 = TYPE_SYSTEM.get_integer_type()
        int_type2 = TYPE_SYSTEM.get_integer_type()

        # Should return same instance
        assert int_type1 is int_type2
