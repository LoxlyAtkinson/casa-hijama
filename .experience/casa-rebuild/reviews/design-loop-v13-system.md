# Design Loop v13 — independent system visual critique

**Verdict: FAIL**

**Basis:** `design-system.md`, `.experience/experience-acceptance.md`, and the frozen `contract-v6.md`, judged from the original PNGs in `.experience/casa-rebuild/evidence/v6/`. Active contract: `.experience/casa-rebuild/contract-v6.md`; working progress record: `.experience/casa-rebuild/progress.md`. This is a rendered visual critique, not a source or interaction audit.

## Actionable failure

1. **Desktop primary action text is clipped or absent in multiple captured states.** In `desktop-body-neck-zoom.png`, `desktop-body-lower.png`, `desktop-body-lower-zoom.png`, and `desktop-body-drag-then-scroll-forward.png`, the turquoise **Explore this area** pill at the right loses its text and shows only `E`/the arrow. The sticky header's **Book a session** label is also reduced to `k a session` in `desktop-body-lower.png` and to just the arrow in `desktop-body-lower-zoom.png` and `desktop-body-drag-then-scroll-forward.png`. These are meaningful action labels required by the design system's readable primary button rule and the contract's direct booking and intake paths. In `desktop-body-front.png`, `desktop-body-upper.png`, and `desktop-body-turn-to-back.png`, both labels are intact, so this may be a transient capture during text animation or a state-dependent rendering bug. Ensure the entire label remains visible at every animation frame and state, then recapture stable desktop lower, zoom, and drag-to-scroll states before acceptance.

## Observed adherence

- Desktop body panels use the deep teal field, cyan translucent clinical figure, coral region focus, sage accents, and large Manrope editorial heading described by the system. The main text columns have ample separation from the figure.
- The 390px body captures (`mobile-body-front.png`, `mobile-body-neck-zoom.png`, `mobile-body-upper.png`, `mobile-body-lower.png`, `mobile-body-lower-zoom.png`) retain the heading, guidance, figure, three named region controls, zoom rail, turn control, and turquoise intake action within the viewport. No primary text or CTA collision is visible in those selected captures. The inactive marker labels recede; the active coral marker remains legible.
- `mobile-body-reduced.png` shows the still body with the chapter controls and text in ordinary flow. `mobile-body-fallback.png` and `mobile-body-fallback-back.png` show useful front and back stills with the correct accompanying region text. Reduced-motion and fallback behavior itself cannot be proved from stills.
- `desktop-body-dark.png` and `mobile-body-dark.png` preserve pale text and luminous teal figure against dark surfaces. The body chapter is intentionally dark in light theme too; the header visibly changes between light and dark themes.
- Hero captures keep the same turquoise, warm gold, and deep teal visual language, with readable booking actions and generous spacing.

## Evidence limits

PNG comparisons show appearance at named states, not actual drag, scroll, keyboard, zoom, theme persistence, animation timing, pointer hit targets, or button operation. I did not inspect source, browser logs, old reviews, or builder notes. I did not validate screenshot timestamps, current source hashes, or the capture process. The desktop label failure is visible in the supplied evidence regardless of whether the cause is implementation or capture timing. Shared filesystem and prior project context limit procedural blinding, but this judgment used the frozen system and original rendered captures only.
