# Casa Hijama v4 independent acceptance review 01

Reviewer: Codex independent acceptance judge (`/root/final_acceptance_judge_v4`). Run: `casa-v4-01-04147fa9-20261017`. Frozen contract: `../contract-v4.md`; outcome map: `../outcome-map.md`. Reviewed source commit: `04147fa9a80b2add33549c49968a5ca8b16cbe64`. Public preview: https://loxlyatkinson.github.io/casa-hijama/.

Historical candidate review: subsequent source edits are in progress, so this verdict is bound only to the reviewed commit and its captures. It is not the final project acceptance record.

## Verdict

**PASS, 100/100 scoped acceptance.** I found no remaining meaningful achievable defect in the frozen C1–C21 outcomes after inspecting the final rendered evidence, running separate Chromium checks on the local and published sites, and checking the source wiring. The matching machine record is `review-v4-01.json`.

## Independent observations

- Home, treatment, product and information routes render directly on the published site at 1440×900 and 390×844, return HTTP 200, show the expected route content and have no horizontal overflow. The Pages workflow for the reviewed commit completed successfully. The public body-section treatment link resolves to `/casa-hijama/cupping-therapy/` and opens that page on desktop. On mobile that particular link is hidden by the responsive layout; the treatment cards and mobile navigation still reach the route.
- The full-page light/dark captures show the required home narrative, treatment imagery without the rejected Restore mannequin, prices and conditions, booking, map fallback, product discovery and shop bag, information articles and FAQs. The revised shop chapters break up the 30-product collection while preserving product imagery, identity, price labels and prominent add actions. The bag shows image, title, quantity, known-price subtotal, related products and the external enquiry/recovery links.
- I independently drove the body section with ordinary wheel increments at 1440 and 390 pixels. Both widths progressed `0→1→2` and reversed `2→1→0` without skipping a region. The browser rendered a WebGL canvas. Named upper-back selection changed the visible back region, opened the four-question check-in, produced local conversation notes, and returned keyboard focus after Escape. Final PNGs show neck, upper back, lower back, zoom, intake and reverse states. The corrected reduced-motion PNG visibly contains all three guidance cards.
- I independently observed hero copy transitions and reversal, and film time advancing then reversing with scroll. The captured film pause, still and failed-media states retain useful content and a booking action. The NIH cupping guide is the direct primary source for the cautious health and safety guidance.
- I independently exercised mobile search, category filtering, sorting, product add, quantity change, removal, empty bag and encoded WhatsApp enquiry. The booking capture verifies blank-form validation, completed request wording and a fallback link. Theme persisted across navigation and reload; mobile menu and dialogs remained usable. With JavaScript disabled, the public 390-pixel shop displayed 30 static name/price entries, contact links and no overflow.

## Criteria

| IDs | Judgment | Basis |
| --- | --- | --- |
| C1–C4 | PASS | Full-page route captures, direct public routes and source content cover the home narrative, treatments, 30-product catalog and information/FAQ. |
| C5–C8 | PASS | Booking validation/handoff/fallback; light/dark route captures; measured desktop/mobile widths; keyboard/modal, media still and reduced-motion states. |
| C9–C13 | PASS | Final 45-observation browser log and inspected PNGs; shop and body interactions; cautious health language and direct NIH source. |
| C14–C16 | PASS | Public repository and run instructions; ordered/reversible 3D body focus and local four-answer intake with discussion-only product links. |
| C17–C21 | PASS | Continuous WebGL clinical figure, controlled scroll story, treatment-specific imagery, revised neutral-stage shop journey, and deployed public routes/assets. |

## Gate and provenance notes

Coverage, composition, behaviour, evidence, independence, repair loop and completion: **PASS**. I retained prior raw failures and reviewed the latest repaired revision rather than translating an earlier builder verdict. The machine record hashes the frozen contract, changed source files, final PNGs and browser log. My Chromium checks are separate from the builder's 45-observation log; I inspected the actual captures, including the corrected reduced-motion frame. The reviewer and builders share a filesystem and runtime; this is a fresh agent judgment, not a blind external human review. Public browser observations cannot prove every future external-service state; the frozen fallback states were exercised and remain visible.
