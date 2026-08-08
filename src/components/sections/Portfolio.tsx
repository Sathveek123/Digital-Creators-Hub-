'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, Pause, X, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import { useParams } from 'next/navigation';

interface Project {
  id: number;
  title: string;
  categories: ('web' | 'seo' | 'ads' | 'ai' | 'whatsapp')[]; // Array support for tag mapping
  categoryLabel: string;
  location: string;
  beforeAfter: string;
  metric: string;
  desc: string;
  quote: string;
  author: string;
  imageUrl: string;
  slug: string;
  isVideo?: boolean;
  videoUrl?: string;
  liveSiteUrl?: string;
}

export default function Portfolio() {
  const t = useTranslations('Portfolio');
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'seo' | 'ads' | 'ai' | 'whatsapp'>('all');
  
  // Video Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Play video on modal open
  useEffect(() => {
    if (modalOpen && videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play().catch((err) => {
        console.warn('Autoplay prevented, user interaction required:', err);
        setIsPlaying(false);
      });
    }
  }, [modalOpen, currentVideo]);

  const handlePlayPauseToggle = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleUnmuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleFullscreenToggle = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(console.error);
      } else {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(console.error);
      }
    }
  };

  const handleCardClick = (e: React.MouseEvent, project: Project) => {
    if (project.videoUrl) {
      e.preventDefault();
      setCurrentVideo(project.videoUrl);
      setCurrentTitle(project.title);
      setModalOpen(true);
    }
  };

  const filterTabs = [
    { key: 'all', label: t('filterAll') },
    { key: 'web', label: currentLocale === 'te' ? 'వెబ్‌సైట్లు' : 'Websites' },
    { key: 'seo', label: currentLocale === 'te' ? 'లోకల్ SEO' : 'Local SEO' },
    { key: 'ads', label: currentLocale === 'te' ? 'యాడ్స్' : 'Paid Ads' },
    { key: 'ai', label: currentLocale === 'te' ? 'AI ఆటోమేషన్' : 'AI Automation' },
    { key: 'whatsapp', label: currentLocale === 'te' ? 'వాట్సాప్' : 'WhatsApp' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Skyline Realty',
      categories: ['web', 'ai'],
      categoryLabel: 'Real Estate | Hyderabad',
      beforeAfter: '12 inquiries/month → 53 inquiries/month',
      metric: '+340% Inquiries',
      desc: 'Lead-gen website + AI WhatsApp follow-up that converts site visitors into booked site visits automatically.',
      quote: 'Site visits doubled in the first month.',
      author: 'Ramesh K., Founder',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
      location: 'Hyderabad',
      slug: 'skyline-realty',
      isVideo: true,
      videoUrl: '/videos/DCH_Ad.mp4',
      liveSiteUrl: 'https://skyline-realty.in',
    },
    {
      id: 2,
      title: 'Curry Leaf Kitchen',
      categories: ['whatsapp', 'seo'],
      categoryLabel: 'Restaurant | Vijayawada',
      beforeAfter: '₹40k orders/mo → ₹2.3L orders/mo',
      metric: '₹2.3L Monthly Orders',
      desc: 'QR digital menu + WhatsApp order system with zero commission charges.',
      quote: 'Orders come straight to WhatsApp now, no more missed calls.',
      author: 'Lakshmi, Owner',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80',
      location: 'Vijayawada',
      slug: 'curry-leaf-kitchen',
      isVideo: true,
      videoUrl: '/videos/Haveli_Ad.mp4',
      liveSiteUrl: 'https://curryleafkitchen.in',
    },
    {
      id: 3,
      title: 'Haveli Restaurant',
      categories: ['ads', 'whatsapp'],
      categoryLabel: 'Fine Dining | Guntur',
      beforeAfter: '₹60k ad spend → 4.5x booking ROI',
      metric: '+180% Inquiries',
      desc: 'Full-funnel local video campaign + WhatsApp booking automation generating qualified reservations daily.',
      quote: 'Our weekend tables are fully booked through ads.',
      author: 'Satish C., Founder',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80',
      location: 'Guntur',
      slug: 'haveli-restaurant',
      isVideo: true,
      videoUrl: '/videos/Haveli_Ad.mp4',
      liveSiteUrl: 'https://haveli-restaurant.in',
    },
    {
      id: 4,
      title: 'Aster Dental',
      categories: ['seo', 'web'],
      categoryLabel: 'Clinic | Vizag',
      beforeAfter: 'Page 3 on Google → Top 3 in 67 days',
      metric: 'Google Top 3 Rank',
      desc: 'Local SEO + GBP optimization that pushed them past 4 bigger competitors.',
      quote: 'We stopped losing patients to the clinic down the road.',
      author: 'Dr. Aster',
      imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80',
      location: 'Vizag',
      slug: 'aster-dental',
      isVideo: true,
      videoUrl: '/videos/DCH_Ad.mp4',
      liveSiteUrl: 'https://aster-dental.in',
    },
    {
      id: 5,
      title: 'Nova Interiors',
      categories: ['ads', 'web'],
      categoryLabel: 'Retail | Guntur',
      beforeAfter: '0.8x ads ROI → 3.2x ads ROI',
      metric: '3.2× Meta Ads ROI',
      desc: 'Portfolio website + Instagram + Facebook retargeting ad funnels.',
      quote: 'Every rupee on ads is finally traceable.',
      author: 'Nithin R., Owner',
      imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=80',
      location: 'Guntur',
      slug: 'nova-interiors',
      isVideo: true,
      videoUrl: '/videos/Haveli_Ad.mp4',
      liveSiteUrl: 'https://nova-interiors.in',
    },
    {
      id: 6,
      title: 'Vista Hotels',
      categories: ['web', 'whatsapp', 'ai'],
      categoryLabel: 'Hospitality | Tirupati',
      beforeAfter: '22% direct bookings → 62% direct bookings',
      metric: '+180% Bookings',
      desc: 'Custom booking site + WhatsApp CRM that cut OTA commission costs by ₹80,000/month.',
      quote: 'We\'re not paying OTA commission anymore.',
      author: 'Priya S., GM',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80',
      location: 'Tirupati',
      slug: 'vista-hotels',
      isVideo: true,
      videoUrl: '/videos/Haveli_Ad.mp4',
      liveSiteUrl: 'https://vista-hotels.in',
    }
  ];

  // Tag mapping filter execution
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.categories.includes(activeTab));

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#FFF8F0] text-charcoal overflow-hidden select-none border-b border-border/60">
      <div className="max-w-[1440px] px-8 md:px-10 mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            OUR WORK
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal leading-tight">
            {currentLocale === 'te' ? (
              <>
                నిజమైన వ్యాపారాలు. <span className="text-primary">నిరూపించబడిన</span> ఫలితాలు.
              </>
            ) : (
              <>
                Real businesses. <br className="hidden md:inline" />
                <span className="text-primary">Verified</span> results.
              </>
            )}
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-5 mb-4" />
          <p className="text-bodytext text-base leading-relaxed max-w-lg font-medium">
            {currentLocale === 'te' 
              ? 'మేము నకిలీ డిజైన్లను చూపించము. ఇవన్నీ కస్టమర్ల అనుమతితో షేర్ చేయబడుతున్న నిజమైన క్లయింట్లు, నిజమైన నివేదికలు.'
              : 'We don\'t show mockups. These are real clients, real campaigns, real numbers — with their permission to share them.'}
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide border transition-all duration-200 cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-primary border-primary text-white shadow-sm'
                  : 'bg-white border-border hover:bg-[#FFF9F6] hover:border-primary/45 text-bodytext'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid (3-col desktop) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.a
                href={`/${currentLocale}/portfolio/${project.slug}`}
                onClick={(e) => handleCardClick(e, project)}
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-soft border border-[#EEEEEE] group hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-250 flex flex-col justify-between h-[420px] cursor-pointer"
              >
                {/* TOP 60% — IMAGE/VIDEO */}
                <div className="relative w-full h-[58%] overflow-hidden bg-lightbg shrink-0">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-400 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {project.isVideo && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white w-12 h-12 rounded-full shadow-lg z-10 flex items-center justify-center border-2 border-white animate-pulse">
                      <Play className="w-5 h-5 fill-white text-white translate-x-[1px]" />
                    </div>
                  )}

                  {/* Soft bottom-up dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center">
                    <span className="flex items-center gap-1.5 bg-white text-charcoal text-xs font-bold px-5 py-2.5 rounded-full shadow-md">
                      Play Video Case Study <Play className="w-3.5 h-3.5 fill-primary text-primary ml-1" />
                    </span>
                  </div>
                </div>

                {/* BOTTOM 40% — CONTENT */}
                <div className="p-5 flex flex-col justify-between flex-grow text-left">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase text-primary tracking-widest bg-[#FFF3EC] px-2.5 py-0.5 rounded-full w-max">
                        {project.categoryLabel}
                      </span>
                    </div>
                    <h3 className="font-display font-black text-lg text-charcoal leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-0.5 mt-auto">
                    {/* Before / After micro metrics */}
                    <span className="text-[11px] font-bold text-[#888888]">
                      {project.beforeAfter}
                    </span>
                    
                    {/* Big Hero Result Metric */}
                    <span className="font-display font-black text-2xl md:text-[26px] text-primary tracking-tight leading-tight mt-0.5">
                      {project.metric}
                    </span>
                  </div>

                  {/* BOTTOM ATTRIBUTION: Mini client quote snippet + Visit Live Site Link */}
                  <div className="border-t border-[#EEEEEE] pt-3 mt-3 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[11px] text-[#777777] font-medium leading-none">
                      <span className="truncate flex-1 pr-2">"{project.quote}"</span>
                      <span className="font-bold text-charcoal shrink-0">{project.author}</span>
                    </div>

                    {project.liveSiteUrl && (
                      <a
                        href={project.liveSiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] font-bold text-primary hover:underline flex items-center justify-end gap-1 mt-1"
                      >
                        <span>Visit Live Site ↗</span>
                      </a>
                    )}
                  </div>

                </div>

              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <div className="text-center mt-12 flex flex-col items-center gap-2">
          <a
            href={`/${currentLocale}/portfolio`}
            className="group relative inline-flex items-center justify-center bg-primary hover:bg-[#e04c10] text-white font-bold text-[15px] px-8 py-3.5 rounded-full shadow-sm hover:scale-[1.02] transition-all duration-200"
          >
            <span>{currentLocale === 'te' ? 'అన్ని కేస్ స్టడీస్ చూడండి →' : 'View All Case Studies →'}</span>
          </a>
          <span className="text-[11px] text-[#888888] font-semibold mt-1">
            {currentLocale === 'te' ? 'మేము సేవలు అందించే ప్రతి రంగంలో 12+ కేస్ స్టడీస్' : '12+ more case studies across every industry we serve'}
          </span>
        </div>

      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md"
          >
            {/* Tap outside to close modal */}
            <div 
              className="absolute inset-0 z-0 cursor-pointer"
              onClick={() => setModalOpen(false)}
            />

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-[900px] bg-[#111111] rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10 text-left flex flex-col"
            >
              {/* Top Header controls bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#1A1A1A] text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-display font-bold text-xs sm:text-sm text-white tracking-tight">
                    {currentTitle} — HD Video Case Reel
                  </span>
                  <span className="bg-primary/20 text-primary border border-primary/30 text-[10px] font-black px-2 py-0.5 rounded-md hidden sm:inline">
                    1080p HD
                  </span>
                </div>
                
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  aria-label="Close Showcase Modal"
                >
                  <X className="w-4 h-4" />
                  <span>{currentLocale === 'te' ? 'మూసివేయి ✕' : 'Close ✕'}</span>
                </button>
              </div>

              {/* Video Player wrapper (100% uncropped object-contain) */}
              <div className="relative w-full h-[60vh] max-h-[520px] bg-black flex items-center justify-center overflow-hidden">
                <video
                  ref={videoRef}
                  src={currentVideo}
                  className="w-full h-full object-contain"
                  autoPlay
                  muted={isMuted}
                  playsInline
                  onClick={handlePlayPauseToggle}
                />

                {/* Floating Muted Hint */}
                {isMuted && (
                  <button
                    onClick={handleUnmuteToggle}
                    className="absolute top-4 left-4 bg-primary text-white text-xs font-black px-3.5 py-2 rounded-full shadow-xl flex items-center gap-2 cursor-pointer border border-white/20 animate-bounce"
                  >
                    <VolumeX className="w-4 h-4" />
                    <span>{currentLocale === 'te' ? 'సౌండ్ ఆన్ చేయడానికి ఇక్కడ నొక్కండి! 🔊' : 'Muted · Click for Sound ON 🔊'}</span>
                  </button>
                )}
              </div>

              {/* Master Control Bar */}
              <div className="bg-[#1A1A1A] border-t border-white/10 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 text-white">
                
                {/* Left Controls: Play/Pause + Sound ON/OFF */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePlayPauseToggle}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-primary" /> : <Play className="w-4 h-4 text-primary fill-primary" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  <button
                    onClick={handleUnmuteToggle}
                    className={`font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-2 transition-all cursor-pointer shadow-md ${
                      isMuted 
                        ? 'bg-primary hover:bg-[#e04d15] text-white border border-primary' 
                        : 'bg-[#16A34A] hover:bg-[#15803D] text-white border border-[#16A34A]'
                    }`}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    <span>{isMuted ? (currentLocale === 'te' ? 'సౌండ్ ఆన్ (Sound ON)' : 'Sound ON 🔊') : (currentLocale === 'te' ? 'సౌండ్ ఆఫ్ (Sound OFF)' : 'Sound OFF 🔇')}</span>
                  </button>
                </div>

                {/* Right Controls: Full Screen + Close */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleFullscreenToggle}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                    <span>{isFullscreen ? 'Exit Full Screen' : 'Full Screen ⛶'}</span>
                  </button>

                  <button
                    onClick={() => setModalOpen(false)}
                    className="bg-white/10 hover:bg-red-600/90 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                    <span>Close</span>
                  </button>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
