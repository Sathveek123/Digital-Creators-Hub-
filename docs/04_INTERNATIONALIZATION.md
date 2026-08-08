# Digital Creators Hub — Internationalization (i18n) & Translations

This project implements native bilingual localization supporting **English (EN)** and **Telugu (తెలుగు)** using the `next-intl` framework in the Next.js App Router. This documentation explains the routing structure, dictionary management, and translation workflows.

---

## 🎛️ Localization Architecture

Dynamic localization operates via the following chain:

```
[User Request] 
       │
       ▼
[middleware.ts] ────────► Detects locale (cookie or browser header)
       │                  Redirects `/` to `/en` or `/te`
       ▼
[src/app/[locale]] ─────► Matches page layout with active route locale param
       │
       ▼
[src/i18n/request.ts] ──► Explicitly awaits async `requestLocale` parameters (Next.js v15/v16 compliance):
       │                  `messages/en.json` or `messages/te.json`
       ▼
[React Tree Render] ────► Displays localized text via `useTranslations` hooks

```

---

## 📂 Dictionary Files Structure

All translation values reside in JSON format within the root [messages/](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/messages/) directory:
* **English Dictionary:** [en.json](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/messages/en.json)
* **Telugu Dictionary:** [te.json](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/messages/te.json)

Both JSON files share identical structures. For example:

```json
{
  "Navbar": {
    "home": "Home",
    "cta": "Book Free Call"
  }
}
```

And in `te.json`:

```json
{
  "Navbar": {
    "home": "హోమ్",
    "cta": "ఫ్రీ కాల్ బుక్ చేయండి"
  }
}
```

---

## 🔄 Using Translations in Components

To render localized text in client or server components, import the `useTranslations` hook:

```typescript
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('Navbar'); // Selects the specific namespace

  return (
    <button>
      {t('cta')} {/* Outputs: "Book Free Call" or "ఫ్రీ కాల్ బుక్ చేయండి" */}
    </button>
  );
}
```

### 🔀 Handling Arrays and Lists
If you need to loop over an array defined in a JSON translation dictionary (e.g. features lists or checklist values), use `t.raw()`:

```typescript
const features = t.raw('items.gbp.features') as string[];

return (
  <ul>
    {features.map((feature, idx) => (
      <li key={idx}>{feature}</li>
    ))}
  </ul>
);
```

---

## 🎚️ Language Switching Logic

The [LanguageToggle.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/components/ui/LanguageToggle.tsx) component toggles locales by editing the URL path segments directly:

1. It reads the current path prefix using Next's `usePathname()`.
2. On toggle click, it replaces the first URL segment (`en` or `te`) with the newly selected locale.
3. It pushes the updated path to the browser history via `router.push()`, triggering a seamless SSR re-render.

Framer Motion handles the visual toggle via a sliding background pill with spring mechanics.

---

## ➕ Adding a New Language

To support a third language (e.g., Hindi `hi`):

1. **Add to locales list:** Open [middleware.ts](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/middleware.ts) and add the locale code `hi` to the locales array:
   ```typescript
   locales: ['en', 'te', 'hi']
   ```
2. **Add to layout validation:** Open [layout.tsx](file:///d:/Client%20Projects/DCH%20PROJECTS/Digital%20Creators%20Hub%20website/digitalcreatorshub/src/app/%5Blocale%5D/layout.tsx) and add it to the validation guard:
   ```typescript
   if (!['en', 'te', 'hi'].includes(locale)) { notFound(); }
   ```
3. **Create dictionary:** Create a new JSON file `messages/hi.json` containing the translation keys.
4. **Update UI Toggle:** Adjust the toggle UI component to support selecting the new language.
