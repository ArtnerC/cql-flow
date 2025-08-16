# Reference Corpus Tests

This folder contains a harness to validate our CQL->ELM conversion against authoritative, public corpora
such as HL7 cqframework translator fixtures and CMS eCQM content.

How to use

- Place corpus files under `tests/reference/corpus/` as pairs of:
  - `<name>.cql` (source CQL)
  - `<name>.json` (ELM JSON)
- Alternatively, you can provide FHIR `Library` JSON with embedded ELM JSON in `content.data` (base64).

Licensing

- Only place content with a permissive license (e.g., Apache-2.0 from cqframework). Keep attribution.
- Do not commit copyrighted content without explicit permission.

Running

- The tests auto-skip if no corpus is present. To run:
  - `uv run pytest tests/reference -v`
- Optional: include an external, uncommitted corpus directory by setting an environment variable:
  - PowerShell:
    - `$env:CQL_FLOW_REFERENCE_CORPUS_DIR = "C:\\path\\to\\corpus"`
  - cmd.exe:
    - `set CQL_FLOW_REFERENCE_CORPUS_DIR=C:\\path\\to\\corpus`
  The harness will search both `tests/reference/corpus` and the external path.

Comparison approach

- We compare normalized “query signatures” rather than byte-for-byte ELM, focusing on:
  - count and aliases of sources, presence of where, let count, relationship kinds, aggregate presence,
    sort item count and directions.
- This avoids incidental differences while asserting core semantics for Query Phase 1–2.
