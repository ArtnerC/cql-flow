"""Property-based tests for type system."""

import pytest
from hypothesis import given
from hypothesis import strategies as st

from cql_flow.models.types import (
    TYPE_SYSTEM,
    ChoiceType,
    IntervalType,
    ListType,
    SystemType,
    TupleType,
    TupleTypeElement,
)


# Test data generation strategies
@st.composite
def system_type_names(draw):
    """Generate valid system type names."""
    return draw(
        st.sampled_from(
            [
                "Any",
                "Boolean",
                "Integer",
                "Decimal",
                "String",
                "DateTime",
                "Time",
                "Code",
                "Concept",
                "Quantity",
            ]
        )
    )


@st.composite
def primitive_types(draw):
    """Generate primitive system types."""
    type_name = draw(system_type_names())
    return SystemType(type_name)


@st.composite
def list_types(draw):
    """Generate list types with primitive element types."""
    element_type = draw(primitive_types())
    return ListType(element_type)


@st.composite
def interval_types(draw):
    """Generate interval types with primitive point types."""
    point_type = draw(
        st.sampled_from(
            [
                SystemType("Integer"),
                SystemType("Decimal"),
                SystemType("DateTime"),
                SystemType("Time"),
            ]
        )
    )
    return IntervalType(point_type)


@st.composite
def tuple_types(draw):
    """Generate tuple types with valid field names and types."""
    num_fields = draw(st.integers(min_value=1, max_value=5))
    elements = []

    for i in range(num_fields):
        field_name = f"field{i}"
        field_type = draw(primitive_types())
        elements.append(TupleTypeElement(name=field_name, element_type=field_type))

    return TupleType(elements)


@st.composite
def choice_types(draw):
    """Generate choice types with multiple alternatives."""
    num_choices = draw(st.integers(min_value=2, max_value=4))
    choices = []

    for _ in range(num_choices):
        choice = draw(primitive_types())
        if choice not in choices:  # Avoid duplicates
            choices.append(choice)

    if len(choices) < 2:  # Ensure at least 2 choices
        choices.extend([SystemType("String"), SystemType("Integer")])

    return ChoiceType(choices)


