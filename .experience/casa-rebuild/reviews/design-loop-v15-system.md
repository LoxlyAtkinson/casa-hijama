# Design Loop v15 — system critic (raw verdict)

**Verdict: FAIL**

Reviewed against `design-system.md` and the active `.experience/casa-rebuild/contract-v6.md` from the original-resolution PNGs in `.experience/casa-rebuild/evidence/v6/`. This is a visual system judgment of the supplied captures, not a source or live-browser audit. I did not read builder notes or earlier reviews.

## What adheres

- The settled 1440 × 900 front, upper-back and lower-back frames retain the deep teal clinical chapter, luminous cyan figure, localized coral focus, large concise Manrope heading, restrained small labels, turquoise pill action and pale secondary link. The figure and step copy remain visually connected.
- The settled 390 × 844 front, upper-back, lower-back, zoom, full-turn and reverse-scroll frames use roughly 20px page margins. The three named regions, active step, body focus, copy and primary action are visible and legible. The dark capture keeps readable contrast.
- `mobile-body-reduced.png`, `mobile-body-fallback.png` and `mobile-body-fallback-back.png` display a coherent still figure and semantic copy in the same palette. The hero start/room captures preserve the brand and clear booking/treatment routes at both widths.

## Actionable failures

1. **Desktop primary body action and header booking label disappear in required interaction frames.** In `desktop-body-lower.png` and `desktop-body-turn-to-back.png`, the body CTA shows only `E ↗` where the settled front frame shows `Explore this area ↗`; the header booking pill likewise shows only an arrow, while `desktop-body-neck-zoom.png` and `desktop-body-mouse-drag.png` show the truncated `k a session`. The pills themselves remain full width, so this is a text visibility failure rather than a narrow layout. It breaks the system rule for readable primary buttons and the contract's visible booking path. Check the rendered transition/drag states and recapture after the complete label is stable. The same defect is visible in `desktop-body-upper.png`.
2. **The 390px drag capture is horizontally displaced and crops primary content.** `mobile-body-mouse-drag.png` shows `SA HIJAMA` instead of `CASA HIJAMA`, `Listen to` cropped to its trailing letters, the step counter cut at the left edge, and the right side of the explanatory paragraph and CTA clipped. Other 390px body captures are aligned normally. This violates the design system's mobile margins and contract C7/C26 for a usable drag state at 390px. Determine whether dragging moves the page horizontally or the capture was taken during an unstable viewport position, then verify and recapture the actual drag state.

The most consequential gap is loss of primary text during interaction: in those frames a visitor cannot reliably identify the body action or booking action. The mobile displacement compounds this by hiding explanatory content and the action.

## Evidence limits

I inspected pixels in supplied screenshots only. They do not establish live scroll timing, keyboard operation, route outcomes, theme persistence, exact CSS viewport measurements, source revision, or whether the transient clipping reproduces in a live browser. A live browser check is needed before acceptance; these captured failures already prevent a system pass. The reduced-motion and WebGL-failure captures show their visible states, but still images alone cannot prove that reduced motion disables pinned scrubbing or that a failed WebGL load recovers interactively.
