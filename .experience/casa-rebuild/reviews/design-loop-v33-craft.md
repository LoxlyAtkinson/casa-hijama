# Design Loop v33 — independent craft review

Reviewer: `/root/blind_craft_v33` (fresh visual pass). Date: 2026-10-18. Scope: home opening and clinical body chapter. I inspected the visual bar and frozen C22–C29, then original PNG captures; I did not inspect implementation, builder rationale, or earlier verdicts.

## Raw verdict

| Surface | Verdict | Pixel evidence |
| --- | --- | --- |
| Home | **PASS** | `evidence/v6/desktop-hero-start.png` and `desktop-hero-room.png` give each scene one dominant subject, a short large headline, readable action, and a clear change in subject/scale. Brand cyan and warm gold remain distinct. |
| Body | **PASS (visual craft)** | `evidence/v6/desktop-body-front.png`, `desktop-body-neck-zoom.png`, `desktop-body-lower-zoom.png`, `mobile-body-front.png`, `mobile-body-lower.png`, `mobile-body-neck-zoom.png`, `mobile-body-lower-zoom.png`, `mobile-body-dark.png`, and `evidence/v6-state-continuity/desktop-handoff-mid-v30.png` show a recognizable continuous cyan human silhouette, visible 3D anatomical depth, localized pink focus, and a connected circular close view. At 390px the full figure, active guidance and primary actions share a single screen without severe crowding. |

## Largest remaining achievable pixel gap

The 200% neck inset reads as a dense cluster of blue/pink structures before it reads as a shoulder close view, especially at 390px (`mobile-body-neck-zoom.png`). A slightly clearer angle, larger local joint silhouette, or gentler layering would improve immediate interpretation. This is a polish opportunity, not a failure of the focused 3D detail outcome: the enlarged shoulder and connected pink locus in the main figure still communicate the selected area.

## CTA and handoff inspection

`evidence/v6/mobile-lower-cta-original-pixels.png` shows the complete **“Explore this area”** and **“Explore treatments”** labels with both arrows and no painted clipping. The smaller rendered preview of `mobile-body-lower.png` can make the first label look truncated; I did not treat preview resampling as a source defect.

The newer mid-handoff frame (`evidence/v6-state-continuity/desktop-handoff-mid-v30.png`) shows one centered, luminous clinical figure rather than two visibly overlaid silhouettes or a dark blank gap. The earlier full handoff sequence PNGs in the same folder were captured before this mid-frame and should not be used to assert the final handoff quality. A fresh timed sequence/browser observation is still required for C29 behavior and transition continuity. This review judges only the supplied pixels, not WebGL interactivity, loading timing, scroll behavior, health content, or publication.

Blinding limit: the reviewer shares the workspace and runtime with the builders. I avoided reading source and prior reviews, but could see file names and capture timestamps. The visual source/reference comparison uses the recorded Apple/clinical reference bar and user images, not a synchronized live reference capture in this review.
