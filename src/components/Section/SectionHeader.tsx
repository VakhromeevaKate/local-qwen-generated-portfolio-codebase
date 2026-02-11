import { type ReactNode } from 'react';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  children: ReactNode;
}

export const SectionHeader = ({ children }: SectionHeaderProps) => {
  return (
    <div className={styles.header}>
      {children}
    </div>
  );
};
