# AIMVP Landing Page

A sample landing page built with [Next.js](https://nextjs.org) 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Getting started

Requires Node.js 20.9+ (an `.nvmrc` pins Node 22).

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack) |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

## Project structure

```
src/
  app/
    layout.tsx        # Root layout, fonts and metadata
    page.tsx          # Landing page composed from sections
    globals.css       # Tailwind and theme tokens
  components/         # Header, Hero, Features, HowItWorks, Pricing, Faq, CallToAction, Footer
  content/
    landing.ts        # All page copy: edit this to change text, plans, FAQs, etc.
```

## Customizing

- **Copy and pricing:** edit `src/content/landing.ts`.
- **Waitlist form:** `src/components/CallToAction.tsx` has a `TODO` where you can send the email to your provider or an API route.
- **Colors:** sections use Tailwind's `indigo` palette. Change it in the components, or add a brand color in `globals.css`.

## Deploy

Deploy to [Vercel](https://vercel.com/new) or any platform that runs Node.js (`npm run build && npm run start`).
