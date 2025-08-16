"""Additional CLI smoke tests for batch and validate commands.

These tests ensure the CLI operates in plain mode using the
CQL_FLOW_PLAIN_TEXT environment variable and performs minimal
workflows without relying on terminal capabilities.
"""
from __future__ import annotations

from pathlib import Path

from typer.testing import CliRunner

from cql_flow.cli.main import app


runner = CliRunner()


def test_validate_minimal_file(tmp_path: Path):
    # Create minimal valid CQL file
    cql_path = tmp_path / "Mini.cql"
    cql_path.write_text("library Mini version '0.0.1'", encoding="utf-8")

    # Run validate command with plain output enforced via env var
    result = runner.invoke(
        app,
        ["validate", str(cql_path)],
        env={"CQL_FLOW_PLAIN_TEXT": "true"},
    )
    assert result.exit_code == 0
    # Rich strips color when no_color, so the text should be visible plainly
    assert "Validation passed" in result.stdout


def test_batch_minimal_directory(tmp_path: Path):
    # Prepare a directory with a couple of tiny CQL files
    input_dir = tmp_path / "cql_in"
    input_dir.mkdir()
    (input_dir / "A.cql").write_text("library A version '0.0.1'", encoding="utf-8")
    (input_dir / "B.cql").write_text("library B version '0.0.1'", encoding="utf-8")

    # Specify output directory to avoid writing alongside inputs
    output_dir = tmp_path / "elm_out"

    # Run batch in plain mode via env var
    result = runner.invoke(
        app,
        [
            "batch",
            str(input_dir),
            "--output-dir",
            str(output_dir),
            "--pattern",
            "*.cql",
            "--no-format",
        ],
        env={"CQL_FLOW_PLAIN_TEXT": "true"},
    )

    assert result.exit_code == 0

    # Expect ELM files for each input
    assert (output_dir / "A.elm.json").exists()
    assert (output_dir / "B.elm.json").exists()
