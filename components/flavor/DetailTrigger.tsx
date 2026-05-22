'use client';

import styles from './FlavorSlide.module.css';

interface Props { onClick: () => void; }

export function DetailTrigger({ onClick }: Props) {
  return (
    <button className={styles.trigger} onClick={onClick}>
      ver detalle técnico →
    </button>
  );
}
