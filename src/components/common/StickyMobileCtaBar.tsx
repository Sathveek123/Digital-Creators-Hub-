'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function StickyMobileCtaBar() {
  const params = useParams();
  const isTelugu = params?.locale === 'te';

  const whatsappUrl = `https://wa.me/919912799855?text=${encodeURIComponent(
    isTelugu
      ? "నమస్తే డిజిటల్ క్రియేటర్స్ హబ్, నా వ్యాపారం పెంచుకోవడానికి ఉచిత కన్సల్టేషన్ కావాలి."
      : "Hi Digital Creators Hub, I would like to get a free growth strategy consultation for my business."
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-full md:hidden bg-white/95 backdrop-blur-md border-t border-[#EEEEEE] px-3 py-2.5 flex items-center justify-between gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] select-none">
      <a
        href="tel:+919912799855"
        className="flex-1 bg-[#FAFAFA] border border-[#EEEEEE] hover:bg-[#F5F5F5] text-charcoal font-bold text-xs py-3 px-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
      >
        <Phone className="w-4 h-4 text-primary" />
        <span>{isTelugu ? 'కాల్ చేయండి' : 'Call Now'}</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
      >
        <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
        <span>{isTelugu ? 'వాట్సాప్' : 'WhatsApp'}</span>
      </a>
    </div>
  );
}
