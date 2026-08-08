'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Check, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';

const PRICING_CATEGORIES = [
  {
    title: { en: 'Web & App Development', te: 'వెబ్ & యాప్ డెవలప్‌మెంట్' },
    desc: { en: 'High-speed websites & custom mobile applications', te: 'అత్యంత వేగవంతమైన వెబ్‌సైట్లు & మొబైల్ యాప్‌లు' },
    services: [
      { name: 'Custom Website Development', price: '₹9,999', period: 'one-time', popular: true, scope: '5-Page High-Speed Website, Mobile Responsive, Free Domain & SSL, SEO-Ready' },
      { name: 'Mobile App Development', price: '₹29,999', period: 'one-time', scope: 'Android & iOS App, Admin Dashboard, Push Notifications, Play Store Submission' },
      { name: 'UI/UX Design & Branding', price: '₹4,999', period: 'one-time', scope: 'Logo System, Brand Style Guide, Figma Prototypes, Color Palette' },
      { name: 'Website Speed Optimization', price: '₹2,999', period: 'one-time', scope: '90+ Core Web Vitals, Image Compression, Code Minification, CDN Setup' }
    ]
  },
  {
    title: { en: 'AI & Business Automation', te: 'ఏఐ & బిజినెస్ ఆటోమేషన్' },
    desc: { en: '24/7 automated agents & intelligent lead workflows', te: '24/7 పనిచేసే ఏఐ సిస్టమ్స్ & ఆటోమేషన్' },
    services: [
      { name: 'AI Chatbots & AI Agents', price: '₹9,999', period: 'one-time', popular: true, scope: '24/7 Lead Capture Bot, Custom Training on Business Data, CRM Sync' },
      { name: 'WhatsApp Automation & Bots', price: '₹4,999', period: 'one-time', scope: 'Official WhatsApp API, Auto-Replies, Broadcast Lists, Interactive Menu' },
      { name: 'AI Voice Bots & Calling Agents', price: '₹14,999', period: 'one-time', scope: 'Outbound Appointment Calls, Inbound Support Agent, Live Transcripts' },
      { name: 'Workflow Automation (Zapier/n8n)', price: '₹5,999', period: 'one-time', scope: 'Cross-App Sync (Forms -> WhatsApp -> Google Sheets -> Email)' },
      { name: 'CRM & Marketing Automation', price: '₹9,999', period: 'one-time', scope: 'Pipeline Tracker, Automated Follow-Ups, Client Tagging' },
      { name: 'Cloud Infrastructure & DevOps', price: '₹7,999', period: 'one-time', scope: 'Server Migration, AWS/Cloudflare Setup, 99.9% Uptime Guarantee' },
      { name: 'Cybersecurity Solutions', price: '₹9,999', period: 'one-time', scope: 'DDoS Protection, Firewall Rules, Malware Scanning & SSL Enforcement' }
    ]
  },
  {
    title: { en: 'Digital Marketing & Local SEO', te: 'డిజిటల్ మార్కెటింగ్ & లోకల్ SEO' },
    desc: { en: 'Rank #1 locally & scale customer inquiries', te: 'గూగుల్ మ్యాప్స్‌లో #1 ర్యాంక్ పొందండి' },
    services: [
      { name: 'Google Business Profile Domination', price: '₹2,999', period: '/month', popular: true, scope: 'Local Pack #1 Optimization, Weekly Posts, Review Automation, Photo Updates' },
      { name: 'Social Media Management', price: '₹4,999', period: '/month', scope: '12 Custom Graphic Posts/Reels, Caption Writing, Hashtag Strategy' },
      { name: 'Facebook & Instagram Ads', price: '₹7,999', period: '/month', scope: 'High-ROI Ad Creatives, Audience Targeting, WhatsApp Inbox Lead Ads' },
      { name: 'Google Ads Management', price: '₹7,999', period: '/month', scope: 'Search Ads, High-Intent Keyword Bidding, Negative Keyword Filters' },
      { name: 'Lead Generation Systems', price: '₹9,999', period: '/month', scope: 'Complete Funnel Setup, Landing Page, Multi-Channel Lead Capture' },
      { name: 'Email Marketing Automation', price: '₹3,999', period: '/month', scope: 'Automated Drip Sequences, Newsletter Templates, Open Rate Tracking' },
      { name: 'Conversion Rate Optimization', price: '₹5,999', period: 'one-time', scope: 'A/B Testing, Heatmap Analysis, Form Friction Reduction' },
      { name: 'QR Code Solutions', price: '₹1,999', period: 'one-time', scope: 'Smart QR Menu / Feedback Cards, Custom Branding, Dynamic Redirects' }
    ]
  },
  {
    title: { en: 'Trading Solutions', te: 'ట్రేడింగ్ సొల్యూషన్స్' },
    desc: { en: 'Automated TradingView indicators & execution bots', te: 'ఆటోమేటిక్ ట్రేడింగ్ బాట్స్ & ఇండికేటర్స్' },
    services: [
      { name: 'TradingView Pine Script Dev', price: '₹4,999', period: 'one-time', scope: 'Custom Indicator Development, Strategy Logic Coding, Alerts Setup' },
      { name: 'Trading Bots Development', price: '₹14,999', period: 'one-time', popular: true, scope: 'Automated Execution Engine, Broker API Bridge (Angel/Zerodha/Dhan)' },
      { name: 'Automated Trading Strategies', price: '₹19,999', period: 'one-time', scope: 'Multi-Timeframe Logic, Risk Management Rules, Stop Loss Automation' },
      { name: 'Custom Indicators & Alerts', price: '₹3,999', period: 'one-time', scope: 'Webhook Alerts to Telegram/WhatsApp, Custom Oscillator Overlays' },
      { name: 'Strategy Backtesting & Optimization', price: '₹5,999', period: 'one-time', scope: 'Historical Data Testing, Win Rate Analysis, Maximum Drawdown Reports' },
      { name: 'AI-Powered Trading Systems', price: '₹24,999', period: 'one-time', scope: 'Machine Learning Market Pattern Recognition & Automated Execution' }
    ]
  }
];

