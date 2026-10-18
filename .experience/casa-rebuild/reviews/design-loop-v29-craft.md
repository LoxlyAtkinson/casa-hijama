# Design Loop v29 — independent craft critic

Scope: rendered Home and 3D Body only. Bar: `.experience/casa-rebuild/bar-v3.md`, the user-supplied clinical body reference, and [Apple Watch Series 12](https://www.apple.com/apple-watch-series-12/). I judged the rendered screenshots in `.experience/casa-rebuild/evidence/v6/`; I did not read implementation source or earlier reviews. Shared filesystem and runtime mean the critic is fresh-context but cannot be technically isolated from builder activity. The screenshots establish frame quality, not motion timing or the WebGL loading handoff.

## Home — PASS

`desktop-hero-start.png`, `desktop-hero-room.png`, `mobile-hero-start.png`, and `mobile-hero-room.png` show a dominant macro cupping visual, an appropriately oversized statement, readable booking action, and a meaningful change of scene to a quiet room. The transition from cool immersive imagery to warm editorial imagery meets the visual mechanism in the bar. No pixel-level blocker in these frames.

## Body — FAIL

The full-body v29 mobile frames now read as a coherent cyan clinical scan, with a localized pink focus, legible guidance and clear actions. The lumbar 200% view reveals spatial bones within the silhouette. However, the desktop zoom detail callouts break the illusion: in `desktop-body-neck-zoom.png`, disconnected white fragments float above and outside the head; in `desktop-body-lower-zoom.png`, a hard-edged dark rectangle with bright bones appears beside the hip. The inset views do not visually connect to the selected region, so they read as detached overlays rather than a precise scan of the same body. This is the biggest fixable pixel gap against the body reference and bar mechanism 7.

**Next fix:** Make the detail lens an intentional, softly bounded scan inset with a visible connector to its selected pink point, and frame recognizable anatomy within it. Avoid detached cropped fragments or an exposed rectangular canvas edge. Keep the clearer 200% anatomy inside the main silhouette.
