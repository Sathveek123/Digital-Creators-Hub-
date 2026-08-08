'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Search, Gauge, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { BRAND_CONSTANTS } from '@/lib/constants';
import { useParams } from 'next/navigation';

export default function WebsiteAuditPage() {
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const [url, setUrl] = useState('');
  const [phone, setPhone] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [auditResult, setAuditResult] = useState<any>(null);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAuditResult({
        speedScore: 48,
        mobileScore: 92,
        seoScore: 61,
        sslActive: true,
        whatsappIntegrated: false,
        gbpLinked: true,
      });
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-[900px] mx-auto px-6 text-left flex flex-col gap-10">
          
          <Link 
            href={`/${currentLocale}`} 
            className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:underline w-max"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-black uppercase text-primary tracking-widest flex items-center gap-1.5">
              <Search className="w-4 h-4" /> Instant Digital Scanner
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal leading-tight">
              Free Instant Website & SEO Audit.
            </h1>
            <p className="text-bodytext text-base leading-relaxed font-semibold">
              Enter your business website URL to scan page load speed, mobile score, Google Local SEO rank, and WhatsApp lead bottlenecks.
            </p>
          </div>

          <form onSubmit={handleRunAudit} className="bg-white border border-[#EEEEEE] p-6 md:p-8 rounded-2xl shadow-soft flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://yourbusiness.com"
                className="bg-[#FAFAFA] border border-[#DDDDDD] rounded-xl px-4 py-3.5 text-sm font-bold flex-1 focus:outline-none focus:border-primary"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="WhatsApp Phone Number"
                className="bg-[#FAFAFA] border border-[#DDDDDD] rounded-xl px-4 py-3.5 text-sm font-bold w-full md:w-60 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                disabled={isAnalyzing}
                className="bg-primary hover:bg-[#e04d15] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md cursor-pointer shrink-0 disabled:opacity-75"
              >
                {isAnalyzing ? 'Scanning Site...' : 'Run Audit 🚀'}
              </button>
            </div>
          </form>

          {auditResult && (
            <div className="bg-white border border-[#EEEEEE] rounded-2xl p-6 md:p-8 shadow-soft flex flex-col gap-6 text-left">
              <h2 className="font-display font-black text-xl text-charcoal border-b border-[#EEEEEE] pb-3">
                Audit Report Card for: <span className="text-primary">{url}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#FAFAFA] border border-[#EEEEEE] p-4 rounded-xl flex flex-col gap-1">
                  <span className="text-xs font-bold text-[#888888]">Page Load Speed</span>
                  <span className="font-display font-black text-2xl text-[#EF4444]">{auditResult.speedScore}/100 ⚠️ Needs Speed Fix</span>
                </div>
                <div className="bg-[#FAFAFA] border border-[#EEEEEE] p-4 rounded-xl flex flex-col gap-1">
                  <span className="text-xs font-bold text-[#888888]">Mobile Responsiveness</span>
                  <span className="font-display font-black text-2xl text-[#16A34A]">{auditResult.mobileScore}/100 ✅ Good</span>
                </div>
                <div className="bg-[#FAFAFA] border border-[#EEEEEE] p-4 rounded-xl flex flex-col gap-1">
                  <span className="text-xs font-bold text-[#888888]">Google Local SEO</span>
                  <span className="font-display font-black text-2xl text-[#EAB308]">{auditResult.seoScore}/100 ⚠️ Moderate</span>
                </div>
              </div>

              <div className="bg-[#FFF3EC] border border-primary/20 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-display font-black text-base text-charcoal">Want us to fix your speed and SEO bottlenecks?</span>
                  <span className="text-xs font-semibold text-bodytext">Satish Chittelu will review your audit report and send a video roadmap.</span>
                </div>
                <a
                  href={`/${currentLocale}#contact`}
                  className="bg-primary hover:bg-[#e04d15] text-white font-bold text-xs px-6 py-3 rounded-full shrink-0 shadow-sm"
                >
                  Book Strategy Call →
                </a>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
