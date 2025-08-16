#!/usr/bin/env python3
"""
Test script for the ELM Flow Web API.
"""

import asyncio
import sys
from pathlib import Path

# Add src to Python path for local development
src_path = Path(__file__).parent.parent / "src"
sys.path.insert(0, str(src_path))


async def test_web_api():
    """Test the FastAPI web application."""

    try:
        from fastapi.testclient import TestClient

        from cql_flow.web.api import app

        # Create test client
        client = TestClient(app)

        print("Testing ELM Flow Web API...")

        # Test 1: Health check
        print("\n1. Testing health check endpoint...")
        response = client.get("/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "healthy"
        print("✓ Health check passed")

        # Test 2: Root endpoint
        print("\n2. Testing root endpoint...")
        response = client.get("/")
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == "ELM Flow API"
        print("✓ Root endpoint passed")

        # Test 3: CQL validation
        print("\n3. Testing CQL validation...")
        test_cql = """
        library TestLibrary version '1.0.0'
        
        define "Test": 
            true
        """

        response = client.post("/validate", json={"cql_content": test_cql})
        print(f"Validation response: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"Validation success: {data.get('success', False)}")
        else:
            print(f"Validation failed: {response.text}")

        # Test 4: CQL conversion
        print("\n4. Testing CQL conversion...")
        response = client.post(
            "/convert", json={"cql_content": test_cql, "optimize": False}
        )
        print(f"Conversion response: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"Conversion success: {data.get('success', False)}")
            if data.get("elm_json"):
                print("✓ ELM JSON generated")
        else:
            print(f"Conversion failed: {response.text}")

        print("\n✓ Web API tests completed successfully!")

    except ImportError as e:
        print(f"Missing dependencies: {e}")
        print("Please install test dependencies:")
        print("uv add httpx --optional test")
        return False
    except Exception as e:
        print(f"Test error: {e}")
        return False

    return True


if __name__ == "__main__":
    success = asyncio.run(test_web_api())
    sys.exit(0 if success else 1)
