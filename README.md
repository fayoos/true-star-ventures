# TRUE STAR VENTURES Website

Professional, production-grade website for TRUE STAR VENTURES - a multifaceted provider of construction, engineering, modular solutions, maintenance, and IT/digital services.

## Design Aesthetic

**Industrial Editorial / Luxury Engineering** theme featuring:

- Deep Graphite (#1A1A1D) / Warm Off-White (#F8F6F0) + Burnt Copper accent (#B87333)
- **Bebas Neue** display font + **Crimson Pro** body serif
- Subtle noise texture and technical grid background
- Blueprint-inspired SVG motifs
- Orchestrated page-load animations

## Features

✅ **Single-Page Application** with smooth scroll navigation
✅ **50 Services** across 7 categories with advanced filtering
✅ **Light/Dark Mode** with localStorage persistence
✅ **Fully Responsive** mobile-first design
✅ **Interactive Components**:

- Service category filtering (9 filter chips)
- Portfolio modal case studies
- FAQ accordion
- Contact form with validation
✅ **SEO Optimized** with meta tags and semantic HTML
✅ **Accessibility** focused with ARIA labels and keyboard navigation

## Tech Stack

- **Next.js 15+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Google Fonts** (Bebas Neue + Crimson Pro)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
true-star-ventures/
├── app/
│   ├── layout.tsx          # Root layout with fonts & SEO
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Design system & animations
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky nav with theme toggle
│   │   ├── Footer.tsx      # Footer with links & social
│   │   └── ThemeToggle.tsx # Light/dark mode switcher
│   └── sections/
│       ├── Hero.tsx        # Full-height hero with SVG bg
│       ├── About.tsx       # Company info & core values
│       ├── Services.tsx    # 50 services with filtering
│       ├── Industries.tsx  # 6 industry sectors
│       ├── WhyUs.tsx       # 6 value propositions
│       ├── Process.tsx     # 5-step timeline
│       ├── Portfolio.tsx   # 6 case studies with modal
│       ├── FAQ.tsx         # 6 questions (accordion)
│       └── Contact.tsx     # Form with validation
└── lib/
    └── data/
        ├── services.ts     # All 50 services data
        ├── industries.ts   # Industry sectors
        ├── faqs.ts         # FAQ content
        └── portfolio.ts    # Portfolio projects
```

## Services Breakdown

The website showcases **50 total services** across:

1. **Construction & Engineering** (16 services)
2. **Modular & Site Solutions** (Porta Cabin subset)
3. **IT & Security** (8 services)
4. **Digital Transformation** (5 services)
5. **Digital Marketing** (8 services)
6. **General Trading** (5 services)
7. **General Contracting** (4 services)
8. **Maintenance & Facilities** (4 services)

## Customization

### Update Contact Information

Edit placeholder contact details in:

- `components/layout/Header.tsx` (lines with WhatsApp/Call CTAs)
- `components/layout/Footer.tsx` (contact info section)
- `components/sections/Contact.tsx` (CTA panel)

Replace `https://wa.me/0000000000` and `tel:+0000000000` with actual numbers.

### Modify Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --graphite: #1A1A1D;
  --off-white: #F8F6F0;
  --copper: #B87333;
  /* ... */
}
```

### Add/Remove Services

Edit `lib/data/services.ts` array. Ensure proper category assignment for filtering.

## Verification Checklist

- [x] All 50 services display correctly
- [x] Service filtering works for all 9 categories
- [x] Theme toggle persists across page reloads
- [x] Contact form validation functions properly
- [x] Smooth scroll navigation to all sections
- [x] Portfolio modal opens/closes
- [x] FAQ accordion expands/collapses
- [x] Responsive layouts on mobile/tablet/desktop
- [x] Bebas Neue + Crimson Pro fonts load
- [x] No forbidden company names present

## License

© 2026 TRUE STAR VENTURES. All rights reserved.
