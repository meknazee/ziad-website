# private lesson cards: hourly-first pricing

Redesign the private lesson package cards on `/packages` so the effective hourly rate is the prominent number and the total price sits beneath it. Update the savings line to reflect 90-minute savings.

## changes

### 1. `src/lib/packages.ts`

- Add optional `hourlyRate?: string` to the `PackagePrice` type.
- Update each `privateTiers` price object to include the new field and keep the existing `total`:
  - **game**: 60 min `$133/hour` / total `$1,596`; 90 min `$129/hour` / total `$2,337`
  - **set**: 60 min `$126/hour` / total `$3,024`; 90 min `$123/hour` / total `$4,428`
  - **match**: 60 min `$119/hour` / total `$4,284`; 90 min `$116/hour` / total `$6,273`
- Update the `save` strings to the 90-minute savings values:
  - game: `save $123 on 90-min`
  - set: `save $492 on 90-min`
  - match: `save $1,107 on 90-min`
- Leave clinic and masterclass price objects unchanged.

### 2. `src/components/PackageCard.tsx`

- In the price grid, when `price.hourlyRate` is present, render:
  1. `label` as the small uppercase caption (e.g., "60 minutes")
  2. `hourlyRate` as the large display number (e.g., "$133/hour")
  3. `total` as the smaller bottom line (e.g., "$1,596")
- When `hourlyRate` is absent, keep the current layout: label, total (large), per (small).
- Preserve the existing card styling, hover states, and "sign me up, coach" mailto action.

## verification

- `bun run build` passes with no TypeScript errors.
- `/packages` shows private lesson cards with hourly rates prominent and totals below.
- Clinic and masterclass cards remain visually unchanged.
- No horizontal overflow at mobile widths; mailto links encode the correct package context.
