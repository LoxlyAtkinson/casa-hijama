# Design Loop v27 — brief critic (raw)

**Scope:** stated outcomes only; aesthetics, source, builder rationale and earlier reviews excluded. I inspected the rendered local site at `http://127.0.0.1:4173/` and the supplied `evidence/v6` and `evidence/v6-state-continuity` captures and logs.

| Piece | Verdict | Observed basis |
| --- | --- | --- |
| Scroll-led home, Casa content/shop/dark mode | **PASS** | The live home opened with a scroll-led hero, then treatment and body-guide sections; it exposes Casa's therapy, price, booking and shop content. `/products` loaded a 30-product collection with search, filters, details and enquiry bag. The theme toggle set `data-theme="dark"`. The supplied desktop and mobile hero/body captures show the home beats at both widths. |
| 3D body, interaction and access paths | **PASS** | The live guide showed a whole front figure with neck/shoulder focus. I measured the interactive stage at `x=500.5–910.5, y=113.4–673.4` CSS px, then dragged **inside** it from `(700,420)` to `(850,420)`. The rendered/accessibility state changed to `BACK VIEW`, upper-back guidance and selected marker. A forward wheel action advanced to lower back; two reverse actions returned through upper back to neck/front. `Explore this area` opened four questions; answering them produced a conversation-note summary and shop link. The supplied captures show continued 360° rotation, zoom, desktop/mobile markers, reduced-motion cards and front/back no-WebGL fallbacks. |

**Runtime limits:** My live browser surface was desktop only. Its screenshot output clipped/composited the lower portion of the viewport during scrolling, so I used the measured DOM stage bounds and resulting state changes for the direct drag and wheel checks. Mobile, reduced-motion and forced fallback were judged from the supplied rendered captures and associated logs; I did not reproduce those modes in this live browser. This procedural limit does not alter the two brief verdicts above, but this review alone is not a final experience-acceptance gate record.

**Single action gap:** None for the stated brief.
