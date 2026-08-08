import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Cpu, MessageSquareCode, Layers, Globe, Share2, ShieldCheck, QrCode } from 'lucide-react';
import { BRAND_CONSTANTS } from '@/lib/constants';

export default function IntegrationsPage({ params }: { params: { locale: string } }) {
  const currentLocale = params.locale === 'te' ? 'te' : 'en';

  const integrationsList = [
    { name: 'Meta Business API', desc: 'Official WhatsApp Cloud API & Instagram/Facebook Ads Manager', category: 'Messaging & Ads', icon: MessageSquareCode },
    { name: 'Google Business Profile', desc: 'GBP Local Maps ranking API & Google Review automation', category: 'Local SEO', icon: Globe },
    { name: 'Make.com & Zapier', desc: 'No-code workflow pipelines connecting 5,000+ business apps', category: 'Automation', icon: Cpu },
    { name: 'Razorpay & UPI', desc: 'Seamless Indian payment gateway & QR auto-reconciliation', category: 'Payments', icon: QrCode },
    { name: 'OpenAI GPT-4o', desc: 'AI agents trained on your business data for 24/7 lead qualification', category: 'AI Intelligence', icon: Cpu },
    { name: 'Custom CRM Dashboards', desc: 'Real-time sales pipeline & lead tracking dashboard integration', category: 'Analytics', icon: Layers },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 text-left flex flex-col gap-10">
          
          <Link 
            href={`/${currentLocale}`} 
            className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:underline w-max"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-black uppercase text-primary tracking-widest">
              CONNECTED ECOSYSTEM
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal leading-tight">
              Tools & Systems <br /> We Connect For You.
            </h1>
            <p className="text-bodytext text-base leading-relaxed font-semibold">
              We integrate your existing stack with WhatsApp automation, custom web systems, and AI calling agents — so nothing requires manual copy-pasting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationsList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white border border-[#EEEEEE] rounded-2xl p-6 shadow-soft flex flex-col justify-between gap-4 text-left hover:border-primary/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#FFF3EC] text-primary">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase text-primary bg-[#FFF3EC] px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display font-black text-lg text-charcoal">{item.name}</h3>
                    <p className="text-xs text-bodytext font-semibold leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="border-t border-[#EEEEEE] pt-3 text-[11px] font-bold text-[#16A34A] flex items-center gap-1">
                    ✓ Verified Native Integration
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white border border-[#EEEEEE] p-8 rounded-2xl shadow-soft flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="flex flex-col gap-2">
              <h2 className="font-display font-black text-xl text-charcoal">Need a custom software integration?</h2>
              <p className="text-xs text-bodytext font-semibold">We build custom API connectors for any legacy ERP, hospital management, or CRM software.</p>
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
