import Link from 'next/link';
import { Typewriter } from './Typewriter';
import styles from './AnimatedHero.module.css';

const TOOLS = [
  { name: 'CLAUDE CODE',     role: 'código' },
  { name: 'NANO BANANA PRO', role: 'imágenes' },
  { name: 'SEEDANCE 2.0',    role: 'vídeo' },
  { name: 'GITHUB',          role: 'repo' },
  { name: 'VERCEL',          role: 'deploy' },
];

// TODO: reemplazar con URL final del vídeo de YouTube cuando la usuaria la proporcione.
// Mientras valga '#', el CTA renderiza visualmente pero no es navegable (aria-disabled + tabIndex -1 + pointer-events none).
const YOUTUBE_VIDEO_URL = '#';

export function AnimatedHero() {
  const ytDisabled = YOUTUBE_VIDEO_URL === '#';

  return (
    <div className={styles.root}>
      <div className={styles.hero}>
        <span className={styles.glyph}>&lt;4|8&gt;</span>
      </div>

      <div className={styles.chips}>
        {TOOLS.map((t, i) => (
          <div
            key={t.name}
            className={styles.chip}
            style={{ ['--i' as string]: i }}
          >
            <strong>{t.name}</strong> · <Typewriter text={t.role} startDelayMs={1400 + i * 150 + 320} speedMs={45} />
          </div>
        ))}
      </div>

      <div className={styles.ctas}>
        <Link href="/intro" className={styles.ctaPrimary}>empezar →</Link>
        <Link
          href={YOUTUBE_VIDEO_URL}
          className={ytDisabled ? `${styles.ctaSecondary} ${styles.ctaDisabled}` : styles.ctaSecondary}
          aria-disabled={ytDisabled || undefined}
          tabIndex={ytDisabled ? -1 : undefined}
        >
          ver vídeo →
        </Link>
      </div>
    </div>
  );
}
