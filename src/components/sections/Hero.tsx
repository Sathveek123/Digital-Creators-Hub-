'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Pause, Maximize, Minimize, Star, Rocket, Volume2, VolumeX, X, Zap, Smartphone, MessageSquare,
  Globe, PenTool, Bot, MessageCircle, Phone, Workflow, LayoutDashboard, Cloud, ShieldCheck, Server,
  MapPin, Instagram, Megaphone, Search, TrendingUp, Mail, Target, QrCode,
  LineChart, Repeat, BellRing, History, BrainCircuit, Check, ArrowUpRight, Gauge,
  Shield, CheckCircle2, Sparkles, Layers, MousePointer, Lock
} from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Color & Icon Visual Specifications for the 25 Slides
const CATEGORIES = {
  web: {
    label: { en: 'WEB & APP', te: 'వెబ్ & యాప్' },
    tint: 'bg-[#FFF3EC]',
    accent: 'text-[#FF5C1C]',
    bgWash: 'bg-[#FF5C1C]/[0.03]',
    fillColor: '#FF5C1C',
  },
  ai: {
    label: { en: 'AI & AUTOMATION', te: 'ఏఐ & ఆటోమేషన్' },
    tint: 'bg-[#EEF7FF]',
    accent: 'text-[#2563EB]',
    bgWash: 'bg-[#2563EB]/[0.03]',
    fillColor: '#2563EB',
  },
  marketing: {
    label: { en: 'DIGITAL MARKETING', te: 'మార్కెటింగ్' },
    tint: 'bg-[#EEFBF3]',
    accent: 'text-[#16A34A]',
    bgWash: 'bg-[#16A34A]/[0.03]',
    fillColor: '#16A34A',
  },
  trading: {
    label: { en: 'TRADING SOLUTIONS', te: 'ట్రేడింగ్ సొల్యూషన్స్' },
    tint: 'bg-[#FFF8E5]',
    accent: 'text-[#D97706]',
    bgWash: 'bg-[#D97706]/[0.03]',
    fillColor: '#D97706',
  }
};

const SERVICES = [
  // WEB & APP
  {
    id: 1,
    cat: 'web',
    name: { en: 'Custom Website Development', te: 'కస్టమ్ వెబ్‌సైట్ డెవలప్‌మెంట్' },
    hook: { en: 'Sites that convert, not just look nice', te: 'కేవలం అందంగా కాకుండా, బిజినెస్ తెచ్చే వెబ్‌సైట్లు' },
    price: { en: 'Starting ₹9,999', te: 'ధర ₹9,999 నుండి' },
    icon: Globe,
  },
  {
    id: 2,
    cat: 'web',
    name: { en: 'Mobile App Development', te: 'మొబైల్ యాప్ డెవలప్‌మెంట్' },
    hook: { en: 'Android & iOS apps built for real users', te: 'వాడుకరులకు సులభంగా ఉండే ఆండ్రాయిడ్ & ఐఓఎస్ యాప్స్' },
    price: { en: 'Starting ₹29,999', te: 'ధర ₹29,999 నుండి' },
    icon: Smartphone,
  },
  {
    id: 3,
    cat: 'web',
    name: { en: 'UI/UX Design & Branding', te: 'UI/UX డిజైన్ & బ్రాండింగ్' },
    hook: { en: 'Design that builds trust in 3 seconds', te: 'చూసిన 3 సెకన్లలో నమ్మకాన్ని కలిగించే డిజైన్' },
    price: { en: 'Starting ₹4,999', te: 'ధర ₹4,999 నుండి' },
    icon: PenTool,
  },
  {
    id: 4,
    cat: 'web',
    name: { en: 'Website Speed & Performance', te: 'స్పీడ్ & పెర్ఫార్మెన్స్' },
    hook: { en: 'Every second of load time costs sales', te: 'లోడ్ టైమ్ ఆలస్యమైతే కస్టమర్లు వెళ్ళిపోతారు' },
    price: { en: 'Starting ₹2,999', te: 'ధర ₹2,999 నుండి' },
    icon: Zap,
  },
  // AI & AUTOMATION
  {
    id: 5,
    cat: 'ai',
    name: { en: 'AI Chatbots & AI Agents', te: 'ఏఐ చాట్‌బాట్స్ & ఏజెంట్స్' },
    hook: { en: 'A 24/7 team member that never sleeps', te: 'ఎల్లప్పుడూ పనిచేసే 24/7 ఏఐ అసిస్టెంట్' },
    price: { en: 'Starting ₹9,999', te: 'ధర ₹9,999 నుండి' },
    icon: Bot,
  },
  {
    id: 6,
    cat: 'ai',
    name: { en: 'WhatsApp Automation & Bots', te: 'వాట్సాప్ ఆటోమేషన్ & బాట్స్' },
    hook: { en: 'Your best salesperson, always online', te: 'మీ బెస్ట్ సేల్స్ పర్సన్, ఎప్పుడూ ఆన్‌లైన్' },
    price: { en: 'Starting ₹4,999', te: 'ధర ₹4,999 నుండి' },
    icon: MessageCircle,
  },
  {
    id: 7,
    cat: 'ai',
    name: { en: 'AI Voice Bots & Calling Agents', te: 'ఏఐ వాయిస్ బాట్స్' },
    hook: { en: 'AI that calls, answers, and books', te: 'కాల్స్ చేసి బుకింగ్స్ పూర్తి చేసే ఏఐ' },
    price: { en: 'Starting ₹14,999', te: 'ధర ₹14,999 నుండి' },
    icon: Phone,
  },
  {
    id: 8,
    cat: 'ai',
    name: { en: 'Workflow Automation', te: 'వర్క్‌ఫ్లో ఆటోమేషన్' },
    hook: { en: 'Zero manual busywork', te: 'మ్యాన్యువల్ పనుల అవసరం లేకుండా ఆటోమేషన్' },
    price: { en: 'Starting ₹5,999', te: 'ధర ₹5,999 నుండి' },
    icon: Workflow,
  },
  {
    id: 9,
    cat: 'ai',
    name: { en: 'CRM & Marketing Automation', te: 'CRM & మార్కెటింగ్ ఆటోమేషన్' },
    hook: { en: 'Your whole business, one screen', te: 'మీ బిజినెస్ మొత్తం ఒకే స్క్రీన్ పై' },
    price: { en: 'Starting ₹9,999', te: 'ధర ₹9,999 నుండి' },
    icon: LayoutDashboard,
  },
  {
    id: 10,
    cat: 'ai',
    name: { en: 'Cloud Infrastructure & DevOps', te: 'క్లౌడ్ ఇన్‌ఫ్రాస్ట్రక్చర్' },
    hook: { en: 'Systems that never go down', te: 'ఎప్పుడూ ఆగిపోని సర్వర్ వ్యవస్థలు' },
    price: { en: 'Starting ₹7,999', te: 'ధర ₹7,999 నుండి' },
    icon: Cloud,
  },
  {
    id: 11,
    cat: 'ai',
    name: { en: 'Cybersecurity Solutions', te: 'సైబర్ సెక్యూరిటీ సొల్యూషన్స్' },
    hook: { en: "Protect your business before it's news", te: 'హ్యాకింగ్ ముప్పుల నుండి ముందస్తు రక్షణ' },
    price: { en: 'Starting ₹9,999', te: 'ధర ₹9,999 నుండి' },
    icon: ShieldCheck,
  },
  // DIGITAL MARKETING
  {
    id: 12,
    cat: 'marketing',
    name: { en: 'Google Business Profile', te: 'గూగుల్ బిజినెస్ ప్రొఫైల్' },
    hook: { en: 'Get found when locals search you', te: 'గూగుల్ లో ప్రజలు వెతికినప్పుడు కనిపించండి' },
    price: { en: 'Starting ₹2,999', te: 'ధర ₹2,999 నుండి' },
    icon: MapPin,
  },
  {
    id: 13,
    cat: 'marketing',
    name: { en: 'Social Media Management', te: 'సోషల్ మీడియా మేనేజ్‌మెంట్' },
    hook: { en: 'Consistent posting, zero effort on you', te: 'మీ శ్రమ లేకుండా రోజువారీ పోస్టింగ్‌లు' },
    price: { en: 'Starting ₹4,999', te: 'ధర ₹4,999 నుండి' },
    icon: Instagram,
  },
  {
    id: 14,
    cat: 'marketing',
    name: { en: 'Facebook & Instagram Ads', te: 'ఫేస్‌బుక్ & ఇన్‌స్టాగ్రామ్ యాడ్స్' },
    hook: { en: 'Ads that bring customers, not clicks', te: 'కేవలం క్లిక్స్ కాదు, నిజమైన కస్టమర్లు' },
    price: { en: 'Starting ₹7,999', te: 'ధర ₹7,999 నుండి' },
    icon: Megaphone,
  },
  {
    id: 15,
    cat: 'marketing',
    name: { en: 'Google Ads Management', te: 'గూగుల్ యాడ్స్ మేనేజ్‌మెంట్' },
    hook: { en: "Show up exactly when they're ready to buy", te: 'కొనడానికి సిద్ధంగా ఉన్నవారికే కనిపించండి' },
    price: { en: 'Starting ₹7,999', te: 'ధర ₹7,999 నుండి' },
    icon: Search,
  },
  {
    id: 16,
    cat: 'marketing',
    name: { en: 'Lead Generation Systems', te: 'లీడ్ జనరేషన్ సిస్టమ్స్' },
    hook: { en: 'A pipeline, not random inquiries', te: 'నిరంతరం వచ్చే కస్టమర్ లీడ్స్' },
    price: { en: 'Starting ₹9,999', te: 'ధర ₹9,999 నుండి' },
    icon: TrendingUp,
  },
  {
    id: 17,
    cat: 'marketing',
    name: { en: 'Email Marketing Automation', te: 'ఈమెయిల్ మార్కెటింగ్ ఆటోమేషన్' },
    hook: { en: 'Turn past buyers into repeat buyers', te: 'పాత కస్టమర్లను మళ్ళీ కొనుగోలు చేసేలా చేయండి' },
    price: { en: 'Starting ₹3,999', te: 'ధర ₹3,999 నుండి' },
    icon: Mail,
  },
  {
    id: 18,
    cat: 'marketing',
    name: { en: 'Conversion Rate Optimization', te: 'కన్వర్షన్ రేట్ ఆప్టిమైజేషన్' },
    hook: { en: 'More sales from traffic you have', te: 'ఉన్న ట్రాఫిక్ నుండి ఎక్కువ అమ్మకాలు' },
    price: { en: 'Starting ₹5,999', te: 'ధర ₹5,999 నుండి' },
    icon: Target,
  },
  {
    id: 19,
    cat: 'marketing',
    name: { en: 'QR Code Solutions', te: 'క్యూఆర్ కోడ్ సొల్యూషన్స్' },
    hook: { en: 'Smart menus, instant reviews', te: 'స్మార్ట్ మెనూలు, ఇన్స్టంట్ రివ్యూస్' },
    price: { en: 'Starting ₹1,999', te: 'ధర ₹1,999 నుండి' },
    icon: QrCode,
  },
  // TRADING SOLUTIONS
  {
    id: 20,
    cat: 'trading',
    name: { en: 'TradingView Pine Script Dev', te: 'పైన్ స్క్రిప్ట్ డెవలప్‌మెంట్' },
    hook: { en: 'Custom indicators, your exact strategy', te: 'మీ స్వంత ట్రేడింగ్ ఇండికేటర్ల తయారీ' },
    price: { en: 'Starting ₹4,999', te: 'ధర ₹4,999 నుండి' },
    icon: LineChart,
  },
  {
    id: 21,
    cat: 'trading',
    name: { en: 'Trading Bots Development', te: 'ట్రేడింగ్ బాట్స్ డెవలప్‌మెంట్' },
    hook: { en: 'Automated execution, zero emotion', te: 'ఎలాంటి భావోద్వేగాలు లేని ఆటోమేటిక్ ట్రేడింగ్' },
    price: { en: 'Starting ₹14,999', te: 'ధర ₹14,999 నుండి' },
    icon: Bot,
  },
  {
    id: 22,
    cat: 'trading',
    name: { en: 'Automated Trading Strategies', te: 'ఆటోమేటెడ్ ట్రేడింగ్ స్ట్రాటజీస్' },
    hook: { en: 'Your strategy, running without you', te: 'మీ శ్రమ లేకుండా ఆటోమేటిక్‌గా నడిచే స్ట్రాటజీ' },
    price: { en: 'Starting ₹19,999', te: 'ధర ₹19,999 నుండి' },
    icon: Repeat,
  },
  {
    id: 23,
    cat: 'trading',
    name: { en: 'Custom Indicators & Alerts', te: 'కస్టమ్ ఇండికేటర్స్ & అలర్ట్స్' },
    hook: { en: 'See the signal, not the noise', te: 'మార్కెట్ సిగ్నల్స్‌ను సులభంగా గుర్తించండి' },
    price: { en: 'Starting ₹3,999', te: 'ధర ₹3,999 నుండి' },
    icon: BellRing,
  },
  {
    id: 24,
    cat: 'trading',
    name: { en: 'Strategy Backtesting', te: 'స్ట్రాటజీ బ్యాక్‌టెస్టింగ్' },
    hook: { en: 'Know it works before real capital', te: 'నిజమైన డబ్బు పెట్టకముందే ఫలితాన్ని పరీక్షించండి' },
    price: { en: 'Starting ₹5,999', te: 'ధర ₹5,999 నుండి' },
    icon: History,
  },
  {
    id: 25,
    cat: 'trading',
    name: { en: 'AI-Powered Trading Systems', te: 'ఏఐ ట్రేడింగ్ సిస్టమ్స్' },
    hook: { en: 'Machine learning meets market strategy', te: 'మెషిన్ లెర్నింగ్‌తో కూడిన ట్రేడింగ్ విధానం' },
    price: { en: 'Starting ₹24,999', te: 'ధర ₹24,999 నుండి' },
    icon: BrainCircuit,
  }
];

