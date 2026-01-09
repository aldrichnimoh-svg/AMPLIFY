import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-midnight disabled:opacity-50 disabled:cursor-not-allowed uppercase font-display";
  
  const variants = {
    // Using Vibrant Magenta for primary CTA to pop against Midnight Blue
    primary: "bg-brand-magenta hover:bg-[#e0435f] text-white shadow-[0_0_20px_rgba(255,77,109,0.3)] hover:shadow-[0_0_30px_rgba(255,77,109,0.5)] border border-transparent",
    secondary: "bg-white text-brand-midnight hover:bg-brand-gray border border-transparent",
    outline: "bg-transparent border-2 border-white/20 text-white hover:border-brand-electric hover:text-brand-electric"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};