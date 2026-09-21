'use client';

import { useEffect, useRef, useState } from 'react';
import type { StatItem } from '@/lib/markets-data';

function formatValue(value: number, decimals = 0, useGrouping = true) {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping,
  });
}

function useCountUp(target: number, decimals: number, useGrouping: boolean, active: boolean) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }

    const duration = 1200;
    let start: number | null = null;
    let frame: number;

    function tick(timestamp: number) {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - (1 - progress) ** 3;
      setValue(target * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return formatValue(value, decimals, useGrouping);
}

function Stat({ stat, active }: { stat: StatItem; active: boolean }) {
  const display = useCountUp(stat.value, stat.decimals ?? 0, !stat.noGrouping, active);
  return (
    <div className="stat-tile">
      <span className="stat-value">
        {stat.prefix}
        {display}
        {stat.suffix}
      </span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export function StatRow({ stats }: { stats: StatItem[] }) {
  const [active, setActive] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    // Safety net: guarantee the counters run even if the observer never fires.
    const fallback = window.setTimeout(() => {
      setActive(true);
      observer.disconnect();
    }, 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="stat-row" ref={rowRef}>
      {stats.map((stat) => (
        <Stat stat={stat} active={active} key={stat.label} />
      ))}
    </div>
  );
}
