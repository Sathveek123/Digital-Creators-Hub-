'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Services from '@/components/sections/Services';
import { useParams } from 'next/navigation';

export default function ServicesPage() {
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  return (
    <div className="min-h-screen bg-white text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />
      
      <main className="flex-grow pt-28">
        {/* Page Hero */}
        <section className="py-20 bg-white relative overflow-hidden text-center select-none border-b border-border/60">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#E5E5E5_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-5 relative z-10">
            <span className="text-xs font-bold tracking-widest text-primary uppercase block">
              {currentLocale === 'te' ? 'మా సేవలు' : 'OUR CATALOG'}
            </span>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-[56px] tracking-tight uppercase leading-tight text-charcoal">
              {currentLocale === 'te' ? (
                <>
                  మార్కెట్‌ను శాసించడానికి <br /> 25 గ్రోత్ టూల్స్.
                </>
              ) : (
                <>
                  25 ways to <br /> dominate your market.
                </>
              )}
            </h1>
            <p className="text-bodytext text-sm md:text-base max-w-xl leading-relaxed font-semibold">
              {currentLocale === 'te'
                ? 'గూగుల్ మ్యాప్స్ ర్యాంకింగ్స్ మరియు వెబ్‌సైట్ల నుండి పైన్ స్క్రిప్ట్ అల్గోరిథంలు మరియు వాట్సాప్ బాట్స్ వరకు — మీ బిజినెస్ ఎదుగుదలకి అవసరమైన ప్రతిదీ ఒకే చోట.'
                : 'From ranked map profiles and speed-optimized websites to custom Pine Script algorithms and smart WhatsApp workflows — we build the complete growth stack.'}
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <Services />

      </main>

      <Footer />
    </div>
  );
}
