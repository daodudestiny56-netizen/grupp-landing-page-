'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Shared Intersection Observer hook/utility helper
function useSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-20% 0px -20% 0px', once: false });
  return { ref, isInView };
}

// 1. FADE + SLIDE UP (enter: slides up & fades in | leave: fades out)
export function FadeSlideUp({ children, delay = 0 }) {
  const { ref, isInView } = useSection();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// 2. CLIP REVEAL (enter: text wipes in from left | leave: wipes out right)
export function ClipReveal({ children, delay = 0 }) {
  const { ref, isInView } = useSection();

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

// 3. SCALE + BLUR (enter: scales up from 90%, blurred | leave: shrinks & blurs)
export function ScaleBlur({ children, delay = 0 }) {
  const { ref, isInView } = useSection();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
          : { opacity: 0, scale: 0.88, filter: 'blur(12px)' }
      }
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// 4. STAGGER CHILDREN (staggered lists/grids)
export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  exit:   { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

export const itemVariants = {
  hidden:  { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// 5. LETTER SPLIT
function Letter({ char, delay, isInView }) {
  return (
    <motion.span
      style={{ display: 'inline-block', className: 'will-change-transform' }}
      initial={{ opacity: 0, y: 50, rotateX: -90 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateX: 0 }
          : { opacity: 0, y: 50, rotateX: -90 }
      }
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
}

export function LetterSplit({ text, delayOffset = 0 }) {
  const { ref, isInView } = useSection();

  return (
    <span ref={ref} style={{ perspective: '800px', display: 'inline-block' }}>
      {text.split('').map((char, i) => (
        <Letter key={i} char={char} delay={delayOffset + i * 0.04} isInView={isInView} />
      ))}
    </span>
  );
}
