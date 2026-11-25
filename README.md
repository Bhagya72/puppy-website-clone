# TeddyPups clone (Next.js)
Practice clone of https://puppy.instabizweb.com/ built for the Blutec AI technical round.

## Run
npm install && npm run dev  (http://localhost:3000)

## Structure
- app/ — routes: /, /puppies (filters ?breed= ?origin=), /puppies/[slug], /happy-families, /how-it-works, /faq, /contact, /gone-home
- components/ — Nav (client, mobile menu), Card
- data/puppies.js — all puppy and content data
- Plain CSS in app/globals.css, no UI library

## Deploy
Push to GitHub, import the repo in Vercel, deploy.
