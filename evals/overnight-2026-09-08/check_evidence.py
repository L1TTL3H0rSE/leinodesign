"""Verify retained evidence bytes; this does not replay Figma or the browser."""
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
RUNS = ("desk01", "desk02", "mobile01", "mobile02")


def read(path):
    return json.loads(path.read_text(encoding="utf-8-sig"))


def check_files(files, base):
    assert files, "empty evidence set"
    for name, expected in files.items():
        actual = hashlib.sha256((base / name).read_bytes()).hexdigest()
        assert actual == expected, f"hash mismatch: {name}"


def check_edit(record):
    before, changed, restored = (record[k] for k in ("before", "changed", "restored"))
    assert before == restored, "edit not restored"
    assert len(before["consumers"]) >= 2, "missing consumers"
    assert changed["master"]["paddingTop"] == before["master"]["paddingTop"] + 4, "master not changed"
    for old, new in zip(before["consumers"], changed["consumers"], strict=True):
        assert old["id"] == new["id"]
        assert new["paddingTop"] == changed["master"]["paddingTop"], "master did not propagate"
    assert before["consumers"][0]["props"] != changed["consumers"][0]["props"], "no local edit"
    assert before["consumers"][1]["props"] == changed["consumers"][1]["props"], "sibling override changed"


if __name__ == "__main__":
    total = 0
    for run in RUNS:
        for stage in ("initial", "revision"):
            files = read(ROOT / f"{run}-{stage}-freeze.json")["files"]
            check_files(files, ROOT)
            total += len(files)
    allocation = read(ROOT / "allocation.json")
    check_files({"protocol.md": allocation["protocol_sha256"]}, ROOT)
    check_files(allocation["briefs"], ROOT.parents[1])
    check_files(allocation["change_requests"], ROOT.parents[1])
    check_files(allocation["input_skill"], ROOT.parents[1])
    for run in RUNS:
        check_edit(read(ROOT / "root-review" / f"{run}-edit.json"))
    bad_edit = read(ROOT / "root-review" / "desk01-edit.json")
    bad_edit["restored"]["master"]["paddingTop"] = 99
    try:
        check_edit(bad_edit)
    except AssertionError as exc:
        assert str(exc) == "edit not restored"
    else:
        raise AssertionError("unrestored edit accepted")
    good = read(ROOT / "desk01-initial-freeze.json")["files"]
    bad = good.copy()
    name = next(iter(bad))
    bad[name] = "0" * 64
    for fixture, expected_error in ((bad, f"hash mismatch: {name}"), ({}, "empty evidence set")):
        try:
            check_files(fixture, ROOT)
        except AssertionError as exc:
            assert str(exc) == expected_error
        else:
            raise AssertionError("negative control was accepted")
    print(f"PASS: {total} frozen files; pinned inputs and unchanged skill; 4 edit probes; bad hash, empty set and unrestored edit rejected")
