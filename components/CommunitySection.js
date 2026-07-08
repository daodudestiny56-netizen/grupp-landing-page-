'use client';

import { useState, useEffect } from 'react';

const transactions = [
  {
    id: 1,
    avatar: 'CA',
    avatarGradient: 'linear-gradient(135deg, #1a3a6b 0%, #0085FF 100%)',
    name: 'Cynthia A.',
    action: 'received a business loan',
    category: 'Loans',
    categoryColor: '#3DAAFF',
    amount: '₦50,000',
    time: 'Just now',
  },
  {
    id: 2,
    avatar: 'CB',
    avatarGradient: 'linear-gradient(135deg, #0a3d2e 0%, #00A86B 100%)',
    name: 'Charles B.',
    action: 'made a cash deposit',
    category: 'Deposits',
    categoryColor: '#00D4A4',
    amount: '₦15,000',
    time: 'Just now',
  },
  {
    id: 3,
    avatar: 'FO',
    avatarGradient: 'linear-gradient(135deg, #2a1a5e 0%, #7B5EA7 100%)',
    name: 'Fatima O.',
    action: 'completed a transfer',
    category: 'Transfer',
    categoryColor: '#9B8FFF',
    amount: '₦8,500',
    time: 'Just now',
  },
  {
    id: 4,
    avatar: 'AE',
    avatarGradient: 'linear-gradient(135deg, #3d2800 0%, #B87333 100%)',
    name: 'Adamu E.',
    action: 'repaid a loan installment',
    category: 'Repayment',
    categoryColor: '#D4A04A',
    amount: '₦12,000',
    time: 'Just now',
  },
  {
    id: 5,
    avatar: 'NK',
    avatarGradient: 'linear-gradient(135deg, #3d0a0a 0%, #8B2020 100%)',
    name: 'Ngozi K.',
    action: 'opened a savings account',
    category: 'Savings',
    categoryColor: '#CC6666',
    amount: '₦5,000',
    time: 'Just now',
  },
];

const cardStyle = {
  entering: {
    opacity: 0,
    transform: 'translateY(-28px) scale(0.96)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.6s ease',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0px) scale(1)',
    borderColor: 'rgba(255, 255, 255, 0.07)',
    transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.6s ease',
  },
  exiting: {
    opacity: 0,
    transform: 'translateY(-16px) scale(0.97)',
    borderColor: 'rgba(255, 255, 255, 0.07)',
    transition: 'opacity 0.4s ease-in, transform 0.4s ease-in, border-color 0.4s ease',
  },
};

