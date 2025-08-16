"""Tests for symbol table and scope management."""

import pytest

from cql_flow.models.types import TYPE_SYSTEM
from cql_flow.validator import (
    DependencyResolver,
    LibraryScope,
    Scope,
    ScopeManager,
    Symbol,
    SymbolKind,
    SymbolResolver,
    SymbolTable,
)


class TestSymbol:
    """Test Symbol class functionality."""

    def test_symbol_creation(self):
        """Test basic symbol creation."""
        symbol = Symbol(
            name="test_var",
            kind=SymbolKind.VARIABLE,
            type_=TYPE_SYSTEM.get_integer_type(),
        )

        assert symbol.name == "test_var"
        assert symbol.kind == SymbolKind.VARIABLE
        assert symbol.type_ == TYPE_SYSTEM.get_integer_type()
        assert not symbol.is_imported
        assert symbol.source_library is None

    def test_symbol_string_representation(self):
        """Test symbol string representation."""
        symbol = Symbol(
            name="MyFunc",
            kind=SymbolKind.FUNCTION,
            type_=TYPE_SYSTEM.get_string_type(),
            source_library="Common",
        )

        str_repr = str(symbol)
        assert "function MyFunc: System.String from Common" == str_repr

    def test_imported_symbol(self):
        """Test imported symbol creation."""
        symbol = Symbol(
            name="ExternalDef",
            kind=SymbolKind.EXPRESSION,
            source_library="External",
            is_imported=True,
        )

        assert symbol.is_imported
        assert symbol.source_library == "External"


class TestScope:
    """Test Scope class functionality."""

    def test_scope_creation(self):
        """Test basic scope creation."""
        scope = Scope("test_scope")

        assert scope.name == "test_scope"
        assert scope.parent is None
        assert len(scope.symbols) == 0
        assert len(scope.children) == 0

    def test_scope_hierarchy(self):
        """Test scope parent-child relationships."""
        parent_scope = Scope("parent")
        child_scope = Scope("child", parent=parent_scope)
        parent_scope.children.append(child_scope)

        assert child_scope.parent == parent_scope
        assert child_scope in parent_scope.children

    def test_define_symbol(self):
        """Test symbol definition in scope."""
        scope = Scope("test")
        symbol = Symbol("var1", SymbolKind.VARIABLE)

        scope.define_symbol(symbol)

        assert "var1" in scope.symbols
        assert scope.symbols["var1"] == symbol

    def test_symbol_redefinition_error(self):
        """Test error on symbol redefinition."""
        scope = Scope("test")
        symbol1 = Symbol("var1", SymbolKind.VARIABLE)
        symbol2 = Symbol("var1", SymbolKind.EXPRESSION)

        scope.define_symbol(symbol1)

        with pytest.raises(ValueError, match="already defined"):
            scope.define_symbol(symbol2)

    def test_lookup_local(self):
        """Test local symbol lookup."""
        scope = Scope("test")
        symbol = Symbol("var1", SymbolKind.VARIABLE)
        scope.define_symbol(symbol)

        result = scope.lookup_local("var1")
        assert result == symbol

        result = scope.lookup_local("nonexistent")
        assert result is None

    def test_lookup_with_parent_chain(self):
        """Test symbol lookup through parent chain."""
        parent_scope = Scope("parent")
        child_scope = Scope("child", parent=parent_scope)

        parent_symbol = Symbol("parent_var", SymbolKind.VARIABLE)
        child_symbol = Symbol("child_var", SymbolKind.VARIABLE)

        parent_scope.define_symbol(parent_symbol)
        child_scope.define_symbol(child_symbol)

        # Child can see its own symbol
        assert child_scope.lookup("child_var") == child_symbol

        # Child can see parent's symbol
        assert child_scope.lookup("parent_var") == parent_symbol

        # Parent cannot see child's symbol
        assert parent_scope.lookup("child_var") is None

    def test_symbol_shadowing(self):
        """Test symbol shadowing in nested scopes."""
        parent_scope = Scope("parent")
        child_scope = Scope("child", parent=parent_scope)

        parent_symbol = Symbol("var", SymbolKind.VARIABLE, type_=TYPE_SYSTEM.get_integer_type())
        child_symbol = Symbol("var", SymbolKind.VARIABLE, type_=TYPE_SYSTEM.get_string_type())

        parent_scope.define_symbol(parent_symbol)
        child_scope.define_symbol(child_symbol)

        # Child scope should see its own symbol (shadowing parent)
        assert child_scope.lookup("var") == child_symbol
        assert parent_scope.lookup("var") == parent_symbol

    def test_get_all_symbols(self):
        """Test getting all visible symbols."""
        parent_scope = Scope("parent")
        child_scope = Scope("child", parent=parent_scope)

        parent_symbol = Symbol("parent_var", SymbolKind.VARIABLE)
        child_symbol = Symbol("child_var", SymbolKind.VARIABLE)
        shadow_symbol = Symbol(
            "shared_var", SymbolKind.VARIABLE, type_=TYPE_SYSTEM.get_string_type()
        )
        parent_shared = Symbol(
            "shared_var", SymbolKind.VARIABLE, type_=TYPE_SYSTEM.get_integer_type()
        )

        parent_scope.define_symbol(parent_symbol)
        parent_scope.define_symbol(parent_shared)
        child_scope.define_symbol(child_symbol)
        child_scope.define_symbol(shadow_symbol)

        all_symbols = child_scope.get_all_symbols()

        assert len(all_symbols) == 3
        assert all_symbols["parent_var"] == parent_symbol
        assert all_symbols["child_var"] == child_symbol
        assert all_symbols["shared_var"] == shadow_symbol  # Child's version should win


