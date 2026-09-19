'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m, useInView, useReducedMotion } from 'framer-motion';
import { dur, ease } from '@/lib/motion';

/**
 * The cycling transaction cards.
 *
 * Hold durations come from the data, not Math.random(): every demo run is
 * reproducible, and random values are a build error in a Server Component
 * under cacheComponents if this logic ever drifts server-side.
 */
export default function DeviceCycler({ transactions }) {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const reduced = useReducedMotion();

  // The one legitimate `once: false` on the page — we want the timer to stop
  // when the section leaves the viewport, not to replay a reveal.
  const inView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!inView || reduced) return;

    let timer;
    const tick = () => {
      timer = setTimeout(() => {
        setIndex((i) => (i + 1) % transactions.length);
      }, transactions[index].hold);
    };

    // Don't burn cycles animating cards in a background tab.
    const onVisibility = () => {
      if (document.hidden) clearTimeout(timer);
      else tick();
    };

    tick();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [index, inView, reduced, transactions]);

  const tx = transactions[index];

  return (
    <div ref={ref}>
      {/* Fixed height so the swap never reflows the band. */}
      <div className="relative h-[108px]">
        <AnimatePresence mode="sync" initial={false}>
          <m.div
            key={tx.name}
            className="absolute inset-0 rounded-2xl border border-white/15 bg-white/[0.06] p-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, scale: 0.985 }}
            transition={{ duration: dur.fast, ease: ease.out }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--brand)]/25 text-[13px] font-bold text-white">
                {tx.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px] font-semibold text-white">{tx.name}</p>
                <p className="truncate text-[12.5px] text-white/55">{tx.action}</p>
              </div>
              <span className="shrink-0 font-serif text-[17px] italic text-white">
                {tx.amount}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5">
              <span className="text-[11px] font-medium text-white/50">{tx.category}</span>
              <span className="text-[11px] text-white/35">Just now</span>
            </div>
          </m.div>
        </AnimatePresence>
      </div>

      {/* Progress dots double as manual controls under reduced motion. */}
      <div className="mt-5 flex justify-center gap-2">
        {transactions.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show transaction ${i + 1}: ${t.name}`}
            aria-current={i === index}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === index ? 22 : 6,
              background: i === index ? 'var(--brand)' : 'rgba(255,255,255,0.25)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
