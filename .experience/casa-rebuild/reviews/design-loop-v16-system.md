# Design Loop v16 — system critic

**Verdict: PASS** for the pictured home body states against `design-system.md`.

## Findings

1. **Action labels remain visible.** In the original 1440 × 900 captures, the header's “Book a session” and body panel's “Explore this area” appear in full at front, neck zoom, and lower-back zoom. `evidence/v6-action-bounds/bounds-log.json` places their text inside the button content bounds, reports equal `scrollWidth` and `clientWidth` for each, and records a 1440px document width. At 390 × 844, the header booking button is intentionally replaced by the mobile menu; the body action remains fully legible in all three captures. The mobile document width is 390px. No horizontal clipping or overflow is visible.
2. **Mobile body labels and controls remain distinct.** In `mobile-front.png`, the neck/shoulders marker label is above the zoom rail; in `mobile-neck-zoom.png`, the same label sits to the right of it. In `mobile-lower-zoom.png`, both back labels sit to the right of the rail. The 01/02/03 named region controls and “Explore this area” action stay visible below the figure. The zoomed figure extends beyond its visual frame by design, while its active focal marker and label remain visible.
3. **System language holds.** The pictured section keeps the deep teal field, translucent cyan figure, localized coral focus, large short heading, small uppercase eyebrow, turquoise pill action, and readable HTML guidance. The desktop three-column arrangement and mobile stacked arrangement preserve the hierarchy and approximate 20px mobile side margin in the current v6 body captures.

## Evidence and limits

Inspected the six original captures in `evidence/v6-action-bounds/`, its `bounds-log.json`, and the current desktop/mobile front, neck-zoom, and lower-zoom body captures in `evidence/v6/`. This is a visual system judgment of those rendered states. The bounds log corroborates geometry and overflow but does not prove click behavior, keyboard access, dark mode, reduced motion, or other routes. Those require separate browser journey evidence. No implementation code or prior reviews were used.
