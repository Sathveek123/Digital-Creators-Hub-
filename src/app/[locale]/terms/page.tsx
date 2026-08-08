'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-left flex flex-col gap-8">
          
          <div className="border-b border-[#EEEEEE] pb-6 flex flex-col gap-2">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">LEGAL & COMPLIANCE</span>
            <h1 className="font-display font-black text-3xl md:text-4xl text-charcoal tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs font-bold text-[#888888]">Last Updated: January 2026 · Digital Creators Hub</p>
          </div>

          <div className="flex flex-col gap-6 text-sm text-bodytext leading-relaxed font-medium">
            <section className="flex flex-col gap-2">
              <h2 className="text-base font-bold text-charcoal">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services, websites, and lead audit tools provided by Digital Creators Hub ("DCH"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-base font-bold text-charcoal">2. Service Deliverables & Scope</h2>
              <p>
                All digital agency deliverables (websites, local SEO ranking optimization, WhatsApp bots, trading scripts, and advertising campaigns) are executed under explicit project contracts signed by the client and DCH. Delivery timelines and payment milestones are governed by project statements of work (SOW).
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-base font-bold text-charcoal">3. Intellectual Property</h2>
              <p>
                Upon full payment of project fees, all bespoke layout codebases, design assets, and custom algorithms created for the client become the property of the client, unless third-party licenses apply.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-base font-bold text-charcoal">4. Limitation of Liability</h2>
              <p>
                Digital Creators Hub is not liable for third-party platform algorithm updates (such as Google, Meta, or WhatsApp API changes) that occur outside our direct engineering control.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
