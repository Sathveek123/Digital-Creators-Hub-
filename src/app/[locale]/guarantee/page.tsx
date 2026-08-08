import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Zap, RefreshCw, Clock, CheckCircle2 } from 'lucide-react';
import { BRAND_CONSTANTS } from '@/lib/constants';

export default function GuaranteePage({ params }: { params: { locale: string } }) {
  const currentLocale = params.locale === 'te' ? 'te' : 'en';

  const guarantees = [
    {
      title: '⚡ Mobile Speed Guarantee',
      desc: 'Every website we build is guaranteed to load in under 2.0 seconds on mobile devices. If your site does not hit this benchmark at launch, we optimize it for free until it does.',
      icon: Zap,
    },
    {
      title: '🎨 2-Round Revision Guarantee',
      desc: 'You get 2 full rounds of design & copy revisions included in every project. If you are not satisfied after both rounds, we redesign from scratch at zero extra charge.',
      icon: RefreshCw,
    },
    {
      title: '📅 On-Time Delivery Guarantee',
      desc: 'We commit to a launch milestone date in writing. If we miss it by more than 3 days due to our team delay, you get 15% off your project invoice.',
      icon: Clock,
    },
    {
      title: '💬 30-Minute Urgent Support Guarantee',
      desc: 'For critical issues (website down, bot error, ad account issue), our team responds within 30 minutes during business hours (Mon–Sat, 9AM–7PM IST).',
      icon: ShieldCheck,
    },
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
            <span className="text-xs font-black uppercase text-[#16A34A] bg-[#EEFBF3] px-3.5 py-1 rounded-full w-max border border-[#16A34A]/20">
              ✓ Our Written Guarantees
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal leading-tight">
              Our Promises. In Writing.
            </h1>
            <p className="text-bodytext text-base leading-relaxed font-semibold">
              We stand behind our code, design, and growth systems with concrete guarantees — so your investment is 100% protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guarantees.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white border border-[#EEEEEE] rounded-2xl p-7 shadow-soft flex flex-col gap-4 text-left hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF3EC] text-primary flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-black text-xl text-charcoal">{item.title}</h3>
                  <p className="text-xs md:text-sm text-bodytext font-semibold leading-relaxed">{item.desc}</p>
                  <div className="border-t border-[#EEEEEE] pt-3 text-[11px] font-bold text-[#16A34A] flex items-center gap-1">
                    ✓ Protected by DCH Service SLA
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white border border-[#EEEEEE] p-8 rounded-2xl shadow-soft flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="flex flex-col gap-2">
              <h2 className="font-display font-black text-xl text-charcoal">Ready to build your growth system with total clarity?</h2>
              <p className="text-xs text-bodytext font-semibold">No lock-in contracts. Transparent milestone pricing.</p>
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
