'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ARTICLES } from '../page';
import { notFound, useParams } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft, MessageCircle } from 'lucide-react';

export default function BlogArticlePage() {
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';
  const slug = params?.slug as string;

  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white text-charcoal antialiased flex flex-col justify-between select-none">
        <Navbar />
        <main className="flex-grow pt-32 pb-20 text-center">
          <h1 className="font-display font-black text-3xl">Article Not Found</h1>
          <Link href={`/${currentLocale}/blog`} className="text-primary font-bold mt-4 inline-block">
            ← Return to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const titleText = article.title[currentLocale as keyof typeof article.title];
  const excerptText = article.excerpt[currentLocale as keyof typeof article.excerpt];

  return (
    <div className="min-h-screen bg-white text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <article className="max-w-4xl mx-auto px-6 text-left flex flex-col gap-8">
          
          {/* Back link */}
          <Link
            href={`/${currentLocale}/blog`}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#888888] hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{currentLocale === 'te' ? 'బ్లాగుల జాబితాకు తిరిగి వెళ్లండి' : 'Back to All Guides'}</span>
          </Link>

          {/* Article Header */}
          <div className="border-b border-[#EEEEEE] pb-8 flex flex-col gap-4">
            <span className="self-start bg-[#FFF3EC] text-primary text-xs font-bold px-3.5 py-1 rounded-full border border-[#FFD9C2]">
              {article.category}
            </span>

            <h1 className="font-display font-black text-3xl md:text-5xl text-charcoal tracking-tight leading-tight">
              {titleText}
            </h1>

            <p className="text-bodytext text-base md:text-lg font-medium leading-relaxed">
              {excerptText}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-[#888888] pt-2">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-primary" />
                <span className="text-charcoal">Satish Chittelu</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="flex flex-col gap-6 text-base text-bodytext leading-relaxed font-normal">
            <p>
              In today's fast-evolving business landscape across Andhra Pradesh & Telangana, reliance on traditional word-of-mouth marketing alone is no longer enough. Local consumers in Vijayawada, Visakhapatnam, and Hyderabad now turn to their mobile phones first when searching for trusted doctors, real estate properties, dining spots, or professional services.
            </p>

            <h2 className="font-display font-bold text-2xl text-charcoal pt-4">
              Step 1: Complete Optimization of Your Google Business Profile
            </h2>
            <p>
              Your Google Business Profile (GBP) is the primary digital storefront for local customers. Ensure your business title, exact physical address in Vijayawada, primary phone number, and hours are 100% verified. Uploading weekly real-time photos of your office or team builds immense algorithmic trust with Google Local Pack.
            </p>

            <h2 className="font-display font-bold text-2xl text-charcoal pt-4">
              Step 2: Instant WhatsApp Inquiry Response Automation
            </h2>
            <p>
              When prospective clients click through to your business, 73% prefer contacting you on WhatsApp over filling a tedious email form. By wiring an automated WhatsApp API agent to your website and Google ads, you capture lead inquiries instantly 24/7 without manual delay.
            </p>

            {/* In-article CTA box */}
            <div className="bg-[#FFF8F0] border-2 border-[#FFD9C2] rounded-3xl p-6 md:p-8 flex flex-col gap-4 my-6 text-left">
              <h3 className="font-display font-black text-xl text-charcoal">
                Want Digital Creators Hub to execute this exact system for your business?
              </h3>
              <p className="text-xs font-semibold text-bodytext">
                Book a 1-on-1 free growth strategy call with Satish Chittelu. We audit your digital footprint and present a custom roadmap.
              </p>
              <a
                href="https://wa.me/919912799855?text=Hi%20DCH,%20I%20read%20your%20article%20and%20want%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="self-start bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-3 px-6 rounded-xl shadow-md flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+91 99127 99855)</span>
              </a>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
