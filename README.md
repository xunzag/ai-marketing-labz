# AI Marketing LABZ website

Next.js (App Router) + Tailwind CSS build of the "Ai Marketing labz" Figma design, ready to deploy on Vercel.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Pages

| Route | Figma frame |
| --- | --- |
| `/` | Home update (335:909) |
| `/solutions/real-estate` | Our Real Estate Solutions (407:2242) |
| `/solutions/medical` | Medical & Aesthetic Clinic Solutions (411:3033) |
| `/solutions/education` | Education & Institute Solutions (428:1624) |
| `/solutions/automotive` | Automotive Solutions (432:2426) |
| `/about` | About us (151:508) |
| `/contact` | Contact us (161:630) |

The four industry pages share one template (`src/app/solutions/[slug]/page.tsx`); their copy lives in `src/lib/industries.ts`. Shared copy (contact details, stats, testimonials) is in `src/lib/site.ts`.

## Images

The photos, logo, flag, industry icons and avatars in `public/images/` are the real images from the Figma file, resized for the web. They are named after where they appear (for example `hero-real-estate.jpg`, `medical-3.jpg` for the third solution block).

The client logos (`client-*.svg`) are the ones in the Figma file, which are generic "logoipsum" marks. Replace them with real client logos under the same names when you have them.

## Contact form

The form posts to `/api/contact`, which validates the input and forwards it as JSON to `CONTACT_WEBHOOK_URL` (a Zapier, Make, Slack or Formspree endpoint, for example). Set that variable in Vercel's project settings. Without it the form shows an error that points visitors to the email address.

## Deploy to Vercel

Import the repository in Vercel; the defaults for Next.js work as-is. Add `CONTACT_WEBHOOK_URL` under Environment Variables.

## Not in the design, decided in code

- Tablet and phone layouts (the design only has 1920px desktop frames).
- "Portfolio" links to the testimonials section and "Services" to the solutions section, since neither has its own page.
- Privacy Policy, Terms of Service, social links and the Arabic switch are placeholders.
- The highlighted word in the Medical, Education and Automotive hero titles.
