# Design Loop v14 — independent system critic

**Verdict: FAIL.** Judged against `design-system.md` and the frozen home/body scope in `.experience/casa-rebuild/contract-v6.md`, using the original-resolution PNGs in `.experience/casa-rebuild/evidence/v6/`. I did not read source, builder notes, or prior reviews. Shared filesystem access and pre-existing captures limit procedural blinding; this is an independent visual judgment of supplied rendered evidence, not a fresh browser run.

## Actionable failure

1. **Primary action labels are incomplete in several captured desktop states.** In `desktop-body-neck-zoom.png` the sticky header booking pill reads **“k a session”** instead of “Book a session”; its turquoise **Explore this area** pill shows only **“E”** and the arrow. In `desktop-body-lower-zoom.png` the booking pill contains only the arrow, and the section action again shows **“E”** and the arrow. `desktop-body-drag-then-scroll-forward.png` repeats the cropped booking label and section action. These are genuine pixels in the 1440 × 900 PNGs, not thumbnail truncation. Restore stable, fully visible labels throughout zoom and drag/scroll transitions, then recapture those states after settling and during the transition. The complete labels in `desktop-body-front.png`, `desktop-body-upper.png`, `desktop-body-lower.png`, and `desktop-body-full-turn.png` show the intended treatment is achievable.

## Observations that pass in these captures

- The body chapter follows the system palette: deep teal/near-black field, translucent cyan figure, coral focus, turquoise primary action, and pale readable text. Dark captures maintain the same contrast and brand relationship.
- The 390 × 844 front, upper, lower, lower zoom, dark, and fallback captures retain roughly 20px side margins. The long **“Care begins with a conversation.”** heading fits within the mobile frame. Body copy and **Explore this area** are fully visible in the standard mobile captures. The header has a readable menu button; desktop standard states have a readable booking pill. No horizontal clipping of the section's primary HTML content is visible.
- `mobile-body-reduced.png` and the two mobile fallback captures retain the chapter text, body focal point, region controls, and a readable visual. Zoom intentionally crops the figure to prioritize the selected area; this is not clipped primary HTML content.
- The hero start and room captures use concise Manrope-style editorial headings, turquoise action styling, and calm spacing consistent with the system. The body chapter's uppercase eyebrow, large heading, and reading copy follow the stated hierarchy.

## Capture limits and minor concern

- `mobile-body-reduced.png` ends before the **Explore this area** action, and `mobile-body-keyboard-intake.png` cuts through the lower dialog action at the viewport edge. A single viewport PNG cannot establish whether those controls are accessible by scrolling. They are **unverified from these stills**, not proven clipped defects.
- In `mobile-body-drag-then-scroll-forward.png`, the lower-back hotspot label overlaps the left zoom rail, obscuring its initial letter. The named **03 Lower back** control and explanatory heading remain readable. Reposition the hotspot label or rail if this overlap persists in the settled state; the supplied frame alone cannot establish persistence.
- Still images cannot verify font family, sticky behavior, keyboard operation, persistence, smooth transitions, absence of horizontal page overflow, or control recovery. The accompanying browser log records actions, but this system verdict rests on visible output only.

**Required next step:** fix or disprove the transient desktop CTA clipping with settled and transition captures at 1440 × 900; inspect the mobile hotspot overlap and reduced-motion dialog reachability in a browser before claiming the system piece passes.
