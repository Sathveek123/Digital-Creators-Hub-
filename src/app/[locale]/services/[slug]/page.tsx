import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Check, ArrowRight, ShieldAlert, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ServiceData {
  title: string;
  tagline: string;
  forWhom: string;
  price: string;
  deliverables: { title: string; desc: string }[];
  steps: string[];
  metrics: string[];
  faq: { q: string; a: string }[];
}

const servicesMap: Record<string, ServiceData> = {
  'google-business-profile': {
    title: 'Google Business Profile',
    tagline: 'Rank #1 on Google Maps in your local city.',
    forWhom: 'Clinics, Restaurants, Retail Outlets, Salons, Real Estate Agencies',
    price: '₹3,999/month',
    deliverables: [
      { title: 'Local Top 3 Ranking', desc: 'Dominate map results when clients search for your services locally.' },
      { title: 'Review Automation', desc: 'Collect five-star reviews automatically from your customers.' },
      { title: 'GBP Posts & Optimization', desc: 'Frequent updates, photos, and Q&A to boost search algorithms.' }
    ],
    steps: [
      'Conduct local keyword search & profile audit.',
      'Optimize descriptions, tags, maps pin, and opening details.',
      'Deploy automatic review links & monthly ranking updates.'
    ],
    metrics: ['+150% Inbound Calls', 'Ranked in Top 3 in 60 Days'],
    faq: [
      { q: 'How long does ranking take?', a: 'Most profiles enter the Google Maps Top 3 local pack in 45-75 days depending on local competition.' },
      { q: 'Is there a setup fee?', a: 'No, we operate on a transparent month-to-month retainer with zero setup charges.' }
    ]
  },
  'business-website': {
    title: 'Business Website',
    tagline: 'Custom-coded websites that load instantly and capture leads.',
    forWhom: 'Startups, Builders, Corporate Brands, E-Commerce Stores',
    price: '₹14,999 one-time',
    deliverables: [
      { title: 'Custom UI Design', desc: 'Zero templates. Hand-crafted layouts matching your brand voice.' },
      { title: 'Next.js Fast Engine', desc: 'Coded in Next.js ensuring sub-second speeds and mobile responsiveness.' },
      { title: 'WhatsApp & Lead Integration', desc: 'One-click user conversions routed directly to your phone.' }
    ],
    steps: [
      'Draw structural wireframes & color palettes.',
      'Clean modular coding on React/Next.js and SEO testing.',
      'Launch on fast global servers (Vercel/Netlify).'
    ],
    metrics: ['1.1s Page Speed', '98% Mobile Experience Score'],
    faq: [
      { q: 'Can I edit content later?', a: 'Yes! We configure a user-friendly CMS dashboard allowing you to edit text/photos in minutes.' },
      { q: 'Is hosting included?', a: 'First 12 months of global fast hosting is fully included in the package.' }
    ]
  },
  'social-media-management': {
    title: 'Social Media Management',
    tagline: 'Your social profiles, posting high-quality creatives every single day.',
    forWhom: 'Hotels, Cafes, Spas, Educational Institutes, Personal Brands',
    price: '₹6,999/month',
    deliverables: [
      { title: '30 Visual Posts', desc: 'Custom feed designs, story templates, and high-impact copywriting.' },
      { title: 'Reels & Video Editing', desc: 'Short-form vertical video cut, graded, and optimized for algorithms.' },
      { title: 'DM & Community replies', desc: 'Active monitoring of comments and incoming queries to capture leads.' }
    ],
    steps: [
      'Create monthly content calendars and brand assets.',
      'Develop graphic slides and edit video clips.',
      'Schedule postings and automate direct response hooks.'
    ],
    metrics: ['+250% Organic Engagement', '12+ Lead Inquiries Weekly'],
    faq: [
      { q: 'Do you write the captions?', a: 'Yes, our copywriting team writes fully localized captions in English and Telugu.' },
      { q: 'Who shoots the videos?', a: 'We guide your team on simple templates to record on phone, and we do the expert editing.' }
    ]
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    tagline: 'Facebook and Google ads that drive phone calls and bookings.',
    forWhom: 'Real Estate Builders, Dental Clinics, Tuition Centres, Shops',
    price: '₹4,999/month + ad spend',
    deliverables: [
      { title: 'Audience Targeting', desc: 'Direct mapping to buyers located in specific local neighborhoods.' },
      { title: 'High-Converting Creatives', desc: 'A/B tested ad copy, graphics, and video slides designed to convert.' },
      { title: 'Live Lead Routing', desc: 'Leads synced instantly to your WhatsApp/Email so you can call immediately.' }
    ],
    steps: [
      'Build campaign target audiences and select budgets.',
      'Launch initial test creatives and tracking pixels.',
      'Optimize campaigns weekly, scaling profitable ads.'
    ],
    metrics: ['3.2x Meta Ad ROI', '300+ Leads Generated Monthly'],
    faq: [
      { q: 'How much ad budget is needed?', a: 'We recommend starting with ₹300 to ₹500 per day as your local ad testing budget.' },
      { q: 'Do we pay ad spend to you?', a: 'No, ad spend is paid directly to Facebook/Google. You only pay DCH our flat management fee.' }
    ]
  },
  'ai-lead-automation': {
    title: 'AI Lead Automation',
    tagline: 'Never lose a hot lead to a slow response at 2 AM.',
    forWhom: 'Gyms, Real Estate Agencies, Multi-location Clinics, B2B Brands',
    price: '₹7,999/month',
    deliverables: [
      { title: '24/7 Smart Agent', desc: 'Instant automated replies to client comments, DMs, or site forms.' },
      { title: 'Lead Qualification Bot', desc: 'Prequalifies incoming leads by asking budget, location, and requirements.' },
      { title: 'Appointment Booking', desc: 'Coordinates client timings and books appointments directly onto your calendar.' }
    ],
    steps: [
      'Map your typical client queries and booking parameters.',
      'Develop & train the AI assistant flow in Telugu and English.',
      'Integrate with WhatsApp API, Instagram DMs, and CRM.'
    ],
    metrics: ['98% Response Speed Boost', '85% Qualification Automated'],
    faq: [
      { q: 'Can the bot speak Telugu?', a: 'Yes! We configure bilingual logic so the bot can respond naturally in both Telugu and English.' },
      { q: 'Do we need a developer to edit it?', a: 'No, we build it on accessible logic panels and provide full support training.' }
    ]
  },
  'whatsapp-automation': {
    title: 'WhatsApp Automation',
    tagline: 'Automate broadcasts, notifications, and client chats.',
    forWhom: 'Restaurants, Retail Stores, E-Commerce, Logistics',
    price: '₹5,999/month',
    deliverables: [
      { title: 'WhatsApp Broadcasts', desc: 'Send bulk updates and festive offers directly to your contact lists.' },
      { title: 'Commission-Free Ordering', desc: 'Customers review menus, select items, and order directly in WhatsApp.' },
      { title: 'Automatic Notifications', desc: 'Deliver instant shipping updates, booking receipts, or invoices.' }
    ],
    steps: [
      'Acquire official WhatsApp Business API credentials.',
      'Setup menus, templates, and triggers.',
      'Integrate with order databases or local CRMs.'
    ],
    metrics: ['70% Direct WhatsApp Orders', '98% Open Rate on Campaigns'],
    faq: [
      { q: 'Are we blocked for broadcasting?', a: 'We build on the official Meta WhatsApp API to ensure your number is completely protected from bans.' },
      { q: 'Can we send images?', a: 'Yes! You can broadcast images, PDFs, videos, and interactive click buttons.' }
    ]
  },
  'qr-code-solutions': {
    title: 'QR Code Solutions',
    tagline: 'Bridge physical check-ins with digital profiles seamlessly.',
    forWhom: 'Cafes, Restaurants, Spas, Salons, Boutique Stays',
    price: '₹2,999 setup',
    deliverables: [
      { title: 'Smart QR Stands', desc: 'Custom-designed table stands redirecting to Google maps or menus.' },
      { title: 'Review Booster Flow', desc: 'Routes happy clients to Google Maps reviews in one click.' },
      { title: 'Dynamic QR Redirects', desc: 'Change the destination URL of physical QR codes anytime without reprinting.' }
    ],
    steps: [
      'Generate review and menu trigger hooks.',
      'Design high-quality visual QR layouts.',
      'Provide vector print-ready templates.'
    ],
    metrics: ['+300% Review Count Boost', '95% Menu Load Speed Improvement'],
    faq: [
      { q: 'Can we change the link later?', a: 'Yes, our dynamic dashboard lets you change the target URL anytime without changing the QR print.' },
      { q: 'Do we print them?', a: 'We provide print-ready PDFs. We can also handle printing and shipping stands for a minor additional charge.' }
    ]
  },
  'crm-dashboard': {
    title: 'CRM & Dashboards',
    tagline: 'See your entire sales pipeline in one single screen.',
    forWhom: 'Scaling Agencies, Builders, Logistics, Professional Firms',
    price: '₹19,999 setup',
    deliverables: [
      { title: 'Custom CRM Pipeline', desc: 'Track clients from cold lead to deal closure.' },
      { title: 'ROI Analytics Dashboard', desc: 'Visual charts plotting ad spend, lead cost, and acquisitions.' },
      { title: 'Automated SMS/Email Alerts', desc: 'Notify team members instantly when a hot lead arrives.' }
    ],
    steps: [
      'Map out your internal team sales pipeline.',
      'Construct custom database structures and chart panels.',
      'Connect lead channels (ads, maps, site) and run live tests.'
    ],
    metrics: ['+45% Close Rates', '0% Missed Lead Response'],
    faq: [
      { q: 'Do we pay monthly CRM fees?', a: 'No, we construct systems using self-hosted or flat free-tier platforms to prevent monthly software overhead.' },
      { q: 'Is training provided?', a: 'Yes, we provide 1-on-1 team training sessions and detailed video walkthrough files.' }
    ]
  }
};

