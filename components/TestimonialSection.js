'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { SlideInLeft, PopIn } from '@/components/ScrollAnimations';

const STATS = [
  { value: '₦2.4B+', label: 'transactions processed', color: '#FFFFFF' },
  { value: '50,000+', label: 'active agents', color: '#0085FF' },
  { value: '94%',     label: 'average repayment rate', color: '#FFFFFF' },
  { value: '1 day',   label: 'average time to go live', color: '#0085FF' },
];

function StatCard({ stat, delay }) {
  return (
    <PopIn delay={delay}>
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(61, 170, 255, 0.1)',
        borderRadius: '20px',
        padding: '32px 28px',
        height: '100%',
      }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(36px, 4vw, 52px)',
          letterSpacing: '-0.03em',
          color: stat.color,
          lineHeight: 1,
          marginBottom: '10px',
        }}>
          {stat.value}
        </div>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          fontSize: '14px',
          color: '#8FAEC8',
          lineHeight: 1.5,
        }}>
          {stat.label}
        </div>
      </div>
    </PopIn>
  );
}

export default function TestimonialSection() {
  return (
    <section
      id="testimonial"
      style={{
        background: '#0A1628',
        borderTop: '1px solid rgba(61, 170, 255, 0.1)',
        borderBottom: '1px solid rgba(61, 170, 255, 0.1)',
        padding: '100px 48px',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}
        className="testimonial-grid"
      >
        {/* LEFT: Pull quote */}
        <SlideInLeft>
          <div>
            <p className="text-eyebrow" style={{ marginBottom: '32px' }}>
              What institutions say
            </p>

            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(24px, 3vw, 36px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
              color: '#FFFFFF',
              marginBottom: '40px',
            }}>
              "Our loan repayment rate jumped from{' '}
              <span style={{ color: '#0085FF' }}>67%</span> to{' '}
              <span style={{ color: '#0085FF' }}>94%</span> in the first quarter
              after going live on Grupp."
            </blockquote>

            {/* Attribution */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0085FF, #3DAAFF)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                color: '#FFFFFF',
                flexShrink: 0,
              }}>
                AO
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#FFFFFF',
                }}>
                  Adaeze Okonkwo
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#8FAEC8',
                }}>
                  CEO, Onitsha Community MFB
                </div>
              </div>
            </div>
          </div>
        </SlideInLeft>

        {/* RIGHT: Stat cards 2x2 grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
        }}>
          {STATS.map((stat, i) => (
            <StatCard key={stat.value} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr !important;
            padding: 60px 24px !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
