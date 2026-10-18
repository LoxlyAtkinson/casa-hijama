# Design Loop v18 — System critic

**Verdict: PASS**

## Scope and evidence

Independent visual review of the supplied home and body states at 1440×900 and 390×844, plus action-bound measurements and full-resolution header CTA crop. Reviewed `desktop-hero-start.png`, `mobile-hero-start.png`, desktop/mobile body-front and body-dark captures, mobile reduced-motion and fallback captures, and the 4× header button crop. Browser measurements report document width exactly equal to viewport at both sizes (1440 and 390), with no measured horizontal overflow. Desktop header CTA measured 142px wide with matching scroll/client widths; body CTA likewise matches. The mobile header CTA is intentionally absent from layout while the explicit menu control is shown. This is a visual-system critique of supplied captures; it does not establish unshown routes or every interactive state.

## Findings

- **Palette and surface — PASS.** Light header uses a quiet near-white/ivory surface; body chapter uses deep teal-black. Turquoise highlights the hero phrase and primary pills. Sage appears in small supporting labels and the figure controls. Coral is localized to the body region focus, consistent with the specified clinical chapter. Contrast and hierarchy remain clear in the shown light and dark captures.
- **Typography and hierarchy — PASS.** Large, short headline lines lead each section, with uppercase eyebrow, restrained body copy, and distinct smaller control labels. The mobile body heading wraps cleanly into two lines. Desktop body experience balances introductory copy, figure, and selected-region explanation; mobile stacks those elements in a readable order.
- **CTA and controls — PASS.** Booking is a turquoise pill with dark text and arrow, corroborated by the original-resolution crop where its label and arrow are crisp. Desktop shows route links, theme toggle, and booking action; mobile shows theme and explicit menu controls. Body zoom, reset, turn, region navigation, and area-exploration actions are visually distinct and labeled. The mobile region links remain separated and readable.
- **Labels and body guidance — PASS.** Figure labels identify the selected neck/shoulder area; three region steps are named in text. Body copy explicitly says the guide is for conversation and not treatment placement or diagnosis. The header brand and route labels are legible at both viewport sizes.
- **Clipping and overflow — PASS within captured states.** The action-bound log records document width matching the viewport, and all measured CTA text fits its control. No horizontal clipping is visible. The last paragraph in the 844px mobile screenshot continues below the viewport, consistent with ordinary vertical page scrolling; the capture does not show a clipped fixed panel.
- **Dark, reduced-motion, and fallback — PASS in supplied captures.** Dark mode preserves readable text and body controls. Reduced-motion capture presents the three guidance steps in ordinary flow with a static figure. WebGL fallback captures show a static front view with named region controls, and a back still when upper back is selected.

## Limits

Evidence is restricted to the current home/body screenshots and associated measurement logs. The screenshots do not establish visual consistency on treatment, product, or booking routes; the header crop verifies the desktop CTA only. The mobile header CTA is not present in the provided mobile captures, so its behavior after opening the menu was not independently judged. No claim is made about colors or typeface identity from pixels alone.
