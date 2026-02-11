import { type ReactNode } from 'react';
import styles from './ContactLink.module.css';

interface ContactLinkProps {
  to: string;
  children: ReactNode;
}

export const ContactLink = ({ to, children }: ContactLinkProps) => {
  return (
    <a
      className={styles.link}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};