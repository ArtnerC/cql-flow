"""
Main CLI application for ELM Flow converter.
"""

import os
from pathlib import Path
from typing import Optional

import typer
from rich.console import Console
from rich.progress import Progress, SpinnerColumn, TextColumn
from rich.table import Table

from cql_flow.api import CQLToELMConverter, ValidationLevel

# Create Typer app
app = typer.Typer(
    name="cql-flow",
    help="Clinical Quality Language (CQL) to Expression Logical Model (ELM) converter",
    add_completion=False,
)

# Check if we should use plain text output
USE_PLAIN_TEXT = (
    os.getenv("CQL_FLOW_PLAIN_TEXT")
    or os.getenv("CQL_FLOW_PLAIN_TEXT")  # backward compatibility
    or "false"
).lower() in ("true", "1", "yes")

# Rich console for pretty output (or plain text if needed)
console = Console(
    force_terminal=not USE_PLAIN_TEXT,
    no_color=USE_PLAIN_TEXT,
    width=None if USE_PLAIN_TEXT else 80,
)


def safe_print(message: str, style: Optional[str] = None, plain: bool = False) -> None:
    """Print message with optional styling and proper Windows line endings."""
    if plain or USE_PLAIN_TEXT:
        # Strip rich markup for plain text
        import re

        clean_message = re.sub(r"\[.*?\]", "", message)
        print(clean_message)
    else:
        if style:
            console.print(f"[{style}]{message}[/{style}]")
        else:
            console.print(message)


@app.command()
def convert(
    input_file: Path = typer.Argument(..., help="CQL file to convert"),
    output_file: Optional[Path] = typer.Option(None, "--output", "-o", help="Output ELM JSON file"),
    validation_level: ValidationLevel = typer.Option(
        ValidationLevel.NORMAL, "--validation", "-v", help="Validation strictness level"
    ),
    optimize: bool = typer.Option(True, "--optimize/--no-optimize", help="Enable ELM optimization"),
    format_output: bool = typer.Option(
        True, "--format/--no-format", help="Pretty-print JSON output"
    ),
    verbose: bool = typer.Option(False, "--verbose", help="Verbose output"),
    plain: bool = typer.Option(False, "--plain", help="Plain text output (no colors/formatting)"),
) -> None:
    """Convert a single CQL file to ELM JSON."""

    # Override console settings if plain text requested
    if plain or USE_PLAIN_TEXT:
        global console
        console = Console(force_terminal=False, no_color=True)

    if verbose:
        if plain or USE_PLAIN_TEXT:
            print(f"Converting: {input_file}")
        else:
            console.print(f"[blue]Converting:[/blue] {input_file}")

    # Check if input file exists
    if not input_file.exists():
        if plain or USE_PLAIN_TEXT:
            print(f"Error: File not found: {input_file}")
        else:
            console.print(f"[red]Error:[/red] File not found: {input_file}")
        raise typer.Exit(1)

    # Determine output file if not specified
    if output_file is None:
        output_file = input_file.with_suffix(".elm.json")

    # Create converter
    converter = (
        CQLToELMConverter()
        .with_validation_level(validation_level)
        .with_optimization(optimize)
        .with_formatting(format_output)
    )

    # Convert with progress indication (only if not plain text)
    if plain or USE_PLAIN_TEXT:
        if verbose:
            print("Converting CQL to ELM...")
        result = converter.convert_file(input_file)
    else:
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            transient=True,
        ) as progress:
            progress.add_task("Converting CQL to ELM...", total=None)
            result = converter.convert_file(input_file)

    # Handle results
    if result.success:
        # Save output
        if result.get_elm_json():
            result.save_elm(output_file)
            if plain or USE_PLAIN_TEXT:
                print(f"✓ Successfully converted to: {output_file}")
            else:
                console.print(f"[green]✓[/green] Successfully converted to: {output_file}")

        # Show warnings if any
        if result.has_warnings:
            if plain or USE_PLAIN_TEXT:
                print("\nWarnings:")
                for warning in result.warnings or []:
                    print(f"  • {warning}")
            else:
                console.print("\n[yellow]Warnings:[/yellow]")
                for warning in result.warnings or []:
                    console.print(f"  • {warning}")
    else:
        # Show errors
        if plain or USE_PLAIN_TEXT:
            print("Conversion failed!")
            if result.has_errors:
                print("\nErrors:")
                for error in result.errors or []:
                    print(f"  • {error}")
        else:
            console.print("[red]Conversion failed![/red]")
            if result.has_errors:
                console.print("\n[red]Errors:[/red]")
                for error in result.errors or []:
                    console.print(f"  • {error}")

        raise typer.Exit(1)


