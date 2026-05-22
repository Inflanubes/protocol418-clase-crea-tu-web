'use client';

import { useState } from 'react';
import { Typewriter } from '@/components/effects/Typewriter';
import styles from './VSCodeMock.module.css';

const FILES = ['README.md', 'package.json', 'src/', 'index.tsx'];
const PROMPT = 'añade una sección de instalación al README';
const BASE_LINES = ['# Mi proyecto', '', 'Una web hecha en clase.'];
const NEW_LINES = ['', '## Instalación', '', '```bash', 'npm install', 'npm run dev', '```'];

export function VSCodeMock() {
  const [showAdded, setShowAdded] = useState(false);
  const [cycle, setCycle] = useState(0);

  return (
    <div className={styles.frame} aria-label="Mock de VS Code con Claude">
      <aside className={styles.tree}>
        <div className={styles.treeHeading}>proyecto</div>
        {FILES.map((f) => (
          <div key={f} className={`${styles.treeFile} ${f === 'README.md' ? styles.treeFileActive : ''}`}>
            {f}
          </div>
        ))}
      </aside>
      <div className={styles.editor}>
        {BASE_LINES.map((l, i) => <div key={i} className={styles.line}>{l || ' '}</div>)}
        {showAdded && NEW_LINES.map((l, i) => (
          <div key={i} className={`${styles.line} ${styles.added}`}>{l || ' '}</div>
        ))}
      </div>
      <aside className={styles.chat}>
        <div className={styles.chatHeading}>claude</div>
        <div className={styles.chatMessage}>
          <span className={styles.chatRole}>tú</span>
          <span className={styles.chatText}>
            <Typewriter
              key={`p-${cycle}`}
              text={PROMPT}
              speedMs={45}
              onComplete={() => {
                setTimeout(() => {
                  setShowAdded(true);
                  setTimeout(() => {
                    setShowAdded(false);
                    setCycle((c) => c + 1);
                  }, 3500);
                }, 800);
              }}
            />
          </span>
        </div>
        {showAdded && (
          <div className={styles.chatMessage}>
            <span className={styles.chatRole} style={{ color: 'var(--color-accent)' }}>claude</span>
            <span className={styles.chatText}>Listo. Sección añadida al README.</span>
          </div>
        )}
      </aside>
    </div>
  );
}
