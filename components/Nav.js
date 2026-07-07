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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-3xl z-50">
      <div
        className={`w-full flex items-center justify-between py-3 px-4 sm:px-6 rounded-full border transition-all duration-300 backdrop-blur-xl ${
          darkMode
            ? 'bg-zinc-950/80 border-zinc-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
            : 'bg-white/80 border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)]'
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className={`font-black text-xl tracking-tighter ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
            grupp<span className="text-sky-500">.</span>
          </span>
        </a>

        {/* Center links */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-tight ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
          {['Home', 'Products'].map((link) => (
            <a
              key={link}
              href={link === 'Home' ? '#' : `#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative group transition-colors hover:text-sky-500"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-full transition-all duration-300 ${
              darkMode
                ? 'hover:bg-zinc-800 text-zinc-400 hover:text-amber-400'
                : 'hover:bg-zinc-100 text-zinc-500 hover:text-zinc-800'
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            href="#"
            className="group flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-400/40"
          >
            Get Started
            <ArrowRight size={15} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
