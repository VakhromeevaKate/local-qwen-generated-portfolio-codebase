import { type ReactNode } from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  children: ReactNode;
}

export const Footer = ({ children }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {children}
      </div>
    </footer>
  );
};
