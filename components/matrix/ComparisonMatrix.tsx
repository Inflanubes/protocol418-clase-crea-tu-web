import { Fragment } from 'react';
import styles from './ComparisonMatrix.module.css';

type FlavorKey = 'web' | 'app' | 'vscode' | 'terminal';

interface Row {
  label: string;
  cells: Record<FlavorKey, string | readonly string[]>;
}

const HEADERS: Record<FlavorKey, string> = {
  web: 'WEB',
  app: 'APP',
  vscode: 'VS CODE',
  terminal: 'TERMINAL',
};

const ROWS: readonly Row[] = [
  {
    label: 'para qué',
    cells: {
      web: 'probar rápido',
      app: 'usar a diario',
      vscode: 'construir con repo',
      terminal: 'automatizar',
    },
  },
  {
    label: 'cuándo',
    cells: {
      web: 'primera vez, consulta',
      app: 'sesiones largas, contexto',
      vscode: 'tocas código de verdad',
      terminal: 'scripts, CI, agentes',
    },
  },
  {
    label: 'instalación',
    cells: { web: 'cero', app: 'descarga', vscode: 'extensión', terminal: 'CLI (npm)' },
  },
  {
    label: 'pros',
    cells: {
      web: ['sin setup', 'multi-device'],
      app: ['ventana propia', 'conversaciones persisten'],
      vscode: ['contexto del repo', 'edita archivos'],
      terminal: ['scriptable', 'agentes'],
    },
  },
  {
    label: 'contras',
    cells: {
      web: ['sin contexto', 'pestaña depende'],
      app: ['ocupa RAM', 'una sola instancia'],
      vscode: ['setup inicial', 'solo VS Code'],
      terminal: ['curva alta', 'solo CLI'],
    },
  },
  {
    label: 'coste',
    cells: { web: 'free + pro', app: 'free + pro', vscode: 'free + pro', terminal: 'free (uso=API)' },
  },
];

const LEVEL_LABEL = 'nivel técnico';
const LEVELS: Record<FlavorKey, 0 | 1 | 2 | 3> = { web: 0, app: 1, vscode: 2, terminal: 3 };

function renderCell(value: string | readonly string[]) {
  if (Array.isArray(value)) {
    return (
      <ul className={styles.bullets}>
        {value.map((v, i) => <li key={i}>{v}</li>)}
      </ul>
    );
  }
  return <>{value}</>;
}

export function ComparisonMatrix() {
  const flavors: readonly FlavorKey[] = ['web', 'app', 'vscode', 'terminal'];

  return (
    <div className={styles.matrix}>
      <div />
      {flavors.map((f) => (
        <div key={f} className={styles.colHeader}>{HEADERS[f]}</div>
      ))}

      {ROWS.map((row) => (
        <Fragment key={row.label}>
          <div className={styles.rowLabel}>{row.label}</div>
          {flavors.map((f) => (
            <div key={`${row.label}-${f}`} className={styles.cell} data-flavor={f}>
              {renderCell(row.cells[f])}
            </div>
          ))}
        </Fragment>
      ))}

      <div className={styles.rowLabel}>{LEVEL_LABEL}</div>
      {flavors.map((f) => (
        <div key={`level-${f}`} className={styles.cell} data-flavor={f}>
          <span
            className={`${styles.level} ${styles[`level${LEVELS[f]}`]}`}
            aria-label={`Nivel ${LEVELS[f]}`}
          />
        </div>
      ))}
    </div>
  );
}
