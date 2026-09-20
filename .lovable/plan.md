# coach z avatar branding

## goal
turn the existing contact-page portrait into a clear circular coach z avatar and use it consistently at personal touchpoints across the site.

## implementation
1. create one reusable avatar treatment from the existing portrait: a tight face-centered circular crop, subtle court-green ring, and responsive miniature sizes with accessible alt text.
2. replace the orange dot beside “coach z” in the desktop and mobile header with the avatar, preserving the current navigation spacing and sticky behavior.
3. add the avatar beside the coach z identity in the footer.
4. add a compact “coach z” identity row at the top of every inquiry form, including its submitted confirmation state.
5. place the avatar in booking touchpoints: the inline calendar heading/fallback area and the floating booking control, without obscuring content on mobile.
6. place the avatar beside each “sign me up, coach” action on package cards and shot-masterclass cards while retaining one CTA per package.
7. keep all visible copy lowercase and reuse the current portrait file rather than creating another image asset.

## quality checks
- verify the face remains centered and recognizable at header, footer, form, booking, and package sizes.
- check phone, tablet, and desktop layouts for crowding, clipping, overlap, and button text wrapping.
- confirm navigation, inquiry submission, calendar links, and package email links behave exactly as before.

## technical details
- add a small shared avatar component with named size variants so cropping, border treatment, and alt text remain consistent.
- use semantic design tokens for the ring and surfaces; no new color palette or backend changes.
