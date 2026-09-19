import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import MissionSection from '@/components/MissionSection';
import ProductsSection from '@/components/ProductsSection';
import HowItWorks from '@/components/HowItWorks';
import WhoWeServe from '@/components/WhoWeServe';
import ProductDemo from '@/components/ProductDemo';
import WhyGruppSection from '@/components/WhyGruppSection';
import Testimonials from '@/components/Testimonials';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';

// Server Component. Interactivity lives in a handful of client islands
// (Nav, ProductTabs, StickyScene, DeviceCycler, VideoCard, MagneticButton),
// so the rest of this tree is prerendered under cacheComponents.
export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <TrustStrip />
        <MissionSection />
        <ProductsSection />
        <HowItWorks />
        <WhoWeServe />
        <ProductDemo />
        <WhyGruppSection />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
