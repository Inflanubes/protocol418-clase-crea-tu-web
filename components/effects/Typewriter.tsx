'use client';

import { useEffect, useState } from 'react';

interface Props {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
  loop?: boolean;
  loopPauseMs?: number;
  className?: string;
  onComplete?: () => void;
}

export function Typewriter({
  text,
  speedMs = 40,
  startDelayMs = 0,
  loop = false,
  loopPauseMs = 2000,
  className,
  onComplete,
}: Props) {
  const [shown, setShown] = useState('');
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduced) {
      setShown(text);
      onComplete?.();
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const run = (delay: number) => {
      let i = 0;
      setShown('');

      const tick = () => {
        if (cancelled) return;
        i += 1;
        setShown(text.slice(0, i));
        if (i < text.length) {
          timeoutId = setTimeout(tick, speedMs);
        } else {
          onComplete?.();
          if (loop) timeoutId = setTimeout(() => run(0), loopPauseMs);
        }
      };

      timeoutId = setTimeout(tick, delay);
    };

    run(startDelayMs);

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, speedMs, startDelayMs, loop, loopPauseMs, reduced, onComplete]);

  return <span className={className}>{shown}</span>;
}
