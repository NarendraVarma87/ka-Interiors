# KA Interiors — Flagship Luxury Interior Design Studio

> **"Interiors That Inspire"** · **"Designing Spaces. Inspiring Lives."**

A bespoke, production-ready marketing website for **KA Interiors**, a luxury interior architecture and design studio headquartered in Vijayawada, Andhra Pradesh, with **30+ years of heritage** across real estate, construction, and high-end residential & commercial spaces.

Engineered with the aesthetic restraint of *Architectural Digest* meets a boutique hotel: generous whitespace, large Cormorant Garamond display typography with signature italic gold accents, Manrope body copy, hairline gold rules, rounded 20–28px masks, and slow, deliberate motion.

---

## 🏛️ Brand Truth & Core Facts (Strictly Verbatim)

- **Studio Name:** KA Interiors
- **Tagline:** *"Interiors That Inspire"*
- **Sign-Off:** *"Designing Spaces. Inspiring Lives."*
- **Positioning:** *"Luxury Interior Design Studio delivering bespoke residential and commercial spaces."*
- **Heritage & Experience:** 30+ years of experience in designing, real estate, construction, and interiors.
- **Head Office:** Vijayawada, Andhra Pradesh, India
- **Direct Phone:** `+91 87900 43355`
- **Instant WhatsApp:** `https://wa.me/918790043355`
- **Philosophy Pillars:**
  1. *"We design before we build."*
  2. *"Design is where it starts. Execution is where we deliver."*
  3. *"Great design lives in the details: every curve, material, and finish is chosen with intent and built to last. From concept to handover, we handle it all."*
- **Logo Mark:** Gold Phoenix + "KA" monogram with armchair, pendant lamp, and plant in the letterforms. Extracted with transparency (`/images/brand/ka-phoenix-monogram.png`).

---

