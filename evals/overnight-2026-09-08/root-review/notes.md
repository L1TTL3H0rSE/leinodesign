# Independent review notes

## mobile01 initial, after freeze

Root used own Chrome tab 1844150319, no viewport resize. Start 4:27 → choose
18:00 (4:29) → contacts 4:31 → review 4:34 → change time → 4:29. Contact and
review summaries display 18:00, return selects 18:00. Saved CUA screenshots
`mobile01-initial-18-{contacts,review,return}.png` were opened from disk and
visually accepted. Immediate captures during transitions were rejected; the
stable captures are retained. This covers a branch the author had read back
but not fully exercised in the player. No Figma file mutation or design feedback
was supplied; this is independent initial-stage evidence, not revision proof.

## Desktop revisions, after freeze

Root used the same private review tab, no viewport resize. Stable retained
screenshots were opened from disk. Both compact flows passed: open from high/
critical filter, select Maxim, cancel (Elena retained), reopen, select and save
Maxim, close (two-row filter retained), switch to all six rows, open and close
the same request (all-queue context retained). desk02 URL path:
19:684 → 19:1244 → 20:528 → 20:647 → 19:1244 → 20:528 → 20:647 →
19:1360 → 19:768 → 19:520 → 19:1048 → 19:520. desk01 uses the
23:163/26:198 queue frames and 24:180/211/285/323 overlay family; the
overlay path was verified visually because the underlying URL remains the queue.

`desk0*-{cancel,filter-saved,all-return}.png` retain these independent observations.
Both show the new exact subject, critical priority and intact description.
Root native readback (`desk0*-native.json`) confirms 1024/1440 widths, 2/6
row data, saved Elena defaults, original description and other five requests.
Large reads including repeated token bindings exceeded response size and were
rejected by inner-JSON parsing; smaller text-only reads above succeeded.

`desk0*-edit.json` records actual temporary local TEXT edits and master
paddingTop 0→4→0, read back on two existing product consumers. Both passed
propagation, independent override and exact restoration (including bindings and
geometry). desk01 boundary: compact table row, subject property. desk02 boundary:
secondary button, label property. This does not prove row reusability for desk02,
whose rows are ordinary frames. All temporary edits were restored.

No permanent desktop design corrections were needed in these checked paths.
The two layouts have different heights (900/1040 at 1024), so player fit scaling
differs. Compare exports at native width for typography; do not score player
apparent font size as a design difference.

Both 1440 starts were also opened in Chrome and captured in `desk0*-1440-start.png`:
six rows, exact revised subject, critical priority, saved Elena, no visible clipping.
The full interaction replays above are at 1024; author reports cover their 1440 paths.

## mobile01 revision, after freeze

Root replayed phone invalid/recovery: 4:27 → 4:31 → 4:32 → 4:33 → 4:31 → 4:34.
The first error capture repainted only part of the screen; direct reload of 4:33
produced `mobile01-error-reloaded.png`, accepted at full height. Reload resets the
runtime time to the default 18:00; this capture is error-state evidence, not an
uninterrupted 16:00 path. The diagnostic partial/black PNGs are explicitly rejected.

Root then restarted 4:27 and completed an uninterrupted conflict path:
continue sets 16:00 → 4:31 → 4:34 (16:00) → 34:37 (unavailable) → 4:34 (18:00).
`mobile01-unavailable.png` and `mobile01-review18.png` capture this transition.
Change-time returned to 4:29 with 18:00 selected and 16:00 struck out; continue
returned through contacts and review to success 4:35. `mobile01-success.png`
shows T-204, 18:00, 90 minutes, 2 400 ₽ and the address. The back-selection screen
was viewed inline; its later file capture was black and is retained only as diagnostic.
320 review 34:38 was viewed at full height with both edit links and confirmation;
confirmation reached 4:35. The two edit links specifically from 320 were not clicked.

`mobile01-native.json` records review/success/conflict/320 and unchanged voice
service values. `mobile01-edit.json` records the name-field TEXT override and
master padding test on name/phone consumers, with exact restoration. No permanent
design corrections were applied. Old error path and new conflict path both work,
but continuous paint quality is not claimed from the intermittent capture channel.

## mobile02 revision, after freeze

Root used the Revision page 26:200. Main selection 26:201 → contacts → invalid
26:272 → error 26:306. As in mobile01, the first error capture was only partial;
it is diagnostic, not accepted evidence. Reload produced the complete accepted
`mobile02-error-reloaded.png` with 16:00, unchanged name/comment and phone 123.
Recover phone → review 26:340 (16:00–17:30) → confirm → unavailable 28:380 →
choose 18:00 → review 26:730 (`mobile02-review18.png`). All required values remain.

Edit contacts → 26:628 retained name, phone, comment and 18:00. Back to selection
26:591 showed 18:00 selected and 16:00 occupied; clicking 16:00 remained on
26:591. Continue → contacts → review → confirm → 26:372. Accepted saved
`mobile02-success.png` shows T-204, the new service, 18:00, 90 minutes, 2 400 ₽
and address. Narrow review 28:404 was viewed full-height and confirmation reached
26:372. As with mobile01, the two edit links specifically from 320 were not clicked.

`mobile02-native.json` records actual revised review/320/success/conflict values.
The selection screenshot independently confirms the unchanged voice service
(30 minutes / 1 000 ₽). `mobile02-edit.json` records a real name override and
source-master padding test on two Revision consumers, followed by exact restoration.
No permanent design correction was necessary in these checked paths.
