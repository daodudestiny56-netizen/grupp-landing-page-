import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { WHY } from '@/lib/content';

// Inline SVG icons as server markup — no client JS, one fewer dependency
// than pulling these from lucide-react.
const ICONS = {
  Transformation: (
    <path
      d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-5.5-2 2m-7 7-2 2m0-11 2 2m7 7 2 2"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  ),
  Speed: <path d="m13 2-8 11h6l-1 9 8-11h-6l1-9Z" strokeWidth="1.8" strokeLinejoin="round" />,
  'Fully Licensed': (
    <>
      <path d="M12 3 4 6.5v5c0 4.7 3.3 8.6 8 9.5 4.7-.9 8-4.8 8-9.5v-5L12 3Z" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  Neutrality: (
    <>
      <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
      <path d="M12 3v18M3 12h18" strokeWidth="1.8" />
    </>
  ),
};

export default function WhyGruppSection() {
  return (
    <section className="px-[var(--page-px)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="mx-auto max-w-[40rem] text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-deep)]">
              Why Grupp
            </p>
            <h2 className="mt-5 text-[clamp(28px,4vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[var(--ink)]">
              Four reasons institutions{' '}
              <span className="font-serif font-normal italic text-[var(--brand)]">
                choose us.
              </span>
            </h2>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((item) => (
            <RevealItem key={item.title}>
              <article className="group h-full rounded-[20px] border border-[var(--line)] bg-white p-7 transition-transform duration-150 hover:-translate-y-0.5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--pale)] text-[var(--brand-deep)]">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    {ICONS[item.title]}
                  </svg>
                </span>
                <h3 className="mt-5 text-[18px] font-bold tracking-[-0.01em] text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.7] text-[var(--body)]">
                  {item.body}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
