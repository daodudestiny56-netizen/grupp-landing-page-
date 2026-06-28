'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Shield, CheckCircle2, Cpu } from 'lucide-react';

const transactions = [
  { id: 'TXN-8821', node: 'Kano South', amount: '₦48,500', status: 'SETTLED', latency: '3ms', statusClass: 'text-emerald-500 bg-emerald-500/10' },
  { id: 'TXN-8822', node: 'Lagos Island', amount: '₦12,200', status: 'ROUTED', latency: '1ms', statusClass: 'text-blue-400 bg-blue-500/10' },
  { id: 'TXN-8823', node: 'Abuja FCT', amount: '₦93,750', status: 'SETTLED', latency: '2ms', statusClass: 'text-emerald-500 bg-emerald-500/10' },
  { id: 'TXN-8824', node: 'Port Harcourt', amount: '₦5,400', status: 'PENDING', latency: '7ms', statusClass: 'text-amber-400 bg-amber-500/10' },
  { id: 'TXN-8825', node: 'Kaduna North', amount: '₦28,900', status: 'SETTLED', latency: '2ms', statusClass: 'text-emerald-500 bg-emerald-500/10' },
];

function LedgerTerminal({ darkMode }) {
  const [activeRow, setActiveRow] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveRow((r) => (r + 1) % transactions.length);
      setTick((t) => t + 1);
    }, 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`w-full max-w-4xl rounded-2xl overflow-hidden border shadow-2xl transition-all duration-300 ${
        darkMode
          ? 'bg-zinc-950 border-zinc-800/60 shadow-black/70'
          : 'bg-white border-zinc-200 shadow-zinc-300/40'
      }`}
    >
      {/* Window chrome */}
      <div
        className={`flex items-center justify-between px-5 py-3.5 border-b ${
          darkMode ? 'bg-zinc-900/60 border-zinc-800/60' : 'bg-zinc-50 border-zinc-100'
        }`}
      >
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className={`text-xs font-mono tracking-tight ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
          agent-ledger-core-v2.sh
        </span>
        <span className="w-14" />
      </div>

      {/* Body */}
      <div className="p-6 md:p-8">
        {/* Sub-header */}
        <div className="flex items-start justify-between mb-6 pb-5 border-b border-dashed border-zinc-100 dark:border-zinc-800/60">
          <div>
            <p className={`text-sm font-semibold tracking-tight ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
              Agent Ledger Terminal
            </p>
            <p className={`text-xs mt-0.5 ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Real-time transaction routing across agent nodes
            </p>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-500 text-[11px] font-mono font-bold px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>LIVE</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs font-mono text-left">
            <thead>
              <tr className={darkMode ? 'text-zinc-600' : 'text-zinc-400'}>
                {['TRANSACTION', 'AGENT NODE', 'AMOUNT', 'STATUS', 'LATENCY'].map((h) => (
                  <th key={h} className="pb-3 font-semibold tracking-wide pr-6 last:pr-0 last:text-right">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr
                  key={tx.id}
                  className={`border-b last:border-0 transition-all duration-300 ${
                    darkMode ? 'border-zinc-800/50' : 'border-zinc-50'
                  } ${
                    i === activeRow
                      ? darkMode
                        ? 'bg-emerald-500/[0.04]'
                        : 'bg-emerald-50/60'
                      : ''
                  }`}
                >
                  <td className="py-3 pr-6 text-emerald-500 font-semibold">{tx.id}</td>
                  <td className={`py-3 pr-6 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>{tx.node}</td>
                  <td className={`py-3 pr-6 font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{tx.amount}</td>
                  <td className="py-3 pr-6">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide ${tx.statusClass}`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className={`py-3 text-right ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>{tx.latency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer metrics */}
        <div
          className={`mt-6 pt-4 border-t flex flex-wrap gap-4 justify-between text-[11px] font-mono ${
            darkMode ? 'border-zinc-800/50 text-zinc-600' : 'border-zinc-100 text-zinc-400'
          }`}
        >
          <span>
            THROUGHPUT:{' '}
            <span className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>4,219 txn/sec</span>
          </span>
          <span>
            UPTIME: <span className="text-emerald-500 font-bold">99.98%</span>
          </span>
          <span>
            FAILED SETTLEMENTS: <span className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>0</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ darkMode }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid mesh */}
        <div
          className={`absolute inset-0 ${darkMode ? 'opacity-[0.03]' : 'opacity-[0.04]'}`}
          style={{
            backgroundImage: `linear-gradient(${darkMode ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? '#fff' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Orbs */}
        <div
          className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] rounded-full blur-3xl ${
            darkMode ? 'bg-emerald-500/8' : 'bg-emerald-400/12'
          }`}
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <div
          className={`absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full blur-3xl ${
            darkMode ? 'bg-teal-500/5' : 'bg-teal-300/15'
          }`}
          style={{ animation: 'float 12s ease-in-out infinite reverse' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border mb-8 ${
            darkMode
              ? 'bg-zinc-900/60 border-zinc-800 text-emerald-400'
              : 'bg-emerald-50 border-emerald-100 text-emerald-700'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Community Banking as a Service
        </div>

        {/* Headline */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.07] mb-6 ${
            darkMode ? 'text-white' : 'text-zinc-950'
          }`}
        >
          Banking infrastructure
          <br />
          <span
            className="font-serif italic font-normal bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            for financial freedom
          </span>
        </h1>

        {/* Sub */}
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed mb-10 ${
            darkMode ? 'text-zinc-400' : 'text-zinc-500'
          }`}
        >
          Grupp powers community banks, SACCOs, and microfinance institutions with enterprise-grade
          digital ledgers, instant settlement rails, and automated agent management tools.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:-translate-y-px hover:shadow-emerald-400/40">
            Start Building Free
            <ArrowRight size={15} />
          </button>
          <button
            className={`flex items-center justify-center px-7 py-3.5 font-semibold text-sm rounded-xl border transition-all duration-200 ${
              darkMode
                ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-700'
                : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300'
            }`}
          >
            View Documentation
          </button>
        </div>

        {/* Trust badges */}
        <div
          className={`flex flex-wrap justify-center gap-6 text-xs font-medium pb-14 border-b w-full max-w-xl ${
            darkMode ? 'border-zinc-800 text-zinc-500' : 'border-zinc-100 text-zinc-400'
          }`}
        >
          {[
            { icon: <Shield size={13} />, label: 'CBN Compliant' },
            { icon: <CheckCircle2 size={13} />, label: 'ISO 27001' },
            { icon: <CheckCircle2 size={13} />, label: 'PCI DSS Level 1' },
            { icon: <Cpu size={13} />, label: 'SOC 2 Type II' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <span className="text-emerald-500">{icon}</span>
              {label}
            </div>
          ))}
        </div>

        {/* Terminal */}
        <div className="pt-14 w-full flex justify-center">
          <LedgerTerminal darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
}
