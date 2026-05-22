import { SlideShell } from '@/components/deck/SlideShell';
import { SLIDES } from '@/lib/slides';
import styles from './extender.module.css';

interface Pillar {
  name: string;
  subtitle: string;
  what: string;
  forWhat: string;
  examples: readonly string[];
}

const PILLARS: readonly Pillar[] = [
  {
    name: 'Skills',
    subtitle: '/skills',
    what: 'Paquetes de instrucciones que activan comportamientos específicos en Claude. Tú los invocas; Claude los sigue.',
    forWhat: 'Workflows repetibles donde quieres que Claude siga un proceso concreto en lugar de improvisar.',
    examples: [
      'brainstorming · diseño antes de tocar código',
      'debugging · investigar antes de proponer fix',
      'writing-plans · plan paso a paso desde una spec',
    ],
  },
  {
    name: 'MCP',
    subtitle: 'Model Context Protocol',
    what: 'Estándar para conectar Claude a herramientas y datos externos. Cada servidor MCP expone tools que Claude puede llamar.',
    forWhat: 'Cuando quieres que Claude actúe sobre tus apps o datos, no solo conversar sobre ellos.',
    examples: [
      'Gmail, Drive, Calendar · acceso a tu Google',
      'Make, n8n · disparar automatizaciones',
      'tu BBDD propia · queries en SQL',
    ],
  },
  {
    name: 'CLI flags',
    subtitle: 'claude --print, --continue, --resume',
    what: 'Argumentos del comando claude que cambian su comportamiento — desde imprimir respuesta y salir hasta retomar sesiones previas.',
    forWhat: 'Scripting, pipelines, integraciones. Claude deja de ser interactivo y se vuelve programable.',
    examples: [
      '--print "prompt" · respuesta a stdout y salir',
      '--continue · sigue donde dejaste la última sesión',
      '--resume <id> · retoma una sesión concreta',
    ],
  },
];

export default function ExtenderPage() {
  const slide = SLIDES.find((s) => s.id === 'extender')!;
  return (
    <SlideShell framing={slide.framing}>
      <h1 className={styles.title}>Extender Claude Code</h1>
      <div className={styles.grid}>
        {PILLARS.map((p) => (
          <article key={p.name} className={styles.card}>
            <header className={styles.header}>
              <span className={styles.name}>{p.name}</span>
              <span className={styles.subtitle}>{p.subtitle}</span>
            </header>
            <div className={styles.section}>
              <span className={styles.heading}>qué es</span>
              <p className={styles.body}>{p.what}</p>
            </div>
            <div className={styles.section}>
              <span className={styles.heading}>para qué</span>
              <p className={styles.body}>{p.forWhat}</p>
            </div>
            <div className={styles.section}>
              <span className={styles.heading}>ejemplos</span>
              <ul className={styles.examples}>
                {p.examples.map((ex, i) => <li key={i}>{ex}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <p className={styles.tagline}>
        Los tres dejan a Claude <strong>hacer más cosas, con más contexto, sin tu intervención</strong>.
      </p>
    </SlideShell>
  );
}
