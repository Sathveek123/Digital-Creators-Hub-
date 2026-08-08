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
  title: "Digital Creators Hub — Your Complete Business Growth Partner",
  description: "Digital Creators Hub helps businesses grow with Digital Marketing, AI Automation, Websites, Local SEO, Google Business Profile, Social Media, CRM, QR Systems and WhatsApp Automation.",
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

  return (
    <html
      lang={locale}
      translate="no"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable} ${teluguFont.variable} scroll-smooth notranslate`}
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className="bg-white text-charcoal font-body selection:bg-primary selection:text-white antialiased pb-14 md:pb-0">
        <NextIntlClientProvider messages={messages}>
          {children}
          <FloatingWhatsAppWidget />
          <StickyMobileCtaBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
