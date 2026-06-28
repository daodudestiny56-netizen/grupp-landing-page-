'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, ArrowRight } from 'lucide-react';

export default function Nav({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-900 shadow-2xl shadow-black/40'
            : 'bg-white/85 backdrop-blur-xl border-b border-zinc-100 shadow-xl shadow-zinc-900/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className={`font-black text-xl tracking-tighter ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
            grupp<span className="text-emerald-500">.</span>
          </span>
        </a>

        {/* Center links */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
          {['Products', 'Core Infrastructure', 'Agent Networks'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-emerald-500 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full border transition-all duration-200 ${
              darkMode
                ? 'border-zinc-800 hover:bg-zinc-900 text-amber-400'
                : 'border-zinc-200 hover:bg-zinc-50 text-zinc-600'
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button className="hidden md:flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/30 hover:-translate-y-px">
            Get Started
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
}
