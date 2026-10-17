# Casa Hijama rebuild acceptance contract — v3

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
