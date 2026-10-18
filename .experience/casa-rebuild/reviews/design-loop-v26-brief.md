# Design Loop v26 — brief critic raw review

Reviewer: fresh brief critic (no implementation role). Date: 2026-10-18. Scope: user outcomes only; no aesthetic judgment. Live target: `http://127.0.0.1:4173/`. Active contract: `.experience/casa-rebuild/contract-and-section-map.md`; progress record: `.experience/casa-rebuild/progress.md`. I read neither implementation code, earlier reviews, nor builder rationale.

## Binary verdicts

| Piece | Verdict | Observed basis |
| --- | --- | --- |
| Home and existing Casa journeys | **PASS** | Live home accessibility tree and rendered hero expose Casa identity, studio/private therapists, wet/dry cupping and massage links, traditional quote, testimonials, wet-cupping prices/conditions, booking request, contact/address/map directions, product entry and theme control. Live Products navigation opened a 30-product, seven-category catalogue with search, sort, product detail and enquiry controls. Theme state persisted into Products. |
| Body journey | **PASS** | Live WebGL canvas and front neck/shoulders chapter were rendered. A drag that began on the actual `CANVAS` hit target changed to `BACK VIEW` and upper-back guidance; forward wheel scroll advanced to lower back, and reverse wheel scroll restored the front neck chapter. The area CTA opened a four-question on-page intake. I repeated a direct canvas drag in the mobile layout and observed the same back-chapter transition. Supplied v6 captures show a full turn returning to front, desktop/mobile chapter states, marker/zoom states, mobile reduced-motion still, and front/back WebGL fallback stills. The v6-state-continuity captures show the still-to-live handoff in desktop and mobile layouts. |

## Direct interaction notes

- Desktop canvas bounding box immediately before the drag: approximately `x=501–911`, `y=383–943` CSS pixels. `document.elementFromPoint(700,500).tagName` returned `CANVAS`; I dragged from `(700,500)` to `(850,500)`. The live accessibility state changed from `FRONT VIEW / 01 NECK & SHOULDERS` to `BACK VIEW / 02 UPPER BACK`.
- After that drag, one normal downward wheel step changed `02 UPPER BACK` to `03 LOWER BACK`. Two upward steps returned `01 NECK & SHOULDERS` and `FRONT VIEW`.
- On the mobile layout, `elementFromPoint(180,400)` returned `CANVAS` within a roughly `x=79–344`, `y=276–629` box. Dragging `(180,400)` to `(310,400)` changed front/neck to back/upper-back.
- `Explore this area` opened a named neck-and-shoulders intake with four question groups and a review action. I closed it normally.

## Evidence and runtime limit

I visually inspected selected screenshots in `.experience/casa-rebuild/evidence/v6/` and `.experience/casa-rebuild/evidence/v6-state-continuity/`, including desktop full turn, mobile front, mobile reduced motion, mobile fallback back, and live handoff frames. I also read the two corresponding observation logs. Those screenshots/logs are supplied evidence, not interactions I personally repeated. The browser's responsive override requested 390×844 but reported 433 CSS pixels wide in the in-app runtime; it did show a narrow mobile layout without document overflow. Its screenshots sometimes displayed only the upper part of the active viewport with blank space below while DOM hit testing reported the live stage lower down. I therefore grounded direct drag coordinates in `getBoundingClientRect` and `elementFromPoint`, and used live accessibility state to verify the result. I did not treat the clipped browser capture as a site defect.

Biggest actionable gap if failed: **none identified for these two pieces**. This verdict is scoped to the stated brief and the observed evidence, not a separate source/wiring or medical-content audit.
