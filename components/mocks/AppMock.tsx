'use client';

import { useState } from 'react';
import { Typewriter } from '@/components/effects/Typewriter';
import styles from './AppMock.module.css';

const CONVOS = ['Ideas para la clase', 'Revisión del blog', 'Hoy'];
const NEW_PROMPT = 'Sigue donde lo dejamos ayer';
const RESPONSE = 'Claro. Ayer terminamos esbozando la sección de "para esto nace". ¿Quieres que la pulamos o pasamos a la siguiente?';

export function AppMock() {
  const [phase, setPhase] = useState<'prompt' | 'response' | 'done'>('prompt');
  const [cycle, setCycle] = useState(0);

  return (
    <div className={styles.frame} aria-label="Mock de Claude Desktop">
      <aside className={styles.sidebar}>
        <span className={styles.sidebarHeading}>conversaciones</span>
        {CONVOS.map((c, i) => (
          <span
            key={c}
            className={`${styles.convo} ${i === 2 ? styles.convoActive : ''}`}
          >
            {c}
          </span>
        ))}
      </aside>
      <div className={styles.main}>
        <div className={styles.message}>
          <span className={styles.role}>tú · ayer</span>
          <span className={`${styles.text} ${styles.muted}`}>
            Para esto nace 418, una comunidad para los que…
          </span>
        </div>
        <div className={styles.message}>
          <span className={styles.role}>tú</span>
          <span className={styles.text}>
            <Typewriter
              key={`p-${cycle}`}
              text={NEW_PROMPT}
              speedMs={45}
              onComplete={() => setPhase('response')}
            />
          </span>
        </div>
        {phase !== 'prompt' && (
          <div className={styles.message}>
            <span className={`${styles.role} ${styles.assistantRole}`}>claude</span>
            <span className={styles.text}>
              <Typewriter
                key={`r-${cycle}`}
                text={RESPONSE}
                speedMs={20}
                startDelayMs={400}
                onComplete={() => {
                  setPhase('done');
                  setTimeout(() => { setPhase('prompt'); setCycle((c) => c + 1); }, 2500);
                }}
              />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
