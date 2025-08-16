"""
Model Context Protocol (MCP) server for ELM Flow CQL to ELM conversion.
Provides tools and resources for AI agents to work with CQL libraries.
"""

from __future__ import annotations

import asyncio
import logging
from pathlib import Path
from typing import Any, List, cast

from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import GetPromptResult, Prompt, PromptArgument, PromptMessage, Resource, TextContent, Tool
from pydantic import AnyUrl

from cql_flow.api import CQLToELMConverter

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

converter = CQLToELMConverter()
server = Server("elm-flow")


@server.list_resources()
async def handle_list_resources() -> List[Resource]:
    resources: List[Resource] = []
    for directory in [Path.cwd(), Path.cwd() / "examples" / "cql"]:
        if directory.exists() and directory.is_dir():
            for cql_file in directory.rglob("*.cql"):
                try:
                    relative_path = cql_file.relative_to(Path.cwd())
                    name = f"CQL Library: {relative_path}"
                except ValueError:
                    name = f"CQL Library: {cql_file.name}"
                resources.append(
                    Resource(
                        uri=AnyUrl(f"file://{cql_file.absolute()}"),
                        name=name,
                        description=f"CQL library file at {cql_file}",
                        mimeType="text/plain",
                    )
                )
    return resources


@server.read_resource()
async def handle_read_resource(uri: AnyUrl):
    path = Path(str(uri)[7:])
    if not path.exists():
        raise FileNotFoundError(f"File not found: {path}")
    return path.read_text(encoding="utf-8")


@server.list_tools()
async def handle_list_tools() -> List[Tool]:
    tools = [
        Tool(
            name="convert_cql_file",
            description="Convert a CQL file to ELM JSON format",
            inputSchema={
                "type": "object",
                "properties": {
                    "file_path": {"type": "string"},
                    "output_path": {"type": "string"},
                },
                "required": ["file_path"],
            },
        ),
        Tool(
            name="convert_cql_content",
            description="Convert CQL content string to ELM JSON format",
            inputSchema={
                "type": "object",
                "properties": {"cql_content": {"type": "string"}},
                "required": ["cql_content"],
            },
        ),
        Tool(
            name="validate_cql_file",
            description="Validate a CQL file for syntax and semantic errors",
            inputSchema={
                "type": "object",
                "properties": {"file_path": {"type": "string"}},
                "required": ["file_path"],
            },
        ),
        Tool(
            name="validate_cql_content",
            description="Validate CQL content string for syntax and semantic errors",
            inputSchema={
                "type": "object",
                "properties": {"cql_content": {"type": "string"}},
                "required": ["cql_content"],
            },
        ),
        Tool(
            name="batch_convert_cql",
            description="Convert multiple CQL files in batch",
            inputSchema={
                "type": "object",
                "properties": {
                    "file_paths": {"type": "array", "items": {"type": "string"}},
                    "output_directory": {"type": "string"},
                },
                "required": ["file_paths"],
            },
        ),
        Tool(
            name="analyze_cql_performance",
            description="Analyze conversion performance for a CQL file",
            inputSchema={
                "type": "object",
                "properties": {"file_path": {"type": "string"}},
                "required": ["file_path"],
            },
        ),
    ]
    return tools


