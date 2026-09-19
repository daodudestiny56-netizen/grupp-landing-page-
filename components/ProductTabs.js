'use client';

import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { dur, ease, spring } from '@/lib/motion';

/**
 * Tab interaction only. The panel content arrives as an array of
 * already-rendered Server Components via the `panels` prop, so none of that
 * markup enters the client bundle.
 */
export default function ProductTabs({ tabs, panels }) {
  // Direction lives in state alongside the index so the panel can animate the
  // correct way without reading a ref during render.
  const [{ index, direction }, setTab] = useState({ index: 0, direction: 1 });

  const select = (next) =>
    setTab((prev) => ({ index: next, direction: next >= prev.index ? 1 : -1 }));

  const onKeyDown = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next =
      e.key === 'ArrowRight'
        ? (index + 1) % tabs.length
        : (index - 1 + tabs.length) % tabs.length;
    select(next);
    document.getElementById(`tab-${tabs[next].id}`)?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Grupp products"
        onKeyDown={onKeyDown}
        className="no-scrollbar -mx-[var(--page-px)] flex gap-1.5 overflow-x-auto px-[var(--page-px)] pb-1 md:mx-0 md:justify-center md:px-0"
      >
        {tabs.map((tab, i) => {
          const selected = i === index;
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              className="relative shrink-0 rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors duration-150"
              style={{ color: selected ? '#fff' : 'var(--body)' }}
            >
              {selected && (
                <m.span
                  layoutId="tab-pill"
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-[var(--brand)]"
                  transition={spring.snappy}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Fixed min-height: without it, AnimatePresence mode="wait" collapses
          the container to zero mid-swap and the whole page jumps on every
          tab click. */}
      <div className="relative mt-10 min-h-[420px] md:min-h-[360px]">
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={tabs[index].id}
            id={`panel-${tabs[index].id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tabs[index].id}`}
            initial={{ opacity: 0, x: 12 * direction }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 * direction }}
            transition={{ duration: dur.fast, ease: ease.out }}
          >
            {panels[index]}
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