class TestSymbolTable:
    """Test SymbolTable class functionality."""

    def test_symbol_table_creation(self):
        """Test basic symbol table creation."""
        table = SymbolTable()

        assert table.global_scope.name == "global"
        assert table.current_scope == table.global_scope
        assert len(table.scope_stack) == 1
        assert table.scope_stack[0] == table.global_scope

    def test_scope_management(self):
        """Test entering and exiting scopes."""
        table = SymbolTable()

        # Enter a new scope
        new_scope = table.enter_scope("function_scope")

        assert table.current_scope == new_scope
        assert new_scope.parent == table.global_scope
        assert len(table.scope_stack) == 2
        assert table.scope_stack[-1] == new_scope

        # Exit the scope
        exited_scope = table.exit_scope()

        assert exited_scope == new_scope
        assert table.current_scope == table.global_scope
        assert len(table.scope_stack) == 1

    def test_cannot_exit_global_scope(self):
        """Test error when trying to exit global scope."""
        table = SymbolTable()

        with pytest.raises(ValueError, match="Cannot exit global scope"):
            table.exit_scope()

    def test_symbol_definition_and_lookup(self):
        """Test symbol definition and lookup."""
        table = SymbolTable()
        symbol = Symbol("test_var", SymbolKind.VARIABLE)

        table.define_symbol(symbol)

        result = table.lookup_symbol("test_var")
        assert result == symbol

        assert table.has_symbol("test_var")
        assert not table.has_symbol("nonexistent")

    def test_nested_scope_symbol_resolution(self):
        """Test symbol resolution in nested scopes."""
        table = SymbolTable()

        # Define symbol in global scope
        global_symbol = Symbol("global_var", SymbolKind.VARIABLE)
        table.define_symbol(global_symbol)

        # Enter nested scope
        table.enter_scope("nested")
        try:
            # Can still see global symbol
            assert table.lookup_symbol("global_var") == global_symbol

            # Define local symbol
            local_symbol = Symbol("local_var", SymbolKind.VARIABLE)
            table.define_symbol(local_symbol)

            assert table.lookup_symbol("local_var") == local_symbol
        finally:
            table.exit_scope()

        # Back in global scope, local symbol not visible
        assert table.lookup_symbol("global_var") == global_symbol
        assert table.lookup_symbol("local_var") is None

    def test_library_registration(self):
        """Test library registration and qualified lookup."""
        table = SymbolTable()
        library_scope = LibraryScope("TestLib")

        # Register library
        table.register_library("TestLib", library_scope)

        # Add symbol to library
        symbol = Symbol("lib_symbol", SymbolKind.EXPRESSION)
        library_scope.define_symbol(symbol)

        # Look up qualified symbol
        result = table.lookup_qualified_symbol("TestLib", "lib_symbol")
        assert result == symbol

        # Non-existent library
        result = table.lookup_qualified_symbol("NonExistent", "symbol")
        assert result is None

    def test_reset(self):
        """Test symbol table reset."""
        table = SymbolTable()

        # Add some state
        table.enter_scope("test")
        table.define_symbol(Symbol("test", SymbolKind.VARIABLE))
        table.register_library("TestLib", LibraryScope("TestLib"))

        # Reset
        table.reset()

        assert table.current_scope == table.global_scope
        assert table.global_scope.name == "global"
        assert len(table.scope_stack) == 1
        assert len(table.libraries) == 0
        assert len(table.global_scope.symbols) == 0


