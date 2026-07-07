'use client';

import { useEffect, useCallback, useRef, useState } from 'react';
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

  // Refs for measuring link positions for the sliding underline
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const [indicator, setIndicator] = useState(null);

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
        left: elRect.left - navRect.left + 16,
        width: elRect.width - 32,
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
        .grupp-nav * { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }

        .nav-cta {
          transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.22s ease,
                      background-color 0.18s ease;
        }
        .nav-cta:hover {
          transform: translateY(-1.5px);
          box-shadow: 0 0 0 3px rgba(14,165,233,0.2), 0 6px 20px rgba(14,165,233,0.3);
          background-color: #38bdf8;
        }
        .nav-cta:hover .nav-arrow {
          transform: translateX(3px);
        }
        .nav-arrow {
          transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
        }
        .nav-link {
          transition: color 0.18s ease;
        }
        .nav-indicator {
          transition: left 0.3s cubic-bezier(0.65,0,0.35,1),
                      width 0.3s cubic-bezier(0.65,0,0.35,1);
        }
      `}</style>

      <nav
        className="grupp-nav fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        aria-label="Main navigation"
      >
        {/* ─── Pill ─── */}
        <div
          className={`
            pointer-events-auto
            w-full max-w-[920px]
            grid grid-cols-3 items-center
            px-6 py-0
            h-[58px]
            rounded-[999px]
            border border-white/[0.18]
            transition-all duration-300
          `}
          style={{
            background: scrolled
              ? 'rgba(255,255,255,0.13)'
              : 'rgba(255,255,255,0.10)',
            backdropFilter: 'blur(22px) saturate(180%)',
            WebkitBackdropFilter: 'blur(22px) saturate(180%)',
            boxShadow: scrolled
              ? '0 2px 24px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.18)'
              : '0 2px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.16)',
          }}
        >
          {/* Grid: 3 equal columns — logo | links | CTA */}
          {/* Col 1: Logo */}
          <a href="/" className="flex items-center select-none justify-self-start">
            <span className="text-[19px] font-extrabold tracking-[-0.045em] leading-none text-white">
              grupp<span className="text-sky-400">.</span>
            </span>
          </a>

          {/* Col 2: Desktop nav links (centered) */}
          <div
            className="hidden md:flex items-center justify-center gap-1 relative"
            ref={navRef}
            onMouseLeave={handleMouseLeave}
          >
            {LINKS.map(({ label, href }) => {
              const isActive = active === label;
              return (
                <a
                  key={label}
                  href={href}
                  ref={(el) => { linkRefs.current[label] = el; }}
                  onClick={() => setActive(label)}
                  onMouseEnter={() => handleMouseEnter(label)}
                  className={`
                    nav-link relative px-4 py-2
                    text-[14.5px] font-medium leading-none select-none
                    transition-colors duration-200
                    ${hovered === label || (isActive && !hovered)
                      ? 'text-white'
                      : 'text-white/50'}
                  `}
                >
                  {label}
                </a>
              );
            })}

            {/* Sliding underline — only visible on hover */}
            {hovered && indicator && (
              <span
                className="nav-indicator absolute bottom-0 h-[2px] rounded-full bg-sky-400"
                style={{ left: indicator.left, width: indicator.width }}
              />
            )}
          </div>

          {/* Col 3: CTA + hamburger */}
          <div className="flex items-center gap-3 justify-self-end">
            <Link
              href="#"
              className="nav-cta hidden sm:inline-flex items-center gap-[6px] bg-sky-500 text-white text-[13.5px] font-semibold px-[18px] py-[9px] rounded-full shadow-[0_2px_10px_rgba(14,165,233,0.3)]"
            >
              Get Started
              <ArrowRight size={13} strokeWidth={2.5} className="nav-arrow" />
            </Link>

            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {/* ─── Mobile dropdown ─── */}
        {mobileOpen && (
          <div
            className="pointer-events-auto absolute top-[calc(100%+8px)] left-4 right-4 rounded-[24px] border border-white/[0.15] p-4 flex flex-col gap-1"
            style={{
              background: 'rgba(10,10,20,0.82)',
              backdropFilter: 'blur(24px) saturate(160%)',
              WebkitBackdropFilter: 'blur(24px) saturate(160%)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
            }}
          >
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => { setActive(label); setMobileOpen(false); }}
                className="px-4 py-3 rounded-xl text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/8 transition-colors duration-150"
              >
                {label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-white/10">
              <Link
                href="#"
                className="nav-cta flex items-center justify-center gap-2 bg-sky-500 text-white text-[14px] font-semibold px-4 py-3 rounded-xl w-full"
              >
                Get Started
                <ArrowRight size={14} strokeWidth={2.5} className="nav-arrow" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
