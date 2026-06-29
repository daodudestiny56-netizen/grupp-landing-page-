'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-4xl z-50"
      style={{ transition: 'all 0.3s ease' }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
          borderRadius: '100px',
          border: scrolled
            ? '1px solid rgba(61, 170, 255, 0.15)'
            : '1px solid rgba(61, 170, 255, 0.08)',
          background: scrolled
            ? 'rgba(5, 13, 26, 0.75)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', paddingLeft: '4px' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '20px',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}
          >
            grupp
            <span style={{ color: '#0085FF' }}>.</span>
          </span>
        </a>

        {/* Center nav links */}
        <div
          className="hidden md:flex"
          style={{ gap: '32px', alignItems: 'center' }}
        >
          {[
            { label: 'Home', href: '#' },
            { label: 'Products', href: '#products' },
            { label: 'Why Grupp', href: '#why-grupp' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '14px',
                color: '#8FAEC8',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={e => (e.target.style.color = '#FFFFFF')}
              onMouseLeave={e => (e.target.style.color = '#8FAEC8')}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <Link
          href="#"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '13px',
            color: '#FFFFFF',
            background: '#0085FF',
            borderRadius: '100px',
            padding: '10px 24px',
            textDecoration: 'none',
            transition: 'background 200ms ease, box-shadow 200ms ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#3DAAFF';
            e.currentTarget.style.boxShadow = '0 0 24px rgba(0,133,255,0.4)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#0085FF';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
