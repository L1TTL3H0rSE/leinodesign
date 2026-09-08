# Paired screen trial — protocol fixed before execution

Date: 2026-09-08. Baseline repository: 79bb439bd700b1ac5b332f4c42a5896568e7a761.
Question: does adding LeinoDesign improve the output and reduce corrections over the installed Figma workflow on the same task?

Two fresh-context agents inherit the same model and reasoning settings. Both receive the exact brief, equal independently seeded Figma files, the same tool access and standard installed Figma skills. One additionally reads the pinned LeinoDesign skill. No Haulplane history, previous trial conclusions, expected answer, other run, or evaluator checklist is supplied. Trial-specific code and evidence remain in assigned directories. Agents cannot inspect the sibling run. No model override. The root is aware of allocation; this is not a double-blind study. The user sees neutral labels first. A single pair is exploratory, not a reliable effect estimate.

## Stages

1. Root/seed preparer creates and verifies identical starter libraries, excluding generated IDs from comparison. Preparation cost is recorded separately.
2. Fresh agents complete the same initial product request. Root records dispatch/completion timestamps and examines saved output. No design feedback is delivered during this stage; blocking tool assistance is logged.
3. Freeze initial screenshots, node inventory, texts, component links and author self-report before the change request is delivered.
4. Send the identical change request below, once both initial results are frozen. Record change effort separately.
5. Root inspects final screenshots at meaningful scale, reads actual nodes, exercises one ordinary edit and restores it. Separate author self-checks from root discoveries. Preserve initial evidence before any fixes. Any corrections sent to authors are counted and described.
6. Present neutral A/B artifacts to the user for visual/product judgment. User judgment and number of their corrections stay unknown until received. Do not substitute root preference for the user.

## Equal change request (withheld during stage 2)

Rename the shared main navigation item "Материалы" to "Библиотека" wherever the navigation is shown. Add a new material type "Заметка" with one entry: "Наблюдения после вечерней прогулки", author "Анна Морозова", updated "8 сентября 2026", description "На двух перекрёстках участникам не хватало времени перейти дорогу. Проверить длительность зелёного сигнала перед следующей прогулкой." This is an in-app note; do not invent a PDF file, file size or download action for it. It should be possible to open and read this note. Keep existing PDF content and the original 1280 px layouts. Add a compact 760 px version of the main list. Change ONLY the original PDF "Городские прогулки" to "Городские прогулки: маршруты для родителей с маленькими детьми" consistently in its list, detail and edit states. Other material titles must remain unchanged. Keep the result editable. Save the before/after evidence and finish the revision.

## Root review criteria

Product: four exact initial records, useful metadata, list→detail→edit affordances; description and file action fit the selected record; empty search recovery; field error paired with invalid title and preserves description. No designer/evaluation notes in product frames. Final: shared nav rename, exact new note semantics, 760 list reads without truncation/overlap, original PDF content intact, one intended material rename across appropriate states.

Visual: task hierarchy, readability at final dimensions, grouping, spacing, long text, empty/error messaging, glyph placement, contextual clipping. Record concrete node/screenshot evidence; use defects rather than subjective numerical scores.

Editing: public text changes work; navigation repetition supports the actual common edit; local changes preserve other records; source component links where suitable. No component-instance ratio target. Root captures exact before/after and restored values. Reading a tree alone is not a live-edit test.

Effort: elapsed wall-clock per stage (includes tools and scheduling; not human work or pure model compute), self-reported corrected defects with evidence, tool failures, root-supplied corrections and user-supplied corrections separately. Token/cost measurements only if actual per-run telemetry is available; otherwise unknown. No estimated savings.

Success is not defined by which condition wins. A tie, baseline win or inconclusive result is informative. Only demonstrated general failures justify a narrow skill update; do not tune the skill to this one brief. Never alter the pinned input after dispatch.
