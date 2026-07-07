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
        <div className="order-last md:order-first w-full">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#00D4A4]" style={{ animation: 'livePulse 2s ease-out infinite' }} />
            <span className="text-[11px] font-semibold text-white/50 tracking-widest uppercase font-mono">
              Live transactions
            </span>
          </div>

          <div
            className="w-full md:max-w-[380px] flex items-center gap-4 p-4 md:p-5 rounded-2xl border border-sky-400/20 bg-[#0a1628]/85 backdrop-blur-xl shadow-2xl shadow-black/40"
            style={{
              ...cardStyle[phase],
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.04) inset',
              willChange: 'transform, opacity',
            }}
          >
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center font-mono text-[13px] font-bold text-white shrink-0"
              style={{ background: `linear-gradient(135deg, ${transaction.avatarColor}, ${transaction.avatarColor}88)` }}
            >
              {transaction.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm font-bold text-white tracking-tight">
                  {transaction.name}
                </span>
                <span
                  className="font-mono text-sm font-bold tracking-tight shrink-0 ml-3"
                  style={{ color: transaction.amountColor }}
                >
                  {transaction.amount}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-sky-100/70">
                  {transaction.action}
                </span>
                <span className="text-[11px] text-white/35 shrink-0 ml-2">
                  {transaction.time}
                </span>
              </div>
              <div className="mt-2">
                <span className="inline-block text-[10px] font-semibold text-sky-400/90 bg-[#0085FF]/10 border border-[#0085FF]/20 rounded-full px-2.5 py-0.5 tracking-wider uppercase">
                  {transaction.category}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2.5">
            <span className="font-mono text-[clamp(36px,5vw,64px)] font-bold text-white tracking-tight leading-none">
              ₦2.4B+
            </span>
            <span className="text-[13px] text-white/40 leading-[1.4] max-w-[120px]">
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
