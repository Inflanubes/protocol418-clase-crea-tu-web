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

const CLASS_TITLE = 'Chai — Crea web con animación 3D';
const DESCRIPTOR_PUNCH_1 = 'Cinco herramientas.';
const DESCRIPTOR_PUNCH_2 = 'Una clase.';
const DESCRIPTOR_TEXT = 'Creo una web completa en menos de una hora y media con las herramientas que ves, para todos los niveles. De cero a web con animación 3D.';

// TODO: reemplazar con URL final del vídeo de YouTube cuando la usuaria la proporcione.
// Mientras valga '#', el CTA renderiza visualmente pero no es navegable (aria-disabled + tabIndex -1 + pointer-events none).
const YOUTUBE_VIDEO_URL = '#';

export function AnimatedHero() {
  const ytDisabled = YOUTUBE_VIDEO_URL === '#';

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <span className={styles.headerGlyph}>&lt;4|8&gt;</span>
        <span className={styles.headerTitle}>{CLASS_TITLE}</span>
      </div>

      <div className={styles.hero} aria-hidden="true">
        <span className={styles.glyph}>&lt;4|8&gt;</span>
      </div>

      <div className={styles.descriptor}>
        <p className={styles.descriptorPunch}>{DESCRIPTOR_PUNCH_1}</p>
        <p className={styles.descriptorPunch}>{DESCRIPTOR_PUNCH_2}</p>
        <p className={styles.descriptorText}>{DESCRIPTOR_TEXT}</p>
      </div>

      <div className={styles.chips}>
        {TOOLS.map((t, i) => (
          <div
            key={t.name}
            className={styles.chip}
            style={{ ['--i' as string]: i }}
          >
            <strong>{t.name}</strong> · <Typewriter text={t.role} startDelayMs={2900 + i * 100 + 320} speedMs={45} />
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
          ver clase →
        </Link>
      </div>
    </div>
  );
}
