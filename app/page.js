'use client';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import CommunitySection from '@/components/CommunitySection';
import ProductsSection from '@/components/CustomToolsSection';
import WhyGruppSection from '@/components/WhyGruppSection';
import TestimonialSection from '@/components/TestimonialSection';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <div style={{ background: '#050D1A', color: '#FFFFFF', minHeight: '100vh' }}>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <CommunitySection />
        <ProductsSection />
        <WhyGruppSection />
        <TestimonialSection />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
