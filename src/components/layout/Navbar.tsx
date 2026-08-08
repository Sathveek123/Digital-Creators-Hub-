'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { 
  ChevronDown, Phone, MapPin, Globe, Share2, 
  Megaphone, Cpu, MessageSquareCode, QrCode, Layers, X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, usePathname } from 'next/navigation';
import LanguageToggle from '../ui/LanguageToggle';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Monitor scroll for header dynamic transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // 100ms delay to prevent accidental closing on mouse jitter
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 100);
  };

  // Services items for 2-column dropdown panel list
  const servicesItems = [
    { name: 'Google Business Profile', icon: MapPin, href: `/${currentLocale}#services` },
    { name: 'Business Website', icon: Globe, href: `/${currentLocale}#services` },
    { name: 'Social Media Management', icon: Share2, href: `/${currentLocale}#services` },
    { name: 'Paid Advertising', icon: Megaphone, href: `/${currentLocale}#services` },
    { name: 'AI Lead Automation', icon: Cpu, href: `/${currentLocale}#services` },
    { name: 'WhatsApp Automation', icon: MessageSquareCode, href: `/${currentLocale}#services` },
    { name: 'QR Code Solutions', icon: QrCode, href: `/${currentLocale}#services` },
    { name: 'CRM & Dashboards', icon: Layers, href: `/${currentLocale}#services` },
  ];

  const mainLinks = [
    { label: t('home'), href: `/${currentLocale}` },
    { label: t('about'), href: `/${currentLocale}#about` },
    { label: t('portfolio'), href: `/${currentLocale}#portfolio` },
    { label: t('testimonials'), href: `/${currentLocale}#testimonials` },
    { label: t('contact'), href: `/${currentLocale}#contact` },
  ];

  // Check if link is active
  const isLinkActive = (href: string) => {
    if (href === `/${currentLocale}` && pathname === `/${currentLocale}`) return true;
    if (href !== `/${currentLocale}` && pathname.includes(href)) return true;
    return false;
  };

  // Apply slightly smaller font size for longer Telugu text labels
  const navLinkTextClass = currentLocale === 'te'
    ? 'text-[13.5px] font-semibold text-[#333333] hover:text-primary transition-colors py-1'
    : 'text-[15px] font-semibold text-[#333333] hover:text-primary transition-colors py-1';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 h-[76px] flex items-center ${
          scrolled
            ? 'border-b border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-white/95 backdrop-blur-md'
            : 'border-b border-[#F5F5F5] bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-[1440px] px-6 md:px-10 mx-auto w-full flex items-center justify-between">
          
          {/* LEFT: Clean Logo Image (No extra container box) */}
          <div className="shrink-0 text-left">
            <a href={`/${currentLocale}`} className="flex items-center gap-3 select-none group">
              <img
                src="/dch-logo.jpg"
                alt="Digital Creators Hub Logo"
                className="w-10 h-10 object-cover rounded-full shrink-0 shadow-sm group-hover:scale-105 transition-transform border border-[#EEEEEE]"
              />
              <div className="flex flex-col text-left">
                <span className={`font-display font-black text-[17px] tracking-tight uppercase leading-none ${currentLocale === 'te' ? 'font-telugu' : ''}`}>
                  <span className="text-[#111111] group-hover:text-primary transition-colors duration-150">DIGITAL</span>
                  <span className="text-[#FF5C1C] ml-1">CREATORS HUB</span>
                </span>
                <span className="text-[9px] text-[#888888] font-display font-extrabold uppercase tracking-[0.14em] mt-1 leading-none">
                  {currentLocale === 'te' ? 'డిజిటల్ గ్రోత్ పార్ట్‌నర్' : 'Growth Partner'}
                </span>
              </div>
            </a>
          </div>

          {/* CENTER: Navigation Links (Flex-1, centered, even gap) */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-7 md:gap-8">
            <a
              href={`/${currentLocale}`}
              className={`nav-link ${navLinkTextClass} ${
                pathname === `/${currentLocale}` ? 'text-primary active' : ''
              }`}
            >
              {t('home')}
            </a>
            
            <a
              href={`/${currentLocale}#about`}
              className={`nav-link ${navLinkTextClass}`}
            >
              {t('about')}
            </a>

            {/* Services Dropdown Panel */}
            <div
              className="relative py-1 cursor-default"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 focus:outline-none text-[#333333] hover:text-primary transition-colors font-semibold"
                style={{ fontSize: currentLocale === 'te' ? '13.5px' : '15px' }}
              >
                <span>{t('services')}</span>
                <motion.div
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <ChevronDown className="w-4 h-4 text-bodytext/70" />
                </motion.div>
              </button>

              {/* Dropdown Container */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 bg-white border border-border shadow-lg rounded-xl p-4.5 w-[560px] grid grid-cols-2 gap-x-6 gap-y-3 mt-1.5 z-50 text-left"
                  >
                    {servicesItems.map((service, sIdx) => {
                      const IconComponent = service.icon;
                      return (
                        <a
                          key={sIdx}
                          href={service.href}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-lightbg group transition-colors duration-200"
                        >
                          <div className="p-2 bg-[#FFF3EC] text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-bold text-charcoal group-hover:text-primary transition-colors">
                            {service.name}
                          </span>
                        </a>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={`/${currentLocale}#portfolio`}
              className={`nav-link ${navLinkTextClass}`}
            >
              {t('portfolio')}
            </a>
            
            <a
              href={`/${currentLocale}#testimonials`}
              className={`nav-link ${navLinkTextClass}`}
            >
              {t('testimonials')}
            </a>
            
            <a
              href={`/${currentLocale}#contact`}
              className={`nav-link ${navLinkTextClass}`}
            >
              {t('contact')}
            </a>
          </nav>

          {/* RIGHT: Fixed Width Utility Cluster Zone (~390px, gaps 16-20px) */}
          <div className="hidden lg:flex items-center justify-end gap-5 w-[390px] shrink-0">
            <LanguageToggle />
            
            {/* Phone */}
            <a
              href="tel:+919912799855"
              className="flex items-center gap-2 text-sm font-semibold text-bodytext hover:text-primary transition-colors shrink-0"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 99127 99855</span>
            </a>

            {/* CTA Book Free Call */}
            <a
              href={`/${currentLocale}#contact`}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-bold text-sm px-6 py-3 rounded-lg shadow-sm hover:scale-[1.02] transition-all duration-200 shrink-0"
            >
              Book Free Call
            </a>
          </div>

          {/* Mobile collapsed controls (Toggle pill + Hamburger) */}
          <div className="lg:hidden flex items-center gap-3.5">
            <LanguageToggle />

            {/* Hamburger Lines */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex flex-col justify-center items-center gap-[5px] relative z-50 text-charcoal hover:text-primary transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="w-6 h-0.5 bg-current rounded-full block"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.18 }}
                className="w-6 h-0.5 bg-current rounded-full block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="w-6 h-0.5 bg-current rounded-full block"
              />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile White Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-white flex flex-col justify-between overflow-y-auto lg:hidden pt-[92px] px-6 pb-8"
          >
            {/* Background tap to close container */}
            <div 
              className="absolute inset-0 z-0 pointer-events-none" 
              onClick={() => setIsOpen(false)}
            />

            <div className="flex flex-col gap-6 text-left relative z-10">
              {/* Stacked Links List with staggered fades */}
              <div className="flex flex-col gap-5.5">
                {mainLinks.map((link, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.04, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-display font-black text-2xl tracking-tight text-charcoal hover:text-primary transition-colors ${
                        isLinkActive(link.href) ? 'text-primary' : ''
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}

                {/* Expandable Services Accordion */}
                <motion.div
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + mainLinks.length * 0.04, duration: 0.4 }}
                  className="flex flex-col gap-2.5"
                >
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center gap-2 font-display font-black text-2xl tracking-tight text-charcoal hover:text-primary transition-colors text-left focus:outline-none"
                  >
                    <span>{t('services')}</span>
                    <motion.div
                      animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-6 h-6 text-bodytext/60" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-3 pl-4 border-l border-border/80 text-left mt-1"
                      >
                        {servicesItems.map((service, sIdx) => (
                          <a
                            key={sIdx}
                            href={service.href}
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-bold text-bodytext hover:text-primary"
                          >
                            {service.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* Bottom Overlay Sticky Panel */}
            <div className="flex flex-col gap-5 items-center border-t border-border pt-6 mt-8 relative z-10">
              {/* Language toggle pill in Large format */}
              <LanguageToggle size="large" />

              {/* Tappable phone number */}
              <a
                href="tel:+919912799855"
                className="flex items-center gap-2.5 text-base font-bold text-[#4B4B4B] hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 99127 99855</span>
              </a>

              {/* CTA Book Free Call */}
              <a
                href={`/${currentLocale}#contact`}
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-primary hover:bg-primary-hover text-white font-bold h-[52px] flex items-center justify-center rounded-xl shadow-sm text-base transition-colors"
              >
                Book Free Call
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