interface Params {
  locale: string;
  slug: string;
}

export default async function ServiceSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = servicesMap[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-dark flex flex-col justify-between items-center text-center p-12">
        <Navbar />
        <div className="my-auto flex flex-col items-center gap-4">
          <ShieldAlert className="w-16 h-16 text-fire animate-pulse" />
          <h1 className="font-display font-black text-2xl">Service Not Found</h1>
          <p className="text-muted text-sm max-w-xs">We do not offer this specific digital service. Please check our catalog.</p>
          <Link href="/#services" className="text-fire font-bold text-sm flex items-center gap-2 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-white antialiased flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-28">
        
        {/* Hero Section */}
        <section className="py-24 bg-g-hero relative text-left select-none border-b border-white/5">
          <div className="max-w-4xl mx-auto px-6 flex flex-col gap-5 relative z-10">
            <Link href="/#services" className="text-fire font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:underline w-max">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Catalog
            </Link>
            
            <h1 className="font-display font-black text-4xl md:text-6xl tracking-tighter uppercase leading-none mt-2">
              {service.title}
            </h1>
            <p className="text-volt font-secondary font-black text-lg md:text-xl">
              {service.tagline}
            </p>
            <p className="text-muted text-xs md:text-sm max-w-xl font-medium mt-1">
              <strong>Ideal For:</strong> {service.forWhom}
            </p>

            <a
              href="#contact"
              className="mt-4 w-max inline-flex items-center justify-center bg-g-fire-btn text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg"
            >
              Get Started with {service.title}
            </a>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-24 bg-cream-dots text-dark select-none border-b border-dark/5">
          <div className="max-w-4xl mx-auto px-6 text-left flex flex-col gap-10">
            <h2 className="font-secondary font-black text-3xl text-dark tracking-tight leading-snug">
              What's Included in the Service
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-dark/5 text-left flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-full bg-fire/10 text-fire flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="font-secondary font-black text-base text-dark mt-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-dark select-none border-b border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-left flex flex-col gap-10">
            <h2 className="font-secondary font-black text-3xl tracking-tight leading-snug">
              Our Step-by-Step Delivery
            </h2>

            <div className="flex flex-col gap-6 pl-4 border-l border-white/10">
              {service.steps.map((step, idx) => (
                <div key={idx} className="flex gap-4 text-left items-start">
                  <span className="font-numbers font-black text-xl text-fire mt-0.5">0{idx + 1}</span>
                  <p className="text-muted text-sm md:text-base leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics & Pricing Grid */}
        <section className="py-24 bg-cream-dots text-dark select-none">
          <div className="max-w-4xl mx-auto px-6 text-left grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Metrics */}
            <div className="flex flex-col gap-6">
              <h3 className="font-secondary font-black text-2xl text-dark">Results You Can Expect</h3>
              <div className="flex flex-col gap-4">
                {service.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 shadow border border-dark/5 flex items-center gap-3">
                    <span className="text-lg">📈</span>
                    <span className="font-secondary font-extrabold text-dark text-lg leading-tight">{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="flex flex-col gap-6">
              <h3 className="font-secondary font-black text-2xl text-dark">Clear Pricing Model</h3>
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-fire flex flex-col gap-4">
                <span className="text-xs font-black uppercase text-fire tracking-wider">Fixed Tier Retainer</span>
                <span className="font-numbers font-black text-4xl text-dark">{service.price}</span>
                <p className="text-muted-foreground text-xs leading-relaxed">Includes direct founder support, monthly metrics reviews, and translation optimization.</p>
                <a
                  href="#contact"
                  className="text-center bg-dark text-white font-bold py-3 rounded-xl text-xs hover:bg-fire transition-colors mt-2"
                >
                  Lock In Strategy Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic FAQ */}
        <section className="py-24 bg-dark select-none border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 text-left flex flex-col gap-10">
            <h2 className="font-secondary font-black text-2xl text-center">Service FAQ</h2>
            <div className="flex flex-col gap-4">
              {service.faq.map((item, idx) => (
                <div key={idx} className="bg-surface border border-white/10 rounded-2xl p-6 flex flex-col gap-2">
                  <h4 className="font-secondary font-bold text-white text-base md:text-lg">Q: {item.q}</h4>
                  <p className="text-muted text-xs md:text-sm leading-relaxed mt-1">A: {item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
