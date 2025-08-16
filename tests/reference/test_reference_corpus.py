import base64
import json
import os
from pathlib import Path
from typing import Any, Dict, Iterable, List, Set, Tuple, cast

import pytest

from cql_flow.api import convert_cql_file

# Built-in test corpus directory plus optional external corpus from env var
CORPUS_DIR = Path(__file__).parent / "corpus"
EXTERNAL_CORPUS = os.environ.get("CQL_FLOW_REFERENCE_CORPUS_DIR")
CORPUS_DIRS: List[Path] = [CORPUS_DIR]
if EXTERNAL_CORPUS:
    CORPUS_DIRS.append(Path(EXTERNAL_CORPUS))

# Some public corpora depend on features we don't support yet (e.g., custom functions
# or code/codesystem declarations). Keep the files for future coverage but skip them
# in the signature-matching test for now.
# Enable all built-in corpora; keep this set for future selective skips if needed.
SKIP_CORPUS_NAMES: Set[str] = set()


def _iter_pairs() -> List[Tuple[Path, Path]]:
    pairs: List[Tuple[Path, Path]] = []
    for root in CORPUS_DIRS:
        if not root.exists():
            continue
        # Expect pairs: <name>.cql and <name>.json (ELM), or <name>.cql and <name>.fhir.json (FHIR Library)
        cql_files = sorted(root.glob("*.cql"))
        for cql_path in cql_files:
            base = cql_path.stem
            if base in SKIP_CORPUS_NAMES:
                continue
            json_path = cql_path.with_suffix(".json")
            fhir_path = cql_path.with_suffix(".fhir.json")
            if json_path.exists():
                pairs.append((cql_path, json_path))
            elif fhir_path.exists():
                pairs.append((cql_path, fhir_path))
    return pairs


def _load_expected_elm(elm_path: Path) -> Dict[str, Any]:
    if elm_path.suffix == ".json":
        data = json.loads(elm_path.read_text(encoding="utf-8"))
        return cast(Dict[str, Any], data)
    # FHIR Library JSON with content.data base64-encoded ELM
    data_any = json.loads(elm_path.read_text(encoding="utf-8"))
    data_dict = cast(Dict[str, Any], data_any)
    contents_any = data_dict.get("content", [])
    contents = cast(List[Dict[str, Any]], contents_any)
    for item in contents:
        ctype = str(item.get("contentType", ""))
        if ctype.endswith("json") and "data" in item:
            encoded = cast(str, item["data"])  # base64 string
            decoded = base64.b64decode(encoded).decode("utf-8")
            decoded_json = json.loads(decoded)
            return cast(Dict[str, Any], decoded_json)
    raise ValueError("No ELM JSON found in FHIR Library content")


def _query_signature(elm_json: Dict[str, Any]) -> Dict[str, Any]:
    """Extract a shallow, stable signature for Query expressions.

    We focus on counts and presence of key query parts rather than exact shapes to avoid
    incidental differences across toolchains while asserting core semantics.
    """
    lib = cast(Dict[str, Any], elm_json.get("library", {}))
    statements = cast(Dict[str, Any], lib.get("statements", {}))
    defs = cast(List[Dict[str, Any]], statements.get("def", []))
    sig: Dict[str, Any] = {"defs": []}
    for d in defs:
        expr = cast(Dict[str, Any], d.get("expression", {}))
        if expr.get("type") == "Query":
            sources = cast(List[Dict[str, Any]], expr.get("source", []) or [])
            sort = cast(Dict[str, Any], expr.get("sort") or {})
            by = cast(List[Dict[str, Any]], sort.get("by") or [])
            relationships = cast(List[Dict[str, Any]], expr.get("relationship") or [])
            let_bindings = cast(List[Dict[str, Any]], expr.get("let") or [])
            aggregate = expr.get("aggregate")
            sig["defs"].append(
                {
                    "type": "Query",
                    "sources": [s.get("alias") for s in sources],
                    "hasWhere": bool(expr.get("where")),
                    "letCount": len(let_bindings),
                    "relKinds": [r.get("type") for r in relationships],
                    "hasAggregate": bool(aggregate),
                    "sortItems": [item.get("direction", "asc").lower() for item in by],
                    "hasReturn": bool(expr.get("return")),
                }
            )
    return sig


def _has_any_corpus() -> bool:
    def _any_iter(iterable: Iterable[object]) -> bool:
        for _ in iterable:
            return True
        return False

    return any(root.exists() and _any_iter(root.glob("*.cql")) for root in CORPUS_DIRS)


@pytest.mark.skipif(not _has_any_corpus(), reason="no reference corpus present")
@pytest.mark.parametrize("cql_path,elm_path", _iter_pairs())
def test_reference_corpus_queries_match_signature(cql_path: Path, elm_path: Path):
    # Convert with our pipeline
    result = convert_cql_file(str(cql_path))
    assert result.success, f"Conversion failed: {result.errors}"
    actual_elm = json.loads(result.get_elm_json() or "{}")

    # Load expected ELM
    expected_elm = _load_expected_elm(elm_path)

    # Compare normalized query signatures
    a_sig = _query_signature(actual_elm)
    e_sig = _query_signature(expected_elm)
    assert a_sig == e_sig
