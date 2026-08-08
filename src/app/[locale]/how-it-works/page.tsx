import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Calendar, FileText, Code2, Rocket, Headset } from 'lucide-react';
import { BRAND_CONSTANTS } from '@/lib/constants';

export default function HowItWorksPage({ params }: { params: { locale: string } }) {
  const currentLocale = params.locale === 'te' ? 'te' : 'en';

  const steps = [
    { step: '01', title: 'Free Business & SEO Audit', desc: 'We analyze your website, Google ranking, ad setup, and WhatsApp lead response speed.', duration: 'Day 1' },
    { step: '02', title: '90-Day Growth Roadmap', desc: 'Satish Chittelu creates a personalized milestone plan showing cost, delivery timeline, and projected lead targets.', duration: 'Day 2–3' },
    { step: '03', title: 'Figma UI/UX & Copy Design', desc: 'We design your website or ad templates in Figma and share for your review with 2 revision rounds.', duration: 'Week 1' },
    { step: '04', title: 'Engineering & Automation Build', desc: 'Hand-coded Next.js development, WhatsApp API configuration, and CRM pipeline wiring.', duration: 'Week 2–3' },
    { step: '05', title: 'QA Testing & Live Launch', desc: 'Cross-browser device testing, mobile speed audit, and deployment on custom domain.', duration: 'Week 4' },
    { step: '06', title: 'Ongoing Retainer & Analytics', desc: 'Monthly performance reports, lead tracking, and continuous conversion optimization.', duration: 'Ongoing' },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-[1000px] mx-auto px-6 text-left flex flex-col gap-10">
          
          <Link 
            href={`/${currentLocale}`} 
            className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:underline w-max"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-black uppercase text-primary tracking-widest flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> Transparent Process
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal leading-tight">
              How We Work With You. <br />
              <span className="text-primary">Step by Step.</span>
            </h1>
            <p className="text-bodytext text-base leading-relaxed font-semibold">
              No mystery. No disappearing developers. Here is the exact week-by-week timeline of working with Digital Creators Hub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#EEEEEE] rounded-2xl p-7 shadow-soft flex flex-col gap-3 text-left hover:border-primary/30 transition-all relative">
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-2xl text-primary">{item.step}</span>
                  <span className="text-[11px] font-black uppercase text-[#16A34A] bg-[#EEFBF3] px-3 py-1 rounded-full border border-[#16A34A]/20">
                    {item.duration}
                  </span>
                </div>
                <h3 className="font-display font-black text-xl text-charcoal">{item.title}</h3>
                <p className="text-xs md:text-sm text-bodytext font-semibold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#EEEEEE] p-8 rounded-2xl shadow-soft flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="flex flex-col gap-2">
              <h2 className="font-display font-black text-xl text-charcoal">Ready to start Step 1 with a free business audit?</h2>
              <p className="text-xs text-bodytext font-semibold">Satish will review your setup and WhatsApp you in under 2 hours.</p>
            </div>

            <a
              href={`/${currentLocale}#contact`}
              className="bg-primary hover:bg-[#e04d15] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-md shrink-0"
            >
              Book Free Strategy Call →
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
