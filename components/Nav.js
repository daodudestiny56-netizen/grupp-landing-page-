'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Nav({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 md:top-6 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[90vw] lg:max-w-[1100px] z-[201]">
        <div
          className={`w-full flex items-center justify-between px-5 py-3.5 md:py-4 md:px-7 lg:py-[18px] lg:px-10 rounded-none md:rounded-full border transition-all duration-300 ${
            isMobileMenuOpen
              ? 'bg-transparent border-transparent'
              : darkMode
              ? 'bg-zinc-950/90 border-zinc-850 shadow-2xl shadow-black/50 backdrop-blur-xl'
              : 'bg-white/90 border-zinc-200 shadow-xl shadow-zinc-900/5 backdrop-blur-xl'
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center relative z-[202]" onClick={() => setIsMobileMenuOpen(false)}>
            <span className={`font-black text-lg sm:text-xl tracking-tighter ${isMobileMenuOpen || darkMode ? 'text-white' : 'text-zinc-950'}`}>
              grupp<span className="text-sky-500">.</span>
            </span>
          </a>

          {/* Center links - Desktop/Tablet only */}
          <div className={`hidden lg:flex items-center gap-8 text-xs sm:text-sm font-semibold ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {['Home', 'Products'].map((link) => (
              <a
                key={link}
                href={link === 'Home' ? '#' : `#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-sky-500 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2 relative z-[202]">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`hidden md:flex p-2 rounded-full border transition-all duration-200 ${
                darkMode
                  ? 'border-zinc-850 hover:bg-zinc-900 text-amber-400'
                  : 'border-zinc-200 hover:bg-zinc-50 text-zinc-650'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <Link
              href="#"
              className="hidden md:flex items-center gap-1.5 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs px-4 py-2 lg:px-5 lg:py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-400/30"
            >
              Get Started
              <ArrowRight size={13} />
            </Link>

            {/* Hamburger - Mobile only */}
            <button
              className="w-11 h-11 flex flex-col items-center justify-center gap-[5px] md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className={`w-[22px] h-[2px] rounded-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMobileMenuOpen ? 'bg-white rotate-45 translate-y-[7px]' : (darkMode ? 'bg-white' : 'bg-zinc-900')}`} />
              <div className={`w-[22px] h-[2px] rounded-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMobileMenuOpen ? 'bg-white opacity-0' : (darkMode ? 'bg-white' : 'bg-zinc-900')}`} />
              <div className={`w-[22px] h-[2px] rounded-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMobileMenuOpen ? 'bg-white -rotate-45 -translate-y-[7px]' : (darkMode ? 'bg-white' : 'bg-zinc-900')}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#050D1A]/95 backdrop-blur-xl z-[200] flex flex-col items-center justify-center gap-10 md:hidden">
          {['Home', 'Products'].map((link) => (
            <a
              key={link}
              href={link === 'Home' ? '#' : `#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[32px] font-bold text-white transition-colors hover:text-sky-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="absolute bottom-8 w-[calc(100%-48px)]">
            <Link 
              href="#" 
              className="flex justify-center items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-base px-4 py-4 rounded-full w-full transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
