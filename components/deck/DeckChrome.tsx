'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { TOTAL_SLIDES, nextSlide, prevSlide, slideByUrl } from '@/lib/slides';
import styles from './DeckChrome.module.css';

interface Props {
  onOpenIndex: () => void;
}

export function DeckChrome({ onOpenIndex }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const current = slideByUrl(pathname);
  const next = nextSlide(pathname);
  const prev = prevSlide(pathname);

  if (!current) return null;

  const positionStr = String(current.position).padStart(2, '0');
  const totalStr = String(TOTAL_SLIDES).padStart(2, '0');

  return (
    <div className={styles.chrome}>
      <span className={styles.indicator}>{positionStr} / {totalStr}</span>
      <div className={styles.controls}>
        <button
          className={styles.btn}
          aria-label="Índice (tecla i)"
          onClick={onOpenIndex}
        >
          <Menu size={16} strokeWidth={1.75} />
        </button>
        <button
          className={styles.btn}
          aria-label="Slide anterior"
          disabled={!prev}
          onClick={() => prev && router.push(prev.url)}
        >
          <ChevronLeft size={16} strokeWidth={1.75} />
        </button>
        <button
          className={styles.btn}
          aria-label="Slide siguiente"
          disabled={!next}
          onClick={() => next && router.push(next.url)}
        >
          <ChevronRight size={16} strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
