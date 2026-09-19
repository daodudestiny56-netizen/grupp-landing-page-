import { Reveal } from '@/components/motion/Reveal';
import ProductTabs from '@/components/ProductTabs';
import { PRODUCTS } from '@/lib/content';

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className="mt-0.5 shrink-0"
    >
      <circle cx="10" cy="10" r="10" fill="var(--pale)" />
      <path
        d="m6 10.2 2.6 2.6L14 7.4"
        stroke="var(--brand-deep)"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Each panel is a Server Component, handed to the client tab island as a prop.
function Panel({ product }) {
  return (
    <div className="grid items-start gap-10 rounded-[24px] border border-[var(--line)] bg-white p-7 md:grid-cols-2 md:gap-14 md:p-12">
      <div>
        <h3 className="text-[clamp(22px,2.6vw,32px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--ink)]">
          {product.heading}
        </h3>
        <p className="mt-5 text-[15px] leading-[1.75] text-[var(--body)]">{product.body}</p>
        <p className="mt-5 font-serif text-[17px] italic text-[var(--brand-deep)]">
          {product.kicker}
        </p>
      </div>

      <ul className="grid gap-3.5 rounded-[18px] bg-[var(--surface)] p-6 md:p-7">
        {product.features.map((f) => (
          <li key={f} className="flex gap-3 text-[14px] font-medium text-[var(--ink)]">
            <Check />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProductsSection() {
  const tabs = PRODUCTS.map(({ id, label }) => ({ id, label }));
  const panels = PRODUCTS.map((p) => <Panel key={p.id} product={p} />);

  return (
    <section id="products" className="scroll-mt-24 px-[var(--page-px)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-deep)]">
              What we build
            </p>
            <h2 className="mx-auto mt-5 max-w-[22ch] text-[clamp(28px,4vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[var(--ink)]">
              Four products. One platform.{' '}
              <span className="font-serif font-normal italic text-[var(--brand)]">
                Your brand.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12">
          <ProductTabs tabs={tabs} panels={panels} />
        </div>
      </div>
    </section>
  );
}
