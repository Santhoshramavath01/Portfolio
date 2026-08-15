# Ramavath Santhosh — Portfolio

A personal portfolio built from scratch with Next.js 14 (App Router),
TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build
```

## Before you ship it

1. **Replace the logo.** A placeholder "RS" monogram is at
   `public/logo.png` so the site runs immediately. Drop your real logo
   file in at that exact path (`public/logo.png`) and the Navbar, Hero
   visual, and Footer all update automatically — they're the only three
   places that read from `components/logo.tsx`.
2. **Update `metadataBase`** in `app/layout.tsx` to your real domain once
   you have one (it's a placeholder right now, only affects social share
   previews).
3. **Connect the contact form to a real backend.** It currently
   validates, shows loading/success/error states, and logs the payload —
   but nothing is actually sent anywhere. `lib/contact.ts` is the single
   file to edit: swap the body of `sendContactMessage()` for a call to
   Resend, EmailJS, Formspree, or your own `/api/contact` route. No UI
   code needs to change.

## Project structure

```
app/                 App Router entry (layout, page, global styles)
components/          UI components (one file per section/piece)
components/ui/       Small shared primitives (SectionHeading, Reveal)
data/                All real content — site info, skills, projects,
                      education, "what I build" — kept separate from UI
hooks/                use-active-section: scroll-spy + navbar background
lib/                  contact.ts (send/validate), utils.ts (cn helper),
                      theme-script.ts (no-flash theme init)
public/logo.png       Your logo — replace this file
```

## Theming

Dark mode is the default. Theme state is stored in `localStorage` under
the `theme` key, falls back to `prefers-color-scheme` when nothing is
stored, and an inline script in `app/layout.tsx` applies the right class
to `<html>` before paint — no flash on load. All colors are CSS
variables defined in `app/globals.css` (separate token sets for
`:root` / dark and `.light`), consumed through Tailwind's `bg-`,
`text-`, `border-` utilities (`bg-bg`, `text-fg-secondary`, `border-border`,
etc.) — never hardcoded per component.

## Content

Every fact in the site (name, college, skills, the two real projects,
education history, contact links) lives in `data/*.ts`. Nothing is
fabricated — there's intentionally no "Experience" section since none
was provided; Education is the equivalent section instead.
