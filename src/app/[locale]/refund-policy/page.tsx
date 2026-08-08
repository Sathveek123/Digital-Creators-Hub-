import { useTranslations } from 'next-intl';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, RefreshCw, FileText } from 'lucide-react';
import { BRAND_CONSTANTS } from '@/lib/constants';

export default function RefundPolicyPage({ params }: { params: { locale: string } }) {
  const currentLocale = params.locale === 'te' ? 'te' : 'en';

  return (
    <div className="min-h-screen bg-white text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-[900px] mx-auto px-6 text-left flex flex-col gap-8">
          
          <Link 
            href={`/${currentLocale}`} 
            className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:underline w-max"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="flex flex-col gap-2 border-b border-[#EEEEEE] pb-6">
            <span className="text-xs font-black uppercase text-primary tracking-widest bg-[#FFF3EC] px-3 py-1 rounded-full w-max">
              Legal & Payment Compliance
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xs font-bold text-[#888888]">
              Effective Date: January 1, 2026 · Digital Creators Hub
            </p>
          </div>

          <div className="flex flex-col gap-8 text-bodytext text-sm md:text-base leading-relaxed font-medium">
            
            <section className="flex flex-col gap-3">
              <h2 className="font-display font-black text-xl text-charcoal flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> 1. Service Commitment & Scope
              </h2>
              <p>
                At Digital Creators Hub, we deliver customized digital engineering, website development, local SEO optimization, WhatsApp automation, and paid media management for businesses across Andhra Pradesh and Telangana. Due to the bespoke nature of our digital services, refunds are governed by the specific milestones defined in your signed project scope.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display font-black text-xl text-charcoal flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-primary" /> 2. Cancellation Terms
              </h2>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li><strong>Monthly Retainer Services:</strong> Clients may cancel monthly retainers (Social Media, GBP Management, WhatsApp Maintenance) at any time by providing 14 days written notice via email to <a href={`mailto:${BRAND_CONSTANTS.email}`} className="text-primary font-bold">{BRAND_CONSTANTS.email}</a>. No further billing will occur after the active billing cycle.</li>
                <li><strong>One-Time Projects (Websites / App Development):</strong> Project setup deposits are non-refundable once design or development work has commenced. If cancellation is requested prior to work commencement, a 90% refund will be processed within 5–7 business days.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display font-black text-xl text-charcoal flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> 3. Refund Process & Timelines
              </h2>
              <p>
                Approved refunds are credited directly back to the original payment method (Bank Transfer / UPI / Razorpay) within 5 to 7 business days from approval.
              </p>
            </section>

            <section className="bg-[#FAFAFA] border border-[#EEEEEE] p-6 rounded-2xl flex flex-col gap-3">
              <h3 className="font-display font-black text-base text-charcoal">Questions or Billing Inquiries?</h3>
              <p className="text-xs text-bodytext">
                For questions regarding payments, invoices, or cancellation requests, reach out directly to Founder Satish Chittelu:
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold text-charcoal pt-1">
                <span>📧 {BRAND_CONSTANTS.email}</span>
                <span>📞 {BRAND_CONSTANTS.phoneDisplay}</span>
              </div>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
