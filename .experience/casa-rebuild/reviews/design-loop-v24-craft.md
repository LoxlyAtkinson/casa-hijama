# Design Loop v24 — independent visual craft review

**Scope:** visual judgment of the home hero and live 3D body only. Compared the current v6 rendered desktop and mobile captures, including front/back and 200% zoom, with the live [Apple Watch Series 12 page](https://www.apple.com/apple-watch-series-12/) and the user supplied `C:/Users/loxly/Desktop/3d human body.jpg`. Applied `.experience/casa-rebuild/bar-v3.md`. No source files, builder rationale, design system or previous reviews were read. This is an audit only; interaction, motion timing, source provenance and full experience acceptance are outside this verdict. Shared workspace and captured runtime evidence limit procedural blinding.

## Binary verdicts

| Surface | Verdict | Visual basis |
| --- | --- | --- |
| Home hero | **PASS** | The opening cup is a large, unmistakable macro subject against a very dark field. The short white headline and booking action have clear priority without obscuring the subject. The mobile crop retains the entire cup silhouette and a readable lower text zone. The next room scene changes subject, palette and spatial setting rather than repeating the same visual. This meets the relevant image priority and scene contrast mechanisms in the bar, though it is not a pixel match to Apple. |
| Live 3D body | **FAIL** | At 100%, the centered cyan figure and one warm selected focus read clearly, and the full back view shows a genuine different angle. At 200%, the close framing becomes a soft, abruptly faded torso crop. The neck view has visible rib and clavicle lines, but the selected area itself contains little additional structure; the lower back close view is similarly faint and diffuse. The enlarged scene therefore does not provide the convincing spatial or clinical detail promised by the reference's anatomy views. On mobile, that weak detail is more exposed because the selected glow and label dominate the crop. |

## Single biggest fixable visual gap

**Make the selected 200% body view reveal legible, region specific anatomical depth.** Keep the selected spot tied to the rotating figure, but give the close view a crisp internal structure around that area, stronger edge light and a deliberate crop boundary. The visitor should see a newly informative neck/shoulder or lumbar scene when zooming, rather than a larger translucent shell fading into the background. This would address the main difference from the supplied clinical reference while preserving the current single focus and editorial text layout.

## Evidence inspected

- `.experience/casa-rebuild/evidence/v6/desktop-hero-start.png`, `desktop-hero-room.png`, `mobile-hero-start.png`, `mobile-hero-room.png`
- `.experience/casa-rebuild/evidence/v6/desktop-body-front.png`, `desktop-body-turn-to-back.png`, `desktop-body-dark.png`, `mobile-body-front.png`, `mobile-body-dark.png`
- `.experience/casa-rebuild/evidence/v6/desktop-body-neck-zoom.png`, `desktop-body-lower-zoom.png`, `mobile-body-neck-zoom.png`, `mobile-body-lower-zoom.png`
- `.experience/casa-rebuild/evidence/v6-state-continuity/mobile-dark-insets.png`, `desktop-sequence-handoff.png`, `mobile-sequence-handoff.png`

**Overall visual craft verdict: FAIL** until the live body close views carry substantially more readable clinical detail.
