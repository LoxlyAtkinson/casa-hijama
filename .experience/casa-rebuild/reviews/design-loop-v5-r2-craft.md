# Design loop v5, round 2 — craft critic

Scope: visual craft judgment against `.experience/casa-rebuild/bar-v3.md` only. I inspected the supplied Apple screenshot, the supplied human-body reference (ignoring its watermark and anatomy insets as image content), and the eleven named v5 rendered home/body captures. This is a judgment of those rendered states; still images cannot prove animation, WebGL rotation, or control behavior. I did not inspect implementation, builder notes, or earlier critiques.

## Home — FAIL

The opening cup frame gives Casa a clear, service-specific hero: a large glass cupping vessel, dark surrounding space, a short oversized statement, and a visible booking action. The next captured state reveals a genuinely different room scene, which meets the reference's scene-change mechanism more convincingly than a mere text fade. The warm room and clinical teal cup also establish a distinct Casa identity.

The room state loses the reference's clearest craft move: keeping its visual subject and large statement in separate, stable zones. On desktop, “Private rooms. Personal attention.” crosses the bed and blanket, competing with the room itself. The pale teal second line lands on the light bedding. On mobile, the same teal words sit directly over the beige blanket and the bed is cropped into an indistinct texture behind the headline. The message is still decipherable, but this frame no longer has the crisp subject-first hierarchy or dependable text contrast of the opening frame and the Apple reference.

**Single biggest actionable gap:** Recompose the room frame so the full headline has a consistently dark, quiet field of its own while the bed remains a clear subject on desktop and mobile. Preserve the room scene and Casa's service language; move the text zone or adjust the image crop/tonal treatment rather than merely shrinking the type.

## Body — FAIL

Casa has a continuous cyan human silhouette on dark blue with brighter edges and restrained internal spine/rib lines, so it reads more like a scan than a green mannequin. A single pink focus is clearly active while other region points recede. Front and back views, readable explanatory text, and the lower-back close framing connect the selected area to the figure. That is a credible service-specific interpretation of the supplied reference, with appropriately cautious copy.

The default mobile figure is too small to carry the reference's central visual idea. In both front and upper-back captures it occupies roughly the middle third of the viewport's height, and the active warm focus and fine anatomy reduce to tiny marks. The lower-back zoom finally gives the chosen area enough scale, but it crops away most of the figure. The fallback shows more anatomy-like forms yet remains similarly small. The reference's strong full-body scan presence is therefore missing at the mobile entry state, which is where visitors first need to recognize the figure and its selectable regions.

**Single biggest actionable gap:** Enlarge the default mobile scan and active focus substantially while retaining enough of the continuous body to orient the visitor, then let the existing close framing provide the detail view. Rebalance the space around the heading and region copy to give the scan visual priority without sacrificing readable HTML.

Neither verdict asserts whether film pause, scroll motion, reduced-motion handling, region selection, or real WebGL rotation works; the supplied still captures alone cannot establish those behaviors.
