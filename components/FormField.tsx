
import React, { useState } from 'react';
import { EyeOpenIcon } from './icons/EyeOpenIcon';
import { EyeClosedIcon } from './icons/EyeClosedIcon';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string; // Optional external label
  // Placeholder is used as label in mockups
}

export const FormField: React.FC<FormFieldProps> = ({ id, label, type, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full">
      {label && <label htmlFor={id} className="block text-sm font-medium text-violet-200 mb-1">{label}</label>}
      <input
        id={id}
        type={isPassword ? (showPassword ? 'text' : 'password') : type}
        className="w-full px-4 py-3 rounded-lg bg-violet-50 placeholder-violet-400 text-violet-800 border border-violet-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors duration-200"
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-violet-500 hover:text-violet-700"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeClosedIcon className="h-5 w-5" /> : <EyeOpenIcon className="h-5 w-5" />}
        </button>
      )}
    </div>
  );
};
