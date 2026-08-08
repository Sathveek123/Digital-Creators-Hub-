import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Plus_Jakarta_Sans, Inter, Noto_Sans_Telugu } from 'next/font/google';
import '../globals.css';

const displayFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '700', '800'],
  display: 'swap',
});

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const teluguFont = Noto_Sans_Telugu({
  subsets: ['telugu'],
  variable: '--font-telugu',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Digital Creators Hub — Andhra Pradesh & Telangana's Growth Partner",
  description: "Digital Creators Hub helps businesses grow with high-performance Websites, Local SEO, WhatsApp Automation, Meta Ads, AI Systems, and CRM Dashboards.",
  openGraph: {
    title: "Digital Creators Hub — Andhra Pradesh & Telangana's Growth Partner",
    description: "500+ businesses trust us for high-performance websites, local SEO, WhatsApp automation, and AI-driven growth systems.",
    url: 'https://digitalcreatorshub.in',
    siteName: 'Digital Creators Hub',
    images: [
      {
        url: '/dch-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Creators Hub Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Digital Creators Hub — Andhra Pradesh & Telangana's Growth Partner",
    description: "500+ businesses trust us for high-performance websites, local SEO, and WhatsApp automation.",
    images: ['/dch-logo.jpg'],
  },
  other: {
    google: 'notranslate'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

import FloatingWhatsAppWidget from '@/components/common/FloatingWhatsAppWidget';
import StickyMobileCtaBar from '@/components/common/StickyMobileCtaBar';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<any>;
}) {
  const { locale } = await params;

  // Validate that the incoming locale parameter is valid
  if (!['en', 'te'].includes(locale)) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Digital Creators Hub',
    image: '/dch-logo.jpg',
    telephone: '+919912799855',
    email: 'hello@digitalcreatorshub.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vijayawada',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },
    url: 'https://digitalcreatorshub.in',
    priceRange: '₹2,999 - ₹49,999',
    description: "Andhra Pradesh & Telangana's growth partner for websites, local SEO, WhatsApp automation, and AI systems.",
  };

  return (
    <html
      lang={locale}
      translate="no"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable} ${teluguFont.variable} scroll-smooth notranslate w-full max-w-full overflow-x-hidden`}
    >
      <head>
        <meta name="google" content="notranslate" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-charcoal font-body selection:bg-primary selection:text-white antialiased pb-14 md:pb-0 w-full max-w-full overflow-x-hidden relative">
        <NextIntlClientProvider messages={messages}>
          <div className="w-full max-w-full overflow-x-hidden relative">
            {children}
          </div>
          <FloatingWhatsAppWidget />
          <StickyMobileCtaBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
