# K.CUTS — Portfolio Website Build Prompt

## Project Overview

Build a **single-page portfolio website** for **K.CUTS**, a cinematic video editing brand by Karim Ali based in Mumbai, India. The site should feel like a premium film studio's digital presence — dark, cinematic, intentional. Every element should communicate craft, precision, and visual storytelling expertise.

---

## Tech Stack

- **Framework:** React (Web) — *Not React Native. React Native is for mobile apps, not websites. Use React with standard HTML/CSS for the web.*
- **Styling:** Tailwind CSS or plain CSS-in-JS (styled-components / emotion)
- **Animations:** Framer Motion for scroll-triggered reveals and micro-interactions
- **Routing:** Single-page with smooth scroll to anchor sections (no multi-page routing needed)
- **Icons:** Lucide React or React Icons
- **Font Loading:** Google Fonts via `@import`

---

## Visual Identity & Design Direction

### Color Palette
| Role | Hex | Usage |
|---|---|---|
| Background | `#080808` | Base canvas — near-black |
| Surface | `#111111` | Cards, section backgrounds |
| Border/Subtle | `#1E1E1E` | Dividers, card borders |
| Accent Gold | `#C9A84C` | CTAs, highlights, hover states |
| Text Primary | `#F0EDE6` | Headlines, body copy |
| Text Muted | `#888888` | Labels, captions, metadata |

### Typography
- **Display / Hero:** `Bebas Neue` — all-caps, wide tracking, used for hero headline only (restraint)
- **Headings:** `Inter` — semibold, clean, modern
- **Body:** `Inter` — regular weight, generous line-height (1.7)
- **Labels / Captions:** `Space Mono` — monospaced, used sparingly for technical labels and stats

### Signature Design Element
A **cinematic letterbox bar effect** — two thin horizontal black bars (top and bottom, like a 2.39:1 aspect ratio frame) visible on the hero section only, reinforcing the cinematic identity. These bars subtly animate in on load.

### Motion Principles
- Scroll-triggered **fade-up reveals** on all sections (staggered, subtle)
- Hero text **character-by-character reveal** on load
- Hover states on cards: slight upward translate + gold border glow
- No excessive parallax or looping animations — purposeful only
- Respect `prefers-reduced-motion`

---

## Site Structure & Sections

Build exactly these sections in this order:

### 1. Navbar (Fixed)
- Logo: `K.CUTS` in Bebas Neue, gold accent
- Nav links: `Work · Services · About · Contact`
- Smooth scroll to anchor on click
- On scroll: background goes from transparent → `#080808` with subtle blur
- Mobile: hamburger menu with slide-in drawer

---

### 2. Hero Section
**Content:**
- Eyebrow label (Space Mono, muted): `DaVinci Resolve Certified · Mumbai, India`
- Headline (Bebas Neue, ~96px): `CINEMATIC EDITS THAT HOLD ATTENTION`
- Subline (Inter, muted): `Video editor & colorist specializing in storytelling that retains viewers and grows brands.`
- Two CTAs: `View Work` (gold filled button) · `Book a Project` (ghost/outline button)
- Background: A **looping, muted, dark-tinted video reel** (or if no video, a cinematic dark gradient with subtle film grain texture overlay — CSS `noise` or SVG filter)
- Letterbox bars (signature element) framing the hero

**Do NOT include:** stats block, long lists, or spec details in the hero.

---

### 3. Selected Work / Portfolio Section
- Section label: `SELECTED WORK`
- Display **6 portfolio cards** in a masonry-style or 3×2 grid
- Each card contains:
  - Thumbnail (placeholder or gradient with category label)
  - Category tag (e.g., `Commercial · Color Grading`)
  - Project title
  - Hover state reveals a short one-line description + a play icon
- Categories to cover (use these 6):
  1. Cinematic Reel
  2. YouTube Creator Edit
  3. Brand Campaign
  4. Music Video
  5. Gaming Montage
  6. Instagram Reels / Short-form

**Do NOT include:** client names, download links, external URLs (placeholders are fine)

---

