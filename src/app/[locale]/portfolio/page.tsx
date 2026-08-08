'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Portfolio from '@/components/sections/Portfolio';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-charcoal antialiased flex flex-col justify-between">
      <Navbar />
      
      <main className="flex-grow pt-28">
        {/* Page Hero */}
        <section className="py-20 bg-white relative overflow-hidden text-center select-none border-b border-border/60">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#E5E5E5_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-5 relative z-10">
            <span className="text-xs font-bold tracking-widest text-primary uppercase block">
              OUR DELIVERIES
            </span>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-[56px] tracking-tight uppercase leading-tight text-charcoal">
              Real projects. <br /> Verified digital impact.
            </h1>
            <p className="text-bodytext text-sm md:text-base max-w-xl leading-relaxed">
              We focus purely on conversion rates, maps ranking, and lead volumes. No placeholder templates.
            </p>
          </div>
        </section>

        {/* Portfolio gallery */}
        <Portfolio />

      </main>

      <Footer />
    </div>
  );
}
