import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Compass, Home, PhoneCall } from 'lucide-react';
import { BRAND_CONSTANTS } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-charcoal antialiased flex flex-col justify-between select-none">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 flex items-center justify-center">
        <div className="max-w-[600px] mx-auto px-6 text-center flex flex-col items-center gap-6">
          
          <div className="w-20 h-20 rounded-full bg-[#FFF3EC] text-primary flex items-center justify-center border-2 border-primary/20 shadow-md">
            <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '8s' }} />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-display font-black text-6xl md:text-7xl text-primary tracking-tight">404</span>
            <h1 className="font-display font-black text-2xl md:text-3xl text-charcoal">
              Page Not Found
            </h1>
            <p className="text-bodytext text-sm md:text-base font-semibold leading-relaxed max-w-md mx-auto">
              The page or growth link you were looking for doesn't exist or has been moved. Let's get you back on track!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/en"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#e04d15] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-all hover:scale-[1.02]"
            >
              <Home className="w-4 h-4" />
              <span>Go to Homepage</span>
            </Link>

            <Link
              href="/en#contact"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#DDDDDD] hover:bg-[#FFF9F6] text-charcoal font-bold text-sm px-6 py-3.5 rounded-full shadow-sm transition-all hover:scale-[1.02]"
            >
              <PhoneCall className="w-4 h-4 text-primary" />
              <span>Book Strategy Call</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
