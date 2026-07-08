'use client';

const row1 = [
  'Grooming MFB',
  'Renmoney',
  'AB Microfinance',
  'FINCA Nigeria',
  'VFD Microfinance',
  'Kuda Bank',
  'FCMB',
  'Aso Savings',
  'Fortis MFB',
  'Parallex Bank',
];

const row2 = [
  'Advans MFB',
  'NPF MFB',
  'FirstBank MFB',
  'LAPO Microfinance',
  'Accion MFB',
  'Parallex Bank',
  'Renmoney',
  'AB Microfinance',
  'FINCA Nigeria',
  'VFD Microfinance',
];

function MarqueeItem({ name }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
      }}
    >
      {/* The institution name */}
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(15px, 3.5vw, 20px)',
          fontWeight: '400',
          color: 'rgba(255, 255, 255, 0.32)',
          letterSpacing: '0.01em',
          whiteSpace: 'nowrap',
          transition: 'color 0.2s ease',
          cursor: 'default',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.72)'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.32)'}
      >
        {name}
      </span>

      {/* Separator dot between items */}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '2px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          margin: '0 clamp(16px, 4vw, 24px)',
          flexShrink: 0,
        }}
      />
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      style={{
        width: '100%',
        background: 'radial-gradient(ellipse at center, rgba(0, 133, 255, 0.15) 0%, #050D1A 70%)',
        backgroundColor: '#050D1A',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(32px, 6vw, 40px) 0',
        overflow: 'hidden',
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .marquee-left {
          animation: marquee-left 38s linear infinite;
        }

        .marquee-right {
          animation: marquee-right 45s linear infinite;
        }

        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
      `}} />

      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(8px, 2vw, 9px)',
          fontWeight: '600',
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          textAlign: 'center',
          marginBottom: 'clamp(24px, 5vw, 32px)',
          padding: '0 20px',
        }}
      >
        Trusted by 120+ financial institutions across Africa
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          <div
            className="marquee-left"
            style={{
              display: 'flex',
              width: 'max-content',
              alignItems: 'center',
            }}
          >
            {[...row1, ...row1].map((name, i) => (
              <MarqueeItem key={i} name={name} />
            ))}
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          <div
            className="marquee-right"
            style={{
              display: 'flex',
              width: 'max-content',
              alignItems: 'center',
            }}
          >
            {[...row2, ...row2].map((name, i) => (
              <MarqueeItem key={i} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
