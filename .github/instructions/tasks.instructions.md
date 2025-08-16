# Development Tasks (Active Only)

This file tracks only active, actionable tasks. Completed items have been removed as requested.

## DOC-001: Documentation Refresh (README + Sphinx landing)
- Update Python version references to 3.12+.
- Remove stale metrics (specific test counts/percentages); prefer timeless phrasing.
- Ensure CLI plain-mode guidance is prominent for Windows/CI.
- Fix minor Sphinx toctree formatting issues and include the ELM JSON page.

Acceptance Criteria:
- README reflects Python 3.12+ and links to LLM reference.
- docs/index.rst builds without toctree warnings and shows updated feature bullets.

## DOC-002: LLM Single-File Reference
- Create `llms.md` at repository root with:
	- What this package does and where it fits.
	- Public API summary (CQLToELMConverter methods and result shapes).
	- Minimal Python examples (string, file, batch) and CLI examples (with plain mode).
	- JSON output shape pointers (link to docs/elm_json.rst) and error handling.
	- Tips for deterministic, concise outputs in LLM contexts.

Acceptance Criteria:
- `llms.md` exists, is concise, and references stable APIs.
- README links to it in a "LLM quick reference" section.

## QA-KEEP: CI Hygiene (Ongoing)
- Keep format, lint, typecheck, tests green via `ci:check`.
- No code changes required for this doc update; run checks opportunistically.