@app.command()
def batch(
    input_dir: Path = typer.Argument(..., help="Directory containing CQL files"),
    output_dir: Optional[Path] = typer.Option(
        None, "--output-dir", "-o", help="Output directory for ELM files"
    ),
    pattern: str = typer.Option("*.cql", "--pattern", "-p", help="File pattern to match"),
    validation_level: ValidationLevel = typer.Option(
        ValidationLevel.NORMAL, "--validation", "-v", help="Validation strictness level"
    ),
    optimize: bool = typer.Option(True, "--optimize/--no-optimize", help="Enable ELM optimization"),
    format_output: bool = typer.Option(
        True, "--format/--no-format", help="Pretty-print JSON output"
    ),
    continue_on_error: bool = typer.Option(
        True,
        "--continue-on-error/--stop-on-error",
        help="Continue processing on errors",
    ),
    verbose: bool = typer.Option(False, "--verbose", help="Verbose output"),
) -> None:
    """Convert multiple CQL files in a directory."""

    if not input_dir.exists() or not input_dir.is_dir():
        console.print(f"[red]Error:[/red] Directory not found: {input_dir}")
        raise typer.Exit(1)

    # Find CQL files
    cql_files = list(input_dir.glob(pattern))
    if not cql_files:
        console.print(
            f"[yellow]Warning:[/yellow] No files matching pattern '{pattern}' found in {input_dir}"
        )
        raise typer.Exit(0)

    # Determine output directory
    if output_dir is None:
        output_dir = input_dir / "elm_output"

    output_dir.mkdir(exist_ok=True)

    if verbose:
        console.print(f"[blue]Found {len(cql_files)} CQL files to convert[/blue]")

    # Create converter
    converter = (
        CQLToELMConverter()
        .with_validation_level(validation_level)
        .with_optimization(optimize)
        .with_formatting(format_output)
    )

    # Process files with progress bar
    successful = 0
    failed = 0

    with Progress(console=console) as progress:
        task = progress.add_task("Converting files...", total=len(cql_files))

        for cql_file in cql_files:
            progress.update(task, description=f"Converting {cql_file.name}...")

            # Convert file
            result = converter.convert_file(cql_file)

            if result.success and result.get_elm_json():
                # Save to output directory
                elm_file = output_dir / f"{cql_file.stem}.elm.json"
                result.save_elm(elm_file)
                successful += 1

                if verbose:
                    console.print(f"[green]✓[/green] {cql_file.name} → {elm_file.name}")
            else:
                failed += 1
                console.print(f"[red]✗[/red] Failed to convert {cql_file.name}")

                if verbose and result.has_errors:
                    for error in result.errors or []:
                        console.print(f"    {error}")

                if not continue_on_error:
                    console.print("[red]Stopping on first error[/red]")
                    break

            progress.advance(task)

    # Summary
    summary_table = Table(title="Conversion Summary")
    summary_table.add_column("Status", style="bold")
    summary_table.add_column("Count", justify="right")

    summary_table.add_row("Successful", str(successful), style="green")
    summary_table.add_row("Failed", str(failed), style="red")
    summary_table.add_row("Total", str(len(cql_files)), style="blue")

    console.print(summary_table)

    if failed > 0 and not continue_on_error:
        raise typer.Exit(1)


@app.command()
def validate(
    input_file: Path = typer.Argument(..., help="CQL file to validate"),
    validation_level: ValidationLevel = typer.Option(
        ValidationLevel.STRICT, "--validation", "-v", help="Validation strictness level"
    ),
    verbose: bool = typer.Option(False, "--verbose", help="Verbose output"),
) -> None:
    """Validate a CQL file without generating ELM output."""

    if not input_file.exists():
        console.print(f"[red]Error:[/red] File not found: {input_file}")
        raise typer.Exit(1)

    if verbose:
        console.print(f"[blue]Validating:[/blue] {input_file}")

    # Create converter for validation only
    converter = CQLToELMConverter().with_validation_level(validation_level)

    with Progress(
        SpinnerColumn(),
        TextColumn("[progress.description]{task.description}"),
        console=console,
        transient=True,
    ) as progress:
        progress.add_task("Validating CQL...", total=None)
        result = converter.convert_string(input_file.read_text(encoding="utf-8"))

    # Show results (validation only, no ELM generation)
    if not result.has_errors:
        console.print("[green]✓ Validation passed[/green]")

        if result.has_warnings:
            console.print("\n[yellow]Warnings:[/yellow]")
            for warning in result.warnings or []:
                console.print(f"  • {warning}")
    else:
        console.print("[red]✗ Validation failed[/red]")
        for error in result.errors or []:
            console.print(f"  • {error}")

        raise typer.Exit(1)


@app.command()
def version(
    plain: bool = typer.Option(False, "--plain", help="Plain text output"),
) -> None:
    """Show version information."""
    from cql_flow import __version__

    if plain or USE_PLAIN_TEXT:
        print(f"cql-flow version {__version__}")
    else:
        console.print(f"cql-flow version {__version__}")


if __name__ == "__main__":
    app()
