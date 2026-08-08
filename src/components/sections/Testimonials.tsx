'use client';

import { useTranslations } from 'next-intl';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  industry: string;
  initials: string;
}

export default function Testimonials() {
  const t = useTranslations('Testimonials');
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ramesh Kumar',
      role: currentLocale === 'te' ? 'వ్యవస్థాపకుడు' : 'Founder',
      company: 'Skyline Realty, Hyderabad',
      quote: currentLocale === 'te' 
        ? 'మా లీడ్ ఫ్లో కేవలం 3 నెలల్లో మూడు రెట్లు పెరిగింది. వాట్సాప్ ఏఐ ఫాలో-అప్‌లు మాత్రమే మా పెట్టుబడిని మొదటి వారంలోనే తిరిగి తెచ్చాయి.' 
        : 'Our lead flow tripled in 3 months. The AI WhatsApp follow-ups alone paid back the entire investment in the first week.',
      industry: currentLocale === 'te' ? 'రియల్ ఎస్టేట్' : 'Real Estate',
      initials: 'RK'
    },
    {
      id: 2,
      name: 'Priya Lakshmi',
      role: currentLocale === 'te' ? 'యజమాని' : 'Owner',
      company: 'Curry Leaf Kitchen, Vijayawada',
      quote: currentLocale === 'te' 
        ? 'డిసిహెచ్ కంటే ముందు మేము స్విగ్గీకి 25% చెల్లించేవాళ్ళం. ఇప్పుడు 70% పైగా ఆర్డర్లు నేరుగా మా వాట్సాప్ లోనే వస్తున్నాయి.' 
        : 'Before DCH, we were paying 25% to Swiggy. Now 70% of our orders come directly on WhatsApp. Life-changing for our margins.',
      industry: currentLocale === 'te' ? 'రెస్టారెంట్' : 'Restaurant',
      initials: 'PL'
    },
    {
      id: 3,
      name: 'Dr. Aravind Rao',
      role: currentLocale === 'te' ? 'వైద్యులు' : 'Healthcare Doctor',
      company: 'Aster Dental, Vizag',
      quote: currentLocale === 'te' 
        ? 'వారు మమ్మల్ని 70 రోజుల్లోనే గూగుల్ లో టాప్ 3 ర్యాంకింగ్‌కి తీసుకువచ్చారు. పెరిగిన ఫోన్ కాల్స్ నిర్వహించడానికి మేము అదనపు సిబ్బందిని నియమించుకున్నాము.' 
        : 'They got us to Google Top 3 in under 70 days. We had to hire another receptionist to handle the new appointment calls.',
      industry: currentLocale === 'te' ? 'వైద్యం' : 'Healthcare',
      initials: 'AR'
    },
    {
      id: 4,
      name: 'Suresh Reddy',
      role: currentLocale === 'te' ? 'యజమాని' : 'Owner',
      company: 'Nova Interiors, Guntur',
      quote: currentLocale === 'te' 
        ? 'ఆంధ్రప్రదేశ్ లో నేను చూసిన ఏ ఇతర ఇంటీరియర్ డిజైన్ వెబ్‌సైట్ లా కాకుండా మా సైట్ చాలా అద్భుతంగా ఉంటుంది. క్లయింట్లు ప్రశంసిస్తున్నారు.' 
        : 'The website they built looks nothing like any other interior design site I\'ve seen in AP. Clients specifically compliment it.',
      industry: currentLocale === 'te' ? 'రిటైల్' : 'Retail',
      initials: 'SR'
    },
    {
      id: 5,
      name: 'Anita Varma',
      role: currentLocale === 'te' ? 'జనరల్ మేనేజర్' : 'General Manager',
      company: 'Vista Hotels, Tirupati',
      quote: currentLocale === 'te' 
        ? 'మేము హోటల్ బుకింగ్ కమిషన్స్ కింద నెలకు ₹80,000 చెల్లించేవాళ్ళం. DCH మాకు డైరెక్ట్ బుకింగ్ సిస్టమ్ నిర్మించాక ఆ డబ్బు మా వద్దే మిగులుతోంది.' 
        : 'We were paying ₹80,000/month in OTA commissions. DCH built us a direct booking system. That money stays with us now.',
      industry: currentLocale === 'te' ? 'హాస్పిటాలిటీ' : 'Hospitality',
      initials: 'AV'
    },
    {
      id: 6,
      name: 'Kiran Babu',
      role: currentLocale === 'te' ? 'వ్యవస్థాపకుడు' : 'Founder',
      company: 'BrightPath EdTech, Amaravati',
      quote: currentLocale === 'te' 
        ? 'మొదటి 90 రోజుల్లోనే ₹12 లక్షల కోర్సు సేల్స్ సాధించాము. యాడ్స్ యొక్క ROI 6.4 రెట్లు పెరిగింది. ముందే కాల్ చేసి ఉంటే బాగుండేది.' 
        : '₹12 lakhs in course revenue in our first 90 days with DCH. The ads ROI is 6.4x. I wish I\'d called them a year earlier.',
      industry: currentLocale === 'te' ? 'విద్య' : 'Education',
      initials: 'KB'
    },
    {
      id: 7,
      name: 'Venkatesh Rao',
      role: currentLocale === 'te' ? 'యజమాని' : 'Owner',
      company: 'MedPlus Family Pharmacy, Rajahmundry',
      quote: currentLocale === 'te' 
        ? 'మా వాట్సాప్ రీఆర్డర్ సిస్టమ్ ద్వారా రెగ్యులర్ కస్టమర్లు చాలా ఈజీగా ఆర్డర్ చేస్తున్నారు. దీనివల్ల మా రిపీట్ బిజినెస్ 45% పెరిగింది.' 
        : 'Our WhatsApp reorder system means regular customers just message \'usual order\' and we deliver. Repeat business is up 45%.',
      industry: currentLocale === 'te' ? 'ఫార్మసీ' : 'Pharma',
      initials: 'VR'
    },
    {
      id: 8,
      name: 'Swathi Reddy',
      role: currentLocale === 'te' ? 'మేనేజర్' : 'Manager',
      company: 'Glow Studio Salon, Warangal',
      quote: currentLocale === 'te' 
        ? 'గతంలో బుకింగ్స్ అన్నీ ఫోన్ కాల్స్ తో గందరగోళంగా ఉండేవి. ఇప్పుడు క్లయింట్లు వాట్సాప్ లోనే బుక్ చేసుకుంటున్నారు.' 
        : 'Booking used to be all phone calls and missed appointments. Now clients book themselves on WhatsApp. No more double-bookings.',
      industry: currentLocale === 'te' ? 'సలూన్' : 'Salon',
      initials: 'SR'
    },
    {
      id: 9,
      name: 'Naveen Kumar',
      role: currentLocale === 'te' ? 'మేనేజర్' : 'Manager',
      company: 'IronCore Fitness, Karimnagar',
      quote: currentLocale === 'te' 
        ? 'మేము 8 నెలల్లో 80 మంది నుండి 210 మంది సభ్యులకు చేరుకున్నాము. DCH రన్ చేసిన ఇన్‌స్టాగ్రామ్ యాడ్స్ చాలా బాగా వర్కవుట్ అయ్యాయి.' 
        : 'We went from 80 members to 210 in 8 months. The Instagram ads DCH ran actually understood our audience — not generic gym ad templates.',
      industry: currentLocale === 'te' ? 'ఫిట్‌నెస్' : 'Gym & Fitness',
      initials: 'NK'
    },
    {
      id: 10,
      name: 'Ravindra Chowdary',
      role: currentLocale === 'te' ? 'వ్యవస్థాపకుడు' : 'Founder',
      company: 'Chowdary Constructions, Nellore',
      quote: currentLocale === 'te' 
        ? 'చాలా ఏజెన్సీలకు మా బిజినెస్ మోడల్స్ అర్థం కావు. DCH మా ప్రాజెక్ట్ విధానాన్ని వివరించే సైట్ నిర్మించాక సీరియస్ ఎంక్వైరీస్ పెరిగాయి.' 
        : 'Most agencies don\'t understand B2B lead cycles. DCH built us a site that actually explains our project process — inquiries from serious clients went up, tire-kickers went down.',
      industry: currentLocale === 'te' ? 'కన్స్ట్రక్షన్' : 'Construction',
      initials: 'RC'
    },
    {
      id: 11,
      name: 'Meena Iyer',
      role: currentLocale === 'te' ? 'యజమాని' : 'Owner',
      company: 'Vogue Junction, Vijayawada',
      quote: currentLocale === 'te' 
        ? 'మా ఇన్‌స్టాగ్రామ్ క్యాటలాగ్ నేరుగా వాట్సాప్ చెకౌట్ కి లింక్ చేయబడింది. కస్టమర్లు సులభంగా చూసి కొనుగోలు చేస్తున్నారు.' 
        : 'Our Instagram catalog now links straight to WhatsApp checkout. Customers browse, message, buy — no confusion, no drop-off.',
      industry: currentLocale === 'te' ? 'ఫ్యాషన్' : 'Retail & Fashion',
      initials: 'MI'
    },
    {
      id: 12,
      name: 'Srikanth Naidu',
      role: currentLocale === 'te' ? 'మేనేజర్' : 'Manager',
      company: 'DriveHub Auto, Kadapa',
      quote: currentLocale === 'te' 
        ? 'DCH వారి క్యూఆర్ రివ్యూ సిస్టమ్ వల్ల మేము 3 నెలల్లో 4.1 నుండి 4.7 స్టార్ల రేటింగ్ కి చేరుకున్నాము. ఇది లోకల్ సెర్చ్ లో బాగా కనిపిస్తోంది.' 
        : 'Google reviews used to be something we forgot about. DCH\'s QR review system got us from 4.1 to 4.7 stars in 3 months — and it shows immediately in local search.',
      industry: currentLocale === 'te' ? 'ఆటోమోటివ్' : 'Automotive',
      initials: 'SN'
    }
  ];

  // Distribute items across row 1 and row 2
  const row1Testimonials = testimonials.filter(t => t.id % 2 !== 0);
  const row2Testimonials = testimonials.filter(t => t.id % 2 === 0);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#FAFAFA] text-charcoal overflow-hidden select-none border-b border-border/60 relative">
      
      <div className="max-w-[1440px] px-8 md:px-10 mx-auto w-full mb-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            CLIENT REVIEWS
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal leading-tight">
            {currentLocale === 'te' ? 'మా క్లయింట్ల మాటల్లో.' : "Don't take our word for it."}
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-5 mb-4" />
          <p className="text-bodytext text-base leading-relaxed max-w-lg font-medium">
            {currentLocale === 'te' 
              ? 'ఆంధ్రప్రదేశ్ & తెలంగాణలోని వివిధ వ్యాపార యజమానుల నిజమైన నివేదికలు మరియు అనుభవాలు ఇక్కడ చూడండి.'
              : 'Here\'s what Andhra Pradesh & Telangana business owners say — unedited, straight from the people who signed the invoices.'}
          </p>
        </div>
      </div>

      {/* Dynamic Dual marquee system */}
      <div className="w-full overflow-hidden flex flex-col gap-5.5 relative">
        {/* Left/Right blur fade gradient masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-20 pointer-events-none" />

        {/* ROW 1: Right to Left (45s speed) */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-default">
          {[...Array(2)].map((_, arrayIdx) => (
            <div key={arrayIdx} className="flex gap-6 items-center px-3">
              {row1Testimonials.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#EEEEEE] rounded-2xl p-6.5 shadow-soft flex flex-col justify-between h-[210px] min-w-[340px] max-w-[350px] relative text-left"
                >
                  <div className="flex justify-between items-start">
                    {/* Stars in brand orange */}
                    <div className="flex items-center gap-0.5 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Verified badge */}
                    <span className="inline-flex items-center gap-1 bg-[#EAF7EE] text-[#2E7D32] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-inner select-none">
                      <CheckCircle className="w-3 h-3 text-[#2E7D32]" />
                      Verified
                    </span>
                  </div>

                  {/* Quote with fade truncation style */}
                  <p className="text-bodytext text-xs md:text-sm font-semibold leading-relaxed mt-4 flex-1 line-clamp-3 relative">
                    {item.quote}
                  </p>

                  {/* Avatar + Author Details */}
                  <div className="border-t border-[#EEEEEE] pt-4.5 mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary text-white font-display font-black text-xs flex items-center justify-center shrink-0">
                        {item.initials}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-display font-black text-xs text-charcoal leading-none">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-bodytext/80 font-bold mt-1">
                          {item.role}, {item.company}
                        </span>
                      </div>
                    </div>

                    {/* Industry label Tag top-right equivalent style inside card */}
                    <span className="text-[10px] font-bold text-bodytext/70 bg-lightbg px-2.5 py-0.5 rounded-md select-none shrink-0 ml-2">
                      {item.industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ROW 2: Left to Right (38s speed) */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] cursor-default">
          {[...Array(2)].map((_, arrayIdx) => (
            <div key={arrayIdx} className="flex gap-6 items-center px-3">
              {row2Testimonials.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#EEEEEE] rounded-2xl p-6.5 shadow-soft flex flex-col justify-between h-[210px] min-w-[340px] max-w-[350px] relative text-left"
                >
                  <div className="flex justify-between items-start">
                    {/* Stars in brand orange */}
                    <div className="flex items-center gap-0.5 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Verified badge */}
                    <span className="inline-flex items-center gap-1 bg-[#EAF7EE] text-[#2E7D32] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-inner select-none">
                      <CheckCircle className="w-3 h-3 text-[#2E7D32]" />
                      Verified
                    </span>
                  </div>

                  {/* Quote with fade truncation style */}
                  <p className="text-bodytext text-xs md:text-sm font-semibold leading-relaxed mt-4 flex-1 line-clamp-3 relative">
                    {item.quote}
                  </p>

                  {/* Avatar + Author Details */}
                  <div className="border-t border-[#EEEEEE] pt-4.5 mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary text-white font-display font-black text-xs flex items-center justify-center shrink-0">
                        {item.initials}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-display font-black text-xs text-charcoal leading-none">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-bodytext/80 font-bold mt-1">
                          {item.role}, {item.company}
                        </span>
                      </div>
                    </div>

                    {/* Industry label Tag */}
                    <span className="text-[10px] font-bold text-bodytext/70 bg-lightbg px-2.5 py-0.5 rounded-md select-none shrink-0 ml-2">
                      {item.industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>

      {/* Bottom redirection CTA link */}
      <div className="text-center mt-12">
        <a
          href={`/${currentLocale}/portfolio`}
          className="inline-flex items-center gap-1 text-[13px] md:text-[14px] font-black text-primary hover:underline cursor-pointer"
        >
          <span>{currentLocale === 'te' ? 'క్లయింట్ల విజయాల పూర్తి కేస్ స్టడీస్ చూడండి' : 'Read full client success case stories'}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

    </section>
  );
}
