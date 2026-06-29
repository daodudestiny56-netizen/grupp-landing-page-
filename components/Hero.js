'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Page-load stagger timings (ms)
const LOAD_DELAYS = {
  eyebrow:  0.20,
  h1line1:  0.40,
  h1line2:  0.56,
  sub:      0.72,
  buttons:  0.90,
  visual:   0.60,
};

function LoadFade({ children, delay = 0, x = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, x }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const textBlockRef = useRef(null);
  const sectionRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text block scales up and fades out as user scrolls
      // The Marquee section sits at z-index 3 and slides OVER this
      gsap.to(textBlockRef.current, {
        scale:   1.15,
        opacity: 0,
        ease:    'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start:   'top top',
          end:     'bottom top',
          scrub:   1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#050D1A',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Atmospheric radial glow — left side behind text */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(0,133,255,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Main content grid */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '120px 48px 80px',
          display: 'grid',
          gridTemplateColumns: '55fr 45fr',
          gap: '64px',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* ── LEFT COLUMN: Text content ── */}
        <div ref={textBlockRef} style={{ position: 'relative', zIndex: 2, willChange: 'transform, opacity' }}>

          {/* Eyebrow label */}
          <LoadFade delay={LOAD_DELAYS.eyebrow}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0, 133, 255, 0.1)',
              border: '1px solid rgba(0, 133, 255, 0.3)',
              borderRadius: '100px',
              padding: '6px 14px',
              marginBottom: '32px',
            }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#0085FF',
                  flexShrink: 0,
                }}
                className="animate-pulse-dot"
              />
              <span className="text-eyebrow">Community Banking as a Service</span>
            </div>
          </LoadFade>

          {/* H1 */}
          <div style={{ marginBottom: '28px' }}>
            <LoadFade delay={LOAD_DELAYS.h1line1}>
              <h1
                className="text-display-base text-hero"
                style={{ color: '#FFFFFF', marginBottom: '4px', display: 'block' }}
              >
                Digital Infrastructure
              </h1>
            </LoadFade>
            <LoadFade delay={LOAD_DELAYS.h1line2}>
              <span
                className="text-display-base text-hero"
                style={{ color: '#0085FF', display: 'block' }}
              >
                for Communities.
              </span>
            </LoadFade>
          </div>

          {/* Sub-headline */}
          <LoadFade delay={LOAD_DELAYS.sub}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: 1.75,
              color: '#8FAEC8',
              maxWidth: '480px',
              marginBottom: '48px',
            }}>
              Our platform empowers community banks and microfinance institutions with
              digitized financial tools — tailored, branded, and built for the people
              most financial services leave behind.
            </p>
          </LoadFade>

          {/* CTA buttons */}
          <LoadFade delay={LOAD_DELAYS.buttons}>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '15px',
                  color: '#FFFFFF',
                  background: '#0085FF',
                  borderRadius: '12px',
                  padding: '16px 32px',
                  textDecoration: 'none',
                  transition: 'background 200ms ease, box-shadow 200ms ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#3DAAFF';
                  e.currentTarget.style.boxShadow = '0 0 32px rgba(0,133,255,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#0085FF';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Start Building Free →
              </a>
              <a
                href="#"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '15px',
                  color: '#FFFFFF',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '12px',
                  padding: '16px 32px',
                  textDecoration: 'none',
                  transition: 'border-color 200ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
              >
                View Documentation
              </a>
            </div>
          </LoadFade>
        </div>

        {/* ── RIGHT COLUMN: Phone mockup ── */}
        <LoadFade delay={LOAD_DELAYS.visual} x={40}>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Glow behind phone */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: '#0085FF',
                opacity: 0.15,
                filter: 'blur(80px)',
                pointerEvents: 'none',
              }}
            />
            {/* Phone image */}
            <div className="animate-float-phone" style={{ position: 'relative', zIndex: 1 }}>
              <Image
                src="/phone-mockup.png"
                alt="Grupp agent banking interface on mobile"
                width={340}
                height={480}
                style={{ borderRadius: '24px', objectFit: 'contain', maxWidth: '100%' }}
                priority
              />
            </div>
          </div>
        </LoadFade>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          zIndex: 2,
        }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          fontSize: '11px',
          color: '#8FAEC8',
          letterSpacing: '0.08em',
        }}>
          scroll to explore
        </span>
        <svg
          className="animate-scroll-bounce"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
        >
          <path d="M8 3L8 13M8 13L4 9M8 13L12 9" stroke="#8FAEC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 100px 24px 60px !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
