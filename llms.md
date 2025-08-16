# LLM Reference: Using cql-flow

A concise guide for Large Language Models and automation to use this package reliably.

## What this package does

- Converts Clinical Quality Language (CQL) into Expression Logical Model (ELM) JSON.
- Provides both a Python API and a CLI, with plain text output modes suitable for CI/Windows.

## Install (dev)

```bat
uv sync --all-extras --dev
```

Requires Python 3.12+.

## Python API (Library)

Primary entrypoint: `cql_flow.api.converter.CQLToELMConverter`.

Result containers:

- `ConversionResult`: `.success`, `.errors`, `.warnings`, `.get_elm_json(indent=2)`, `.save_elm(path)`
- `BatchConversionResult`: `.results`, `.success_rate`, `.get_failed_results()`

### Minimal examples

Convert a string:

```python
from cql_flow.api.converter import CQLToELMConverter

cql = """
library Test version '1.0.0'
using QICore version '4.1.1'
include FHIRHelpers version '4.0.1' called FHIRHelpers
context Patient
define FortyTwo: 42
"""

converter = CQLToELMConverter().with_validation(enabled=True)
res = converter.convert_string(cql)
if res.success:
    print(res.get_elm_json())
else:
    print("errors:", res.errors)
```

Convert a file:

```python
from cql_flow.api.converter import CQLToELMConverter

res = CQLToELMConverter().convert_file("examples/cql/simple.cql")
if res.success:
    res.save_elm("examples/elm/simple.elm.json")
```

Batch convert a directory:

```python
from pathlib import Path
from cql_flow.api.converter import CQLToELMConverter

cql_files = list(Path("examples/cql").glob("*.cql"))
converter = CQLToELMConverter()
batch = converter.convert_files(cql_files)
print("success rate:", batch.success_rate)
for r in batch.get_failed_results():
    print("FAILED:", r.source_file, r.errors)
```

Options you can set fluently:

- `.with_validation(enabled=True, strict=False)` or `.with_validation_level(level)`
- `.with_optimization(True)`
- Async batch: `.convert_files_async([...])` (provides progress callbacks)

### Output shape

- Use `ConversionResult.get_elm_json()` for a JSON string.
- For structure details see `docs/elm_json.rst` — ELM JSON includes a top-level `schemaIdentifier` and the full `library` payload.

### Error handling

- On failure, `ConversionResult.success == False` and `ConversionResult.errors` will contain messages.
- Validation warnings are in `.warnings`. Set `.with_validation(strict=True)` to treat warnings as errors.

## CLI

Plain mode is recommended on Windows/CI for predictable text output.

```bat
:: Show version
uv run cql-flow version --plain

:: Convert one file
uv run cql-flow convert examples\simple.cql --plain

:: Validate a file
set CQL_FLOW_PLAIN_TEXT=true && uv run cql-flow validate examples\simple.cql

:: Batch convert a directory
set CQL_FLOW_PLAIN_TEXT=true && uv run cql-flow batch examples\cql --output-dir examples\elm
```

## Web Service (FastAPI)

Service module: `cql_flow.web.api:app` (FastAPI)

Standard endpoint naming:

- `GET /` — API info (name, version, endpoints)
- `GET /health` — Health check
- `POST /convert` — Convert CQL content to ELM JSON
- `POST /validate` — Validate CQL content only
- `POST /upload` — Multipart upload; either convert to downloadable JSON or validate
- `POST /batch` — Multipart batch convert multiple `.cql` files
- `WEBSOCKET /ws` — Real-time validation of CQL content
- `GET /ui` — Static web UI (served if available)

Start the server (dev):

```bat
uv run uvicorn cql_flow.web.api:app --host 0.0.0.0 --port 8000 --reload
```

Minimal requests:

```http
POST /convert
Content-Type: application/json

{ "cql_content": "library Test version '1.0.0'\ncontext Patient\ndefine X: 42" }
```

```http
POST /validate
Content-Type: application/json

{ "cql_content": "library Test version '1.0.0'\ncontext Patient\ndefine X: 42" }
```

Multipart upload convert:

```text
POST /upload (form-data)
    file: <.cql file>
    convert: true
    optimize: false
```

WebSocket validation:

- Connect to `ws://localhost:8000/ws`
- Send `{ "cql_content": "..." }`
- Receive `{ "type": "validation_result", "success": true|false, "errors": [...], "warnings": [...] }`

Response model notes:

- Convert: `{ success, elm_json: { ... }, errors: [], warnings: [], processing_time_ms }`
- Validate: `{ success, errors: [], warnings: [] }`

## MCP Server (Model Context Protocol)

Module: `cql_flow.mcp.server`

Start via stdio (recommended for LLM toolchains):

```bat
uv run python scripts\start_mcp_server.py
```

Server name: `cql-flow`

Exposed resources (list_resources):

- Discovers `*.cql` under current working directory and `examples/cql`.

Exposed tools (list_tools):

- `convert_cql_file` — { file_path, output_path? }
- `convert_cql_content` — { cql_content }
- `validate_cql_file` — { file_path }
- `validate_cql_content` — { cql_content }
- `batch_convert_cql` — { file_paths: [..], output_directory? }
- `analyze_cql_performance` — { file_path }

Tool call behaviors:

- Successful conversions return pretty-printed ELM JSON in text responses; when `output_path` is provided, the server also writes to disk.
- Validation tools report pass/fail with simple text summaries.
- Batch conversion returns a line-by-line summary and counts.

Prompts (list_prompts / get_prompt):

- `cql_best_practices(focus_area?)`
- `cql_troubleshooting(error_message, cql_snippet?)`

Client example (Python, stdio):

```python
import asyncio
from mcp.client.stdio import stdio_client
from mcp.types import CallToolRequest

async def main():
        async with stdio_client("uv run python scripts/start_mcp_server.py") as (reader, writer):
                # Call convert_cql_content
                req = CallToolRequest(name="convert_cql_content", arguments={"cql_content": "library T version '1'\ncontext Patient\ndefine X: 42"})
                await writer.send_call_tool(req)
                resp = await reader.get_call_tool_result()
                print(resp)

asyncio.run(main())
```

## Tips for LLM usage

- Prefer plain-mode CLI outputs to minimize formatting noise.
- Keep prompts specific about desired artifacts: ELM JSON string vs. file saved to disk.
- When inspecting programmatically, call `.get_elm_json(indent=None)` to minimize tokens.
- Avoid relying on transient metrics (coverage %, test counts); treat them as informational only.

## Links

- Docs landing: `docs/index.rst` (build via tasks)
- ELM JSON notes: `docs/elm_json.rst`
- Main API source: `src/cql_flow/api/converter.py`