class TestTypeSystemProperties:
    """Property-based tests for type system invariants."""

    @given(type1=primitive_types(), type2=primitive_types())
    @pytest.mark.property
    def test_type_compatibility_reflexivity(self, type1, type2):
        """Type compatibility should be reflexive for identical types."""
        # A type should always be compatible with itself
        assert type1.is_subtype_of(type1)

        # If types are equal, they should be compatible both ways
        if type1.type_name == type2.type_name:
            assert type1.is_subtype_of(type2)
            assert type2.is_subtype_of(type1)

    @given(types=st.lists(primitive_types(), min_size=2, max_size=5))
    @pytest.mark.property
    def test_common_supertype_properties(self, types):
        """Test properties of common supertype computation."""
        if len(types) < 2:
            pytest.skip("Need at least 2 types")

        common_type = TYPE_SYSTEM.find_common_supertype(types[0], types[1])

        # Common type should not be None for valid types
        assert common_type is not None

        # Both input types should be compatible with the common type
        assert types[0].is_subtype_of(common_type)
        assert types[1].is_subtype_of(common_type)

    @given(element_type=primitive_types())
    @pytest.mark.property
    def test_list_type_properties(self, element_type):
        """Test properties of list type creation and compatibility."""
        list_type = ListType(element_type)

        # List type should have correct element type
        assert list_type.element_type == element_type

        # List should be compatible with List<Any>
        any_list = ListType(SystemType("Any"))
        assert list_type.is_subtype_of(any_list)

    @given(
        point_type=st.sampled_from(
            [
                SystemType("Integer"),
                SystemType("Decimal"),
                SystemType("DateTime"),
                SystemType("Time"),
            ]
        )
    )
    @pytest.mark.property
    def test_interval_type_properties(self, point_type):
        """Test properties of interval type creation."""
        interval_type = IntervalType(point_type)

        # Interval type should have correct point type
        assert interval_type.point_type == point_type

        # Interval should be compatible with Interval<Any> for compatible point types
        if point_type.is_subtype_of(SystemType("Any")):
            any_interval = IntervalType(SystemType("Any"))
            assert interval_type.is_subtype_of(any_interval)

    @given(
        elements=st.lists(
            st.builds(
                TupleTypeElement,
                name=st.text(
                    min_size=1,
                    max_size=10,
                    alphabet=st.characters(min_codepoint=97, max_codepoint=122),
                ),
                element_type=primitive_types(),
            ),
            min_size=1,
            max_size=3,
            unique_by=lambda elem: elem.name,
        )
    )
    @pytest.mark.property
    def test_tuple_type_properties(self, elements):
        """Test properties of tuple type creation and compatibility."""
        tuple_type = TupleType(elements)

        # Tuple should have all specified elements
        assert len(tuple_type.elements) == len(elements)

        # Element names should match
        element_names = [elem.name for elem in elements]
        tuple_names = [elem.name for elem in tuple_type.elements]
        assert set(element_names) == set(tuple_names)

    @given(
        choices=st.lists(primitive_types(), min_size=2, max_size=4, unique_by=lambda t: t.type_name)
    )
    @pytest.mark.property
    def test_choice_type_properties(self, choices):
        """Test properties of choice type creation and compatibility."""
        if len(choices) < 2:
            pytest.skip("Need at least 2 unique choices")

        choice_type = ChoiceType(choices)

        # Choice type should contain all specified choices
        assert len(choice_type.choice_types) >= len(choices)

        # Each choice should be compatible with the choice type
        for choice in choices:
            assert choice.is_subtype_of(choice_type)

    @given(source_type=primitive_types(), target_type=primitive_types())
    @pytest.mark.property
    def test_subtyping_transitivity(self, source_type, target_type):
        """Test that subtyping relationships are transitive."""
        # If A is compatible with B, and we have Any as universal supertype
        any_type = SystemType("Any")

        if source_type.is_subtype_of(target_type):
            # Both should be compatible with Any
            assert source_type.is_subtype_of(any_type)
            assert target_type.is_subtype_of(any_type)

    @given(
        base_types=st.lists(primitive_types(), min_size=1, max_size=3),
        nesting_level=st.integers(min_value=1, max_value=3),
    )
    @pytest.mark.property
    def test_nested_type_construction(self, base_types, nesting_level):
        """Test properties of nested type construction."""
        # Build nested structure
        current_types = base_types

        for level in range(nesting_level):
            new_types = []
            for base_type in current_types:
                # Create list of this type
                list_type = ListType(base_type)
                new_types.append(list_type)

                # For compatible point types, create interval
                # Only SystemTypes have type_name, and only certain ones can be interval point types
                if isinstance(base_type, SystemType) and base_type.type_name in [
                    "Integer",
                    "Decimal",
                    "DateTime",
                    "Time",
                ]:
                    interval_type = IntervalType(base_type)
                    new_types.append(interval_type)

            current_types = new_types

        # All constructed types should be valid
        assert len(current_types) > 0
        for constructed_type in current_types:
            assert constructed_type is not None

    @given(
        type_instance=st.one_of(primitive_types(), list_types(), interval_types(), tuple_types())
    )
    @pytest.mark.property
    def test_type_string_representation(self, type_instance):
        """Test that all types have valid string representations."""
        str_repr = type_instance.to_string()

        # String representation should be non-empty
        assert len(str_repr) > 0

        # Should contain type information
        assert any(
            keyword in str_repr.lower()
            for keyword in ["system", "list", "interval", "tuple", "choice"]
        )

    @given(types=st.lists(st.one_of(primitive_types(), list_types()), min_size=1, max_size=5))
    @pytest.mark.property
    def test_type_compatibility_consistency(self, types):
        """Test that type compatibility is consistent across operations."""
        # Check all pairwise compatibilities
        for i, type1 in enumerate(types):
            for j, type2 in enumerate(types):
                # Same types should always be compatible
                if i == j:
                    assert type1.is_subtype_of(type2)

                # Compatibility with Any should be consistent
                any_type = SystemType("Any")
                assert type1.is_subtype_of(any_type)
                assert type2.is_subtype_of(any_type)


class TestTypeSystemEdgeCases:
    """Property-based tests for edge cases and error conditions."""

    @given(invalid_name=st.text(min_size=1, max_size=20))
    @pytest.mark.property
    def test_invalid_system_type_handling(self, invalid_name):
        """Test behavior with invalid system type names."""
        # Skip valid type names
        valid_names = {
            "Any",
            "Boolean",
            "Integer",
            "Decimal",
            "String",
            "DateTime",
            "Time",
            "Code",
            "Concept",
            "Quantity",
        }

        if invalid_name in valid_names:
            pytest.skip("This is a valid type name")

        # Creating invalid system types should work (they're just names)
        # but they won't be in the built-in type system
        invalid_type = SystemType(invalid_name)
        assert invalid_type.type_name == invalid_name

        # Should still be compatible with Any
        any_type = SystemType("Any")
        assert invalid_type.is_subtype_of(any_type)

    @given(nested_depth=st.integers(min_value=5, max_value=10), base_type=primitive_types())
    @pytest.mark.property
    def test_deeply_nested_types(self, nested_depth, base_type):
        """Test behavior with deeply nested type structures."""
        current_type = base_type

        # Create deeply nested list types
        for _ in range(nested_depth):
            current_type = ListType(current_type)

        # Should still be a valid type
        assert current_type is not None
        assert isinstance(current_type, ListType)

        # Should be compatible with appropriate supertypes
        any_type = SystemType("Any")
        any_list = ListType(any_type)
        assert current_type.is_subtype_of(any_list)
