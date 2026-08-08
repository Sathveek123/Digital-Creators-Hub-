'use client';

import { useState } from 'react';
import { MessageCircle, X, Phone, Send, Sparkles } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function FloatingWhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const isTelugu = params?.locale === 'te';

  const whatsappUrl = `https://wa.me/919912799855?text=${encodeURIComponent(
    isTelugu
      ? "నమస్తే డిజిటల్ క్రియేటర్స్ హబ్, నా వ్యాపారం పెంచుకోవడానికి ఉచిత కన్సల్టేషన్ కావాలి."
      : "Hi Digital Creators Hub, I would like to get a free growth strategy consultation for my business."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end select-none">
      
      {/* Expandable Chat Window */}
      {isOpen && (
        <div className="mb-3 w-[310px] sm:w-[340px] bg-white rounded-2xl shadow-2xl border border-[#EEEEEE] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-[#075E54] text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 text-white font-bold flex items-center justify-center text-sm">
                  DCH
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#075E54] absolute bottom-0 right-0" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold leading-tight">Digital Creators Hub</span>
                <span className="text-[10px] text-white/80 font-medium">
                  {isTelugu ? 'ఆన్‌లైన్ · 15 నిమిషాల్లో జవాబు' : 'Online · Replies in ~15 mins'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#E5DDD5] flex flex-col gap-3 text-left">
            <div className="bg-white p-3 rounded-xl rounded-tl-none max-w-[90%] shadow-sm text-xs font-medium text-charcoal space-y-1">
              <p className="font-bold text-charcoal">
                {isTelugu ? 'నమస్తే! 👋' : 'Hello there! 👋'}
              </p>
              <p className="text-bodytext">
                {isTelugu 
                  ? 'మీ వ్యాపారానికి కస్టమర్లు పెంచుకోవడానికి ఉచిత కన్సల్టేషన్ కావాలా? వాట్సాప్ లో మెసేజ్ చేయండి!' 
                  : 'Looking to get more leads & customers for your business? Chat with our Vijayawada team on WhatsApp now!'}
              </p>
              <span className="text-[9px] text-[#888888] block text-right font-bold pt-1">
                Just now
              </span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02] text-center"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>{isTelugu ? 'వాట్సాప్‌లో చాట్ ప్రారంభించండి 💬' : 'Start WhatsApp Chat 💬'}</span>
            </a>

            <a
              href="tel:+919912799855"
              className="text-[11px] font-bold text-charcoal text-center hover:underline flex items-center justify-center gap-1"
            >
              <Phone className="w-3 h-3 text-primary" />
              <span>{isTelugu ? 'లేదా డైరెక్ట్ కాల్ చేయండి: +91 99127 99855' : 'Or Call Directly: +91 99127 99855'}</span>
            </a>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 cursor-pointer border-2 border-white"
        aria-label="Open Live WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-white" />
        
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        )}
      </button>

    </div>
  );
}
