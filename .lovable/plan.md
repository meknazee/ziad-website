
# Coach Z site — booking + working athlete integration

Two independent workstreams. Both land in one session. Google Calendar sync, email confirmations, and the freemium paywall are explicitly deferred — placeholders and TODOs only.

---

## Workstream A — `/working-athlete` (replaces `/strength-conditioning`)

External-link approach. Landing page on this site that teases the Library and sends users out to the existing standalone app.

### What changes
- **Rename route**: `/strength-conditioning` → `/working-athlete`. Remove the old route from `src/App.tsx`. Add a redirect so old links don't 404.
- **Rename file**: `src/pages/StrengthConditioning.tsx` → `src/pages/WorkingAthlete.tsx`.
- **Rewrite page content** around the Working Athlete framing (freemium content library, not just S&C). Keeps the `SESPillarsChart` component as the "what training looks like" section, but the hero, intro, and CTA shift to the Library.
- **Add Library teaser grid**: hardcoded cards mirroring the 5 programs currently on `coachz-athletelibrary.lovable.app` (Mile Repeat Progression, Tennis Summer Playbook, Master Your Bodyweight, Find Your Serve, Recovery Protocols) with status badges.
- **Primary CTA**: "Open the Library →" → `https://coachz-athletelibrary.lovable.app` (target `_blank`, `rel="noopener"`).
- **Update nav** in `src/components/SiteHeader.tsx`: label `S&C` → `Library`, path → `/working-athlete`.
- **Update footer link** in `src/components/SiteFooter.tsx`.

### Deferred (next session)
- Merging the Library into this site
- Auth + freemium paywall
- Stripe / Paddle wiring

---

## Workstream B — `/book` booking flow (tennis lessons, UI + DB only)

Port the booking project's data model and React UI into this Vite repo. **Defer** Google Calendar reads, calendar event writes, and Resend confirmation emails. Bookings save to Supabase and surface in the success screen; manual follow-up by Coach Z for now.

### Stack reality check
The source project is **TanStack Start** (SSR, server functions in `src/routes/*.tsx`). This site is **Vite SPA + React Router**. UI components and SQL are reusable; everything else gets re-implemented in our shape.

### Enable Lovable Cloud
Required for Supabase auth + DB. Will be enabled as the first build step (with a note to the user).

### Database — port the source schema, simplified for one host
Copy and adapt the source migration. We have only one host (Coach Z), so we seed his profile and don't need the public host directory pieces.

Tables to create in this project (mirrors source):
- `profiles` — one row for Coach Z, auto-created from `auth.users` via trigger.
- `meeting_types` — seeded rows: Private 1:1 (60 min), Private 1:1 (90 min), Semi-Private (60 min), Junior Development (60 min). All with `location='in_person'`, `location_details='Tuckahoe Recreation Club'`.
- `availability_rules` — seeded with placeholder weekday windows (user can edit later); the UI reads these as the "open hours" mask.
- `bookings` — full schema as in source, including `google_event_id` and `google_meet_url` columns left nullable for the future port.

RLS, grants, and the `handle_new_user()` trigger come over verbatim from `supabase/migrations/20260530013838_*.sql`.

### Routes & pages (new)
- `/book` — list of meeting types (cards) → click goes to step 2.
- `/book/:meetingTypeSlug` — date + time picker → contact form → submit.
- `/book/success` — confirmation screen with the booking summary.
- `/auth` — sign in / sign up modal page. RLS requires the client to be authenticated to insert a booking.

The current `src/pages/Book.tsx` (Square Appointments link stub) is replaced.

### Components (new, in `src/components/booking/`)
- `MeetingTypeCard.tsx`
- `DatePicker.tsx` — wraps shadcn `<Calendar>`, disables dates with no open slots.
- `TimeSlotGrid.tsx` — computes available 30-min start times from `availability_rules` minus existing `bookings` on that day. No Google freebusy yet.
- `BookingForm.tsx` — name, email (prefilled from auth), notes.
- `BookingSummary.tsx` — sidebar card.

