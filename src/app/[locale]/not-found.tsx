'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center flex flex-col items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-[#FFF3EC] border border-[#FFD9C2] text-primary flex items-center justify-center">
            <Search className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold text-primary uppercase tracking-widest">404 ERROR</span>
          <h1 className="font-display font-black text-3xl md:text-4xl text-charcoal tracking-tight">
            Page Not Found
          </h1>
          <p className="text-bodytext text-sm font-semibold leading-relaxed">
            The page you are looking for might have been moved, renamed, or does not exist. Let's get you back on track!
          </p>

          <Link
            href="/en"
            className="inline-flex items-center gap-2 bg-primary hover:bg-[#e04d15] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition-all hover:scale-[1.02] cursor-pointer mt-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
