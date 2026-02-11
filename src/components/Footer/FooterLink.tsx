import { type ReactNode } from 'react';
import styles from './FooterLink.module.css';

interface FooterLinkProps {
  to: string;
  children: ReactNode;
}

export const FooterLink = ({ to, children }: FooterLinkProps) => {
  return (
    <a
      className={styles.link}
      href={to}
    >
      {children}
    </a>
  );
};
