# Digital Creators Hub — Developer Onboarding & Development Guide

This onboarding guide is designed to help new developers set up, run, develop, and test the redesigned Next.js landing page.

---

## 🚀 Local Development Setup

### 1. Prerequisites
Ensure you have the following installed on your machine:
* **Node.js:** Version `18.17.0` or higher (we recommend `20.x` or `22.x`).
* **npm:** Node Package Manager (comes with Node).

### 2. Initializing the Project
Navigate to the Next.js subdirectory and install dependencies:
```bash
cd "d:\Client Projects\DCH PROJECTS\Digital Creators Hub website\digitalcreatorshub"
npm install
```

### 3. Running Local Servers
To boot up the local dev server under Next's Turbopack engine:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. The default route redirects automatically to [http://localhost:3000/en](http://localhost:3000/en).

---

## 🛠️ Build & Development Commands

Use the following npm scripts during development:

| Script Command | Purpose |
| :--- | :--- |
| **`npm run dev`** | Starts Next.js development server on port 3000 with hot-reloading |
| **`npm run build`** | Builds production bundle, runs TypeScript compiler checks and static page prerenders |
| **`npm run start`** | Starts the production server using the built assets |
| **`npm run lint`** | Runs ESLint scans to identify typing, formatting, and syntax issues |

---

## 🎨 Best Practices for Code Modifications

### 1. Creating/Editing Page Components
* All UI layouts are modularized inside [src/components/sections/](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/sections/).
* Keep components clean and focused. If a section grows too large, break out subcomponents into `src/components/ui/` or a localized helper file.

### 2. Styling with Tailwind CSS v4
Tailwind v4 imports directly via `@import "tailwindcss";` in `globals.css`.
* Do not write custom classes for styling unless absolutely necessary. Rely on Tailwind's utility classes.
* Customize primary color tokens by editing the `@theme` directive in [globals.css](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/app/globals.css).

### 3. Rendering External Images
* Always use Next's optimized `<Image />` component from `next/image` to prevent layout shifts and guarantee WebP compression/lazy loading.
* If you import images from a new external website, you **must** configure the target domain under `remotePatterns` inside [next.config.ts](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/next.config.ts), otherwise the compilation will throw a 500 error:
  ```typescript
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'newdomain.com',
        pathname: '/**',
      },
    ],
  },
  ```

### 4. Adding/Modifying Text Content
* **Never hardcode strings** directly inside TSX files.
* Always define new strings inside [messages/en.json](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/messages/en.json) and [messages/te.json](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/messages/te.json). This guarantees the site remains 100% localized.
