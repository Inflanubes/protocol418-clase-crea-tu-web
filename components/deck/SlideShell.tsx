import type { ReactNode } from 'react';
import styles from './SlideShell.module.css';

interface Props {
  framing?: string;
  children: ReactNode;
}

export function SlideShell({ framing, children }: Props) {
  return (
    <main className={styles.shell}>
      {framing ? <p className={styles.framing}>{framing}</p> : null}
      <div className={styles.body}>{children}</div>
    </main>
  );
}
