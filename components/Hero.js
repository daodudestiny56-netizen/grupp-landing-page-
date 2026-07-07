'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FadeSlideUp } from '@/components/ScrollAnimations';

export default function Hero() {
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#050D1A',
      }}
    >
      {!prefersReducedMotion && (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.4,
          }}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
      )}

      {/* Layer 1 — directional dark gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,13,26,0.45) 0%, rgba(5,13,26,0.7) 60%, rgba(5,13,26,0.95) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Layer 2 — brand blue radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 65% 50% at 50% 45%, rgba(0,133,255,0.14) 0%, transparent 70%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Hero content wrapper */}
      <div
        className="flex flex-col items-center text-center max-w-5xl mx-auto px-6"
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
        }}
      >
        {/* Badge */}
        <FadeSlideUp delay={0}>
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border mb-8 bg-zinc-900/60 border-zinc-800 text-sky-400">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            Community Banking as a Service
          </div>
        </FadeSlideUp>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.07] mb-6 focus-in-contract text-white">
          Digital Platform
          <br />
          <span
            className="font-serif italic font-normal bg-gradient-to-r from-sky-500 to-sky-400 bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            for Community Banks.
          </span>
        </h1>

        {/* Sub */}
        <FadeSlideUp delay={0.2}>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed mb-10 text-zinc-400">
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
            <button className="flex items-center justify-center px-7 py-3.5 font-semibold text-sm rounded-xl border transition-all duration-200 border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-700">
              View Documentation
            </button>
          </div>
        </FadeSlideUp>
      </div>
    </section>
  );
}
