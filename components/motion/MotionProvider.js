'use client';

import { LazyMotion, MotionConfig, domMax } from 'framer-motion';
import { dur, ease } from '@/lib/motion';

/**
 * Client boundary for framer-motion.
 *
 * This wraps {children} as a *prop*, not a function, so everything below it
 * crosses the boundary as an already-rendered RSC payload. That keeps every
 * page section a Server Component while still sitting inside this context.
 *
 * `strict` throws on `motion.*` usage, forcing `m.*` everywhere — without it a
 * single stray `import { motion }` silently pulls in the full bundle and
 * undoes LazyMotion.
 *
 * `domMax` (not `domAnimation`) because `layoutId` needs the layout feature,
 * which powers the nav pill and the product tab pill. LazyMotion still loads
 * it lazily, off the critical path.
 *
 * `reducedMotion="user"` makes every transform animation below respect the OS
 * setting; the CSS-only animations are handled separately in globals.css.
 */
export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: dur.base, ease: ease.out }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
