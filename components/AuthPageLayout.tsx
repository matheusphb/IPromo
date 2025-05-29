
import React from 'react';
import { Logo } from './Logo';

interface AuthPageLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  showLogo?: boolean;
  customBgClass?: string; // For screens like Google/Facebook auth that have a different BG
}

export const AuthPageLayout: React.FC<AuthPageLayoutProps> = ({ children, pageTitle, showLogo = true, customBgClass }) => {
  const bgClass = customBgClass || 'bg-violet-700 auth-bg-pattern';
  return (
    <div className={`min-h-screen flex flex-col items-center ${bgClass} text-white px-4 py-8 sm:py-12`}>
      <div className="w-full max-w-sm flex flex-col items-center">
        {showLogo && <Logo className="mb-6 sm:mb-8" />}
        {pageTitle && (
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-6 sm:mb-8">{pageTitle}</h2>
        )}
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};
