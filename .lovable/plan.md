# game / set / match package redesign

## goal
Restyle the lesson-package area to echo the attached comparison graphic while preserving coach ziad’s established court-green, clay-orange, and off-white identity.

## design changes
- Rebuild the three packages as aligned comparison columns with prominent pointed banner headers inspired by the reference.
- Keep the names `game`, `set`, and `match`, with `set` visually emphasized as the recommended package.
- Give totals and per-lesson rates a clearer reading order, without changing any current pricing or savings.
- Turn the shared package perks into consistent feature rows within each column, using check and cross icons to show what each package includes.
- Retain the email inquiry action for each package and the existing downloadable full-terms link.
- Remove the separate perks panel once its information has been incorporated into the package comparison.

## responsive behavior
- Desktop: three equal-height columns with aligned feature and pricing rows for quick comparison.
- Mobile: stacked package cards with the same pointed headers and complete feature lists, avoiding horizontal scrolling or clipped text.

## technical details
- Update only the lesson-packages portion of the services page.
- Use the existing semantic color tokens, Fraunces display type, Inter body type, and current icons.
- Preserve lowercase copy, accessibility labels, link destinations, prices, discounts, policies, and PDF path.
- Verify the result at desktop and mobile sizes, including button behavior and the PDF link.
