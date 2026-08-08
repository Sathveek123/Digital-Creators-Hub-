'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const t = useTranslations('Hero');

  return (
    <section className="relative py-20 select-none overflow-hidden text-center text-white bg-navy">
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center gap-5">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl md:text-4xl lg:text-[46px] tracking-tight leading-tight"
        >
          Ready to grow your business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/80 text-sm md:text-base max-w-2xl leading-relaxed"
        >
          Book a free 30-minute audit. We'll review your Google presence, website, and competitors — and show you exactly where you're losing money.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 flex flex-col items-center gap-3.5"
        >
          <a
            href="/free-audit"
            className="group relative inline-flex items-center justify-center bg-white text-navy font-bold text-sm md:text-base px-8 py-3.5 rounded-lg shadow-sm hover:scale-[1.02] hover:bg-[#FAFAFA] transition-all duration-200"
          >
            <span className="flex items-center gap-1.5">
              Get Free Audit Now
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </a>
          
          <span className="text-white/60 text-xs font-semibold tracking-wide">
            No credit card. No commitment. Just clarity.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
