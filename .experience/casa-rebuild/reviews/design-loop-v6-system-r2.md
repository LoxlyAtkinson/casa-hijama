# Design Loop v6 — System-only review (r2)

**Verdict: FAIL.** The 390 px mobile hero omits the documented uppercase eyebrow for a main section.

## Scope and method

Compared fresh live rendered captures at `https://loxlyatkinson.github.io/casa-hijama/` against `design-system.md` only. Used a fresh Playwright Chromium context at 390 × 844 CSS px, device scale factor 1. Captured the light hero, toggled dark mode and captured the dark hero, opened the dark mobile navigation, and navigated to the body section for its mobile front-view treatment and explanatory step. No source or prior reviews were inspected.

## Findings

1. **Mobile hero lacks its section eyebrow.** At 390 px, the hero shows the cupping image, “Feel at home.”, the description, and calls to action, but no small uppercase eyebrow. The design system says each main section has an uppercase eyebrow and a large heading. This differs from the desktop hero, where `CASA HIJAMA · CAPE TOWN` appears above the heading. The mobile hierarchy therefore loses a documented identity cue.

2. **Other inspected mobile system states align.** Header provides a clear menu button; the opened menu presents the primary routes and booking action as readable rows. Light and dark header treatments use the ivory and deep green-black surfaces. Turquoise remains the primary action color. The body section has a dark teal field, a translucent cyan figure, a localized coral marker, and separate legible semantic copy. Its region list, zoom controls, view control, and CTA remain arranged within the 390 px viewport.

## States and limits

- Light mobile hero at 390 × 844.
- Dark mobile hero at 390 × 844.
- Dark mobile header with menu open.
- Mobile body section in front view, first region selected; body chapter remains on its intended dark field.
- Did not assess 390 px reduced-motion behavior, other routes, or route-change theme persistence.
