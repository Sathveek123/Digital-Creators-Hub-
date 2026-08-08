'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Building2, Utensils, Activity, Hotel, ShoppingBag, GraduationCap, 
  ArrowRight, ShieldAlert, Pill, Scissors, Hammer, Car, Dumbbell, 
  Cpu, Users, Camera, Scale 
} from 'lucide-react';
import { useParams } from 'next/navigation';

interface IndustryCard {
  id: number;
  title: string;
  hook: string;
  icon: any;
  colorClass: string;
}

export default function Industries() {
  const t = useTranslations('Industries');
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  // 6 Featured Industry Cards
  const featuredIndustries: IndustryCard[] = [
    {
      id: 1,
      title: currentLocale === 'te' ? 'రియల్ ఎస్టేట్' : 'Real Estate',
      hook: currentLocale === 'te' ? 'వేరే చోట లిస్టింగ్ వెళ్ళే ముందే మిమ్మల్ని కస్టమర్లు కనుగొనేలా' : 'Get found before the listing goes live elsewhere',
      icon: Building2,
      colorClass: 'bg-[#FFF3EC] text-primary',
    },
    {
      id: 2,
      title: currentLocale === 'te' ? 'రెస్టారెంట్లు & కేఫ్‌లు' : 'Restaurants & Cafes',
      hook: currentLocale === 'te' ? 'క్యూఆర్ మెనూలు, టేబుల్ బుకింగ్స్ & 5-స్టార్ రివ్యూల సిస్టమ్' : 'QR menus, table bookings, and 5-star review flow',
      icon: Utensils,
      colorClass: 'bg-[#EEFBF3] text-[#16A34A]',
    },
    {
      id: 3,
      title: currentLocale === 'te' ? 'క్లినిక్‌లు & హెల్త్‌కేర్' : 'Clinics & Healthcare',
      hook: currentLocale === 'te' ? 'ఎప్పుడూ డబుల్ బుక్ అవ్వని వాట్సాప్ అపాయింట్‌మెంట్స్' : 'WhatsApp appointment booking that never double-books',
      icon: Activity,
      colorClass: 'bg-[#EEF7FF] text-[#2563EB]',
    },
    {
      id: 4,
      title: currentLocale === 'te' ? 'హోటళ్లు & హాస్పిటాలిటీ' : 'Hotels & Hospitality',
      hook: currentLocale === 'te' ? 'కమిషన్ ఖర్చులు లేకుండా నేరుగా బుకింగ్స్ పొందే సిస్టమ్' : 'Direct bookings that skip the OTA commission',
      icon: Hotel,
      colorClass: 'bg-[#FFF8E5] text-[#D97706]',
    },
    {
      id: 5,
      title: currentLocale === 'te' ? 'రిటైల్ & ఫ్యాషన్' : 'Retail & Fashion',
      hook: currentLocale === 'te' ? 'ఇన్‌స్టాగ్రామ్ క్యాటలాగ్ నుండి వాట్సాప్ చెకౌట్ వరకు సులువుగా' : 'Instagram catalog to WhatsApp checkout, seamless',
      icon: ShoppingBag,
      colorClass: 'bg-[#FDF2F8] text-[#DB2777]',
    },
    {
      id: 6,
      title: currentLocale === 'te' ? 'ఎడ్యుకేషన్ & కోచింగ్' : 'Education & Coaching',
      hook: currentLocale === 'te' ? 'రాత్రికి రాత్రే చల్లబడిపోని అడ్మిషన్ల విచారణల ఫాలో-అప్' : 'Admission inquiries that don\'t go cold overnight',
      icon: GraduationCap,
      colorClass: 'bg-[#F5F3FF] text-[#7C3AED]',
    },
  ];

  // Secondary Tier Pills
  const secondaryPills = [
    { name: currentLocale === 'te' ? 'ఫార్మసీలు' : 'Pharmacies', icon: Pill },
    { name: currentLocale === 'te' ? 'సలూన్లు & స్పాస్' : 'Salons & Spas', icon: Scissors },
    { name: currentLocale === 'te' ? 'కన్స్ట్రక్షన్' : 'Construction', icon: Hammer },
    { name: currentLocale === 'te' ? 'ఆటోమోటివ్' : 'Automotive', icon: Car },
    { name: currentLocale === 'te' ? 'జిమ్స్ & ఫిట్‌నెస్' : 'Gyms & Fitness', icon: Dumbbell },
    { name: currentLocale === 'te' ? 'స్టార్టప్స్ & టెక్' : 'Startups & Tech', icon: Cpu },
    { name: currentLocale === 'te' ? 'వెడ్డింగ్స్ & ఈవెంట్స్' : 'Wedding & Events', icon: Users },
    { name: currentLocale === 'te' ? 'ఫోటోగ్రఫీ' : 'Photography', icon: Camera },
    { name: currentLocale === 'te' ? 'లీగల్ సర్వీసెస్' : 'Legal Services', icon: Scale },
  ];

  return (
    <section id="industries" className="py-24 md:py-32 bg-white text-charcoal relative overflow-hidden select-none border-b border-border/60">
      <div className="max-w-[1440px] px-8 md:px-10 mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            WHO WE SERVE
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal leading-tight">
            {currentLocale === 'te' ? (
              <>
                మీకు కస్టమర్లు ఉంటే, వారి కోసం మా వద్ద ఒక <span className="text-primary">సిస్టమ్</span> ఉంది.
              </>
            ) : (
              <>
                If you have customers, <br className="hidden md:inline" />
                we have a <span className="text-primary">system</span> for you.
              </>
            )}
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-5 mb-4" />
          <p className="text-bodytext text-base leading-relaxed max-w-lg font-medium">
            {currentLocale === 'te' 
              ? '12+ పరిశ్రమలు. మీ కస్టమర్లు వెతికే విధానానికి, కాల్ చేసే పద్ధతికి అనుగుణంగా మార్చబడిన ఒక గ్రోత్ ప్లేబుక్.'
              : '12+ industries, one growth playbook adapted to how your customers actually search, call, and buy.'}
          </p>
        </div>

        {/* TOP TIER: 6 Featured Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredIndustries.map((ind) => {
            const IconComp = ind.icon;
            return (
              <div
                key={ind.id}
                className="bg-white border border-[#EEEEEE] rounded-2xl p-6 shadow-soft hover:shadow-md hover:border-primary/20 hover:-translate-y-1 transition-all duration-250 flex flex-col items-start text-left gap-4"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${ind.colorClass}`}>
                  <IconComp className="w-6.5 h-6.5" />
                </div>
                
                <div className="flex flex-col gap-1.5 mt-2">
                  <h3 className="font-display font-black text-lg text-charcoal">
                    {ind.title}
                  </h3>
                  <p className="text-bodytext text-xs md:text-sm leading-relaxed font-semibold">
                    {ind.hook}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECOND TIER: Wrapped static pills */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <h4 className="text-xs font-bold text-[#888888] tracking-widest uppercase">
            {currentLocale === 'te' ? 'ఇతర పరిశ్రమలు కూడా సేవలు అందిస్తాము' : 'Also serving other industries'}
          </h4>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
            {secondaryPills.map((pill, idx) => {
              const PillIcon = pill.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#EEEEEE] rounded-full px-5 py-2.5 flex items-center gap-2 text-xs md:text-sm font-bold text-charcoal hover:border-primary/40 hover:bg-[#FFF9F6] transition-all duration-200 shadow-sm"
                >
                  <PillIcon className="w-4 h-4 text-primary shrink-0" />
                  <span>{pill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* BELOW EVERYTHING: CTA Line */}
        <div className="text-center mt-12">
          <a
            href={`/${currentLocale}#contact`}
            className="inline-flex items-center gap-1 text-[15px] font-black text-primary hover:underline transition-colors"
          >
            <span>{currentLocale === 'te' ? 'మీ పరిశ్రమ ఇక్కడ కనిపించడం లేదా? మమ్మల్ని సంప్రదించండి' : 'Don\'t see your industry? We\'ve probably built for something similar — tell us about your business'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
