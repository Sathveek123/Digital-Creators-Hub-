'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Briefcase, MapPin, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useParams } from 'next/navigation';

const OPEN_ROLES = [
  {
    title: 'Senior Next.js & React Developer',
    type: 'Full-Time · Vijayawada / Hybrid',
    exp: '2-4 years experience',
    desc: 'Build high-performance, SSR-driven web applications, custom UI components, and API integrations for client systems.'
  },
  {
    title: 'AI & Automation Engineer (n8n / Python)',
    type: 'Full-Time · Vijayawada AP',
    exp: '1-3 years experience',
    desc: 'Design automated WhatsApp bots, AI calling agents, CRM pipelines, and custom API webhooks.'
  },
  {
    title: 'Local SEO & Google Business Specialist',
    type: 'Full-Time · Vijayawada AP',
    exp: '1-3 years experience',
    desc: 'Optimize Local Pack Google Business Profiles, execute citation building, and manage local review growth campaigns.'
  },
  {
    title: 'Pine Script & Algorithmic Trading Developer',
    type: 'Full-Time / Contract · Hybrid',
    exp: '2+ years experience',
    desc: 'Develop TradingView Pine Script v5 indicators, backtest trading strategies, and code automated broker execution bots.'
  }
];

export default function CareersPage() {
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
              {currentLocale === 'te' ? 'ఉద్యోగ అవకాశాలు' : 'JOIN THE TEAM'}
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl text-charcoal tracking-tight">
              {currentLocale === 'te' 
                ? 'మాతో కలిసి విజయవాడలో డిజిటల్ విప్లవాన్ని నిర్మించండి' 
                : 'Build the Future of Digital Growth in Vijayawada'}
            </h1>
            <p className="text-bodytext text-sm md:text-base font-semibold">
              {currentLocale === 'te'
                ? 'మము 12+ మంది నిపుణుల బృందంగా ఎదుగుతున్నాము. మాతో కలిసి పనిచేయాలనుకుంటున్నారా?'
                : 'We are expanding our team of engineers, designers, and growth marketers. Explore open positions.'}
            </p>
          </div>

          {/* Open Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPEN_ROLES.map((role, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#FFF3EC] text-primary text-xs font-bold px-3 py-1 rounded-full border border-[#FFD9C2]">
                      {role.type}
                    </span>
                    <span className="text-xs font-bold text-[#888888]">{role.exp}</span>
                  </div>

                  <h2 className="font-display font-black text-xl text-charcoal">
                    {role.title}
                  </h2>

                  <p className="text-xs font-medium text-bodytext leading-relaxed">
                    {role.desc}
                  </p>
                </div>

                <a
                  href={`mailto:careers@digitalcreatorshub.com?subject=Application%20for%20${encodeURIComponent(role.title)}`}
                  className="self-start bg-primary hover:bg-[#e04d15] text-white font-bold text-xs py-3 px-6 rounded-xl shadow-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
