'use client';

const PARTNERS = [
  'FirstBank MFB', 'LAPO Microfinance', 'Accion MFB', 'Grooming MFB', 'Renmoney',
  'AB Microfinance', 'FINCA Nigeria', 'VFD Microfinance', 'Kuda Bank', 'FCMB',
  'Aso Savings', 'Fortis MFB', 'Parallex Bank', 'Advans MFB', 'NPF MFB',
];

function Track({ reverse }) {
  const items = [...PARTNERS, ...PARTNERS, ...PARTNERS];
  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'relative',
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '12px',
          width: 'max-content',
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} 35s linear infinite`,
          willChange: 'transform',
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {items.map((name, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              padding: '8px 20px',
              borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.04)',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '13px',
              color: '#8FAEC8',
              whiteSpace: 'nowrap',
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 3,
        background: '#0A1628',
        borderTop: '1px solid rgba(61, 170, 255, 0.1)',
        borderBottom: '1px solid rgba(61, 170, 255, 0.1)',
        padding: '40px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <p
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#8FAEC8',
          marginBottom: '16px',
        }}
      >
        Trusted by 120+ financial institutions across Africa
      </p>
      <Track reverse={false} />
      <Track reverse={true} />
    </section>
  );
}
