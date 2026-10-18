# Design Loop v22 — SYSTEM

**Verdict: FAIL**

Scope: visual system critique of the supplied rendered home/body evidence at 1440×900 and 390×844 against the project-root `design-system.md` only. No source, progress, or prior reviews were used. Review is limited to the supplied captures and their associated measurements/logs; screenshots cannot establish live font loading, keyboard operation, persistence, reduced-motion behavior beyond captured states, or browser fallback behavior.

## Findings

- **Palette, visual hierarchy, and primary actions: PASS in inspected states.** `evidence/v6/desktop-hero-start.png` and `mobile-hero-start.png` show the turquoise primary booking pill, restrained turquoise/sage labels, warm cup imagery, and concise dominant headline. `desktop-body-front.png` and `mobile-body-front.png` use the specified dark teal field, cyan clinical figure, coral regional focus, pale copy, and clear action hierarchy. Desktop and mobile captures are consistent with the design system's intentional clinical chapter.
- **Mobile figure clipping: FAIL.** `evidence/v6-state-continuity/mobile-dark-insets.png` (390×844, lower-back/back view) visibly cuts off the figure's head at the top edge of its render area. The design-system body extension specifies a visible figure, and this crop makes the model look accidentally truncated. The provided DOM measurements in `continuity-log.json` show page width and inspected content bounds remain within 390px; they do not establish that the figure itself is fully framed. The corresponding captured front view `evidence/v6/mobile-body-front.png` does show the full figure, so this is state-specific rather than a general mobile framing failure.
- **Horizontal page overflow: PASS for inspected evidence only.** The mobile continuity measurement reports `width: 390` and `documentWidth: 390`; listed current-section labels and copy span x=20..370. `v6-action-bounds/bounds-log.json` reports desktop document width 1440 and both CTA labels within their measured boxes through front, neck zoom, and lower zoom. `v6-header-crop/header-crop-log.json` likewise records full “Book a session” label bounds and matching scroll/client widths in those desktop states.
- **Theme and fallback: limited evidence.** The light hero/body and dark body captures show the intended palette relationship. The provided mobile dark inset is specifically the crop failure above. No dark hero capture or fallback render was visually supplied in the requested v6 evidence for this review, so full theme/fallback consistency cannot be established here.
- **Typography: visual-only pass, font identity unverified.** Heading/body distinction and readable hierarchy are visible in the supplied screenshots; raster evidence does not prove Manrope and DM Sans loaded.

## Exact repair target

Reframe the mobile lower-back/back body state so the complete clinical figure, including the head, remains inside its visible region at 390×844. Recapture that state after repair. This report does not assess other routes or functional behavior.
