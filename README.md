# Jack — 3D Creator Portfolio

A dark, single-page portfolio built with React + TypeScript + Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    FadeIn.tsx           scroll-reveal wrapper (motion.create, whileInView)
    Magnet.tsx            cursor-following magnetic hover effect
    AnimatedText.tsx      per-character scroll-reveal paragraph
    ContactButton.tsx      gradient pill CTA
    LiveProjectButton.tsx  ghost pill CTA used on project cards
  sections/
    HeroSection.tsx
    MarqueeSection.tsx
    AboutSection.tsx
    ServicesSection.tsx
    ProjectsSection.tsx
  data/
    marqueeImages.ts       21 preview GIF URLs
    services.ts             5 services list
    projects.ts             3 project case studies + CDN image URLs
  App.tsx
  main.tsx
  index.css
```

## Notes

- All remote imagery (hero portrait, About-section 3D renders, marquee GIFs, project
  screenshots) is loaded directly from the URLs supplied in the brief — nothing is bundled
  locally, so an internet connection is required at runtime to see the images.
- The navbar's "Contact" link is wired to `#contact`; the brief's section order doesn't
  include a dedicated contact section, so it currently has no scroll target. Point it at a
  contact section, modal, or `mailto:` link if you add one.
- `lucide-react` is used for a small arrow-out icon on both pill buttons — the brief listed
  it as a dependency but didn't specify where icons should appear.
- This project's dependencies could not be installed or type-checked in the environment
  that generated it (no network access), so run `npm install` and `npm run build` locally to
  confirm everything compiles cleanly before deploying.