## ⚙️ Modern Technology Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Turbopack compatible, SSG prerendered static pages)
- **Language:** TypeScript 5.8 (strict mode enabled)
- **UI Runtime:** React 19 (`react@19.0.0`, `react-dom@19.0.0`)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with native `@theme` CSS variable tokens and fluid typography
- **Component Motion:** [Motion](https://motion.dev/) (`motion/react` v12, successor to framer-motion)
- **Pinned Storytelling:** [GSAP](https://gsap.com/) + [ScrollTrigger](https://gsap.com/scrolltrigger/) (used strictly for pinned horizontal storytelling)
- **Smooth Scrolling:** [Lenis](https://github.com/darkroomengineering/lenis) (synchronized with GSAP ticker & respecting `prefers-reduced-motion`)
- **Accessible Primitives:** `@radix-ui/react-dialog`, `@radix-ui/react-accordion`, `@radix-ui/react-tabs`, `@radix-ui/react-slot`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Form & Validation:** `react-hook-form` + `zod` + `@hookform/resolvers/zod`
- **Image Optimization:** `next/image` with WebP formats (1600w & 800w) and pre-calculated base64 `blurDataURL` placeholders
- **SEO & Structured Data:** OpenGraph, Twitter card, canonical URLs, XML Sitemap, Robots.txt, and `LocalBusiness` / `HomeAndConstructionBusiness` Schema.org JSON-LD

---

## 🎨 Design Tokens & Palette

| Token | Hex | Role | Usage |
| :--- | :--- | :--- | :--- |
| `--espresso` | `#2B1408` | Primary Dark | Dark luxury sections, hero backgrounds, cards, typography |
| `--walnut` | `#4A2412` | Mid Timber | Cards, dark surfaces, borders, secondary accents |
| `--sienna` | `#B5602F` | Warm Earth Accent | Terracotta and clay architectural tones |
| `--gold` | `#C9953C` | Hairline Accent | Small caps labels, borders, icon rings, and hover states |
| `--gold-light` | `#E8C06A` | Gradient Highlight | Luminous top edge of metallic gradients |
| `--gold-dark` | `#8A5A1E` | Gradient Shadow | Base of metallic gradients |
| `--champagne`| `#D9BE8C` | Muted Warmth | Captions, dark section text, borders |
| `--ivory` | `#FAF6EE` | Primary Page Bg | Editorial page canvas, light sections |
| `--alabaster`| `#F2EBDD` | Gallery Neutral | Sub-cards, borders, subtle backdrops |
| `--sage` | `#7A8F6B` | Rare Botanical | Indoor greenery and courtyard accents |
| `--ink` | `#1C100A` | Text Primary | High-contrast editorial body text on light ivory |

---

## 🗺️ Site Architecture & Routes

```text
app/
├── globals.css                       # Tailwind v4 @theme, custom scrollbars, grain textures
├── layout.tsx                        # Google fonts (Cormorant & Manrope), JSON-LD, Lenis, Cursor, Header, Footer
├── template.tsx                      # Page transition fade/slide
├── not-found.tsx                     # Branded 404 error page
├── robots.ts                         # Search engine crawler policies
├── sitemap.ts                        # Dynamic XML sitemap covering all 27 pages
├── page.tsx                          # Flagship Home Page with 12 editorial sections
├── portfolio/
│   ├── page.tsx                      # Filterable Portfolio (All, Residential, Commercial)
│   ├── PortfolioClient.tsx           # Category tabs, real-time search, quick-view dialog
│   └── [slug]/
│       ├── page.tsx                  # Case-study chapter page (SSG with generateStaticParams)
│       └── ChapterGallery.tsx        # Keyboard-navigable image gallery with full-screen lightbox
├── services/
│   └── page.tsx                      # 7-Part 3D Suite, 6-Step process, CAD intake, FAQs
├── about/
│   └── page.tsx                      # Studio philosophy, 30+ years heritage, material ethics
├── contact/
│   └── page.tsx                      # Vijayawada head office details, WhatsApp, direct phone, consultation form
└── api/
    └── enquiry/
        └── route.ts                  # Next.js Route Handler validating input with Zod
```

### Home Page Sections (in exact sequence):
1. **Preloader + Hero:** 1.2s gold monogram draw-in with curtain lift; full-bleed cinematic Sanctuary living room with Ken Burns zoom, Cormorant Garamond headline *"Interiors that Inspire"*, "30+ Years Heritage" badge, and scroll cue.
2. **Marquee Strip:** Slow infinite luxury text ribbon (*Bespoke · Residential · Commercial · 3D Visualization · End-to-End Execution*).
3. **Philosophy Section:** Two-column sticky editorial with word-by-word scroll-linked opacity reveal on the key paragraph and animated 30+ Years counter.
4. **The KA Experience (3D Suite):** Interactive 7-part visualization list cross-fading ray-traced preview renders on desktop; graceful accordion on mobile.
5. **Signature Spaces (GSAP Pinned Scroll):** Horizontal pinned scroll with chapter cards, parallax inside images, and magnetic "VIEW" custom cursor badge. Degrades to native snap-scroll on touch/mobile or reduced motion.
6. **Residential vs Commercial Split:** Two tall architectural panels that smoothly expand on hover (`flex-grow` transition).
7. **Material & Palette Studio:** Interactive moodboard where selecting a pigment (Espresso, Sienna, Bronze, Champagne, Alabaster) smoothly re-tints the environment background. 3D tilting material tiles for Fluted Walnut, Antique Brass, Indian Quartzite, and Premium Fabric.
8. **Heritage Spotlight:** Dark espresso section with gold lotus line-art ornaments and an interactive before/after reveal slider contrasting sculpted relief feature walls with gilded Indian epic murals.
9. **Our Promise:** 8-point vertical timeline with a gold progress line that fills as you scroll; circular icon badges in espresso circles with gold rings.
10. **Process Stepper:** 6-step concept-to-handover horizontal stepper showing phase durations and tangible deliverables.
11. **Commercial Showcase:** Kafe two-level architectural pavilion with interactive Day/Dusk facade lighting toggle and bento grid.
12. **Final CTA & Enquiry:** Full-bleed espresso consultation section with Zod-validated enquiry form, gold confetti celebration, click-to-call, and WhatsApp direct links.

---

## 🗂️ How to Add a New Portfolio Project

The portfolio is completely typed and data-driven. To add or modify a project:

1. Open `data/projects.ts`.
2. Add an entry to the `PROJECTS` array following the `ProjectChapter` interface:

```typescript
{
  slug: "new-space-name",
  category: "residential", // or "commercial"
  chapterNumber: "17",
  title: "The Garden Pavilion",
  headlineWord: "Luminous",
  headlineRest: "Verdant Retreat",
  tagline: "Where Indoor Architecture Meets Courtyard Serenity",
  summary: "A light-filled glass and timber pavilion overlooking a private koi pond.",
  editorialCopy: [
    "Paragraph 1 from architectural brief...",
    "Paragraph 2 with details on joinery, light, and stone..."
  ],
  materials: ["Teak Wood", "Brushed Copper", "Kota Stone", "Linen Drapery"],
  palette: ["Espresso", "Sage", "Alabaster"],
  featuredOnHome: true, // Set to true to include in home horizontal scroll
  coverImage: "/images/projects/your-cover-1600.webp",
  coverImage800: "/images/projects/your-cover-800.webp",
  coverAlt: "Descriptive alt text for accessibility and SEO",
  gallery: [
    {
      src: "/images/projects/your-detail-1600.webp",
      src800: "/images/projects/your-detail-800.webp",
      caption: "View of the cantilevered teak roof and water court.",
      alt: "Cantilevered roof over water",
      ratio: "16:9"
    }
  ],
  specs: [
    { label: "Typology", value: "Private Garden Pavilion" },
    { label: "Location", value: "Vijayawada" },
    { label: "Execution", value: "Turnkey Architecture & Joinery" }
  ],
  quote: "Architecture is the frame; nature is the masterpiece."
}
```

3. Run `npm run build`. Next.js will automatically generate the static page at `/portfolio/new-space-name` and update `sitemap.xml`!

---

## 🚀 Development & Production Setup

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm or pnpm

### Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# -> http://localhost:3000

# Build for production
npm run build
# -> Compiles TypeScript, collects static pages (27/27), and optimizes assets

# Start production server
npm start
```

---

## ♿ Accessibility & Quality Standards Enforced

- **Semantic Landmarks:** `<header>`, `<main id="main-content">`, `<nav>`, `<article>`, `<footer>`, `<dialog>`.
- **Skip Link:** Accessible at the very top of the page for keyboard tab navigation.
- **Focus Indicators:** Visible gold focus rings on all interactive elements (`*:focus-visible { outline: 2px solid #C9953C; }`).
- **Reduced Motion:** Fully adheres to `prefers-reduced-motion: reduce`. Disables Lenis smooth scrolling, GSAP scroll pinning, marquee translation, and replaces parallax with instant/gentle fades.
- **Color Contrast:** All text meets WCAG AA standards. High contrast ink text on ivory; light champagne text on espresso.
- **Touch Target Sizing:** Minimum 44px tap targets for mobile usability across all buttons, dropdowns, and links.
- **Trademarks & Privacy:** Zero third-party TV streaming app logos or trademarked logos; all images cleanly processed and curated.

---

© KA Interiors. Head Office: Vijayawada, Andhra Pradesh, India. All rights reserved.
