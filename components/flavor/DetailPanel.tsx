'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { FlavorDetail } from '@/lib/content/types';
import styles from './DetailPanel.module.css';

interface Props {
  detail: FlavorDetail;
  open: boolean;
  onClose: () => void;
}

export function DetailPanel({ detail, open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <>
      <div className={styles.backdrop} data-open={open} onClick={onClose} aria-hidden="true" />
      <aside
        className={styles.panel}
        data-open={open}
        aria-hidden={!open}
        data-scrollable="true"
      >
        <button className={styles.close} aria-label="Cerrar panel" onClick={onClose}>
          <X size={14} strokeWidth={1.75} />
        </button>
        <h2 className={styles.title}>{detail.title}</h2>
        {detail.sections.map((s) => (
          <div key={s.heading} className={styles.section}>
            <h3 className={styles.heading}>{s.heading}</h3>
            <ul className={styles.list}>
              {s.items.map((it, i) => (
                <li key={i} className={styles.item}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
        <a className={styles.cta} href={detail.cta.href} target="_blank" rel="noreferrer">
          {detail.cta.label}
        </a>
      </aside>
    </>
  );
}
