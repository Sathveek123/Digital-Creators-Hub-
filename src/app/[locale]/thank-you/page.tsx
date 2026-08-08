import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { CheckCircle2, MessageCircle, ArrowRight, Share2 } from 'lucide-react';
import { BRAND_CONSTANTS } from '@/lib/constants';

export default function ThankYouPage({ params }: { params: { locale: string } }) {
  const currentLocale = params.locale === 'te' ? 'te' : 'en';

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 flex items-center justify-center">
        <div className="max-w-[700px] mx-auto px-6 text-center flex flex-col items-center gap-8">
          
          {/* Animated Success Checkmark */}
          <div className="w-20 h-20 rounded-full bg-[#EEFBF3] text-[#16A34A] flex items-center justify-center border-4 border-[#16A34A]/20 shadow-lg">
            <CheckCircle2 className="w-10 h-10 animate-bounce" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-black uppercase text-[#16A34A] bg-[#EEFBF3] px-3.5 py-1 rounded-full w-max mx-auto border border-[#16A34A]/20">
              Request Successfully Received! 🎉
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal">
              {currentLocale === 'te' ? 'ధన్యవాదాలు! మీ వివరాలు అందాయి.' : 'Thank You! We Have Received Your Request.'}
            </h1>
            <p className="text-bodytext text-base font-semibold leading-relaxed max-w-lg mx-auto mt-2">
              Founder <strong>Satish Chittelu</strong> will review your business profile and WhatsApp you within <strong>2 hours</strong>.
            </p>
          </div>

          {/* 3 Steps: What happens next */}
          <div className="bg-white border border-[#EEEEEE] rounded-2xl p-6 shadow-soft w-full text-left flex flex-col gap-4">
            <h3 className="font-display font-black text-base text-charcoal border-b border-[#EEEEEE] pb-3">
              What Happens Next? (3 Simple Steps)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-display font-black text-xs text-primary">01. AUDIT</span>
                <span className="font-bold text-sm text-charcoal">We Audit Your Setup</span>
                <span className="text-xs text-[#777777]">We analyze your website, Google ranking, and WhatsApp flow.</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display font-black text-xs text-primary">02. WHATSAPP</span>
                <span className="font-bold text-sm text-charcoal">Direct WhatsApp Connect</span>
                <span className="text-xs text-[#777777]">Satish sends a video breakdown of your growth roadmap.</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display font-black text-xs text-primary">03. STRATEGY</span>
                <span className="font-bold text-sm text-charcoal">Free Strategy Call</span>
                <span className="text-xs text-[#777777]">15-minute call to discuss implementation with zero pressure.</span>
              </div>
            </div>
          </div>

          {/* Immediate Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={BRAND_CONSTANTS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Connect on WhatsApp Now</span>
            </a>

            <Link
              href={`/${currentLocale}/portfolio`}
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#DDDDDD] hover:bg-[#FFF9F6] text-charcoal font-bold text-sm px-6 py-3.5 rounded-full shadow-sm transition-all hover:scale-[1.02]"
            >
              <span>Explore Client Case Studies</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
