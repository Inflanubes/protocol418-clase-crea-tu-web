'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SLIDES } from '@/lib/slides';
import styles from './DeckIndex.module.css';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function DeckIndex({ open, onClose }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-label="Índice de slides"
    >
      <button className={styles.close} onClick={onClose} aria-label="Cerrar índice">
        Esc · cerrar
      </button>
      <div className={styles.grid} onClick={(e) => e.stopPropagation()}>
        {SLIDES.map((slide) => (
          <button
            key={slide.id}
            className={styles.card}
            onClick={() => {
              router.push(slide.url);
              onClose();
            }}
          >
            <span className={styles.position}>
              {String(slide.position).padStart(2, '0')} / 07
            </span>
            <span className={styles.title}>{slide.title}</span>
            {slide.framing ? <span className={styles.framing}>{slide.framing}</span> : null}
          </button>
        ))}
      </div>
    </div>
  );
}