class TestLibraryScope:
    """Test LibraryScope class functionality."""

    def test_library_scope_creation(self):
        """Test basic library scope creation."""
        library = LibraryScope("TestLibrary", "1.0")

        assert library.name == "TestLibrary"
        assert library.version == "1.0"
        assert isinstance(library.symbol_table, SymbolTable)
        assert len(library.dependencies) == 0

    def test_symbol_operations(self):
        """Test symbol definition and lookup in library scope."""
        library = LibraryScope("TestLib")
        symbol = Symbol("test_symbol", SymbolKind.EXPRESSION)

        library.define_symbol(symbol)

        result = library.lookup_symbol("test_symbol")
        assert result == symbol

    def test_dependency_management(self):
        """Test library dependency management."""
        main_lib = LibraryScope("MainLib")
        dep_lib = LibraryScope("DepLib")

        # Add dependency
        main_lib.add_dependency("DepAlias", dep_lib)

        assert "DepAlias" in main_lib.dependencies
        assert main_lib.dependencies["DepAlias"] == dep_lib

    def test_qualified_symbol_lookup(self):
        """Test qualified symbol lookup through dependencies."""
        main_lib = LibraryScope("MainLib")
        dep_lib = LibraryScope("DepLib")

        # Add symbol to dependency
        dep_symbol = Symbol("dep_symbol", SymbolKind.FUNCTION)
        dep_lib.define_symbol(dep_symbol)

        # Add dependency
        main_lib.add_dependency("Dep", dep_lib)

        # Look up qualified symbol
        result = main_lib.lookup_qualified_symbol("Dep", "dep_symbol")
        assert result == dep_symbol

    def test_circular_dependency_detection(self):
        """Test circular dependency detection."""
        lib_a = LibraryScope("LibA")
        lib_b = LibraryScope("LibB")
        lib_c = LibraryScope("LibC")

        # Create circular dependency: A -> B -> C -> A
        lib_a.add_dependency("B", lib_b)
        lib_b.add_dependency("C", lib_c)
        lib_c.add_dependency("A", lib_a)

        # Check for circular dependency
        assert lib_a.has_circular_dependency("LibA")
        assert lib_b.has_circular_dependency("LibB")
        assert lib_c.has_circular_dependency("LibC")


class TestScopeManager:
    """Test ScopeManager class functionality."""

    def test_scope_manager_creation(self):
        """Test scope manager creation."""
        table = SymbolTable()
        manager = ScopeManager(table)

        assert manager.symbol_table == table
        assert manager._scope_counter == 0

    def test_scope_context_manager(self):
        """Test scope context manager."""
        table = SymbolTable()
        manager = ScopeManager(table)

        initial_scope = table.current_scope

        with manager.scope("test_scope") as scope:
            assert table.current_scope == scope
            assert scope.name == "test_scope"
            assert scope.parent == initial_scope

        # Should be back to initial scope
        assert table.current_scope == initial_scope

    def test_automatic_scope_naming(self):
        """Test automatic scope naming."""
        table = SymbolTable()
        manager = ScopeManager(table)

        with manager.scope() as scope1:
            assert scope1.name == "scope_1"

        with manager.scope() as scope2:
            assert scope2.name == "scope_2"

    def test_specialized_scope_methods(self):
        """Test specialized scope creation methods."""
        table = SymbolTable()
        manager = ScopeManager(table)

        with manager.function_scope("MyFunction") as scope:
            assert scope.name == "function_MyFunction"

        with manager.expression_scope("MyExpression") as scope:
            assert scope.name == "expression_MyExpression"

        with manager.query_scope() as scope:
            assert scope.name == "query"

        with manager.let_scope() as scope:
            assert scope.name == "let"


