"""
Fetch additional public CQL/ELM pairs from cqframework/clinical_quality_language Examples
and vendor them into tests/reference/corpus.

This script:
- Lists the Examples directory via GitHub API
- Finds basenames that have both .cql and .json
- Skips any already present locally and known already-downloaded ones
- Downloads up to N pairs (default 3)

Run:
  uv run python scripts/fetch_cqframework_examples.py --max 3
"""
from __future__ import annotations

import argparse
import os
from pathlib import Path
import sys
import urllib.request
import json
from typing import Dict, List, Any


GITHUB_API = "https://api.github.com/repos/cqframework/clinical_quality_language/contents/Examples"
RAW_BASE = (
    "https://raw.githubusercontent.com/cqframework/clinical_quality_language/master/Examples/"
)

CORPUS_DIR = Path(__file__).resolve().parents[1] / "tests" / "reference" / "corpus"


def http_get_json(url: str) -> List[Dict[str, Any]]:
    req = urllib.request.Request(url, headers={"User-Agent": "elm-flow/1.0"})
    with urllib.request.urlopen(req) as resp:  # nosec - public GitHub API
        data = json.load(resp)
        return data  # type: ignore[return-value]


def http_download(url: str, out: Path) -> None:
    out.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": "elm-flow/1.0"})
    with urllib.request.urlopen(req) as resp:  # nosec - public raw content
        out.write_bytes(resp.read())


def _list_files_recursive(api_url: str, rel_prefix: str = "") -> List[str]:
    """Return list of file paths (relative to Examples/) using GitHub API recursively."""
    results: List[str] = []
    entries = http_get_json(api_url)
    for e in entries:
        etype = e.get("type")
        name = str(e.get("name", ""))
        if etype == "dir":
            url = str(e.get("url"))
            sub_prefix = f"{rel_prefix}{name}/"
            results.extend(_list_files_recursive(url, sub_prefix))
        elif etype == "file":
            results.append(f"{rel_prefix}{name}")
    return results


def _flatten_name(rel_path: str) -> str:
    """Flatten a relative path like 'Folder/Sub/File.cql' to 'Folder__Sub__File'."""
    if rel_path.endswith(".cql"):
        rel_path = rel_path[:-4]
    if rel_path.endswith(".json"):
        rel_path = rel_path[:-5]
    return rel_path.replace("/", "__").replace("\\", "__")


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--max", type=int, default=3, help="Max pairs to download")
    args = parser.parse_args(argv)

    # Build a mapping of pairs by directory-relative base names
    files = _list_files_recursive(GITHUB_API)
    have: Dict[str, Dict[str, bool]] = {}
    for rel in files:
        if not (rel.endswith(".cql") or rel.endswith(".json")):
            continue
        base, ext = os.path.splitext(rel)
        m = have.setdefault(base, {"cql": False, "json": False})
        if ext == ".cql":
            m["cql"] = True
        elif ext == ".json":
            m["json"] = True

    # Pairs available
    pairs: List[str] = [b for b, flags in have.items() if flags["cql"] and flags["json"]]

    # Skip known already-downloaded examples
    exclude: set[str] = {"ChlamydiaScreening_Common", "ChlamydiaScreening_CDS_UsingCommon"}

    # Also skip any that already exist locally
    todo: List[str] = []
    for base in pairs:
        flat = _flatten_name(base)
        if base in exclude:
            continue
        cql_path = CORPUS_DIR / f"{flat}.cql"
        json_path = CORPUS_DIR / f"{flat}.json"
        if cql_path.exists() or json_path.exists():
            continue
        todo.append(base)
        if len(todo) >= args.max:
            break

    if not todo:
        print("No new pairs to download.")
        return 0

    print("Downloading:", ", ".join(todo))
    for base in todo:
        flat = _flatten_name(base)
        http_download(RAW_BASE + base + ".cql", CORPUS_DIR / f"{flat}.cql")
        http_download(RAW_BASE + base + ".json", CORPUS_DIR / f"{flat}.json")

    print("Done. Files in corpus:")
    for p in sorted(CORPUS_DIR.iterdir()):
        print(p.name)

    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
