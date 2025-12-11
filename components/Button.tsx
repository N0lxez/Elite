import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
  withArrow?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  withArrow = false,
  isLoading = false,
  disabled,
  ...props 
}) => {
  
  // Base Layout & Typography - Premium Feel
  const baseStyles = `
    relative group inline-flex items-center justify-center 
    px-8 py-5 md:px-10 md:py-6
    text-[11px] md:text-xs font-mono font-bold uppercase tracking-[0.25em] 
    transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
    disabled:opacity-50 disabled:cursor-not-allowed
    rounded-[2px] overflow-hidden cursor-pointer
    active:scale-[0.98] border
  `;
  
  // Variants - Aesthetics
  const variants = {
    primary: `
      bg-white text-black border-white
      shadow-[0_0_20px_rgba(255,255,255,0.2)]
      hover:shadow-[0_0_40px_rgba(212,191,168,0.5)]
      hover:border-[#d4bfa8]
    `,
    secondary: `
      bg-[#121212] text-white border-white/10
      hover:border-transparent
    `,
    outline: `
      bg-transparent text-white border-white/20
      hover:border-transparent
      backdrop-blur-sm
    `
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* 1. Primary Variant Background Animation (Subtle tint shift) */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-[#d4bfa8] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      
      {/* 2. Secondary/Outline Variant Background Animation (Sliding Fill) */}
      {(variant === 'outline' || variant === 'secondary') && (
        <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />
      )}

      {/* 3. Shimmer Effect (Universal but tuned per variant) */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 skew-x-[-20deg] pointer-events-none z-10" />
      )}

      {/* Content Wrapper */}
      <span className={`relative z-20 flex items-center justify-center gap-3 transition-colors duration-500 ${
          (variant === 'outline' || variant === 'secondary') ? 'group-hover:text-black' : ''
      }`}>
        {isLoading && <Loader2 className="animate-spin" size={14} />}
        
        <span className={isLoading ? 'opacity-80' : ''}>
            {children}
        </span>

        {withArrow && !isLoading && (
          <ArrowRight 
            size={14} 
            className={`transition-transform duration-300 group-hover:translate-x-1 ${
                (variant === 'outline' || variant === 'secondary') ? 'text-current' : ''
            }`} 
          />
        )}
      </span>
    </button>
  );
};