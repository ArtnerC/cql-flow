"""Simple property-based tests for the type system."""

import pytest
from hypothesis import given
from hypothesis import strategies as st

from cql_flow.models.types import IntervalType, ListType, SystemType


class TestTypeSystemProperties:
    """Simple property-based tests for type system behavior."""

    @pytest.mark.property
    @given(type_name=st.sampled_from(["Any", "Boolean", "Integer", "String"]))
    def test_system_type_reflexivity(self, type_name: str) -> None:
        """Test that system types are reflexive (subtype of themselves)."""
        sys_type = SystemType(type_name)
        assert sys_type.is_subtype_of(sys_type)
        assert sys_type.is_compatible_with(sys_type)

    @pytest.mark.property
    @given(type_name=st.sampled_from(["Boolean", "Integer", "String"]))
    def test_any_supertype(self, type_name: str) -> None:
        """Test that all types are subtypes of Any."""
        sys_type = SystemType(type_name)
        any_type = SystemType("Any")
        assert sys_type.is_subtype_of(any_type)

    @pytest.mark.property
    @given(element_type_name=st.sampled_from(["Integer", "String", "Boolean"]))
    def test_list_type_construction(self, element_type_name: str) -> None:
        """Test that list types can be constructed and have correct element types."""
        element_type = SystemType(element_type_name)
        list_type = ListType(element_type)

        assert list_type.element_type == element_type
        assert list_type.is_compatible_with(list_type)

    @pytest.mark.property
    @given(point_type_name=st.sampled_from(["Integer", "DateTime"]))
    def test_interval_type_construction(self, point_type_name: str) -> None:
        """Test that interval types can be constructed."""
        point_type = SystemType(point_type_name)
        interval_type = IntervalType(point_type)

        assert interval_type.point_type == point_type
        assert interval_type.is_compatible_with(interval_type)