### 4. Services Section
- Section label: `WHAT I DO`
- Display **4 core services only** as clean cards (not a long table):
  1. **Cinematic Editing** — Long-form, emotional pacing, cinematic transitions
  2. **Color Grading** — S-Log3, Canon Log, RAW formats, film emulation
  3. **Short-Form & Reels** — Viral pacing, retention-optimized, trend-aware
  4. **Commercial & Brand Ads** — Motion graphics, sound design, premium delivery

- Each card: icon + title + 2-line description only
- Layout: 2×2 grid on desktop, stacked on mobile

**Do NOT include:** a full pricing table, exhaustive feature lists, or software specs here.

---

### 5. About / Stats Section
- Left side: Short bio paragraph (2–3 sentences max):
  > *Karim Ali is a Mumbai-based cinematic video editor and DaVinci Resolve Certified colorist. With 300+ projects delivered and content reaching over 15 million viewers, he helps creators, brands, and businesses tell stories that hold attention.*
- Right side: 3 stat blocks only:
  - `300+` Projects Delivered
  - `15M+` Total Reach
  - `100%` Client Satisfaction
- Stat numbers styled large in Bebas Neue with gold accent

---

### 6. Testimonials Section
- Section label: `CLIENT FEEDBACK`
- Display **3 testimonials** in a horizontal card strip (or carousel on mobile):
  1. *"Transformed footage into a cinematic masterpiece."* — Commercial Client
  2. *"Professional workflow, smooth communication, excellent delivery."* — YouTube Creator
  3. *"Editing quality exceeded expectations. Highly recommended."* — Brand Agency
- Each card: quote text + client role label (no full names, as per source)

---

### 7. Contact / Booking Section
- Headline: `LET'S BUILD SOMETHING`
- Subtext: `Available for freelance. Average response under 2 hours.`
- **Simple inquiry form** with these fields only:
  - Full Name
  - Email Address
  - Project Type (dropdown: YouTube Edit / Reels / Commercial Ad / Color Grading / Other)
  - Brief (textarea, 4 rows, placeholder: *"Tell me about your project — footage, style, deadline…"*)
  - Submit button: `SEND PROJECT BRIEF` (gold, full width on mobile)
- Below form: direct links
  - WhatsApp: `+91 77382 27862`
  - Email: `karimbruh@gmail.com`
- Form should show a success state (no backend needed — just UI state toggle)

---

### 8. Footer
- Logo: `K.CUTS`
- One-liner: `Cinematic Video Editing · Mumbai, India`
- Social icons (placeholder links): YouTube, Instagram, LinkedIn
- Copyright: `K.CUTS © 2026 · All Rights Reserved`

---

## What to Leave Out

Deliberately exclude the following from the build (they add clutter, not value):

- ❌ Full technical spec sheet (Mac Studio, GPU specs, render pipeline labels)
- ❌ "System status" style dashboard elements (Active Timeline, CUDA Online, etc.)
- ❌ Exhaustive feature bullet lists under each service
- ❌ Separate "Showreel" page link (embed it in hero/portfolio instead)
- ❌ Redundant CTAs repeated in every section
- ❌ The full software list (Premiere, After Effects, etc.) — mention DaVinci certification in About only

---

## Responsiveness

- **Desktop:** Full-width, max content width `1200px`, centered
- **Tablet (768px):** 2-column grids collapse to 1–2 cols
- **Mobile (< 480px):** Single column, hamburger nav, stacked stats, form full-width

---

## Accessibility & Performance

- Semantic HTML (`<section>`, `<nav>`, `<main>`, `<footer>`)
- `alt` text on all images
- Keyboard-navigable nav and form
- No autoplay video with sound
- Lazy load portfolio thumbnails

---

## File / Component Structure (Suggested)

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Portfolio.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── index.css        ← global tokens, resets
└── main.jsx
```

---

## Tone & Copy Notes

- Headlines: Short, punchy, confident — not salesy
- Body copy: Plain, direct, first-person where appropriate
- Avoid: corporate buzzwords, excessive exclamation marks, vague superlatives
- The brand voice is: *quiet confidence, cinematic, professional*

---

*This prompt contains all information needed to build the full site. Use placeholder images/gradients where real media isn't available. The priority is a polished, fast, visually distinctive site — not feature-heavy.*
