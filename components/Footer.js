'use client';

const COLS = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Blog'],
  },
  {
    title: 'Products',
    links: ['Agent Banking', 'Payments', 'Lending', 'Core Banking API'],
  },
  {
    title: 'Legal',
    links: ['Terms & Conditions', 'Privacy Policy', 'Compliance', 'Book a Call'],
  },
];

const SOCIALS = [
  { label: 'Twitter',   href: '#' },
  { label: 'LinkedIn',  href: '#' },
  { label: 'Facebook',  href: '#' },
  { label: 'Instagram', href: '#' },
];

export default function Footer() {
  return (
    <footer style={{
      background: '#050D1A',
      borderTop: '1px solid rgba(61, 170, 255, 0.1)',
      padding: '80px 48px 0',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
          paddingBottom: '64px',
        }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <a href="/" style={{ textDecoration: 'none' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '24px',
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
              }}>
                grupp<span style={{ color: '#0085FF' }}>.</span>
              </span>
            </a>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: 1.7,
              color: '#8FAEC8',
              marginTop: '16px',
              marginBottom: '32px',
              maxWidth: '280px',
            }}>
              Banking the communities everyone else left behind.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {SOCIALS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '12px',
                    color: '#8FAEC8',
                    textDecoration: 'none',
                    padding: '6px 14px',
                    border: '1px solid rgba(61, 170, 255, 0.15)',
                    borderRadius: '100px',
                    transition: 'color 200ms ease, border-color 200ms ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'rgba(61, 170, 255, 0.4)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#8FAEC8';
                    e.currentTarget.style.borderColor = 'rgba(61, 170, 255, 0.15)';
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLS.map(col => (
            <div key={col.title}>
              <h4 style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#8FAEC8',
                marginBottom: '20px',
              }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a
                      href={link.includes('@') ? `mailto:${link}` : '#'}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: '#8FAEC8',
                        textDecoration: 'none',
                        transition: 'color 200ms ease',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#8FAEC8')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 0',
          borderTop: '1px solid rgba(61, 170, 255, 0.08)',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: '13px',
            color: '#8FAEC8',
          }}>
            © 2026 Grupp. All rights reserved.
          </span>
          <a
            href="mailto:info@trygrupp.africa"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '13px',
              color: '#8FAEC8',
              textDecoration: 'none',
              transition: 'color 200ms ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8FAEC8')}
          >
            info@trygrupp.africa
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
