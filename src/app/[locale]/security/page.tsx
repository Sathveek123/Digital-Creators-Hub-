import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Server, CheckCircle2 } from 'lucide-react';
import { BRAND_CONSTANTS } from '@/lib/constants';

export default function SecurityPage({ params }: { params: { locale: string } }) {
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
            <span className="text-xs font-black uppercase text-[#16A34A] bg-[#EEFBF3] px-3 py-1 rounded-full w-max border border-[#16A34A]/20">
              ✓ Verified Data Protection
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal">
              Security & Data Trust Center
            </h1>
            <p className="text-sm font-semibold text-bodytext">
              How Digital Creators Hub secures client systems, database records, and WhatsApp APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAFAFA] border border-[#EEEEEE] p-6 rounded-2xl flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFF3EC] text-primary flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-base text-charcoal">256-Bit SSL Encryption</h3>
              <p className="text-xs text-bodytext leading-relaxed font-semibold">
                All client websites, APIs, and data payloads are encrypted end-to-end using TLS 1.3 encryption protocols.
              </p>
            </div>

            <div className="bg-[#FAFAFA] border border-[#EEEEEE] p-6 rounded-2xl flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF7FF] text-[#2563EB] flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-base text-charcoal">Vercel & AWS Cloud Hosting</h3>
              <p className="text-xs text-bodytext leading-relaxed font-semibold">
                Global edge network deployment with 99.99% uptime SLAs and automated DDoS protection.
              </p>
            </div>

            <div className="bg-[#FAFAFA] border border-[#EEEEEE] p-6 rounded-2xl flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEFBF3] text-[#16A34A] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-base text-charcoal">DPDPA 2023 Compliant</h3>
              <p className="text-xs text-bodytext leading-relaxed font-semibold">
                Strict adherence to India’s Digital Personal Data Protection Act. Zero third-party data selling.
              </p>
            </div>
          </div>

          <div className="bg-[#FFF3EC]/50 border border-primary/20 p-6 md:p-8 rounded-2xl flex flex-col gap-4">
            <h2 className="font-display font-black text-xl text-charcoal">Security Principles</h2>
            <div className="flex flex-col gap-3 text-xs md:text-sm font-semibold text-bodytext">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Zero Hardcoded Credentials — Environment variables managed through encrypted secret stores.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Official Meta WhatsApp Business API — Zero unofficial API wrappers or ban-risk scripts.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Daily Backup Snapshots & Automatic Rollover Protection.</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
