'use client';

import { useState } from 'react';
import SplashScreen from '@/components/ui/SplashScreen';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import Process from '@/components/sections/Process';
import Industries from '@/components/sections/Industries';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <>
      <SplashScreen onComplete={() => setSplashComplete(true)} />
      
      {/* Main site content — fades in after splash screen */}
      <div
        className={`min-h-screen bg-white text-charcoal antialiased transition-opacity duration-700 ${
          splashComplete ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden pointer-events-none'
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <WhyUs />
          <Process />
          <Industries />
          <Portfolio />
          <Testimonials />
          <FAQ />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
