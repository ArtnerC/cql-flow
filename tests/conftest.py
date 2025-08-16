"""
Test configuration and shared fixtures for ELM Flow tests.
"""

from pathlib import Path
from typing import Any

import pytest


@pytest.fixture
def project_root() -> Path:
    """Return the project root directory."""
    return Path(__file__).parent.parent


@pytest.fixture
def test_data_dir(project_root: Path) -> Path:
    """Return the test data directory."""
    return project_root / "tests" / "fixtures"


@pytest.fixture
def sample_cql_content() -> str:
    """Return a simple CQL library for testing."""
    return """
library TestLibrary version '1.0.0'

using FHIR version '4.0.1'

parameter "Measurement Period" Interval<DateTime>

define "Test Expression":
  true
"""


@pytest.fixture
def expected_elm_structure() -> dict[str, Any]:
    """Return expected ELM structure for the sample CQL."""
    return {
        "library": {
            "identifier": {"id": "TestLibrary", "version": "1.0.0"},
            "schemaIdentifier": {"id": "urn:hl7-org:elm", "version": "r1"},
            "usings": {
                "def": [
                    {
                        "localIdentifier": "FHIR",
                        "uri": "http://hl7.org/fhir",
                        "version": "4.0.1",
                    }
                ]
            },
        }
    }
