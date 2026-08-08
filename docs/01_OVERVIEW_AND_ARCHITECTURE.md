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
│   ├── app/                    # Next.js App Router root (26 static & dynamic routes)
│   │   ├── [locale]/           # Dynamic localization segment
│   │   │   ├── layout.tsx      # Main layout (injects OpenGraph, LocalBusiness Schema.org JSON-LD, fonts & floating CTAs)
│   │   │   ├── not-found.tsx   # Custom branded white/orange 404 recovery page
│   │   │   ├── page.tsx        # Homepage compilation root
│   │   │   ├── about/          # Agency story & metrics page
│   │   │   ├── blog/           # High-value growth articles & /[slug] detail
│   │   │   ├── careers/        # Local hiring role listings & applications
│   │   │   ├── comparison/     # Agency vs Freelancer vs DCH comparison matrix
│   │   │   ├── free-audit/     # 60-second interactive website & marketing audit
│   │   │   ├── guarantee/      # Written Service Guarantees & SLAs
│   │   │   ├── how-it-works/   # Transparent 6-step client process walkthrough
│   │   │   ├── integrations/  # Connected Ecosystem Tools (Meta, Google, Make, Razorpay, OpenAI)
│   │   │   ├── portfolio/      # Filterable portfolio gallery & /[slug] case studies + live client links
│   │   │   ├── pricing/        # Transparent 25-services pricing matrix
│   │   │   ├── privacy/        # Privacy Policy legal document
│   │   │   ├── refund-policy/  # Cancellation & Refund Policy legal compliance
│   │   │   ├── security/       # Security & Data Trust Center (256-bit SSL & DPDPA 2023)
│   │   │   ├── services/       # 25-item service catalog & /[slug] detail
│   │   │   ├── team/           # Core 12-person team showcase
│   │   │   ├── terms/          # Terms of Service legal document
│   │   │   ├── thank-you/      # Post-submission onboarding & conversion tracking
│   │   │   └── tools/          # Interactive growth tools (/roi-calculator & /website-audit)
│   │   ├── api/
│   │   │   └── contact/        # Next.js POST API route (DPDPA consent validation + honeypot anti-spam)
│   │   ├── robots.ts           # SEO robots.txt generator
│   │   └── sitemap.ts          # Dynamic XML Sitemap generator
│   ├── components/             # Reusable UI Components
│   ├── lib/
│   │   └── constants.ts        # Centralized brand constants (GSTIN, locked CTAs, social handles)
│   └── middleware.ts           # Locale Redirection Proxy
├── next.config.ts              # Security Headers (X-Frame-Options, CSP) & Image Domains
└── package.json
```

---

## 🔒 Security & Compliance Architecture

1. **GSTIN & MSME Certification:** Official GSTIN (`37AAAAA0000A1Z5`) and `MSME / Udyam Registered Agency` credentials integrated into footer and trust center.
2. **DPDPA 2023 Compliance:** Mandatory data consent checkbox integrated on all lead collection forms.
3. **Anti-Spam Honeypot:** Server-side honeypot evaluation on `/api/contact` to drop bot spam without failing legitimate users.
4. **HTTP Security Headers:** Configured `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Referrer-Policy` in `next.config.ts`.
5. **OpenGraph & Schema.org JSON-LD:** Structured `LocalBusiness` data and dynamic social preview cards for WhatsApp and LinkedIn sharing.
