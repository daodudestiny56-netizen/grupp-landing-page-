'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Nav({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-4xl z-50">
      <div
        className={`w-full flex items-center justify-between py-2 px-3 sm:px-5 rounded-full border transition-all duration-300 backdrop-blur-xl ${
          darkMode
            ? 'bg-zinc-950/90 border-zinc-850 shadow-2xl shadow-black/50'
            : 'bg-white/90 border-zinc-200 shadow-xl shadow-zinc-900/5'
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center pl-2">
          <span className={`font-black text-lg sm:text-xl tracking-tighter ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
            grupp<span className="text-sky-500">.</span>
          </span>
        </a>

        {/* Center links */}
        <div className={`hidden md:flex items-center gap-8 text-xs sm:text-sm font-semibold ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
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
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full border transition-all duration-200 ${
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
            className="flex items-center gap-1.5 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs px-4 py-2 rounded-full transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-400/30 hover:-translate-y-px"
          >
            Get Started
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
