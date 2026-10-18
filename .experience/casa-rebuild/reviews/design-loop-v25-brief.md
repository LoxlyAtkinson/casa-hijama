# Design Loop v25 — brief critic (raw independent review)

**Scope:** Stated user outcomes only. I did not inspect source code, builder rationale, previous reviews, or design-system/bar criteria. I viewed the live local site at `http://127.0.0.1:4173/` in the Codex in-app browser and inspected rendered captures plus browser observations in `evidence/v6/` and `evidence/v6-state-continuity/`. This review is independent of the builder, with a shared-filesystem and different-browser runtime limit.

## Binary verdict

| Piece | Verdict | Observed outcome |
| --- | --- | --- |
| Home | **PASS** | Live scroll changed the opening cup to the treatment-room scene, then exposed Casa introduction, services and body story. The rendered and accessible home has Casa identity, booking, prices, testimonials, product entry, contact and location. The shop link reached a 30-product catalog; an existing two-item enquiry bag exposed quantities, subtotal and WhatsApp handoff. Dark-mode control and relevant light/dark captures are present. |
| Interactive body | **FAIL** | The live front figure, back-view control, three region labels, cautious guidance and four-question local intake were visible and usable. Selecting the back control synchronized the Upper Back text. Completed intake produced conversation notes. The supplied v6 captures show a rendered front/back figure, full-turn and scroll states, mobile and fallbacks. **I could not reproduce the essential free-drag turn in the live browser:** two horizontal drags across the visible figure produced no visible angle or chapter change. Captures and a builder browser log alone do not establish that direct drag works in this independent runtime. |

## Single biggest action gap

Make free dragging the live figure reliably turn it from the first neck view through back and front, with the chapter following its angle, in a fresh browser session. Recheck with an independently observed continuous pointer drag and settled front → back → front captures at desktop and 390px. Preserve the already-working named controls, scroll sync, intake, reduced-motion and still-fallback paths.

## Evidence and limits

- Live local site: initial hero and room beat; front body; named back control updating the guidance; four-question intake and completed notes; products route and populated enquiry bag.
- Inspected captures: `v6/desktop-body-turn-to-back.png`, `v6/mobile-body-front.png`, `v6-state-continuity/desktop-isolated-dark-gap.png`, `v6-state-continuity/desktop-sequence-early.png`, `v6-state-continuity/desktop-sequence-late.png`, `v6-state-continuity/mobile-reduced.png`; inspected the v6 browser log and continuity log as evidence claims, not as independent proof.
- The in-app browser's scroll screenshots intermittently showed a partly clipped section with white viewport space during scroll. I did not treat this as a confirmed site defect because the settled v6 captures and page controls contradicted that transient view. The direct drag failure is the unresolved acceptance issue.
