
## security finding (context)

`profiles` currently has a SELECT policy allowing any authenticated user to read every row (email + display name). It affects any authenticated route — most relevantly `/book`, `/book/:slug`, `/book/success`, and `/auth` — since those are the only paths where users sign in. No page today lists other users' profiles, so tightening the policy is safe.

## this session

### 1. profiles RLS fix
- migration: drop `Authenticated can read profiles`, add `Users can read own profile` (`auth.uid() = id`).

### 2. home page polish (keep current headline direction)
- tighten hero subcopy; add subtle scroll cue.
- add a short "what to expect" strip (3 items: private lessons, group clinics, junior development) linking into `/services`.
- add a testimonial/quote block placeholder (single quote, easy to swap later).
- keep portrait background + gradient.

### 3. dynamic booking CTA (both options)
- header "Book a Session" button gets a subtle pulse + scale animation after user scrolls past the hero (IntersectionObserver on hero).
- new `FloatingBookCta` component: fixed bottom-right pill, appears after 400px scroll on all public pages, hidden on `/book*` and `/auth`. Uses accent color, links to `https://calendly.com/coach-ziad`.

### 4. inquiry form (replaces "email only" on Contact)
Fields: name, email, phone (optional), player level (select: beginner/intermediate/advanced/junior), goals (textarea), message (textarea).

- new table `inquiries` (name, email, phone, player_level, goals, message, status, created_at). RLS: anon+authenticated can INSERT; only service_role can SELECT (coach reads via email notification, not from the client).
- new `InquiryForm` component with zod validation, added to `/contact` above the direct-email card.
- edge function `send-inquiry-notification` invoked after insert; emails coach at `contactme@coachziad.com`.
- email requires an email domain — trigger the email-setup dialog if none is configured, then scaffold transactional email + a `new-inquiry` template.

### 5. content memory
- add core rule: "Booking CTA points to https://calendly.com/coach-ziad."

## deferred / not in scope
- services page rewrite (next session per your note)
- library / working-athlete changes
- coach-side admin view for inquiries (submissions arrive by email for now)

## technical details

Files:
- `supabase/migrations/<ts>_profiles_rls_and_inquiries.sql` — RLS tightening + `inquiries` table with GRANTs and RLS.
- `supabase/functions/send-inquiry-notification/index.ts` — validates payload, calls `send-transactional-email`.
- `supabase/functions/_shared/transactional-email-templates/new-inquiry.tsx` + registry update.
- `src/components/FloatingBookCta.tsx`, mounted in `Layout`.
- `src/components/InquiryForm.tsx`.
- `src/components/SiteHeader.tsx` — scroll-triggered CTA emphasis.
- `src/pages/Home.tsx` — subcopy + "what to expect" + quote block.
- `src/pages/Contact.tsx` — mount `InquiryForm`.

Prereq: if no email domain is configured, I'll open the email setup dialog first.
