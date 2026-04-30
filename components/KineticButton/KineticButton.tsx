import styles from './KineticButton.module.scss';

export const KineticButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className={styles.button}>
      {children}
      <svg className={styles.borderOverlay}>
        <rect x="0" y="0" width="100%" height="100%" />
      </svg>
    </button>
  );
};