export default function PricingPage() {
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
              <Zap className="w-3.5 h-3.5" />
              {currentLocale === 'te' ? 'పారదర్శక ధరలు' : 'TRANSPARENT PRICING'}
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl text-charcoal tracking-tight">
              {currentLocale === 'te' 
                ? 'స్పష్టమైన ధరలు. ఎలాంటి దాగి ఉన్న రుసుములు లేవు.' 
                : 'Clear pricing. No hidden agency surprises.'}
            </h1>
            <p className="text-bodytext text-sm md:text-base font-semibold">
              {currentLocale === 'te'
                ? 'మా సేవలు మరియు బిజినెస్ ప్యాకేజీలకు సంబంధించిన ప్రారంభ ధరల పట్టిక ఇక్కడ చూడవచ్చు.'
                : 'Scannable pricing breakdown across all 25 digital growth systems and services.'}
            </p>
          </div>

          {/* Pricing Tables Grouped by Category */}
          <div className="flex flex-col gap-12">
            {PRICING_CATEGORIES.map((cat, catIdx) => (
              <div key={catIdx} className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-sm">
                
                <div className="flex flex-col gap-1">
                  <h2 className="font-display font-black text-2xl text-charcoal">
                    {cat.title[currentLocale as keyof typeof cat.title]}
                  </h2>
                  <p className="text-xs font-semibold text-[#888888]">
                    {cat.desc[currentLocale as keyof typeof cat.desc]}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.services.map((srv, srvIdx) => (
                    <div
                      key={srvIdx}
                      className={`bg-white border rounded-2xl p-5 flex flex-col justify-between gap-4 relative transition-all hover:shadow-md ${
                        srv.popular ? 'border-primary shadow-sm' : 'border-[#EEEEEE]'
                      }`}
                    >
                      {srv.popular && (
                        <span className="absolute -top-3 right-4 bg-primary text-white text-[10px] font-black uppercase px-3 py-0.5 rounded-full tracking-wider shadow-sm">
                          Most Popular
                        </span>
                      )}

                      <div className="flex flex-col gap-2">
                        <h3 className="font-display font-bold text-base text-charcoal">
                          {srv.name}
                        </h3>
                        <div className="flex items-baseline gap-1">
                          <span className="font-display font-black text-2xl text-primary">{srv.price}</span>
                          <span className="text-xs text-[#888888] font-bold">{srv.period}</span>
                        </div>
                        <p className="text-xs text-bodytext font-medium border-t border-[#EEEEEE] pt-3 mt-1">
                          <span className="font-bold text-charcoal block mb-0.5">Scope & Deliverables:</span>
                          {srv.scope}
                        </p>
                      </div>

                      <a
                        href={`https://wa.me/919912799855?text=${encodeURIComponent(`Hi DCH, I want to book the ${srv.name} package (${srv.price}).`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#FAFAFA] hover:bg-primary hover:text-white border border-[#EEEEEE] text-charcoal font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span>{currentLocale === 'te' ? 'ఇప్పుడే బుక్ చేయండి' : 'Book This System'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>

                    </div>
                  ))}
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
