'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Check, X, Sparkles, Shield, Zap } from 'lucide-react';
import { useParams } from 'next/navigation';

const COMPARISON_ITEMS = [
  {
    feature: 'Native Telugu & English Client Communication',
    dch: true,
    freelancer: false,
    agency: false,
    note: 'Direct phone & WhatsApp support in your local language.'
  },
  {
    feature: 'Page Load Speed Guaranteed (< 2 Seconds)',
    dch: true,
    freelancer: false,
    agency: false,
    note: 'Built on Next.js 16 SSR, not bloated WordPress templates.'
  },
  {
    feature: '24/7 AI Lead Capture & WhatsApp Automation',
    dch: true,
    freelancer: false,
    agency: 'Extra Cost',
    note: 'Automated chatbots and immediate lead notifications.'
  },
  {
    feature: 'Local Physical Office in Vijayawada, AP',
    dch: true,
    freelancer: false,
    agency: false,
    note: 'Meet Satish Chittelu and team in person at Vijayawada.'
  },
  {
    feature: 'Transparent Upfront Pricing (No Hidden Fees)',
    dch: true,
    freelancer: true,
    agency: false,
    note: 'Clear, itemized scopes with zero surprise agency retainers.'
  },
  {
    feature: 'Custom TradingView & Algo Trading Scripting',
    dch: true,
    freelancer: false,
    agency: false,
    note: 'In-house Pine Script v5 and broker API automated execution.'
  }
];

export default function ComparisonPage() {
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
              {currentLocale === 'te' ? 'ఎందుకు DCH ఎంచుకోవాలి?' : 'HONEST COMPARISON'}
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl text-charcoal tracking-tight">
              {currentLocale === 'te' 
                ? 'DCH vs ఫ్రీలాన్సర్లు vs సంప్రదాయ ఏజెన్సీలు' 
                : 'Digital Creators Hub vs Freelancers vs Big Agencies'}
            </h1>
            <p className="text-bodytext text-sm md:text-base font-semibold">
              {currentLocale === 'te'
                ? 'మీ వ్యాపారానికి సరైన పార్ట్‌నర్‌ను ఎంచుకోవడానికి నిజాయితీతో కూడిన పోలిక పట్టిక.'
                : 'An honest breakdown of speed, communication, technology, and local presence.'}
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-3xl p-6 md:p-8 overflow-x-auto shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#EEEEEE] text-xs font-bold text-[#888888]">
                  <th className="py-4 px-4 font-display font-black text-charcoal text-base">Key Feature / Capability</th>
                  <th className="py-4 px-4 bg-[#FFF3EC] text-primary font-display font-black text-base text-center rounded-t-xl border-t-2 border-primary">
                    Digital Creators Hub
                  </th>
                  <th className="py-4 px-4 text-center">Freelancers</th>
                  <th className="py-4 px-4 text-center">Big Agencies (Metro)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEEEEE] text-xs md:text-sm font-medium">
                {COMPARISON_ITEMS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/60 transition-colors">
                    <td className="py-4 px-4">
                      <span className="font-bold text-charcoal block">{item.feature}</span>
                      <span className="text-[11px] text-[#888888]">{item.note}</span>
                    </td>
                    <td className="py-4 px-4 bg-[#FFF3EC]/50 text-center font-bold text-primary">
                      {item.dch ? (
                        <div className="flex items-center justify-center gap-1 text-[#16A34A] font-extrabold">
                          <Check className="w-5 h-5 text-[#16A34A]" />
                          <span>Yes (Included)</span>
                        </div>
                      ) : (
                        <span className="text-[#888888]">{item.dch}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {item.freelancer === true ? (
                        <Check className="w-4 h-4 text-[#16A34A] mx-auto" />
                      ) : item.freelancer === false ? (
                        <X className="w-4 h-4 text-[#EF4444] mx-auto" />
                      ) : (
                        <span className="text-[#888888]">{item.freelancer}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {item.agency === true ? (
                        <Check className="w-4 h-4 text-[#16A34A] mx-auto" />
                      ) : item.agency === false ? (
                        <X className="w-4 h-4 text-[#EF4444] mx-auto" />
                      ) : (
                        <span className="text-[#888888]">{item.agency}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
