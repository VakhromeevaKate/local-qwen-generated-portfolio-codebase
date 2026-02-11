import { type ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  children: ReactNode;
}

export const Section = ({ id, children }: SectionProps) => {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  );
};


