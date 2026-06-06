## Content update — Ziad's bio across the site

Replace bio/credential/location placeholders with the real info you provided. No structural or design changes; we're just swapping copy.

### Home (`src/pages/Home.tsx`)
- Headline: "Hello, I'm *Coach Z*. Passionate tennis, played at the highest levels."
- Intro paragraph: short 2-sentence intro pulling from the bio — Pass Academy coach, former Rollins College player and Morocco junior standout, now coaching juniors and adults in the DC–Virginia area at Tuckahoe Recreation Club.
- Stat badge: `10+ years coaching`.
- Keep the "First session is on me" CTA — this is the primary action we want users to take.

### About (`src/pages/About.tsx`)
- Two-paragraph story rewritten from your bio:
  - P1: Growing up in Morocco, climbing the national and international junior rankings, and being recruited to Rollins College in Spring 2016.
  - P2: NCAA career highlights (singles No. 21, doubles No. 9), what that perspective brings to coaching, and his role at Pass Academy leading the program at Tuckahoe Recreation Club.
- Credentials grid replaced with NCAA / pro-pathway items:
  - NCAA Singles ranking: No. 21
  - NCAA Doubles ranking: No. 9
  - Rollins College Men's Tennis (2016–)
  - ITF Junior Circuit experience
  - Pro tour experience prior to college
  - Top Moroccan national junior ranking
  - Pass Academy coach — Tuckahoe Recreation Club program lead

### Services (`src/pages/Services.tsx`)
- Locations list collapsed to just **Tuckahoe Recreation Club — Arlington, VA** (Pass Academy program), with a short note that additional courts/availability can be arranged.
- Leave session tier pricing as `[$]` placeholders (you'll handle this when we remix the booking page next session).
- Keep the focus on "Book a free intro session" as the primary CTA.

### SiteFooter (`src/components/SiteFooter.tsx`)
- Footer blurb updated: "Pass Academy coach Ziad — private tennis and junior development at Tuckahoe Recreation Club, serving the DC–Virginia area."

### Out of scope (saved for next session)
- Real session pricing
- Remixing the booking page project into this site
- Wiring up the athletes' library project
- Square Appointments URL (stays as placeholder)

### Quick questions I'm assuming defaults on
- Email + Nostr handle in footer/Book page stay as the existing placeholders until you give me real ones.
- Hero photo and portrait stay as the current placeholder images.