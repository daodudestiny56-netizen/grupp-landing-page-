'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    id: 'agent-banking',
    name: 'Agent Banking',
    description: 'Deploy a network of mobile money agents instantly. Give your institution last-mile reach into every community — fully managed, branded, and compliant.',
    icon: '🏪',
  },
  {
    id: 'payment-services',
    name: 'Payment Services',
    description: 'Multi-channel payment infrastructure covering NUBAN, POS terminals, USSD, and API disbursements. Reliable rails your institution can always depend on.',
    icon: '💳',
  },
  {
    id: 'lending',
    name: 'Lending Infrastructure',
    description: 'End-to-end digital lending: loan origination, credit scoring, disbursement, and repayment tracking. No paperwork. No manual errors. Full audit trail.',
    icon: '📈',
  },
  {
    id: 'kyc',
    name: 'Identity & KYC',
    description: 'Instant customer onboarding with BVN, NIN, and facial verification. Stay CBN-compliant without building it yourself.',
    icon: '🪪',
  },
  {
    id: 'analytics',
    name: 'Analytics Dashboard',
    description: 'Real-time portfolio visibility across all agents, transactions, and loan books. Institutional-grade reporting in a single dashboard.',
    icon: '📊',
  },
  {
    id: 'core-banking',
    name: 'Core Banking API',
    description: "A complete REST API surface for ledger management, account creation, and transaction processing. Build your own products on top of Grupp's infrastructure.",
    icon: '⚙️',
  },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        width: '380px',
        height: '480px',
        flexShrink: 0,
        background: '#0A1628',
        border: '1px solid rgba(61, 170, 255, 0.12)',
        /* Fix 5: top accent line on hover */
        borderTop: hovered ? '2px solid #0085FF' : '2px solid transparent',
        borderRadius: '24px',
        padding: '40px 36px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 300ms ease, border-top-color 300ms ease, box-shadow 300ms ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        setHovered(true);
        e.currentTarget.style.boxShadow = '0 0 40px rgba(0,133,255,0.1)';
      }}
      onMouseLeave={e => {
        setHovered(false);
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Fix 5: icon container with visible background rgba(0,133,255,0.12) */}
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: '14px',
        background: 'rgba(0, 133, 255, 0.12)',
        border: '1px solid rgba(0, 133, 255, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        marginBottom: '28px',
        flexShrink: 0,
      }}>
        {product.icon}
      </div>

      {/* Fix 5: title at 26px, Bricolage Grotesque 700 */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '26px',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
        marginBottom: '16px',
        lineHeight: 1.2,
      }}>
        {product.name}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 400,
        fontSize: '15px',
        lineHeight: 1.7,
        color: '#8FAEC8',
        flex: 1,
      }}>
        {product.description}
      </p>

      {/* Learn more */}
      <a
        href="#"
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: '14px',
          color: '#3DAAFF',
          textDecoration: 'none',
          marginTop: '32px',
          transition: 'color 200ms ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#0085FF')}
        onMouseLeave={e => (e.currentTarget.style.color = '#3DAAFF')}
      >
        Learn more →
      </a>
    </div>
  );
}

export default function ProductsSection() {
  const containerRef  = useRef(null);
  const stickyRef     = useRef(null);
  const trackRef      = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Mobile: skip GSAP horizontal scroll
    if (window.matchMedia('(max-width: 768px)').matches) return;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const track      = trackRef.current;
      const totalCards = PRODUCTS.length;

      // Calculate how far to scroll horizontally
      const getScrollAmount = () => {
        const cardWidth = 380 + 32; // card width + gap
        return -(cardWidth * (totalCards - 1.5));
      };

      ScrollTrigger.create({
        trigger: containerRef.current,
        start:   'top top',
        end:     () => `+=${Math.abs(getScrollAmount()) + window.innerWidth}`,
        pin:     stickyRef.current,
        scrub:   1,
        onUpdate: (self) => {
          // Scroll-linked progress dots
          const index = Math.min(
            Math.floor(self.progress * totalCards),
            totalCards - 1
          );
          setActiveIndex(index);
        },
        animation: gsap.to(track, {
          x: getScrollAmount,
          ease: 'none',
        }),
      });
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="products"
      ref={containerRef}
      style={{
        position: 'relative',
        background: '#050D1A',
        zIndex: 1, /* Fix 6: explicit z-index so WhyGrupp can layer over */
        height: reducedMotion ? 'auto' : '500vh',
      }}
    >
      {/* Sticky viewport wrapper */}
      <div
        ref={stickyRef}
        style={{
          position: reducedMotion ? 'relative' : 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Section header */}
        <div style={{ padding: '0 48px', marginBottom: '48px' }}>
          <p className="text-eyebrow" style={{ marginBottom: '12px' }}>The Platform</p>
          <h2
            className="text-display-base text-section"
            style={{ color: '#FFFFFF' }}
          >
            Everything your institution needs.
          </h2>
        </div>

        {/* Cards track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '32px',
            paddingLeft: '48px',
            paddingRight: '48px',
            willChange: 'transform',
          }}
        >
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Fix 5: progress dots — 40px gap above, proper spacing */}
        <div style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '48px',
          paddingBottom: '32px',
        }}>
          {PRODUCTS.map((_, i) => (
            <div
              key={i}
              style={{
                height: '8px',
                borderRadius: '100px',
                background: i === activeIndex ? '#0085FF' : '#1A3A6B',
                width: i === activeIndex ? '24px' : '8px',
                transition: 'all 300ms ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Fix 10: Mobile layout — full-width vertical stack, 280px cards */}
      <style>{`
        @media (max-width: 768px) {
          #products {
            height: auto !important;
          }
          #products > div:first-of-type {
            position: relative !important;
            height: auto !important;
            overflow: visible !important;
            padding: 60px 0 40px !important;
          }
          #products .products-track {
            flex-direction: column !important;
            padding: 0 24px !important;
            gap: 20px !important;
          }
          #products .products-track > div {
            width: 100% !important;
            height: 280px !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
