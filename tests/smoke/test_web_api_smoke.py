"""FastAPI smoke tests (auto-skip if web extra isn't installed)."""

import pytest


# Skip this module's tests if FastAPI isn't available
pytest.importorskip("fastapi", reason="web extra not installed")


@pytest.mark.asyncio
async def test_root_and_health_endpoints_import_and_shape():
    # Import only if FastAPI is present
    from cql_flow.web import api as api

    # Ensure app exists and has routes
    assert hasattr(api, "app")

    # Validate path functions exist
    assert hasattr(api, "root")
    assert hasattr(api, "health_check")

    # Call async route handlers directly for a lightweight smoke check
    root_payload = await api.root()
    health_payload = await api.health_check()

    # Shape assertions
    assert isinstance(root_payload, dict)
    assert root_payload.get("name") == "ELM Flow API"
    assert "/docs" in root_payload.get("endpoints", {}).get("docs", "/docs")

    assert isinstance(health_payload, dict)
    assert health_payload.get("status") == "healthy"
