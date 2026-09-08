# Coordinator record

- The two initial agents prepared the brief and required skills before the seed was ready, without inspecting its partial state. Timing of preparation is separate from the initial execution.
- Seed equality was checked by the preparer and rerun by root. The final seed PNGs are byte-identical; root visually inspected the complete starter including TextField. Four components, 11 variables, three text styles and an empty Work page per file.
- Root's A start message accidentally joined the word `file` to its file key. A attempted read-only inspection with that invalid key and asked for clarification. Root confirmed the original correct key. This is a coordinator input correction, not an agent design defect. A's elapsed time includes this interruption; timing cannot be treated as a clean model speed comparison.
- During setup root omitted the required `description` field on one read-only Figma tool call, then corrected the invocation. This belongs to preparation, not either designer's score.
- There were no product-design hints or reviewer corrections supplied before initial completion.
- After initial freezing root found that A/initial/final-inventory.json is valid outer JSON but its tool content contains truncated, invalid inner JSON (unterminated string near character 19796). The frozen file is preserved as received; it cannot support a complete machine-readable initial inventory. Initial screenshots remain usable. B's compact inner inventory parses. Both agents received the same procedural reminder to validate the inner revision payload and use smaller chunks; no design answer was supplied.
- Root checked Figma access in a temporary in-app browser tab. The file displayed a sign-up/login wall, so no interactive browser walkthrough was possible with that session. The tab was closed. Figma MCP remains available for native edits, screenshots and reaction-graph inspection; those are distinct from a browser-tested prototype. No credentials or sharing settings were changed.

Allocation is in `allocation.json`. Neutral labels in the user-facing comparison provide a first-look preference exercise; the allocation is not cryptographically hidden from someone inspecting the repository or tool logs.

- The in-app login limitation was later resolved by using the already authenticated Chrome session. Root exercised both prototypes without changing authentication or sharing settings. Root's findings and B-only post-freeze corrections are recorded in results.md. The earlier in-app failure does not mean the later Chrome walkthrough was blocked.
- The user selected B from the initial screenshots, with no rationale or correction list. This was not disclosed to either design author during the measured revision.
- Root verified all four pinned skill-file hashes still matched allocation.json after both authors completed and before editing the skill references. The updated skill has not yet been tested by a fresh author.
- Evidence line endings are preserved using a scoped -text Git attribute; freeze hashes identify original bytes, including historical malformed inner payloads. Trailing blank lines in those preserved exports are not rewritten.
