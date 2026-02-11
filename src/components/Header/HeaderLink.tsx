import { type ReactNode } from 'react';
import styles from './HeaderLink.module.css';

interface HeaderLinkProps {
  to: string;
  children: ReactNode;
}

export const HeaderLink = ({ to, children }: HeaderLinkProps) => {
  return (
    <a
      className={styles.link}
      href={to}
    >
      {children}
    </a>
  );
};