# ReviewPanel forward trial — report

Status: working local Figma examples and scoped edit/resize/master preservation checks completed. Visual direction remains a proposal; the observations below are the trial author's. Root subsequently completed separate artifact inspection and a public consumer edit/restore, recorded in [../results.md](../results.md).

## Artifact
- File: https://www.figma.com/design/w9Pl9kkKD79ASwzqFBYNx6
- Page 0:1; master 3:9; context board 3:17; A 3:20; B 3:28.
- Final A: 360×370, short collection summary, circular close icon, visible action footer.
- Final B: 600×410, long title and three documents, fine close icon, footer hidden.
- final.png is the final 1080×524 board, downloaded and inspected.
- One local Light proposal collection, 16 scoped variables, four Inter text styles and one shadow style. Three compatible vector glyph masters support the real swap operation. No code, publication, paid API, remote-file mutation or installed skill changes.

## Contract and operations
Title#3:4 TEXT controls the actual title; Close icon#3:5 INSTANCE_SWAP controls the nested 20×20 vector instance inside a separate 44×44 close area. Body#3:7 and Footer#3:8 are native SLOT nodes, not named frames. Show footer#3:6 BOOLEAN controls the whole Footer slot. Body and Footer start empty; no default textual fallback is promised. Consumer content owns its 20px top separation (documented in master description); empty slots have no padding.

Consumer operation is direct slot composition on canvas/API, using arbitrary frames and text, and setting public text/swap/Boolean properties. No detach, per-content master or private-path text edit is required. Hidden slot traversal is omitted by this channel; API composition therefore occurs while the footer is visible, followed by the Boolean choice.

## Evidence and exact checks
Execution order is the numeric prefix of saved .js files; all executed Figma JavaScript is saved with literal known IDs. Matching *-result.json files retain raw non-sensitive operation outputs. Library discovery/search are 02/03 JSON. Screenshot JSON retains node IDs, dimensions and inspected local file names; short-lived asset URLs were removed after download.

| Operation | Actual evidence |
|---|---|
| Blank-file inspection | 01: page 0:1 empty, no variables/text styles; Inter styles enumerated |
| Empty default instances | 08/09 before; 10 correction: 100px empty slots become 0.01px each, A 104.02px and B 92.02px tall |
| A local title/icon/body composition | 11: A title “Городские прогулки”, icon main 2:26; beforeB == afterB |
| B independent title/icon/three-document body | 13: long Russian title, icon main 2:29; beforeA == afterA |
| Footer visibility and restoration | 14: A hides to 306px; B reveals “Начать обзор” and grows to 474px |
| Real resize of same instances | 15: A 360→600 reduces 370→326px; B 600→360 grows 410→508px; title wraps, close remains 44×44 |
| Compatible master change | 16 changes only master 3:9 radius token 16→20 and header 3:10 gap token 12→16; both actual instances read 20 and 16 afterward |
| Preservation | 16 before/after: exact properties, icon main IDs, slot child IDs and text IDs/strings retained; no consumer repair |
| Hidden footer survives master edit | 18 reveals same B Footer frame I3:28;3:16;6:115 and text I3:28;3:16;6:117 = “Начать обзор” |
| Final restored state | 19 restores A360/B600 and B footer hidden; checker checks final values, native slots, exact texts and row clipping false |

The checker also requires main component 3:9, actual INSTANCE types, exact Title/Close property values and actual glyph master IDs, expected Body reference, ordered expected body strings, 44px close target and title right edge <= close left edge. It compares body and visible footer IDs across the common change. It requires width-driven growth in the observed direction and exact final widths.

Run from this directory:
```powershell
python .\check_trial.py good
python .\check_trial.py bad
```
Good exits 0, bad exits 1 with exactly “a: local title lost”. The bad snapshot is an actual Figma edit (17), not just a hand-mutated JSON fixture: A title was cleared, read, then restored in 18. The good self-test specifically requires this failure reason and rejects accidental acceptance. Final 19 is checked too. Latest outputs: check-results-reviewed.json. Earlier check-results.json is retained as superseded evidence.

