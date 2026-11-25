# TeddyPups U.A.E. – Website Clone

A responsive clone of [puppy.instabizweb.com](https://puppy.instabizweb.com/), built for the Blutec AI technical round (Full Stack Developer).

- **Live site:** https://puppy-website-clone-3noc.vercel.app/
- **Reference site:** https://puppy.instabizweb.com/
- **Repository:** https://github.com/Bhagya72/puppy-website-clone

## Features

- Home page with hero, puppy grid, "two ways to meet", puppy journey, trust points, testimonial, FAQ preview and call to action
- Puppy listing with filters by breed (`?breed=`) and origin (`?origin=local|imported`)
- Dynamic detail page for each of the 15 puppies (`/puppies/[slug]`) with a prefilled WhatsApp enquiry link
- Happy families, How it works, FAQ, Visit & contact and Gone home pages
- Sticky navbar with a mobile menu, floating WhatsApp button and footer
- Responsive layout for mobile, tablet and desktop

## Tech stack

- Next.js 14 (App Router) and React 18
- Plain CSS (`app/globals.css`), no UI library
- Hosted on Vercel, source on GitHub

## Project structure

```
app/
  layout.js            Root layout: navbar, footer, WhatsApp button
  page.js              Home page
  globals.css          All styles
  puppies/page.js      Listing with filters
  puppies/[slug]/      Puppy detail page (static, one per puppy)
  happy-families/      Customer photos
  how-it-works/        Steps and delivery info
  faq/                 Questions and answers
  contact/             Showroom and WhatsApp
  gone-home/           Puppies that found homes
components/
  Nav.js               Client component: navbar and mobile menu
  Card.js              Puppy card
data/
  puppies.js           All puppy data and page content
```

## How it works

- All content lives in `data/puppies.js`, so there is no backend or database.
- Filters use URL query parameters, so filtered views can be shared and bookmarked.
- Detail pages are generated at build time with `generateStaticParams`.
- Only the navbar is a client component (it needs state for the mobile menu). Everything else renders on the server.

## Run locally

Requires Node.js 18 or newer.

```bash
git clone https://github.com/Bhagya72/puppy-website-clone.git
cd puppy-website-clone
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## Deployment

1. Push the repository to GitHub.
2. Import it in Vercel (Add New → Project) and keep the default settings.
3. Vercel builds with `next build` and redeploys on every push to `main`.

## AI tools used

Claude (Anthropic) was used to analyse the reference site, plan the page structure, generate the first version of the code, and troubleshoot GitHub and Vercel deployment errors. The prompts used are shown in the Loom walkthrough.

## Known limitations

- Puppy and family photos are loaded from the reference site, so they depend on it staying online.
- Content and layout were matched from the reference site's home page. Inner pages follow its structure, but spacing and styling may differ in places.
- The enquiry buttons open WhatsApp. There is no form submission or backend.
- This is a practice clone for an assignment and is not affiliated with the original business.
