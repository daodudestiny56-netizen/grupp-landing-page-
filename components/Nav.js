'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Nav({ darkMode, setDarkMode }) {
  useEffect(() => {
    const onScroll = () => {};
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dark = darkMode;

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className={`inline-flex items-center gap-6 px-4 py-2.5 rounded-full border transition-all duration-300 backdrop-blur-md ${
          dark
            ? 'bg-zinc-950/80 border-zinc-800/70 shadow-xl shadow-black/50'
            : 'bg-white/80 border-zinc-200/70 shadow-lg shadow-black/8'
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <span className={`font-black text-[17px] tracking-tighter leading-none ${dark ? 'text-white' : 'text-zinc-950'}`}>
            grupp<span className="text-sky-500">.</span>
          </span>
        </a>

        {/* Divider */}
        <div className={`w-px h-4 shrink-0 ${dark ? 'bg-zinc-700' : 'bg-zinc-200'}`} />

        {/* Nav links */}
        {['Home', 'Products'].map((link) => (
          <a
            key={link}
            href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
            className={`relative group text-[13px] font-medium leading-none shrink-0 transition-colors duration-200 ${
              dark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'
            }`}
          >
            {link}
            <span className="absolute left-0 top-full mt-[5px] w-0 h-[1.5px] bg-sky-500 rounded-full transition-all duration-300 group-hover:w-full" />
          </a>
        ))}

        {/* Divider */}
        <div className={`w-px h-4 shrink-0 ${dark ? 'bg-zinc-700' : 'bg-zinc-200'}`} />

        {/* CTA */}
        <Link
          href="#"
          className="group inline-flex items-center gap-1 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-[12px] px-3.5 py-1.5 rounded-full transition-all duration-300 shadow-sm shadow-sky-500/30 shrink-0"
        >
          Get Started
          <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </nav>
  );
}
