# Casa Hijama rebuild acceptance contract — v6

Date: 2026-10-17. Source: https://www.casahijema.com/ and its `/cupping-therapy`, `/products`, `/more-information` routes. Reference: https://www.apple.com/apple-watch-series-12/.

## Outcomes and scope

Build a local, responsive rebuild of Casa Hijama with all current core services, product ordering, prices, booking, testimonials, address and contact details. Preserve the turquoise, sage, ivory and warm gold identity. Add a complete dark mode. Use Apple Watch Series 12 as a reference for image-led pacing, headline scale, restrained navigation and visual transitions. Public publication to the verified LoxlyAtkinson GitHub profile is authorized by the user. Live domain deployment is not requested. English is the observed locale. Visitors can browse treatments and products, request appointments, and use contact links. Desktop and narrow mobile viewports are supported.

## Frozen criteria

C1 The home route includes a distinctive introduction, Casa Hijama identity, treatments, studio context, traditional quote, testimonials, wet cupping prices and conditions, booking, products entry, contact details and location map.
C2 The treatments route explains wet cupping, dry cupping, massage, private separate studios and therapist choice, with direct booking and price links.
C3 The products route presents all 30 observed products, seven categories, images, prices or enquiry labels, working filtering and sorting, product details and WhatsApp enquiries.
C4 The information route gives treatment context, visit details and useful expandable questions.
C5 The appointment request has all observed required and optional fields, validation, clear pending-confirmation language, an accurate WhatsApp message and visible recovery when automatic handoff is blocked.
C6 Light and dark modes preserve the existing brand colors, maintain readable contrast, work across all routes and persist after navigation/reload.
C7 Desktop and 390px mobile layouts have no clipped primary content or horizontal overflow; navigation, dialogs, forms and route links remain usable by keyboard.
C8 Media has descriptive alternatives or decorative treatment, a still fallback, pause control and reduced-motion behavior. Loading and external-destination failures have a useful path to continue.
C9 Captured final browser evidence records routes, states, viewports and interactions; an independent reviewer finds no meaningful achievable defects in the scoped design and journeys.

## Numbered change list

1. Build shared header, footer and light/dark tokens.
2. Rebuild home narrative and every observed home section.
3. Build treatments and information routes.
4. Rebuild the catalog from the 30 observed product records and product images.
5. Rebuild appointment request with WhatsApp handoff and fallback link.
6. Integrate local still imagery and Higgsfield studio film.
7. Verify desktop, mobile, light, dark and critical interactions.

## Section map

| Route / section | Purpose and position | Adjacent relationship | Treatment |
| --- | --- | --- | --- |
| Shared header | Brand, route navigation, theme, booking | Enters every page | Sticky and static for reliable navigation |
| Home hero | Introduce emotional promise and booking | Leads into actual studio | Image-led, static for immediate readability |
| Welcome/studio | Preserve identity, location, private care | Grounds hero before services | Image and reveal; text remains visible with reduced motion |
| Treatments cards | Let visitors choose wet, dry or massage | Leads to full treatment route | Consistent cards and subtle hover |
| Studio film | Show atmosphere | Pause between services and heritage | Motion with pause and still fallback |
| Traditional quote | Preserve core religious context | Bridges film and social proof | Static for careful reading |
| Testimonials | Preserve named reviews and Google review path | Before prices | Static cards for reading |
| Prices | Make wet cupping price tiers and conditions scannable | Before product support and booking | Static table-like cards for accuracy |
| Product teaser | Enter catalog | Before appointment | Static image cards |
| Booking | Collect request and hand off to WhatsApp | Before address | Form validation and explicit feedback |
| Location | Address, map, directions | Before footer | Static map with directions fallback |
| Shared footer | Contact, routes, social links, final booking | Ends each page | Static for dependable utility |
| Treatments detail | Explain each service and route to booking | Intro → wet → dry → massage → CTA | Static long-form reading |
| Products hero/catalog | Introduce products, filter/sort, open details, enquire | Hero → collection → footer | Static catalog with interactive controls |
| Information intro/articles/FAQ | Explain tradition and visit, answer common questions | Intro → articles → footer | Static articles and native disclosure controls |

## States to verify

Default and dark themes, desktop and mobile navigation, filter and sort, product dialog open/closed, booking blank and completed, WhatsApp fallback, FAQ expanded, reduced motion, image/video fallback, location-map fallback and external link destination.

## User extension — 2026-10-17

