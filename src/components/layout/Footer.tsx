'use client';

import { useTranslations } from 'next-intl';
import { Mail, Phone, Instagram, Youtube, Facebook, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';
import { useParams } from 'next/navigation';
import { BRAND_CONSTANTS } from '@/lib/constants';

export default function Footer() {
  const t = useTranslations('Footer');
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAFAFA] border-t border-[#EEEEEE] pt-16 pb-8 text-charcoal select-none relative z-10 w-full">
      
      <div className="max-w-[1440px] px-4 sm:px-6 md:px-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
        
        {/* Col 1: Brand */}
        <div className="lg:col-span-4 flex flex-col gap-4 text-left">
          <a href={`/${currentLocale}`} className="flex items-center gap-3 select-none group">
            <img
              src="/dch-logo.jpg"
              alt="Digital Creators Hub Logo"
              className="w-10 h-10 object-cover rounded-full shrink-0 shadow-sm group-hover:scale-105 transition-transform border border-[#EEEEEE]"
            />
            <div className="flex flex-col text-left">
              <span className="font-display font-black text-xl tracking-tight text-charcoal leading-none">
                DIGITAL<span className="text-primary"> CREATORS HUB</span>
              </span>
              <span className="text-[9px] text-bodytext font-display font-extrabold uppercase tracking-[0.2em] mt-0.5">
                {currentLocale === 'te' ? 'డిజిటల్ గ్రోత్ పార్ట్‌నర్' : BRAND_CONSTANTS.taglineShort}
              </span>
            </div>
          </a>
          
          <p className="text-bodytext text-xs md:text-sm leading-relaxed max-w-xs">
            {t('tagline')}
          </p>

          {/* New trust line */}
          <p className="text-[12px] text-[#999999] font-medium leading-none mt-1">
            200+ businesses · 5+ years · Vijayawada-based
          </p>
          
          {/* Social icons */}
          <div className="flex gap-2.5 mt-2">
            {[
              { icon: Instagram, href: BRAND_CONSTANTS.socials.instagram },
              { icon: Facebook, href: BRAND_CONSTANTS.socials.facebook },
              { icon: Linkedin, href: BRAND_CONSTANTS.socials.linkedin },
              { icon: MessageCircle, href: BRAND_CONSTANTS.socials.whatsapp },
            ].map((soc, idx) => {
              const IconComponent = soc.icon;
              return (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#EEEEEE] hover:bg-primary/10 text-bodytext hover:text-primary hover:-translate-y-0.5 transition-all duration-200 shadow-sm flex items-center justify-center"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="lg:col-span-2 flex flex-col gap-4 text-left">
          <h3 className="font-display font-bold text-xs text-charcoal tracking-wider uppercase">
            {t('quickLinks')}
          </h3>
          <div className="flex flex-col gap-2.5 text-xs text-[#666666] font-semibold">
            <a href={`/${currentLocale}`} className="hover:text-primary transition-colors">Home</a>
            <a href={`/${currentLocale}/about`} className="hover:text-primary transition-colors">About</a>
            <a href={`/${currentLocale}/team`} className="hover:text-primary transition-colors">Team</a>
            <a href={`/${currentLocale}/services`} className="hover:text-primary transition-colors">Services</a>
            <a href={`/${currentLocale}/portfolio`} className="hover:text-primary transition-colors">Portfolio</a>
            <a href={`/${currentLocale}/pricing`} className="hover:text-primary transition-colors">Pricing</a>
            <a href={`/${currentLocale}/guarantee`} className="hover:text-primary transition-colors">Our Guarantees</a>
            <a href={`/${currentLocale}/how-it-works`} className="hover:text-primary transition-colors">How It Works</a>
            <a href={`/${currentLocale}/comparison`} className="hover:text-primary transition-colors">Why DCH</a>
            <a href={`/${currentLocale}/blog`} className="hover:text-primary transition-colors">Blog</a>
            <a href={`/${currentLocale}/careers`} className="hover:text-primary transition-colors">Careers</a>
          </div>
        </div>

        {/* Col 3: Services */}
        <div className="lg:col-span-3 flex flex-col gap-4 text-left">
          <h3 className="font-display font-bold text-xs text-charcoal tracking-wider uppercase">
            {t('services')}
          </h3>
          <div className="flex flex-col gap-2.5 text-xs text-[#666666] font-semibold">
            <a href={`/${currentLocale}#services`} className="hover:text-primary transition-colors">Google Business Profile</a>
            <a href={`/${currentLocale}#services`} className="hover:text-primary transition-colors">Business Websites</a>
            <a href={`/${currentLocale}#services`} className="hover:text-primary transition-colors">Social Media Management</a>
            <a href={`/${currentLocale}#services`} className="hover:text-primary transition-colors">Paid Advertising</a>
            <a href={`/${currentLocale}#services`} className="hover:text-primary transition-colors">AI Lead Automation</a>
            <a href={`/${currentLocale}#services`} className="hover:text-primary transition-colors">WhatsApp Automation</a>
            <a href={`/${currentLocale}/integrations`} className="hover:text-primary transition-colors font-bold text-[#16A34A]">Ecosystem & Integrations →</a>
            
            <a href={`/${currentLocale}/services`} className="hover:text-primary transition-colors font-bold text-primary block mt-1.5">
              View All Services →
            </a>
          </div>
        </div>

        {/* Col 4: Contacts & Compliance */}
        <div className="lg:col-span-3 flex flex-col gap-4 text-left">
          <h3 className="font-display font-bold text-xs text-charcoal tracking-wider uppercase">
            {t('contact')}
          </h3>
          <div className="flex flex-col gap-3 text-xs text-bodytext font-semibold">
            <a
              href="tel:+919912799855"
              className="flex items-center gap-2 hover:text-primary transition-colors text-[#666666]"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 99127 99855</span>
            </a>
            
            <a
              href="mailto:hello@digitalcreatorshub.in"
              className="flex items-center gap-2 hover:text-primary transition-colors text-[#666666]"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span className="break-all">hello@digitalcreatorshub.in</span>
            </a>

            <a
              href="https://wa.me/919912799855"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-bold text-[10px] uppercase tracking-wide block mt-1"
            >
              WhatsApp Us →
            </a>

            <a
              href={`/${currentLocale}#contact`}
              className="text-center bg-primary hover:bg-primary-hover text-white font-bold py-2.5 px-4 rounded-full text-xs shadow-sm w-max mt-1"
            >
              Book Free Strategy Call
            </a>

            {/* Hours, GSTIN and location line */}
            <div className="flex flex-col gap-1 text-[11px] text-[#888888] font-semibold leading-relaxed mt-2.5">
              <span>📍 Vijayawada, AP · Mon–Sat, 9AM–7PM IST</span>
              <span>🏢 GSTIN: {BRAND_CONSTANTS.gstin}</span>
              <span className="text-[#16A34A] font-bold">✓ MSME / Udyam Registered Agency</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] px-8 md:px-10 mx-auto border-t border-border/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-xs text-bodytext/80 font-medium">
          © 2026 Digital Creators Hub. All rights reserved. | Powered by{' '}
          <a
            href={BRAND_CONSTANTS.creditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors font-semibold underline decoration-primary/40 underline-offset-2"
          >
            {BRAND_CONSTANTS.creditAgency}
          </a>
        </p>

        {/* Privacy & Legal links */}
        <div className="flex flex-wrap gap-3 text-xs text-[#888888] font-medium">
          <a href={`/${currentLocale}/privacy`} className="hover:text-primary transition-colors">Privacy Policy</a>
          <span>·</span>
          <a href={`/${currentLocale}/terms`} className="hover:text-primary transition-colors">Terms</a>
          <span>·</span>
          <a href={`/${currentLocale}/refund-policy`} className="hover:text-primary transition-colors">Refund Policy</a>
          <span>·</span>
          <a href={`/${currentLocale}/security`} className="hover:text-primary transition-colors">Security</a>
        </div>

        <span className="text-xs text-bodytext/80 font-medium flex items-center gap-1">
          {t('madeWith')} 🇮🇳
        </span>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-white border border-border hover:border-primary/40 text-bodytext hover:text-primary transition-colors shadow-sm cursor-pointer focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

    </footer>
  );
}
