'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Send, CheckCircle2, Shield, Star } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function Contact() {
  const t = useTranslations('Contact');
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    message: '',
    services: [] as string[],
    budget: '',
    prefLanguage: 'English',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedServices, setSubmittedServices] = useState<string[]>([]);

  const availableServices = [
    'Google GBP',
    'Website',
    'Social Media',
    'Meta Ads',
    'AI Automation',
    'WhatsApp Bot',
    'QR Menu',
    'CRM Dashboard',
  ];

  const budgetRanges = [
    'Under ₹5,000',
    '₹5,000–15,000',
    '₹15,000–30,000',
    '₹30,000+',
    'Not sure yet',
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleBudgetSelect = (range: string) => {
    setFormData((prev) => ({ ...prev, budget: range }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Business name is required';
    
    const rawPhone = formData.phone.trim();
    if (!rawPhone) {
      newErrors.phone = 'Phone number is required';
    } else if (rawPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit number';
    }
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitting(false);
        setSubmittedServices([...formData.services]);
        setIsSuccess(true);
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          city: '',
          message: '',
          services: [],
          budget: '',
          prefLanguage: 'English',
        });
      } else {
        setIsSubmitting(false);
        setErrors({ submit: result.error || 'Failed to submit form. Please try again.' });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setIsSubmitting(false);
      setErrors({ submit: 'Network error. Please check your connection or WhatsApp us directly.' });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAFAFA] text-charcoal relative overflow-hidden select-none border-b border-border/60">
      <div className="max-w-[1440px] px-8 md:px-10 mx-auto w-full relative z-10">
        
        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Form (58%) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-2.5">
                GET IN TOUCH
              </span>
              <h2 className="font-display font-black text-3xl md:text-[40px] tracking-tight leading-tight text-charcoal">
                {currentLocale === 'te' ? 'మీ వ్యాపార ఎదుగుదలని ప్రారంభించండి.' : "Let's build your growth engine."}
              </h2>
              <p className="text-bodytext mt-3.5 text-base md:text-[17px] font-semibold leading-relaxed">
                {currentLocale === 'te' 
                  ? 'ఈ వివరాలను పూరించండి. వర్కింగ్ రోజులలో సతీష్ 2 గంటల్లోగా మీకు సమాధానం ఇస్తారు.' 
                  : 'Fill this in. Satish will reply within 2 hours on business days — not a generic auto-reply, an actual response.'}
              </p>
            </div>

            <div className="bg-white border border-[#EEEEEE] rounded-2xl p-8 md:p-10 shadow-soft relative mt-2">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6 text-left"
                  >
                    
                    {/* Fields Block */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-charcoal uppercase tracking-wider">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`bg-white border ${errors.name ? 'border-red-500' : 'border-[#DDDDDD]'} focus:border-primary focus:ring-3 focus:ring-primary/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-all`}
                          placeholder="Ramesh Kumar"
                        />
                        {errors.name && <span className="text-red-500 text-[11px] font-semibold mt-0.5">{errors.name}</span>}
                      </div>

                      {/* Phone Number with fixed prefix segment */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-charcoal uppercase tracking-wider">
                          Phone Number <span className="text-primary">*</span>
                        </label>
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

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Business Name */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-charcoal uppercase tracking-wider">
                          Business Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className={`bg-white border ${errors.company ? 'border-red-500' : 'border-[#DDDDDD]'} focus:border-primary focus:ring-3 focus:ring-primary/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-all`}
                          placeholder="Grand Residency"
                        />
                        {errors.company && <span className="text-red-500 text-[11px] font-semibold mt-0.5">{errors.company}</span>}
                      </div>

                      {/* City/District (Optional) */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-charcoal uppercase tracking-wider flex items-center justify-between">
                          <span>City / District</span>
                          <span className="text-[10px] text-[#888888] font-bold lowercase italic">(optional)</span>
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="bg-white border border-[#DDDDDD] focus:border-primary focus:ring-3 focus:ring-primary/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-all"
                          placeholder="Vijayawada"
                        />
                      </div>

                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-charcoal uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`bg-white border ${errors.email ? 'border-red-500' : 'border-[#DDDDDD]'} focus:border-primary focus:ring-3 focus:ring-primary/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-all`}
                        placeholder="ramesh@gmail.com"
                      />
                      {errors.email && <span className="text-red-500 text-[11px] font-semibold mt-0.5">{errors.email}</span>}
                    </div>

                    {/* Visual Services multi-select */}
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-bold text-charcoal uppercase tracking-wider">
                        Services Interested
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {availableServices.map((service) => {
                          const isChecked = formData.services.includes(service);
                          return (
                            <button
                              type="button"
                              key={service}
                              onClick={() => handleServiceToggle(service)}
                              className={`px-4.5 py-2.5 rounded-full text-xs font-bold tracking-wide border transition-all duration-200 cursor-pointer ${
                                isChecked
                                  ? 'bg-primary border-primary text-white shadow-sm'
                                  : 'bg-white border-[#DDDDDD] text-charcoal hover:bg-[#FFF9F6] hover:border-primary/40'
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget Range selector (Optional) */}
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-bold text-charcoal uppercase tracking-wider flex items-center justify-between">
                        <span>What's your approximate monthly budget?</span>
                        <span className="text-[10px] text-[#888888] font-bold lowercase italic">(optional)</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetRanges.map((range) => {
                          const isSelected = formData.budget === range;
                          return (
                            <button
                              type="button"
                              key={range}
                              onClick={() => handleBudgetSelect(range)}
                              className={`px-4.5 py-2.5 rounded-full text-xs font-bold tracking-wide border transition-all duration-200 cursor-pointer ${
                                isSelected
                                  ? 'bg-primary border-primary text-white shadow-sm'
                                  : 'bg-white border-[#DDDDDD] text-charcoal hover:bg-[#FFF9F6] hover:border-primary/40'
                              }`}
                            >
                              {range}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Preferred Language */}
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-bold text-charcoal uppercase tracking-wider">
                        Preferred Contact Language
                      </label>
                      <div className="flex gap-2">
                        {['English', 'తెలుగు Telugu'].map((lang) => {
                          const isActive = formData.prefLanguage === lang;
                          return (
                            <button
                              type="button"
                              key={lang}
                              onClick={() => setFormData({ ...formData, prefLanguage: lang })}
                              className={`px-5 py-2.5 rounded-full text-xs font-bold border transition-all duration-200 cursor-pointer ${
                                isActive
                                  ? 'bg-primary border-primary text-white shadow-sm'
                                  : 'bg-white border-[#DDDDDD] text-charcoal hover:bg-[#FFF9F6] hover:border-primary/45'
                              }`}
                            >
                              {lang}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-charcoal uppercase tracking-wider">
                        Tell us about your business
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-white border border-[#DDDDDD] focus:border-primary focus:ring-3 focus:ring-primary/10 rounded-xl p-3.5 text-sm focus:outline-none transition-all resize-none"
                        placeholder="Tell us about your business and what's not working digitally..."
                      />
                    </div>

                    {/* Submit Error Banner */}
                    {errors.submit && (
                      <div className="bg-red-50 border border-red-200 text-red-600 text-xs font-bold p-3 rounded-lg text-center">
                        {errors.submit}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center bg-primary hover:bg-[#e04d15] text-white font-bold text-base py-4 rounded-xl shadow-md transition-all duration-250 disabled:opacity-75 disabled:cursor-not-allowed hover:scale-[1.01] cursor-pointer mt-2"
                    >
                      <span className="flex items-center gap-1.5">
                        {isSubmitting ? 'Sending Request...' : '🚀 Send My Request →'}
                      </span>
                    </button>

                    {/* Private trust warning text */}
                    <p className="text-[12px] text-[#888888] font-bold text-center mt-2 leading-none">
                      🔒 Your information stays private. We never share or sell your details.
                    </p>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-8 gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.4 }}
                      className="w-14 h-14 bg-growth/10 text-growth rounded-full flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-9 h-9" />
                    </motion.div>

                    <div className="flex flex-col gap-2">
                      <h3 className="font-display font-black text-xl text-charcoal">
                        Request Received! 🎉
                      </h3>
                      <p className="text-bodytext text-sm font-semibold max-w-sm leading-relaxed">
                        Thank you! Satish Chittelu will WhatsApp you within 2 hours.
                      </p>
                    </div>

                    {/* Recap details of selected services */}
                    {submittedServices.length > 0 && (
                      <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-xl px-5 py-3.5 max-w-xs w-full text-center">
                        <span className="text-[10px] text-bodytext uppercase tracking-widest block mb-1">We've noted you are interested in:</span>
                        <span className="text-xs font-bold text-charcoal block">
                          {submittedServices.join(', ')}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col gap-3 w-full max-w-xs mt-3">
                      <a
                        href="https://wa.me/919912799855"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 rounded-xl shadow-sm text-sm"
                      >
                        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                        <span>Add us on WhatsApp</span>
                      </a>
                      
                      <a
                        href={`/${currentLocale}#contact`}
                        onClick={() => setIsSuccess(false)}
                        className="inline-flex items-center justify-center border border-border hover:bg-lightbg text-charcoal font-bold py-3.5 rounded-xl text-sm"
                      >
                        <span>Book a Call Instead</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Founder & Contacts info (42%) */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full text-left">
            
            {/* Founder Card */}
            <div className="bg-white border border-[#EEEEEE] p-6.5 rounded-2xl flex flex-col gap-4 shadow-soft">
              <div className="flex items-center gap-3.5">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-primary/20 shadow-sm shrink-0 bg-[#FAFAFA]">
                  <Image
                    src="/logo.jpg"
                    alt="Satish Chittelu"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-base text-charcoal leading-none">Satish Chittelu</span>
                  <span className="text-[11px] font-bold text-bodytext uppercase tracking-wider mt-1">Founder & CEO</span>
                  
                  {/* Usually replies in under 2 hours tag */}
                  <span className="text-[10px] font-bold text-[#2E7D32] bg-[#EAF7EE] px-2.5 py-0.5 rounded-md w-max mt-2">
                    💬 Usually replies in &lt; 2 hours
                  </span>
                </div>
              </div>
              
              <div className="border-t border-[#EEEEEE] pt-3 text-[11px] text-[#888888] font-bold tracking-wide">
                ⏱️ Last reply sent: 34 minutes ago
              </div>
            </div>

            {/* Direct WhatsApp Call */}
            <a
              href="https://wa.me/919912799855"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-[#25D366] hover:bg-[#20ba59] text-white font-bold p-4.5 rounded-xl shadow-sm transition-transform duration-200 hover:scale-[1.01]"
            >
              <span className="flex items-center gap-2.5">
                <MessageCircle className="w-5.5 h-5.5 fill-white text-[#25D366] shrink-0" />
                <span>📱 WhatsApp: +91 99127 99855</span>
              </span>
              <span className="bg-white/20 text-white text-[9px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-md">
                Fast
              </span>
            </a>

            {/* Call Directly */}
            <a
              href="tel:+919912799855"
              className="flex items-center gap-2.5 bg-white border border-[#DDDDDD] hover:bg-lightbg text-charcoal font-bold p-4.5 rounded-xl shadow-sm transition-transform duration-200 hover:scale-[1.01]"
            >
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span>📞 Call Directly: +91 99127 99855</span>
            </a>

            {/* Details list */}
            <div className="flex flex-col gap-3.5 bg-white border border-[#EEEEEE] rounded-xl p-5.5 text-xs text-bodytext font-bold shadow-soft">
              <a href="mailto:hello@digitalcreatorshub.in" className="flex items-center gap-2.5 hover:text-primary transition-colors text-[#666666]">
                <span className="text-base select-none">📧</span>
                <span className="font-bold text-charcoal">hello@digitalcreatorshub.in</span>
              </a>
              <div className="flex items-center gap-2.5">
                <span className="text-base select-none">📍</span>
                <span>Serving AP, Telangana & beyond</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-base select-none">⏰</span>
                <span>Mon–Sat, 9:00 AM – 7:00 PM IST</span>
              </div>
            </div>

            {/* Office Mini-Map Embedding */}
            <div className="bg-white border border-[#EEEEEE] rounded-xl p-3 shadow-soft flex flex-col gap-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122425.2223847242!2d80.56942944510006!3d16.506174291880957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9a388b3c1%3A0x3b3a3c9e6859345e!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-[140px] rounded-lg border border-border" 
                allowFullScreen={false} 
                loading="lazy"
                title="Vijayawada Office Map"
              ></iframe>
              <span className="text-[11px] font-bold text-charcoal text-center">
                📍 Vijayawada, Andhra Pradesh
              </span>
            </div>

            {/* Security footer elements */}
            <div className="flex flex-wrap justify-between text-[11px] text-[#888888] px-1 mt-1 font-bold gap-y-2">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" /> Your info is 100% private
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-primary fill-primary" /> 200+ local brands served
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
