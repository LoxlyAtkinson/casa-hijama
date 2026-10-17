# Design Loop round 5 — SYSTEM critic raw report

**Verdict: PASS**

**Basis:** Current rendered `http://127.0.0.1:4173/` and `/products`, judged against `design-system.md` and the frozen Casa rebuild criteria. I did not use builder rationale or earlier critic verdicts. Chromium checks used exact 1440×900 and 390×844 viewports.

## Findings

- The six showroom chapters retain the original product images, Casa palette, consistent category/title/description/price/enquiry hierarchy, and visible shelf arrows. Cards intentionally continue beyond each shelf viewport; the controls reveal them without page-wide horizontal overflow. At 390px, the first shelf rail moved from `scrollLeft=0` to `189` on arrow click and to `378` when that focused arrow received Enter.
- The catalog exposes **30 unique product detail entries**. I opened each one and checked that the dialog heading matched the selected product; all 30 closed with Escape. Kalonji detail content, price and actions fit inside both desktop and 390px light/dark viewports.
- Searching `Kalonji` produced the conventional result grid with three matching products. Filtering to Oils produced two products; sorting that result low to high placed R90 before R120. The filtered grid has consistent card structure and no horizontal overflow.
- Home and products rendered in light and dark at both widths. The body section retains a near-black field, sage figure, semantic text, marked regions and readable contrast. No tested route had horizontal overflow.
- Body navigation worked with the keyboard: Enter on “02 Upper back” selected that region, turned the figure, and exposed the upper-back content/check-in. Its dialog displayed readable questions and closed with Escape. Native wheel scrolling moved down 600px and back to the original position at both widths.
- Under reduced motion, the body figure remained visible while all three explanations appeared in ordinary page flow. The studio video had no active media source. Ordinary motion had a media source. The reduced-motion region control remained keyboard operable.

**Biggest gap:** No meaningful system failure found. The showroom’s next product is partially visible at the shelf edge on mobile, but its arrow and keyboard controls work and the conventional result grid gives a complete reading path.

## Captures inspected

`round5-shop-{1440,390}-{light,dark}.png`, `round5-shop-search-390.png`, `round5-shop-filter-sort-390.png`, `round5-body-{1440,390}-light-reduce.png`, `round5-body-1440-light-no-preference.png`, `round5-body-1440-dark-reduce.png`, `round5-body-modal-{reduce,no-preference}.png`, and `round5-detail-{1440,390}-{light,dark}.png`.

This is the focused Design Loop system verdict, not a claim that the full experience acceptance contract has passed.
