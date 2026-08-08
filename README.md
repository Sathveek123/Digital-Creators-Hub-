# Digital Creators Hub — High-Performance Agency Platform

> **Andhra Pradesh & Telangana's Growth Partner** — Built with Next.js 16 (App Router), Turbopack, Framer Motion, Tailwind CSS v4, and `next-intl` bilingual support (Telugu + English).

---

## 🌟 Overview

**Digital Creators Hub** is a production-ready, ultra-fast web system engineered for local business growth across Andhra Pradesh and Telangana. Designed for high conversion, local SEO dominance, WhatsApp automation, and multi-language client engagement.

### Key Capabilities
- 🚀 **Bilingual Internationalization (i18n):** Native support for English (`/en`) and Telugu (`/te`) powered by `next-intl`.
- ⚡ **Next.js 16 & Turbopack:** Blazing fast page loads (<1.2s compilation) with zero layout shifts.
- 🎨 **Sleek Light Design System:** Premium clean palette (`#FF5C1C` primary orange, `#111111` dark charcoal, `#FFF8F0` warm cream, `#FAFAFA` light gray).
- 📹 **Uncropped HD Video Lightbox Modals:** Full interactive player suite (`[Play/Pause]`, `[Sound ON/OFF]`, `[Fullscreen]`, `[Close]`) with 100% `object-contain` frame preservation for widescreen ads & 9:16 vertical reels.
- 📈 **Guaranteed Zero-Proof Stats Counter:** Server-side rendered real fallback numbers (`500+`, `200+`, `98%`, `5+`) preventing initial "0+" flashes.
- 📱 **WhatsApp & Phone Direct Action Bridges:** Floating widgets and mobile sticky CTA bars.
- 💌 **Backend Contact API Handler (`/api/contact`):** Next.js API route validating and processing lead form submissions.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16.3 (App Router with Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 + Custom Utility Directives |
| **Animations** | Framer Motion |
| **Localization** | `next-intl` (English & Telugu) |
| **Icons** | Lucide React |
| **Deployment** | Vercel Ready |

---

## 📁 Repository Structure

```
digitalcreatorshub/
├── docs/                        # Complete System Specifications & Architecture
│   ├── 01_OVERVIEW_AND_ARCHITECTURE.md
│   ├── 02_DESIGN_SYSTEM.md
│   ├── 03_PAGE_SECTIONS.md
│   ├── 04_INTERNATIONALIZATION.md
│   └── 05_DEVELOPMENT_ONBOARDING.md
├── messages/                    # Translation Dictionaries
│   ├── en.json                  # English Copy Dictionary
│   └── te.json                  # Telugu Copy Dictionary
├── public/                      # Static Media Assets & Video Reels
│   ├── dch-logo.jpg             # Brand Logo Image
│   ├── logo.jpg                 # Circular Founder Avatar
│   └── videos/                  # Client Showcase Video Reels
│       ├── DCH_Ad.mp4           # Core Agency Reel
│       └── Haveli_Ad.mp4        # Haveli Client Ad Reel
├── src/
│   ├── app/                     # App Router Routes & API Endpoints
│   │   ├── [locale]/            # Localized Pages (/en & /te)
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   ├── careers/
│   │   │   ├── comparison/
│   │   │   ├── free-audit/
│   │   │   ├── portfolio/
│   │   │   ├── pricing/
│   │   │   ├── privacy/
│   │   │   ├── services/
│   │   │   ├── terms/
│   │   │   └── page.tsx         # Homepage Entry
│   │   ├── api/contact/         # Lead Form POST Endpoint
│   │   ├── robots.ts            # Dynamic SEO Robots
│   │   └── sitemap.ts           # Dynamic XML Sitemap
│   ├── components/              # Reusable UI Components
│   │   ├── common/              # Sticky Mobile CTA & Floating WhatsApp
│   │   ├── layout/              # Navbar & Footer
│   │   ├── sections/            # Hero, Stats, WhyUs, Services, Portfolio, FAQ, Contact
│   │   └── ui/                  # Language Toggle & SplashScreen
│   ├── i18n/                    # Request Locale Resolver
│   ├── lib/                     # Motion Animation Helpers
│   └── middleware.ts            # Locale Redirection Proxy
├── next.config.ts               # Next.js Build Configuration
└── package.json
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm 9.x or later

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sathveek123/Digital-Creators-Hub-.git
   cd digitalcreatorshub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Access local preview:**
   - English: [http://localhost:3000/en](http://localhost:3000/en)
   - Telugu: [http://localhost:3000/te](http://localhost:3000/te)

---

## ⚡ Build & Verification

To verify production compilation with Next.js Turbopack:

```bash
npm run build
```

---

## 🌐 Credits

Powered by **[NetQuoraX IT Solutions](https://net-quora-x-agency.vercel.app/)**
Founder: **Satish Chittelu**
