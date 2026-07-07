'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Nav({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dark = darkMode;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[620px] z-50">
      <div
        className={`flex items-center h-12 px-4 rounded-full border transition-all duration-300 backdrop-blur-md ${
          dark
            ? 'bg-zinc-950/70 border-zinc-800/60 shadow-xl shadow-black/50'
            : 'bg-white/70 border-zinc-200/60 shadow-lg shadow-black/5'
        }`}
      >
        {/* Logo — left */}
        <div className="flex-1 flex items-center">
          <a href="/" className="pl-1">
            <span className={`font-black text-lg tracking-tighter leading-none ${dark ? 'text-white' : 'text-zinc-950'}`}>
              grupp<span className="text-sky-500">.</span>
            </span>
          </a>
        </div>

        {/* Nav links — center */}
        <div className="flex items-center gap-6">
          {['Home', 'Products'].map((link) => (
            <a
              key={link}
              href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
              className={`relative group text-[14px] font-medium leading-none ${dark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200`}
            >
              {link}
              <span className="absolute left-0 top-full mt-1 w-0 h-[2px] bg-sky-500 rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA — right */}
        <div className="flex-1 flex items-center justify-end">
          <Link
            href="#"
            className="group flex items-center gap-1.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-[13px] px-5 py-2 rounded-full transition-all duration-300 shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-400/30"
          >
            Get Started
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
