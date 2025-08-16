"""CLI smoke tests for Typer app.

These tests validate that the CLI app responds to basic commands and can
perform a minimal conversion end-to-end without relying on terminal
formatting (plain mode).
"""
from __future__ import annotations

from pathlib import Path

from typer.testing import CliRunner

from cql_flow.cli.main import app


runner = CliRunner()


def test_version_command_outputs_version():
    result = runner.invoke(app, ["version", "--plain"])
    assert result.exit_code == 0
    # Project renamed: expect new version string prefix
    assert "cql-flow version" in result.stdout


def test_convert_minimal_file(tmp_path: Path):
    # Create minimal valid CQL file
    cql_path = tmp_path / "Mini.cql"
    cql_path.write_text("library Mini version '0.0.1'", encoding="utf-8")

    # Run convert command in plain mode
    result = runner.invoke(app, ["convert", str(cql_path), "--plain", "--no-format"])
    assert result.exit_code == 0

    # Expect an .elm.json next to the input file
    elm_path = cql_path.with_suffix(".elm.json")
    assert elm_path.exists()

    # Basic sanity check on output content
    content = elm_path.read_text(encoding="utf-8")
    assert "schemaIdentifier" in content
    assert "Mini" in content
