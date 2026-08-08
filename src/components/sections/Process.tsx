'use client';

import { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Compass, Palette, Code, Rocket, TrendingUp } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function Process() {
  const t = useTranslations('Process');
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll linked animation progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Local state to track which nodes have been reached
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    return scrollYProgress.onChange((val) => {
      // Divide into 6 segments
      const step = Math.min(Math.floor(val * 6) + 1, 6);
      setActiveStep(step);
    });
  }, [scrollYProgress]);

  const steps = [
    {
      id: 1,
      key: 'discover',
      number: '01',
      icon: Search,
      title: currentLocale === 'te' ? 'కనుగొనండి' : 'DISCOVER',
      desc: currentLocale === 'te' ? 'మేము మీ ప్రస్తుత ఆన్‌లైన్ స్థితిని ఆడిట్ చేస్తాము — గూగుల్, సోషల్ మీడియా, వెబ్‌సైట్, మరియు ప్రత్యర్థులు. మేము కోట్ ఇచ్చే ముందే మీకు ఉచిత రిపోర్టు లభిస్తుంది.' : 'We audit your current presence — Google, social, website, competitors. You get a free report before we even quote.',
      chip: '📄 ' + (currentLocale === 'te' ? 'ఉచిత డిజిటల్ ఆడిట్ రిపోర్ట్ (PDF)' : 'Free Digital Audit Report (PDF)'),
      timeframe: currentLocale === 'te' ? 'రోజు 1-2' : 'Day 1-2'
    },
    {
      id: 2,
      key: 'roadmap',
      number: '02',
      icon: Compass,
      title: currentLocale === 'te' ? 'రోడ్‌మ్యాప్' : 'ROADMAP',
      desc: currentLocale === 'te' ? 'మేము మైలురాళ్లతో కూడిన 90-రోజుల గ్రోత్ ప్లాన్‌ను రూపొందిస్తాము. ఏ రోజు ఏ ఫలితం వస్తుందో స్పష్టంగా చూపిస్తాము.' : 'We map out a 90-day growth plan with clear milestones and what you\'ll see, when you\'ll see it.',
      chip: '🗺️ ' + (currentLocale === 'te' ? '90-రోజుల గ్రోత్ రోడ్‌మ్యాప్' : '90-Day Growth Roadmap'),
      timeframe: currentLocale === 'te' ? 'రోజు 3-4' : 'Day 3-4'
    },
    {
      id: 3,
      key: 'design',
      number: '03',
      icon: Palette,
      title: currentLocale === 'te' ? 'డిజైన్' : 'DESIGN',
      desc: currentLocale === 'te' ? 'హ్యాండ్‌క్రాఫ్టెడ్ డిజైన్. టెంప్లేట్‌లు వాడం. మీ బ్రాండ్, మీ రంగులు, మీ భాషతో మొదటి నుండి నిర్మిస్తాము.' : 'Hand-crafted design. Never templates. Your brand, your colors, your language — built from scratch.',
      chip: '🎨 ' + (currentLocale === 'te' ? 'ఫిగ్మా డిజైన్ ఫైల్స్ + రివిజన్స్' : 'Figma Design Files + 2 Rounds of Revisions'),
      timeframe: currentLocale === 'te' ? 'వారం 1-2' : 'Week 1-2'
    },
    {
      id: 4,
      key: 'build',
      number: '04',
      icon: Code,
      title: currentLocale === 'te' ? 'నిర్మాణం' : 'BUILD',
      desc: currentLocale === 'te' ? 'మేము ప్రతి సిస్టమ్‌ను — వెబ్‌సైట్, ఆటోమేషన్‌లు, డ్యాష్‌బోర్డులు — డెవలప్ చేస్తాము మరియు టెస్ట్ చేస్తాము.' : 'We develop every system — website, automations, dashboards — and test on real devices before handoff.',
      chip: '⚙️ ' + (currentLocale === 'te' ? 'కంప్లీట్ బిల్డ్ సిస్టమ్ + QA రిపోర్ట్' : 'Fully Built System + QA Test Report'),
      timeframe: currentLocale === 'te' ? 'వారం 2-4' : 'Week 2-4'
    },
    {
      id: 5,
      key: 'launch',
      number: '05',
      icon: Rocket,
      title: currentLocale === 'te' ? 'లాంచ్' : 'LAUNCH',
      desc: currentLocale === 'te' ? 'క్యాంపెయిన్స్, గూగుల్ అనలిటిక్స్, వాట్సాప్ బాట్స్ — అన్నింటినీ సెటప్ చేసి లైవ్ లోకి తీసుకెళ్తాము.' : 'Go live with campaigns, tracking pixels, Google Analytics, WhatsApp bots — everything wired and tested.',
      chip: '🚀 ' + (currentLocale === 'te' ? 'లైవ్ సైట్ + అనలిటిక్స్ యాక్సెస్' : 'Live Site + Analytics Dashboard Access'),
      timeframe: currentLocale === 'te' ? 'వారం 4-5' : 'Week 4-5'
    },
    {
      id: 6,
      key: 'grow',
      number: '06',
      icon: TrendingUp,
      title: currentLocale === 'te' ? 'ఎదగడం & ఆప్టిమైజ్' : 'GROW & OPTIMIZE',
      desc: currentLocale === 'te' ? 'వారపు నివేదికలు. నెలవారీ వ్యూహాత్మక కాల్స్. కేవలం డేటా ఆధారంగా ఫలితాలను మెరుగుపరుస్తాము.' : 'Weekly reports. Monthly strategy calls. We keep improving based on data, not just what looks good.',
      chip: '📈 ' + (currentLocale === 'te' ? 'వీక్లీ రిపోర్ట్స్ + మంత్లీ కాల్' : 'Weekly Reports + Monthly Strategy Call'),
      timeframe: currentLocale === 'te' ? 'నిరంతరం' : 'Ongoing'
    }
  ];

  return (
    <section
      id="process"
      ref={containerRef}
      className="py-24 md:py-32 bg-[#FFF8F0] text-charcoal overflow-hidden select-none border-b border-border/60"
    >
      <div className="max-w-[1440px] px-8 md:px-10 mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            HOW WE WORK
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal leading-tight">
            {currentLocale === 'te' ? (
              <>
                బిజినెస్ ఎదుగుదలకి — <span className="text-primary">నిజాయితీతో</span> కూడిన ఆరు అడుగులు.
              </>
            ) : (
              <>
                From zero to growing — <br className="hidden md:inline" />
                in six <span className="text-primary">honest</span> steps.
              </>
            )}
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-5 mb-4" />
          <p className="text-bodytext text-base leading-relaxed max-w-lg font-medium">
            {currentLocale === 'te'
              ? 'ఎలాంటి దాపరికం లేని పారదర్శక ప్రక్రియ. మీ ప్రాజెక్ట్ ప్రారంభించిన తర్వాత ఏ దశలో ఏం జరుగుతుందో ఇక్కడ చూడండి.'
              : 'No black-box agency mystery. Here\'s exactly what happens after you say yes — and what you\'ll see at every stage.'}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-12">
          
          {/* DESKTOP TIMELINE */}
          <div className="hidden lg:block relative pb-16">
            {/* Base line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-[#EEEEEE] z-0" />
            
            {/* Filled line (scroll linked) */}
            <motion.div
              style={{ width: lineProgress }}
              className="absolute top-6 left-0 h-0.5 bg-primary z-0 origin-left"
            />
            
            <div className="grid grid-cols-6 gap-6 relative z-10">
              {steps.map((step) => {
                const IconComponent = step.icon;
                const isActive = activeStep >= step.id;

                return (
                  <div key={step.id} className="flex flex-col items-center text-center gap-4 group">
                    <div className="relative">
                      {/* Node Circle with dynamic active border and pulse */}
                      <motion.div
                        animate={{ 
                          borderColor: isActive ? '#FF5C1C' : '#E5E5E5',
                          backgroundColor: isActive ? '#FFF3EC' : '#FFFFFF',
                          scale: isActive ? [1, 1.08, 1] : 1
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-13 h-13 rounded-full border-2 bg-white flex items-center justify-center shadow-sm relative transition-transform duration-200"
                      >
                        <IconComponent className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-bodytext/60'}`} />
                      </motion.div>

                      {/* Number badge */}
                      <span className={`absolute -top-3 -right-3 font-display font-bold text-[10px] bg-white border px-1.5 py-0.5 rounded-md shadow-sm transition-colors duration-300 ${
                        isActive ? 'text-primary border-primary/20' : 'text-[#888888] border-border'
                      }`}>
                        {step.number}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5 mt-2 text-center items-center">
                      <h3 className="font-display font-black text-sm text-charcoal tracking-wide uppercase">
                        {step.title}
                      </h3>
                      
                      <p className="text-bodytext text-xs leading-relaxed max-w-[170px] mx-auto min-h-[50px] font-medium">
                        {step.desc}
                      </p>

                      {/* "What you get" chip */}
                      <div className="bg-white border border-[#EEEEEE] rounded-full px-3.5 py-1.5 text-[11px] font-bold text-charcoal inline-flex items-center gap-1.5 mt-2 shadow-sm">
                        <span>{step.chip}</span>
                      </div>

                      {/* Timeframe Tag */}
                      <span className="text-[10px] text-[#999999] uppercase font-bold tracking-wider mt-1">
                        ⏱️ {step.timeframe}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE TIMELINE */}
          <div className="lg:hidden relative pl-8 flex flex-col gap-10">
            {/* Vertical base line */}
            <div className="absolute top-0 bottom-0 left-3.5 w-0.5 bg-[#EEEEEE] z-0" />
            
            {/* Vertical scroll progress fill */}
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute top-0 bottom-0 left-3.5 w-0.5 bg-primary z-0 origin-top"
            />

            {steps.map((step) => {
              const IconComponent = step.icon;
              const isActive = activeStep >= step.id;

              return (
                <div key={step.id} className="flex gap-5 relative z-10 text-left">
                  <div className="relative shrink-0">
                    <motion.div 
                      animate={{
                        borderColor: isActive ? '#FF5C1C' : '#E5E5E5',
                        backgroundColor: isActive ? '#FFF3EC' : '#FFFFFF'
                      }}
                      className="w-10 h-10 rounded-full border bg-white flex items-center justify-center shadow-sm"
                    >
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-bodytext/60'}`} />
                    </motion.div>
                    <span className={`absolute -top-2 -right-2 font-display font-bold text-[9px] bg-white border px-1.5 py-0.2 rounded shadow-sm ${
                      isActive ? 'text-primary border-primary/20' : 'text-[#888888] border-border'
                    }`}>
                      {step.number}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 items-start text-left">
                    <h3 className="font-display font-black text-base text-charcoal uppercase">
                      {step.title}
                    </h3>
                    <p className="text-bodytext text-xs leading-relaxed max-w-md font-medium">
                      {step.desc}
                    </p>

                    {/* Mobile deliverables chip */}
                    <div className="bg-white border border-[#EEEEEE] rounded-full px-3 py-1 text-[11px] font-bold text-charcoal inline-flex items-center gap-1 mt-2 shadow-sm">
                      <span>{step.chip}</span>
                    </div>

                    {/* Mobile timeframe tag */}
                    <span className="text-[10px] text-[#999999] uppercase font-bold tracking-wider mt-1.5">
                      ⏱️ {step.timeframe}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM ADD: Micro-Proof Fact Strip Card */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white border border-[#EEEEEE] rounded-xl px-6 py-4 max-w-[480px] w-full text-center shadow-soft">
            <p className="text-xs md:text-sm font-bold text-[#666666] leading-relaxed">
              {currentLocale === 'te' 
                ? '⚡ రోజు 1 నుండి లాంచ్ వరకు సగటు సమయం: 4-5 వారాలు. అత్యంత వేగవంతమైన క్లయింట్ లాంచ్: 12 రోజులు.'
                : '⚡ Average time from Day 1 to Launch: 4-5 weeks. Fastest client launch: 12 days.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
