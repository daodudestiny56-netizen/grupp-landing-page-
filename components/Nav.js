'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

const LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Products', href: '#products' },
];

export default function Nav({ darkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [hovered, setHovered] = useState(null);
  const [indicator, setIndicator] = useState(null);

  const navRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = useCallback((label) => {
    setHovered(label);
    const el = linkRefs.current[label];
    const nav = navRef.current;
    if (el && nav) {
      const navRect = nav.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const padding = 12;
      setIndicator({
        left: elRect.left - navRect.left + padding,
        width: elRect.width - padding * 2,
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(null);
    setIndicator(null);
  }, []);

  const pillStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '920px',
    height: '56px',
    padding: '0 20px',
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.15)',
    background: scrolled ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.09)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    boxShadow: scrolled
      ? '0 2px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15)'
      : '0 2px 16px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12)',
    transition: 'background 0.3s ease, box-shadow 0.3s ease',
    fontFamily: "'Inter', sans-serif",
    WebkitFontSmoothing: 'antialiased',
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0ea5e9;
          color: white;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 999px;
          box-shadow: 0 2px 10px rgba(14,165,233,0.3);
          transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.2s ease,
                      background-color 0.15s ease;
          text-decoration: none;
          white-space: nowrap;
        }
        .nav-cta:hover {
          transform: translateY(-1.5px);
          background: #38bdf8;
          box-shadow: 0 0 0 3px rgba(14,165,233,0.2), 0 6px 18px rgba(14,165,233,0.3);
        }
        .nav-cta:hover .nav-arrow { transform: translateX(3px); }
        .nav-arrow { transition: transform 0.2s ease; display: inline-flex; align-items: center; }

        .nav-link-item {
          position: relative;
          padding: 4px 14px;
          font-size: 14px;
          font-weight: 500;
          line-height: 1;
          text-decoration: none;
          transition: color 0.18s ease;
          white-space: nowrap;
          cursor: pointer;
        }

        .nav-indicator {
          position: absolute;
          bottom: -4px;
          height: 2px;
          border-radius: 999px;
          background: #38bdf8;
          transition: left 0.28s cubic-bezier(0.65,0,0.35,1),
                      width 0.28s cubic-bezier(0.65,0,0.35,1);
        }
      `}</style>

      <nav
        style={{
          position: 'fixed',
          top: '20px',
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 16px',
          pointerEvents: 'none',
        }}
        aria-label="Main navigation"
      >
        {/* Pill */}
        <div style={{ ...pillStyle, pointerEvents: 'auto' }}>

          {/* ── Logo ── */}
          <a
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
              textDecoration: 'none',
              userSelect: 'none',
            }}
          >
            <span style={{
              fontSize: '18px',
              fontWeight: 800,
              letterSpacing: '-0.045em',
              lineHeight: 1,
              color: 'white',
            }}>
              grupp<span style={{ color: '#38bdf8' }}>.</span>
            </span>
          </a>

          {/* ── Center links (flex-1, centered) ── */}
          <div
            ref={navRef}
            onMouseLeave={handleMouseLeave}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              position: 'relative',
            }}
          >
            {LINKS.map(({ label, href }) => {
              const isActive = active === label;
              const isHovered = hovered === label;
              return (
                <a
                  key={label}
                  href={href}
                  ref={(el) => { linkRefs.current[label] = el; }}
                  onClick={() => setActive(label)}
                  onMouseEnter={() => handleMouseEnter(label)}
                  className="nav-link-item"
                  style={{
                    color: isHovered || (isActive && !hovered)
                      ? 'rgba(255,255,255,1)'
                      : 'rgba(255,255,255,0.45)',
                  }}
                >
                  {label}
                </a>
              );
            })}

            {/* Sliding underline */}
            {hovered && indicator && (
              <span
                className="nav-indicator"
                style={{ left: indicator.left, width: indicator.width }}
              />
            )}
          </div>

          {/* ── CTA + hamburger ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            <Link href="#" className="nav-cta" style={{ display: window ? undefined : 'none' }}>
              Get Started
              <span className="nav-arrow">
                <ArrowRight size={12} strokeWidth={2.5} />
              </span>
            </Link>

            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '999px',
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                transition: 'background 0.2s ease, color 0.2s ease',
              }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown ── */}
        {mobileOpen && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: '16px',
              right: '16px',
              background: 'rgba(10,10,20,0.88)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              pointerEvents: 'auto',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => { setActive(label); setMobileOpen(false); }}
                style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  transition: 'background 0.15s ease, color 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
              >
                {label}
              </a>
            ))}
            <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <Link
                href="#"
                className="nav-cta"
                style={{ width: '100%', justifyContent: 'center', borderRadius: '12px', padding: '12px 16px', fontSize: '14px' }}
              >
                Get Started
                <span className="nav-arrow"><ArrowRight size={14} strokeWidth={2.5} /></span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
