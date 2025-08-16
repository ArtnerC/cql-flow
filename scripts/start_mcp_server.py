#!/usr/bin/env python3
"""
ELM Flow MCP Server entry point.
Run this to start the MCP server for AI tool integration.
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "src"))

from cql_flow.mcp.server import main

if __name__ == "__main__":
    try:
        import asyncio

        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nMCP server stopped.")
    except Exception as e:
        print(f"Error running MCP server: {e}")
        sys.exit(1)
