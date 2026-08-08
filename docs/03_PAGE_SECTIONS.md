# Digital Creators Hub — Landing Page Components & Sections

This document contains a comprehensive breakdown of the landing page sections mapped to their specific files inside the [src/components/sections/](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/) and [src/components/layout/](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/layout/) directories.

---

## 🗂️ Components Index

### 1. Navbar ([Navbar.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/layout/Navbar.tsx))
* **Responsibility:** Glassmorphism sticky header, circular logo rendering, locale navigation routing, language switcher toggle, and primary CTA.
* **UX Behaviors:**
  * Clean circular brand logo (`w-10 h-10 object-cover rounded-full border border-[#EEEEEE]`) with zero double outer wrapper boxes.
  * Frosted glass background (`bg-white/95 backdrop-blur-md`) with bottom border and shadow when scrolled.
  * Lock-caps language toggle widths to avoid layout shifts.

### 2. Hero ([Hero.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/Hero.tsx))
* **Responsibility:** Capturing user attention with Option D headline slogan ("We build the systems behind serious growth.") and demonstrating all 25 agency growth services.
* **Interactive Elements:**
  * **Instagram Story-Style 25-Services Carousel:** Auto-advancing segmented progress bar cycling through 25 service slides across 4 categories (Web & App, AI, Marketing, Trading).
  * **25 Visually Unique Custom Mockups:** High-fidelity interactive components for every single slide (e.g. Pine Script dark IDE, Trading Bot terminal, CRM Lead Kanban pipeline, AWS Cloud DevOps panel, Smart QR Scanner card, Instagram Brand grid).
  * **Single Master Control Video Lightbox Modal:** Plays client showcase reel (`DCH_Ad.mp4`) with `object-cover` crop-fitting, sound toggle (`🔊 Sound ON / 🔇 Sound OFF`), full screen mode, and close triggers.
  * **3-Stat Benefit Row:** Spans full-width before the bottom ticker (load speeds, mobile searches, WhatsApp rates).
  * Bottom infinite marquee tickers (Row 1: right-to-left; Row 2: left-to-right).

### 3. Stats Band ([Stats.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/Stats.tsx))
* **Responsibility:** Instant credibility and metrics validation.
* **Layout:** Soft gray background (#FAFAFA) with vertical borders separating 4 columns.
- **Three-Layer Content:** Icon → Number (animated count-up with stagger and scale pulses) → Label → Micro-context text.
- **Lower Trust Strip:** Institutional strip featuring checkmarks (`✓ WhatsApp Business Verified` etc.).

### 4. About ([About.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/About.tsx))
* **Responsibility:** Personalizing the brand through founder details and values.
* **Layout:** Warm cream contrasting background (#FFF8F0).
* **Left Column:** Headline stories, Founder Satish's profile, and trust badges (Serviced counts, turnaround times).
* **Right Column:** 3 Value cards (Mission, Vision, Approach) with 4px left orange borders and icons in tinted circle backdrops.
* **Timeline Strip:** Milestone nodes (founded, 100+ clients) displaying horizontally on desktop and vertically on mobile.

### 5. Services Grid ([Services.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/Services.tsx))
* **Responsibility:** Categorized layout of DCH's 25 digital services catalog.
* **UX Design:** 5 Pill tabs (All, Web & App, AI, Marketing, Trading) to filter services.
- **Card Style:** White background, 1px border (#EEE), shadow, translate hover effects, popular badges, features lists, and starting pricing.

### 6. Why Us ([WhyUs.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/WhyUs.tsx))
* **Responsibility:** Differentiating DCH from generic agencies.
* **Layout:** Light gray background (#FAFAFA). Left column features results summary copy and a rounded call button. Right column has 6 features cards divided by horizontal border lines.

### 7. Process Timeline ([Process.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/Process.tsx))
* **Responsibility:** Describing the step-by-step digital execution road.
* **Content Layers:** 6 Stages containing Step title, Description, concrete deliverables chip (e.g. `90-Day Growth Roadmap`), and timeframe indicators (`⏱️ Day 1-2`).
* **Visual Progress:** Injects a scroll-linked orange gradient connector line. Reaches nodes to pulse and scale. Includes a bottom micro-proof card.

### 8. Industries ([Industries.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/Industries.tsx))
* **Responsibility:** Niche target markets.
* **Layout:** 6 featured outcome cards (hooks, specific industry icons in tinted grids), followed by 9 secondary pills (Salons, Construction, Legal) wrapped in a static row.

### 9. Portfolio Grid ([Portfolio.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/Portfolio.tsx))
* **Responsibility:** Case study evidence.
* **Interactive Elements:** Filter tabs, aspect-ratio cards with comparison stats (e.g. *12 inquiries/month → 53 inquiries/month*), visual hero metrics, bottom client attributions, and a play lightbox modal for `Haveli Restaurant`.

### 10. Testimonials Marquee ([Testimonials.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/Testimonials.tsx))
* **Responsibility:** User reviews.
* **Layout:** Dual marquee tracks scrolling in opposite directions (45s and 38s loops). Cards feature verified checks, initials circles, and industry indicators.

### 11. FAQ Accordions ([FAQ.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/FAQ.tsx))
* **Responsibility:** Overcoming customer objections.
* **Grouping:** 10 Questions divided into **Getting Started** and **Working With Us**. Plus icons rotate 45 degrees to cross indicators when accordion height animates. Includes a closing WhatsApp Bridge card.

### 12. Contact Form ([Contact.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/Contact.tsx))
* **Responsibility:** Qualified lead generation.
* **Interactive Elements:**
  - Form Left (58%): Fields, Visual multi-select pills for services, single-select budget range pills, language preferences, and success recap indicators.
  - Direct Card Right (42%): Founder Satish's profile, reply time ticks, WhatsApp/Call buttons, and an embedded Vijayawada maps frame.

### 13. Footer ([Footer.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/layout/Footer.tsx))
* **Responsibility:** Global site maps and copyrights.
* **Layout:** Light system (bg `#FAFAFA`, border-top `#EEE`), featuring brand stats, Quick Links, core services, support hours, and Privacy/Terms Policy links.
