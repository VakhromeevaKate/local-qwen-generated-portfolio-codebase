import { type ReactNode } from 'react';
import styles from './FooterSocial.module.css';

interface FooterSocialProps {
  children: ReactNode;
}

export const FooterSocial = ({ children }: FooterSocialProps) => {
  return (
    <div className={styles.social}>
      {children}
    </div>
  );
};
