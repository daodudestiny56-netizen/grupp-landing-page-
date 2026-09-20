import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';
import MagneticButton from '@/components/MagneticButton';
import { CTA } from '@/lib/content';

export default function CTABand() {
  return (
    <section className="px-[var(--page-px)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[28px] bg-[var(--navy)] px-6 py-16 text-center md:rounded-[36px] md:px-16 md:py-24">
          {/* Static decorative rings — nothing here animates. */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-white/[0.07]" />
            <div className="absolute -bottom-36 -right-20 h-[420px] w-[420px] rounded-full border border-white/[0.07]" />
            <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />
          </div>

          <div className="relative z-10">
            {/* Reinforces the action literally: this button opens a calendar. */}
            <Reveal y={12}>
              <Image
                src="/calendar.png"
                alt=""
                aria-hidden="true"
                width={220}
                height={220}
                loading="lazy"
                sizes="88px"
                className="mx-auto mb-7 h-[72px] w-[72px] md:h-[88px] md:w-[88px]"
              />
            </Reveal>

            <Reveal y={12} delay={0.04}>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-soft)]">
                {CTA.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mx-auto mt-6 max-w-[20ch] text-[clamp(28px,4.2vw,48px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
                {CTA.headline}{' '}
                <span className="font-serif font-normal italic text-[var(--brand-soft)]">
                  {CTA.headlineAccent}
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mx-auto mt-6 max-w-[34rem] text-[16px] leading-[1.75] text-white/65">
                {CTA.body}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <MagneticButton href={CTA.primary.href}>{CTA.primary.label}</MagneticButton>
                <a
                  href={CTA.secondary.href}
                  className="inline-flex h-[56px] items-center rounded-full border border-white/20 px-8 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-white/45 hover:bg-white/[0.06]"
                >
                  {CTA.secondary.label}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
