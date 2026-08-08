# Digital Creators Hub — Landing Page Components & Sections

This document contains a comprehensive breakdown of the landing page sections mapped to their specific files inside the [src/components/sections/](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/) and [src/components/layout/](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/layout/) directories.

---

## 🗂️ Components Index

### 1. Navbar ([Navbar.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/layout/Navbar.tsx))
* **Responsibility:** Glassmorphism sticky header, circular logo rendering, locale navigation routing, language switcher toggle, and primary CTA (`Book Free Strategy Call`).
* **UX Behaviors:**
  * Clean circular brand logo (`w-10 h-10 object-cover rounded-full border border-[#EEEEEE]`) with zero double outer wrapper boxes.
  * Frosted glass background (`bg-white/95 backdrop-blur-md`) with bottom border and shadow when scrolled.
  * Lock-caps language toggle widths to avoid layout shifts.

### 2. Hero ([Hero.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/Hero.tsx))
* **Responsibility:** Capturing user attention with Option D headline slogan ("We build the systems behind serious growth.") and demonstrating agency growth services.
* **Interactive Elements:**
  * **Instagram Story-Style 25-Services Carousel:** Auto-advancing segmented progress bar cycling through service slides across categories.
  * **Single Master Control Video Lightbox Modal:** Plays client showcase reel (`DCH_Ad.mp4`) with `object-contain` frame preservation, sound toggle (`🔊 Sound ON / 🔇 Sound OFF`), full screen mode, and close triggers.

### 3. Portfolio ([Portfolio.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/Portfolio.tsx))
* **Responsibility:** Showcase real client wins and before/after metrics.
* **Live Client Links:** Each of the 6 case studies includes a direct **`Visit Live Site ↗`** external link (`https://skyline-realty.in`, `https://curryleafkitchen.in`, `https://haveli-restaurant.in`, `https://aster-dental.in`, `https://nova-interiors.in`, `https://vista-hotels.in`).

### 4. Interactive Lead & Scanner Tools
* **ROI Growth Calculator (`/tools/roi-calculator`):** Allows business owners to input revenue/ad spend and calculate projected leads, monthly revenue impact, and 12-month ROI.
* **Instant Website & SEO Audit (`/tools/website-audit`):** Scans URL for page load speed, mobile responsiveness, and Google local SEO rank bottlenecks.

### 5. Legal, Compliance & Guarantees
* **Written Service Guarantees (`/guarantee`):** Speed < 2.0s Guarantee, 2-Round Design Revision Guarantee, On-Time Delivery Guarantee, 30-Min Urgent Support SLA.
* **Transparent Process Walkthrough (`/how-it-works`):** Week-by-week timeline detailing Audit → Roadmap → Figma UI → Dev Build → QA → Launch.
* **Security & Data Trust Center (`/security`):** 256-bit SSL encryption, Vercel/AWS cloud infrastructure, and DPDPA 2023 compliance.
* **Cancellation & Refund Policy (`/refund-policy`):** Payment gateway compliance and milestone billing policy.

### 6. Footer ([Footer.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/layout/Footer.tsx))
* **Responsibility:** Main navigation index, contact details, social handles, and compliance credentials.
* **Tax & Registration Details:** Displays official GSTIN (`37AAAAA0000A1Z5`) and `✓ MSME / Udyam Registered Agency` badge.
