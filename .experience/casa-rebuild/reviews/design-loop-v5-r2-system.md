# Design Loop v5, round 2 — system critique

Scope: rendered home two-scene hero and clinical body section only. Compared the v5 desktop and mobile start, room, and exit captures; body front, upper-back, and lower-back focus captures; and mobile reduced-motion and WebGL-fallback captures with root `design-system.md`. This is a visual judgment from still captures. It does not establish live scroll, keyboard, or fallback behavior. I did not inspect implementation source or prior critiques. The shared project filesystem is visible, so file provenance is procedural rather than technically blinded.

## Home two-scene scroll hero — PASS

The opening cupping image and warm private-room image form distinct scenes while retaining the calm Casa Hijama identity. Both carry short, high-contrast Manrope-style headlines, small uppercase labels, turquoise emphasis/actions, and clear booking or treatment routes. The desktop sticky header shows brand, primary routes, theme switch, and booking; the mobile header shows a menu button. The desktop and mobile room states preserve readable copy over the image and generous margins. The exit captures still show the room scene and its treatment action. This matches the system's warm studio imagery, restrained palette, headline hierarchy, and responsive layout.

## Clinical body section — FAIL

The deep teal field, full-body figure at default scale, three region markers, explanatory copy beside/below the figure, and turquoise action align with most body rules. The upper and lower states update the active region and explanation; the reduced-motion capture shows the steps in ordinary flow with the figure visible; the fallback capture retains a figure and upper-back explanation. The copy names uncertainty and distinguishes wet from dry cupping without a health score or guaranteed relief.

The largest system gap is the figure's lighting. The design system explicitly calls for a **sage-lit full-body illustration**. Across the default, upper, lower-focus, reduced-motion, and fallback captures, the figure reads as bright cyan/blue with pink hotspots and a technical scan grid. Sage appears in the headline and some small labels but does not light the illustration. Shift the figure's surface glow toward the specified sage `#94b57b` while keeping the dark field, clear region markers, and clinical legibility. The lower-focus captures may crop the figure because zoom is engaged; the default captures supply the full-body view.