@server.call_tool()
async def handle_call_tool(name: str, arguments: dict[str, Any] | None) -> List[TextContent]:
    try:
        args = arguments or {}
        if name == "convert_cql_file":
            fp = args.get("file_path")
            if not fp:
                return [TextContent(type="text", text="Error: 'file_path' is required")]
            file_path = Path(fp)
            output_path = args.get("output_path")
            if not file_path.exists():
                return [TextContent(type="text", text=f"Error: File not found: {file_path}")]
            result = converter.convert_file(str(file_path))
            if result.success:
                elm_str = result.get_elm_json(indent=2) or "{}"
                if output_path:
                    out = Path(output_path)
                    out.parent.mkdir(parents=True, exist_ok=True)
                    out.write_text(elm_str, encoding="utf-8")
                    return [TextContent(type="text", text=f"Converted {file_path} to {out}\n\n{elm_str}")]
                return [TextContent(type="text", text=f"Conversion successful:\n\n{elm_str}")]
            return [TextContent(type="text", text="Conversion failed:\n" + "\n".join(f"- {e}" for e in result.errors))]

        if name == "convert_cql_content":
            cql_content = args.get("cql_content")
            if cql_content is None:
                return [TextContent(type="text", text="Error: 'cql_content' is required")]
            result = converter.convert_string(cql_content)
            if result.success:
                elm_str = result.get_elm_json(indent=2) or "{}"
                return [TextContent(type="text", text=f"Conversion successful:\n\n{elm_str}")]
            return [TextContent(type="text", text="Conversion failed:\n" + "\n".join(f"- {e}" for e in result.errors))]

        if name == "validate_cql_file":
            fp = args.get("file_path")
            if not fp:
                return [TextContent(type="text", text="Error: 'file_path' is required")]
            file_path = Path(fp)
            if not file_path.exists():
                return [TextContent(type="text", text=f"Error: File not found: {file_path}")]
            res = converter.convert_file(str(file_path))
            if res.success:
                return [TextContent(type="text", text=f"Validation successful: {file_path}")]
            return [TextContent(type="text", text="Validation failed:\n" + "\n".join(f"- {e}" for e in res.errors))]

        if name == "validate_cql_content":
            cql_content = args.get("cql_content")
            if cql_content is None:
                return [TextContent(type="text", text="Error: 'cql_content' is required")]
            res = converter.convert_string(cql_content)
            if res.success:
                return [TextContent(type="text", text="Validation successful: content is valid")]
            return [TextContent(type="text", text="Validation failed:\n" + "\n".join(f"- {e}" for e in res.errors))]

        if name == "batch_convert_cql":
            file_paths_val = args.get("file_paths")
            if not isinstance(file_paths_val, list):
                return [TextContent(type="text", text="Error: 'file_paths' must be a list of strings")]
            file_paths_str = cast(List[str], file_paths_val)
            output_directory = Path(args.get("output_directory", "output"))
            output_directory.mkdir(parents=True, exist_ok=True)
            results: List[str] = []
            converted = 0
            for fp in file_paths_str:
                p = Path(str(fp))
                if not p.exists():
                    results.append(f"X {fp}: File not found")
                    continue
                try:
                    r = converter.convert_file(str(p))
                    if r.success:
                        out = output_directory / f"{p.stem}.json"
                        out.write_text(r.get_elm_json(indent=2) or "{}", encoding="utf-8")
                        results.append(f"OK {fp} -> {out}")
                        converted += 1
                    else:
                        results.append(f"X {fp}: {'; '.join(r.errors[:2])}")
                except Exception as e:
                    results.append(f"X {fp}: {e}")
            summary = f"Batch: {converted}/{len(file_paths_str)} converted\n\n" + "\n".join(results)
            return [TextContent(type="text", text=summary)]

        if name == "analyze_cql_performance":
            import time

            fp = args.get("file_path")
            if not fp:
                return [TextContent(type="text", text="Error: 'file_path' is required")]
            file_path = Path(fp)
            if not file_path.exists():
                return [TextContent(type="text", text=f"Error: File not found: {file_path}")]
            t0 = time.perf_counter()
            r = converter.convert_file(str(file_path))
            dt = (time.perf_counter() - t0) * 1000.0
            if r.success:
                elm_text = r.get_elm_json(indent=None) or "{}"
                analysis = (
                    f"Performance Analysis for {file_path.name}\n"
                    f"Conversion Time: {dt:.2f} ms\n"
                    f"Input Size: {file_path.stat().st_size} bytes\n"
                    f"Output Size: {len(elm_text)} characters\n"
                    f"Status: Success"
                )
            else:
                analysis = (
                    f"Performance Analysis for {file_path.name}\n"
                    f"Conversion Time: {dt:.2f} ms\n"
                    f"Status: Failed ({len(r.errors)} errors)\n"
                    f"First Error: {r.errors[0] if r.errors else 'Unknown'}"
                )
            return [TextContent(type="text", text=analysis)]

        return [TextContent(type="text", text=f"Unknown tool: {name}")]
    except Exception as e:
        logger.error("Error in tool %s: %s", name, e)
        return [TextContent(type="text", text=f"Error executing {name}: {e}")]


@server.list_prompts()
async def handle_list_prompts() -> List[Prompt]:
    return [
        Prompt(
            name="cql_best_practices",
            description="CQL development best practices",
            arguments=[PromptArgument(name="focus_area", description="Area of focus", required=False)],
        ),
        Prompt(
            name="cql_troubleshooting",
            description="Troubleshoot CQL conversion issues",
            arguments=[
                PromptArgument(name="error_message", description="The error message", required=True),
                PromptArgument(name="cql_snippet", description="Problematic CQL code", required=False),
            ],
        ),
    ]


@server.get_prompt()
async def handle_get_prompt(name: str, arguments: dict[str, str] | None) -> GetPromptResult:
    if name == "cql_best_practices":
        args = arguments or {}
        focus = args.get("focus_area", "general")
        content = (
            f"CQL Best Practices ({focus}):\n"
            "- Keep expressions small and testable\n"
            "- Use clear naming and comments\n"
            "- Validate null handling and types\n"
            "- Prefer built-in functions"
        )
        return GetPromptResult(
            description=f"CQL best practices focused on {focus}",
            messages=[PromptMessage(role="user", content=TextContent(type="text", text=content))],
        )

    if name == "cql_troubleshooting":
        args = arguments or {}
        err = args.get("error_message", "")
        snippet = args.get("cql_snippet", "")
        content = (
            "CQL Troubleshooting Guide\n"
            f"Error: {err}\n"
            "1) Check syntax and semicolons\n"
            "2) Verify types and null handling\n"
            "3) Ensure referenced expressions exist\n"
            f"Snippet: {snippet if snippet else '[none]'}"
        )
        return GetPromptResult(
            description="CQL troubleshooting assistance",
            messages=[PromptMessage(role="user", content=TextContent(type="text", text=content))],
        )

    return GetPromptResult(
        description="Unknown prompt",
        messages=[
            PromptMessage(
                role="user",
                content=TextContent(type="text", text=f"Unknown prompt: {name}"),
            )
        ],
    )


async def main():
    async with stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            server.create_initialization_options(server.notification_options, {}),
        )


if __name__ == "__main__":
    asyncio.run(main())
