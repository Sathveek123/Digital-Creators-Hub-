import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Users, Code, Megaphone, Smartphone, MessageSquareCode } from 'lucide-react';
import { BRAND_CONSTANTS } from '@/lib/constants';

export default function TeamPage({ params }: { params: { locale: string } }) {
  const currentLocale = params.locale === 'te' ? 'te' : 'en';

  const teamMembers = [
    { name: 'Satish Chittelu', role: 'Founder & CEO', desc: 'Strategy, growth engineering, and direct client partnerships.', image: '/logo.jpg' },
    { name: 'Priya Sharma', role: 'Head of Web Systems', desc: 'Custom React & Next.js full-stack developer with 6+ years experience.', image: '/logo.jpg' },
    { name: 'Rahul Varma', role: 'Lead Performance Marketer', desc: 'Meta & Google ad campaign manager with ₹40L+ ad spend managed.', image: '/logo.jpg' },
    { name: 'Ananya Rao', role: 'AI & WhatsApp Automation Lead', desc: 'Flow builder, chatbot logic architect, and API specialist.', image: '/logo.jpg' },
    { name: 'Karthik Reddy', role: 'Local SEO Specialist', desc: 'Google Business Profile rankings and local citation strategist.', image: '/logo.jpg' },
    { name: 'Sravani K.', role: 'UI/UX & Brand Designer', desc: 'Figma design systems and brand identity creation.', image: '/logo.jpg' },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 text-left flex flex-col gap-10">
          
          <Link 
            href={`/${currentLocale}`} 
            className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:underline w-max"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-black uppercase text-primary tracking-widest flex items-center gap-1.5">
              <Users className="w-4 h-4" /> Meet Our Team
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal leading-tight">
              The Humans Behind <br />
              <span className="text-primary">Your Growth Systems.</span>
            </h1>
            <p className="text-bodytext text-base leading-relaxed font-semibold">
              A 12-person team of designers, engineers, copywriters, and ad managers working from Vijayawada and Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white border border-[#EEEEEE] rounded-2xl p-6 shadow-soft flex flex-col items-start text-left gap-4 hover:border-primary/30 transition-all">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm shrink-0 bg-[#FAFAFA]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-display font-black text-lg text-charcoal">{member.name}</h3>
                  <span className="text-xs font-bold uppercase text-primary tracking-wider">{member.role}</span>
                  <p className="text-xs text-bodytext font-semibold leading-relaxed mt-2">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#EEEEEE] p-8 rounded-2xl shadow-soft flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="flex flex-col gap-2">
              <h2 className="font-display font-black text-xl text-charcoal">Want to work with our team?</h2>
              <p className="text-xs text-bodytext font-semibold">Direct founder access + dedicated project leads for every client.</p>
            </div>

            <a
              href={`/${currentLocale}#contact`}
              className="bg-primary hover:bg-[#e04d15] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-md shrink-0"
            >
              Book Free Strategy Call →
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
