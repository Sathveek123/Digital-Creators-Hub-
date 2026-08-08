'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-left flex flex-col gap-8">
          
          <div className="border-b border-[#EEEEEE] pb-6 flex flex-col gap-2">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">LEGAL & COMPLIANCE</span>
            <h1 className="font-display font-black text-3xl md:text-4xl text-charcoal tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs font-bold text-[#888888]">Last Updated: January 2026 · Digital Creators Hub</p>
          </div>

          <div className="flex flex-col gap-6 text-sm text-bodytext leading-relaxed font-medium">
            <section className="flex flex-col gap-2">
              <h2 className="text-base font-bold text-charcoal">1. Information We Collect</h2>
              <p>
                When you submit forms on Digital Creators Hub (such as requesting a Free Audit, contacting us for a growth strategy call, or requesting custom service proposals), we collect personal information including your name, phone number, email address, company name, and location.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-base font-bold text-charcoal">2. How We Use Your Data</h2>
              <p>
                Your information is used strictly to audit your digital presence, deliver custom project proposals, and contact you via phone, email, or WhatsApp regarding your digital growth requirements. We do not sell, rent, or trade client information to third parties.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-base font-bold text-charcoal">3. Data Security & Storage</h2>
              <p>
                All data collected through our platform is transmitted via secure SSL encryption. We implement industry-standard administrative and technical safeguards to prevent unauthorized access or data leakage.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-base font-bold text-charcoal">4. Contact & Opt-Out</h2>
              <p>
                If you wish to update, review, or request the deletion of your contact data from our active systems, please email us directly at <span className="text-primary font-bold">contact@digitalcreatorshub.com</span> or message our support team on WhatsApp at +91 99127 99855.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
