'use client';

import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface LanguageToggleProps {
  size?: 'normal' | 'large';
}

export default function LanguageToggle({ size = 'normal' }: LanguageToggleProps) {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split('/');
  const currentLocale = segments[1] === 'te' ? 'te' : 'en';

  // State persistence on first mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('dch_locale');
      if (savedLocale && savedLocale !== currentLocale) {
        // Only redirect if they are on root "/" and we can auto-route them, 
        // to prevent page-routing override loops
        if (pathname === '/' || pathname === '/en' || pathname === '/te') {
          const target = savedLocale === 'te' ? '/te' : '/en';
          router.push(target);
        }
      } else if (!savedLocale) {
        // Auto detect browser locale
        const browserLang = navigator.language || '';
        if (browserLang.toLowerCase().startsWith('te')) {
          localStorage.setItem('dch_locale', 'te');
          if (currentLocale !== 'te') {
            router.push('/te');
          }
        } else {
          localStorage.setItem('dch_locale', 'en');
        }
      }
    }
  }, []);

  const toggleLanguage = (locale: 'en' | 'te') => {
    if (locale === currentLocale) return;
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('dch_locale', locale);
    }

    segments[1] = locale;
    const newPath = segments.join('/');
    router.push(newPath || '/');
  };

  const isLarge = size === 'large';

  // Dimension settings
  const containerClass = isLarge
    ? 'relative flex items-center bg-[#F5F5F5] rounded-full p-[3px] h-11 w-[160px] select-none shadow-inner border border-border/40'
    : 'relative flex items-center bg-[#F5F5F5] rounded-full p-[3px] h-[36px] w-[84px] select-none border border-border/45';

  const indicatorWidth = isLarge ? 77 : 39;
  const slideX = currentLocale === 'en' ? 0 : indicatorWidth;

  return (
    <div className={containerClass}>
      {/* Sliding Active Switch Indicator */}
      <motion.div
        className="absolute top-[3px] bottom-[3px] left-[3px] bg-white rounded-full shadow-sm"
        style={{ width: `${indicatorWidth}px` }}
        initial={false}
        animate={{ x: slideX }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      />

      {/* EN Button */}
      <button
        onClick={() => toggleLanguage('en')}
        className={`relative z-10 flex-1 text-center font-display tracking-wider transition-colors duration-200 cursor-pointer ${
          isLarge ? 'text-xs font-black' : 'text-[11px] font-black'
        } ${
          currentLocale === 'en' ? 'text-charcoal' : 'text-bodytext/70 hover:text-charcoal'
        }`}
      >
        EN
      </button>

      {/* TELUGU Button */}
      <button
        onClick={() => toggleLanguage('te')}
        className={`relative z-10 flex-1 text-center font-display transition-colors duration-200 cursor-pointer ${
          isLarge ? 'text-xs font-black' : 'text-[11px] font-black'
        } ${
          currentLocale === 'te' ? 'text-charcoal' : 'text-bodytext/70 hover:text-charcoal'
        }`}
      >
        తెలుగు
      </button>
    </div>
  );
}
