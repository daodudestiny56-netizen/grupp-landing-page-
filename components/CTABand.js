'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const WORDS_LINE1 = ['Launch', 'your', 'bank', 'in'];
const WORDS_LINE2 = ['days,', 'not', 'years.'];

function WordStagger({ words, color, delay = 0, reducedMotion }) {
  return (
    <span style={{ display: 'block' }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            marginRight: i < words.length - 1 ? '0.25em' : 0,
          }}
        >
          <span
            className={`word-stagger-${delay * 1000 + i}`}
            style={{
              display: 'inline-block',
              color: color || '#FFFFFF',
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function CTABand() {
  const sectionRef = useRef(null);
  const glowRef    = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Glow animates in on scroll entry
      gsap.fromTo(
        glowRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Word-by-word headline stagger
      const allWords = sectionRef.current.querySelectorAll('[class^="word-stagger-"]');
      gsap.fromTo(
        allWords,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="cta"
      ref={sectionRef}
      style={{
        position: 'relative',
        background: '#050D1A',
        padding: '120px 48px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Centered radial spotlight glow */}
      <div
        ref={glowRef}
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,133,255,0.15) 0%, transparent 65%)',
          pointerEvents: 'none',
          opacity: reducedMotion ? 1 : 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Eyebrow */}
        <p className="text-eyebrow" style={{ marginBottom: '24px' }}>Ready to launch?</p>

        {/* Headline */}
        <h2
          className="text-display-base"
          style={{
            fontSize: 'clamp(40px, 6vw, 80px)',
            marginBottom: '24px',
            lineHeight: 1.0,
          }}
        >
          <WordStagger words={WORDS_LINE1} color="#FFFFFF" delay={0} reducedMotion={reducedMotion} />
          <WordStagger words={WORDS_LINE2} color="#0085FF" delay={0.24} reducedMotion={reducedMotion} />
        </h2>

        {/* Sub-copy */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: 1.75,
          color: '#8FAEC8',
          maxWidth: '500px',
          margin: '0 auto 48px',
        }}>
          Join 120+ financial institutions already processing billions on
          Grupp's infrastructure.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
            Request a Demo →
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
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
}
