# Design Loop v8 — SYSTEM

**Verdict: FAIL**

**Largest gap: the figure's turn interaction does not visibly turn it to the back.** The design system calls for a translucent clinical figure and body-region progression through neck/shoulders, upper back, and lower back. The desktop and 390px evidence shows the controls and labels, but the required front-to-back visual change is absent: `desktop-body-front.png` and `desktop-body-full-turn.png` both show the figure facing forward with the same neck/shoulders hotspot. The same is true of `mobile-body-front.png` and `mobile-body-full-turn.png`. Thus the lower-back state cannot be explored as the intended back-facing figure; a screenshot labeled `desktop-body-lower-zoom.png` does show a back view, but the region marker and copy are at lower back while a separate upper-back marker is still visible, and this does not resolve the failed turn action.

**Evidence reviewed:** `desktop-hero-start.png`, `mobile-hero-start.png`, desktop and mobile body front/full-turn/lower-zoom screenshots. The page's light header over deep teal body field, turquoise emphasis and actions, clean type hierarchy, mobile margins, and translucent cyan figure with coral localized focus broadly follow the documented system. The supplied evidence does not establish dark-mode or loading-to-live behavior, so those states are unverified.
