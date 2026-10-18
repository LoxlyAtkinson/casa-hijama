# Independent experience acceptance — v34

Reviewer: `/root/acceptance_judge_v34`. Reviewed revision: `c28f148f5ad1dd56800b765fe8a3d177145d0ffe` on public `LoxlyAtkinson/casa-hijama` main, deployed by GitHub Pages run `39098317199` on 2026-10-18. Frozen contract: `../contract-v6.md` C1–C29. **Verdict: PASS, 100/100 for the frozen scope.** No required check remains unverified and I found no meaningful achievable defect in the final rendered states.

I read the project acceptance method and frozen contract plus its numbered change list. I did not read builder progress, earlier scores or earlier raw reviews before judging. The current source aggregates exactly match the target browser log (`42d9ddcae711c8ca68226483de889065824e53572d173e1b108c14b9c1401f58`), site log (`f81fd3d1f878d5d6cd8686066810d920ef11df36820ab44ee4f1d083e6a6c881`) and continuity log (`a23198d7a61f035516211dd0aa6c2a1f9750cb9d83cdb9b667042b4537938cb4`). I inspected the final screenshots as rendered, checked source/wiring separately, and independently opened the local page in headless Chromium. A direct drag from the first neck chapter at 1440px changed `0/front` to `1/back`; document width stayed 1440px. I also checked public route and new asset HTTP status independently.

## Criteria

| ID | Verdict | Evidence / judgment |
| --- | --- | --- |
| C1 | PASS | Home full-page light/dark captures and source show intro, studio, treatments, quote, reviews, price tiers/conditions, booking, shop entry, contact and map. |
| C2 | PASS | Treatments route and source explain wet/dry cupping, massage, separate private rooms, therapist choice, booking and prices. |
| C3 | PASS | Products route has 30 records, seven groups, imagery, price/enquiry labels, filtering, sorting, detail and WhatsApp path. |
| C4 | PASS | Information route includes treatment/visit context and keyboard-operable disclosures. |
| C5 | PASS | Browser evidence covers invalid/complete forms and fallback; source builds a full WhatsApp request with pending-confirmation wording. |
| C6 | PASS | All four routes captured light/dark at 1440/390; theme persists on navigation/reload. |
| C7 | PASS | Route, menu, dialog, form and action-bound evidence show no horizontal overflow or clipped primary controls at both widths. |
| C8 | PASS | Media still, pause, reduced-motion, no-JavaScript and external fallback states are captured; source alternatives and controls are present. |
| C9 | PASS | Final browser logs carry route, state, viewport, timestamp and observed action; captures are nonblank and current. |
| C10 | PASS | Discovery, product detail, bag quantity/removal, related items and enquiry path are captured without a payment checkout. |
| C11 | PASS | Shop sequence motion supports discovery and bag feedback; reduced-motion/no-JavaScript paths keep product information available. |
| C12 | PASS | Scroll selects neck, upper and lower regions, including reverse travel; named controls and reduced-motion path remain available. |
| C13 | PASS | Copy distinguishes wet/dry cupping, uses uncertain pain language, covers skin/infection risk and clinician referral, and links to the official [NCCIH cupping guidance](https://www.nccih.nih.gov/health/cupping). No diagnosis or cure claim in the body flow. |
| C14 | PASS | `gh repo view` confirmed public repository and main branch. Source/assets/run instructions are present; `.gitignore` excludes build output and secrets. |
| C15 | PASS | Front/back/zoom screenshots show synthetic clinical figure, receding inactive markers and focal points; browser log covers ordered desktop/mobile scroll and reverse. |
| C16 | PASS | Four local intake questions cover duration, concern, goal and safety; notes stay on page; suggested catalog items are explicitly not proven pain treatments. |
| C17 | PASS | Source uses Three.js `WebGLRenderer`, continuously rendered GLB skin/bones, live pointer orbit and scroll synchronization; captured pixels change through actual front/back/focus states. |
| C18 | PASS | Hero start/room and film scrub/pause captures show scale/framing/subject changes; desktop/mobile/reduced-motion paths are evidenced. |
| C19 | PASS | Treatment card imagery was inspected with the home captures; Restore no longer depicts the rejected uncanny cupping dummy. |
| C20 | PASS | Neutral product stages, Casa-colour add action and populated/empty bag captures show image/title/price/quantity and related discovery. |
| C21 | PASS | Commit above is on public `main`; Pages run succeeded. Fresh live browser log has eight PASS observations across four direct routes at 1440 and 390, plus loaded WebGL, 30 products and no overflow; independent HEAD checks returned 200 for the routes and new GLB/still assets. |
| C22 | PASS | Home uses dominant panels, large editorial typography, dark/light pacing, hero room change, 3D zoom and film scrub; Casa identity and booking remain evident. |
| C23 | PASS | Final body captures show a continuous translucent cyan human silhouette, visible 3D internal structure and localized coral highlights without diagnostic labeling. |
| C24 | PASS | Scroll, click, keyboard intake, four questions, zoom, dark, reduced-motion and forced WebGL-failure captures cover desktop/mobile. |
| C25 | PASS | Final multi-position target screenshots and logs cover front/back/focus, 390px, reduced-motion and live publication. Independent brief/system/craft raw artifacts exist; this separate acceptance review finds no remaining defect. |
| C26 | PASS | Browser drag evidence and my independent direct browser check show visible 3D turn without opening intake; click/keyboard/scroll remain usable. |
| C27 | PASS | GLB load and failure stills are implemented and captured. Visible credit and `ATTRIBUTION.md` name HuBMAP and BodyParts3D licenses; model is synthetic and nonexplicit. |
| C28 | PASS | Target log captures first-chapter front→back→front full turn at both widths, guidance/scroll alignment, and subsequent forward/reverse wheel travel. My direct browser check corroborated first front→back turn. |
| C29 | PASS | The live figure matches bright cyan stills; mid-handoff captures and keyframes show a moving scan boundary with both still and WebGL painted, not a dark gap or doubled full figure. Reduced-motion/failure equivalents and drag/zoom remain present. |

## Seven gates

- **Coverage — PASS:** Frozen section map and the full route captures account for all required sections and conditional states, including fallback and bag-empty states.
- **Composition — PASS:** Full-page and adjacent-state captures show coherent hero→studio→services→body→booking and shop discovery→product→bag paths. The body guidance, focal figure and action share the same viewport at 390px.
- **Behaviour — PASS:** Browser evidence covers entry, action, feedback, destination and recovery; keyboard, narrow/desktop, dark, reduced motion, fallback and no-JavaScript are represented. I directly tested local drag and public responses.
- **Evidence — PASS:** Source aggregate hashes match capture logs. All referenced target/site/live screenshots exist; final changed states are visible and nonblank. The JSON record binds exact source and artifact bytes.
- **Independence — PASS:** I did not build the site and formed this verdict from the contract, neutral change list, rendered captures, separate source review and independent browser checks, without prior review scores or builder rationale.
- **Repair loop — PASS:** Historical raw review files remain in `reviews/`; current final logs/captures and this raw review document form a new independent result. I did not rewrite earlier verdicts.
- **Completion — PASS:** C1–C29 and all gates pass on the published revision, with no unresolved or required unverified work.

## Limits

The reviewer and builders share a filesystem and local runtime. I cannot cryptographically prove that I was never exposed to authorship or unpublished versions, and a headless Chromium sample does not cover every device/GPU. The public browser test and my direct HTTP checks establish the deployed routes and assets at review time; the raw logs and hash-bound captures establish the tested states. The old sequential handoff frame log is historical and was superseded by the final scan-reveal capture/keyframe record; it was not treated as current evidence.
