'use client';

import { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Stats from '@/components/sections/Stats';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Compass, Award, Users } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function AboutPage() {
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const timelineContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ['start center', 'end center'],
  });

  const scrollWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((val) => {
      const idx = Math.min(Math.floor(val * 5), 4);
      setActiveIndex(idx);
    });
  }, [scrollYProgress]);

  const timeline = [
    { 
      year: '2021', 
      title: currentLocale === 'te' ? 'ది స్పార్క్' : 'The Spark', 
      desc: currentLocale === 'te' ? 'స్థానిక షాపుల గూగుల్ విజిబిలిటీకి సహాయం చేయడానికి సతీష్ చిట్టేలు విజయవాడలోని చిన్న ఆఫీసులో DCHను స్థాపించారు.' : 'Satish Chittelu founded DCH in a small Vijayawada office to support local shops struggling with Google visibility.' 
    },
    { 
      year: '2022', 
      title: currentLocale === 'te' ? 'లోకల్ ఎస్ఈఓ నైపుణ్యం' : 'Local SEO Mastery', 
      desc: currentLocale === 'te' ? 'ఆంధ్రప్రదేశ్ లోని 40+ స్థానిక సర్వీస్ వ్యాపారాలను గూగుల్ మ్యాప్స్ టాప్ 3 లో నిలిపి, వారి ఆదాయాన్ని రెట్టింపు చేసాము.' : 'Ranked 40+ local service businesses in Andhra Pradesh into Google Maps Top 3, doubling client revenues.' 
    },
    { 
      year: '2023', 
      title: currentLocale === 'te' ? 'పూర్తి కస్టమ్ కోడింగ్' : 'Going Custom', 
      desc: currentLocale === 'te' ? 'పూర్తి వేగాన్ని అందించడానికి టెంప్లేట్ వెబ్‌సైట్లను వదిలి పూర్తిగా కస్టమ్ నెక్స్ట్.జేఎస్ వెబ్‌సైట్లను నిర్మించడం ప్రారంభించాము.' : 'Decided to build purely custom Next.js websites, dropping templates entirely to guarantee speed.' 
    },
    { 
      year: '2024', 
      title: currentLocale === 'te' ? 'ఏఐ & వాట్సాప్ ఆటోమేషన్' : 'AI & WhatsApp automation', 
      desc: currentLocale === 'te' ? 'స్మార్ట్ వాట్సాప్ క్వాలిఫై బాట్స్ పరిచయం చేసాము, దీనివల్ల లీడ్ ఫాలో-అప్ సమయం 30 సెకన్ల కంటే తక్కువకు పడిపోయింది.' : 'Introduced smart WhatsApp Qualify Bots, cutting lead follow-up times to under 30 seconds.' 
    },
    { 
      year: '2026', 
      title: currentLocale === 'te' ? 'స్కేలింగ్ హబ్' : 'Scaling Hub', 
      desc: currentLocale === 'te' ? 'దక్షిణ భారతదేశం వ్యాప్తంగా 200+ క్రియాశీల వ్యాపారాలకు సేవలు అందిస్తూ ప్రాంతీయ తెలుగు మార్కెటింగ్‌ను విస్తరించాము.' : 'Empowered 200+ active businesses across South India and expanded localized regional Telugu marketing.' 
    },
  ];

  return (
    <div className="min-h-screen bg-white text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />
      
      <main className="flex-grow pt-28">
        
        {/* Page Hero */}
        <section className="py-20 bg-white relative overflow-hidden text-center select-none border-b border-border/60">
          <div className="absolute inset-0 bg-[radial-gradient(#E5E5E5_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-5 relative z-10">
            <span className="text-xs font-bold tracking-widest text-primary uppercase block">
              {currentLocale === 'te' ? 'మా చరిత్ర' : 'OUR HISTORY'}
            </span>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-[56px] tracking-tight uppercase leading-tight text-charcoal">
              {currentLocale === 'te' ? (
                <>
                  డిజిటల్ క్రియేటర్స్ హబ్ <br /> వెనుక ఉన్న అసలైన కథ.
                </>
              ) : (
                <>
                  The story behind <br /> Digital Creators Hub.
                </>
              )}
            </h1>
            <p className="text-bodytext text-sm md:text-base max-w-xl leading-relaxed">
              {currentLocale === 'te'
                ? 'మేము చిన్నదిగా, లోకల్ గా, నిర్దిష్ట లక్ష్యంతో ప్రారంభించాము. ఈ రోజు దక్షిణ భారతదేశంలోని వ్యాపారాలకు హై-స్పీడ్ వెబ్‌సైట్లు మరియు ఆటోమేషన్ సిస్టమ్స్ అందిస్తున్నాము.'
                : 'We started small, local, and focused. Today, we empower businesses across South India with high-impact custom web and automation systems.'}
            </p>
          </div>
        </section>

        {/* The Problem We Saw — light cream bg, max-width centered card */}
        <section className="py-20 bg-white text-charcoal border-b border-border/60">
          <div className="max-w-3xl mx-auto px-8 md:px-10 py-12 bg-[#FFF8F0] border border-[#FFD9C2]/40 rounded-2xl text-left flex flex-col gap-5 shadow-sm">
            <h2 className="font-display font-black text-2xl md:text-3xl text-charcoal tracking-tight">
              {currentLocale === 'te' ? 'మేము చూసిన సమస్య' : 'The Problem We Saw'}
            </h2>
            <div className="w-12 h-1 bg-primary" />
            <p className="text-bodytext text-sm md:text-base leading-relaxed font-semibold">
              {currentLocale === 'te'
                ? 'ఆంధ్రప్రదేశ్ మరియు తెలంగాణలోని స్థానిక వ్యాపారాలు తమ కంటే మంచి సేవలు లేని ప్రత్యర్థులకు కస్టమర్లను కోల్పోతున్నాయి — కేవలం ప్రత్యర్థుల వద్ద మెరుగైన వెబ్‌సైట్ మరియు గూగుల్ ర్యాంకింగ్ ఉండటం వల్లే.'
                : 'Local businesses in AP and Telangana were losing thousands of potential customers to competitors who just had a better website and Google ranking. Not better service. Not better prices. Just better digital presence.'}
              <br /><br />
              {currentLocale === 'te'
                ? 'స్టాండర్డ్ టెంప్లేట్లు మరియు ఏఐ ఉపయోగించే సాస్ డిజైన్లు స్థానిక క్లినిక్‌లు, రెస్టారెంట్లు లేదా బిల్డర్లను ఒకేలా చూపిస్తున్నాయి. మేము దానిని మార్చడానికి స్థానిక ప్రాంతీయ భాషల్లో కస్టమ్ ఎదుగుదల ఇంజిన్లను నిర్మించాము.'
                : 'We realized that standard templates and AI-generated SaaS layouts weren\'t helping; they made every local clinic, restaurant, and builder look identical. We set out to change that by building fully custom, bilingual digital growth engines.'}
            </p>
          </div>
        </section>

        {/* Timeline Section with Horizontal Scroll progress filling */}
        <section ref={timelineContainerRef} className="py-20 bg-white relative border-b border-border/60">
          <div className="max-w-4xl mx-auto px-6 text-left flex flex-col gap-10">
            <h2 className="font-display font-black text-2xl md:text-3xl text-charcoal tracking-tight">
              {currentLocale === 'te' ? 'మా ప్రయాణం (2021 – 2026)' : 'Our Journey (2021 – 2026)'}
            </h2>
            
            <div className="relative pl-6 border-l border-border flex flex-col gap-8">
              {/* Dynamic scroll progress indicator on side border line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border z-0" />
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary z-0 origin-top"
              />

              {timeline.map((item, idx) => {
                const isActive = activeIndex >= idx;
                return (
                  <div key={idx} className="relative text-left">
                    <motion.div
                      animate={{ 
                        backgroundColor: isActive ? '#FF5C1C' : '#FFFFFF',
                        borderColor: isActive ? '#FF5C1C' : '#DDDDDD'
                      }}
                      className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-white shadow-sm z-10 transition-colors duration-200"
                    />
                    <span className={`font-display font-black text-lg block leading-none transition-colors duration-200 ${
                      isActive ? 'text-primary' : 'text-bodytext/60'
                    }`}>
                      {item.year}
                    </span>
                    <h3 className="font-display font-bold text-base text-charcoal mt-1">
                      {item.title}
                    </h3>
                    <p className="text-bodytext text-xs md:text-sm leading-relaxed mt-1.5 max-w-lg font-medium">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section — Substantial cards with Fun Facts & Day-to-Day descriptions */}
        <section className="py-20 bg-[#FAFAFA] text-charcoal">
          <div className="max-w-4xl mx-auto px-6 text-left flex flex-col gap-10">
            <h2 className="font-display font-black text-2xl md:text-3xl text-charcoal tracking-tight">
              {currentLocale === 'te' ? 'క్రూ మెంబర్స్' : 'Meet the Creators'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Member 1: Satish */}
              <div className="bg-white rounded-2xl p-6.5 shadow-soft border border-[#EEEEEE] flex gap-5 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-primary/20 shadow-sm bg-[#FAFAFA]">
                  <Image
                    src="/logo.jpg"
                    alt="Satish Chittelu"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 text-left flex-grow">
                  <span className="font-display font-bold text-base text-charcoal leading-none">Satish Chittelu</span>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider mt-0.5">Founder & CEO</span>
                  
                  <div className="border-t border-[#EEEEEE] mt-3.5 pt-3 flex flex-col gap-2">
                    <p className="text-bodytext text-xs leading-relaxed">
                      <strong>Fun Fact:</strong> Writes copy in both Telugu and English! Believes every good website starts with a bad first draft.
                    </p>
                    <p className="text-[#888888] text-[11px] font-bold">
                      🔧 Day-to-day: Audits local Google profiles, structures ad funnels, and answers client calls directly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Member 2: Siva Kumar */}
              <div className="bg-white rounded-2xl p-6.5 shadow-soft border border-[#EEEEEE] flex gap-5 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="w-16 h-16 rounded-full bg-[#FFF3EC] text-primary font-display font-black text-lg flex items-center justify-center border border-[#FFD9C2]/50 shadow-sm shrink-0">
                  SK
                </div>
                <div className="flex flex-col gap-1 text-left flex-grow">
                  <span className="font-display font-bold text-base text-charcoal leading-none">Siva Kumar</span>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider mt-0.5">Lead Next.js Developer</span>
                  
                  <div className="border-t border-[#EEEEEE] mt-3.5 pt-3 flex flex-col gap-2">
                    <p className="text-bodytext text-xs leading-relaxed">
                      <strong>Fun Fact:</strong> Hates template layouts, codes everything from a blank React editor!
                    </p>
                    <p className="text-[#888888] text-[11px] font-bold">
                      🔧 Day-to-day: Optimizes core web vitals, builds Next.js pages, and connects database schemas.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Stats Band */}
        <Stats />

        {/* Global CTA */}
        <section className="py-24 bg-white text-center select-none relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center gap-5">
            <h2 className="font-display font-black text-2xl md:text-4xl tracking-tight text-charcoal">
              {currentLocale === 'te' ? 'మాతో కలిసి పని చేయడానికి సిద్ధంగా ఉన్నారా?' : 'Ready to work with us?'}
            </h2>
            <p className="text-bodytext text-sm max-w-md font-semibold">
              {currentLocale === 'te' 
                ? 'మీ స్థానిక వ్యాపారం కోసం అనుకూల వృద్ధి ఇంజిన్‌ను నిర్మిద్దాం.' 
                : "Let's build a custom growth engine for your local brand."}
            </p>
            <a
              href={`/${currentLocale}#contact`}
              className="group relative inline-flex items-center justify-center bg-primary hover:bg-[#e04c10] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-sm hover:scale-[1.02] transition-all duration-200"
            >
              {currentLocale === 'te' ? 'ఉచిత ఆడిట్ పొందండి' : 'Get Free Audit Now'}
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
