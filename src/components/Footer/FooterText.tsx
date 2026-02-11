import { type ReactNode } from 'react';
import styles from './FooterText.module.css';

interface FooterTextProps {
  children: ReactNode;
}

export const FooterText = ({ children }: FooterTextProps) => {
  return (
    <div className={styles.text}>
      {children}
    </div>
  );
};