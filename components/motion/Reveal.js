'use client';

import { m } from 'framer-motion';
import { dist, dur, ease, stagger, viewport } from '@/lib/motion';

/**
 * The reveal primitives. Nine of twelve sections use `Reveal` and nothing else —
 * that restraint is what separates a designed page from an assorted one.
 *
 * All of these use `whileInView` rather than the `useInView` hook: whileInView
 * drives from framer's InViewFeature without a React re-render per element.
 * Across ~40 revealed elements that is ~40 avoided renders.
 *
 * `data-reveal` lets the <noscript> block in globals.css force everything
 * visible if JS never arrives.
 */

export function Reveal({ children, delay = 0, y = dist.md, className, as = 'div' }) {
  const MotionTag = m[as] || m.div;
  return (
    <MotionTag
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: dur.base, ease: ease.out, delay }}
    >
      {children}
    </MotionTag>
  );
}

const groupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.base,
      delayChildren: stagger.delayChildren,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: dist.md },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.base, ease: ease.out },
  },
};

/**
 * Staggered group. Cap children at 8 — beyond that the last item lands after
 * the user has stopped looking, and total group duration exceeds ~0.9s.
 */
export function RevealGroup({ children, className, as = 'div' }) {
  const MotionTag = m[as] || m.div;
  return (
    <MotionTag
      data-reveal
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({ children, className, as = 'div' }) {
  const MotionTag = m[as] || m.div;
  return (
    <MotionTag data-reveal className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}

/**
 * clipPath wipe. Used instead of the old `overflow:hidden` + translate pattern —
 * fewer nodes, and crucially no `overflow:hidden` ancestors, which are what
 * silently break `position: sticky` further down the page.
 *
 * clipPath is one of framer's four compositor-accelerable style keys.
 */
export function MaskWipe({ children, delay = 0, className, as = 'div' }) {
  const MotionTag = m[as] || m.div;
  return (
    <MotionTag
      data-reveal
      className={className}
      initial={{ clipPath: 'inset(0 0 110% 0)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0 0 -10% 0)', opacity: 1 }}
      viewport={viewport}
      transition={{ duration: dur.slow, ease: ease.out, delay }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Editorial line reveal. Splits by LINE, never by letter — a per-character
 * split costs one motion component and one 3D context per glyph, and reads
 * identically.
 */
export function LineRise({ lines, className, lineClassName, accentIndex }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <m.span
            data-reveal
            className={`block ${lineClassName || ''} ${
              accentIndex === i ? 'text-[var(--brand)]' : ''
            }`}
            initial={{ opacity: 0, y: '0.6em' }}
            whileInView={{ opacity: 1, y: '0em' }}
            viewport={viewport}
            transition={{
              duration: dur.slow,
              ease: ease.out,
              delay: i * stagger.loose,
            }}
          >
            {line}
          </m.span>
        </span>
      ))}
    </span>
  );
}
