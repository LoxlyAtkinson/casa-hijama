# Design Loop v28 — system critic

Scope: judged `design-system.md` against the live rendered home page at `http://127.0.0.1:4173/`, the v6 rendered captures and browser log, and `v6-state-continuity/mobile-dark-insets.png`. This is a visual system judgment, not a source review. Shared workspace and live runtime were visible to the reviewer; no builder rationale or earlier verdict was used.

| Piece | Verdict | Basis |
| --- | --- | --- |
| Home / hero | **PASS** | Desktop and 390×844 mobile start and room states preserve the turquoise and deep teal identity, short Manrope headings, readable DM Sans copy, clear booking and exploration actions, and responsive header. |
| Body guide | **FAIL** | At 390×844, normal, dark, and 200% **figure zoom** states compress the active guidance into a narrow two-column strip at the bottom. Its explanatory copy is about 10–11 CSS px in the captures. More decisively, the primary turquoise “Explore this area” action becomes an arrow-only pill in `mobile-body-neck-zoom.png`, `mobile-body-upper.png`, `mobile-body-turn-to-back.png`, and `mobile-body-reverse-scroll.png`; `desktop-body-lower-zoom.png` shows the same loss of the button label. The active chapter and next action are therefore not consistently fully legible. `mobile-dark-insets.png` shows a readable full label for one lower-back state, so the failure is state dependent rather than universal. The mobile and desktop intake captures retain the four questions, safety caveat, and review action, but do not cure the missing label in the underlying body journey. |

**Single biggest objective gap:** The body chapter does not consistently keep its active guidance and explicit next action legible at the supported 390×844 viewport and 200% figure zoom. Keep a readable text label on the primary action through every chapter and give the guidance enough space to read at mobile size.
