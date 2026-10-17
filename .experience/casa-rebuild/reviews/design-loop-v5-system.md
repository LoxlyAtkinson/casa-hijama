# Design Loop v5 — system critic raw report

Scope: objective adherence of the two new home pieces to `design-system.md` only. I inspected the six `r7-*hero*.png` and six `body-final-*.png` rendered captures. I did not inspect implementation source or builder rationale. The captures establish visible states, not keyboard operation, native-scroll mechanics, theme persistence, reduced-motion behavior, or media fallback.

## Two-state scroll hero / editorial transition — PASS

The desktop and 390 px captures show the Casa Hijama identity, turquoise primary booking pill with dark text, underlined secondary action, short high-contrast headline lines, uppercase eyebrow, calm large media areas, and the ivory transition into the next editorial section. The second state emphasizes a headline line in turquoise and keeps readable pale copy over the darkened room image. These match the Identity, Type and layout, and Components and behavior rules. The header retains brand, routes/theme/booking on desktop and brand/theme/explicit menu button on mobile. The mobile captures keep roughly 20 px horizontal margins. The exit captures show an integrated transition into the ivory section rather than an isolated panel.

Evidence: `design-loop/r7-desktop-hero-start.png`, `r7-desktop-hero-room.png`, `r7-desktop-hero-exit.png`, `r7-mobile-hero-start.png`, `r7-mobile-hero-room.png`, `r7-mobile-hero-exit.png`.

## Interactive clinical body section — FAIL

The dark deep-teal field, full-body figure, three marked regions, semantic-looking adjacent copy, uppercase eyebrow, and plain health uncertainty/risk language visibly follow the Shop and body journey extension. The front and upper states also retain clear turquoise primary actions. However, the lower-back zoom desktop capture truncates the sticky header booking action to an arrow-only pill and the primary `Explore this area` action to `E ↗`. Those visible states violate the Components and behavior rule requiring a header booking action and a turquoise primary button with readable dark text. The comparable front and upper desktop captures show the full labels, so this is a state-specific regression. The figure also reads predominantly cyan/blue rather than the extension's specified sage-lit illustration, though the clipped actions are the decisive failure.

Biggest actionable gap: preserve the full booking and `Explore this area` labels during the lower-back zoom/scroll state at desktop width; recapture that state once the controls remain legible.

Evidence: `design-loop/body-final-front-1440.png`, `body-final-upper-1440.png`, `body-final-lower-zoom-1440.png`, `body-final-front-390.png`, `body-final-upper-390.png`, `body-final-lower-zoom-390.png`.