### Booking flow (no Google, no email)
1. User picks a meeting type.
2. Picks a date — disabled if no `availability_rules` cover that weekday.
3. Picks a time slot — computed client-side from rules minus bookings already in DB.
4. If not signed in, prompt to sign up / log in (email + password is fine for v1).
5. Submit → `insert into bookings` via supabase-js. RLS enforces `auth.uid() = client_id`.
6. Redirect to `/book/success` showing date, time, location, and a note: "Coach Z will confirm by email within 24 hrs."

### Explicit TODOs left in code for next session
- `// TODO(google-calendar): replace local availability calc with freebusy lookup`
- `// TODO(resend): send student confirmation + coach notification to contactme@coachziad.com`
- `// TODO(google-calendar): events.insert + save google_event_id`

### Update site-wide contact info
- Replace placeholder `coach.z@example.com` everywhere → `contactme@coachziad.com` (footer, Book/contact panel).
- Remove the Nostr placeholder link from the Book page contact aside; keep email as the only contact channel.

---

## Workstream C — Project memory updates

The current memory rules contradict where we're heading. Fix:

- **Replace** Core rule "Booking and scheduling exclusively via Square Appointments." → "Booking handled in-site via custom flow backed by Supabase. Google Calendar sync and Resend confirmation emails are planned but deferred."
- **Replace** Core rule "Contact via email and Nostr only. Twitter and Signal forbidden." → "Contact via email only: `contactme@coachziad.com`. Twitter, Signal, and Nostr forbidden."
- **Update** `mem://identity/coach-z-services` — rename "Strength & Conditioning (SES model)" pillar to "Working Athlete (freemium training library, link out to coachz-athletelibrary.lovable.app for now)."
- **Add** Core rule: "Site publishes to coachziad.com."
- **Leave** the all-lowercase, Advantage Out aesthetic, and DC/Arlington/NoVA service-area rules untouched.

---

## Out of scope (called out explicitly)

- Embedding/merging The Library into this site
- Freemium / paywall / Stripe / Paddle
- Google OAuth, Google Calendar reads/writes
- Resend domain verification + email templates
- Real lesson pricing (still `[$]` placeholders on `/services`)
- Coach-side admin dashboard for bookings (Supabase table is the admin view for now)

---

## Open questions I'll need before the deferred work

These do **not** block this session, but flagging now:
1. Stripe vs. Paddle for the eventual paywall.
2. Free-tier scope (full manuals free? first N pages free?).
3. Slot length per service (assuming 60 min default; 90 min only for Private).
4. Coach Z's working hours per weekday for the `availability_rules` seed (will use placeholder Mon–Fri 9am–7pm + Sat 8am–2pm; he can edit).

---

## Technical details

### Files touched / created
**Modified**
- `src/App.tsx` — swap `/strength-conditioning` route; add `/book/:slug`, `/book/success`, `/auth`.
- `src/components/SiteHeader.tsx` — nav label + path.
- `src/components/SiteFooter.tsx` — nav link + email.
- `src/pages/Book.tsx` — full rewrite (meeting type list).
- `index.html` — title/meta refresh for new copy where needed.

**Renamed**
- `src/pages/StrengthConditioning.tsx` → `src/pages/WorkingAthlete.tsx` (content rewritten).

**New**
- `src/pages/BookMeetingType.tsx`
- `src/pages/BookSuccess.tsx`
- `src/pages/Auth.tsx`
- `src/components/booking/MeetingTypeCard.tsx`
- `src/components/booking/DatePicker.tsx`
- `src/components/booking/TimeSlotGrid.tsx`
- `src/components/booking/BookingForm.tsx`
- `src/components/booking/BookingSummary.tsx`
- `src/lib/supabase.ts` (auto-created by Cloud enable)
- `src/hooks/useAuth.tsx`
- `supabase/migrations/<ts>_booking_schema.sql` — adapted from source migration

**Memory writes**
- `mem://index.md` — Core rules updated
- `mem://identity/coach-z-services` — updated to Working Athlete
- New `mem://features/booking-flow` — describes the in-site flow + deferred Google/Resend work
