'use client';

import { ScaleBlur, FadeSlideUp } from '@/components/ScrollAnimations';

export default function CommunitySection() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/market.jpg')" }}
    >
      {/* Transparent white overlay */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Market Scene Image & Floating Transaction Cards */}
        <div className="relative flex justify-center lg:justify-start">
          <ScaleBlur>
            <div className="relative w-full max-w-md h-[400px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              {/* Market Scene Image inside the card */}
              <img
                src="/market.jpg"
                alt="Local Market Scene Detail"
                className="w-full h-full object-cover"
              />
              {/* Vignette Overlay for card to keep overlays visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

              {/* Floating Transaction Bubbles */}
              <div className="absolute inset-x-6 top-8 space-y-6">
                {/* Cynthia's Loan */}
                <div className="animate-fade-in-up">
                  <div className="relative bg-sky-500 text-white p-4 rounded-2xl rounded-tl-none shadow-xl max-w-[85%] border border-sky-400/20">
                    <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                      Cynthia just received a ₦50,000 business loan.
                    </p>
                  </div>
                  <div className="mt-2 ml-4 inline-block px-3 py-1 bg-sky-500/20 border border-sky-500/30 rounded-full text-[10px] font-bold text-sky-800 uppercase tracking-wider">
                    Loans
                  </div>
                </div>

                {/* Charles' Deposit */}
                <div className="animate-fade-in-up pt-4">
                  <div className="relative bg-sky-500 text-white p-4 rounded-2xl rounded-tl-none shadow-xl max-w-[85%] border border-sky-400/20">
                    <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                      Charles just made a ₦15,000 cash deposit.
                    </p>
                  </div>
                  <div className="mt-2 ml-4 inline-block px-3 py-1 bg-sky-500/20 border border-sky-500/30 rounded-full text-[10px] font-bold text-sky-800 uppercase tracking-wider">
                    Deposits
                  </div>
                </div>
              </div>
            </div>
          </ScaleBlur>
        </div>

        {/* Right Side: Copywriting Content */}
        <div className="flex flex-col items-start max-w-xl text-zinc-900">
          <FadeSlideUp>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-8 text-zinc-950">
              Let's build a future where{' '}
              <span className="relative inline-block">
                offline communities
                {/* Blue curved underline icon */}
                <svg
                  className="absolute -bottom-3 left-0 w-full h-3 text-sky-500"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7C40 3 120 1 198 5C140 1 60 3 2 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              fit in.
            </h2>
          </FadeSlideUp>

          <FadeSlideUp delay={0.1}>
            <button className="mb-8 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 shadow-sky-500/25">
              How it works
            </button>
          </FadeSlideUp>

          <FadeSlideUp delay={0.2}>
            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-medium">
              Grupp handles all the technical aspects of your financial service delivery so that you
              don't have to worry about technology. We provide you with a ready-to-use solution that
              you can instantly start to sell to your customers.
            </p>
          </FadeSlideUp>
        </div>
      </div>
    </section>
  );
}
