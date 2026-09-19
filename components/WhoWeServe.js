import { Reveal } from '@/components/motion/Reveal';
import { COMMUNITIES } from '@/lib/content';

// 100% Server Component — the marquee is pure CSS, hover-pause included.
// Animates ONE element per row (the track), not N items.
//
// These are Grupp's own merchant categories, lifted from their real onboarding
// taxonomy. Ajo/Esusu thrift groups and Okada hailing are the texture that no
// competitor's site has, and they replace the invented bank-logo marquee.
function Row({ items, direction, hideOnMobile = false }) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`marquee-row marquee-mask overflow-hidden py-2.5 ${
        hideOnMobile ? 'hidden md:block' : ''
      }`}
    >
      <ul
        className={`marquee-track gap-3 ${
          direction === 'left' ? 'marquee-left' : 'marquee-right'
        }`}
      >
        {doubled.map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="shrink-0 rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-[14px] font-medium text-[var(--ink)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WhoWeServe() {
  const half = Math.ceil(COMMUNITIES.length / 2);
  return (
    <section
      id="communities"
      className="scroll-mt-24 border-y border-[var(--line)] bg-white px-[var(--page-px)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="mx-auto max-w-[44rem] text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-deep)]">
              Who we serve
            </p>
            <h2 className="mt-5 text-[clamp(28px,4vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[var(--ink)]">
              The market trader. The thrift group.{' '}
              <span className="font-serif font-normal italic text-[var(--brand)]">
                The POS agent.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-[40rem] text-[16px] leading-[1.75] text-[var(--body)]">
              These are the businesses your institution already knows. They are the
              categories Grupp is built to onboard &mdash; not an abstraction of
              &ldquo;the underserved&rdquo;, but the actual trades.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Full-bleed, outside the max-width container. */}
      <div className="mt-14 -mx-[var(--page-px)]">
        <Row items={COMMUNITIES.slice(0, half)} direction="left" />
        <Row items={COMMUNITIES.slice(half)} direction="right" hideOnMobile />
      </div>
    </section>
  );
}
