import styles from './TechnicalCard.module.scss';

interface Props {
  label: string;
  title: string;
  description: string;
}

export const TechnicalCard = ({ label, title, description }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.bracket} />
      <span className={styles.label}>{label}</span>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className={styles.content}>{description}</p>
    </div>
  );
};