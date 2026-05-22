'use client';

import { useState } from 'react';
import { Typewriter } from '@/components/effects/Typewriter';
import styles from './WebMock.module.css';

const PROMPT = 'Explícame qué es Protocol 418';
const RESPONSE = 'Protocol 418 es un protocolo que arranca con una metáfora: cuando le pides a la herramienta equivocada lo que no puede hacerte...';

export function WebMock() {
  const [phase, setPhase] = useState<'prompt' | 'response' | 'done'>('prompt');
  const [cycle, setCycle] = useState(0);

  return (
    <div className={styles.frame} aria-label="Mock de claude.ai/code">
      <div className={styles.chrome}>
        <div className={styles.dots}>
          <span className={styles.dot} /><span className={styles.dot} /><span className={styles.dot} />
        </div>
        <div className={styles.url}>claude.ai/code</div>
      </div>
      <div className={styles.body}>
        <div className={`${styles.message} ${styles.user}`}>
          <span className={styles.role}>tú</span>
          <span className={styles.text}>
            <Typewriter
              key={`prompt-${cycle}`}
              text={PROMPT}
              speedMs={45}
              onComplete={() => setPhase('response')}
            />
          </span>
        </div>
        {phase !== 'prompt' && (
          <div className={`${styles.message} ${styles.assistant}`}>
            <span className={styles.role}>claude</span>
            <span className={styles.text}>
              <Typewriter
                key={`response-${cycle}`}
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
        <div className={styles.input}>
          Pregunta a Claude…<span className={styles.cursor} />
        </div>
      </div>
    </div>
  );
}
