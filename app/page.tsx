import Link from 'next/link';
import { SlideShell } from '@/components/deck/SlideShell';
import { Typewriter } from '@/components/effects/Typewriter';
import { SLIDES } from '@/lib/slides';
import styles from './intro.module.css';

const ACCESS_POINTS = [
  { label: 'WEB',      access: 'claude.ai/code' },
  { label: 'APP',      access: 'Claude Desktop' },
  { label: 'VS CODE',  access: 'code-claude' },
  { label: 'TERMINAL', access: '$ claude' },
];

export default function IntroPage() {
  const slide = SLIDES[0]!;
  return (
    <SlideShell framing={slide.framing}>
      <div className={styles.hero}>&lt;4|8&gt;</div>
      <div className={styles.chips}>
        {ACCESS_POINTS.map((a, i) => (
          <div key={a.label} className={styles.chip}>
            <strong>{a.label}</strong> · <Typewriter text={a.access} startDelayMs={400 + i * 200} speedMs={50} />
          </div>
        ))}
      </div>
      <div className={styles.cta}>
        <Link href="/web" className={styles.ctaLink}>empezar →</Link>
      </div>
    </SlideShell>
  );
}
