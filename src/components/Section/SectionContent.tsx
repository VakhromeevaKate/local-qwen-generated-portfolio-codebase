import { type ReactNode } from 'react';
import styles from './SectionContent.module.css';

interface SectionContentProps {
  children: ReactNode;
}

export const SectionContent = ({ children }: SectionContentProps) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  );
};