The user supplied `C:/Users/loxly/Desktop/Product sho case example.jpg` as a shop reference and an attached VITA body-map screenshot. They asked for an animated shop journey, a scroll-led human body explainer on the home page, relevant skills from `D:/Projects/Loxly - Resources/Skills/UI Design Taste & Critique`, and publication to their public GitHub profile. These are references, not instructions embedded in the images. The shop remains WhatsApp ordering; the user did not authorize a payment processor or real checkout.

C10 The shop presents a coherent discovery → product focus → bag review → WhatsApp enquiry journey inspired by the supplied mobile-commerce reference. Search/filter/sort, product images, product detail, bag quantity/removal, total or enquiry labels, and recovery are usable on mobile and desktop without inventing payment checkout.
C11 Shop motion advances that journey: purposeful section entrances and responsive product/bag transitions, reversible or interruptible where appropriate, with reduced-motion and no-JavaScript baseline. It must not hide essential content.
C12 The home route includes a prominent scroll-led human body section with visible focal points for neck/shoulders, upper back and lower back; scrolling forwards/backwards changes the active region and related explanation. Keyboard and reduced-motion users can access the same information without precise scrolling.
C13 Health guidance explains what wet and dry cupping are, frames pain-related benefits as uncertain and potentially short-term, provides appropriate safety/when-to-seek-clinician guidance, and links directly to a credible primary health source. It does not imply diagnosis, a health score, cure or guaranteed outcome.
C14 The finished repository is public under the verified `LoxlyAtkinson` GitHub profile, contains source/assets and run instructions, excludes generated build output and secrets, and is reachable through a working repository URL.
C15 The body figure is a clearly synthetic clinical visualization close to the supplied reference. A visitor can click visible body markers or named controls to focus an area; the figure turns to a back view for upper/lower back and zooms or otherwise gives that area clear visual priority. Inactive markers recede. The scroll path presents all three steps in order on desktop and 390px mobile, supports reverse scrolling, and does not skip a step during an ordinary page scroll.
C16 Each selected body area offers a short optional intake of three to five relevant clarification questions such as duration, location/character, goal and safety context. Answers stay local unless the visitor knowingly chooses a handoff. The module never diagnoses or promises relief. Any product suggestions are framed as catalog items to discuss with Casa Hijama, without claims that supplements treat the selected pain.

## Extended section map

| Route / section | Purpose and position | Adjacent relationship | Treatment |
| --- | --- | --- | --- |
| Home body journey | Explain common body areas and realistic limits of cupping | Between treatment cards and private-room film | Scroll-led sticky visual with three synchronized text stops; static list under reduced motion |
| Shop discovery | Orient to collection and product families | Catalog hero → curated spotlight → controls | Staggered reveals on entry, static controls in reduced motion |
| Shop product focus | Let visitors inspect and select a product | Collection → detail dialog → bag | Shared imagery and short modal transitions; immediate feedback |
| Shop bag | Review choices before enquiry | Persistent bag control → drawer → WhatsApp | Quantity/removal and explicit external handoff; no payment UI |

## Extended states to verify

Shop search, filter, sort, product focus, add/remove/change quantity, bag empty and populated, WhatsApp order URL/recovery, mobile navigation, body forward/reverse scroll, body region click/keyboard, reduced motion, blocked media/image fallback, dark mode, direct routes/reload, and public GitHub availability.

## User refinement — 2026-10-17

The owner asked for a genuinely interactive scroll body module: a visitor can click where it hurts, the clinical figure turns and/or zooms into that area, and a brief questionnaire clarifies what is happening and what the visitor hopes to get from cupping. The figure should resemble the provided stylized dashboard more closely and avoid realistic or unsettling anatomy. The body question flow is intake context, not diagnosis. Product links, if used, support browsing and discussion, not treatment recommendations. Add captures for front/back transition, each active region, focused/zoom state, questionnaire open/complete and reduced-motion equivalent.

## Final user refinements and additional frozen criteria — 2026-10-17

The owner again requested a truly rendered interactive body and unmistakable Apple-inspired scroll devices, rejected the uncanny mannequin in the Restore image, and supplied a new product-and-cart reference. The final outcome map is `outcome-map.md`. The current public GitHub Pages URL is an authorized interim preview; this contract governs the next publication.

