import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { Logo } from '@/components/Nav';
import { BRAND, FOOTER } from '@/lib/content';

// Every link here resolves — the old footer hardcoded href="#" on all of them.
function FooterLink({ link }) {
  const external = link.href.startsWith('http') || link.href.startsWith('mailto:');
  const className =
    'text-[14px] text-[var(--body)] transition-colors duration-150 hover:text-[var(--brand-deep)]';

  return external ? (
    <a
      href={link.href}
      className={className}
      {...(link.href.startsWith('http')
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      {link.label}
    </a>
  ) : (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-white px-[var(--page-px)] pt-16 md:pt-20">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="grid gap-12 pb-14 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-10">
            <div className="max-w-[26rem]">
              <Logo />
              <p className="mt-5 text-[14px] leading-[1.7] text-[var(--body)]">
                {FOOTER.blurb}
              </p>
            </div>

            {FOOTER.columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                  {col.title}
                </h3>
                <ul className="mt-5 grid gap-3">
                  {col.links.map((link) => (
                    <li key={`${col.title}-${link.label}`}>
                      <FooterLink link={link} />
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </Reveal>

        <div className="flex flex-col-reverse items-center justify-between gap-5 border-t border-[var(--line)] py-8 md:flex-row">
          {/* No dynamic year: Date.now() in a Server Component is a build
              error under cacheComponents, and a baked-in year goes stale. */}
          <p className="text-[13px] text-[var(--muted)]">
            &copy; {BRAND.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {FOOTER.legal.map((link) => (
              <li key={link.label}>
                <FooterLink link={link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
