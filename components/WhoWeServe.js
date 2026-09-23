import { Reveal } from '@/components/motion/Reveal';
import { COMMUNITIES } from '@/lib/content';

// 100% Server Component — the marquee is pure CSS, hover-pause included.
// Animates ONE element per row (the track), not N items.
//
// These are Grupp's own merchant categories, lifted from their real onboarding
// taxonomy. Ajo/Esusu thrift groups and Okada hailing are the texture that no
// competitor's site has, and they replace the invented bank-logo marquee.
function Chip({ label }) {
  return (
    <li className="shrink-0 whitespace-nowrap rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-[14px] font-medium text-[var(--ink)]">
      {label}
    </li>
  );
}

function Row({ items, direction, hideOnMobile = false }) {
  return (
    <div
      className={`marquee-row marquee-mask overflow-hidden py-2.5 ${
        hideOnMobile ? 'hidden md:block' : ''
      }`}
    >
      <div
        className={`marquee-track ${
          direction === 'left' ? 'marquee-left' : 'marquee-right'
        }`}
      >
        {/* Two identical sets. The second is the loop's tail, so it is hidden
            from assistive tech — a screen reader reads the list once. */}
        <ul className="marquee-set">
          {items.map((item) => (
            <Chip key={item} label={item} />
          ))}
        </ul>
        <ul className="marquee-set" aria-hidden="true">
          {items.map((item) => (
            <Chip key={`dup-${item}`} label={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function WhoWeServe() {
  // Both rows carry the full list rather than half each: a six-chip set ran
  // out of content on a wide monitor. Row two is rotated so the rows read as
  // different content passing in opposite directions.
  const half = Math.ceil(COMMUNITIES.length / 2);
  const rowTwo = [...COMMUNITIES.slice(half), ...COMMUNITIES.slice(0, half)];

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
        <Row items={COMMUNITIES} direction="left" />
        <Row items={rowTwo} direction="right" hideOnMobile />
      </div>
    </section>
  );
}
