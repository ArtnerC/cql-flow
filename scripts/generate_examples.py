"""
Generate example ELM files for documentation.
"""

import json
from pathlib import Path


def create_simple_example_elm():
    """Create a simple ELM example manually for documentation."""

    elm_json = {
        "library": {
            "identifier": {"id": "SimpleExample", "version": "1.0.0"},
            "schemaIdentifier": {"id": "urn:hl7-org:elm", "version": "r1"},
            "usings": {
                "def": [
                    {"localIdentifier": "System", "uri": "urn:hl7-org:elm-types:r1"},
                    {
                        "localIdentifier": "FHIR",
                        "uri": "http://hl7.org/fhir",
                        "version": "4.0.1",
                    },
                ]
            },
            "statements": {
                "def": [
                    {"name": "Patient", "context": "Patient"},
                    {
                        "name": "Hello",
                        "context": "Patient",
                        "expression": {
                            "valueType": "{urn:hl7-org:elm-types:r1}String",
                            "value": "World",
                            "type": "Literal",
                        },
                    },
                    {
                        "name": "CurrentDate",
                        "context": "Patient",
                        "expression": {"type": "Today"},
                    },
                ]
            },
        }
    }

    return elm_json


def main():
    """Generate example ELM files."""

    # Create output directory
    output_dir = Path("examples/elm")
    output_dir.mkdir(exist_ok=True)

    # Generate simple example
    elm_json = create_simple_example_elm()

    output_file = output_dir / "SimpleExample.json"
    with open(output_file, "w") as f:
        json.dump(elm_json, f, indent=2)

    print(f"Generated: {output_file}")


if __name__ == "__main__":
    main()


if __name__ == "__main__":
    main()
