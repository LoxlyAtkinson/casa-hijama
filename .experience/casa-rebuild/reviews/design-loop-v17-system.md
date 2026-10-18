# Design Loop v17 — System Critic

**Verdict: FAIL**

## Observed evidence

- The body journey uses the required Casa palette consistently: ivory header, deep green-black section, turquoise headline emphasis and actions, sage supporting text, and localized coral focus on the translucent cyan figure. Light and dark captures retain strong text contrast (`desktop-body-front.png`, `desktop-body-dark.png`, `mobile-body-dark.png`).
- Type hierarchy and section composition are clear at both sizes. Eyebrow, large heading, reading copy, numbered regions, and action links stay distinct; mobile margins are approximately 20px. No rail/marker overlap with the explanatory copy is visible in front, upper, or lower states.
- **Header booking control text is visibly clipped in the lower and zoom states.** `desktop-body-lower.png` and `desktop-body-lower-zoom.png` show only the arrow in the turquoise header action; `desktop-body-neck-zoom.png` and `v6-action-bounds/desktop-neck-zoom.png` show only the trailing “k a session”. This is an inconsistent, material control legibility failure against the sticky header/booking-action system rule.
- At 200% zoom the figure extends beyond the stage vertically and horizontally, as expected for a zoomed model; explanatory copy and controls remain legible in the supplied desktop and mobile zoom captures. This is not counted as page clipping.
- Mobile front/upper/lower and reduced/fallback screenshots show content continuing below the 844px viewport, with the explanatory paragraph’s last line near the screenshot edge in the neck state. The evidence does not establish that document scrolling is blocked, so this is not counted as clipping. Reduced/fallback captures retain a visible figure and semantic HTML copy.

## Scope and limits

Reviewed supplied v6 and v6-action-bounds PNGs only; no implementation source or prior reviews consulted. No browser session was used. The FAIL rests on repeated visible clipping of the desktop header booking label in lower/zoom captures; other reviewed design-system requirements appear to pass in the supplied states.
