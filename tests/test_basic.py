"""
Basic tests to ensure the project setup is working correctly.
"""

from pathlib import Path

from cql_flow import __version__


def test_version():
    """Test that version is defined."""
    assert __version__ == "0.1.0"


def test_import():
    """Test that the package can be imported."""
    import cql_flow

    assert cql_flow is not None


def test_sample_fixture(sample_cql_content: str):
    """Test that fixtures are working."""
    assert "TestLibrary" in sample_cql_content
    assert "FHIR" in sample_cql_content


class TestProjectStructure:
    """Test that the project structure is set up correctly."""

    def test_project_root_exists(self, project_root: Path):
        """Test that project root is accessible."""
        assert project_root.exists()
        assert project_root.is_dir()

    def test_src_directory_exists(self, project_root: Path):
        """Test that src directory exists."""
        src_dir = project_root / "src"
        assert src_dir.exists()
        assert src_dir.is_dir()

    def test_cql_flow_package_exists(self, project_root: Path):
        """Test that cql_flow package exists."""
        package_dir = project_root / "src" / "cql_flow"
        assert package_dir.exists()
        assert package_dir.is_dir()

        init_file = package_dir / "__init__.py"
        assert init_file.exists()
        assert init_file.is_file()
