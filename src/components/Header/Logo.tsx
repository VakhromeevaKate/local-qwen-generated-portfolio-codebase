import { type ReactNode } from 'react';
import styles from './Logo.module.css';

interface LogoProps {
  children: ReactNode;
}

export const Logo = ({ children }: LogoProps) => {
  return (
    <div className={styles.logo}>
      {children}
    </div>
  );
};