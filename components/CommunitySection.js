'use client';

import { useState, useEffect } from 'react';

const transactions = [
  {
    id: 1,
    avatar: 'CA',
    avatarColor: '#0085FF',
    name: 'Cynthia A.',
    action: 'received a business loan',
    category: 'Loans',
    amount: '₦50,000',
    amountColor: '#3DAAFF',
    time: 'Just now',
  },
  {
    id: 2,
    avatar: 'CB',
    avatarColor: '#00A86B',
    name: 'Charles B.',
    action: 'made a cash deposit',
    category: 'Deposits',
    amount: '₦15,000',
    amountColor: '#00D4A4',
    time: 'Just now',
  },
  {
    id: 3,
    avatar: 'FO',
    avatarColor: '#8B8FFF',
    name: 'Fatima O.',
    action: 'completed a transfer',
    category: 'Transfer',
    amount: '₦8,500',
    amountColor: '#A4A8FF',
    time: 'Just now',
  },
  {
    id: 4,
    avatar: 'AE',
    avatarColor: '#F5A623',
    name: 'Adamu E.',
    action: 'repaid a loan installment',
    category: 'Repayment',
    amount: '₦12,000',
    amountColor: '#F5C842',
    time: 'Just now',
  },
  {
    id: 5,
    avatar: 'NK',
    avatarColor: '#FF6B6B',
    name: 'Ngozi K.',
    action: 'opened a savings account',
    category: 'Savings',
    amount: '₦5,000',
    amountColor: '#FF9999',
    time: 'Just now',
  },
];

const cardStyle = {
  entering: {
    opacity: 0,
    transform: 'translateY(-28px) scale(0.96)',
    transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0px) scale(1)',
    transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
  },
  exiting: {
    opacity: 0,
    transform: 'translateY(-16px) scale(0.97)',
    transition: 'opacity 0.4s ease-in, transform 0.4s ease-in',
  },
};

export default function CommunitySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState('entering'); 
  
  useEffect(() => {
    let timeout;
  
    if (phase === 'entering') {
      timeout = setTimeout(() => setPhase('visible'), 600);
    } else if (phase === 'visible') {
      const hold = 5000 + Math.random() * 3000; // 5000–8000ms
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
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: 'url(/market.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'scroll',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes livePulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 212, 164, 0.5);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(0, 212, 164, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 212, 164, 0);
          }
        }
        @media (max-width: 1024px) {
          .community-grid {
            grid-template-columns: 1fr !important;
            padding: 80px 24px !important;
            gap: 40px !important;
          }
        }
      `}} />

      {/* Overlay Layer 1 — directional gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(5,13,26,0.88) 0%, rgba(5,13,26,0.72) 40%, rgba(5,13,26,0.45) 70%, rgba(5,13,26,0.25) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Overlay Layer 2 — bottom seal */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,13,26,0.2) 0%, transparent 20%, transparent 80%, rgba(5,13,26,0.9) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div
        className="community-grid"
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '120px 60px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* LEFT COLUMN */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#00D4A4',
              boxShadow: '0 0 0 0 rgba(0, 212, 164, 0.4)',
              animation: 'livePulse 2s ease-out infinite',
            }} />
            <span style={{
              fontSize: '11px',
              fontWeight: '600',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              Live transactions
            </span>
          </div>

          <div
            style={{
              ...cardStyle[phase],
              background: 'rgba(10, 22, 40, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(61, 170, 255, 0.2)',
              borderRadius: '20px',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              width: '100%',
              maxWidth: '380px',
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.04) inset',
              willChange: 'transform, opacity',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${transaction.avatarColor}, ${transaction.avatarColor}88)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Space Mono', monospace",
                fontSize: '13px',
                fontWeight: '700',
                color: '#ffffff',
                flexShrink: 0,
              }}
            >
              {transaction.avatar}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '4px',
              }}>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#ffffff',
                  letterSpacing: '-0.01em',
                }}>
                  {transaction.name}
                </span>
                <span style={{
                  fontFamily: "'JetBrains Mono', 'Space Mono', monospace",
                  fontSize: '14px',
                  fontWeight: '700',
                  color: transaction.amountColor,
                  letterSpacing: '-0.01em',
                  flexShrink: 0,
                  marginLeft: '12px',
                }}>
                  {transaction.amount}
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontSize: '13px',
                  color: 'rgba(200, 220, 240, 0.7)',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
                  {transaction.action}
                </span>
                <span style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.35)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  flexShrink: 0,
                  marginLeft: '8px',
                }}>
                  {transaction.time}
                </span>
              </div>
              <div style={{ marginTop: '8px' }}>
                <span style={{
                  display: 'inline-block',
                  fontSize: '10px',
                  fontWeight: '600',
                  color: 'rgba(61, 170, 255, 0.9)',
                  background: 'rgba(0, 133, 255, 0.12)',
                  border: '1px solid rgba(0, 133, 255, 0.2)',
                  borderRadius: '100px',
                  padding: '2px 10px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
                  {transaction.category}
                </span>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '22px',
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}>
              ₦2.4B+
            </span>
            <span style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.4)',
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: '1.4',
              maxWidth: '120px',
            }}>
              processed this month
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#0085FF',
              animation: 'livePulse 2s ease-out infinite',
            }} />
            <span style={{
              fontSize: '11px',
              fontWeight: '600',
              color: 'rgba(61, 170, 255, 0.9)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              Community Impact
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: '800',
            lineHeight: '1.05',
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '24px',
            maxWidth: '580px',
          }}>
            Let's build a future where{' '}
            <span style={{ color: '#0085FF', whiteSpace: 'nowrap' }}>offline communities</span>
            {' '}fit in.
          </h2>

          <p style={{
            fontSize: '17px',
            color: 'rgba(200, 220, 240, 0.72)',
            lineHeight: '1.75',
            maxWidth: '480px',
            marginBottom: '40px',
          }}>
            Grupp is the infrastructure layer that makes it possible — for the market trader in Onitsha, the cooperative in Kano, the POS agent in Ojo. Real financial tools, built for the communities that need them most.
          </p>

          <a
            href="#how"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: '#0085FF',
              color: '#ffffff',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '15px',
              fontWeight: '700',
              padding: '14px 28px',
              borderRadius: '100px',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              boxShadow: '0 8px 32px rgba(0, 133, 255, 0.35)',
              transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#3DAAFF';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 133, 255, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#0085FF';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 133, 255, 0.35)';
              e.currentTarget.style.transform = 'translateY(0px)';
            }}
          >
            See how it works
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
            }}>
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
