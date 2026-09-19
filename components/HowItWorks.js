import { Reveal } from '@/components/motion/Reveal';
import StickyScene from '@/components/StickyScene';
import { STEPS } from '@/lib/content';

// The section wrapper is a Server Component; only the scroll scene is a client
// island. Note there is deliberately no `overflow-hidden` or `transform` on
// this ancestor chain — either would break `position: sticky` inside, silently.
export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 bg-[var(--pale)]/40 px-[var(--page-px)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="mx-auto max-w-[46rem] text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-deep)]">
              How it works
            </p>
            <h2 className="mt-5 text-[clamp(28px,4vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[var(--ink)]">
              You bring the community.{' '}
              <span className="font-serif font-normal italic text-[var(--brand)]">
                We bring everything else.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-[42rem] text-[16px] leading-[1.75] text-[var(--body)]">
              Grupp handles all the technical aspects of your financial service delivery so
              that you don&rsquo;t have to worry about technology. We provide you with a
              ready-to-use solution that you can instantly start to sell to your customers.
            </p>
          </div>
        </Reveal>

        <div className="mt-16">
          <StickyScene steps={STEPS} />
        </div>
      </div>
    </section>
  );
}
