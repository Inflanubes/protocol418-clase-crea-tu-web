'use client';

import { usePathname } from 'next/navigation';
import { slideByUrl } from '@/lib/slides';
import styles from './LivingBackground.module.css';

export function LivingBackground() {
  const pathname = usePathname();
  const slide = slideByUrl(pathname);
  const slideId = slide?.id ?? 'intro';

  return (
    <div className={styles.bg} aria-hidden="true">
      <svg className={styles.lines} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern
            id="lines-pattern"
            patternUnits="userSpaceOnUse"
            width="40"
            height="40"
            patternTransform="rotate(35)"
          >
            <line x1="0" y1="0" x2="0" y2="40" stroke="#EA5A1F" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines-pattern)" />
      </svg>
      <div className={styles.tint} data-slide={slideId} />
    </div>
  );
}
