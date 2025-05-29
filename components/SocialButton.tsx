
import React from 'react';

interface SocialButtonProps {
  provider: 'Google' | 'Facebook';
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ provider, onClick, icon, text }) => {
  let bgColor = 'bg-white hover:bg-gray-100';
  let textColor = 'text-gray-700';

  if (provider === 'Facebook') {
    // Mockup uses a slightly lighter purple for Facebook button background on registration options page
    // but a standard blue for Facebook confirmation pages.
    // For general purpose let's use a common style which is white background.
    // The specific Facebook blue button on FacebookRegisterPage will be custom.
  }

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-violet-700 transition-colors duration-200 ${bgColor}`}
    >
      <span className="mr-3 w-5 h-5">{icon}</span>
      <span className={`font-medium ${textColor}`}>{text}</span>
    </button>
  );
};
