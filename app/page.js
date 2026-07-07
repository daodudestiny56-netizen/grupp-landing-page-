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
  
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

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
        
        {/* SHARED VIDEO BACKGROUND WRAPPER */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: '#050D1A',
          }}
        >
          {/* VIDEO — Layer 0 */}
          {!prefersReducedMotion && (
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                minHeight: '100%',
                objectFit: 'cover',
                objectPosition: 'center center',
                pointerEvents: 'none',
                zIndex: 0,
                opacity: 0.28,
              }}
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4"
            />
          )}

          {/* GRADIENT OVERLAY — Layer 1 */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(5,13,26,0.75) 0%, rgba(5,13,26,0.55) 30%, rgba(5,13,26,0.55) 70%, rgba(5,13,26,0.85) 100%)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />

          {/* RADIAL GLOW — Layer 2 */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 80% 40% at 50% 50%, rgba(0,133,255,0.1) 0%, transparent 65%)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* SECTION CONTENT — Layer 3 */}
          <div
            style={{
              position: 'relative',
              zIndex: 3,
              width: '100%',
            }}
          >
            <CustomToolsSection />
            <WhyGruppSection darkMode={darkMode} />
          </div>
        </div>

        <CTABand />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
