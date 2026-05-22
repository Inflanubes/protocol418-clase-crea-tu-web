'use client';

import { useState } from 'react';
import { Typewriter } from '@/components/effects/Typewriter';
import styles from './TerminalMock.module.css';

const COMMAND = 'claude "lee este repo y dime qué hace"';
const RESPONSE_LINES = [
  'Leyendo 14 archivos…',
  '',
  'Este repo es una web-presentación construida con Next.js 15.',
  'Sirve para la clase del 22 de mayo sobre Claude Code.',
];

export function TerminalMock() {
  const [phase, setPhase] = useState<'cmd' | 'response' | 'done'>('cmd');
  const [cycle, setCycle] = useState(0);

  return (
    <div className={styles.frame} aria-label="Mock de terminal con Claude Code CLI">
      <div className={styles.line}>
        <span className={styles.prompt}>$</span>{' '}
        <Typewriter
          key={`cmd-${cycle}`}
          text={COMMAND}
          speedMs={40}
          onComplete={() => setPhase('response')}
        />
      </div>
      {phase !== 'cmd' && RESPONSE_LINES.map((l, i) => (
        <div key={i} className={styles.line}>
          <Typewriter
            key={`r-${cycle}-${i}`}
            text={l}
            speedMs={15}
            startDelayMs={400 + i * 400}
            onComplete={
              i === RESPONSE_LINES.length - 1
                ? () => {
                    setPhase('done');
                    setTimeout(() => { setPhase('cmd'); setCycle((c) => c + 1); }, 2500);
                  }
                : undefined
            }
          />
        </div>
      ))}
      {phase === 'done' && (
        <div className={styles.line}>
          <span className={styles.prompt}>$</span> <span className={styles.cursor} />
        </div>
      )}
    </div>
  );
}
