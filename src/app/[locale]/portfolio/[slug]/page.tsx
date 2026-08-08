'use client';

import { useState, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  ArrowLeft, Check, ShieldAlert, Play, Pause, Volume2, VolumeX, Maximize, 
  Sparkles, TrendingUp, Clock, CheckCircle2, Building2, MapPin
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface CaseStudyData {
  title: string;
  industry: string;
  city: string;
  bigResult: string;
  timeframe: string;
  challenge: string;
  solution: string;
  videoUrl: string;
  beforeAfter: { label: string; before: string; after: string }[];
  quote: string;
  quoteAuthor: string;
  nextStep: string;
  imageUrl: string;
}

const caseStudiesMap: Record<string, CaseStudyData> = {
  'skyline-realty': {
    title: 'Skyline Realty',
    industry: 'Real Estate',
    city: 'Hyderabad',
    bigResult: '+340% More Qualified Leads',
    timeframe: '67 Days',
    challenge: 'Skyline was generating inquiries via Meta lead forms, but over 85% of leads were unqualified, had incorrect numbers, or never picked up follow-up calls. The sales team was wasting hours chasing dead ends.',
    solution: 'We built a bespoke custom landing page optimized for real estate buyers. We then deployed an automated WhatsApp AI Qualify Assistant that texts leads within 10 seconds of form submission, qualifies them by budget, and hooks them into booking visits.',
    videoUrl: '/videos/DCH_Ad.mp4',
    beforeAfter: [
      { label: 'Weekly Leads', before: '15 leads', after: '65 leads' },
      { label: 'Lead Contact Rate', before: '25%', after: '92%' },
      { label: 'Visits Booked', before: '2 per month', after: '18 per month' }
    ],
    quote: 'DCH transformed our lead generation. The AI WhatsApp assistant alone handles the filtering, letting our sales team focus only on buyers who are ready to visit sites.',
    quoteAuthor: 'Ramesh Kumar, Marketing Director',
    nextStep: 'Deploying dynamic ad landing pages for three new villa ventures in Gachibowli.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'
  },
  'curry-leaf-kitchen': {
    title: 'Curry Leaf Kitchen',
    industry: 'Restaurant & F&B',
    city: 'Vijayawada',
    bigResult: '₹2.3L Monthly Direct Orders',
    timeframe: '45 Days',
    challenge: 'Curry Leaf Kitchen was losing over 25% of their online sales margins to aggregator platforms like Swiggy and Zomato. They had no way of directly marketing to their repeat customers.',
    solution: 'We deployed DCH Smart QR table codes and integrated a custom-coded WhatsApp Ordering Bot. Customers scan, view the interactive menu, order, and track deliveries directly inside WhatsApp with zero aggregator commission fees.',
    videoUrl: '/videos/Haveli_Ad.mp4',
    beforeAfter: [
      { label: 'Direct Order Volume', before: '₹12,000/mo', after: '₹2,30,000/mo' },
      { label: 'Aggregator Fees Saved', before: '₹0', after: '₹55,000/mo' },
      { label: 'Direct Review Count', before: '42 reviews', after: '520 reviews' }
    ],
    quote: 'Aggregator fees were killing our restaurant margins. DCH helped us set up direct orders on WhatsApp. Our customers love the speed, and we save thousands in commissions every single month.',
    quoteAuthor: 'Priya Lakshmi, Owner',
    nextStep: 'Integrating automated broadcast alerts for weekend biryani specials.',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80'
  },
  'aster-dental': {
    title: 'Aster Dental',
    industry: 'Clinic & Medical',
    city: 'Vizag',
    bigResult: 'Google Map Top 3 Rank',
    timeframe: '67 Days',
    challenge: 'Aster Dental was invisible in local searches for dentist vizag. Four larger corporate clinics dominated Google Maps, capturing all local walk-ins and phone calls.',
    solution: 'We ran local keyword domination maps campaigns. We re-optimized their Google Business Profile, set up automatic review generation triggers post-patient visits, and built local city citation signals.',
    videoUrl: '/videos/Haveli_Ad.mp4',
    beforeAfter: [
      { label: 'Google Search Rank', before: '#18', after: '#2' },
      { label: 'Monthly Direct Calls', before: '8 calls', after: '120+ calls' },
      { label: 'New Patient Bookings', before: '3/mo', after: '45/mo' }
    ],
    quote: 'We went from page two of Google maps straight into the Top 3. The incoming call volume increased so much we had to hire another receptionist just to handle bookings.',
    quoteAuthor: 'Dr. Aravind Rao, Founder',
    nextStep: 'Deploying Facebook/Instagram retargeting ads focusing on dental implant listings.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80'
  },
  'nova-interiors': {
    title: 'Nova Interiors',
    industry: 'Interior Design',
    city: 'Guntur',
    bigResult: '3.2× Return on Meta Ad Spend',
    timeframe: '30 Days',
    challenge: 'Nova Interiors had a beautiful local showroom, but low local footfalls. Previous Meta campaigns generated likes and shares but zero high-ticket interior design inquiries.',
    solution: 'We designed a premium portfolio site showcasing actual local designs, and set up hyper-targeted Instagram/Facebook lead generation ads targeting homeowners in newly completed premium apartment blocks in Guntur.',
    videoUrl: '/videos/DCH_Ad.mp4',
    beforeAfter: [
      { label: 'Monthly Lead Volume', before: '2 leads', after: '38 leads' },
      { label: 'Ad ROI Ratio', before: '0.5x', after: '3.2x' },
      { label: 'Average Project Value', before: '₹5L', after: '₹14L' }
    ],
    quote: 'We tried social media ads before but got empty comments. DCH targets only homeowners in specific premium complexes. The leads we get now are highly qualified.',
    quoteAuthor: 'Suresh Reddy, Owner',
    nextStep: 'Integrating video walkthrough reels into Meta ad retargeting loops.',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80'
  },
  'vista-hotels': {
    title: 'Vista Hotels',
    industry: 'Hospitality',
    city: 'Tirupati',
    bigResult: 'Direct Bookings ↑ 180%',
    timeframe: '90 Days',
    challenge: 'Vista Hotels was heavily reliant on Booking.com and Agoda, paying up to 18% commission on bookings. Direct reservations via their old template website were nearly non-existent.',
    solution: 'We built a bespoke custom reservation system in Next.js, and connected a WhatsApp CRM to automate guest confirmations, room service details, and feedback alerts.',
    videoUrl: '/videos/DCH_Ad.mp4',
    beforeAfter: [
      { label: 'Direct Bookings Share', before: '8%', after: '42%' },
      { label: 'Monthly OTA Costs', before: '₹95,000', after: '₹15,000' },
      { label: 'Guest Feedback Rating', before: '4.1/5', after: '4.7/5' }
    ],
    quote: 'Our reliance on OTAs dropped dramatically. The custom booking site built by DCH handles payments and WhatsApp confirmation codes smoothly. We save over ₹80k a month.',
    quoteAuthor: 'Anita Varma, General Manager',
    nextStep: 'Setting up automated WhatsApp broadcast loyalty offers for repeat guests.',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80'
  },
  'brightpath-edtech': {
    title: 'BrightPath EdTech',
    industry: 'Education & Coaching',
    city: 'Amaravati',
    bigResult: '₹12L Course Revenue',
    timeframe: '90 Days',
    challenge: 'BrightPath wanted to sell professional entrance courses, but student acquisition costs via standard calls were too expensive and manual tracking was highly disorganized.',
    solution: 'We designed high-conversion landing pages, ran targeted Google and Facebook search ads, and deployed a localized WhatsApp enrollment bot that pre-screens student interests.',
    videoUrl: '/videos/Haveli_Ad.mp4',
    beforeAfter: [
      { label: 'Course Registrations', before: '12 enrollments', after: '140 enrollments' },
      { label: 'Cost Per Enrollment', before: '₹4,500', after: '₹1,200' },
      { label: 'Marketing ROI', before: '1.2x', after: '6.4x' }
    ],
    quote: 'We generated ₹12 lakhs in sales in under three months with DCH. The campaign setup, landing pages, and enrollment bots work together as a 24/7 sales engine.',
    quoteAuthor: 'Kiran Babu, CEO',
    nextStep: 'Expanding student retargeting funnels across three adjacent districts.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80'
  }
};

export default function PortfolioSlugPage() {
  const params = useParams();
  const slug = (params?.slug as string) || '';
  const locale = (params?.locale as string) || 'en';
  const study = caseStudiesMap[slug];

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!study) {
    return (
      <div className="min-h-screen bg-white text-charcoal flex flex-col justify-between items-center text-center p-12">
        <Navbar />
        <div className="my-auto flex flex-col items-center gap-4">
          <ShieldAlert className="w-16 h-16 text-primary animate-pulse" />
          <h1 className="font-display font-black text-2xl">Case Study Not Found</h1>
          <p className="text-[#666666] text-sm max-w-xs">We could not find this specific client portfolio history.</p>
          <Link href={`/${locale}/#portfolio`} className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
            Back to Portfolio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-charcoal antialiased flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-24">
        
        {/* Page Hero */}
        <section className="py-16 md:py-20 bg-[#FAFAFA] border-b border-[#EEEEEE] text-left select-none">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-6">
            <Link 
              href={`/${locale}/portfolio`} 
              className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:underline w-max"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Case Studies
            </Link>

            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase text-primary tracking-wider bg-[#FFF3EC] border border-primary/20 px-3 py-1 rounded-full">
                  {study.industry}
                </span>
                <span className="text-xs font-bold text-[#666666] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> {study.city}
                </span>
              </div>

              <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal leading-tight mt-2">
                {study.title} Case Study
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 border-t border-[#EEEEEE] pt-6">
              <div className="bg-white border border-[#EEEEEE] p-5 rounded-2xl shadow-xs">
                <span className="text-[10px] uppercase font-extrabold text-[#888888] tracking-wider block">The Primary Outcome</span>
                <span className="font-display font-black text-2xl md:text-3xl text-primary block mt-1">{study.bigResult}</span>
              </div>
              <div className="bg-white border border-[#EEEEEE] p-5 rounded-2xl shadow-xs">
                <span className="text-[10px] uppercase font-extrabold text-[#888888] tracking-wider block">Execution Timeline</span>
                <span className="font-display font-black text-2xl md:text-3xl text-[#16A34A] block mt-1">{study.timeframe}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution Section */}
        <section className="py-16 md:py-20 bg-white border-b border-[#EEEEEE]">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="flex flex-col gap-4 bg-[#FAFAFA] border border-[#EEEEEE] p-6 md:p-8 rounded-2xl shadow-xs">
              <span className="text-xs font-black uppercase text-[#EF4444] bg-[#FEF2F2] px-3 py-1 rounded-full w-max border border-[#EF4444]/20">
                The Initial Challenge
              </span>
              <h2 className="font-display font-black text-xl md:text-2xl text-charcoal">Bottlenecks & Friction</h2>
              <p className="text-[#555555] text-sm md:text-base leading-relaxed">{study.challenge}</p>
            </div>

            <div className="flex flex-col gap-4 bg-[#FFF3EC]/50 border border-primary/20 p-6 md:p-8 rounded-2xl shadow-xs">
              <span className="text-xs font-black uppercase text-[#16A34A] bg-[#EEFBF3] px-3 py-1 rounded-full w-max border border-[#16A34A]/20">
                DCH Engineered Solution
              </span>
              <h2 className="font-display font-black text-xl md:text-2xl text-charcoal">System Architecture</h2>
              <p className="text-[#555555] text-sm md:text-base leading-relaxed">{study.solution}</p>
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="py-16 bg-[#FAFAFA] border-b border-[#EEEEEE]">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-6 text-left">
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-black uppercase text-primary tracking-widest">
                  Live Project Video Showcase
                </span>
                <h2 className="font-display font-black text-2xl md:text-3xl text-charcoal">
                  Watch the Results Reel
                </h2>
              </div>
              <span className="bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/30 text-xs font-bold px-3 py-1 rounded-full">
                ✓ Verified Client Campaign
              </span>
            </div>

            {/* Custom Interactive Video Player */}
            <div className="relative w-full aspect-video max-h-[520px] bg-black rounded-2xl overflow-hidden shadow-xl border border-[#EEEEEE] group flex items-center justify-center">
              <video
                ref={videoRef}
                src={study.videoUrl}
                className="w-full h-full object-contain"
                playsInline
                muted={isMuted}
                onEnded={() => setIsPlaying(false)}
              />

              {/* Overlay Play Button when Paused */}
              {!isPlaying && (
                <div 
                  onClick={togglePlay}
                  className="absolute inset-0 bg-charcoal/40 backdrop-blur-xs flex items-center justify-center cursor-pointer transition-opacity group-hover:bg-charcoal/30"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                </div>
              )}

              {/* Bottom Custom Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal/80 backdrop-blur-md rounded-xl p-3 flex justify-between items-center text-white border border-white/10 z-10">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="bg-primary hover:bg-[#e04d15] text-white text-xs font-extrabold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    <span>{isPlaying ? 'Pause' : 'Play Video'}</span>
                  </button>

                  <button
                    onClick={toggleMute}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-primary" /> : <Volume2 className="w-4 h-4 text-[#16A34A]" />}
                    <span>{isMuted ? 'Muted 🔊' : 'Sound ON 🔊'}</span>
                  </button>
                </div>

                <span className="text-[11px] font-bold text-white/80 hidden sm:inline">
                  {study.title} Video Reel (1080p HD)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Before / After Metrics Comparison */}
        <section className="py-16 md:py-20 bg-white border-b border-[#EEEEEE]">
          <div className="max-w-[1200px] mx-auto px-6 text-left flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-black uppercase text-primary tracking-widest">
                Data Proof
              </span>
              <h2 className="font-display font-black text-2xl md:text-3xl text-charcoal">
                Performance Metrics Before & After
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {study.beforeAfter.map((metric, idx) => (
                <div key={idx} className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-2xl p-6 shadow-xs flex flex-col justify-between gap-4">
                  <span className="text-xs font-black uppercase text-[#888888] tracking-wider">{metric.label}</span>
                  <div className="flex items-center justify-between border-t border-[#EEEEEE] pt-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-extrabold text-[#888888]">Before DCH</span>
                      <span className="font-display font-bold text-sm text-[#EF4444] line-through mt-0.5">{metric.before}</span>
                    </div>
                    <span className="text-primary font-black text-lg">➔</span>
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] uppercase font-extrabold text-[#16A34A]">After DCH</span>
                      <span className="font-display font-black text-lg text-[#16A34A] mt-0.5">{metric.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonial Quote */}
        <section className="py-16 bg-[#FFF8F0] border-b border-primary/20 select-none text-center">
          <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-4">
            <span className="text-4xl text-primary font-serif select-none">“</span>
            <blockquote className="font-display font-bold text-lg md:text-2xl text-charcoal leading-relaxed -mt-4">
              {study.quote}
            </blockquote>
            <cite className="font-display font-extrabold text-xs uppercase tracking-widest text-[#666666] block not-italic mt-2">
              — {study.quoteAuthor}
            </cite>
          </div>
        </section>

        {/* Conversion CTA */}
        <section className="py-16 md:py-24 bg-white text-center select-none">
          <div className="max-w-4xl mx-auto px-6 bg-charcoal text-white rounded-3xl p-10 md:p-16 flex flex-col items-center gap-6 shadow-xl">
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight">
              Ready to scale your business with custom systems?
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-lg">
              Book a free 15-minute growth consultation. We will audit your current website & marketing setup for free.
            </p>
            <a
              href={`/${locale}/#contact`}
              className="bg-primary hover:bg-[#e04d15] text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Get Your Free Audit Now →
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
