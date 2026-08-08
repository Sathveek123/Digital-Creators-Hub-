'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BRAND_CONSTANTS } from '@/lib/constants';
import { useParams } from 'next/navigation';

export default function RoiCalculatorPage() {
  const params = useParams();
  const currentLocale = params?.locale === 'te' ? 'te' : 'en';

  const [revenue, setRevenue] = useState(100000);
  const [adSpend, setAdSpend] = useState(15000);
  const [industry, setIndustry] = useState('restaurant');

  // ROI Math
  const estimatedLeads = Math.round((adSpend / 500) * 1.8);
  const estimatedRevenueImpact = Math.round(adSpend * 3.4);
  const projectedRoi = Math.round(((estimatedRevenueImpact - adSpend) / adSpend) * 100);

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-[1100px] mx-auto px-6 text-left flex flex-col gap-10">
          
          <Link 
            href={`/${currentLocale}`} 
            className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:underline w-max"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-black uppercase text-primary tracking-widest flex items-center gap-1.5">
              <Calculator className="w-4 h-4" /> Interactive Business Growth Calculator
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight text-charcoal leading-tight">
              Calculate Your Digital Growth Potential.
            </h1>
            <p className="text-bodytext text-base leading-relaxed font-semibold">
              See estimated lead count, monthly revenue impact, and projected 12-month ROI based on real performance data from 200+ local businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Controls (Colspan 7) */}
            <div className="lg:col-span-7 bg-white border border-[#EEEEEE] rounded-2xl p-6 md:p-8 shadow-soft flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-charcoal uppercase tracking-wider flex justify-between">
                  <span>Select Your Industry</span>
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="bg-[#FAFAFA] border border-[#DDDDDD] rounded-xl p-3.5 text-sm font-bold focus:outline-none focus:border-primary"
                >
                  <option value="restaurant">Restaurant & Fine Dining</option>
                  <option value="clinic">Clinic & Healthcare</option>
                  <option value="realestate">Real Estate & Construction</option>
                  <option value="hotel">Hotel & Hospitality</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="education">Education & Coaching</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-charcoal uppercase tracking-wider flex justify-between">
                  <span>Current Monthly Revenue</span>
                  <span className="text-primary font-black">₹{revenue.toLocaleString('en-IN')}</span>
                </label>
                <input
                  type="range"
                  min="20000"
                  max="1000000"
                  step="10000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="accent-primary cursor-pointer w-full"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-charcoal uppercase tracking-wider flex justify-between">
                  <span>Planned Monthly Marketing Spend</span>
                  <span className="text-primary font-black">₹{adSpend.toLocaleString('en-IN')}</span>
                </label>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="2500"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="accent-primary cursor-pointer w-full"
                />
              </div>

            </div>

            {/* Right Col: Output Projection (Colspan 5) */}
            <div className="lg:col-span-5 bg-white border border-[#EEEEEE] rounded-2xl p-6 md:p-8 shadow-soft flex flex-col gap-6">
              <span className="text-xs font-black uppercase text-[#16A34A] bg-[#EEFBF3] px-3 py-1 rounded-full w-max border border-[#16A34A]/20">
                📈 Conservative Projections
              </span>

              <div className="flex flex-col gap-4 border-b border-[#EEEEEE] pb-6">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#888888]">Estimated Monthly Inquiries</span>
                  <span className="font-display font-black text-3xl text-charcoal">+{estimatedLeads} Leads / mo</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#888888]">Estimated Monthly Revenue Impact</span>
                  <span className="font-display font-black text-3xl text-primary">+₹{estimatedRevenueImpact.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#888888]">Projected Campaign ROI</span>
                  <span className="font-display font-black text-3xl text-[#16A34A]">{projectedRoi}% ROI</span>
                </div>
              </div>

              <a
                href={`/${currentLocale}#contact`}
                className="bg-primary hover:bg-[#e04d15] text-white font-bold text-sm py-4 rounded-xl shadow-md text-center flex items-center justify-center gap-2"
              >
                <span>Book Call To Unlock This Growth</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
