'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const REASONS = [
  {
    title: 'Transformation',
    description:
      'Our Banking-as-a-Service platform digitizes rural and semi-urban communities at scale. Your institution gets enterprise-grade infrastructure without building it from scratch.',
  },
  {
    title: 'Speed',
    description:
      'Instead of months of integrations and costly infrastructure projects, Grupp gets you fully operational in days. One integration, all the rails.',
  },
  {
    title: 'Fully Licensed',
    description:
      'We carry the regulatory burden and manage all compliance obligations on your behalf. You focus entirely on your customers and growth.',
  },
  {
    title: 'Neutrality',
    description:
      "Grupp is white-labeled and fully configurable to your institution's brand and requirements. We enable you — we never compete with you.",
  },
];

function ReasonBlock({ reason, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reducedMotion = useReducedMotion();

  const variants = reducedMotion
    ? {
        hidden:  { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0 } },
      }
    : {
        hidden:  { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{
        borderTop: index === 0 ? 'none' : '1px solid rgba(61, 170, 255, 0.1)',
        paddingTop: index === 0 ? 0 : '40px',
        paddingBottom: '40px',
      }}
    >
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '28px',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
        marginBottom: '12px',
        lineHeight: 1.2,
      }}>
        {reason.title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: 1.7,
        color: '#8FAEC8',
        maxWidth: '480px',
      }}>
        {reason.description}
      </p>
    </motion.div>
  );
}

export default function WhyGruppSection() {
  return (
    <section
      id="why-grupp"
      style={{
        position: 'relative',
        zIndex: 10, /* Fix 6: sits above products section during scroll */
        background: '#050D1A',
        padding: '120px 48px',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '100px',
        alignItems: 'start',
      }}
        className="why-grupp-grid"
      >
        {/* LEFT: Sticky column */}
        <div style={{ position: 'sticky', top: '120px' }}>
          <h2
            className="text-display-base text-section"
            style={{ color: '#FFFFFF', marginBottom: '24px' }}
          >
            Why Grupp?
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: 1.75,
            color: '#8FAEC8',
            marginBottom: '56px',
            maxWidth: '360px',
          }}>
            Because 60 million Nigerians are still waiting for financial services
            that see them.
          </p>

          {/* Large stat */}
          <div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(64px, 8vw, 96px)',
              letterSpacing: '-0.03em',
              color: '#0085FF',
              display: 'block',
              lineHeight: 1,
            }}>
              120+
            </span>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '16px',
              color: '#8FAEC8',
              display: 'block',
              marginTop: '8px',
            }}>
              financial institutions on the platform
            </span>
          </div>
        </div>

        {/* RIGHT: Scrollable reason blocks */}
        <div>
          {REASONS.map((reason, i) => (
            <ReasonBlock key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grupp-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 60px 24px !important;
          }
          .why-grupp-grid > div:first-child {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
