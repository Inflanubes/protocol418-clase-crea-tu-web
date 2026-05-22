'use client';

import { useEffect, useState, useMemo } from 'react';

interface Props {
  text: string;
  durationMs?: number;
  className?: string;
}

export function AssembleText({ text, durationMs = 1400, className }: Props) {
  const chars = useMemo(() => text.split(''), [text]);

  const reveals = useMemo(() => {
    const order = chars.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j]!, order[i]!];
    }
    const times = new Array<number>(chars.length);
    order.forEach((origIndex, slot) => {
      times[origIndex] = (slot / chars.length) * durationMs;
    });
    return times;
  }, [chars, durationMs]);

  const [visible, setVisible] = useState<boolean[]>(() => chars.map(() => false));
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduced) {
      setVisible(chars.map(() => true));
      return;
    }
    const timers = reveals.map((delay, i) =>
      setTimeout(() => {
        setVisible((v) => {
          const next = [...v];
          next[i] = true;
          return next;
        });
      }, delay),
    );
    return () => timers.forEach((t) => clearTimeout(t));
  }, [chars, reveals, reduced]);

  return (
    <span className={className} aria-label={text}>
      {chars.map((c, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            opacity: visible[i] ? 1 : 0,
            transition: 'opacity 200ms ease-out',
            display: c === ' ' ? 'inline-block' : 'inline',
            minWidth: c === ' ' ? '0.3em' : undefined,
          }}
        >
          {c}
        </span>
      ))}
    </span>
  );
}
