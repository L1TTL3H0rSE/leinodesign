# Полка — product revision

Start UTC: 2026-09-08 00:27:40 UTC
End UTC: 2026-09-08 00:34:15 UTC
File: P8wYRWbq7NR1v3KZDt6anF

## Delivered states
| State | ID | Size | Link |
|---|---|---|---|
| Main list | 10:2 | 1280 × 768 | https://www.figma.com/design/P8wYRWbq7NR1v3KZDt6anF?node-id=10-2 |
| Compact list | 15:108 | 760 × 776 | https://www.figma.com/design/P8wYRWbq7NR1v3KZDt6anF?node-id=15-108 |
| Note reading | 15:85 | 1280 × 380 | https://www.figma.com/design/P8wYRWbq7NR1v3KZDt6anF?node-id=15-85 |
| PDF detail | 10:54 | 1280 × 544 | https://www.figma.com/design/P8wYRWbq7NR1v3KZDt6anF?node-id=10-54 |
| PDF edit | 10:76 | 520 × 452 | https://www.figma.com/design/P8wYRWbq7NR1v3KZDt6anF?node-id=10-76 |
| Empty search | 10:101 | 1280 × 536 | https://www.figma.com/design/P8wYRWbq7NR1v3KZDt6anF?node-id=10-101 |
| Edit validation error | 10:127 | 520 × 460 | https://www.figma.com/design/P8wYRWbq7NR1v3KZDt6anF?node-id=10-127 |

## Changes and exact scope
Shared NavItem master3:8 default changed to Библиотека. All5 Work-page navigation instances read back as Библиотека. Main page headings remain Материалы because the request renamed navigation.

The note is the newest first row in both lists: Наблюдения после вечерней прогулки; Анна Морозова;8 сентября2026; typeЗаметка. Exact supplied description is in reading view15:85. No PDF, size, filename, download or edit action appears in the note. Note rows link to its reading view using native prototype navigation; cloned existing back/navigation links return to main list.

Only the original PDF material title changed to Городские прогулки: маршруты для родителей с маленькими детьми in both lists, detail heading and filled edit field. Error state deliberately keeps its title field empty; correcting it routes to the revised filled edit state. Original PDF description, author/date, file size and existing filename Городские прогулки.pdf remain unchanged. The other3 existing material titles remain byte-identical to the brief.

All rows in both lists remain linked instances of MaterialRow10:19. The existing text-property contract accepts a note type without creating variants or fake file data. The row master default example was updated to the longer PDF title; unrelated instance overrides were preserved. The compact list changes parent width/padding and instance widths, with unchanged master width. No detach, broad component scaffold, publishing or code counterpart.

## Evidence and checks
before.json and after.json outer AND inner tool-content JSON were successfully parsed. before-*.png preserve the five original screenshots; the original initial directory was not edited. initial-hashes-before.json and initial-hashes-after.json match for all18 frozen files.

operations.json records10 use_figma calls after the before capture, including the read-only validation failure and its corrected retry. One baseline capture also occurred; all-use_figma revision count11. Total tool-call count across tool types: unknown, not estimated. Code strings and actual results are preserved, not reconstructed.

Actual values verified: expected five-title arrays in each list; all navigation labels;1280/760 widths; filled edit title; empty error title; exact note/PDF description preservation; note has no PDF/size/download strings; compact rows link to the same master. The title check accepted actual values, rejected a deliberately wrong third title in an in-memory copied array with reason "material titles differ", then confirmed unchanged actual values. No artificial defect was written into Figma.

Saved and opened from disk: list.png, compact.png, note.png, detail.png, modal.png, empty.png, error.png. At760px long titles wrap to two lines, author/date remain legible and Open buttons stay in the row. At520px the new PDF title wraps to two lines and increases modal height naturally. Note content fits its short reading view. All seven final screenshots were author-reviewed; no user acceptance claim.

## Self-corrections
1. First note screenshot visibly clipped the title after removing the neighboring edit button. Read-back showed textAutoResize NONE and fixed20px height while Heading line height was32px. Set textAutoResize HEIGHT and vertical HUG on both note/PDF detail headings, confirmed32px and reviewed replacement screenshots. Diagnostic values are in operations.json; the first clipped screenshot was observed inline but not saved as a local PNG.
2. Read-only assertion script used a loop variable named list that shadowed its initializer and threw "ReferenceError: list is not initialized". No canvas mutation. Renamed loop variable root and reran successfully. This runtime failure is not counted as a design-defect detection.
3. Removed the repeated Заметка subsection heading because type already appears in the metadata; exact note description unchanged.

## Remaining limits
Native prototype reactions are wired/read back, including note open from both list widths and existing back links. Prototype-player click execution, keyboard/focus behavior, free search/edit input, actual PDF opening and frontend implementation: not run. Note read-back is real editable Figma text, not a screenshot. PDF action remains as originally present; no file URL was invented. Other3 PDF reading destinations remain outside the supplied scenario.

