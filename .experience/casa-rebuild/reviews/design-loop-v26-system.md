# Design Loop v26 — independent system critique

**Basis:** `design-system.md`; current rendered home page at `http://127.0.0.1:4173/`; supplied `evidence/v6` desktop and mobile captures; and `evidence/v6-state-continuity/mobile-dark-insets.png` at DPR 3. Visual judgment only. I did not inspect implementation source, builder rationale, or earlier reviews. The live in-app browser used a different viewport from the supplied captures, so viewport-specific judgments rely on the named captures. Shared filesystem and the local runtime limit procedural blinding.

| Surface | Verdict | Visual judgment |
| --- | --- | --- |
| Home | **PASS** | Desktop and mobile hero layouts preserve the Casa turquoise, ivory, and deep-teal palette, short Manrope headline, generous spacing, readable CTA hierarchy, and calm cup-to-room visual chapter. The dark header remains legible in the live view. The mobile composition keeps the primary action and room message clear without crowding. |
| 3D body | **PASS** | The near-black clinical chapter reads as a deliberate extension of the warmer site. At 100%, the complete translucent cyan figure is visible on desktop and mobile, with localized coral focus and separate explanatory copy. At 200%, focused anatomy and overlay labels remain discernible, while zoom and turn controls stay separate from the figure. The DPR 3 dark mobile inset shows the whole back-view figure, legible region choices and text, and a clear lower-back focus. Light and dark header states retain contrast over the chapter. |

**System fit:** The typography, large heading and eyebrow pattern, primary turquoise pills, restrained secondary links, and measured mobile gutters are consistent across the reviewed views. The figure's diagnostic disclaimer and region explanation are readable HTML next to or below the visual, as required by the design system. Focused 200% views intentionally crop anatomy to make the selected region larger; the 100% state provides the whole-figure overview.

**Unresolved design-system gap:** None observed within this visual scope. This verdict does not certify routes, keyboard behavior, reduced-motion behavior, or booking mechanics.
