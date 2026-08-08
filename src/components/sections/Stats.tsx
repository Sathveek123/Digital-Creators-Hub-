'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Store, Heart, Calendar, Check } from 'lucide-react';
import { useParams } from 'next/navigation';

function Counter({ 
  endValue, 
  duration = 1800, 
  delay = 0,
  onComplete 
}: { 
  endValue: number; 
  duration?: number; 
  delay?: number;
  onComplete?: () => void;
}) {
  // Initialize directly to real target value so initial render & SSR never display "0+"
  const [count, setCount] = useState(endValue);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          setCount(0); // Reset to 0 only when scroll-trigger fires to run count-up
          
          setTimeout(() => {
            let startTimestamp: number | null = null;
            
            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              
              // Easing out expo (fast start, slow settle)
              const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              
              setCount(Math.floor(easedProgress * endValue));
              
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setCount(endValue);
                if (onComplete) onComplete();
              }
            };
            window.requestAnimationFrame(step);
          }, delay);
          
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '100px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration, delay, onComplete]);

  return <span ref={elementRef}>{count}</span>;
}

export default function Stats() {
  const t = useTranslations('Stats');
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const [col1Complete, setCol1Complete] = useState(false);
  const [col2Complete, setCol2Complete] = useState(false);
  const [col3Complete, setCol3Complete] = useState(false);
  const [col4Complete, setCol4Complete] = useState(false);

  // Stats data configuration
  const statsList = [
    { 
      id: 1,
      value: 500, 
      suffix: '+', 
      label: currentLocale === 'te' ? 'పూర్తి చేసిన ప్రాజెక్ట్‌లు' : 'Projects Delivered',
      desc: currentLocale === 'te' ? '2021 నుండి వెబ్‌సైట్‌లు, యాడ్స్ & ఆటోమేషన్‌లు' : 'Websites, ads & automations shipped since 2021',
      icon: CheckCircle2,
      isDone: col1Complete,
      setDone: () => setCol1Complete(true),
      delay: 0
    },
    { 
      id: 2,
      value: 200, 
      suffix: '+', 
      label: currentLocale === 'te' ? 'యాక్టివ్ క్లయింట్లు' : 'Businesses Served',
      desc: currentLocale === 'te' ? 'ఆంధ్రప్రదేశ్, తెలంగాణ మరియు ఇతర ప్రాంతాలలో' : 'Across Andhra Pradesh, Telangana & beyond',
      icon: Store,
      isDone: col2Complete,
      setDone: () => setCol2Complete(true),
      delay: 100
    },
    { 
      id: 3,
      value: 98, 
      suffix: '%', 
      label: currentLocale === 'te' ? 'కస్టమర్ సంతృప్తి' : 'Client Satisfaction',
      desc: currentLocale === 'te' ? 'ప్రాజెక్ట్ ముగింపు సర్వేల ఆధారంగా' : 'Based on post-project client surveys',
      icon: Heart,
      isDone: col3Complete,
      setDone: () => setCol3Complete(true),
      delay: 200
    },
    { 
      id: 4,
      value: 5, 
      suffix: '+', 
      label: currentLocale === 'te' ? 'సంవత్సరాల అనుభవం' : 'Years in Business',
      desc: currentLocale === 'te' ? '2021 నుండి గ్రోత్ సిస్టమ్స్ నిర్మాణం' : 'Building growth systems since 2021',
      icon: Calendar,
      isDone: col4Complete,
      setDone: () => setCol4Complete(true),
      delay: 300
    },
  ];

  const trustBadges = [
    currentLocale === 'te' ? 'వాట్సాప్ బిజినెస్ వెరిఫైడ్' : 'WhatsApp Business Verified',
    currentLocale === 'te' ? 'గూగుల్ పార్టనర్' : 'Google Partner',
    currentLocale === 'te' ? 'మెటా బిజినెస్ వెరిఫైడ్' : 'Meta Business Verified',
    currentLocale === 'te' ? 'ISO-సమ్మత విధానం' : 'ISO-aligned Process',
  ];

  return (
    <section className="relative z-10 py-24 bg-[#FAFAFA] border-t border-b border-[#EEEEEE] select-none">
      
      {/* 3% opacity dot grid background for paper texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E5E5_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1440px] px-8 md:px-10 mx-auto w-full">
        
        {/* 4-Column Grid: desktop divides vertically, mobile divides horizontally */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-8 lg:gap-y-0 text-center items-stretch divide-y md:divide-y-0 lg:divide-x divide-[#EEEEEE]">
          
          {statsList.map((stat, idx) => {
            const IconComponent = stat.icon;
            
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center gap-2 px-6 pt-8 md:pt-4 lg:pt-0 first:pt-0"
              >
                {/* Visual Icon per Stat */}
                <div className="bg-[#FFF3EC] p-2.5 rounded-full text-primary shrink-0 w-11 h-11 flex items-center justify-center mb-1">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>

                {/* Staggered numeric value with scale pulse on complete */}
                <motion.span
                  animate={stat.isDone ? { scale: [1, 1.03, 1] } : {}}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="font-display font-black text-4xl md:text-5xl text-primary tracking-tight"
                >
                  <Counter 
                    endValue={stat.value} 
                    delay={stat.delay}
                    onComplete={stat.setDone}
                  />
                  <span>{stat.suffix}</span>
                </motion.span>

                {/* Stat Label */}
                <span className="text-[14px] md:text-[15px] font-semibold text-charcoal uppercase tracking-wider">
                  {stat.label}
                </span>

                {/* Micro-Context Line */}
                <p className="text-bodytext text-xs leading-relaxed max-w-[180px] font-normal normal-case">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Divider and Trust strip below stats */}
        <div className="border-t border-[#EEEEEE] mt-16 pt-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8">
            {trustBadges.map((badge, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-1.5 text-xs font-bold text-[#999999]"
              >
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