export default function CommunitySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState('entering'); 
  
  useEffect(() => {
    let timeout;
    const isMobile = window.innerWidth < 768;
  
    if (phase === 'entering') {
      timeout = setTimeout(() => setPhase('visible'), 600);
    } else if (phase === 'visible') {
      const hold = isMobile ? (4000 + Math.random() * 2000) : (5000 + Math.random() * 3000);
      timeout = setTimeout(() => setPhase('exiting'), hold);
    } else if (phase === 'exiting') {
      timeout = setTimeout(() => {
        setActiveIndex(prev => (prev + 1) % transactions.length);
        setPhase('entering');
      }, 400);
    }
  
    return () => clearTimeout(timeout);
  }, [phase]);

  const transaction = transactions[activeIndex];

  return (
    <section
      className="relative w-full min-h-[auto] md:min-h-screen bg-cover bg-center overflow-hidden flex items-center bg-scroll"
      style={{ backgroundImage: 'url(/market.jpg)' }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes livePulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 212, 164, 0.5); }
          70% { box-shadow: 0 0 0 10px rgba(0, 212, 164, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 212, 164, 0); }
        }
      `}} />

      {/* Overlay Layer 1 — directional gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(to right, rgba(5,13,26,0.88) 0%, rgba(5,13,26,0.72) 40%, rgba(5,13,26,0.45) 70%, rgba(5,13,26,0.25) 100%)',
        }}
      />

      {/* Overlay Layer 2 — bottom seal */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(to bottom, rgba(5,13,26,0.2) 0%, transparent 20%, transparent 80%, rgba(5,13,26,0.9) 100%)',
        }}
      />

      <div className="relative z-[3] w-full max-w-[1280px] mx-auto px-[var(--page-px)] py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        {/* LEFT COLUMN (Transactions) - Under text on mobile */}
        <div className="order-last md:order-first w-full" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          
          {/* Live indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '14px',
          }}>
            {/* Pulse dot */}
            <div style={{ position: 'relative', width: '8px', height: '8px' }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: '#00D4A4',
                animation: 'livePulse 2.4s ease-out infinite',
              }} />
              <div style={{
                position: 'absolute',
                inset: '2px',
                borderRadius: '50%',
                background: '#00D4A4',
              }} />
            </div>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '10px',
              fontWeight: '600',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              Live transactions
            </span>
          </div>

          {/* Notification card */}
          <div style={{
            width: '100%',
            maxWidth: '340px',
            background: 'rgba(8, 18, 36, 0.72)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderRadius: '18px',
            border: '1px solid',
            padding: 'clamp(14px, 3.5vw, 16px) clamp(14px, 4vw, 18px)',
            boxShadow: `
              0 32px 64px rgba(0, 0, 0, 0.45),
              0 1px 0 rgba(255, 255, 255, 0.06) inset,
              0 -1px 0 rgba(0, 0, 0, 0.3) inset
            `,
            willChange: 'transform, opacity, border-color',
            ...cardStyle[phase]
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                {/* App icon — small grupp blue dot */}
                <div style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '4px',
                  background: '#0085FF',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '11px',
                  fontWeight: '600',
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  Grupp
                </span>
              </div>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '11px',
                color: 'rgba(255,255,255,0.25)',
              }}>
                Just now
              </span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
            }}>
              {/* Avatar */}
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: transaction.avatarGradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Space Mono', monospace",
                fontSize: '11px',
                fontWeight: '700',
                color: 'rgba(255,255,255,0.9)',
                flexShrink: 0,
                letterSpacing: '0.02em',
              }}>
                {transaction.avatar}
              </div>

              {/* Text block */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Name + amount on same line */}
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '8px',
                  marginBottom: '3px',
                }}>
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(13px, 3.5vw, 14px)',
                    fontWeight: '600',
                    color: 'rgba(255,255,255,0.92)',
                    letterSpacing: '-0.01em',
                    whiteSpace: 'nowrap',
                  }}>
                    {transaction.name}
                  </span>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 'clamp(12px, 3vw, 13px)',
                    fontWeight: '700',
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    flexShrink: 0,
                  }}>
                    {transaction.amount}
                  </span>
                </div>

                {/* Action text */}
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.42)',
                  display: 'block',
                  marginBottom: '10px',
                }}>
                  {transaction.action}
                </span>

                {/* Category tag */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <div style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: transaction.categoryColor,
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '10px',
                    fontWeight: '500',
                    color: 'rgba(255,255,255,0.45)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}>
                    {transaction.category}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div style={{
            width: '100%',
            maxWidth: '340px',
            height: '1px',
            background: 'linear-gradient(to right, rgba(255,255,255,0.08) 0%, transparent 100%)',
            margin: '18px 0',
          }} />

          {/* Stat row */}
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 'clamp(6px, 2vw, 10px)',
            maxWidth: '340px',
          }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(24px, 7vw, 28px)',
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}>
              ₦2.4B+
            </span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(11px, 3vw, 12px)',
              color: 'rgba(255,255,255,0.35)',
              lineHeight: '1.4',
              maxWidth: '100px',
            }}>
              processed this month
            </span>
          </div>

        </div>

        {/* RIGHT COLUMN (Text) - Above transactions on mobile */}
        <div className="order-first md:order-last w-full">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-sky-500" style={{ animation: 'livePulse 2s ease-out infinite' }} />
            <span className="text-[11px] font-semibold text-sky-500/90 tracking-widest uppercase">
              Community Impact
            </span>
          </div>

          <h2 className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white mb-6 max-w-[580px]">
            Let's build a future where{' '}
            <span className="text-sky-500 whitespace-nowrap">offline communities</span>
            {' '}fit in.
          </h2>

          <p className="text-[clamp(15px,1.5vw,17px)] text-sky-100/70 leading-[1.75] max-w-[480px] mb-10">
            Grupp is the infrastructure layer that makes it possible — for the market trader in Onitsha, the cooperative in Kano, the POS agent in Ojo. Real financial tools, built for the communities that need them most.
          </p>

          <a
            href="#how"
            className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-400 text-white font-bold text-[15px] px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-sky-500/30 hover:-translate-y-px hover:shadow-sky-400/40"
          >
            See how it works
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
