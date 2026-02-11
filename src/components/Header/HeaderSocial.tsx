import { type ReactNode } from 'react';
import styles from './HeaderSocial.module.css';

interface HeaderSocialProps {
  children: ReactNode;
}

export const HeaderSocial = ({ children }: HeaderSocialProps) => {
  return (
    <div className={styles.social}>
      {children}
    </div>
  );
};