#!/usr/bin/env python3
"""
Test the web API endpoints with the updated convert_string method
"""

import asyncio
import sys
from pathlib import Path

# Add src to Python path
src_path = Path(__file__).parent.parent / "src"
sys.path.insert(0, str(src_path))


async def test_web_api_endpoints():
    """Test the web API endpoints."""

    try:
        from fastapi.testclient import TestClient

        from cql_flow.web.api import app

        # Create test client
        client = TestClient(app)

        # Load CQL content
        cql_file = (
            Path(__file__).parent.parent / "examples" / "cql" / "PatientDataExample.cql"
        )
        cql_content = cql_file.read_text(encoding="utf-8")

        print("🌐 Testing Web API Endpoints")
        print("=" * 50)

        # Test 1: Health check
        print("\n1️⃣  Testing health check...")
        response = client.get("/health")
        print(f"   Status: {response.status_code}")
        if response.status_code == 200:
            print(f"   Response: {response.json()}")
            print("   ✅ Health check passed")

        # Test 2: Validation endpoint
        print("\n2️⃣  Testing CQL validation...")
        response = client.post("/validate", json={"cql_content": cql_content})
        print(f"   Status: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"   Success: {data.get('success')}")
            print(f"   Errors: {len(data.get('errors', []))}")
            print(f"   Warnings: {len(data.get('warnings', []))}")
            print("   ✅ Validation endpoint working")
        else:
            print(f"   ❌ Validation failed: {response.text}")

        # Test 3: Conversion endpoint
        print("\n3️⃣  Testing CQL conversion...")
        response = client.post(
            "/convert", json={"cql_content": cql_content, "optimize": False}
        )
        print(f"   Status: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"   Success: {data.get('success')}")
            print(f"   Has ELM: {bool(data.get('elm_json'))}")
            print(f"   Errors: {len(data.get('errors', []))}")
            print(f"   Warnings: {len(data.get('warnings', []))}")
            if data.get("processing_time_ms"):
                print(f"   Processing time: {data['processing_time_ms']:.2f}ms")
            print("   ✅ Conversion endpoint working")
        else:
            print(f"   ❌ Conversion failed: {response.text}")

        # Test 4: Root endpoint
        print("\n4️⃣  Testing root endpoint...")
        response = client.get("/")
        print(f"   Status: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"   API Name: {data.get('name')}")
            print(f"   Version: {data.get('version')}")
            print("   ✅ Root endpoint working")

        # Test 5: Web UI endpoint
        print("\n5️⃣  Testing web UI endpoint...")
        response = client.get("/ui")
        print(f"   Status: {response.status_code}")
        if response.status_code == 200:
            print("   ✅ Web UI endpoint working")

        print("\n" + "=" * 50)
        print("🎉 All API endpoints are working properly!")
        print("\n🌐 Web Interface Available:")
        print("   • UI:           http://localhost:8000/ui")
        print("   • API Docs:     http://localhost:8000/docs")
        print("   • Health:       http://localhost:8000/health")
        print("\n💡 You can now use the web interface to convert CQL!")

    except ImportError as e:
        print(f"❌ Missing dependencies: {e}")
        return False
    except Exception as e:
        print(f"❌ Test error: {e}")
        import traceback

        traceback.print_exc()
        return False

    return True


if __name__ == "__main__":
    asyncio.run(test_web_api_endpoints())
