'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageCircle } from 'lucide-react';
import { useParams } from 'next/navigation';

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

export default function FAQ() {
  const t = useTranslations('FAQ');
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const [openId, setOpenId] = useState<number | null>(null);

  // Group 1: Getting Started
  const group1FAQs: FAQItem[] = [
    {
      id: 1,
      q: currentLocale === 'te' ? 'డిజిటల్ క్రియేటర్స్ హబ్ ఎలాంటి సేవలను అందిస్తుంది?' : 'What services does Digital Creators Hub offer?',
      a: currentLocale === 'te' 
        ? 'మేము డిజిటల్‌కు సంబంధించిన ప్రతిదీ కవర్ చేస్తాము — కస్టమ్ వెబ్‌సైట్‌లు, గూగుల్ బిజినెస్ ప్రొఫైల్ ర్యాంకింగ్, సోషల్ మీడియా మేనేజ్‌మెంట్, ఫేస్‌బుక్/ఇన్‌స్టాగ్రామ్ యాడ్స్, వాట్సాప్ ఆటోమేషన్, క్యూఆర్ మెనూలు మరియు డ్యాష్‌బోర్డులు. అంతా ఒకే టీమ్ ద్వారా అందించబడుతుంది.'
        : 'We cover everything digital — custom websites, Google Business Profile ranking, social media management, Facebook/Instagram ads, AI-powered WhatsApp automation, QR menus, and CRM dashboards. All under one team, so you\'re never juggling five different vendors.'
    },
    {
      id: 3,
      q: currentLocale === 'te' ? 'మీరు చిన్న స్థానిక వ్యాపారాలతో పని చేస్తారా?' : 'Do you work with small local businesses?',
      a: currentLocale === 'te'
        ? 'అవును, అదే మా స్పెషాలిటీ. మా క్లయింట్లలో 80% పైగా ఆంధ్రప్రదేశ్ & తెలంగాణలోని చిన్న వ్యాపారాలే — రెస్టారెంట్లు, క్లినిక్‌లు, సలూన్లు, రిటైల్ షాప్‌లు. మాతో ప్రారంభించడానికి మీకు భారీ బడ్జెట్ అవసరం లేదు.'
        : 'That\'s our specialty. Over 80% of our clients are small businesses in AP and Telangana — restaurants, clinics, salons, shops. You don\'t need a big budget or a big brand name to start.'
    },
    {
      id: 4,
      q: currentLocale === 'te' ? 'అన్నీ తెలుగులో కూడా అందుబాటులో ఉంటాయా?' : 'Is everything available in Telugu too?',
      a: currentLocale === 'te'
        ? 'ఖచ్చితంగా. మేము తెలుగు/ఇంగ్లీష్ బైలింగువల్ వెబ్‌సైట్‌లు నిర్మిస్తాము, తెలుగులో యాడ్స్ రన్ చేస్తాము, సోషల్ మీడియా కంటెంట్ క్రియేట్ చేస్తాము మరియు మా వాట్సాప్ బాట్స్ తెలుగులోనే రిప్లై ఇస్తాయి. మీ కస్టమర్ల సౌలభ్యం కొద్దీ ఏ భాషనైనా ఎంచుకోవచ్చు.'
        : 'Yes. We build bilingual websites, run Telugu ad campaigns, create Telugu social content, and our WhatsApp bots reply in Telugu. Your customers engage in whichever language they\'re comfortable in.'
    },
    {
      id: 7,
      q: currentLocale === 'te' ? 'సేవల ధర ఎంత ఉంటుంది?' : 'How much does it cost?',
      a: currentLocale === 'te'
        ? 'క్యూఆర్ సొల్యూషన్ల కోసం సేవలు నెలకు ₹2,999 నుండి ప్రారంభమవుతాయి మరియు మీ అవసరాలను బట్టి మారుతుంటాయి. ఎలాంటి దాపరికం లేని పారదర్శక ధరలు ఉంటాయి, అదనపు ఛార్జీలు ఏవీ ఉండవు.'
        : 'Services start from ₹2,999/month for QR solutions and scale up based on scope. We share detailed pricing after a free call where we understand your specific goals — no generic price list, no surprises.'
    },
    {
      id: 9,
      q: currentLocale === 'te' ? 'నాకు టెక్నాలజీ గురించి పెద్దగా అవగాహన లేదు — మీ వర్క్ నాకు అర్థమవుతుందా?' : 'I\'m not techy — will I understand what you\'re doing?',
      a: currentLocale === 'te'
        ? 'ఖచ్చితంగా అర్థమవుతుంది. మా క్లయింట్లలో చాలామంది నాన్-టెక్నికల్ వ్యక్తులే. మేము జార్గన్ (కన్ఫ్యూజింగ్ సాంకేతిక పదాలు) వాడకుండా సాధారణ భాషలో వివరిస్తాము మరియు మీ బిజినెస్ రిపోర్ట్స్ సులభంగా చూసే డ్యాష్‌బోర్డ్ ఇస్తాము.'
        : 'Completely fine — most of our clients aren\'t technical either. We explain everything in plain language, send you a dashboard you can actually read, and never hide behind jargon to justify a bill.'
    }
  ];

  // Group 2: Working With Us
  const group2FAQs: FAQItem[] = [
    {
      id: 2,
      q: currentLocale === 'te' ? 'ఫలితాలను నేను ఎంత త్వరగా చూడగలను?' : 'How quickly will I see results?',
      a: currentLocale === 'te'
        ? 'లోకల్ ఎస్ఈఓ (SEO) కి 30-90 రోజులు పడుతుంది. వెబ్‌సైట్ లీడ్స్ లాంచ్ చేసిన మొదటి రోజు నుండే వస్తాయి. సోషల్ మీడియా రీచ్ 1వ నెల నుండి మరియు యాడ్ క్యాంపెయిన్స్ మొదటి 14 రోజుల్లో టెస్ట్ చేసి స్కేల్ చేస్తాము.'
        : 'Local SEO: 30-90 days. Website leads: from day one of launch. Social media reach: Month 1 onwards. Ad campaigns: first 14 days of testing, then we scale what\'s working and cut what isn\'t.'
    },
    {
      id: 5,
      q: currentLocale === 'te' ? 'నన్ను లాంగ్-టర్మ్ కాంట్రాక్టులలో లాక్ చేస్తారా?' : 'Do you lock me into a long contract?',
      a: currentLocale === 'te'
        ? 'ఎలాంటి లాక్-ఇన్స్ లేవు. మేము చాలా సేవల కోసం నెలవారీ ప్రాతిపదికన మాత్రమే పని చేస్తాము. పేపర్‌వర్క్‌తో కాకుండా ఫలితాలతోనే మీ నమ్మకాన్ని గెలుచుకుంటాము.'
        : 'No lock-ins. We work month-to-month on most services. We earn your trust with results, not paperwork — if it\'s not working, you\'re free to walk.'
    },
    {
      id: 6,
      q: currentLocale === 'te' ? 'నేను నేరుగా ఫౌండర్‌తో మాట్లాడవచ్చా?' : 'Can I talk directly to the founder?',
      a: currentLocale === 'te'
        ? 'అవును, ప్రతి యాక్టివ్ క్లయింట్‌కు సతీష్ వాట్సాప్ లో అందుబాటులో ఉంటారు. ఎలాంటి అకౌంట్ మేనేజర్లు లేదా టికెట్ సిస్టమ్స్ ఉండవు — నేరుగా వేగవంతమైన సమాధానాలు లభిస్తాయి.'
        : 'Yes — Satish is available on WhatsApp for every active client. No account managers, no ticket system, no waiting three days for a reply. Direct access, always.'
    },
    {
      id: 8,
      q: currentLocale === 'te' ? 'నాకు ఇప్పటికే వెబ్‌సైట్ ఉంటే ఏం చేయాలి?' : 'What if I already have a website?',
      a: currentLocale === 'te'
        ? 'మేము మొదట మీ వెబ్‌సైట్ స్పీడ్, ఎస్ఈఓ మరియు డిజైన్ ఆడిట్ చేస్తాము. కేవలం చిన్న మార్పులు సరిపోతే అవి మాత్రమే చేస్తాము, అనవసరంగా పూర్తి రీబిల్డ్స్ కోసం మేము బలవంతం చేయము.'
        : 'We\'ll audit it first — speed, SEO, design, lead conversion. If it just needs fixes, we\'ll fix it. If it needs a full rebuild, we\'ll tell you honestly instead of pushing a rebuild you don\'t need.'
    },
    {
      id: 10,
      q: currentLocale === 'te' ? 'ఉచిత ఆడిట్ కాల్ తర్వాత ఏం జరుగుతుంది?' : 'What happens after the free audit call?',
      a: currentLocale === 'te'
        ? 'ఎలాంటి ఒత్తిడి లేని ఉచిత ఆడిట్ సమ్మరీ రిపోర్టును మీకు పంపుతాము — మీ డిజిటల్ సెటప్ లో ఏం వర్కవుట్ అవుతోంది, లీడ్స్ ఎక్కడ మిస్ అవుతున్నాయో తెలుస్తుంది. మీరు మాతో కలిసి పని చేయాలని నిర్ణయించుకుంటే ఒక సింపుల్ ప్రపోజల్ పంపుతాము.'
        : 'No pressure pitch. You get a written summary of what we found — what\'s working, what\'s costing you leads — even if you decide not to work with us. If you do want to move forward, we send a simple proposal, no fine print.'
    }
  ];

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const renderAccordionItem = (item: FAQItem) => {
    const isOpen = openId === item.id;
    return (
      <div
        key={item.id}
        className="bg-white rounded-2xl border border-[#EEEEEE] hover:border-primary/30 hover:bg-[#FFFDFB] transition-all duration-200 shadow-soft overflow-hidden mb-3"
      >
        <button
          onClick={() => handleToggle(item.id)}
          className="w-full flex items-center justify-between p-5.5 text-left font-display font-bold text-base md:text-[17px] text-charcoal focus:outline-none cursor-pointer"
        >
          <span>{item.q}</span>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="p-1 text-primary shrink-0"
          >
            <Plus className="w-5 h-5" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5.5 pb-5.5 pt-1 border-t border-border/40">
                <p className="text-bodytext text-xs md:text-sm font-semibold leading-relaxed text-[#555555]">
                  {item.a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#FFF8F0] text-charcoal overflow-hidden select-none border-b border-border/60">
      <div className="max-w-[1440px] px-8 md:px-10 mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            COMMON QUESTIONS
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal leading-tight">
            {currentLocale === 'te' 
              ? 'వ్యాపార యజమానులు అడిగే సాధారణ ప్రశ్నలు.'
              : 'Questions we hear from business owners like you.'}
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-5" />
        </div>

        {/* Accordions distributed into 2 categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 text-left items-start">
          
          {/* Column 1: Getting Started */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-[#888888] tracking-widest uppercase mb-4 px-2">
              {currentLocale === 'te' ? 'స్టార్టింగ్ గైడ్' : 'Getting Started'}
            </h3>
            {group1FAQs.map(renderAccordionItem)}
          </div>

          {/* Column 2: Working With Us */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-[#888888] tracking-widest uppercase mb-4 px-2">
              {currentLocale === 'te' ? 'మాతో వర్కింగ్ విధానం' : 'Working With Us'}
            </h3>
            {group2FAQs.map(renderAccordionItem)}
          </div>

        </div>

        {/* BELOW ACCORDION: Closing WhatsApp Bridge Card */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white border border-[#EEEEEE] rounded-2xl px-8 py-5.5 max-w-[480px] w-full text-center shadow-soft flex flex-col items-center gap-1.5">
            <p className="text-xs md:text-sm font-semibold text-bodytext">
              {currentLocale === 'te' 
                ? 'ఇంకా ఏవైనా ప్రశ్నలు ఉన్నాయా?' 
                : 'Still have questions?'}
            </p>
            <a
              href="https://wa.me/919912799855"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-primary hover:underline"
            >
              <MessageCircle className="w-4 h-4 fill-primary text-white" />
              <span>{currentLocale === 'te' ? 'వాట్సాప్‌లో మాతో మాట్లాడండి (రియల్ సపోర్ట్) →' : 'Chat with us on WhatsApp — real answers, no chatbot script.'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