## Visual inspection
All ten saved PNGs were opened from disk:
- icon.png: actual ring/cross vector, centered in its 20px bounds.
- default-before.png: visibly excessive blank slots; default-fixed.png: collapsed empty default.
- b-failed-atomic.png: B stayed default after failed B composition.
- custom-before-master.png: short and long examples, distinct content and glyph choices.
- footer-toggle.png: real action footer appears, other footer disappears; shadow fix is visible.
- resized-before-master.png: long title wraps at 360, all three documents remain legible, close stays at header right.
- master-after.png: common shape/spacing update, content unchanged.
- restored-footer-after-master.png: B custom action preserved at 360.
- final.png: final 360/600 presentation, no visible overlaps or clipped shadows.

No keyboard/navigation, action execution, assistive technology or implementation accessibility tests were run; close and footer are design controls, not wired production behavior. No claim of WCAG compliance. No user study. No publication/import roundtrip or Code Connect.

## Failures, fixes, interventions
1. Construction error 06: minHeight=0 rejected. Exact tool message says use null. Corrected in 07; tool confirmed atomic failure/safe retry.
2. Empty SLOT Hug retained default height100. Observed numerically and in default-before.png. Corrected common slot baseline to supported 0.01px in 10, then observed shrink. Residual 0.02px across two empty slots is an API geometry limit, not exact zero.
3. Construction error 12: footer set hidden before type-based discovery, so append target undefined. Corrected 13 to populate while visible, then hide. Existing A/B preserved by atomic failure. This is a channel traversal limitation, not a failure of Boolean restoration.
4. Visual defect: row container clipped panel shadows. Corrected row.clipsContent=false in 14 and inspected the same board again. Board bottom padding alone (10) had not fixed the cause.
5. Download of default-fixed.png failed once with DNS resolution from Invoke-WebRequest. Retried with curl; file downloaded and inspected.
6. Root review intervention after initial checker run: bad mode unconditionally raised after check(), allowing a false-positive negative control. Removed unconditional failure; good mode now requires exact expected failure reason and fails on acceptance. Re-ran both modes. This issue was found by root, not independently by the trial agent.
7. Root requested artifact hygiene: replaced stored short-lived screenshot URLs with local PNG metadata. No change to the Figma design from that feedback.

## What LeinoDesign changed
It made the public consumer operations explicit before building. That led to native slots for open body/footer composition, a public icon swap, and keeping close outside replaceable content. It prevented encoding the two bodies as component variants or detached examples. It required real independent edits, opposite-width resize, common master mutation, and screenshots; those exposed the 100px empty slot and clipping defects which a tree-only check would miss. Its “owner of spacing” rule prompted explicit content-owned top separation so empty slots could collapse.

## Guidance usability and remaining ambiguities
No missing LeinoDesign instruction blocked completion. Exact API rules appropriately came from official Figma references; minHeight and hidden traversal were construction/channel issues, not evidence that LeinoDesign should grow an API cookbook.
- “Empty” can need a measured epsilon in this channel; reporting actual 0.01px is clearer than forcing a literal-zero PASS.
- Hidden nodes are absent even from ordinary children traversal here; an adapter note to reveal/read/restore hidden content when proving preservation could save a failed composition, but should remain channel-specific.
- The official figma-generate-library skill prescribes broad library scaffolding, approval phases, modes and codeSyntax. The explicit authorized small scope and absence of code took precedence; one page/mode and no fabricated codeSyntax were used. LeinoDesign’s scope restraint helped resolve this without routine approval requests.
- Consumer content-owned separation is explicit but requires the replacing consumer to respect it. A future general-purpose contract might centralize that spacing differently; that is not a demonstrated failure in this trial.
- Construction and consumer operations were performed by this one independent forward-test agent without author history; a separate consumer inspection is still for root to do. Do not infer non-author UX from my own run.

Stopped after final examples and local/resize/master tests. Figma mutation ownership is released to root.
