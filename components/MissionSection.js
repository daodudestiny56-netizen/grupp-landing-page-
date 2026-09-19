import { LineRise, Reveal } from '@/components/motion/Reveal';
import { MISSION } from '@/lib/content';

// Grupp's own mission line, given the weight it deserves. This is the
// sharpest sentence they have written and it appeared nowhere on the old page.
export default function MissionSection() {
  return (
    <section className="px-[var(--page-px)] py-24 md:py-36">
      <div className="mx-auto max-w-[1000px] text-center">
        <Reveal y={12}>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-deep)]">
            Why we exist
          </p>
        </Reveal>

        <h2 className="mt-8 text-[clamp(28px,4.4vw,52px)] font-extrabold leading-[1.16] tracking-[-0.03em] text-[var(--ink)]">
          <LineRise lines={MISSION.lines} />
        </h2>

        <Reveal delay={0.35}>
          <p className="mx-auto mt-7 max-w-[40rem] font-serif text-[clamp(22px,3vw,34px)] italic leading-[1.3] text-[var(--brand)]">
            {MISSION.accent}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