class TestDependencyResolver:
    """Test DependencyResolver class functionality."""

    def test_dependency_resolver_creation(self):
        """Test dependency resolver creation."""
        resolver = DependencyResolver()

        assert len(resolver.library_registry) == 0
        assert len(resolver._resolution_stack) == 0

    def test_library_registration(self):
        """Test library registration."""
        resolver = DependencyResolver()
        library = LibraryScope("TestLib", "1.0")

        resolver.register_library(library)

        assert "TestLib@1.0" in resolver.library_registry
        assert resolver.library_registry["TestLib@1.0"] == library

    def test_library_registration_without_version(self):
        """Test library registration without version."""
        resolver = DependencyResolver()
        library = LibraryScope("TestLib")

        resolver.register_library(library)

        assert "TestLib" in resolver.library_registry
        assert resolver.library_registry["TestLib"] == library

    def test_dependency_resolution(self):
        """Test dependency resolution."""
        resolver = DependencyResolver()

        # Register libraries
        lib_a = LibraryScope("LibA")
        lib_b = LibraryScope("LibB", "1.0")

        resolver.register_library(lib_a)
        resolver.register_library(lib_b)

        # Resolve dependencies
        resolved_a = resolver.resolve_dependency("LibA")
        resolved_b = resolver.resolve_dependency("LibB", "1.0")

        assert resolved_a == lib_a
        assert resolved_b == lib_b

        # Non-existent dependency
        assert resolver.resolve_dependency("NonExistent") is None

    def test_dependency_resolution_with_errors(self):
        """Test dependency resolution with errors."""
        resolver = DependencyResolver()
        library = LibraryScope("MainLib")

        resolver.register_library(library)

        # Try to resolve non-existent dependencies
        dependencies = [
            ("alias1", "ExistentLib", None),
            ("alias2", "NonExistentLib", "1.0"),
        ]

        errors = resolver.resolve_dependencies(library, dependencies)

        assert len(errors) == 2
        assert "Cannot resolve dependency 'ExistentLib'" in errors[0]
        assert "Cannot resolve dependency 'NonExistentLib' version 1.0" in errors[1]

    def test_circular_dependency_detection(self):
        """Test circular dependency detection."""
        resolver = DependencyResolver()

        # Create libraries with circular dependency
        lib_a = LibraryScope("LibA")
        lib_b = LibraryScope("LibB")

        resolver.register_library(lib_a)
        resolver.register_library(lib_b)

        # Create circular dependency
        lib_a.add_dependency("B", lib_b)
        lib_b.add_dependency("A", lib_a)

        libraries = [lib_a, lib_b]
        errors = resolver.check_circular_dependencies(libraries)

        assert len(errors) > 0
        assert any("Circular dependency" in error for error in errors)

    def test_dependency_order(self):
        """Test topological sorting of dependencies."""
        resolver = DependencyResolver()

        # Create libraries: A depends on B, B depends on C
        lib_a = LibraryScope("LibA")
        lib_b = LibraryScope("LibB")
        lib_c = LibraryScope("LibC")

        resolver.register_library(lib_a)
        resolver.register_library(lib_b)
        resolver.register_library(lib_c)

        # Setup dependencies
        lib_a.add_dependency("B", lib_b)
        lib_b.add_dependency("C", lib_c)

        # Get dependency order
        ordered = resolver.get_dependency_order([lib_a, lib_b, lib_c])

        # C should come before B, B should come before A
        c_index = ordered.index(lib_c)
        b_index = ordered.index(lib_b)
        a_index = ordered.index(lib_a)

        assert c_index < b_index < a_index


class TestSymbolResolver:
    """Test SymbolResolver class functionality."""

    def test_symbol_resolver_creation(self):
        """Test symbol resolver creation."""
        resolver = SymbolResolver()

        assert isinstance(resolver.dependency_resolver, DependencyResolver)
        assert len(resolver.libraries) == 0

    def test_library_scope_creation(self):
        """Test library scope creation."""
        resolver = SymbolResolver()

        library = resolver.create_library_scope("TestLib", "1.0")

        assert library.name == "TestLib"
        assert library.version == "1.0"
        assert "TestLib" in resolver.libraries
        assert resolver.libraries["TestLib"] == library

    def test_symbol_lookup(self):
        """Test symbol lookup in resolver."""
        resolver = SymbolResolver()

        # Create library and add symbol
        library = resolver.create_library_scope("TestLib")
        symbol = Symbol("test_symbol", SymbolKind.EXPRESSION)
        library.define_symbol(symbol)

        # Look up symbol
        result = resolver.lookup_symbol("test_symbol", "TestLib")
        assert result == symbol

        # Look up in non-existent library
        result = resolver.lookup_symbol("test_symbol", "NonExistent")
        assert result is None

    def test_integration_workflow(self):
        """Test complete integration workflow."""
        resolver = SymbolResolver()

        # Create libraries
        main_lib = resolver.create_library_scope("MainLib")
        common_lib = resolver.create_library_scope("CommonLib")

        # Add symbols to libraries
        main_symbol = Symbol("main_def", SymbolKind.EXPRESSION)
        common_symbol = Symbol("common_func", SymbolKind.FUNCTION)

        main_lib.define_symbol(main_symbol)
        common_lib.define_symbol(common_symbol)

        # Setup dependency
        errors = resolver.resolve_library_dependencies(main_lib, [("Common", "CommonLib", None)])
        assert len(errors) == 0

        # Validate dependencies
        validation_errors = resolver.validate_dependencies()
        assert len(validation_errors) == 0

        # Test symbol resolution
        assert resolver.lookup_symbol("main_def", "MainLib") == main_symbol
        assert resolver.lookup_qualified_symbol("Common", "common_func", "MainLib") == common_symbol