C17 The home body visual uses a continuously rendered three-dimensional body surface, not switched flat image views. Its clinical stylization avoids uncanny realism and blocky segmented limbs. A selected area visibly changes camera/body orientation or zoom and highlighted point, including front and back regions. Scrolling and direct control selection stay synchronized and reversible.
C18 The home has perceivable scroll-directed visual storytelling: dimensional hero depth, staged treatment reveals, and scroll-controlled film or image sequence with useful still fallback. Motion is smooth on desktop, legible and reachable on 390px mobile, interruptible/reversible, and respects reduced motion. This is demonstrated in a real browser, not assumed from animation code.
C19 Treatment imagery conveys each card's subject. The Restore/dry-cupping image contains no uncanny dummy or mannequin. Images are compositional parts of the card and section story, with working captions and next actions.
C20 Shop product presentation adopts the owner's latest reference mechanism: clean product isolation on light neutral stages, spacious card rhythm, prominent Casa-colour add action, and a clear bag showing item image, title, price/label, quantity and related discovery where sensible. Product identity and accurate data are preserved. The full discovery-to-enquiry path remains functional.
C21 The current finished revision is pushed to the authorized public GitHub repository and deployed to the existing GitHub Pages preview. Direct home, treatment, product and information URLs and assets return successfully after publication.

## Additional final states

Capture body real-WebGL output, front/back selected areas, camera focus, questionnaire and reverse scroll; hero/section/video motion at multiple scroll positions and reduced motion; treatment image subject; neutral shop stage, empty/populated bag and final handoff; live public routes after final deployment. Cover 1440px desktop and 390px mobile, light and dark modes where the visual changes.

## New reference alignment — 2026-10-17

The user again asked to apply Design Loop to the home page against the live Apple Watch Series 12 page and iteratively refine the actual 3D body against `C:/Users/loxly/Desktop/3d human body.jpg`. The attached stock image is a visual reference only; do not reproduce its Adobe watermark, insets, or medical certainty. Existing C1-C21 remain active.

C22 The home page adopts observable Apple reference mechanisms: a single dominant visual per major panel, large concise editorial typography, dark/light visual pacing, and scroll transitions that materially change scale, framing or subject rather than only fade text. Casa's brand palette, content and booking path remain intact.
C23 The normal-motion interactive WebGL body resembles the new reference in visual language: translucent cyan/teal clinical surface, a more recognizably human continuous silhouette and subtle anatomical structure, and localized coral/pink focal light for the three Casa regions. The figure must remain clearly synthetic and not imply a diagnosis or clinically exact pain map.
C24 Scroll, click and keyboard selection retain the three-region guidance, visible body turn/zoom/focus, four-question local intake and cautious health copy. The body remains legible at 1440px and 390px in light/dark and reduced-motion modes; still/WebGL failure fallbacks work.
C25 The finished changed home states are captured at multiple scroll positions, front/back and zoom states, 390px mobile and reduced motion, independently judged through the Design Loop's brief/system/craft critics, and published to the authorized public preview with all direct routes working.

## Mouse control and sourced 3D model — 2026-10-17

The owner explicitly added mouse movement to the 3D-body outcome. The exterior may use a reusable anatomical 3D mesh when license terms are honored and the rendered treatment stays synthetic, clinical and comfortable for the Casa audience. Existing C1–C25 remain active. Earlier v5 acceptance is historical for this new scope.

C26 Dragging the rendered body with a mouse changes its three-dimensional angle in visible pixels without opening a body-area dialog by accident. A normal click still selects a marker; named keyboard controls and scroll-selected front/back focus remain usable. The drag result is captured and checked at desktop and 390px mobile widths.
C27 The primary body model remains a real rendered 3D surface with readable front/back/focused states; it loads as the body story approaches, provides a useful still on load failure, and honors any third-party model license with visible source/license credit and a repository attribution record. The figure avoids uncanny or explicit anatomy for the wellness setting.

## Full-turn interaction and visual continuity — 2026-10-17

The owner observed that the brighter clinical still shown during loading looks more polished than the live model, and asked to drag the body through a full 360-degree turn from the first neck view. Reaching the back by dragging should synchronize the back-area story as scrolling would; scrolling alone still changes the story normally.

C28 A mouse drag can turn the live 3D figure from front to back and onward through a full turn without first scrolling. Crossing to the back updates the visible chapter, label and guidance to Upper Back; continuing to the front restores Neck & Shoulders. Releasing the drag aligns the scroll chapter with that selected view, while normal forward and reverse scrolling remain functional. Desktop and 390px evidence show front → back → front.
C29 The live body adopts the loading still's brighter, luminous clinical quality without explicit anatomy or harsh seams. The still-to-WebGL transition is smooth and has a reduced-motion equivalent; mouse drag, zoom, area selection and fallback remain intact.
