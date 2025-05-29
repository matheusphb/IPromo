
import React from 'react';
import { APP_NAME, APP_TAGLINE } from '../constants';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'medium', className }) => {
  const sizeClasses = {
    small: { circle: 'w-12 h-12', text: 'text-xl', char: 'text-2xl', tagline: 'text-xs' },
    medium: { circle: 'w-20 h-20', text: 'text-3xl', char: 'text-4xl', tagline: 'text-sm' },
    large: { circle: 'w-28 h-28', text: 'text-4xl', char: 'text-5xl', tagline: 'text-base' },
  };
  const currentSize = sizeClasses[size];

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className={`relative ${currentSize.circle} bg-white rounded-full flex items-center justify-center text-violet-700 font-bold mb-2 shadow-lg`}>
        <span className={`${currentSize.char}`}>i</span>
        <div className="absolute w-full h-full border-4 border-violet-300 rounded-full transform scale-110 opacity-50"></div>
        <div className="absolute w-full h-full border-2 border-violet-200 rounded-full transform scale-125 opacity-30"></div>
      </div>
      <h1 className={`${currentSize.text} font-bold text-white`}>{APP_NAME}</h1>
      <p className={`${currentSize.tagline} text-violet-200`}>{APP_TAGLINE}</p>
    </div>
  );
};
