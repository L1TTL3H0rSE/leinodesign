"""Offline evidence checks, not a replay of Figma or browser behavior."""
import copy
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def read(name):
    return json.loads((ROOT / name).read_text(encoding="utf-8-sig"))


def check_edit(before, changed, restored, target):
    assert len(before["rows"]) == len(changed["rows"]) == 10, "ten consumers required"
    assert restored == before, "restoration differs"
    assert changed["master"]["gap"] == 20, "master gap differs"
    for old, new in zip(before["rows"], changed["rows"]):
        assert old["id"] == new["id"] and new["gap"] == 20, "propagation differs"
        expected = copy.deepcopy(old["props"])
        if old["id"] == target:
            key = next(k for k in expected if k.startswith("Title#"))
            expected[key]["value"] = "Проверка локального редактирования"
        assert new["props"] == expected, "override differs"


if __name__ == "__main__":
    count = 0
    for letter in ("A", "B"):
        for stage in ("initial", "revision"):
            files = read(f"{letter}-{stage}-freeze.json")["files"]
            assert files, "empty freeze"
            for name, digest in files.items():
                path = ROOT / name.replace("\\", "/")
                assert hashlib.sha256(path.read_bytes()).hexdigest() == digest, name
                count += 1
        before, changed, restored = [read(f"root-{letter}-{s}.json") for s in ("before", "changed", "restored")]
        target = {"A": "9:38", "B": "10:26"}[letter]
        check_edit(before, changed, restored, target)
        bad = copy.deepcopy(changed)
        bad["rows"][0]["gap"] = 16
        try:
            check_edit(before, bad, restored, target)
        except AssertionError as exc:
            assert str(exc) == "propagation differs"
        else:
            raise AssertionError("missed induced propagation defect")
    for letter, should_parse in (("A", False), ("B", True)):
        payload = read(f"{letter}/initial/final-inventory.json")["content"][0]["text"]
        try:
            json.loads(payload)
            parsed = True
        except json.JSONDecodeError:
            parsed = False
        assert parsed == should_parse, f"unexpected {letter} initial payload status"
    print(f"PASS: {count} frozen files; both edit probes; induced bad controls; known inner-JSON defect distinguished")