// ==========================================
// REUSABLE MINI UI MOCKUP COMPONENTS
// ==========================================

function BrowserMockup() {
  return (
    <div className="w-full h-[195px] bg-white border border-[#EEEEEE] rounded-xl shadow-sm flex flex-col overflow-hidden text-left select-none">
      {/* Top Header */}
      <div className="bg-[#FAFAFA] border-b border-[#EEEEEE] px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="bg-white border border-[#EEEEEE] rounded-md px-3 py-0.5 text-[10px] text-[#888888] font-mono flex-1 text-center truncate">
          yourbusiness.com
        </div>
      </div>
      {/* Wireframe Body */}
      <div className="p-3 flex flex-col gap-2.5 flex-1 bg-white">
        <div className="h-6 bg-[#FAFAFA] rounded-md border border-[#EEEEEE] flex items-center justify-between px-2">
          <span className="w-12 h-2 rounded bg-primary/40" />
          <div className="flex gap-1">
            <span className="w-6 h-1.5 rounded bg-[#DDD]" />
            <span className="w-6 h-1.5 rounded bg-[#DDD]" />
          </div>
        </div>
        <div className="bg-[#FFF3EC] border border-[#FFD9C2]/60 rounded-lg p-3 flex flex-col gap-1.5">
          <span className="w-3/4 h-3 bg-charcoal rounded" />
          <span className="w-1/2 h-2 bg-[#888] rounded" />
          <div className="w-16 h-5 bg-primary rounded text-[9px] text-white font-bold flex items-center justify-center mt-1">
            Get Started
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 bg-[#FAFAFA] border border-[#EEEEEE] rounded p-1.5 flex flex-col gap-1">
              <span className="w-4 h-1.5 bg-[#AAA] rounded" />
              <span className="w-full h-1 bg-[#DDD] rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="w-[135px] h-[195px] bg-[#181818] rounded-[22px] p-2 shadow-xl border border-[#333333] flex flex-col select-none relative mx-auto overflow-hidden">
      {/* Dynamic Island / Notch */}
      <div className="w-10 h-2 bg-[#000000] rounded-full mx-auto mb-1.5 shrink-0 flex items-center justify-between px-1">
        <span className="w-1 h-1 rounded-full bg-[#333333]" />
        <span className="w-1 h-1 rounded-full bg-[#10B981]" />
      </div>

      {/* Phone Screen Container */}
      <div className="w-full flex-1 bg-[#FAFAFA] rounded-[16px] overflow-hidden flex flex-col justify-between p-2 text-left border border-[#EEEEEE]">
        {/* App Header */}
        <div className="flex justify-between items-center border-b border-[#EEEEEE] pb-1">
          <div className="flex items-center gap-1">
            <Smartphone className="w-3 h-3 text-primary" />
            <span className="text-[9.5px] font-black text-charcoal">DCH Mobile App</span>
          </div>
          <span className="text-[8px] font-bold text-[#10B981] bg-[#EEFBF3] px-1.5 py-0.5 rounded">
            iOS / Android
          </span>
        </div>

        {/* Feature Cards Feed */}
        <div className="flex flex-col gap-1.5 my-auto">
          <div className="bg-white border border-[#EEEEEE] rounded-lg p-1.5 flex items-center gap-2 shadow-2xs">
            <div className="w-6 h-6 rounded-md bg-[#FFF3EC] text-primary flex items-center justify-center text-[10px] font-bold">
              ⚡
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-bold text-charcoal leading-tight">60 FPS Smooth UI</span>
              <span className="text-[7.5px] text-[#888888]">Native React Performance</span>
            </div>
          </div>

          <div className="bg-white border border-[#EEEEEE] rounded-lg p-1.5 flex items-center gap-2 shadow-2xs">
            <div className="w-6 h-6 rounded-md bg-[#EEF7FF] text-[#2563EB] flex items-center justify-center text-[10px] font-bold">
              🔔
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-bold text-charcoal leading-tight">Push Notifications</span>
              <span className="text-[7.5px] text-[#10B981]">Instant User Engagement</span>
            </div>
          </div>
        </div>

        {/* Bottom Tab Bar */}
        <div className="border-t border-[#EEEEEE] pt-1 flex justify-around items-center text-[7.5px] font-bold text-[#888888]">
          <span className="text-primary font-black">● Home</span>
          <span>● Leads</span>
          <span>● Stats</span>
        </div>
      </div>
    </div>
  );
}

function DesignCanvasMockup() {
  return (
    <div className="w-full h-[195px] bg-[#FAFAFA] border border-[#EEEEEE] rounded-xl p-3 flex flex-col justify-center items-center relative overflow-hidden select-none">
      <div className="absolute top-2 left-2 text-[9px] font-bold text-[#888888] flex items-center gap-1">
        <PenTool className="w-3 h-3 text-primary" /> Figma Brand Canvas
      </div>
      <div className="flex gap-3 items-center justify-center rotate-[-2deg] mt-2">
        <div className="w-28 h-36 bg-white border border-[#EEEEEE] rounded-lg shadow-sm p-2 flex flex-col justify-between text-left">
          <span className="text-[10px] font-extrabold text-charcoal">Aa Bb</span>
          <div className="flex gap-1">
            <span className="w-4 h-4 rounded-full bg-[#FF5C1C]" />
            <span className="w-4 h-4 rounded-full bg-[#1A2B4C]" />
            <span className="w-4 h-4 rounded-full bg-[#10B981]" />
          </div>
          <span className="w-full h-2 bg-[#FFF3EC] rounded text-[8px] font-bold text-primary flex items-center justify-center">
            Logo System
          </span>
        </div>
        <div className="w-28 h-36 bg-white border border-primary/30 rounded-lg shadow-md p-2 flex flex-col justify-between text-left translate-y-2">
          <div className="w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center font-black text-xs">
            D
          </div>
          <div className="flex flex-col gap-1">
            <span className="w-16 h-2 bg-charcoal rounded" />
            <span className="w-10 h-1.5 bg-[#888] rounded" />
          </div>
          <span className="w-full h-5 bg-primary text-white rounded text-[8px] font-bold flex items-center justify-center">
            UI Prototype
          </span>
        </div>
      </div>
    </div>
  );
}

function SpeedGaugeMockup() {
  return (
    <div className="w-full h-[195px] bg-white border border-[#EEEEEE] rounded-xl p-3 flex flex-col items-center justify-center gap-2 select-none relative">
      <div className="relative w-36 h-22 flex flex-col items-center justify-center">
        <svg className="w-32 h-32 -rotate-180 absolute -top-4" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#F0F0F0" strokeWidth="8" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="8" strokeDasharray="251" strokeDashoffset="60" strokeLinecap="round" />
        </svg>
        <div className="relative z-10 font-display font-black text-2xl text-charcoal flex items-baseline gap-1 mt-4">
          <span>98</span>
          <span className="text-xs font-bold text-[#10B981]">/100</span>
        </div>
        <span className="text-[9px] font-black uppercase tracking-wider text-[#666666] mt-0.5">
          Speed Score
        </span>
      </div>
      <div className="flex items-center gap-1.5 bg-[#EEFBF3] border border-[#16A34A]/20 px-3 py-1 rounded-full shadow-sm">
        <Zap className="w-3.5 h-3.5 text-[#16A34A]" />
        <span className="text-xs font-bold text-[#16A34A]">1.2s Core Web Vitals Load</span>
      </div>
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="w-full h-[195px] bg-white border border-[#EEEEEE] rounded-xl p-3 flex flex-col justify-between text-left select-none">
      <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-2">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#2563EB]" />
          <span className="text-xs font-bold text-charcoal">DCH AI Assistant</span>
        </div>
        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
      </div>
      <div className="flex flex-col gap-2 my-auto">
        <div className="bg-[#FAFAFA] border border-[#EEEEEE] p-2.5 rounded-xl rounded-tl-none max-w-[85%] text-xs font-medium text-charcoal">
          Can I book a consultation call today?
        </div>
        <div className="bg-[#EEF7FF] border border-[#2563EB]/20 p-2.5 rounded-xl rounded-tr-none max-w-[85%] self-end text-xs font-medium text-[#2563EB]">
          Absolutely! We have an open slot at 2:00 PM IST. Shall I reserve it for Ramesh?
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-[10px] text-[#888888] font-bold bg-[#FAFAFA] p-1.5 rounded-lg border border-[#EEEEEE]">
        <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
        AI is typing response...
      </div>
    </div>
  );
}

function WhatsAppMockup() {
  return (
    <div className="w-full h-[195px] bg-[#E5DDD5] border border-[#EEEEEE] rounded-xl overflow-hidden flex flex-col justify-between text-left select-none">
      {/* Header */}
      <div className="bg-[#075E54] text-white p-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-white" />
          <div className="flex flex-col">
            <span className="text-xs font-bold leading-none">DCH Store Automation</span>
            <span className="text-[9px] opacity-80 mt-0.5">Online · 24/7 Bot</span>
          </div>
        </div>
      </div>
      {/* Chat Messages */}
      <div className="p-3 flex flex-col gap-2 my-auto">
        <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[80%] text-xs font-medium text-charcoal shadow-sm">
          Hi! Want to place an order or view menu? 🍛
        </div>
        <div className="bg-[#DCF8C6] p-2.5 rounded-lg rounded-tr-none max-w-[75%] self-end text-xs font-medium text-charcoal shadow-sm">
          Yes! Send 1-click menu
        </div>
        <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[85%] text-xs font-bold text-primary shadow-sm flex items-center justify-between">
          <span>🛒 Menu Sent (Order #4902)</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}

function VoiceCallMockup() {
  return (
    <div className="w-full h-[195px] bg-white border border-[#EEEEEE] rounded-xl p-4 flex flex-col justify-between items-center text-center select-none">
      <div className="flex flex-col items-center gap-1.5">
        <div className="w-12 h-12 rounded-full bg-[#EEF7FF] border border-[#2563EB]/30 text-[#2563EB] flex items-center justify-center">
          <Phone className="w-6 h-6 animate-bounce" />
        </div>
        <span className="text-xs font-black text-charcoal">AI Calling Agent</span>
        <span className="text-[10px] text-[#2563EB] font-bold bg-[#EEF7FF] px-2 py-0.5 rounded-full">
          Active Live Call · 00:24
        </span>
      </div>
      {/* Waveform */}
      <div className="flex items-center gap-1 my-1">
        {[8, 16, 24, 12, 28, 18, 10, 22, 14].map((h, i) => (
          <motion.span
            key={i}
            animate={{ height: [8, h, 8] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
            className="w-1 bg-[#2563EB] rounded-full"
          />
        ))}
      </div>
      <div className="text-[10px] text-[#666666] font-semibold bg-[#FAFAFA] border border-[#EEEEEE] p-2 rounded-lg max-w-xs italic">
        "Hello Ramesh garu, confirming your appointment for 10 AM tomorrow."
      </div>
    </div>
  );
}

function WorkflowNodesMockup() {
  return (
    <div className="w-full h-[195px] bg-white border border-[#EEEEEE] rounded-xl p-4 flex flex-col items-center justify-center text-left select-none">
      <span className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-wider mb-3">
        Automated Lead Pipeline
      </span>
      <div className="flex items-center gap-2 w-full justify-between">
        <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-lg p-2 flex flex-col items-center gap-1 text-center w-24">
          <User className="w-4 h-4 text-charcoal" />
          <span className="text-[9px] font-bold text-charcoal">New Form</span>
        </div>
        <span className="h-[2px] bg-[#2563EB] flex-1 relative">
          <span className="w-2 h-2 rounded-full bg-[#2563EB] absolute -top-0.75 left-1/2 animate-ping" />
        </span>
        <div className="bg-[#EEFBF3] border border-[#16A34A]/30 rounded-lg p-2 flex flex-col items-center gap-1 text-center w-24">
          <MessageCircle className="w-4 h-4 text-[#16A34A]" />
          <span className="text-[9px] font-bold text-[#16A34A]">WhatsApp</span>
        </div>
        <span className="h-[2px] bg-[#2563EB] flex-1" />
        <div className="bg-[#FFF3EC] border border-primary/30 rounded-lg p-2 flex flex-col items-center gap-1 text-center w-24">
          <LayoutDashboard className="w-4 h-4 text-primary" />
          <span className="text-[9px] font-bold text-primary">CRM Sync</span>
        </div>
      </div>
    </div>
  );
}

function MiniDashboardMockup({ isCloud = false }: { isCloud?: boolean }) {
  if (isCloud) {
    return (
      <div className="w-full h-[195px] bg-[#0F172A] border border-[#1E293B] rounded-xl p-3 flex flex-col justify-between text-left select-none text-white">
        <div className="flex justify-between items-center border-b border-[#1E293B] pb-1.5">
          <div className="flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="text-xs font-black">AWS AP-South-1 (Hyderabad)</span>
          </div>
          <span className="text-[9px] font-bold text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded border border-[#10B981]/30">
            99.99% Uptime
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 my-auto">
          <div className="bg-[#1E293B] p-2 rounded-lg border border-[#334155]">
            <span className="text-[9px] text-[#94A3B8] uppercase font-bold">CPU Server Load</span>
            <span className="text-sm font-black text-[#38BDF8] block">14.2% · 4 Cores</span>
          </div>
          <div className="bg-[#1E293B] p-2 rounded-lg border border-[#334155]">
            <span className="text-[9px] text-[#94A3B8] uppercase font-bold">Cloudflare CDN</span>
            <span className="text-sm font-black text-[#10B981] block">96.8% Cached</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[9px] text-[#94A3B8] font-bold">
          <span>Active SSL Certificate ✓</span>
          <span className="text-[#38BDF8]">14,200 req/min</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[195px] bg-white border border-[#EEEEEE] rounded-xl p-3 flex flex-col justify-between text-left select-none">
      <div className="flex justify-between items-center border-b border-[#EEEEEE] pb-1.5">
        <div className="flex items-center gap-1.5">
          <LayoutDashboard className="w-4 h-4 text-primary" />
          <span className="text-xs font-black text-charcoal">CRM Lead Pipeline</span>
        </div>
        <span className="text-[9px] font-bold text-[#16A34A] bg-[#EEFBF3] px-2 py-0.5 rounded">
          3 Active Deals
        </span>
      </div>

      <div className="flex flex-col gap-1.5 my-auto">
        <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-lg p-1.5 flex justify-between items-center">
          <div className="flex flex-col text-left">
            <span className="text-[9.5px] font-bold text-charcoal">Curry Leaf Restaurant</span>
            <span className="text-[8px] text-[#888888]">WhatsApp Automation System</span>
          </div>
          <span className="text-xs font-black text-primary">₹45,000</span>
        </div>

        <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-lg p-1.5 flex justify-between items-center">
          <div className="flex flex-col text-left">
            <span className="text-[9.5px] font-bold text-charcoal">Skyline Realty AP</span>
            <span className="text-[8px] text-[#888888]">Google Ads + Landing Page</span>
          </div>
          <span className="text-xs font-black text-[#16A34A]">₹1,20,000</span>
        </div>
      </div>

      <div className="flex justify-between items-center text-[9px] text-[#888888] font-bold border-t border-[#EEEEEE] pt-1">
        <span>Auto-Sync: Connected</span>
        <span className="text-primary">Instant Follow-up Active 💬</span>
      </div>
    </div>
  );
}

function SecurityShieldMockup() {
  return (
    <div className="w-full h-[195px] bg-white border border-[#EEEEEE] rounded-xl p-4 flex flex-col items-center justify-center gap-3 text-center select-none relative overflow-hidden">
      <div className="w-20 h-20 rounded-full bg-[#EEF7FF] border border-[#2563EB]/30 flex items-center justify-center relative">
        <ShieldCheck className="w-10 h-10 text-[#2563EB]" />
        <div className="absolute inset-0 rounded-full border-2 border-[#2563EB]/40 animate-ping" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-black text-charcoal">Enterprise Security Active</span>
        <span className="text-[10px] font-bold text-[#16A34A] bg-[#EEFBF3] px-3 py-1 rounded-full border border-[#16A34A]/20">
          ✓ SSL Encrypted · DDoS Protected
        </span>
      </div>
    </div>
  );
}

function GoogleBusinessCardMockup() {
  return (
    <div className="w-full h-[195px] bg-white border border-[#EEEEEE] rounded-xl p-3 flex flex-col justify-between text-left select-none">
      <div className="flex items-center gap-2 border-b border-[#EEEEEE] pb-2">
        <MapPin className="w-5 h-5 text-[#16A34A]" />
        <div className="flex flex-col">
          <span className="text-xs font-black text-charcoal">Google Local Pack #1</span>
          <span className="text-[9px] text-[#888888] font-semibold">Vijayawada, Andhra Pradesh</span>
        </div>
      </div>
      <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-xl p-3 flex flex-col gap-1.5 my-auto">
        <div className="flex justify-between items-center">
          <span className="text-xs font-black text-charcoal">Your Business Name</span>
          <span className="text-[9px] font-bold bg-[#EEFBF3] text-[#16A34A] px-2 py-0.5 rounded">
            Rank #1
          </span>
        </div>
        <div className="flex items-center gap-1 text-primary text-xs font-bold">
          <span>5.0</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-[#888888] text-[10px]">(142 reviews)</span>
        </div>
        <span className="text-[10px] text-[#16A34A] font-bold">✓ Verified Business · Open Now</span>
      </div>
    </div>
  );
}

function InstagramGridMockup() {
  const posts = [
    { title: '🏡 Villa Launch', bg: 'bg-[#FFF3EC]', text: 'text-primary', likes: '1.4k' },
    { title: '🍛 Special Reel', bg: 'bg-[#EEFBF3]', text: 'text-[#16A34A]', likes: '14.8k' },
    { title: '👨‍⚕️ Dental Offer', bg: 'bg-[#EEF7FF]', text: 'text-[#2563EB]', likes: '890' },
    { title: '📊 Growth Chart', bg: 'bg-[#FAF5FF]', text: 'text-[#9333EA]', likes: '2.1k' },
    { title: '💬 Client Review', bg: 'bg-[#FFF8F0]', text: 'text-[#D97706]', likes: '1.8k' },
    { title: '🤖 WhatsApp Bot', bg: 'bg-[#F0FDF4]', text: 'text-[#10B981]', likes: '18.2k' },
  ];

  return (
    <div className="w-full h-[195px] bg-white border border-[#EEEEEE] rounded-xl p-3 flex flex-col justify-between text-left select-none">
      <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-2">
        <div className="flex items-center gap-1.5">
          <Instagram className="w-4 h-4 text-[#E1306C]" />
          <span className="text-xs font-black text-charcoal">Instagram Brand Grid</span>
        </div>
        <span className="text-[9px] text-[#888888] font-bold">12.4k followers</span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 my-auto">
        {posts.map((post, i) => (
          <div
            key={i}
            className={`${post.bg} border border-[#EEEEEE] rounded-lg p-1.5 flex flex-col justify-between aspect-square text-left shadow-2xs group hover:scale-105 transition-transform`}
          >
            <span className={`text-[8.5px] font-black leading-tight ${post.text}`}>
              {post.title}
            </span>
            <div className="flex items-center gap-1 text-[8px] font-bold text-charcoal">
              <span>❤️</span>
              <span>{post.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdCardMockup() {
  return (
    <div className="w-full h-[240px] bg-white border border-[#EEEEEE] rounded-xl p-3 flex flex-col justify-between text-left select-none">
      <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-1.5">
        <div className="flex items-center gap-2">
          <Megaphone className="w-4 h-4 text-[#16A34A]" />
          <span className="text-xs font-black text-charcoal">Facebook Sponsored Ad</span>
        </div>
        <span className="text-[9px] font-bold text-[#888888]">Sponsored</span>
      </div>
      <div className="bg-[#FFF3EC] border border-primary/20 rounded-lg p-3 flex flex-col gap-2 my-auto">
        <span className="text-xs font-extrabold text-charcoal">Scale Your Business 3x Faster 🚀</span>
        <span className="text-[10px] text-bodytext font-medium">Targeted leads directly to your WhatsApp inbox.</span>
        <div className="w-full bg-primary text-white text-[10px] font-bold py-1.5 rounded text-center">
          Shop Now / Claim Offer
        </div>
      </div>
    </div>
  );
}

function GoogleAdsMockup() {
  return (
    <div className="w-full h-[240px] bg-white border border-[#EEEEEE] rounded-xl p-3 flex flex-col justify-between text-left select-none">
      <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-lg p-2 text-[10px] font-bold text-[#666666] flex items-center gap-2">
        <Search className="w-3.5 h-3.5 text-primary" />
        <span>best digital agency near me</span>
      </div>
      <div className="bg-[#FFF8E5] border border-[#D97706]/30 rounded-xl p-3 flex flex-col gap-1.5 my-auto">
        <div className="flex items-center gap-2">
          <span className="bg-[#D97706] text-white text-[9px] font-black px-1.5 rounded">Ad</span>
          <span className="text-xs font-extrabold text-[#2563EB]">digitalcreatorshub.com</span>
        </div>
        <span className="text-xs font-black text-charcoal">Top Position #1 Result</span>
        <span className="text-[10px] text-[#666666] font-medium">High-converting leads delivered in 24 hours.</span>
      </div>
    </div>
  );
}

function FunnelMockup() {
  return (
    <div className="w-full h-[240px] bg-white border border-[#EEEEEE] rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-center select-none">
      <span className="text-[10px] font-black uppercase tracking-wider text-[#16A34A]">High ROI Lead Funnel</span>
      <div className="flex flex-col gap-1.5 w-full max-w-[260px]">
        <div className="bg-[#EEFBF3] border border-[#16A34A]/30 p-1.5 rounded text-xs font-bold text-charcoal">
          1,000 Visitors
        </div>
        <div className="bg-[#16A34A]/20 p-1.5 rounded text-xs font-bold text-[#16A34A] w-[80%] mx-auto">
          200 Qualified Leads
        </div>
        <div className="bg-primary text-white p-1.5 rounded text-xs font-black w-[55%] mx-auto">
          47 Customers (4.7%)
        </div>
      </div>
    </div>
  );
}

function InboxMockup() {
  return (
    <div className="w-full h-[240px] bg-white border border-[#EEEEEE] rounded-xl p-3 flex flex-col justify-between text-left select-none">
      <div className="flex justify-between items-center border-b border-[#EEEEEE] pb-2">
        <span className="text-xs font-black text-charcoal">Email Automation</span>
        <span className="text-[9px] font-bold bg-[#EEFBF3] text-[#16A34A] px-2 py-0.5 rounded">
          42% Open Rate
        </span>
      </div>
      <div className="flex flex-col gap-2 my-auto">
        <div className="bg-[#FFF3EC] border border-primary/30 p-2 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold text-charcoal">Exclusive Client Offer</span>
          </div>
          <span className="text-[9px] text-[#888888] font-bold">Unread</span>
        </div>
        {[1, 2].map((i) => (
          <div key={i} className="bg-[#FAFAFA] border border-[#EEEEEE] p-2 rounded-lg flex items-center justify-between text-xs text-[#888888]">
            <span>Monthly Newsletter Update #{i}</span>
            <span className="text-[9px]">Opened</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ABTestMockup() {
  return (
    <div className="w-full h-[240px] bg-white border border-[#EEEEEE] rounded-xl p-3 flex flex-col justify-between text-left select-none">
      <span className="text-[10px] font-black uppercase text-[#16A34A] tracking-wider">A/B Conversion Split Test</span>
      <div className="grid grid-cols-2 gap-2 my-auto">
        <div className="bg-[#FAFAFA] border border-[#EEEEEE] p-2.5 rounded-lg flex flex-col gap-1">
          <span className="text-[10px] font-bold text-[#888888]">Version A</span>
          <span className="text-base font-black text-charcoal">2.1%</span>
        </div>
        <div className="bg-[#EEFBF3] border border-[#16A34A]/40 p-2.5 rounded-lg flex flex-col gap-1">
          <span className="text-[10px] font-bold text-[#16A34A]">Version B ★ Winner</span>
          <span className="text-base font-black text-[#16A34A]">4.8% (+128%)</span>
        </div>
      </div>
    </div>
  );
}

function QRCodeMockup() {
  return (
    <div className="w-full h-[195px] bg-white border border-[#EEEEEE] rounded-xl p-3 flex flex-col items-center justify-between text-center select-none shadow-2xs">
      <div className="flex items-center justify-between w-full border-b border-[#EEEEEE] pb-1.5">
        <div className="flex items-center gap-1">
          <QrCode className="w-3.5 h-3.5 text-primary" />
          <span className="text-[10px] font-black text-charcoal">Smart QR Solutions</span>
        </div>
        <span className="text-[8px] font-bold text-[#16A34A] bg-[#EEFBF3] px-1.5 py-0.5 rounded">
          Dynamic Redirect
        </span>
      </div>

      <div className="flex items-center gap-3 my-auto">
        <div className="w-20 h-20 bg-white border-2 border-primary rounded-xl p-1.5 flex flex-col justify-between shadow-sm relative shrink-0">
          <div className="flex justify-between">
            <div className="w-4 h-4 bg-primary rounded-xs" />
            <div className="w-4 h-4 bg-primary rounded-xs" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-5 h-5 rounded-full bg-white border border-primary text-primary font-black text-[7px] flex items-center justify-center shadow-xs">
              DCH
            </span>
          </div>
          <div className="flex justify-between items-end">
            <div className="w-4 h-4 bg-primary rounded-xs" />
            <div className="w-3 h-3 bg-charcoal rounded-xs" />
          </div>
        </div>

        <div className="flex flex-col text-left gap-1">
          <span className="text-[10px] font-extrabold text-charcoal leading-tight">
            Scan to View Menu & Leave 5-Star Review ⭐
          </span>
          <span className="text-[8px] text-[#888888] font-mono bg-[#FAFAFA] border border-[#EEEEEE] px-1.5 py-0.5 rounded self-start">
            dch.link/menu
          </span>
          <span className="text-[8px] font-bold text-[#16A34A] mt-0.5">
            ✓ 1,420 Scans This Month
          </span>
        </div>
      </div>
    </div>
  );
}

function PineScriptEditorMockup() {
  return (
    <div className="w-full h-[195px] bg-[#181818] border border-[#333333] rounded-xl p-2.5 flex flex-col justify-between text-left select-none overflow-hidden font-mono text-[10px]">
      <div className="flex justify-between items-center border-b border-[#2A2A2A] pb-1.5 px-1">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <span className="text-[#A0A0A0] text-[9px] font-bold ml-1">DCH_Algo_Pro.pine</span>
        </div>
        <span className="text-[#D97706] text-[8px] bg-[#D97706]/10 px-1.5 py-0.5 rounded font-sans font-bold">Pine Script v5</span>
      </div>
      <div className="flex-1 my-1 flex flex-col gap-1 text-[#CCCCCC] text-[9.5px]">
        <div className="flex gap-2"><span className="text-[#555]">1</span><span className="text-[#6A9955]">// @version=5</span></div>
        <div className="flex gap-2"><span className="text-[#555]">2</span><span><span className="text-[#569CD6]">indicator</span>(<span className="text-[#CE9178]">"DCH Scalper Pro"</span>, overlay=<span className="text-[#569CD6]">true</span>)</span></div>
        <div className="flex gap-2"><span className="text-[#555]">3</span><span>ema20 = <span className="text-[#DCDCAA]">ta.ema</span>(close, 20)</span></div>
        <div className="flex gap-2"><span className="text-[#555]">4</span><span>buySignal = <span className="text-[#DCDCAA]">ta.crossover</span>(close, ema20)</span></div>
        <div className="flex gap-2"><span className="text-[#555]">5</span><span><span className="text-[#4EC9B0]">plotshape</span>(buySignal, <span className="text-[#CE9178]">"BUY"</span>, color.green)</span></div>
      </div>
      <div className="border-t border-[#2A2A2A] pt-1 flex justify-between items-center text-[8px] text-[#10B981] font-sans font-bold">
        <span>✓ Compiled Successfully</span>
        <span className="text-[#888888]">Zero Errors</span>
      </div>
    </div>
  );
}

function TradingBotTerminalMockup() {
  return (
    <div className="w-full h-[195px] bg-[#0D0D0D] border border-[#222222] rounded-xl p-3 flex flex-col justify-between text-left select-none relative overflow-hidden">
      <div className="flex justify-between items-center border-b border-[#222222] pb-1.5">
        <div className="flex items-center gap-1.5">
          <Bot className="w-3.5 h-3.5 text-[#10B981]" />
          <span className="text-xs font-black text-white">Execution Bot Terminal</span>
        </div>
        <span className="text-[9px] font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
          Active · AngelOne/Zerodha
        </span>
      </div>

      <div className="bg-[#181818] border border-[#2A2A2A] rounded-lg p-2.5 flex flex-col gap-1.5 my-auto">
        <div className="flex justify-between items-center text-[10px] font-bold">
          <span className="text-white">ORDER #9401 EXECUTED</span>
          <span className="text-[#10B981] bg-[#10B981]/20 px-1.5 py-0.5 rounded">FILLED</span>
        </div>
        <div className="text-xs font-black text-primary">BANKNIFTY 44200 CALL @ ₹240.50</div>
        <div className="flex justify-between items-center text-[9px] text-[#888888] font-mono">
          <span>Qty: 50 Lots</span>
          <span>Latency: 12ms</span>
          <span className="text-[#10B981]">Emotion: 0%</span>
        </div>
      </div>

      <div className="flex justify-between items-center text-[9px] text-[#888888] font-bold">
        <span>Daily Trades: 14</span>
        <span className="text-[#10B981]">P&L: +₹18,450 ▲</span>
      </div>
    </div>
  );
}

function AutomatedStrategyMockup() {
  return (
    <div className="w-full h-[195px] bg-[#111111] border border-[#2B2B2B] rounded-xl p-3 flex flex-col justify-between text-left select-none relative overflow-hidden">
      <div className="flex justify-between items-center border-b border-[#222222] pb-1.5">
        <span className="text-xs font-black text-white">Automated Strategy Execution</span>
        <span className="text-[9px] font-bold text-[#D97706] bg-[#D97706]/10 px-2 py-0.5 rounded">R:R = 1 : 3.5</span>
      </div>

      <div className="flex flex-col gap-2 my-auto">
        <div className="bg-[#10B981]/15 border border-[#10B981]/30 p-2 rounded-lg flex justify-between items-center text-xs">
          <span className="font-bold text-[#10B981]">🎯 Take Profit Target</span>
          <span className="font-black text-[#10B981]">44,500 (+2.5%)</span>
        </div>
        <div className="bg-[#222222] border border-[#444] p-2 rounded-lg flex justify-between items-center text-xs">
          <span className="font-bold text-white">▲ Auto Entry Trigger</span>
          <span className="font-black text-white">44,200</span>
        </div>
        <div className="bg-[#EF4444]/15 border border-[#EF4444]/30 p-2 rounded-lg flex justify-between items-center text-xs">
          <span className="font-bold text-[#EF4444]">🛡️ Stop Loss Protection</span>
          <span className="font-black text-[#EF4444]">44,100 (-0.7%)</span>
        </div>
      </div>
    </div>
  );
}

function CustomIndicatorsAlertsMockup() {
  return (
    <div className="w-full h-[195px] bg-[#111111] border border-[#222222] rounded-xl p-3 flex flex-col justify-between text-left select-none relative overflow-hidden">
      <div className="flex justify-between items-center border-b border-[#222222] pb-1.5">
        <div className="flex items-center gap-1.5">
          <BellRing className="w-3.5 h-3.5 text-[#D97706]" />
          <span className="text-xs font-black text-white">Custom Webhook Alerts</span>
        </div>
        <span className="text-[9px] font-bold text-[#10B981]">0sec Delay</span>
      </div>

      <div className="bg-[#1A1A1A] border border-[#333] rounded-xl p-3 flex flex-col gap-2 my-auto">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D97706] animate-ping" />
          <span className="text-xs font-black text-white">🔔 ALERT: NIFTY RSI Breakout</span>
        </div>
        <p className="text-[10px] text-[#A0A0A0] font-medium">
          RSI crossed 70 level on 15m chart. Instant alert sent to WhatsApp & Telegram.
        </p>
      </div>

      <div className="flex justify-between items-center text-[9px] text-[#888888] font-bold">
        <span>Signal Confidence: 94%</span>
        <span className="text-primary">Telegram + WhatsApp Webhook</span>
      </div>
    </div>
  );
}

function StrategyBacktestingMockup() {
  return (
    <div className="w-full h-[195px] bg-[#111111] border border-[#222222] rounded-xl p-3 flex flex-col justify-between text-left select-none relative overflow-hidden">
      <div className="flex justify-between items-center border-b border-[#222222] pb-1.5">
        <span className="text-xs font-black text-white">Strategy Backtest Report</span>
        <span className="text-[9px] font-extrabold text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded">
          Win Rate: 74.2%
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-auto">
        <div className="bg-[#181818] border border-[#2B2B2B] p-2 rounded-lg">
          <span className="text-[9px] text-[#888888] font-bold uppercase">Profit Factor</span>
          <span className="text-sm font-black text-[#10B981] block">2.85</span>
        </div>
        <div className="bg-[#181818] border border-[#2B2B2B] p-2 rounded-lg">
          <span className="text-[9px] text-[#888888] font-bold uppercase">Max Drawdown</span>
          <span className="text-sm font-black text-[#EF4444] block">4.1%</span>
        </div>
      </div>

      <div className="h-10 bg-[#181818] border border-[#2B2B2B] rounded-lg p-1.5 flex items-end">
        <svg className="w-full h-full" viewBox="0 0 200 40">
          <path d="M 0 35 Q 50 30 100 15 T 200 5" fill="none" stroke="#10B981" strokeWidth="2.5" />
        </svg>
      </div>
    </div>
  );
}

function AITradingSystemsMockup() {
  return (
    <div className="w-full h-[195px] bg-[#0F0F1A] border border-[#2563EB]/30 rounded-xl p-3 flex flex-col justify-between text-left select-none relative overflow-hidden">
      <div className="flex justify-between items-center border-b border-[#2563EB]/20 pb-1.5">
        <div className="flex items-center gap-1.5">
          <BrainCircuit className="w-4 h-4 text-[#2563EB]" />
          <span className="text-xs font-black text-white">Neural Trading Engine</span>
        </div>
        <span className="text-[9px] font-bold text-[#2563EB] bg-[#2563EB]/15 px-2 py-0.5 rounded">
          AI Model v4.2
        </span>
      </div>

      <div className="bg-[#161B26] border border-[#2563EB]/30 rounded-xl p-3 flex flex-col gap-1.5 my-auto">
        <div className="flex justify-between items-center text-xs font-bold text-white">
          <span>Market Pattern Signal</span>
          <span className="text-[#10B981] font-black">STRONG BUY</span>
        </div>
        <div className="w-full bg-[#101010] h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-[#2563EB] to-[#10B981] h-full w-[89.4%]" />
        </div>
        <span className="text-[9px] text-[#A0A0A0] font-semibold text-right">
          89.4% AI Prediction Confidence
        </span>
      </div>
    </div>
  );
}

// User-friendly visual resolver per service id
function renderServiceMockup(id: number) {
  switch (id) {
    case 1: return <BrowserMockup />;
    case 2: return <PhoneMockup />;
    case 3: return <DesignCanvasMockup />;
    case 4: return <SpeedGaugeMockup />;
    case 5: return <ChatMockup />;
    case 6: return <WhatsAppMockup />;
    case 7: return <VoiceCallMockup />;
    case 8: return <WorkflowNodesMockup />;
    case 9: return <MiniDashboardMockup />;
    case 10: return <MiniDashboardMockup isCloud />;
    case 11: return <SecurityShieldMockup />;
    case 12: return <GoogleBusinessCardMockup />;
    case 13: return <InstagramGridMockup />;
    case 14: return <AdCardMockup />;
    case 15: return <GoogleAdsMockup />;
    case 16: return <FunnelMockup />;
    case 17: return <InboxMockup />;
    case 18: return <ABTestMockup />;
    case 19: return <QRCodeMockup />;
    case 20: return <PineScriptEditorMockup />;
    case 21: return <TradingBotTerminalMockup />;
    case 22: return <AutomatedStrategyMockup />;
    case 23: return <CustomIndicatorsAlertsMockup />;
    case 24: return <StrategyBacktestingMockup />;
    case 25: return <AITradingSystemsMockup />;
    default: return <BrowserMockup />;
  }
}

// Helper to render user icon in flow
function User(props: any) {
  return <Globe {...props} />;
}

// Main Component Implementation
export default function Hero() {
  const t = useTranslations('Hero');
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const [videoOpen, setVideoOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Instagram story carousel states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const slideDuration = 3500; // 3.5s per slide
  const progressInterval = 35; // 35ms steps for smooth progress fills
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle ESC key to close video modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVideoOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleUnmuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

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

  const handleFullscreenToggle = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullscreen(false);
      } else {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        } else if ((videoRef.current as any).webkitRequestFullscreen) {
          (videoRef.current as any).webkitRequestFullscreen();
        }
        setIsFullscreen(true);
      }
    }
  };

  // Core Auto-Advance loop
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((prevIdx) => (prevIdx + 1) % SERVICES.length);
          return 0;
        }
        return prev + (progressInterval / slideDuration) * 100;
      });
    }, progressInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const isRightHalf = clickX > rect.width / 2;

    if (isRightHalf) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    
    touchStartX.current = null;
    setIsPaused(false);
  };

  const jumpToCategory = (catKey: string) => {
    const firstIdx = SERVICES.findIndex((s) => s.cat === catKey);
    if (firstIdx !== -1) {
      setProgress(0);
      setCurrentIndex(firstIdx);
    }
  };

  const currentSlide = SERVICES[currentIndex];
  const catDetails = CATEGORIES[currentSlide.cat as keyof typeof CATEGORIES];
  const SlideIconComponent = currentSlide.icon;

  const tickerRow1 = [
    t('ticker.item1'),
    t('ticker.item2'),
    t('ticker.item3'),
    t('ticker.item4'),
    t('ticker.item5'),
    t('ticker.item6'),
    t('ticker.item7'),
  ];

  const tickerRow2 = [
    'Real Estate',
    'Restaurants',
    'Clinics',
    'Hotels',
    'Retail Outlets',
    'Education',
    'Construction',
    'Startups',
    'Salons',
    'Pharmacies',
  ];

  const industryPills = [
    { label: currentLocale === 'te' ? '🏠 రియల్ ఎస్టేట్' : '🏠 Real Estate' },
    { label: currentLocale === 'te' ? '🍛 రెస్టారెంట్లు' : '🍛 Restaurants' },
    { label: currentLocale === 'te' ? '🏥 క్లినిక్‌లు' : '🏥 Clinics' },
    { label: currentLocale === 'te' ? '🏨 హోటళ్లు' : '🏨 Hotels' },
    { label: currentLocale === 'te' ? '🎓 విద్య' : '🎓 Education' },
  ];

  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="relative bg-white overflow-hidden flex flex-col justify-between pt-24 pb-0 select-none">
      
      {/* Subtle background blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-teal-500/4 blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[150px] pointer-events-none z-0" />

      {/* Radial dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E5E5_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Top Contents Grid */}
      <div className="max-w-[1440px] px-4 sm:px-6 md:px-10 mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative z-10 my-auto pt-4 pb-4">
        
        {/* Left Column (55% width) */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="self-start inline-flex items-center gap-2 bg-[#FFF3EC] border border-[#FFD9C2] rounded-full px-4.5 py-2 text-xs font-bold text-primary tracking-wide"
          >
            <Rocket className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="uppercase tracking-[0.08em] text-[11px] md:text-xs">
              {t('eyebrow')}
            </span>
          </motion.div>

          {/* Headline H1 (Option D) */}
          <h1 className="font-display font-black text-[34px] md:text-[54px] lg:text-[56px] xl:text-[62px] tracking-tight leading-[1.08] text-charcoal">
            {t('h1Line1') && (
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5, ease: customEase }}
                className="block"
              >
                {t('h1Line1')}
              </motion.span>
            )}
            {t('h1Line2') && (
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: customEase }}
                className="block"
              >
                {t('h1Line2')}
              </motion.span>
            )}
            {t('h1Line3') && (
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: customEase }}
                className="block text-primary"
              >
                {t('h1Line3')}
              </motion.span>
            )}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            style={{ 
              maxWidth: currentLocale === 'te' ? '560px' : '520px',
              lineHeight: currentLocale === 'te' ? '1.7' : '1.6' 
            }}
            className="text-bodytext text-base md:text-[17px] font-medium"
          >
            {t('subtext')}
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center bg-primary hover:bg-[#e04c10] text-white font-bold text-[15px] px-8 py-3.5 rounded-lg shadow-sm hover:scale-[1.02] hover:shadow-lg transition-all duration-200 shrink-0"
            >
              <span>{t('ctaPrimary')}</span>
            </a>

            <button
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center justify-center border border-border bg-white hover:border-primary/50 hover:bg-[#FFF9F6] text-charcoal font-bold text-[15px] px-8 py-3.5 rounded-lg shadow-sm hover:scale-[1.02] transition-all duration-200 shrink-0 cursor-pointer"
            >
              <Play className="w-4 h-4 mr-2 fill-charcoal text-charcoal" />
              <span>{t('ctaSecondary')}</span>
            </button>
          </motion.div>

          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.35 }}
            className="flex items-center gap-3.5 mt-4 pt-4 border-t border-border/60 max-w-lg"
          >
            <div className="flex -space-x-3.5 select-none shrink-0">
              {['S', 'P', 'R', 'A', 'K'].map((init, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 rounded-full border-2 border-white bg-lightbg text-charcoal font-bold text-xs flex items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: idx % 2 === 0 ? '#FFF3EC' : '#FAFAFA',
                    color: idx % 2 === 0 ? '#FF5C1C' : '#1A2B4C',
                  }}
                >
                  {init}
                </div>
              ))}
            </div>
            
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-0.5 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xs font-bold text-[#666666] mt-0.5">
                {t('trustText')}
              </p>
            </div>
          </motion.div>

          {/* Industry proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.35 }}
            className="flex flex-col gap-2.5 mt-6 pt-2 border-t border-border/40 max-w-lg"
          >
            <span className="text-[10px] md:text-[11px] uppercase font-bold tracking-widest text-[#999999]">
              {currentLocale === 'te' ? 'స్థానిక వ్యాపారాలు:' : 'TRUSTED BY BUSINESSES IN:'}
            </span>
            <div className="flex flex-wrap gap-2">
              {industryPills.map((pill, idx) => (
                <span
                  key={idx}
                  className="bg-[#F5F5F5] border border-[#EEEEEE] text-bodytext text-xs font-bold px-3.5 py-1.5 rounded-full select-none"
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Column (45% width) - 480px x 580px FULL PRESENCE INSTAGRAM STORY CAROUSEL */}
        <div className="lg:col-span-5 flex flex-col gap-3 relative items-center lg:items-start justify-start z-10 w-full">
          
          <span className="text-[12px] md:text-[13px] text-[#888888] font-bold block text-center lg:text-left mb-1 leading-none select-none">
            {currentLocale === 'te' 
              ? 'మేము నిర్మించే 25 గ్రోత్ సిస్టమ్స్ చూడండి' 
              : 'Tap to see the 25 growth systems we build for you'}
          </span>

          {/* FULL FOOTPRINT CARD (480px x 580px) */}
          <div
            onClick={handleCardClick}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className={`w-full max-w-[480px] h-[580px] bg-white border border-[#EEEEEE] rounded-[24px] shadow-xl flex flex-col justify-between p-5 relative overflow-hidden cursor-pointer transition-all duration-300 ${catDetails.bgWash}`}
          >
            
            {/* 1. Top Segmented Progress Bars (25 thin segments) */}
            <div className="flex gap-[3px] w-full absolute top-4 left-0 px-5 z-20">
              {SERVICES.map((_, idx) => {
                let fillWidth = '0%';
                if (idx < currentIndex) {
                  fillWidth = '100%';
                } else if (idx === currentIndex) {
                  fillWidth = `${progress}%`;
                }

                return (
                  <div 
                    key={idx} 
                    className="h-[2.5px] flex-1 bg-[#E5E5E5] rounded-full overflow-hidden"
                  >
                    <div 
                      className="h-full rounded-full transition-all duration-[35ms] linear"
                      style={{ 
                        width: fillWidth,
                        backgroundColor: catDetails.fillColor 
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* 2. Top-Left Category Badge */}
            <div className="flex items-center gap-2.5 pt-5 z-10">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${catDetails.tint}`}>
                <SlideIconComponent className={`w-4 h-4 ${catDetails.accent}`} />
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${catDetails.accent}`}>
                {catDetails.label[currentLocale as keyof typeof catDetails.label]}
              </span>
            </div>

            {/* 3. DOMINANT REUSABLE MOCKUP VISUAL COMPONENT (240px Height) */}
            <div className="w-full my-auto z-10 flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="w-full flex flex-col items-center gap-3.5 text-center"
                >
                  {/* Real UI Mockup */}
                  <div className="w-full max-w-[420px]">
                    {renderServiceMockup(currentSlide.id)}
                  </div>

                  {/* 4 & 5. Service Name & One-line Hook */}
                  <div className="flex flex-col gap-1 px-2 mt-1">
                    <h3 className="font-display font-black text-xl md:text-2xl text-charcoal tracking-tight leading-tight">
                      {currentSlide.name[currentLocale as keyof typeof currentSlide.name]}
                    </h3>
                    <p className="text-bodytext text-xs md:text-sm font-semibold max-w-[340px]">
                      {currentSlide.hook[currentLocale as keyof typeof currentSlide.hook]}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 6. Bottom Price & Counter Footer */}
            <div className="flex justify-between items-center border-t border-[#EEEEEE]/80 pt-3 z-10">
              <span className="bg-[#FAFAFA] border border-[#EEEEEE] text-[#4B4B4B] font-bold text-xs px-3.5 py-1 rounded-full">
                {currentSlide.price[currentLocale as keyof typeof currentSlide.price]}
              </span>
              
              <span className="text-[11px] font-bold text-[#888888]">
                {currentIndex + 1} / {SERVICES.length}
              </span>
            </div>

          </div>

          {/* Quick Jump Category Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start w-full max-w-[480px] mt-1">
            <button
              onClick={() => jumpToCategory('web')}
              className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                currentSlide.cat === 'web' 
                  ? 'bg-[#FF5C1C] text-white border-[#FF5C1C]' 
                  : 'bg-white text-charcoal border-[#EEEEEE] hover:bg-[#FAFAFA]'
              }`}
            >
              {currentLocale === 'te' ? 'వెబ్ & యాప్' : 'Web & App'}
            </button>
            <button
              onClick={() => jumpToCategory('ai')}
              className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                currentSlide.cat === 'ai' 
                  ? 'bg-[#2563EB] text-white border-[#2563EB]' 
                  : 'bg-white text-charcoal border-[#EEEEEE] hover:bg-[#FAFAFA]'
              }`}
            >
              {currentLocale === 'te' ? 'ఏఐ & ఆటోమేషన్' : 'AI & Automation'}
            </button>
            <button
              onClick={() => jumpToCategory('marketing')}
              className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                currentSlide.cat === 'marketing' 
                  ? 'bg-[#16A34A] text-white border-[#16A34A]' 
                  : 'bg-white text-charcoal border-[#EEEEEE] hover:bg-[#FAFAFA]'
              }`}
            >
              {currentLocale === 'te' ? 'మార్కెటింగ్' : 'Marketing'}
            </button>
            <button
              onClick={() => jumpToCategory('trading')}
              className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                currentSlide.cat === 'trading' 
                  ? 'bg-[#D97706] text-white border-[#D97706]' 
                  : 'bg-white text-charcoal border-[#EEEEEE] hover:bg-[#FAFAFA]'
              }`}
            >
              {currentLocale === 'te' ? 'ట్రేడింగ్' : 'Trading'}
            </button>
          </div>

          {/* View All Link */}
          <Link
            href={`/${currentLocale}/services`}
            className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
          >
            <span>{currentLocale === 'te' ? 'అన్ని సేవలను చూడండి →' : 'View All 25 Services →'}</span>
          </Link>

        </div>

      </div>

      {/* Full-width 3-stat benefit row */}
      <div className="max-w-[1440px] px-4 sm:px-6 md:px-10 mx-auto w-full mt-10 mb-8 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-2xl p-5 flex items-start gap-4 shadow-sm">
            <div className="bg-[#FFF3EC] p-2 rounded-full text-primary shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal leading-snug">
                {currentLocale === 'te' 
                  ? 'చాలా సైట్లు లోడ్ అవ్వడానికి 8+ సెకన్లు పడుతుంది. మావి 2 సెకన్ల లోపే.'
                  : 'Most sites load in 8+ seconds. Ours load in under 2.'}
              </p>
            </div>
          </div>

          <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-2xl p-5 flex items-start gap-4 shadow-sm">
            <div className="bg-[#FFF3EC] p-2 rounded-full text-primary shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal leading-snug">
                {currentLocale === 'te' 
                  ? '73% మంది మీ కస్టమర్లు మొదట మొబైల్‌లోనే వెతుకుతారు.'
                  : '73% of your customers search on mobile first.'}
              </p>
            </div>
          </div>

          <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-2xl p-5 flex items-start gap-4 shadow-sm">
            <div className="bg-[#FFF3EC] p-2 rounded-full text-primary shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal leading-snug">
                {currentLocale === 'te' 
                  ? 'ఈమెయిల్ కంటే వాట్సాప్‌కు 3 రెట్లు ఎక్కువ రిప్లైలు వస్తాయి.'
                  : 'WhatsApp gets 3x more replies than email.'}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Double ticker strip */}
      <div className="w-full bg-[#FAFAFA] border-t border-[#EEEEEE] py-3.5 overflow-hidden select-none whitespace-nowrap relative z-10">
        <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-2 w-full">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-default">
            {[...Array(2)].map((_, arrayIdx) => (
              <div key={arrayIdx} className="flex gap-10 items-center px-4">
                {tickerRow1.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] tracking-wider uppercase font-display font-extrabold text-[#888888] flex items-center gap-3"
                  >
                    {item}
                    <span className="text-primary">•</span>
                  </span>
                ))}
              </div>
            ))}
          </div>

          <div className="hidden md:flex w-max animate-marquee-reverse hover:[animation-play-state:paused] cursor-default">
            {[...Array(2)].map((_, arrayIdx) => (
              <div key={arrayIdx} className="flex gap-10 items-center px-4">
                {tickerRow2.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] tracking-wider uppercase font-display font-extrabold text-[#A0A0A0] flex items-center gap-3"
                  >
                    {item}
                    <span className="text-primary">•</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Lightbox Modal Overlay (DCH_Ad.mp4) */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/85 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md"
          >
            <div 
              className="absolute inset-0 z-0 cursor-pointer"
              onClick={() => setVideoOpen(false)}
            />

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-[840px] max-h-[85vh] sm:max-h-[88vh] bg-[#111111] rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10 flex flex-col my-auto text-left select-none"
            >
              {/* Header Bar with explicit close */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#1A1A1A] text-white">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-primary fill-primary" />
                  <span className="font-display font-black text-xs sm:text-sm text-white">
                    {currentLocale === 'te' ? 'DCH క్లయింట్ విన్ షోకేస్ వీడియో' : 'DCH Client Showcase Reel (Real Results)'}
                  </span>
                  <span className="bg-primary/20 text-primary border border-primary/30 text-[9px] font-bold px-2 py-0.5 rounded">
                    1080p HD
                  </span>
                </div>
                
                <button
                  onClick={() => setVideoOpen(false)}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  aria-label="Close Showcase Modal"
                >
                  <X className="w-4 h-4" />
                  <span>{currentLocale === 'te' ? 'మూసివేయి ✕' : 'Close ✕'}</span>
                </button>
              </div>

              {/* Video Player Frame constrained within screen view */}
              <div className="relative w-full h-[60vh] max-h-[520px] bg-black flex items-center justify-center overflow-hidden rounded-xl">
                <video
                  ref={videoRef}
                  src="/videos/DCH_Ad.mp4"
                  className="w-full h-full object-contain"
                  autoPlay
                  muted={isMuted}
                  playsInline
                  onClick={handlePlayPauseToggle}
                />

                {/* Floating Sound Hint Banner if Muted */}
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

              {/* Bottom Custom Control Bar */}
              <div className="bg-[#1A1A1A] border-t border-white/10 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 text-white">
                
                {/* Left Controls: Play/Pause + Sound ON/OFF Toggle */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePlayPauseToggle}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-primary" /> : <Play className="w-4 h-4 text-primary fill-primary" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  {/* Explicit Sound ON / Sound OFF toggle button requested by user */}
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

                {/* Right Controls: Full Screen View + Close Button */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleFullscreenToggle}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                    <span>{isFullscreen ? 'Exit Full Screen' : 'Full Screen ⛶'}</span>
                  </button>

                  <button
                    onClick={() => setVideoOpen(false)}
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
