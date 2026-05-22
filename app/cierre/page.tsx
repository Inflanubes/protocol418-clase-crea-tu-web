import { SlideShell } from '@/components/deck/SlideShell';
import { AssembleText } from '@/components/effects/AssembleText';
import { SITE } from '@/lib/site';
import styles from './cierre.module.css';

export default function CierrePage() {
  return (
    <SlideShell>
      <div className={styles.wrap}>
        <p className={styles.message}>
          Tengas la edad que tengas, uses la herramienta que uses,<br />
          el <strong>protocolo</strong> es el mismo.
        </p>
        <div className={styles.brand}>
          <AssembleText text="<4|8>" durationMs={1600} />
        </div>
        <a className={styles.cta} href={SITE.whatsapp} target="_blank" rel="noreferrer">
          entrar a la comunidad →
        </a>
        <a className={styles.footer} href="https://protocol418.com" target="_blank" rel="noreferrer">
          protocol418.com
        </a>
      </div>
    </SlideShell>
  );
}
