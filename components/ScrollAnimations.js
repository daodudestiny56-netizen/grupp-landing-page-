'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

// ── Shared intersection hook ─────────────────────────────
function useSection(margin = '-15% 0px -15% 0px') {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin, once: false });
  return { ref, isInView };
}

// ── Reduced-motion variant helper ────────────────────────
// When the user prefers reduced motion, all variants collapse
// to an instant opacity change — no translate, scale, or blur.
function makeVariants(full, reducedMotion) {
  if (reducedMotion) {
    return {
      hidden:  { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0 } },
    };
  }
  return full;
}

// ── 1. FADE + SLIDE UP ───────────────────────────────────
export function FadeSlideUp({ children, delay = 0 }) {
  const { ref, isInView } = useSection();
  const reducedMotion = useReducedMotion();

  const variants = makeVariants(
    {
      hidden:  { opacity: 0, y: 32 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
    },
    reducedMotion
  );

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

// ── 2. CLIP REVEAL ───────────────────────────────────────
export function ClipReveal({ children, delay = 0 }) {
  const { ref, isInView } = useSection();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0 }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ x: '-101%' }}
        animate={isInView ? { x: '0%' } : { x: '101%' }}
        transition={{ duration: 0.8, delay, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ── 3. SCALE + BLUR ──────────────────────────────────────
export function ScaleBlur({ children, delay = 0 }) {
  const { ref, isInView } = useSection();
  const reducedMotion = useReducedMotion();

  const variants = makeVariants(
    {
      hidden:  { opacity: 0, scale: 0.90, filter: 'blur(12px)' },
      visible: { opacity: 1, scale: 1,    filter: 'blur(0px)', transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] } },
    },
    reducedMotion
  );

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

// ── 4. STAGGER CHILDREN ──────────────────────────────────
export const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export const itemVariants = {
  hidden:   { opacity: 0, y: 32, scale: 0.96 },
  visible:  { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// ── 5. SLIDE IN RIGHT ────────────────────────────────────
export function SlideInRight({ children, delay = 0 }) {
  const { ref, isInView } = useSection();
  const reducedMotion = useReducedMotion();

  const variants = makeVariants(
    {
      hidden:  { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] } },
    },
    reducedMotion
  );

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

// ── 6. SLIDE IN LEFT ─────────────────────────────────────
export function SlideInLeft({ children, delay = 0 }) {
  const { ref, isInView } = useSection();
  const reducedMotion = useReducedMotion();

  const variants = makeVariants(
    {
      hidden:  { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] } },
    },
    reducedMotion
  );

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

// ── 7. POP IN (scale from 95% + opacity) ─────────────────
export function PopIn({ children, delay = 0 }) {
  const { ref, isInView } = useSection();
  const reducedMotion = useReducedMotion();

  const variants = makeVariants(
    {
      hidden:  { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] } },
    },
    reducedMotion
  );

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}
