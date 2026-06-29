'use client';

import { ArrowRight } from 'lucide-react';

export default function CTABand() {
  return (
    <section className="py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-sky-500 to-sky-400 px-8 md:px-16 py-20 text-center shadow-2xl shadow-sky-500/20">
          {/* Decorative rings */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-32 -right-16 w-96 h-96 rounded-full border border-white/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-5">
              Ready to launch?
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Launch your bank in{' '}
              <em
                className="font-serif font-normal italic not-italic"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic' }}
              >
                days, not years
              </em>
            </h2>
            <p className="text-white/70 text-base max-w-xl mx-auto mb-10">
              Join 120+ financial institutions already processing billions on Grupp's infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-600 font-bold text-sm rounded-xl transition-all duration-200 hover:bg-sky-50 shadow-xl hover:-translate-y-px">
                Request a Demo
                <ArrowRight size={15} />
              </button>
              <button className="flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:bg-white/10 hover:border-white/50">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
