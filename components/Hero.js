'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LOAD_DELAYS = {
  eyebrow: 0.20,
  h1line1: 0.40,
  h1line2: 0.56,
  sub:     0.72,
  buttons: 0.90,
  visual:  0.60,
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
      {/* Atmospheric radial glow — left behind text */}
      <div aria-hidden style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(0,133,255,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Main content grid */}
      <div
        className="hero-grid"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '120px 64px 100px',
          display: 'grid',
          gridTemplateColumns: '55fr 45fr',
          gap: '80px',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        {/* ── LEFT COLUMN ── */}
        <div
          ref={textBlockRef}
          style={{
            position: 'relative',
            zIndex: 2,
            willChange: 'transform, opacity',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Eyebrow */}
          <LoadFade delay={LOAD_DELAYS.eyebrow}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0, 133, 255, 0.1)',
              border: '1px solid rgba(0, 133, 255, 0.3)',
              borderRadius: '100px',
              padding: '7px 16px',
              marginBottom: '36px',
              width: 'fit-content',
            }}>
              <span
                className="animate-pulse-dot"
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#0085FF',
                  flexShrink: 0,
                }}
              />
              <span className="text-eyebrow">Community Banking as a Service</span>
            </div>
          </LoadFade>

          {/* H1 — Fix 2: explicit 88px desktop, 800 weight, -0.03em */}
          <div style={{ marginBottom: '32px' }}>
            <LoadFade delay={LOAD_DELAYS.h1line1}>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(52px, 6.5vw, 88px)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.0,
                  color: '#FFFFFF',
                  margin: 0,
                  padding: 0,
                  display: 'block',
                }}
              >
                Digital Infrastructure
              </h1>
            </LoadFade>
            <LoadFade delay={LOAD_DELAYS.h1line2}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(52px, 6.5vw, 88px)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.0,
                  color: '#0085FF',
                  display: 'block',
                  marginTop: '4px',
                }}
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
              margin: '0 0 48px 0',
            }}>
              Our platform empowers community banks and microfinance institutions
              with digitized financial tools — tailored, branded, and built for the
              people most financial services leave behind.
            </p>
          </LoadFade>

          {/* CTAs */}
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
                  whiteSpace: 'nowrap',
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
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
              >
                View Documentation
              </a>
            </div>
          </LoadFade>
        </div>

        {/* ── RIGHT COLUMN: Phone — Fix 1: no container, raw PNG on dark bg ── */}
        <LoadFade delay={LOAD_DELAYS.visual} x={40}>
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {/* Large radial glow behind phone — Fix 1 spec */}
            <div aria-hidden style={{
              position: 'absolute',
              width: '480px',
              height: '480px',
              background: 'radial-gradient(circle, rgba(0,133,255,0.25) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />

            {/* Phone PNG — no border-radius, no container, directly on dark bg */}
            <div
              className="animate-float-phone"
              style={{ position: 'relative', zIndex: 1 }}
            >
              <Image
                src="/phone-mockup.png"
                alt="Grupp agent banking app interface"
                width={360}
                height={520}
                style={{
                  objectFit: 'contain',
                  maxWidth: '100%',
                  display: 'block',
                }}
                priority
              />
            </div>
          </div>
        </LoadFade>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        zIndex: 2,
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          fontSize: '11px',
          color: '#8FAEC8',
          letterSpacing: '0.08em',
        }}>
          scroll to explore
        </span>
        <svg className="animate-scroll-bounce" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M8 3L8 13M8 13L4 9M8 13L12 9" stroke="#8FAEC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Responsive styles — Fix 10: phone first on mobile, 52px headline */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto !important;
            padding: 100px 24px 60px !important;
            gap: 40px !important;
            min-height: auto !important;
          }
          /* Phone visual column comes first on mobile */
          .hero-grid > div:last-child {
            order: -1 !important;
          }
          /* Phone max 320px height on mobile */
          .hero-grid > div:last-child img {
            max-height: 320px !important;
            width: 80% !important;
            margin: 0 auto !important;
          }
        }
      `}</style>
    </section>
  );
}
