import { type ReactNode } from 'react';

interface SocialLinkProps {
  to: string;
  children: ReactNode;
}

export const SocialLink = ({ to, children }: SocialLinkProps) => {
  return (
    <a
      className="text-gray-700 hover:text-blue-600 transition-colors"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
