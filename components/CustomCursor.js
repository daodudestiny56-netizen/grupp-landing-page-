'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef    = useRef(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Hide native cursor
    document.documentElement.classList.add('cursor-none-global');
    setVisible(true);

    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    // Lerp animation loop
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      posRef.current.x = lerp(posRef.current.x, targetRef.current.x, 0.12);
      posRef.current.y = lerp(posRef.current.y, targetRef.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    // Expand on interactive elements
    const expand = () => setExpanded(true);
    const collapse = () => setExpanded(false);

    const interactives = document.querySelectorAll('a, button');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', expand);
      el.addEventListener('mouseleave', collapse);
    });

    // Use MutationObserver to pick up dynamically added elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a:not([data-cursor]), button:not([data-cursor])').forEach(el => {
        el.setAttribute('data-cursor', '1');
        el.addEventListener('mouseenter', expand);
        el.addEventListener('mouseleave', collapse);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMove);

    return () => {
      document.documentElement.classList.remove('cursor-none-global');
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: expanded ? '40px' : '8px',
        height: expanded ? '40px' : '8px',
        borderRadius: '50%',
        background: '#0085FF',
        opacity: expanded ? 0.2 : 0.6,
        pointerEvents: 'none',
        zIndex: 9999,
        marginLeft: expanded ? '-20px' : '-4px',
        marginTop: expanded ? '-20px' : '-4px',
        transition: 'width 200ms ease, height 200ms ease, opacity 200ms ease, margin 200ms ease',
        willChange: 'transform',
      }}
    />
  );
}
