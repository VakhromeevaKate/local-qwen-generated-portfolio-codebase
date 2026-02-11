import { type ReactNode } from 'react';
import styles from './NavigationItem.module.css';

interface NavigationItemProps {
  to: string;
  children: ReactNode;
}

export const NavigationItem = ({ to, children }: NavigationItemProps) => {
  return (
    <a
      className={styles.item}
      href={to}
    >
      {children}
    </a>
  );
};