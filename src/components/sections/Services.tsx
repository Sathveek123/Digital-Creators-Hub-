'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Globe, Share2, Megaphone, Cpu, QrCode, MessageSquareCode, 
  Layers, Check, ArrowRight, Smartphone, Palette, Zap, Bot, PhoneCall, 
  Link, LayoutGrid, Cloud, ShieldCheck, Mail, Percent, TrendingUp, Code, 
  Gauge, HelpCircle 
} from 'lucide-react';
import { useParams } from 'next/navigation';

interface ServiceItem {
  id: number;
  category: 'web' | 'ai' | 'marketing' | 'trading';
  title: string;
  desc: string;
  isPopular?: boolean;
  features: string[];
  price: string;
  icon: any;
}

export default function Services() {
  const t = useTranslations('Services');
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'ai' | 'marketing' | 'trading'>('all');
  const [showAllVisible, setShowAllVisible] = useState(false);

  // Tab filter items
  const tabs = [
    { key: 'all', label: currentLocale === 'te' ? 'అన్నీ' : 'All' },
    { key: 'web', label: currentLocale === 'te' ? 'వెబ్ & యాప్' : 'Web & App' },
    { key: 'ai', label: currentLocale === 'te' ? 'AI & ఆటోమేషన్' : 'AI & Automation' },
    { key: 'marketing', label: currentLocale === 'te' ? 'మార్కెటింగ్' : 'Marketing' },
    { key: 'trading', label: currentLocale === 'te' ? 'ట్రేడింగ్' : 'Trading' },
  ];

  // Complete catalog of 25 services
  const servicesList: ServiceItem[] = [
    // Web & App
    {
      id: 1,
      category: 'web',
      title: currentLocale === 'te' ? 'కస్టమ్ వెబ్‌సైట్ డెవలప్‌మెంట్' : 'Custom Website Development',
      desc: currentLocale === 'te' ? 'మీ వ్యాపారం కోసం నిజంగా సంపాదించే వెబ్‌సైట్' : 'A website that actually earns for you',
      isPopular: true,
      features: ['Custom Design, Zero Templates', 'Mobile-First + SEO Optimized', 'Lead Capture & WhatsApp Integration'],
      price: 'Starting ₹14,999 one-time',
      icon: Globe,
    },
    {
      id: 2,
      category: 'web',
      title: currentLocale === 'te' ? 'మొబైల్ యాప్ డెవలప్‌మెంట్' : 'Mobile App Development',
      desc: currentLocale === 'te' ? 'రియల్ యూజర్స్ కోసం ఆండ్రాయిడ్ & ఐఓఎస్ యాప్స్' : 'Android & iOS apps built for real users',
      features: ['Native or Cross-Platform Build', 'App Store + Play Store Launch', 'Push Notifications & Analytics'],
      price: 'Starting ₹49,999',
      icon: Smartphone,
    },
    {
      id: 3,
      category: 'web',
      title: currentLocale === 'te' ? 'UI/UX డిజైన్ & బ్రాండింగ్' : 'UI/UX Design & Branding',
      desc: currentLocale === 'te' ? 'నమ్మకాన్ని కలిగించే ప్రొఫెషనల్ డిజైన్స్' : 'Design that builds trust before a word is read',
      features: ['Full Brand Identity + Logo System', 'Website/App UI Design (Figma)', 'Design System & Style Guide'],
      price: 'Starting ₹9,999',
      icon: Palette,
    },
    {
      id: 4,
      category: 'web',
      title: currentLocale === 'te' ? 'వెబ్‌సైట్ స్పీడ్ ఆప్టిమైజేషన్' : 'Website Speed Optimization',
      desc: currentLocale === 'te' ? 'లోడింగ్ స్లోగా ఉంటే కస్టమర్లు తగ్గిపోతారు' : 'Every second of load time costs you customers',
      features: ['Core Web Vitals Optimization', 'Image/Asset & Code Optimization', 'Hosting & CDN Setup'],
      price: 'Starting ₹4,999',
      icon: Zap,
    },

    // AI & Automation
    {
      id: 5,
      category: 'ai',
      title: currentLocale === 'te' ? 'AI చాట్‌బాట్‌లు & AI ఏజెంట్లు' : 'AI Chatbots & AI Agents',
      desc: currentLocale === 'te' ? 'విశ్రాంతి లేకుండా పనిచేసే 24/7 సిబ్బంది' : 'A 24/7 team member that never sleeps',
      isPopular: true,
      features: ['Custom-Trained on Your Business Data', 'Website + WhatsApp + Instagram', 'Lead Qualification & Booking'],
      price: 'Starting ₹12,999',
      icon: Bot,
    },
    {
      id: 6,
      category: 'ai',
      title: currentLocale === 'te' ? 'వాట్సాప్ ఆటోమేషన్ & బాట్స్' : 'WhatsApp Automation & Bots',
      desc: currentLocale === 'te' ? 'మీ బెస్ట్ సేల్స్ పర్సన్, ఎల్లప్పుడూ ఆన్‌లైన్‌లో' : 'Your best salesperson, always online',
      features: ['Auto Replies 24/7', 'Broadcast & Bulk Campaigns', 'Zero-Commission Order System'],
      price: 'Starting ₹5,999/month',
      icon: MessageSquareCode,
    },
    {
      id: 7,
      category: 'ai',
      title: currentLocale === 'te' ? 'AI వాయిస్ బాట్స్ & కాలింగ్ ఏజెంట్లు' : 'AI Voice Bots & Calling Agents',
      desc: currentLocale === 'te' ? 'కాల్స్ మాట్లాడి బుకింగ్స్ చేసే స్మార్ట్ AI' : 'AI that calls, answers, and books for you',
      features: ['Inbound/Outbound Call Automation', 'Natural Voice AI (Multi-language)', 'CRM-Synced Call Logs'],
      price: 'Starting ₹14,999',
      icon: PhoneCall,
    },
    {
      id: 8,
      category: 'ai',
      title: currentLocale === 'te' ? 'వర్క్‌ఫ్లో ఆటోమేషన్ (Make, Zapier)' : 'Workflow Automation',
      desc: currentLocale === 'te' ? 'టూల్స్‌ను అనుసంధానించి మ్యాన్యువల్ వర్క్‌ను తగ్గించండి' : 'Connect your tools so nothing needs manual work',
      features: ['Custom Automation Pipelines', 'Tool-to-Tool Data Sync', 'Error Alerts & Monitoring'],
      price: 'Starting ₹7,999',
      icon: Link,
    },
    {
      id: 9,
      category: 'ai',
      title: currentLocale === 'te' ? 'CRM & మార్కెటింగ్ ఆటోమేషన్' : 'CRM & Marketing Automation',
      desc: currentLocale === 'te' ? 'మీ మొత్తం బిజినెస్ ఒకే స్క్రీన్‌లో చూడండి' : 'See your entire business in one screen',
      features: ['Custom CRM Build', 'Sales Pipeline Tracker', 'Marketing Analytics Dashboard'],
      price: 'Starting ₹19,999 setup',
      icon: LayoutGrid,
    },
    {
      id: 10,
      category: 'ai',
      title: currentLocale === 'te' ? 'క్లౌడ్ ఇన్‌ఫ్రాస్ట్రక్చర్ & డెవాప్స్' : 'Cloud Infrastructure & DevOps',
      desc: currentLocale === 'te' ? 'ట్రాఫిక్ ఎంతున్నా డౌన్ అవ్వని సిస్టమ్స్' : 'Systems that stay up, no matter the traffic',
      features: ['Cloud Setup (AWS/GCP/Azure)', 'CI/CD Pipeline Configuration', 'Monitoring & Auto-Scaling'],
      price: 'Starting ₹9,999',
      icon: Cloud,
    },
    {
      id: 11,
      category: 'ai',
      title: currentLocale === 'te' ? 'సైబర్ సెక్యూరిటీ సొల్యూషన్స్' : 'Cybersecurity Solutions',
      desc: currentLocale === 'te' ? 'హ్యాకింగ్ ముప్పుల నుండి మీ డేటాను రక్షించండి' : 'Protect your business before it\'s a headline',
      features: ['Security Audits & Pentesting', 'Data Encryption & Access Control', 'Compliance & Incident Plans'],
      price: 'Starting ₹12,999',
      icon: ShieldCheck,
    },

    // Marketing
    {
      id: 12,
      category: 'marketing',
      title: currentLocale === 'te' ? 'గూగుల్ బిజినెస్ ప్రొఫైల్ (GBP)' : 'Google Business Profile',
      desc: currentLocale === 'te' ? 'కస్టమర్ల శోధనలలో స్థానికంగా మొదట నిలవండి' : 'Get found when locals search you',
      isPopular: true,
      features: ['Local Top 3 Ranking', 'Review Management Systems', 'GBP Posts & Updates'],
      price: 'Starting ₹3,999/month',
      icon: MapPin,
    },
    {
      id: 13,
      category: 'marketing',
      title: currentLocale === 'te' ? 'సోషల్ మీడియా మేనేజ్‌మెంట్' : 'Social Media Management',
      desc: currentLocale === 'te' ? 'ప్రతిరోజు మీ బ్రాండ్ పోస్టింగ్‌లు' : 'Your brand, posting consistently every day',
      features: ['30 Posts/Month (Feed + Stories)', 'Reels Content + Editing', 'Community Replies & DM Check'],
      price: 'Starting ₹6,999/month',
      icon: Share2,
    },
    {
      id: 14,
      category: 'marketing',
      title: currentLocale === 'te' ? 'ఫేస్‌బుక్ & ఇన్‌స్టాగ్రామ్ యాడ్స్' : 'Facebook & Instagram Ads',
      desc: currentLocale === 'te' ? 'క్లిక్స్ మాత్రమే కాదు, రియల్ కస్టమర్లను తెచ్చే యాడ్స్' : 'Ads that bring real customers, not just clicks',
      features: ['A/B Tested Ad Creatives', 'Audience Targeting & Retargeting', 'Weekly Performance Reports'],
      price: 'Starting ₹4,999/month + ad spend',
      icon: Megaphone,
    },
    {
      id: 15,
      category: 'marketing',
      title: currentLocale === 'te' ? 'గూగుల్ యాడ్స్ మేనేజ్‌మెంట్' : 'Google Ads Management',
      desc: currentLocale === 'te' ? 'గూగుల్‌లో కొనుగోలుకు సిద్ధంగా ఉన్న కస్టమర్ల కోసం' : 'Show up exactly when they\'re searching to buy',
      features: ['Search + Display + Shopping Ad', 'Keyword & Competitor Research', 'Conversion Tracking Setup'],
      price: 'Starting ₹5,999/month + ad spend',
      icon: Layers,
    },
    {
      id: 16,
      category: 'marketing',
      title: currentLocale === 'te' ? 'లీడ్ జనరేషన్ సిస్టమ్స్' : 'Lead Generation Systems',
      desc: currentLocale === 'te' ? 'స్థిరమైన కస్టమర్ విచారణల పైప్‌లైన్' : 'A steady pipeline, not random inquiries',
      features: ['Landing Pages Built to Convert', 'Multi-Channel Lead Capture', 'Automated Lead Scoring'],
      price: 'Starting ₹8,999',
      icon: Layers,
    },
    {
      id: 17,
      category: 'marketing',
      title: currentLocale === 'te' ? 'ఈమెయిల్ మార్కెటింగ్ ఆటోమేషన్' : 'Email Marketing Automation',
      desc: currentLocale === 'te' ? 'పాత కస్టమర్లను మళ్లీ కొనుగోలుదారులుగా మార్చండి' : 'Turn past customers into repeat customers',
      features: ['Automated Drip Campaigns', 'Segmentation & Personalization', 'Open/Click Performance Reports'],
      price: 'Starting ₹3,999/month',
      icon: Mail,
    },
    {
      id: 18,
      category: 'marketing',
      title: currentLocale === 'te' ? 'కన్వర్షన్ రేట్ ఆప్టిమైజేషన్' : 'Conversion Rate Optimization',
      desc: currentLocale === 'te' ? 'ఉన్న ట్రాఫిక్ నుండి ఎక్కువ అమ్మకాలు పొందండి' : 'More sales from the traffic you already have',
      features: ['Funnel & Heatmap Analysis', 'A/B Testing on Key Pages', 'Copy & UX Improvements'],
      price: 'Starting ₹6,999',
      icon: Percent,
    },
    {
      id: 19,
      category: 'marketing',
      title: currentLocale === 'te' ? 'స్మార్ట్ క్యూఆర్ కోడ్ సొల్యూషన్స్' : 'Smart QR Code Solutions',
      desc: currentLocale === 'te' ? 'డిజిటల్ మెనూలు మరియు ఇన్‌స్టంట్ రివ్యూస్' : 'Smart menus and instant reviews',
      features: ['Digital Menu QR System', 'Google Review Automation', 'WhatsApp Order Integration'],
      price: 'Starting ₹2,999 setup',
      icon: QrCode,
    },

    // Trading Solutions
    {
      id: 20,
      category: 'trading',
      title: currentLocale === 'te' ? 'ట్రేడింగ్‌వ్యూ పైన్ స్క్రిప్ట్ డెవలప్‌మెంట్' : 'TradingView Pine Script Development',
      desc: currentLocale === 'te' ? 'మీ స్ట్రాటజీల కోసం అనుకూల ఇండికేటర్స్' : 'Custom indicators built to your exact strategy',
      features: ['Custom Indicators & Overlays', 'Alerts & Signal Automation', 'Strategy Scripting (Pine v5)'],
      price: 'Starting ₹6,999',
      icon: Code,
    },
    {
      id: 21,
      category: 'trading',
      title: currentLocale === 'te' ? 'ట్రేడింగ్ బాట్స్ డెవలప్‌మెంట్' : 'Trading Bots Development',
      desc: currentLocale === 'te' ? 'భావోద్వేగాలు లేని ఆటోమేటెడ్ ట్రేడింగ్' : 'Automated execution, zero emotional trading',
      features: ['Broker API Integration', 'Risk Management Rules Built-In', '24/7 Automated Execution'],
      price: 'Starting ₹19,999',
      icon: Cpu,
    },
    {
      id: 22,
      category: 'trading',
      title: currentLocale === 'te' ? 'ఆటోమేటెడ్ ట్రేడింగ్ స్ట్రాటజీలు' : 'Automated Trading Strategies',
      desc: currentLocale === 'te' ? 'మార్కెట్ చూస్తూ కూర్చోవాల్సిన అవసరం లేదు' : 'Your strategy, running without you watching charts',
      features: ['Strategy Logic Programming', 'Multi-Timeframe Execution', 'Live Deployment & Monitoring'],
      price: 'Starting ₹14,999',
      icon: TrendingUp,
    },
    {
      id: 23,
      category: 'trading',
      title: currentLocale === 'te' ? 'కస్టమ్ ఇండికేటర్స్, సిగ్నల్స్ & అలర్ట్స్' : 'Custom Indicators, Signals & Alerts',
      desc: currentLocale === 'te' ? 'మార్కెట్ శబ్దాన్ని దాటి అసలైన సిగ్నల్స్' : 'See the signal, not the noise',
      features: ['Custom Technical Indicators', 'Telegram/WhatsApp Signal Alerts', 'Multi-Asset Support'],
      price: 'Starting ₹4,999',
      icon: Gauge,
    },
    {
      id: 24,
      category: 'trading',
      title: currentLocale === 'te' ? 'స్ట్రాటజీ బ్యాక్‌టెస్టింగ్ & ఆప్టిమైజేషన్' : 'Strategy Backtesting & Optimization',
      desc: currentLocale === 'te' ? 'నిజమైన పెట్టుబడి పెట్టే ముందే చెక్ చేసుకోండి' : 'Know it works before you risk real capital',
      features: ['Historical Data Backtesting', 'Performance & Drawdown Reports', 'Parameter Optimization'],
      price: 'Starting ₹7,999',
      icon: HelpCircle,
    },
    {
      id: 25,
      category: 'trading',
      title: currentLocale === 'te' ? 'AI-పవర్డ్ ట్రేడింగ్ సిస్టమ్స్' : 'AI-Powered Trading Systems',
      desc: currentLocale === 'te' ? 'మార్కెట్ స్ట్రాటజీతో మెషిన్ లెర్నింగ్' : 'Machine learning meets market strategy',
      features: ['ML-Based Pattern Recognition', 'Adaptive Strategy Logic', 'Continuous Model Retraining'],
      price: 'Starting ₹24,999',
      icon: Bot,
    },
  ];

  // Filter based on active tab
  const filteredServices = activeTab === 'all'
    ? servicesList
    : servicesList.filter(s => s.category === activeTab);

  // For the default tab, limit to 6 initially unless "Show More" is clicked
  const displayServices = (activeTab === 'all' && !showAllVisible)
    ? filteredServices.slice(0, 6)
    : filteredServices;

  // Render proper icon tints based on category
  const getIconContainerClass = (category: string) => {
    switch (category) {
      case 'web': return 'bg-[#FFF3EC] text-primary';
      case 'ai': return 'bg-[#EEF7FF] text-[#2563EB]';
      case 'marketing': return 'bg-[#EEFBF3] text-[#16A34A]';
      case 'trading': return 'bg-[#FFF8E5] text-[#D97706]';
      default: return 'bg-[#FFF3EC] text-primary';
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAFAFA] text-charcoal relative select-none border-b border-border/60">
      <div className="max-w-[1440px] px-8 md:px-10 mx-auto w-full">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
              WHAT WE BUILD FOR YOU
            </span>
            
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-[1.1] text-charcoal">
              One partner. <br />
              <span className="text-primary">Every digital weapon you need.</span>
            </h2>
            
            <p className="text-bodytext mt-5 text-base md:text-[17px] leading-relaxed font-medium">
              From websites and AI chatbots to WhatsApp automation and trading systems — we build the complete tech stack behind your growth, under one roof, with one point of contact.
            </p>
          </div>

          <div className="shrink-0 flex text-left lg:self-end">
            <a
              href={`/${currentLocale}/services`}
              className="inline-flex items-center justify-center border border-border bg-white hover:border-primary/50 hover:bg-[#FFF9F6] text-charcoal hover:text-primary font-bold text-sm px-6 py-3 rounded-lg transition-all duration-200"
            >
              <span>See All Services →</span>
            </a>
          </div>
        </div>

        {/* Tab Selection Filter System */}
        <div className="flex flex-wrap gap-2 justify-start lg:justify-center mb-12 border-b border-border/50 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key as any);
                setShowAllVisible(false); // Reset show all status
              }}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide border transition-all duration-200 cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-primary border-primary text-white shadow-sm'
                  : 'bg-white border-border hover:bg-lightbg text-bodytext'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Small Intro notice specifically for Trading category */}
        {activeTab === 'trading' && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left md:text-center text-xs md:text-sm font-bold text-[#888888] mb-8"
          >
            For traders and fintech founders — algorithmic tools built for real market performance.
          </motion.p>
        )}

        {/* 3-Column Card Catalog Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.22 }}
                  className="bg-white rounded-2xl p-7 border border-[#EEEEEE] hover:border-primary/20 shadow-soft hover:shadow-lg transition-all duration-250 flex flex-col justify-between hover:-translate-y-1 group relative text-left"
                >
                  {/* Category Card Header */}
                  <div className="flex justify-between items-start gap-4">
                    <div className={`p-3 rounded-xl shrink-0 ${getIconContainerClass(service.category)}`}>
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>

                    {service.isPopular && (
                      <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        MOST POPULAR
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-col gap-3 mt-6 flex-1">
                    <h3 className="font-display font-black text-lg text-charcoal leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-bodytext text-xs md:text-sm leading-relaxed font-semibold">
                      {service.desc}
                    </p>

                    {/* Features list bullet points */}
                    <div className="flex flex-col gap-2 mt-4">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-xs font-bold text-bodytext">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Tag Footer row */}
                  <div className="border-t border-[#EEEEEE] mt-6 pt-5 flex items-center justify-between">
                    <span className="text-xs font-bold text-bodytext/80">{service.price}</span>
                    <a
                      href={`/${currentLocale}/services`}
                      className="text-xs font-bold text-primary flex items-center gap-1 hover:underline cursor-pointer group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Show More Services toggle control button */}
        {activeTab === 'all' && !showAllVisible && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllVisible(true)}
              className="px-8 py-3 bg-white hover:bg-[#FFF9F6] border border-border hover:border-primary/50 text-charcoal font-bold text-sm rounded-lg shadow-sm hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none"
            >
              Show More Services ↓
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
