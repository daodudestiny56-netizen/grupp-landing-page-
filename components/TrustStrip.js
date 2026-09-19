import { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { TRUST } from '@/lib/content';

// Server Component. Four real, named customers — each one appears on camera
// in the success-story videos further down the page. No invented totals.
export default function TrustStrip() {
  return (
    <section className="border-y border-[var(--line)] bg-white px-[var(--page-px)] py-10 md:py-12">
      <div className="mx-auto max-w-[1280px]">
        <RevealGroup>
          <RevealItem>
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              {TRUST.label}
            </p>
          </RevealItem>

          <RevealItem>
            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-16">
              {TRUST.names.map((name) => (
                <li
                  key={name}
                  className="text-[15px] font-bold tracking-[-0.01em] text-[var(--ink)] opacity-70 md:text-[17px]"
                >
                  {name}
                </li>
              ))}
            </ul>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
