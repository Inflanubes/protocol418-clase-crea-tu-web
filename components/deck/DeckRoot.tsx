'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { DeckChrome } from './DeckChrome';
import { DeckNav } from './DeckNav';
import { DeckIndex } from './DeckIndex';
import { LivingBackground } from '@/components/effects/LivingBackground';

export function DeckRoot({ children }: { children: ReactNode }) {
  const [indexOpen, setIndexOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'i' && !indexOpen) {
        const tag = (document.activeElement?.tagName ?? '').toLowerCase();
        if (tag === 'input' || tag === 'textarea') return;
        setIndexOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [indexOpen]);

  return (
    <>
      <LivingBackground />
      <DeckChrome onOpenIndex={() => setIndexOpen(true)} />
      <DeckNav />
      <DeckIndex open={indexOpen} onClose={() => setIndexOpen(false)} />
      {children}
    </>
  );
}
