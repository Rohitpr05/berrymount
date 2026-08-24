# Berrymount

Production website for Berrymount — premium berries, supplied across the UAE.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

The contact form and newsletter signup send email via SMTP. Copy `.env.example` to
`.env.local` and fill in real credentials:

```bash
cp .env.example .env.local
```

Without these set, `/api/contact` and `/api/newsletter` will return a clear error
instead of pretending to succeed.

## Project Structure

- `src/app` — routes (App Router)
- `src/components` — UI, navigation, sections, forms, map
- `src/data` — site content: berries, locations, testimonials, nav, sourced images
- `src/lib` — validation schemas, email sending, utilities

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint
# berrymount
