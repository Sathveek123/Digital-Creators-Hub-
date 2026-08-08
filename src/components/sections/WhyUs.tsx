'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Target, Cpu, BarChart3, Languages, Landmark, PhoneCall } from 'lucide-react';
import { slideUp, staggerContainer } from '@/lib/animations';
import { useParams } from 'next/navigation';

export default function WhyUs() {
  const t = useTranslations('WhyUs');
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const icons = [Target, Cpu, BarChart3, Languages, Landmark, PhoneCall];

  interface FeatureItem {
    title: string;
    desc: string;
  }

  const featuresList: FeatureItem[] = t.raw('features') || [];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#FAFAFA] text-charcoal relative overflow-hidden border-b border-border/60 select-none">
      <div className="max-w-[1440px] px-8 md:px-10 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Context Statement */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="text-xs font-bold tracking-widest text-primary uppercase block">
              WHY CHOOSE DCH
            </span>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-3xl md:text-4xl lg:text-[40px] tracking-tight text-charcoal leading-snug"
            >
              {currentLocale === 'te' 
                ? 'చాలా ఏజెన్సీలు మాట్లాడుతాయి. మేము ఫలితాలను చూపిస్తాము.'
                : 'Most agencies talk. We show up with results.'}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-bodytext text-base leading-relaxed"
            >
              {currentLocale === 'te'
                ? 'మేము మీ అకౌంట్‌ను జూనియర్లకి అప్పగించి అదృశ్యమయ్యే 20 మందితో కూడిన సాధారణ బృందం కాదు. ప్రతి వ్యూహాత్మక కాల్ నేరుగా ఫౌండర్‌తో ఉంటుంది. ప్రతి ప్రచారం వారానికోసారి సమీక్షించబడుతుంది. ప్రతి ఫలితం మీకు నేరుగా డ్యాష్‌బోర్డులో కనిపిస్తుంది — నెలకు ఒకసారి పంపే పీడీఎఫ్ రిపోర్టు కాదు.'
                : 'We\'re not a team of 20 who\'ll assign a junior to your account and disappear. Every strategy call is with the founder. Every campaign is reviewed weekly. Every result is shown in a dashboard you can actually see — not a PDF report once a month.'}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-2"
            >
              <a
                href={`/${currentLocale}#contact`}
                className="group relative inline-flex items-center justify-center bg-primary hover:bg-[#e04c10] text-white font-bold text-base px-8 py-3.5 rounded-full shadow-sm hover:scale-[1.02] hover:shadow-lg transition-all duration-250"
              >
                <span>📅 {currentLocale === 'te' ? 'ఉచిత గ్రోత్ కాల్ బుక్ చేయండి →' : 'Book Free Strategy Call →'}</span>
              </a>
            </motion.div>

            {/* Inline Checkmarks trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-x-6 gap-y-2.5 mt-4 text-[13px] text-[#666] font-semibold"
            >
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span>{currentLocale === 'te' ? 'కాంట్రాక్ట్ లాక్-ఇన్ లేదు' : 'No contract lock-in'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span>{currentLocale === 'te' ? '30-90 రోజుల్లో ఫలితాలు' : 'Results in 30-90 days'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span>{currentLocale === 'te' ? 'ఫౌండర్‌తో నేరుగా పని' : 'Work with founder directly'}</span>
              </span>
            </motion.div>
          </div>

          {/* Right Column: 6 Feature Rows */}
          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {featuresList.map((feat, idx) => {
              const IconComp = icons[idx] || Target;
              return (
                <motion.div
                  key={idx}
                  variants={slideUp(15, 0.4)}
                  className="flex gap-4 p-5 items-start border-b border-[#EEEEEE] last:border-0 hover:bg-white/50 rounded-xl transition-all duration-200"
                >
                  <div className="bg-[#FFF3EC] p-2.5 rounded-full text-primary shrink-0 w-10 h-10 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display font-bold text-[16px] text-charcoal">
                      {feat.title}
                    </h3>
                    <p className="text-bodytext text-[14px] leading-relaxed text-[#666666]">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
