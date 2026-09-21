'use client';

import { useEffect, useRef, useState } from 'react';

export type SectionNavItem = {
  id: string;
  label: string;
};

export function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-140px 0px -65% 0px', threshold: 0 },
    );

    for (const el of targets) observer.observe(el);
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const activeLink = listRef.current?.querySelector<HTMLAnchorElement>(
      `a[data-id="${active}"]`,
    );
    activeLink?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [active]);

  if (items.length < 2) return null;

  return (
    <nav className="section-nav" aria-label="Page sections">
      <div className="section-nav-inner" ref={listRef}>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-id={item.id}
            className={item.id === active ? 'section-nav-link is-active' : 'section-nav-link'}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
