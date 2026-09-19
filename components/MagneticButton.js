'use client';

import { useRef } from 'react';
import { m, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { spring } from '@/lib/motion';

const MAX = 14; // clamp, px
const PULL = 0.28;

/**
 * The closing CTA. Pointer-driven, so the JS path is the correct path here —
 * unlike a scroll-linked value, which must stay on the compositor.
 *
 * The inner label travels at 0.45x the shell. That parallax is what makes it
 * read as *magnetic* rather than "the button moved".
 */
export default function MagneticButton({ href, children }) {
  const ref = useRef(null);
  const rect = useRef(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, spring.magnetic);
  const sy = useSpring(y, spring.magnetic);

  // Label parallax — one transform per value.
  const lx = useTransform(sx, (v) => v * 0.45);
  const ly = useTransform(sy, (v) => v * 0.45);

  const enabled =
    !reduced &&
    typeof window !== 'undefined' &&
    window.matchMedia?.('(hover: hover) and (pointer: fine)').matches;

  // Measured on enter and cached — never inside pointermove, which would force
  // a layout on every frame.
  const onEnter = () => {
    if (!enabled) return;
    rect.current = ref.current?.getBoundingClientRect() ?? null;
  };

  const onMove = (e) => {
    if (!enabled || !rect.current) return;
    const r = rect.current;
    const dx = (e.clientX - (r.left + r.width / 2)) * PULL;
    const dy = (e.clientY - (r.top + r.height / 2)) * PULL;
    x.set(Math.max(-MAX, Math.min(MAX, dx)));
    y.set(Math.max(-MAX, Math.min(MAX, dy)));
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // The focus ring lives on this static wrapper so it never drifts with the magnet.
    <span className="inline-block rounded-full">
      <m.a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onPointerEnter={onEnter}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ x: sx, y: sy }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.1 }}
        className="inline-flex h-[56px] items-center gap-2.5 rounded-full bg-white px-8 text-[15px] font-bold text-[var(--navy)] shadow-[0_10px_34px_rgba(0,0,0,0.22)]"
      >
        <m.span style={{ x: lx, y: ly }} className="inline-flex items-center gap-2.5">
          {children}
          <svg width="15" height="15" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path
              d="M2 6h8m0 0L6.5 2.5M10 6 6.5 9.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </m.span>
      </m.a>
    </span>
  );
}
