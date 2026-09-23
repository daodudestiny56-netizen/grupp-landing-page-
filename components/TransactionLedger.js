'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m, useInView, useReducedMotion } from 'framer-motion';
import { dur, ease } from '@/lib/motion';

const ROWS = 5;

// Hand-rolled so it is byte-identical on server and client. Intl/toLocaleString
// can resolve differently between Node and the browser, which shows up as a
// hydration mismatch.
const naira = (n) => '₦' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const clock = (minutes) => {
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

function Row({ row, fresh }) {
  const credit = row.dir === 'in';
  return (
    <m.li
      layout
      initial={fresh ? { opacity: 0, y: -14 } : false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: dur.fast, ease: ease.out }}
      className="grid grid-cols-[46px_1fr_auto] items-center gap-3 border-b border-white/[0.05] px-4 py-2.5 last:border-b-0"
    >
      <span className="font-mono text-[11.5px] tabular-nums text-white/40">
        {row.time}
      </span>

      <span className="min-w-0">
        <span className="block truncate text-[13.5px] font-medium leading-tight text-white">
          {row.name}
        </span>
        <span className="block truncate text-[11.5px] leading-tight text-white/45">
          {row.kind}
        </span>
      </span>

      <span className="flex items-center gap-2.5">
        <span
          className="font-mono text-[13px] tabular-nums"
          style={{ color: credit ? '#4ADE80' : 'rgba(255,255,255,0.72)' }}
        >
          {credit ? '+' : '−'}
          {naira(row.amount)}
        </span>
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="m3.5 8.4 2.8 2.8 6.2-6.4"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </m.li>
  );
}

export default function TransactionLedger({ terminal, transactions }) {
  // Deterministic opening state, so SSR and the first client render agree.
  const seed = () => {
    let minute = terminal.startMinute;
    const out = [];
    for (let i = 0; i < ROWS; i++) {
      const t = transactions[i % transactions.length];
      minute += t.gap;
      out.push({ ...t, time: clock(minute), id: i });
    }
    return { rows: out.reverse(), minute, cursor: ROWS };
  };

  const [state, setState] = useState(seed);
  const [totals, setTotals] = useState({
    count: terminal.openingCount,
    value: terminal.openingTotal,
  });

  const ref = useRef(null);
  const reduced = useReducedMotion();
  // The one legitimate `once: false` on the page: we want the ticker to stop
  // when the section leaves the viewport, not to replay a reveal.
  const inView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!inView || reduced) return;

    let timer;
    const next = () => {
      const t = transactions[state.cursor % transactions.length];
      timer = setTimeout(() => {
        setState((s) => {
          const minute = s.minute + t.gap;
          const row = { ...t, time: clock(minute), id: s.cursor };
          return {
            rows: [row, ...s.rows.slice(0, ROWS - 1)],
            minute,
            cursor: s.cursor + 1,
          };
        });
        setTotals((v) => ({ count: v.count + 1, value: v.value + t.amount }));
      }, t.hold);
    };

    const onVisibility = () => {
      if (document.hidden) clearTimeout(timer);
      else next();
    };

    next();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [state, inView, reduced, transactions]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-xl border border-white/[0.09] bg-[#071B33] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
    >
      {/* Identity — whose terminal this is, and where. */}
      <div className="flex items-start justify-between gap-4 border-b border-white/[0.07] px-4 py-3.5">
        <div className="min-w-0">
          <p className="truncate text-[13.5px] font-semibold leading-tight text-white">
            {terminal.agent}
            <span className="text-white/45"> &middot; {terminal.ref}</span>
          </p>
          <p className="mt-0.5 truncate text-[11.5px] leading-tight text-white/45">
            {terminal.location}
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 pt-0.5">
          <span className="relative grid h-1.5 w-1.5 place-items-center">
            <span className="pulse-ring absolute h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50">
            Live
          </span>
        </span>
      </div>

      {/* Column headers — real tables have them. */}
      <div className="grid grid-cols-[46px_1fr_auto] gap-3 border-b border-white/[0.07] bg-white/[0.02] px-4 py-2">
        {['Time', 'Customer', 'Amount'].map((h) => (
          <span
            key={h}
            className={`text-[9.5px] font-semibold uppercase tracking-[0.14em] text-white/35 ${
              h === 'Amount' ? 'text-right' : ''
            }`}
          >
            {h}
          </span>
        ))}
      </div>

      <ul className="min-h-[268px]">
        <AnimatePresence initial={false}>
          {state.rows.map((row, i) => (
            <Row key={row.id} row={row} fresh={i === 0 && row.id >= ROWS} />
          ))}
        </AnimatePresence>
      </ul>

      {/* Running totals. */}
      <div className="flex items-baseline justify-between border-t border-white/[0.07] bg-white/[0.03] px-4 py-3">
        <span className="text-[11.5px] text-white/50">
          Today
          <span className="ml-2 font-mono tabular-nums text-white/70">
            {totals.count}
          </span>
          <span className="ml-1.5">transactions</span>
        </span>
        <span className="font-mono text-[14px] font-medium tabular-nums text-white">
          {naira(totals.value)}
        </span>
      </div>
    </div>
  );
}
