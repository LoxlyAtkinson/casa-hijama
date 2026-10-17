# Independent acceptance review 01

Reviewer: `independent_review`. Builder: `/root`. Contract: `../contract-and-section-map.md`. Verdict: **FAIL**; scoped score **60/100**. Review run: `review-01-20261017`.

I read the frozen contract, reference mechanisms, source manifest, browser log and implementation source, and inspected all 12 supplied PNG captures at original resolution. The current local preview responded at `http://127.0.0.1:4173/`; I did not run a new live browser journey or alter implementation. All listed source hashes matched the manifest when checked. The builder log is treated as a claim tied to images, not as independent proof of interactions. The shared filesystem/runtime permits the builder to change files or browser state while I review; this is procedural independence, not authenticated blinding.

## Visual judgment

The captured desktop and mobile home heroes have clear hierarchy, legible copy, visible booking action, and a consistent turquoise/sage identity. The light treatments and catalog heroes, product filter state, product dialog, information hero/FAQ and booking status also render coherently in the supplied first-viewport captures. Dark home appears legible. These observations support only the captured frames.

Composition of the full page cannot be accepted: there are no captures of home welcome, treatments cards, film, traditional quote, testimonials, prices, product teaser, location/map or footer; no full treatments or information route sequence; and no complete catalog/30-item view. The desktop dark capture is a different viewport from the desktop light capture, so it does not establish equivalent responsive behavior. The mobile captures show only the home hero and the start of booking. No visual evidence covers the mobile menu, form completion, catalog, dialog, treatments or information route, nor dark non-home routes.

## Source and wiring review

1. **C3 FAIL — two catalog images have guaranteed bad URLs.** `public/assets/product-24.png` and `product-25.png` are the only files for Neem Soap and Himalayan Soap. `productCard()` and the dialog in `src/main.js` always request `product-${id}.jpg`. Filter to Soaps or open either product to reproduce the missing images. Add an explicit asset path/extension to each product record or derive a verified path, then use it consistently in cards, dialogs and any teasers. Capture the repaired Soaps filter and both product dialogs with successful image loads.
2. **C5 BLOCKED — WhatsApp handoff is not independently evidenced.** The booking-ready image shows a fallback anchor, and source constructs a message with all form fields and says confirmation is pending. There is no capture or trace of validation errors, the actual `wa.me` URL/message, blocked-popup recovery, or external destination. Test blank/invalid and completed forms, inspect the encoded URL without sending a real message, block automatic opening and follow the fallback. Record entry, action, feedback, destination and recovery.
3. **C9 and evidence FAIL — all 12 `.png` files contain JPEG bytes.** Their first bytes are `FF D8 FF E0` and `JFIF`, not the PNG signature. The required `check-experience-acceptance.py` rejects every one as a non-decodable PNG capture. Re-capture or convert to genuine non-interlaced 8-bit RGB/RGBA PNG, update hashes and browser observation bindings, and rerun the checker. The images were visually inspected, but their current format cannot satisfy the portable evidence gate.
4. **C6–C8 BLOCKED — required states are not verified.** The log has no navigation/reload persistence check, desktop and 390px mobile journeys across all four routes, keyboard traversal/focus, product sort order, dialog focus and close return, reduced-motion behavior, video play/pause and still fallback, map failure fallback, or external-link destination/failure checks. Add observed browser records and final captures of these states after repairs. Measure CSS viewport and horizontal overflow at 390px as specified in C7; the current mobile captures report 375px.
5. **C1, C2, C4 and composition BLOCKED — route screenshots stop before most contract sections.** Source contains named sections, but source presence does not prove rendered content, transitions, accessibility or absence of clipping. Capture and inspect full affected sections with adjacent transitions, including the map/directions fallback and footer. Verify all links and anchors in browser.

The 30 product records and seven non-All categories are present in `products.json`, and source has filter, sort, native dialog, FAQ, theme storage and booking code. These are wiring observations, not browser acceptance.

## Seven-item change checklist

| Item | Status | Finding |
| --- | --- | --- |
| 1. Shared header, footer, themes | BLOCKED | Header and home themes visible; footer and persistence across routes/reload unverified. |
| 2. Home narrative and sections | BLOCKED | Hero visible; most mapped sections lack rendered evidence. |
| 3. Treatments and information | BLOCKED | Heroes and one FAQ visible; full route journeys absent. |
| 4. 30-product catalog | FAIL | Two broken image paths; 30 records present but full catalog and sort unverified. |
| 5. Appointment/WhatsApp | BLOCKED | Ready status visible; validation, URL, blocked handoff and recovery unverified. |
| 6. Imagery and film | BLOCKED | Hero imagery visible; film, pause, still/reduced-motion states unverified. |
| 7. Desktop/mobile/light/dark interactions | BLOCKED | Captures omit required viewports, routes and interaction states. |

## Gate status and exact resume step

Coverage **BLOCKED**; composition **BLOCKED**; behaviour **FAIL**; evidence **FAIL**; independence **PASS with shared-filesystem/runtime limitation**; repair loop **BLOCKED pending repairs and new review**; completion **FAIL**. C3 fails; C1, C2, C4–C9 remain unverified or incomplete. This packet deliberately fails the acceptance checker because the contract prohibits accepting failed or unverified required checks.

The checker was run against `review-01.json` and exited 1, listing all 12 false-PNG captures plus the deliberate non-PASS criteria/gates and unresolved work.

Fix the product asset URL defect, then rerun the complete affected journeys. Recapture all final sections and states listed above as real PNGs, replace stale evidence, bind hashes to the final files, and request a fresh independent review. Preserve this raw report and verdict. Do not promote this run to PASS.
