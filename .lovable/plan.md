## Goal

Rebuild the site from the ground up to match the editorial, tennis-forward aesthetic of the Advantage Out Coaching project — same structure, same design language — while keeping our own bits (SES pillars page, email + phone number, Square as a placeholder).

## New site map

- `/` — Home (hero, quick facts, approach teaser, CTA strip)
- `/about` — About Coach Z (story, philosophy, credentials) — placeholders for personal copy
- `/services` — Private lessons, Semi-private, Doubles Clinics, Junior development, Strength & Conditioning tiers + "what's included" + DC–Virginia locations
- `/strength-conditioning` — Keep the existing SES pillars page (radar chart + S/E/S cards), restyled to match the new design system
- `/book` — Book page: short copy + a single primary CTA button → Square Appointments URL (placeholder for now), plus direct contact aside (email + nostr only)
- Catch-all → existing NotFound

Old standalone routes removed: `/schedule/private-lesson`, `/schedule/strength-conditioning`, `/bitcoin-resources`, `/podcast` (links live only in footer as small `<a>` placeholders).

## Design system overhaul (`src/index.css` + `tailwind.config.ts`)

- Fonts: Fraunces (display, italic-friendly) + Inter (sans), loaded via Google Fonts.
- Palette (HSL semantic tokens, light + dark):
  - background: warm off-white / dark forest
  - foreground: deep court green
  - accent: clay orange (the italic highlight color)
  - primary: court green
  - secondary/muted: warm sand
  - extra tokens: `--court`, `--clay`, gradient `--gradient-clay`, shadows `--shadow-court`, `--shadow-soft`
- Base typography: tight tracking on display headings, generous line-height on body, smooth scroll.
- All colors expressed as HSL; no raw hex in components.

## Components

New shared layout:

- `src/components/Layout.tsx` — wraps page with `SiteHeader` + `<main>` + `SiteFooter`.
- `src/components/SiteHeader.tsx` — sticky, backdrop blur; brand dot + "Coach Z / Tennis Coach"; nav: Home, About, Services, S&C, Book; mobile sheet menu with touch-friendly tap targets.
- `src/components/SiteFooter.tsx` — three-col: brand blurb, Explore nav, Contact (email + nostr). Bottom row: "Other projects" small links (bitcoin resources, podcast & blog) + © line.

Page components (in `src/pages/`):

- `Home.tsx` — hero with court image + clay-accent italic headline, quick facts row (Where / Who / When), approach split section with image + stat badge, CTA strip ("First session is on me") linking to /book.
- `About.tsx` — portrait + intro, three numbered beliefs, credentials grid (placeholder bullets in `{ }` style), CTA to /book.
- `Services.tsx` — 4 tier cards (Private 1:1 featured, Semi-private, Junior development, Strength & Conditioning) → S&C card links to /strength-conditioning; what's-included + locations grid; closing CTA.
- `StrengthConditioning.tsx` — rebuilt around `SESPillarsChart` with new hero intro + closing CTA to /book; existing radar chart component reused but restyled via tokens.
- `Book.tsx` — short header, big primary CTA button → `SQUARE_BOOKING_URL` constant (placeholder `"https://book.squareup.com/REPLACE_ME"` with a visible `TODO` comment), plus direct-contact aside with Email + Nostr cards only.

Legacy components removed: `Hero.tsx`, `Header.tsx`, `Footer.tsx`, `TennisCoachingSection.tsx`, `ContactSection.tsx`, `OtherProjectsSection.tsx`, `BitcoinResourcesSection.tsx`, `PodcastSection.tsx`, `ProjectCard.tsx`. (We'll keep `src/components/ui/*` and `src/components/SES/*` as-is.)

Old pages removed: `SchedulePrivateLesson.tsx`, `ScheduleStrengthConditioning.tsx`. `Index.tsx` becomes the new `Home.tsx` route. `src/data/projects.ts` removed.

## Assets

Copy three reference photos from Advantage Out Coaching → `src/assets/`:

- `hero-court.jpg`
- `court-detail.jpg`
- `coach-portrait.jpg`

Existing `public/images/tennis-*` and `src/assets/signal-logo.png` removed (unused).

## Routing (`src/App.tsx`)

Replace routes with: `/`, `/about`, `/services`, `/strength-conditioning`, `/book`, catch-all NotFound. Still uses `react-router-dom` (the reference uses TanStack Router but our project is Vite + React Router — we'll keep our router, just swap the route set).

## Copy strategy

- Bio, credentials, story → placeholders: `[your headline]`, `[your story — 2 short paragraphs]`, `{credential}` list items, etc., per your request.
- Service area kept as **"Washington DC · Arlington · Northern Virginia"**.
- Contact reduced to **email + nostr** only (no phone, no signal, no twitter).
- Booking CTAs everywhere point at the same Square URL constant. A `// TODO: replace SQUARE_BOOKING_URL with real link` comment will sit at the top of `Book.tsx` so it's easy to find later.

## What carries over

- SES pillars page + chart (restyled, same content).
- "Other projects" → bitcoin resources & podcast/blog as small footer links.
- Email + Nostr only as contact channels.

## What I'll remind you about after the build

- Drop in real Square Appointments URL(s).
- Fill in About copy and credentials placeholders.
- Provide a real email address + nostr npub/handle if the current ones are placeholders.