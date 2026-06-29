'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const CARDS = [
  {
    initials: 'CA',
    gradient: 'linear-gradient(135deg, #0085FF, #3DAAFF)',
    name: 'Cynthia A.',
    action: 'received a business loan',
    amount: '₦50,000',
    tag: 'Loans',
    pulseClass: 'animate-border-pulse-1',
  },
  {
    initials: 'CB',
    gradient: 'linear-gradient(135deg, #1A3A6B, #3DAAFF)',
    name: 'Charles B.',
    action: 'made a cash deposit',
    amount: '₦15,000',
    tag: 'Deposits',
    pulseClass: 'animate-border-pulse-2',
  },
  {
    initials: 'FO',
    gradient: 'linear-gradient(135deg, #0F1E38, #0085FF)',
    name: 'Fatima O.',
    action: 'completed a transfer',
    amount: '₦8,500',
    tag: 'Transfer',
    pulseClass: 'animate-border-pulse-3',
  },
];

function TransactionCard({ card, delay, reducedMotion }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const variants = reducedMotion
    ? {
        hidden:  { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0 } },
      }
    : {
        hidden:  { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] } },
      };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={card.pulseClass}
      style={{
        background: 'rgba(10, 22, 40, 0.9)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(61, 170, 255, 0.2)',
        borderRadius: '16px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
      }}
    >
      {/* Avatar */}
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: card.gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: '12px',
        color: '#FFFFFF',
      }}>
        {card.initials}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '13px',
            color: '#FFFFFF',
            whiteSpace: 'nowrap',
          }}>
            {card.name}
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            fontSize: '14px',
            color: '#3DAAFF',
            flexShrink: 0,
          }}>
            {card.amount}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00D4A4', flexShrink: 0 }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            color: '#8FAEC8',
          }}>
            {card.action} · {card.tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function CommunitySection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="community"
      style={{
        position: 'relative',
        minHeight: '600px',
        backgroundImage: "url('/market.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Dark gradient overlay — heavy left, lightens right */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(5,13,26,0.92) 0%, rgba(5,13,26,0.6) 50%, rgba(5,13,26,0.2) 100%)',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '100px 48px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}
        className="community-grid"
      >
        {/* LEFT: Transaction cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {CARDS.map((card, i) => (
            <TransactionCard
              key={card.name}
              card={card}
              delay={i * 0.3}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        {/* RIGHT: Headline + copy */}
        <div>
          <h2
            className="text-display-base text-section"
            style={{ color: '#FFFFFF', marginBottom: '24px' }}
          >
            Let's build a future where{' '}
            <span style={{ color: '#0085FF' }}>offline communities</span>{' '}
            fit in.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: 1.75,
            color: '#8FAEC8',
          }}>
            Grupp is the infrastructure layer that makes it possible — for the market
            trader in Onitsha, the cooperative in Kano, the POS agent in Ojo.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .community-grid {
            grid-template-columns: 1fr !important;
            padding: 60px 24px !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
