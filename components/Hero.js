'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FadeSlideUp } from '@/components/ScrollAnimations';

export default function Hero({ darkMode }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid mesh */}
        <div
          className={`absolute inset-0 ${darkMode ? 'opacity-[0.03]' : 'opacity-[0.04]'}`}
          style={{
            backgroundImage: `linear-gradient(${darkMode ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? '#fff' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Orbs */}
        <div
          className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] rounded-full blur-3xl ${
            darkMode ? 'bg-sky-500/8' : 'bg-sky-400/12'
          }`}
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <div
          className={`absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full blur-3xl ${
            darkMode ? 'bg-sky-500/5' : 'bg-sky-300/15'
          }`}
          style={{ animation: 'float 12s ease-in-out infinite reverse' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
        {/* Badge */}
        <FadeSlideUp delay={0}>
          <div
            className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border mb-8 ${
              darkMode
                ? 'bg-zinc-900/60 border-zinc-800 text-sky-400'
                : 'bg-sky-50 border-sky-100 text-sky-700'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            Community Banking as a Service
          </div>
        </FadeSlideUp>

        {/* Headline */}
        <FadeSlideUp delay={0.1}>
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.07] mb-6 ${
              darkMode ? 'text-white' : 'text-zinc-950'
            }`}
          >
            Digital Platform
            <br />
            <span
              className="font-serif italic font-normal bg-gradient-to-r from-sky-500 to-sky-400 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              for Community Banks.
            </span>
          </h1>
        </FadeSlideUp>

        {/* Sub */}
        <FadeSlideUp delay={0.2}>
          <p
            className={`text-base md:text-lg max-w-2xl leading-relaxed mb-10 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-500'
            }`}
          >
            Our platform as a service empowers community banks with a variety of digitized
            financial tools tailored to customers' needs in their brand.
          </p>
        </FadeSlideUp>

        {/* CTAs */}
        <FadeSlideUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="#"
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/30 hover:-translate-y-px hover:shadow-sky-400/40"
            >
              Start Building Free
              <ArrowRight size={15} />
            </Link>
            <button
              className={`flex items-center justify-center px-7 py-3.5 font-semibold text-sm rounded-xl border transition-all duration-200 ${
                darkMode
                  ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-700'
                  : 'border-zinc-200 text-zinc-650 hover:bg-zinc-50 hover:border-zinc-300'
              }`}
            >
              View Documentation
            </button>
          </div>
        </FadeSlideUp>

      </div>
    </section>
  );
}
