import styles from './ProsContras.module.css';

interface Props {
  pros: readonly string[];
  contras: readonly string[];
}

export function ProsContras({ pros, contras }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.section}>
        <h3 className={styles.heading}>Pros</h3>
        <ul className={styles.list}>
          {pros.map((p, i) => (
            <li key={i} className={styles.item}>{p}</li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.heading}>Contras</h3>
        <ul className={styles.list}>
          {contras.map((c, i) => (
            <li key={i} className={styles.item}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
