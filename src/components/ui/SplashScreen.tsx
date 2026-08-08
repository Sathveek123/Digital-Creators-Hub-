'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);
  const params = useParams();
  const locale = params?.locale === 'te' ? 'te' : 'en';

  useEffect(() => {
    // Check if user reloaded the page. If so, bypass the seen cache so they can see the animation on refresh.
    if (typeof window !== 'undefined') {
      try {
        const navigationEntry = window.performance && window.performance.getEntriesByType
          ? window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          : null;
        
        if (navigationEntry && navigationEntry.type === 'reload') {
          sessionStorage.removeItem('dch_splash_seen');
        }
      } catch (e) {
        console.warn('Navigation timing not fully supported', e);
      }

      // Check session storage to prevent repeated views in same browsing session
      const seen = sessionStorage.getItem('dch_splash_seen');
      if (seen) {
        onComplete();
        setVisible(false);
        return;
      }
    }

    // Auto dismiss after 1.8s total duration
    const timer = setTimeout(() => {
      handleComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('dch_splash_seen', 'true');
    }
    setVisible(false);
    setTimeout(onComplete, 400); // Allow exit transition to complete
  };

  // Custom expo easing
  const customEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.32, 1, 0.26, 1] as [number, number, number, number] }}
          className="fixed inset-0 z-50 bg-[#FAFAFA] flex flex-col items-center justify-center min-h-[100svh] overflow-hidden select-none"
        >
          {/* Subtle Ambient Background Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none" />

          {/* Centered Content Block (-24px offset for natural eye balance) */}
          <div className="w-full max-w-[90vw] sm:max-w-[480px] px-4 sm:px-6 flex flex-col items-center text-center relative z-10 -translate-y-6">
            
            {/* 1. CLEAN LOGO IMAGE (NO outer container box, NO ring borders, NO padding) */}
            <motion.div
              initial={{ y: 18, scale: 0.92, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.45,
                ease: customEase,
              }}
              className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 shadow-md border border-[#EEEEEE]"
            >
              <Image
                src="/dch-logo.jpg"
                alt="Digital Creators Hub Logo"
                fill
                className="object-cover rounded-full"
                priority
              />
            </motion.div>

            {/* Vertical Gap */}
            <div className="h-5 sm:h-6" />

            {/* 2. Wordmark "DIGITAL CREATORS" */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden flex-wrap justify-center">
              <motion.span
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.28,
                  duration: 0.45,
                  ease: customEase,
                }}
                className="font-display font-black text-2xl sm:text-3xl md:text-[38px] tracking-tight text-charcoal uppercase leading-none"
              >
                DIGITAL
              </motion.span>
              <motion.span
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.35,
                  duration: 0.45,
                  ease: customEase,
                }}
                className="font-display font-black text-2xl sm:text-3xl md:text-[38px] tracking-tight text-primary uppercase leading-none"
              >
                CREATORS
              </motion.span>
            </div>

            {/* Vertical Gap */}
            <div className="h-2" />

            {/* 3. Subtitle "GROWTH PARTNER" */}
            <motion.span
              initial={{ y: 12, opacity: 0, letterSpacing: '0.3em' }}
              animate={{ y: 0, opacity: 1, letterSpacing: '0.22em' }}
              transition={{
                delay: 0.45,
                duration: 0.4,
                ease: 'easeOut',
              }}
              className="font-display font-extrabold text-[11px] sm:text-xs md:text-[13px] text-[#666666] uppercase leading-none block"
            >
              {locale === 'te' ? 'డిజిటల్ గ్రోత్ పార్ట్‌నర్' : 'Growth Partner'}
            </motion.span>

            {/* 4. Thin Orange Accent Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.52,
                duration: 0.4,
                ease: 'easeOut',
              }}
              className="w-10 h-0.5 bg-primary mt-3 origin-center"
            />

            {/* 5. Positioning Tagline */}
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.4 }}
              className="text-[10px] sm:text-[11px] font-extrabold text-[#888888] uppercase tracking-[0.14em] mt-3.5"
            >
              {locale === 'te' ? 'ఆంధ్రప్రదేశ్ & తెలంగాణ #1 డిజిటల్ గ్రోత్ హబ్' : 'Andhra Pradesh & Telangana #1 Growth Hub'}
            </motion.span>

            {/* 6. Minimal Honest 2px Progress Line (NO text, ZERO fake numbers) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.72 }}
              className="w-28 sm:w-32 h-[2px] bg-[#EEEEEE] rounded-full overflow-hidden mt-5 relative"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.0, ease: customEase }}
                className="w-full h-full bg-primary rounded-full"
              />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
