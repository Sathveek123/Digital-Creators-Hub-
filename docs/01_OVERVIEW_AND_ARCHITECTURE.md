# Digital Creators Hub — Technical Architecture & Overview

Welcome to the technical architecture documentation for the redesigned **Digital Creators Hub (DCH)** website. This document outlines the modern technical stack, structural directories, and core architecture concepts of the application.

---

## 🛠️ The Tech Stack

The platform is engineered to deliver sub-second page loads, modular components, and native localized translations for regional markets (specifically targeting Andhra Pradesh & Telangana).

| Technology | Purpose | Version |
| :--- | :--- | :--- |
| **Next.js** | App Router, Dynamic localized routing, Server Prerendering | `^16.3.0` |
| **React** | Component Library | `^19.0.0` |
| **Tailwind CSS** | Styling, Tokenized design utility system | `^4.0.0` |
| **Framer Motion** | Micro-interactions, stagger entries, scroll-trigger animations | `^13.0.0` |
| **next-intl** | Bilingual routing, dynamic JSON dictionary translation | `^4.13.5` |
| **TypeScript** | Static typing and interface enforcement | `^5.0.0` |
| **Lucide React** | Premium icon library | `^0.475.0` |

---

## 🗂️ Project Directory Structure

```
digitalcreatorshub/
├── messages/                   # Translation Dictionaries
│   ├── en.json                 # English localisations
│   └── te.json                 # Telugu localisations (తెలుగు)
├── public/                     # Static media & asset storage
│   ├── logo.jpg / dch-logo.jpg # Official circular brand logo image
│   └── videos/                 # Video showcase reels (DCH_Ad.mp4, Haveli_Ad.mp4)
├── src/
│   ├── app/                    # Next.js App Router root (17 static & dynamic routes)
│   │   ├── [locale]/           # Dynamic localization segment
│   │   │   ├── layout.tsx      # Main layout (injects providers, fonts & floating CTAs)
│   │   │   ├── page.tsx        # Homepage compilation root
│   │   │   ├── about/          # Agency story & metrics page
│   │   │   ├── blog/           # High-value growth articles & /[slug] detail
│   │   │   ├── careers/        # Local hiring role listings & applications
│   │   │   ├── comparison/     # Agency vs Freelancer vs DCH comparison matrix
│   │   │   ├── free-audit/     # 60-second interactive website & marketing audit
│   │   │   ├── portfolio/      # Filterable portfolio gallery & /[slug] case studies
│   │   │   ├── pricing/        # Transparent 25-services pricing matrix
│   │   │   ├── privacy/        # Privacy Policy legal document
│   │   │   ├── services/       # 25-item service catalog & /[slug] detail
│   │   │   └── terms/          # Terms of Service legal document
│   │   ├── api/
│   │   │   └── contact/        # Next.js POST API route for lead form submissions
│   │   ├── robots.ts           # SEO robots.txt generator
│   │   ├── sitemap.ts          # Dynamic sitemap.xml generator
│   │   └── globals.css         # Tailwind v4 directives & theme variables
│   ├── components/
│   │   ├── common/             # Site-wide persistent conversion utilities
│   │   │   ├── FloatingWhatsAppWidget.tsx # Floating WhatsApp chat bubble
│   │   │   └── StickyMobileCtaBar.tsx     # 1-tap mobile Call & WhatsApp bar
│   │   ├── layout/             # Shared global components
│   │   │   ├── Navbar.tsx      # Glassmorphism header navbar with circular logo
│   │   │   └── Footer.tsx      # 4-column footer with brand signature
│   │   ├── sections/           # Modular landing page components
│   │   │   ├── Hero.tsx        # Story-style 25-services carousel hero with video modal
│   │   │   ├── Services.tsx    # Categorized tab services catalog
│   │   │   ├── Portfolio.tsx   # Project showcase gallery
│   │   │   ├── FAQ.tsx         # Responsive Q&A accordion grid
│   │   │   └── Contact.tsx     # Validated lead submission form & maps card
│   │   └── ui/                 # Reusable UI elements
│   │       ├── SplashScreen.tsx   # Restrained, centered logo intro screen
│   │       └── LanguageToggle.tsx # Sliding language switch pill
│   ├── i18n/
│   │   └── request.ts          # next-intl configuration helper
│   ├── lib/
│   │   └── animations.ts       # Shared Framer Motion transition variants
│   └── middleware.ts           # i18n locale routing redirects handler
├── package.json                # Project dependencies and dev scripts
├── tsconfig.json               # TypeScript compiler config
└── next.config.ts              # Next.js bundler and image domain optimization
```

---

## ⚙️ Core Architecture Concepts

### 1. Unified Internationalization (i18n) Routing
Rather than loading translation strings asynchronously on the client, next-intl reads the route parameter `/[locale]` during SSR and feeds only the matching dictionary chunk (`en.json` or `te.json`) into the React tree. This prevents any flickering of layout shifts during load.

### 2. High Performance Layouts with Selective Video Lightboxes
The Hero section features a story-style 25-services carousel with 25 visually unique custom mockup components. High-fidelity video case reels (`DCH_Ad.mp4`, `Haveli_Ad.mp4`) are loaded on-demand inside custom aspect-ratio lightbox modals with single unified control bars and `object-cover` crop-fitting.

### 3. Backend Lead Submission API (`/api/contact`)
Contact form submissions hit a Next.js Server API endpoint at `/api/contact` that validates request payloads, processes lead data, and returns structured JSON status codes to the client UI.

### 4. Component Isolation
Every section operates as an isolated component inside `src/components/sections/`. This makes auditing layouts, modifying copy, or upgrading animations completely decoupled from the rest of the application.
