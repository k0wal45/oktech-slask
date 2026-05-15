// components/Button/Button.tsx
import Link from 'next/link';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
}

export const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: ButtonProps) => {
  const combinedClasses = `${styles.button} ${styles[variant]} ${className}`;

  const content = (
    <>
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};