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
      setIndicator({
        left: elRect.left - navRect.left + 10,
        width: elRect.width - 20,
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(null);
    setIndicator(null);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .gn-wrap {
          position: fixed;
          top: 20px;
          left: 0; right: 0;
          z-index: 50;
          display: flex;
          justify-content: center;
          padding: 0 16px;
          pointer-events: none;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .gn-pill {
          pointer-events: auto;
          position: relative;
          width: 100%;
          max-width: 900px;
          height: 54px;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0 22px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.14);
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .gn-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          user-select: none;
          flex-shrink: 0;
          line-height: 1;
        }
        .gn-logo-text {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.045em;
          line-height: 1;
          color: #fff;
        }
        .gn-logo-dot { color: #38bdf8; }

        .gn-links {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .gn-link {
          position: relative;
          padding: 6px 14px;
          font-size: 14px;
          font-weight: 500;
          line-height: 1;
          text-decoration: none;
          border-radius: 6px;
          transition: color 0.18s ease;
          white-space: nowrap;
          cursor: pointer;
        }

        .gn-link-active { color: #ffffff; }
        .gn-link-muted  { color: rgba(255,255,255,0.45); }
        .gn-link-muted:hover { color: rgba(255,255,255,0.8); }

        .gn-indicator {
          position: absolute;
          bottom: -2px;
          height: 2px;
          border-radius: 999px;
          background: #38bdf8;
          transition: left 0.28s cubic-bezier(0.65,0,0.35,1),
                      width 0.28s cubic-bezier(0.65,0,0.35,1);
        }

        .gn-right {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .gn-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0ea5e9;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 2px 10px rgba(14,165,233,0.28);
          transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.2s ease,
                      background 0.15s ease;
          white-space: nowrap;
        }
        .gn-cta:hover {
          background: #38bdf8;
          transform: translateY(-1.5px);
          box-shadow: 0 0 0 3px rgba(14,165,233,0.2), 0 6px 18px rgba(14,165,233,0.3);
        }
        .gn-cta:hover .gn-arrow { transform: translateX(3px); }
        .gn-arrow {
          display: inline-flex;
          align-items: center;
          transition: transform 0.2s ease;
        }

        .gn-hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 34px; height: 34px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .gn-hamburger:hover { background: rgba(255,255,255,0.1); color: #fff; }
        @media (max-width: 767px) { .gn-hamburger { display: flex; } .gn-cta { display: none; } }

        .gn-mobile {
          pointer-events: auto;
          position: absolute;
          top: calc(100% + 8px);
          left: 16px; right: 16px;
          background: rgba(8,8,18,0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .gn-mobile-link {
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }
        .gn-mobile-link:hover { background: rgba(255,255,255,0.07); color: #fff; }
        .gn-mobile-divider { border-top: 1px solid rgba(255,255,255,0.08); margin: 8px 0; }
        .gn-mobile-cta {
          display: flex; align-items: center; justify-content: center;
          gap: 6px; background: #0ea5e9; color: #fff;
          font-size: 14px; font-weight: 600;
          padding: 12px; border-radius: 10px; text-decoration: none;
        }
      `}</style>

      <nav className="gn-wrap" aria-label="Main navigation">
        {/* Pill */}
        <div
          className="gn-pill"
          style={{
            background: scrolled ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: scrolled
              ? '0 2px 24px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.14)'
              : '0 2px 14px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          {/* Logo */}
          <a href="/" className="gn-logo">
            <span className="gn-logo-text">grupp<span className="gn-logo-dot">.</span></span>
          </a>

          {/* Center links — absolutely centered in the pill */}
          <div className="gn-links" ref={navRef} onMouseLeave={handleMouseLeave}>
            {LINKS.map(({ label, href }) => {
              const isActive = active === label;
              const isHov = hovered === label;
              return (
                <a
                  key={label}
                  href={href}
                  ref={(el) => { linkRefs.current[label] = el; }}
                  onClick={() => setActive(label)}
                  onMouseEnter={() => handleMouseEnter(label)}
                  className={`gn-link ${isHov || (isActive && !hovered) ? 'gn-link-active' : 'gn-link-muted'}`}
                >
                  {label}
                </a>
              );
            })}

            {hovered && indicator && (
              <span
                className="gn-indicator"
                style={{ left: indicator.left, width: indicator.width }}
              />
            )}
          </div>

          {/* Right: CTA + hamburger */}
          <div className="gn-right">
            <Link href="#" className="gn-cta">
              Get Started
              <span className="gn-arrow"><ArrowRight size={12} strokeWidth={2.5} /></span>
            </Link>
            <button
              className="gn-hamburger"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="gn-mobile">
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="gn-mobile-link"
                onClick={() => { setActive(label); setMobileOpen(false); }}
              >
                {label}
              </a>
            ))}
            <div className="gn-mobile-divider" />
            <Link href="#" className="gn-mobile-cta">
              Get Started <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
