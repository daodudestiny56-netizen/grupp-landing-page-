import Image from 'next/image';
import { HERO } from '@/lib/content';

// Server Component. Every animation here is CSS, so the fold renders and
// animates with zero JavaScript — it cannot be left blank by slow hydration.

function TransactionCard() {
  return (
    <div className="idle-float absolute -bottom-6 -left-4 w-[248px] rounded-2xl border border-[var(--line)] bg-white p-4 shadow-[0_16px_40px_rgba(24,47,67,0.14)] sm:-left-8 sm:w-[268px]">
      <div className="flex items-center gap-2">
        <span className="relative grid h-2 w-2 place-items-center">
          <span className="pulse-ring absolute h-2 w-2 rounded-full bg-[var(--brand)]" />
          <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--brand-deep)]">
          On Grupp
        </span>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--pale)] text-[13px] font-bold text-[var(--brand-deep)]">
          NK
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-[var(--ink)]">Ngozi K.</p>
          <p className="truncate text-[12px] text-[var(--muted)]">opened a savings account</p>
        </div>
      </div>

      <div className="mt-3 flex items-baseline justify-between border-t border-[var(--line)] pt-3">
        <span className="text-[11px] font-medium text-[var(--muted)]">Savings</span>
        <span className="font-serif text-[18px] italic text-[var(--ink)]">&#8358;5,000</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative px-[var(--page-px)] pb-20 pt-[calc(var(--nav-h)+40px)] md:pb-28 md:pt-[calc(var(--nav-h)+72px)]"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Copy */}
        <div>
          <p
            className="fade-rise inline-flex items-center gap-2 rounded-full bg-[var(--pale)] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--brand-deep)]"
            style={{ animationDelay: '0s' }}
          >
            {HERO.eyebrow}
          </p>

          <h1 className="mt-6 text-[clamp(36px,5.4vw,62px)] font-extrabold leading-[1.04] tracking-[-0.035em] text-[var(--ink)]">
            {HERO.headline.map((line, i) => (
              <span
                key={i}
                className="fade-rise block"
                style={{ animationDelay: `${0.08 + i * 0.08}s` }}
              >
                {i === HERO.accentLine ? (
                  <span className="font-serif font-normal italic text-[var(--brand)]">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <p
            className="fade-rise mt-6 max-w-[30rem] text-[clamp(15px,1.3vw,17px)] leading-[1.7] text-[var(--body)]"
            style={{ animationDelay: '0.36s' }}
          >
            {HERO.sub}
          </p>

          <div
            className="fade-rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '0.46s' }}
          >
            <a
              href={HERO.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-7 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(35,162,253,0.28)] transition-colors duration-200 hover:bg-[var(--brand-soft)]"
            >
              {HERO.primaryCta.label}
              <svg width="15" height="15" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path
                  d="M2 6h8m0 0L6.5 2.5M10 6 6.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href={HERO.secondaryCta.href}
              className="inline-flex h-[52px] items-center justify-center rounded-full border border-[var(--line)] bg-white px-7 text-[15px] font-semibold text-[var(--ink)] transition-colors duration-200 hover:border-[var(--brand)] hover:text-[var(--brand-deep)]"
            >
              {HERO.secondaryCta.label}
            </a>
          </div>
        </div>

        {/* Photo. The image itself carries NO entrance animation: it is the LCP
            element, and framer-motion would serialize opacity:0 into the SSR
            markup, disqualifying it as an LCP candidate until hydration. The
            motion lives in the accent frame behind it instead. */}
        <div className="relative">
          <div
            aria-hidden
            className="frame-settle absolute -bottom-4 -right-4 h-full w-full rounded-[28px] bg-[var(--amber)] opacity-90"
          />
          <div className="relative overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(24,47,67,0.18)]">
            <Image
              src={HERO.photo.src}
              alt={HERO.photo.alt}
              width={1024}
              height={682}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 48vw, 92vw"
              className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[460px]"
            />
          </div>
          <TransactionCard />
          <p className="mt-8 pl-1 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] sm:mt-6">
            {HERO.photo.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
