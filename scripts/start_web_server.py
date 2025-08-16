#!/usr/bin/env python3
"""
Script to start the ELM Flow Web API server.
"""

import sys
from pathlib import Path

# Add src to Python path
src_path = Path(__file__).parent.parent / "src"
sys.path.insert(0, str(src_path))

if __name__ == "__main__":
    try:
        import uvicorn

        print("Starting ELM Flow Web API server...")
        print("API Documentation: http://localhost:8000/docs")
        print("Health Check: http://localhost:8000/health")
        print("Press Ctrl+C to stop")

        uvicorn.run(
            "cql_flow.web.api:app",
            host="0.0.0.0",
            port=8000,
            reload=True,
            log_level="info",
        )

    except KeyboardInterrupt:
        print("\nServer stopped by user")
    except ImportError as e:
        print(f"Failed to import required modules: {e}")
        print("Please install web dependencies: uv add --optional web")
        sys.exit(1)
    except Exception as e:
        print(f"Failed to start server: {e}")
        sys.exit(1)
