# Смена — revision completed

UTC start: 2026-09-08 01:30:51 UTC  
UTC end: 2026-09-08 01:46:09 UTC

Figma: https://www.figma.com/design/syIgLpxmKDpU4XKFYJcrMK  
Page: 0:1. Native editable nodes, components, text, variables and prototype reactions. The initial evidence folder was left unchanged. No commits, application code, publication or other Figma files.

## Changes

- Queue section now reads «Очередь» at both widths.
- Only SD-1042 has priority «Критический» and subject «Отчёт по всем филиалам за август не формируется — требуется выгрузка до 12:00».
- Saved defaults remain Елена Волкова, Новое, 09:48. Original description remains exact in all ten detail/assignment states.
- Filter «Высокий и критический  2» includes SD-1042 and SD-1040. Other five requests retain their original data.
- All 1440 px states retained. Added native 1024 px filtered/all queues and corresponding overlay flow. Both sizes use shared assignment variables. Closing an overlay preserves the originating queue and filter.

## Final nodes

| State | 1440 px | 1024 px |
|---|---|---|
| All queue | 5:31 | 26:198 |
| Filtered queue | 8:69 | 23:163 |
| Detail | 10:70 | 24:180 |
| Assignee chooser | 12:72 | 24:211 |
| Pending Elena | 12:111 | 24:247 |
| Pending Maxim | 12:150 | 24:285 |
| Saved confirmation | 12:189 | 24:323 |

Static saved reference: 20:110. Compact row master: 25:198. Compact component edit evidence frame: 29:248.

Flow starts: 5:31 «Смена — 1440» and 23:163 «Смена — 1024, срочная очередь».

## Verification and evidence

- `verification.json`: exact row comparison for all four queues; expected counts 6/2/2/6; exact subject, priority, status and description in all ten panel states; shared defaults; every navigation destination has matching viewport width. PASS.
- Comparator sensitivity: synthetic alteration of SD-1040 priority was rejected. It was only test data, never written to Figma.
- `edit-check.json` and `compact-edit-*.png`: two independent compact row instances preserve distinct text overrides while a master padding change propagates to both. Master restored afterward.
- `before-*.png` and `before.json`: fresh pre-revision captures. `after-*.png`: final exports of every modified product state and saved reference. Final all-queue and chooser exports were opened and visually inspected.
- `player-01` through `player-08`: real Chrome prototype verification at 1024 px: filtered queue → detail → choose Maxim → cancel → choose Elena → save → return to same filter → all queue → detail → return to all queue. Cancellation retains Elena. No viewport/window resizing was used.
- `player-09-detail1440.png`: real 1440 px detail. Also exercised all→detail→close and filter→detail→close; both retained their context.

## Self-corrections and limits

- Resizing text children inside an instance did not persist. Created a dedicated compact row master with the same eight text properties, then applied compact instances. Visual readback shows all fields and full topic at 1024 px.
- Cloning a flow-start frame also copied its flow start; explicitly reduced the page to the two intended starts.
- Description text acquired an automatic node name, causing the first verification selector to miss it. Corrected the selector to the description parent and reran successfully.
- Large initial readback was truncated; replaced it with bounded targeted evidence. Intermittent screenshot-download DNS failures were retried; all expected final exports are saved.
- Assignment time is a fixed prototype value (09:48), with latest-assignment history rather than a persistent backend log. The 1024 and 1440 layouts are separate native frame families connected to shared variables.

Ownership of the completed Figma file is returned to the parent task. No further changes pending.
