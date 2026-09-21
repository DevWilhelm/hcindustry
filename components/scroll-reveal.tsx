'use client';

import { useEffect } from 'react';

const REVEAL_SELECTOR = [
  '.info-card',
  '.insight-card',
  '.signal-grid article',
  '.segment-grid article',
  '.outlook-grid article',
  '.question-grid article',
  '.spectrum-tile',
  '.chain-step',
  '.metric-stack article',
  '.image-panel',
  '.section-heading',
].join(', ');

export function ScrollReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    if (!targets.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      for (const el of targets) el.classList.add('in-view');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    targets.forEach((el, index) => {
      el.style.setProperty('--reveal-delay', `${(index % 6) * 70}ms`);
      observer.observe(el);
    });

    // Safety net: never leave content permanently invisible if the
    // observer fails to fire for a given element (e.g. unusual layouts).
    const fallback = window.setTimeout(() => {
      for (const el of targets) el.classList.add('in-view');
      observer.disconnect();
    }, 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
