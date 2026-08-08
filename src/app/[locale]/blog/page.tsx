'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Sparkles, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { useParams } from 'next/navigation';

export const ARTICLES = [
  {
    slug: 'how-to-rank-google-maps-vijayawada',
    title: {
      en: 'How Local Businesses in Vijayawada Rank #1 on Google Maps in 30 Days',
      te: 'విజయవాడలోని లోకల్ బిజినెస్‌లు 30 రోజుల్లో గూగుల్ మ్యాప్స్‌లో #1 ర్యాంక్ సాధించడం ఎలా'
    },
    excerpt: {
      en: 'Discover the exact Local SEO strategy used by clinics, restaurants, and real estate agencies in AP & Telangana to dominate local searches.',
      te: 'విజయవాడ, వైజాగ్ మరియు హైదరాబాద్ వ్యాపారాలు గూగుల్ మ్యాప్స్ లో ఫస్ట్ పేజి ర్యాంక్ పొందే పక్కా వ్యూహాలు.'
    },
    date: 'Jan 28, 2026',
    readTime: '5 min read',
    category: 'Local SEO'
  },
  {
    slug: 'whatsapp-automation-guide-for-restaurants',
    title: {
      en: 'WhatsApp Automation for Restaurants: 3x More Table Bookings & Orders',
      te: 'రెస్టారెంట్లకు వాట్సాప్ ఆటోమేషన్: 3 రెట్లు ఎక్కువ కస్టమర్ ఆర్డర్లు'
    },
    excerpt: {
      en: 'How automated QR menus, instant order confirmation bots, and broadcast lists drive repeat dining traffic without Zomato commissions.',
      te: 'ఆటోమేటిక్ క్యూఆర్ మెనూ మరియు వాట్సాప్ బాట్లతో మీ రెస్టారెంట్ వ్యాపారాన్ని పెంచుకోండి.'
    },
    date: 'Jan 22, 2026',
    readTime: '6 min read',
    category: 'AI & Automation'
  },
  {
    slug: 'why-slow-websites-cost-you-customers',
    title: {
      en: 'Why an 8-Second Page Load Time is Destroying Your Ad ROI (And How to Fix It)',
      te: 'వెబ్‌సైట్ స్పీడ్ ఆలస్యమైతే కస్టమర్లు మరియు యాడ్స్ డబ్బులు ఎలా వేస్ట్ అవుతాయో తెలుసుకోండి'
    },
    excerpt: {
      en: 'Learn how optimizing Core Web Vitals to under 2 seconds doubles conversion rates for local business websites in Andhra Pradesh.',
      te: 'కోర్ వెబ్ వైటల్స్ ఆప్టిమైజేషన్‌ ద్వారా 2 సెకన్లలోపు వెబ్‌సైట్ లోడ్ అవ్వడం ఎలాగో వివరణ.'
    },
    date: 'Jan 15, 2026',
    readTime: '4 min read',
    category: 'Website Speed'
  }
];

export default function BlogPage() {
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  return (
    <div className="min-h-screen bg-white text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-left">
          
          {/* Header */}
          <div className="max-w-3xl border-b border-[#EEEEEE] pb-8 mb-12 flex flex-col gap-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {currentLocale === 'te' ? 'డిజిటల్ సమాచారం & గైడ్స్' : 'RESOURCES & GUIDES'}
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl text-charcoal tracking-tight">
              {currentLocale === 'te' 
                ? 'వ్యాపార ఎదుగుదలకు అవసరమైన వ్యూహాలు' 
                : 'Proven Growth Guides for Local Businesses'}
            </h1>
            <p className="text-bodytext text-sm md:text-base font-semibold">
              {currentLocale === 'te'
                ? 'ఆంధ్రప్రదేశ్ మరియు తెలంగాణ వ్యాపారాల కోసం రూపొందించిన డిజిటల్ మార్కెటింగ్ మరియు ఆటోమేషన్ సమాచారం.'
                : 'Actionable Insights on Local SEO, WhatsApp Automation, AI Systems, and Website Conversions.'}
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((article, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-3xl p-6 flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#888888]">
                    <span className="bg-[#FFF3EC] text-primary px-3 py-1 rounded-full border border-[#FFD9C2]">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-display font-bold text-xl text-charcoal leading-snug">
                    {article.title[currentLocale as keyof typeof article.title]}
                  </h2>

                  <p className="text-xs font-medium text-bodytext leading-relaxed">
                    {article.excerpt[currentLocale as keyof typeof article.excerpt]}
                  </p>
                </div>

                <div className="border-t border-[#EEEEEE] pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#666666]">
                    <User className="w-3.5 h-3.5 text-primary" />
                    <span>Satish Chittelu</span>
                  </div>

                  <Link
                    href={`/${currentLocale}/blog/${article.slug}`}
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>{currentLocale === 'te' ? 'చదవండి →' : 'Read Guide →'}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
