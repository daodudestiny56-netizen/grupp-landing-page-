'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Nav({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[640px] z-50">
      <div
        className={`w-full flex items-center justify-between py-2 px-3 sm:px-4 rounded-full border transition-all duration-300 backdrop-blur-md ${
          darkMode
            ? 'bg-zinc-950/70 border-zinc-800/60 shadow-xl shadow-black/50'
            : 'bg-white/70 border-zinc-200/60 shadow-lg shadow-black/5'
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center pl-2">
          <span className={`font-black text-lg tracking-tighter ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
            grupp<span className="text-sky-500">.</span>
          </span>
        </a>

        {/* Center links */}
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 text-[15px] font-medium tracking-tight ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
          {['Home', 'Products'].map((link) => (
            <a
              key={link}
              href={link === 'Home' ? '#' : `#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-4 py-1.5 rounded-full transition-all duration-300 ${darkMode ? 'hover:text-white hover:bg-white/10' : 'hover:text-zinc-900 hover:bg-black/5'}`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center">
          <Link
            href="#"
            className="group flex items-center gap-1.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-[13px] px-5 py-2 rounded-full transition-all duration-300 shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-400/30"
          >
            Get Started
            <ArrowRight size={14} className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
