import hashlib
import json
from pathlib import Path

root = Path(__file__).resolve().parent
def normalized(raw):
    variables = {v["id"]: v["name"] for v in raw["variables"]}
    styles = {s["id"]: s["name"] for s in raw["styles"]}
    def walk(value, key=None):
        if isinstance(value, list):
            return [walk(item) for item in value]
        if isinstance(value, dict):
            if value.get("type") == "VARIABLE_ALIAS":
                return {"type": "VARIABLE_ALIAS", "name": variables[value["id"]]}
            return {k.split("#")[0]: walk(v, k) for k, v in sorted(value.items())
                    if k not in ("id", "modeId", "defaultModeId")}
        if isinstance(value, str):
            return styles.get(value, value) if key == "textStyleId" else value.split("#")[0]
        return value
    return walk(raw)

manifests = [json.loads((root / f"file0{i}-manifest.json").read_text(encoding="utf-8-sig")) for i in (1, 2)]
signatures = [json.dumps(normalized(m["raw"]), sort_keys=True, separators=(",", ":")) for m in manifests]
assert signatures[0] == signatures[1], "Seed signatures differ"
assert all(m["counts"] == {"components": 4, "variables": 11, "styles": 3, "workChildren": 0} for m in manifests)
print("Exact normalized equality: PASS")
print("SHA256:", hashlib.sha256(signatures[0].encode()).hexdigest())

