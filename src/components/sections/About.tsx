'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Compass, Sparkles, Check, HelpCircle } from 'lucide-react';
import { slideUp, staggerContainer } from '@/lib/animations';
import { useParams } from 'next/navigation';

export default function About() {
  const t = useTranslations('About');
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const timelineMilestones = [
    { 
      year: '2021', 
      label: currentLocale === 'te' ? 'విజయవాడలో ప్రారంభం' : 'Founded in Vijayawada',
      sub: currentLocale === 'te' ? '1 ల్యాప్‌టాప్ & ఒక ప్రాజెక్ట్' : '1 laptop & one client' 
    },
    { 
      year: '2022', 
      label: currentLocale === 'te' ? '50వ క్లయింట్ ఆన్‌బోర్డ్' : '50th Client Onboarded',
      sub: currentLocale === 'te' ? 'లోకల్ గూగుల్ మ్యాప్స్ సక్సెస్' : 'Google maps rankings double'
    },
    { 
      year: '2023', 
      label: currentLocale === 'te' ? '100+ వ్యాపారాలు దాటాము' : 'Crossed 100 Businesses',
      sub: currentLocale === 'te' ? 'కస్టమ్ కోడింగ్ పరిచయం' : 'Pure React custom systems'
    },
    { 
      year: '2024', 
      label: currentLocale === 'te' ? 'వాట్సాప్ ఆటోమేషన్ లాంచ్' : 'Launched WhatsApp Suite',
      sub: currentLocale === 'te' ? 'స్మార్ట్ ఫాలో-అప్ బాట్స్' : 'AI chatbot routing active'
    },
    { 
      year: '2026', 
      label: currentLocale === 'te' ? '200+ బిజినెస్‌లు, 12 మంది బృందం' : '200+ Active Brands',
      sub: currentLocale === 'te' ? 'ఆంధ్ర & తెలంగాణ' : '12-person team'
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FFF8F0] text-charcoal overflow-hidden relative border-b border-border/60 select-none">
      <div className="max-w-[1440px] px-8 md:px-10 mx-auto relative z-10">
        
        {/* Two-Column Grid: left is Story, right is Mission/Vision/Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Story & Founder Card (Colspan 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <span className="text-[13px] font-semibold tracking-wider text-primary uppercase block">
              OUR STORY
            </span>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-2xl md:text-3xl lg:text-[34px] tracking-tight text-charcoal leading-snug"
            >
              {currentLocale === 'te'
                ? 'మేము విజయవాడలోని ఒక చిన్న ఆఫీసులో ఒక ల్యాప్‌టాప్‌తో ప్రారంభించాము: స్థానిక వ్యాపారాలకు కేవలం ఫేస్‌బుక్ పేజీ కంటే మెరుగైన గుర్తింపు అవసరం.'
                : 'We started in a small office in Vijayawada with one laptop and a promise: local businesses deserve better than a Facebook page.'}
            </motion.h2>

            {/* Deepened story body copy - tightened for maximum skimmability */}
            <div className="text-bodytext text-base leading-relaxed flex flex-col gap-4.5 max-w-2xl">
              <p>
                {currentLocale === 'te'
                  ? '2021 లో, మా వ్యవస్థాపకుడు గుంటూరులోని ఒక 30 ఏళ్ల ప్రసిద్ధ ఫ్యామిలీ రెస్టారెంట్ తన కస్టమర్లను కోల్పోవడం చూశారు — వారి వంటకాలు బాగోక కాదు, కేవలం కొత్తగా వచ్చిన వేరొక రెస్టారెంట్ గూగుల్ లో పైన కనిపించడం మరియు వాట్సాప్ మెనూ కలిగి ఉండడం వల్లే. ఆ క్షణంలోనే డిజిటల్ క్రియేటర్స్ హబ్ పుట్టింది.'
                  : 'In 2021, our founder watched a 30-year-old family restaurant in Guntur lose half its regulars to a new competitor — not because the food was better, but because the competitor showed up first on Google and had a WhatsApp menu. That was the moment Digital Creators Hub was born.'}
              </p>
              <p>
                {currentLocale === 'te'
                  ? 'మేము ఆ రెస్టారెంట్ యొక్క ఆన్‌లైన్ ఉనికిని 3 వారాలలో మార్చివేసాము — వెబ్‌సైట్, గూగుల్ ఆప్టిమైజేషన్ మరియు వాట్సాప్ ఆర్డరింగ్. రెండు నెలల్లో ఆర్డర్లు రెట్టింపు అయ్యాయి. ఈ వార్త వైజాగ్ క్లినిక్‌ల నుండి హైదరాబాద్ రియల్ ఎస్టేట్ వరకు వ్యాపించింది.'
                  : 'We rebuilt that restaurant in 3 weeks — website, Google optimization, and WhatsApp ordering. Within two months, weekend covers doubled. Word spread from Vizag clinics to Hyderabad real estate.'}
              </p>
              
              {/* Standalone Stat Line */}
              <p className="font-display font-black text-charcoal text-base md:text-lg tracking-tight pt-1">
                {currentLocale === 'te'
                  ? 'ఈ రోజు: 200+ వ్యాపారాలు. 2 రాష్ట్రాలు. నెరవేర్చిన ఒకే ఒక వాగ్దానం.'
                  : 'Today: 200+ businesses. 2 states. One promise kept.'}
              </p>
            </div>

            {/* Founder Card with avatar & quote & micro stats info */}
            <div className="bg-white rounded-xl p-5 border border-border/80 shadow-soft max-w-xl flex gap-4 items-start mt-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-primary/20 shadow-sm">
                <Image
                  src="/logo.jpg"
                  alt="Satish Chittelu"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 text-left flex-1">
                <span className="font-display font-bold text-base text-charcoal leading-none">Satish Chittelu</span>
                <span className="text-[11px] font-bold text-[#888888]">Founder & CEO, Digital Creators Hub</span>
                
                <p className="text-bodytext text-xs italic leading-relaxed mt-2.5">
                  "{currentLocale === 'te'
                    ? 'ఆంధ్రా, తెలంగాణలోని ప్రతి చిన్న వ్యాపారానికి బెంగళూరు బ్రాండ్‌ల లాంటి డిజిటల్ పవర్ అందాలి — వారు దానిని పొందేలా మేము చూస్తాము.'
                    : 'Every business in Andhra deserves the same digital power as brands in Bangalore — we just make sure they get it.'}"
                </p>

                <div className="border-t border-[#EEEEEE] mt-3 pt-2 text-[10px] text-bodytext font-semibold uppercase tracking-wider">
                  Started 2021 · Now leading a team of 12 across design, dev & growth
                </div>
              </div>
            </div>

            {/* Pill badging trust metrics row */}
            <div className="flex flex-wrap gap-2.5 mt-4">
              <span className="inline-flex items-center gap-1 bg-[#FFF3EC] border border-[#FFD9C2] rounded-full px-3 py-1.5 text-[11px] font-semibold text-primary">
                🏆 {currentLocale === 'te' ? '200+ వ్యాపారాలు సేవలు' : '200+ Businesses Served'}
              </span>
              <span className="inline-flex items-center gap-1 bg-[#FFF3EC] border border-[#FFD9C2] rounded-full px-3 py-1.5 text-[11px] font-semibold text-primary">
                🌏 {currentLocale === 'te' ? 'ఆంధ్ర, తెలంగాణ & బయట' : 'AP, Telangana & Beyond'}
              </span>
              <span className="inline-flex items-center gap-1 bg-[#FFF3EC] border border-[#FFD9C2] rounded-full px-3 py-1.5 text-[11px] font-semibold text-primary">
                ⚡ {currentLocale === 'te' ? 'యావరేజ్ 3-వారాల డెలివరీ' : 'Avg. 3-Week Turnaround'}
              </span>
            </div>

          </div>

          {/* Right Column: Mission/Vision/Approach cards (Colspan 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            
            {/* Card 1: Mission */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary shadow-soft flex flex-col items-start text-left gap-3.5 hover:-translate-y-0.5 transition-all duration-200">
              <div className="w-11 h-11 rounded-full bg-[#FFF3EC] text-primary flex items-center justify-center">
                <Target className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-display font-black text-lg text-charcoal">
                {currentLocale === 'te' ? 'మా లక్ష్యం' : 'Our Mission'}
              </h3>
              <p className="text-bodytext text-xs md:text-sm leading-relaxed font-semibold">
                {currentLocale === 'te' 
                  ? 'రహదారి పక్కన ఉండే చిన్న దుకాణం నుండి పెద్ద ఆసుపత్రి వరకు అందరికీ సమానమైన డిజిటల్ ప్లాట్‌ఫారమ్ అందించడం — కేవలం వెబ్‌సైట్ స్లోగా ఉండటం వల్లే ఏ వ్యాపారమూ వెనుకబడకూడదు.'
                  : 'We exist so the chai shop on the corner and the hospital downtown compete on the same digital playing field as national brands — no business should lose customers just because their website loads slow or their WhatsApp goes unanswered.'}
              </p>
            </div>

            {/* Card 2: Vision */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary shadow-soft flex flex-col items-start text-left gap-3.5 hover:-translate-y-0.5 transition-all duration-200">
              <div className="w-11 h-11 rounded-full bg-[#FFF3EC] text-primary flex items-center justify-center">
                <Compass className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-display font-black text-lg text-charcoal">
                {currentLocale === 'te' ? 'మా దార్శనికత' : 'Our Vision'}
              </h3>
              <p className="text-bodytext text-xs md:text-sm leading-relaxed font-semibold">
                {currentLocale === 'te' 
                  ? '2027 నాటికి, దక్షిణ భారతదేశంలోని 1,000+ వ్యాపార యజమానులు "ఆన్‌లైన్‌లో కనిపించడం లేదు" అని చింతించకుండా ఉండడం — అంతా ఆటోమేటెడ్ గా మా సిస్టమ్స్ లో నడుస్తూ ఉంటుంది.'
                  : 'By 2027, we want to be the reason 1,000+ South Indian businesses never have to worry about \'being found online\' again — it\'s already handled, already working, already growing.'}
              </p>
            </div>

            {/* Card 3: Our Approach */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-primary shadow-soft flex flex-col items-start text-left gap-3.5 hover:-translate-y-0.5 transition-all duration-200">
              <div className="w-11 h-11 rounded-full bg-[#FFF3EC] text-primary flex items-center justify-center">
                <Sparkles className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-display font-black text-lg text-charcoal">
                {currentLocale === 'te' ? 'మా విధానం' : 'Our Approach'}
              </h3>
              <p className="text-bodytext text-xs md:text-sm leading-relaxed font-semibold">
                {currentLocale === 'te' 
                  ? 'ఎలాంటి కన్ఫ్యూజింగ్ పదాలు లేవు. కాలపరిమితి కాంట్రాక్టులు లేవు. ప్రతి నెల లీడ్స్, కాల్స్, ఆర్డర్స్ రిపోర్టులు నేరుగా చూపిస్తాము. ఏదైనా పని చేయకపోతే సరిచేస్తాము, వర్కవుట్ అయితే స్కేల్ చేస్తాము.'
                  : 'No jargon. No 6-month contracts with vague promises. We show you real numbers — leads, calls, orders — every month. If it\'s not working, we fix it. If it is, we scale it.'}
              </p>
            </div>

          </div>

        </div>

        {/* Timeline Milestones Strip (Full-width, 48px margin-top) */}
        <div className="border-t border-border/80 mt-16 pt-12">
          
          {/* Desktop Timeline: Horizontal dot strip */}
          <div className="hidden md:block relative">
            <div className="absolute top-7 left-10 right-10 h-0.5 bg-[#EEEEEE] z-0" />
            
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {timelineMilestones.map((milestone, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-1.5">
                  <span className="font-display font-black text-sm text-primary block bg-[#FFF8F0] px-2">
                    {milestone.year}
                  </span>
                  
                  {/* Timeline bullet dot */}
                  <div className="w-3.5 h-3.5 rounded-full bg-primary border-4 border-white shadow-sm my-0.5" />
                  
                  <div className="flex flex-col text-center">
                    <span className="text-[11px] font-black text-charcoal leading-tight">
                      {milestone.label}
                    </span>
                    <span className="text-[10px] text-[#888888] mt-0.5">
                      {milestone.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline: Vertical timeline bullets */}
          <div className="md:hidden relative pl-6 border-l border-primary/20 flex flex-col gap-6 text-left">
            {timelineMilestones.map((milestone, idx) => (
              <div key={idx} className="relative text-left">
                {/* Timeline dot */}
                <div className="absolute -left-[32px] top-1 w-3 h-3 rounded-full bg-primary border border-white" />
                <span className="font-display font-black text-xs text-primary leading-none">
                  {milestone.year}
                </span>
                <h4 className="font-display font-bold text-xs text-charcoal mt-0.5">
                  {milestone.label}
                </h4>
                <p className="text-[#888888] text-[10px] leading-relaxed mt-0.5">
                  {milestone.sub}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
