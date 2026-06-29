'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import CommunitySection from '@/components/CommunitySection';
import CustomToolsSection from '@/components/CustomToolsSection';
import WhyGruppSection from '@/components/WhyGruppSection';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 antialiased ${
        darkMode ? 'bg-zinc-950 text-white' : 'bg-[#FAFAFA] text-zinc-900'
      }`}
    >
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <Marquee darkMode={darkMode} />
        <CommunitySection />
        <CustomToolsSection />
        <WhyGruppSection darkMode={darkMode} />
        <CTABand />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
