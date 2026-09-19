import { Reveal } from '@/components/motion/Reveal';
import DeviceCycler from '@/components/DeviceCycler';
import { DEMO_TRANSACTIONS } from '@/lib/content';

// The navy band — dark used as punctuation, exactly as the original site does
// for its "offline communities" section.
//
// This is a product mockup inside a phone frame, and it is framed as one. There
// is deliberately no aggregate total: it shows what the product does, it does
// not claim volume.
export default function ProductDemo() {
  return (
    <section className="bg-[var(--navy)] px-[var(--page-px)] py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-soft)]">
              Inside the product
            </p>
            <h2 className="mt-5 text-[clamp(28px,4vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
              Let&rsquo;s build a future where{' '}
              <span className="font-serif font-normal italic text-[var(--brand-soft)]">
                offline communities fit in.
              </span>
            </h2>
            <p className="mt-6 max-w-[38rem] text-[16px] leading-[1.75] text-white/65">
              Every account opened at a market stall, every loan repaid without cash
              changing hands, every settlement that lands the same day &mdash; that is the
              product. Your agents run it in your brand; Grupp runs the rails underneath.
            </p>

            <a
              href="#how"
              className="mt-9 inline-flex h-[50px] items-center gap-2.5 rounded-full bg-white px-7 text-[15px] font-semibold text-[var(--navy)] transition-colors duration-200 hover:bg-[var(--pale)]"
            >
              See how it works
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path
                  d="M2 6h8m0 0L6.5 2.5M10 6 6.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </Reveal>

        {/* Device frame. Static — never animate a bezel. */}
        <Reveal delay={0.1}>
          <div className="mx-auto w-full max-w-[380px]">
            <div className="rounded-[36px] border border-white/15 bg-white/[0.04] p-4">
              <div className="rounded-[26px] bg-[#04183A] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[13px] font-bold tracking-[-0.02em] text-white">
                    grupp<span className="text-[var(--brand)]">.</span>
                  </span>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.12em] text-white/60">
                    Product demo
                  </span>
                </div>

                <DeviceCycler transactions={DEMO_TRANSACTIONS} />
              </div>
            </div>
            <p className="mt-4 text-center text-[11.5px] text-white/35">
              Illustrative interface. Not live transaction data.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
