import type { ReactNode } from 'react';
import { SlideShell } from '@/components/deck/SlideShell';
import { ProsContras } from './ProsContras';
import styles from './FlavorSlide.module.css';

interface Props {
  framing: string;
  title: string;
  identifier: string;
  pros: readonly string[];
  contras: readonly string[];
  mock: ReactNode;
  compact?: boolean;
}

export function FlavorSlide({ framing, title, identifier, pros, contras, mock, compact }: Props) {
  return (
    <SlideShell framing={framing}>
      <div className={compact ? styles.compact : undefined}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.identifier}>{identifier}</p>
        <div className={styles.grid}>
          <div className={styles.mock}>{mock}</div>
          <ProsContras pros={pros} contras={contras} />
        </div>
      </div>
    </SlideShell>
  );
}
