#!/usr/bin/env python3
"""
Test the web API with the PatientDataExample.cql content
"""

import asyncio
import sys
from pathlib import Path

# Add src to Python path
src_path = Path(__file__).parent.parent / "src"
sys.path.insert(0, str(src_path))


async def test_api_with_cql():
    """Test the API with real CQL content."""

    # Read the PatientDataExample.cql file
    cql_file = (
        Path(__file__).parent.parent / "examples" / "cql" / "PatientDataExample.cql"
    )

    try:
        if not cql_file.exists():
            print(f"❌ CQL file not found: {cql_file}")
            return

        cql_content = cql_file.read_text(encoding="utf-8")
        print(f"✓ Loaded CQL content from {cql_file}")
        print(f"Content length: {len(cql_content)} characters")

        # Test with the converter API directly
        from cql_flow.api import CQLToELMConverter

        converter = CQLToELMConverter()

        print("\n🔍 Testing validation...")
        result = converter.convert_string(cql_content)

        print(f"Success: {result.success}")
        print(f"Errors: {len(result.errors) if result.errors else 0}")
        print(f"Warnings: {len(result.warnings) if result.warnings else 0}")

        if result.errors:
            print("\nErrors:")
            for error in result.errors[:3]:  # Show first 3 errors
                print(f"  - {error}")

        if result.warnings:
            print("\nWarnings:")
            for warning in result.warnings[:3]:  # Show first 3 warnings
                print(f"  - {warning}")

        if result.success and result.elm_document:
            elm_json = result.get_elm_json()
            if elm_json:
                print(f"\n✓ ELM JSON generated ({len(elm_json)} characters)")
            else:
                print("\n❌ No ELM JSON generated")

        print("\n" + "=" * 50)
        print("The web API should now work properly!")
        print("Visit: http://localhost:8000/ui")
        print("Try pasting the CQL content into the editor.")

    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback

        traceback.print_exc()


if __name__ == "__main__":
    asyncio.run(test_api_with_cql())
