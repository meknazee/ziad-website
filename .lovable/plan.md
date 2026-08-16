# home page revamp — 3-step funnel

Inspired by mitchellfranktennis.com, but in our own aesthetic (court green / clay orange / off-white, Fraunces + Inter, all lowercase).

## step 1 — video hook

- full-bleed looping background video in the hero (muted, autoplay, playsinline, loop), with the existing portrait as the poster/fallback image so nothing breaks before the clip loads or on reduced-motion.
- keep the current gradient wash so the headline stays readable.
- headline + short intro line stay, CTA row becomes: "book a session" (opens Calendly popup) and "find your program" (scrolls to step 2).
- **needs from you:** the MP4 clip. Until you upload it, the hero keeps the current portrait and the video slots in with a one-line change.

## step 2 — which program is right for you?

Two clearly separated tiers, not an academy ladder:

**on-court sessions (bookable via Calendly)**
- private lessons
- doubles & live ball clinics
- conditioning sessions

Each card: short description + "schedule" button that opens the Calendly popup for that session type.

**the working athlete program (athlete onboarding)**
- junior
- high performance
- adult

Each card: short description + "apply" button that goes to the contact form with that track pre-filled as a chip (reusing the existing chip mechanism on the inquiry form).

## step 3 — CTA + get in touch

- a booking section with the Calendly widget embedded inline (full scheduling page, no new tab).
- directly below it, the existing inquiry form moved/mirrored onto the home page so a visitor can finish the funnel without navigating away. `/contact` keeps its own copy.
- footer gains Instagram and YouTube icons.

## pinned for next session

**Reminder: send me your Instagram and YouTube links.** They're placeholder buttons (non-clickable, marked "coming soon") until then — same for the hero video clip.

## technical details

- `src/components/HeroVideo.tsx` — video element with poster fallback + `prefers-reduced-motion` guard; clip goes in `src/assets/`.
- `src/lib/calendly.ts` + `src/components/CalendlyPopup.tsx` — load the Calendly widget script once; popup helper used by header CTA, floating pill, and program cards. Inline embed component for the booking section.
- `src/lib/programs.ts` — single source of truth for the six programs (slug, title, blurb, type: `booking` | `library`, calendly path).
- `src/components/ProgramFinder.tsx` — renders the two tiers on the home page.
- `src/components/InquiryForm.tsx` — extend `SERVICE_LABELS` with the three working-athlete tracks so chips work for both tiers.
- `src/components/SiteFooter.tsx` — social icon row (placeholders).
- `src/pages/Home.tsx` — reordered into hero → program finder → quote → booking embed → inquiry form.

No database or backend changes; inquiries keep flowing into the existing `inquiries` table.
