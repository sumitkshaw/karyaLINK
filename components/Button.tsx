// components/Button.tsx
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: 'btn_primary' | 'btn_outline';
  full?: boolean;
}

const Button = ({ title, variant, full, className = '', ...props }: ButtonProps) => {
  const baseStyles = 'rounded-lg font-medium transition-all duration-300 flex items-center justify-center';
  
  const variants = {
    btn_primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm hover:shadow-md',
    btn_outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
  };

  const sizeStyles = full ? 'w-full px-6 py-3' : 'px-6 py-3';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizeStyles} ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;