'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, CheckCircle2, Shield, Star, Check, Send, Sparkles, MapPin, Globe, ShieldAlert, AlertTriangle } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function FreeAuditPage() {
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: '',
    city: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    const phoneVal = formData.phone.trim();
    if (!phoneVal) {
      newErrors.phone = 'Phone number is required';
    } else if (phoneVal.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit number';
    }

    if (!formData.businessType.trim()) newErrors.businessType = 'Business type is required';
    if (!formData.city.trim()) newErrors.city = 'City / Location is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        businessType: '',
        city: '',
      });
    }, 1200);
  };

  const auditItems = [
    { 
      title: currentLocale === 'te' ? 'గూగుల్ మ్యాప్స్ ఆడిట్' : 'Google Business Audit', 
      desc: currentLocale === 'te' ? 'స్థానిక ప్రజలు శోధిస్తున్నప్పుడు మీ సేవలు కనిపిస్తున్నాయా?' : 'Are you appearing when locals search your service?',
      icon: MapPin,
      color: 'bg-[#FFF3EC] text-primary'
    },
    { 
      title: currentLocale === 'te' ? 'వెబ్‌సైట్ స్పీడ్ & ఎస్ఈఓ' : 'Website Speed & SEO', 
      desc: currentLocale === 'te' ? 'మీ సైట్ స్లోగా ఉండటం వల్ల కస్టమర్లను కోల్పోతున్నారా?' : 'Is your site costing you customers?',
      icon: Globe,
      color: 'bg-[#EEF7FF] text-[#2563EB]'
    },
    { 
      title: currentLocale === 'te' ? 'ప్రత్యర్థి గ్యాప్ నివేదిక' : 'Competitor Gap Report', 
      desc: currentLocale === 'te' ? 'మీ ప్రత్యర్థులు ఆన్‌లైన్‌లో ఏం చేస్తున్నారు, మీరు ఏం మిస్ అవుతున్నారు?' : 'What are your competitors doing that you\'re not?',
      icon: ShieldAlert,
      color: 'bg-[#F5F3FF] text-[#7C3AED]'
    },
    { 
      title: currentLocale === 'te' ? 'ఆదాయ లీక్ అంచనా' : 'Revenue Leak Estimate', 
      desc: currentLocale === 'te' ? 'డిజిటల్ ఉనికి సరిగ్గా లేనందున ఎంత ఆదాయం కోల్పోతున్నారు?' : 'How much money are you losing to poor digital presence?',
      icon: AlertTriangle,
      color: 'bg-[#FFF8E5] text-[#D97706]'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-charcoal antialiased flex flex-col justify-between select-none">
      
      {/* Simplified Header */}
      <header className="border-b border-border py-4 bg-white shadow-soft h-[76px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <Link href={`/${currentLocale}`} className="flex flex-col group select-none">
            <span className="font-display font-black text-xl tracking-tight text-charcoal leading-none">
              DIGITAL<span className="text-primary">CREATORS</span>
            </span>
            <span className="text-[9px] text-bodytext font-display font-extrabold uppercase tracking-[0.2em] mt-0.5">
              Growth Partner
            </span>
          </Link>

          <a
            href="tel:+919912799855"
            className="flex items-center gap-2 text-sm font-semibold text-bodytext hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>+91 99127 99855</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-16 flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start w-full">
          
          {/* Left Column: Context Details */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="self-start inline-flex items-center gap-1 bg-[#FFF3EC] border border-primary/20 rounded-full px-3.5 py-1.5 text-xs font-bold text-primary tracking-wide">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Limited Slots Available This Week</span>
            </div>

            <h1 className="font-display font-black text-3xl md:text-4xl lg:text-[46px] tracking-tight uppercase leading-[1.1] text-charcoal">
              Get Your <span className="text-primary font-black">FREE</span> Digital Audit — <br />
              Worth ₹5,000, Today at <span className="text-primary font-black">Zero Cost</span>.
            </h1>

            <p className="text-bodytext text-sm md:text-base leading-relaxed max-w-xl font-semibold">
              We'll review your Google ranking, website speed, competitor gap, and missed revenue opportunities — and send you a personalized report within 24 hours. No sales pitch. No obligation.
            </p>

            {/* Audit Checklist Items as Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 mt-2">
              {auditItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="bg-white border border-[#EEEEEE] rounded-xl p-5 flex flex-col gap-3 text-left shadow-soft">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display font-extrabold text-charcoal text-sm md:text-base">{item.title}</span>
                      <p className="text-[#666666] text-xs leading-relaxed mt-1 font-semibold">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* NEW ADD: Sample Audit Preview Card */}
            <div className="bg-[#FFF8F0] border border-[#FFD9C2]/40 rounded-xl p-6.5 text-left flex flex-col gap-3 mt-4">
              <h4 className="text-xs font-bold text-primary tracking-widest uppercase">
                📊 Sample Audit Report Preview
              </h4>
              <div className="bg-white rounded-lg p-4 border border-[#EEEEEE] shadow-sm flex flex-col gap-2 relative overflow-hidden select-none opacity-90">
                <div className="flex justify-between items-center border-b border-[#EEEEEE] pb-2 text-[10px] font-bold text-bodytext">
                  <span>REPORT: LOCAL SEO AUDIT</span>
                  <span className="text-[#25D366]">PASS INDEX: 42%</span>
                </div>
                <div className="flex flex-col gap-1.5 mt-1.5">
                  <div className="flex justify-between text-xs text-charcoal">
                    <span>⚡ Core Web Vitals Speed Score:</span>
                    <span className="font-bold text-red-500">Poor (2.8s delay)</span>
                  </div>
                  <div className="flex justify-between text-xs text-charcoal">
                    <span>📍 Google Business Profile Position:</span>
                    <span className="font-bold text-orange-500">Rank #7 (Top 3 misses 14 leads/mo)</span>
                  </div>
                  <div className="flex justify-between text-xs text-charcoal">
                    <span>💬 WhatsApp Automation Sync:</span>
                    <span className="font-bold text-red-500">Missing (100% manual reply)</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent pointer-events-none" />
              </div>
              <span className="text-[10px] text-bodytext font-bold italic">
                * Real report shows your own brand screenshot, checklist, and exact fixes.
              </span>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-5 bg-white border border-[#EEEEEE] rounded-xl p-6 md:p-8.5 shadow-soft relative w-full text-left">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                >
                  <h3 className="font-display font-black text-lg text-charcoal">Secure Your Audit Report</h3>
                  <div className="h-[1px] bg-border w-full mb-1" />

                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`bg-white border ${errors.name ? 'border-red-500' : 'border-[#DDDDDD]'} focus:border-primary focus:ring-3 focus:ring-primary/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-all`}
                      placeholder="Ramesh Kumar"
                    />
                    {errors.name && <span className="text-red-500 text-[11px] font-semibold">{errors.name}</span>}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-wider">Phone Number *</label>
                    <div className="flex rounded-xl overflow-hidden border border-[#DDDDDD] focus-within:border-primary focus-within:ring-3 focus-within:ring-primary/10 transition-all bg-white">
                      <span className="bg-[#FAFAFA] border-r border-[#DDDDDD] text-bodytext text-xs font-bold px-3 py-3.5 flex items-center select-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                        className="bg-white flex-1 px-4 py-3.5 text-sm focus:outline-none"
                        placeholder="99887 76655"
                      />
                    </div>
                    {errors.phone && <span className="text-red-500 text-[11px] font-semibold mt-0.5">{errors.phone}</span>}
                  </div>

                  {/* Business Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-wider">Business Type / Industry *</label>
                    <input
                      type="text"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className={`bg-white border ${errors.businessType ? 'border-red-500' : 'border-[#DDDDDD]'} focus:border-primary focus:ring-3 focus:ring-primary/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-all`}
                      placeholder="Dental Clinic / Real Estate Builder"
                    />
                    {errors.businessType && <span className="text-red-500 text-[11px] font-semibold">{errors.businessType}</span>}
                  </div>

                  {/* City */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-wider">City / Location *</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className={`bg-white border ${errors.city ? 'border-red-500' : 'border-[#DDDDDD]'} focus:border-primary focus:ring-3 focus:ring-primary/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-all`}
                      placeholder="Vijayawada"
                    />
                    {errors.city && <span className="text-red-500 text-[11px] font-semibold">{errors.city}</span>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center justify-center bg-primary hover:bg-[#e04d15] text-white font-bold text-base py-4 rounded-xl shadow-md transition-all duration-250 disabled:opacity-75 hover:scale-[1.01] cursor-pointer mt-2"
                  >
                    <span className="flex items-center gap-2">
                      {isSubmitting ? 'Securing Audit Slot...' : 'Get My Free Audit →'}
                    </span>
                  </button>

                  {/* Trust indicator Row */}
                  <div className="flex flex-col gap-2 text-center text-[11px] text-[#888888] font-bold mt-2.5">
                    <div className="flex justify-center gap-4">
                      <span>✓ 200+ audits done</span>
                      <span>✓ Delivered within 24h</span>
                    </div>
                    <span>✓ Real insights, not a sales pitch</span>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-10 gap-5"
                >
                  <div className="w-14 h-14 bg-growth/10 text-growth rounded-full flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display font-black text-xl text-charcoal">Audit Requested! 🎉</h3>
                    <p className="text-bodytext text-xs leading-relaxed max-w-xs font-semibold">
                      We will audit your digital profile parameters and send the custom report directly to your phone within 24 hours.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/919912799855"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-6 py-3 rounded-xl shadow-sm text-xs mt-2"
                  >
                    <Phone className="w-4 h-4 text-white fill-white shrink-0" />
                    <span>WhatsApp Satish Directly</span>
                  </a>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs text-primary font-bold hover:underline cursor-pointer"
                  >
                    Request another audit
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="border-t border-[#EEEEEE] py-6 bg-[#FAFAFA] text-center text-xs text-bodytext font-bold">
        <div className="max-w-[1440px] px-8 md:px-10 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 Digital Creators Hub. All rights reserved.</span>
          
          <div className="flex gap-4 text-charcoal">
            <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-primary" /> 100% Private</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-primary fill-primary" /> Rated 4.9/5</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
