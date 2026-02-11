import { type ReactNode } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer }>
        {children}
      </div>
    </header>
  );
};
