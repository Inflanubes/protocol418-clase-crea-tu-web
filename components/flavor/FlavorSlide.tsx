'use client';

import { useState, type ReactNode } from 'react';
import { SlideShell } from '@/components/deck/SlideShell';
import { ProsContras } from './ProsContras';
import { DetailPanel } from './DetailPanel';
import { DetailTrigger } from './DetailTrigger';
import type { FlavorDetail } from '@/lib/content/types';
import styles from './FlavorSlide.module.css';

interface Props {
  framing: string;
  title: string;
  identifier: string;
  pros: readonly string[];
  contras: readonly string[];
  mock: ReactNode;
  detail: FlavorDetail;
  compact?: boolean;
}

export function FlavorSlide({ framing, title, identifier, pros, contras, mock, detail, compact }: Props) {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <SlideShell framing={framing}>
      <div className={compact ? styles.compact : undefined}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.identifier}>{identifier}</p>
        <div className={styles.grid} data-panel-open={panelOpen}>
          <div className={styles.mock}>{mock}</div>
          <ProsContras pros={pros} contras={contras} />
        </div>
        <div className={styles.triggerWrap}>
          <DetailTrigger onClick={() => setPanelOpen(true)} />
        </div>
      </div>
      <DetailPanel detail={detail} open={panelOpen} onClose={() => setPanelOpen(false)} />
    </SlideShell>
  );
}
