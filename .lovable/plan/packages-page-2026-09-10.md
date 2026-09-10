# packages page

A new `/packages` page collecting every prepaid option in one place: private lessons, group clinics, and shot masterclasses. Three stacked sections, each collapsible/expandable, with the private-lesson section open by default.

## 1. private lessons (game / set / match)

Same three tiers and the same prices as today. Only the perk list changes — reordered and expanded:

1. priority booking — all tiers
2. court fees + locked-in rate — all tiers
3. end-of-package report — set, match
4. transferable to friends & family (restrictions apply, see terms) — set, match
5. video review — set, match
6. monthly check-in — match
7. bring a friend for free — match

## 2. group clinics (90 minutes)

Two clinic types, each with game / set / match tiers. Prices per player.

**doubles clinics** — $60 baseline
| tier | clinics | discount | total | per clinic |
|---|---|---|---|---|
| game | 6 | 5% | $342 | $57 |
| set | 12 | 10% | $648 | $54 |
| match | 18 | 15% | $918 | $51 |

**junior development clinics** — $50 baseline
| tier | clinics | discount | total | per clinic |
|---|---|---|---|---|
| game | 12 | 5% | $570 | $47.50 |
| set | 18 | 10% | $810 | $45 |
| match | 24 | 15% | $1,020 | $42.50 |

Live ball clinics are intentionally left out for now.

## 3. shot masterclass

Five separate blocks — serve, volley, slice, topspin, return. Each is 5 x 60-minute sessions, $275 per player, focused groups capped at 3 players. Presented as a compact grid of five cards with a shared "what's included" note (small group, plateau-breaking focus, video feedback on request).

## shared behavior

- Each section header shows the title plus a one-line summary and expands/collapses on click; state is per-section, keyboard accessible.
- Every package keeps the existing email inquiry action with a package-specific subject line.
- The existing full-terms PDF link stays at the bottom of the private-lesson section; the terms note mentions the transferability restriction.
- All copy stays lowercase and uses the current court-green / clay-orange palette, Fraunces headings, Inter body.

## navigation

- Add "packages" to the main menu and the footer.
- The services page keeps a short teaser that links to `/packages`; the full package grid moves off services to avoid duplication.

## technical details

- New route `/packages` in `src/App.tsx`, new `src/pages/Packages.tsx`.
- Package data extracted to `src/lib/packages.ts` (private tiers, clinic tiers, masterclass blocks) so the cards render from one source.
- Reuse the existing pointed-header comparison card markup from `src/pages/Services.tsx`, lifted into a shared `PackageCard` / `PackageGrid` component.
- Collapsible sections via the existing shadcn accordion primitive.
- Update `src/components/SiteHeader.tsx` and `SiteFooter.tsx` links; trim the packages block in `Services.tsx` to a teaser.
- Verify at desktop and mobile widths: no horizontal overflow, equal-height columns, working mail links and PDF link.
- Sub-agents will handle the clinic/masterclass data build and the services/nav cleanup in parallel.

## open item

The PDF still describes the old private-lesson perks and has nothing on clinics or masterclasses. Regenerating it is not included here — say the word and it can be refreshed in the same pass.
