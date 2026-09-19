'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
import { BRAND, NAV_LINKS } from '@/lib/content';
import { dur, spring } from '@/lib/motion';

export function Logo({ dark = false }) {
  return (
    <Link href="#top" aria-label="Grupp — home" className="flex items-center gap-2.5 shrink-0">
      <span
        aria-hidden
        className="grid h-8 w-8 place-items-center rounded-[10px] bg-[var(--brand)] text-white"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M21 12.2c0 5-3.9 8.8-9 8.8S3 17.2 3 12.2 6.9 3.4 12 3.4c2.4 0 4.5.8 6.1 2.2"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path d="M12 12.4h8.4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      </span>
      <span
        className={`font-brand text-[19px] font-extrabold tracking-[-0.04em] ${
          dark ? 'text-white' : 'text-[var(--ink)]'
        }`}
      >
        grupp
      </span>
    </Link>
  );
}

function CTA({ className = '', onClick }) {
  return (
    <a
      href={BRAND.calendly}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 font-semibold text-white transition-colors duration-200 hover:bg-[var(--brand-soft)] ${className}`}
    >
      Book a call
      <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path
          d="M2 6h8m0 0L6.5 2.5M10 6 6.5 9.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const sentinelRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Scrolled state via a 1px sentinel — fires exactly twice per crossing,
  // instead of a scroll listener doing React work on every event.
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Active section: one observer across all sections. Never loop
  // getBoundingClientRect per section per frame — that is N forced layouts.
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Lock scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="absolute top-0 h-px w-full" />

      <header
        className="fixed inset-x-0 top-0 z-[100] transition-[background-color,box-shadow,border-color] duration-300"
        style={{
          height: 'var(--nav-h)',
          // Solid, not backdrop-filter: a blur on a fixed nav recomposites on
          // every scroll frame, which is a real cost on mid-tier Android.
          backgroundColor: scrolled ? 'rgba(251,250,248,0.96)' : 'transparent',
          borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
          boxShadow: scrolled ? '0 1px 24px rgba(24,47,67,0.06)' : 'none',
        }}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-[var(--page-px)]"
        >
          <Logo />

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className="relative z-10 flex h-9 items-center rounded-full px-4 text-[14px] font-medium transition-colors duration-150"
                    style={{ color: isActive ? 'var(--ink)' : 'var(--muted)' }}
                  >
                    {link.label}
                  </Link>
                  {isActive && (
                    <m.span
                      layoutId="nav-pill"
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-[color-mix(in_srgb,var(--brand)_12%,transparent)]"
                      transition={spring.snappy}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <CTA className="hidden h-11 text-[14px] lg:inline-flex" />

            <button
              ref={menuButtonRef}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] lg:hidden"
              style={{ background: menuOpen ? 'rgba(24,47,67,0.06)' : 'transparent' }}
            >
              <span aria-hidden className="relative block h-3 w-[18px]">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="absolute left-0 block h-[1.5px] rounded bg-[var(--ink)] transition-all duration-300"
                    style={{
                      width: i === 1 ? 14 : 18,
                      top: i === 0 ? 0 : i === 1 ? 'calc(50% - 0.75px)' : 'auto',
                      bottom: i === 2 ? 0 : 'auto',
                      opacity: menuOpen && i === 1 ? 0 : 1,
                      transform:
                        menuOpen && i === 0
                          ? 'translateY(5.25px) rotate(45deg)'
                          : menuOpen && i === 2
                          ? 'translateY(-5.25px) rotate(-45deg)'
                          : 'none',
                    }}
                  />
                ))}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className="fixed inset-0 z-[99] flex flex-col bg-[var(--surface)] px-[var(--page-px)] pb-12 pt-[calc(var(--nav-h)+24px)] lg:hidden"
        style={{
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: `transform 0.36s cubic-bezier(0.22,1,0.36,1)`,
          pointerEvents: menuOpen ? 'auto' : 'none',
          overflowY: 'auto',
        }}
      >
        <nav aria-label="Mobile" className="flex-1">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-[var(--line)] py-5 font-brand text-[clamp(28px,7vw,38px)] font-extrabold tracking-[-0.03em] text-[var(--ink)]"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity ${dur.base}s ease ${0.06 + i * 0.05}s, transform ${dur.base}s cubic-bezier(0.22,1,0.36,1) ${0.06 + i * 0.05}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10">
          <CTA
            className="h-14 w-full justify-center text-[16px]"
            onClick={() => setMenuOpen(false)}
          />
          <p className="mt-5 text-center text-[13px] text-[var(--muted)]">
            Questions?{' '}
            <a href={`mailto:${BRAND.email}`} className="text-[var(--brand-deep)] underline">
              {BRAND.email}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
