'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Nav({ darkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#products' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .nav-pill {
          font-family: 'Inter', sans-serif;
        }

        .nav-link-active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 2px;
          background: #0ea5e9;
          border-radius: 999px;
        }

        .cta-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 0 3px rgba(14,165,233,0.18), 0 4px 16px rgba(14,165,233,0.28);
        }
        .cta-btn:hover .cta-arrow {
          transform: translateX(3px);
        }
        .cta-arrow {
          transition: transform 0.2s ease;
        }
      `}</style>

      <nav
        className="nav-pill fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        aria-label="Main navigation"
      >
        <div
          className={`
            pointer-events-auto
            w-full max-w-[1100px]
            flex items-center justify-between
            px-5 py-2.5
            rounded-[999px]
            border
            transition-all duration-300
            ${scrolled
              ? 'bg-white/92 border-zinc-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.09)]'
              : 'bg-white/80 border-zinc-200/60 shadow-[0_2px_16px_rgba(0,0,0,0.07)]'}
            backdrop-blur-[14px]
          `}
          style={{ WebkitBackdropFilter: 'blur(14px)' }}
        >
          {/* ── Logo ── */}
          <a
            href="/"
            className="flex items-center shrink-0 select-none"
            aria-label="Grupp home"
          >
            <span
              className="text-[18px] font-extrabold tracking-[-0.04em] leading-none text-zinc-950"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.04em' }}
            >
              grupp<span className="text-sky-500">.</span>
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => {
              const isActive = activeLink === label;
              return (
                <a
                  key={label}
                  href={href}
                  onClick={() => setActiveLink(label)}
                  className={`
                    relative px-4 py-2 rounded-full
                    text-[14px] font-medium leading-none
                    transition-colors duration-200
                    ${isActive
                      ? 'text-zinc-900'
                      : 'text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100/70'}
                    ${isActive ? 'nav-link-active' : ''}
                  `}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-4 h-[2px] bg-sky-500 rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* ── CTA + Mobile toggle ── */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="cta-btn hidden sm:inline-flex items-center gap-1.5 bg-sky-500 hover:bg-sky-400 text-white text-[13.5px] font-semibold px-4 py-2 rounded-full shadow-[0_2px_8px_rgba(14,165,233,0.25)]"
            >
              Get Started
              <ArrowRight size={13} strokeWidth={2.5} className="cta-arrow" />
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full text-zinc-600 hover:bg-zinc-100 transition-colors duration-200"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Dropdown ── */}
        {mobileOpen && (
          <div
            className="pointer-events-auto absolute top-[calc(100%+8px)] left-4 right-4 bg-white/95 backdrop-blur-xl border border-zinc-200/70 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-4 flex flex-col gap-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => { setActiveLink(label); setMobileOpen(false); }}
                className="px-4 py-3 rounded-xl text-[15px] font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 transition-colors duration-150"
              >
                {label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-zinc-100">
              <Link
                href="#"
                className="cta-btn flex items-center justify-center gap-1.5 bg-sky-500 text-white text-[14px] font-semibold px-4 py-3 rounded-xl w-full"
              >
                Get Started
                <ArrowRight size={14} strokeWidth={2.5} className="cta-arrow" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
