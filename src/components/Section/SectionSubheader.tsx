import { type ReactNode } from 'react';
import styles from './SectionSubheader.module.css';

interface SectionSubheaderProps {
  children: ReactNode;
}

export const SectionSubheader = ({ children }: SectionSubheaderProps) => {
  return (
    <div className={styles.subheader}>
      {children}
    </div>
  );
};