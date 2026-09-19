import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import VideoCard from '@/components/VideoCard';
import { TESTIMONIALS, BRAND } from '@/lib/content';

// Native CSS scroll-snap on mobile rather than a JS drag carousel: real
// momentum on every phone, and zero extra JavaScript.
export default function Testimonials() {
  return (
    <section
      id="proof"
      className="scroll-mt-24 border-t border-[var(--line)] bg-white px-[var(--page-px)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="mx-auto max-w-[44rem] text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-deep)]">
              Partner success stories
            </p>
            <h2 className="mt-5 text-[clamp(28px,4vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[var(--ink)]">
              Don&rsquo;t take our word for it.{' '}
              <span className="font-serif font-normal italic text-[var(--brand)]">
                Take theirs.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-[38rem] text-[16px] leading-[1.75] text-[var(--body)]">
              Four institutions running on Grupp, in their own words.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="no-scrollbar mt-14 -mx-[var(--page-px)] flex snap-x snap-mandatory gap-5 overflow-x-auto px-[var(--page-px)] pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <RevealItem
              key={t.id}
              className="w-[84vw] shrink-0 snap-center sm:w-[60vw] md:w-auto"
            >
              <VideoCard testimonial={t} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-[13.5px] text-[var(--muted)]">
            More stories on{' '}
            <a
              href={BRAND.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--brand-deep)] underline underline-offset-2"
            >
              our YouTube channel
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
