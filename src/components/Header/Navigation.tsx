import { type ReactNode } from 'react';
import styles from './Navigation.module.css';

interface NavigationProps {
  children: ReactNode;
}

export const Navigation = ({ children }: NavigationProps) => {
  return (
    <nav className={styles.navigation}>
      {children}
    </nav>
  );
};