'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '#products' },
  { label: 'Why Grupp', href: '#why' },
  { label: 'Docs', href: '/docs' },
];

function NavLink({ link }) {
  const [hovered, setHovered] = useState(false);
  const isActive = false; // Add logic if needed based on pathname

  return (
    <Link
      href={link.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '36px',
        padding: '0 14px',
        borderRadius: '100px',
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '14px',
        fontWeight: hovered || isActive ? '600' : '500',
        color: isActive
          ? '#ffffff'
          : hovered
          ? '#ffffff'
          : 'rgba(255, 255, 255, 0.6)',
        textDecoration: 'none',
        background: hovered
          ? 'rgba(255, 255, 255, 0.07)'
          : isActive
          ? 'rgba(255, 255, 255, 0.1)'
          : 'transparent',
        transition: 'color 0.2s ease, background 0.2s ease, font-weight 0s',
        whiteSpace: 'nowrap',
      }}
    >
      {link.label}

      {isActive && (
        <span
          style={{
            position: 'absolute',
            bottom: '4px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#0085FF',
          }}
        />
      )}
    </Link>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        textDecoration: 'none',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: '20px',
          fontWeight: '800',
          color: '#ffffff',
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}
      >
        grupp
      </span>
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#0085FF',
          display: 'inline-block',
          marginLeft: '-4px',
          marginBottom: '2px',
          flexShrink: 0,
          boxShadow: '0 0 8px rgba(0, 133, 255, 0.6)',
        }}
      />
    </Link>
  );
}

function CTAButton() {
  return (
    <Link
      href="/get-started"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        height: '44px',
        padding: '0 20px 0 24px',
        background: '#0085FF',
        borderRadius: '100px',
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '14px',
        fontWeight: '700',
        color: '#ffffff',
        textDecoration: 'none',
        letterSpacing: '-0.01em',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease',
        boxShadow: '0 0 0 1px rgba(0,133,255,0.5) inset',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#3DAAFF';
        e.currentTarget.style.boxShadow = '0 0 24px rgba(0,133,255,0.5), 0 0 0 1px rgba(61,170,255,0.6) inset';
        e.currentTarget.style.transform = 'scale(1.02)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#0085FF';
        e.currentTarget.style.boxShadow = '0 0 0 1px rgba(0,133,255,0.5) inset';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      Get Started
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '26px',
          height: '26px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.2)',
          transition: 'background 0.2s ease, transform 0.2s ease',
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}

function MenuButton({ open, onClick, buttonRef }) {
  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: open ? 'rgba(255,255,255,0.1)' : 'transparent',
        border: '1px solid',
        borderColor: open
          ? 'rgba(61,170,255,0.3)'
          : 'rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.2s ease, border-color 0.2s ease',
        flexShrink: 0,
        WebkitTapHighlightColor: 'transparent',
      }}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
    >
      <div style={{ position: 'relative', width: '18px', height: '12px' }}>
        <span style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '18px',
          height: '1.5px',
          background: '#ffffff',
          borderRadius: '2px',
          transformOrigin: 'center',
          transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease',
          transform: open ? 'translateY(5.25px) rotate(45deg)' : 'none',
        }} />
        <span style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          marginTop: '-0.75px',
          width: '14px',
          height: '1.5px',
          background: '#ffffff',
          borderRadius: '2px',
          transition: 'opacity 0.2s ease, width 0.2s ease',
          opacity: open ? 0 : 1,
        }} />
        <span style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '18px',
          height: '1.5px',
          background: '#ffffff',
          borderRadius: '2px',
          transformOrigin: 'center',
          transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease',
          transform: open ? 'translateY(-5.25px) rotate(-45deg)' : 'none',
        }} />
      </div>
    </button>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const menuButtonRef = useRef(null);
  const drawerFirstLinkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      const timeout = setTimeout(() => {
        drawerFirstLinkRef.current?.focus();
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{
          position: 'fixed',
          top: '20px',
          left: '0',
          right: '0',
          margin: '0 auto',
          width: 'calc(100% - 48px)',
          maxWidth: '1100px',
          zIndex: 100,
        }}
      >
        <nav
          className="w-full h-[52px] md:h-[56px] lg:h-[60px] pl-[20px] md:pl-[24px] pr-[8px]"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'visible',
            background: scrolled
              ? 'rgba(5, 13, 26, 0.82)'
              : 'rgba(5, 13, 26, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: scrolled
              ? '1px solid rgba(61, 170, 255, 0.18)'
              : '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '100px',
            transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255,255,255,0.04) inset'
              : '0 4px 24px rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* Mobile layout */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <Logo />
            <MenuButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} buttonRef={menuButtonRef} />
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:flex items-center justify-between w-full relative" style={{ gap: '8px' }}>
            <Logo />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              {navLinks.map((link, i) => (
                <NavLink key={link.href} link={link} index={i} />
              ))}
            </div>
            <CTAButton />
          </div>
        </nav>
      </motion.div>

      {/* Mobile Drawer */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'rgba(5, 13, 26, 0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          padding: '100px 32px 48px',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
          overflowY: 'auto',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <nav style={{ flex: 1 }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              ref={i === 0 ? drawerFirstLinkRef : null}
              style={{
                display: 'block',
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 'clamp(36px, 8vw, 48px)',
                fontWeight: '800',
                color: '#ffffff',
                textDecoration: 'none',
                letterSpacing: '-0.03em',
                lineHeight: '1.1',
                paddingTop: '20px',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.4s ease ${0.1 + i * 0.06}s, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.06}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          style={{
            marginTop: '48px',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.4s ease 0.38s, transform 0.4s ease 0.38s',
          }}
        >
          <Link
            href="/get-started"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              width: '100%',
              height: '56px',
              background: '#0085FF',
              borderRadius: '100px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '16px',
              fontWeight: '700',
              color: '#ffffff',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              boxShadow: '0 0 32px rgba(0,133,255,0.35)',
              marginBottom: '20px',
            }}
          >
            Get Started
            <span style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '30px', height: '30px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
            }}>
              →
            </span>
          </Link>

          <p style={{
            textAlign: 'center',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.35)',
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Questions?{' '}
            <a
              href="mailto:info@trygrupp.africa"
              style={{ color: '#3DAAFF', textDecoration: 'none' }}
            >
              info@trygrupp.africa
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
