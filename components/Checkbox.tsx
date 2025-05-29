
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  labelClassName?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, onChange, className = '', labelClassName = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <button
        type="button"
        id={id}
        role="checkbox"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-violet-700 focus:ring-yellow-400 ${
          checked ? 'bg-yellow-400 border-yellow-400' : 'bg-transparent border-violet-300 hover:border-violet-100'
        }`}
      >
        {checked && <CheckIcon className="w-3.5 h-3.5 text-violet-700" />}
      </button>
      <label htmlFor={id} onClick={() => onChange(!checked)} className={`ml-2 text-sm text-violet-100 cursor-pointer ${labelClassName}`}>
        {label}
      </label>
    </div>
  );
};
