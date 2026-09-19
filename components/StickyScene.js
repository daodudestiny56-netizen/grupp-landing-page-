'use client';

import { useCallback, useRef, useSyncExternalStore } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '@/components/motion/Reveal';

/**
 * Media query via useSyncExternalStore rather than useReducedMotion(), because
 * we branch the component TREE here, not just a transition. useReducedMotion
 * returns null during SSR and the real value on the first client render, which
 * is not safe to structure DOM around.
 *
 * Server snapshot is `false`, so SSR always emits the stacked layout — correct
 * with zero JS. Desktop upgrades during hydration, and the section is below the
 * fold so there is no visible swap.
 */
function useMediaQuery(query) {
  const subscribe = useCallback(
    (cb) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', cb);
      return () => mql.removeEventListener('change', cb);
    },
    [query]
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
}

function StepCard({ step, muted = false }) {
  return (
    <div
      className="flex h-full flex-col justify-center rounded-[24px] border border-[var(--line)] bg-white p-8 md:p-12"
      style={{ opacity: muted ? 0.5 : 1 }}
    >
      <span className="font-serif text-[40px] italic leading-none text-[var(--brand)] md:text-[56px]">
        {step.n}
      </span>
      <h3 className="mt-5 text-[clamp(20px,2.4vw,30px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--ink)]">
        {step.title}
      </h3>
      <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.75] text-[var(--body)]">
        {step.body}
      </p>
    </div>
  );
}

/** Mobile + reduced motion: three plain stacked cards. No useScroll mounts. */
function Stacked({ steps }) {
  return (
    <div className="grid gap-5">
      {steps.map((step, i) => (
        <Reveal key={step.n} delay={i * 0.06}>
          <div className="min-h-[260px]">
            <StepCard step={step} />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/**
 * Desktop: a 300svh scroll track with a pinned viewport. The filmstrip holds,
 * moves, holds, moves, holds.
 *
 * Every animated value here obeys the five conditions that keep framer on the
 * native ViewTimeline (off the main thread entirely):
 *   1. offset is exactly ["start start", "end end"]  → the `contain` preset
 *   2. exactly ONE useTransform between progress and each style value
 *   3. array in-range and array out-range, never a function transformer
 *   4. clamp is left at its default
 *   5. bound to `transform` / `opacity` — NOT `y` or `scale`, which take the
 *      JS path and will stutter on a mid-tier Android
 * And never useSpring on a scroll value: it kills acceleration and is lag.
 */
function Scrubbed({ steps }) {
  const sceneRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start start', 'end end'],
  });

  const strip = useTransform(
    scrollYProgress,
    [0, 0.28, 0.39, 0.61, 0.72, 1],
    [
      'translate3d(0,0%,0)',
      'translate3d(0,0%,0)',
      'translate3d(0,-33.3333%,0)',
      'translate3d(0,-33.3333%,0)',
      'translate3d(0,-66.6667%,0)',
      'translate3d(0,-66.6667%,0)',
    ]
  );

  const railFill = useTransform(
    scrollYProgress,
    [0, 1],
    ['scaleY(0)', 'scaleY(1)']
  );

  // Hoisted out of the render loop — hooks must never be called inside .map().
  // One useTransform per style value, as the acceleration rules require.
  const dot0 = useTransform(scrollYProgress, [0, 0.04, 0.28, 0.33], [0, 1, 1, 0]);
  const dot1 = useTransform(scrollYProgress, [0.33, 0.39, 0.61, 0.66], [0, 1, 1, 0]);
  const dot2 = useTransform(scrollYProgress, [0.66, 0.72, 0.96, 1], [0, 1, 1, 1]);

  const lbl0 = useTransform(scrollYProgress, [0, 0.04, 0.28, 0.33], [0.35, 1, 1, 0.35]);
  const lbl1 = useTransform(scrollYProgress, [0.33, 0.39, 0.61, 0.66], [0.35, 1, 1, 0.35]);
  const lbl2 = useTransform(scrollYProgress, [0.66, 0.72, 0.96, 1], [0.35, 1, 1, 1]);

  const dots = [dot0, dot1, dot2];
  const labels = [lbl0, lbl1, lbl2];

  return (
    <div ref={sceneRef} style={{ height: 'calc(100svh * 3)' }}>
      <div className="sticky top-0 flex h-[100svh] items-center">
        <div className="grid w-full gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
          {/* Rail */}
          <div className="relative hidden lg:block">
            <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-[2px] bg-[var(--line)]" />
            <m.div
              aria-hidden
              className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-[2px] origin-top bg-[var(--brand)]"
              style={{ transform: railFill }}
            />
            <ul className="relative grid gap-12">
              {steps.map((step, i) => (
                <li key={step.n} className="flex items-start gap-5">
                  <span className="relative mt-1.5 grid h-4 w-4 shrink-0 place-items-center">
                    <span className="absolute h-4 w-4 rounded-full border-2 border-[var(--line)] bg-[var(--surface)]" />
                    <m.span
                      className="absolute h-4 w-4 rounded-full bg-[var(--brand)]"
                      style={{ opacity: dots[i] }}
                    />
                  </span>
                  <m.span
                    className="text-[15px] font-semibold text-[var(--ink)]"
                    style={{ opacity: labels[i] }}
                  >
                    {step.title}
                  </m.span>
                </li>
              ))}
            </ul>
          </div>

          {/* Filmstrip. overflow:clip, never overflow:hidden — hidden would
              create a scroll container and break the sticky parent. */}
          <div className="h-[420px] overflow-clip rounded-[24px]">
            <m.div className="h-[300%]" style={{ transform: strip }}>
              {steps.map((step) => (
                <div key={step.n} className="h-1/3 pb-0">
                  <StepCard step={step} />
                </div>
              ))}
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StickyScene({ steps }) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Conditional COMPONENT, not a conditional hook — useScroll never mounts
  // on mobile or under reduced motion.
  return isDesktop && !reduced ? <Scrubbed steps={steps} /> : <Stacked steps={steps} />;
}
