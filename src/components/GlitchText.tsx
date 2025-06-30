import React from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10 block animate-glitch-1">
        {children}
      </span>
      <span 
        className="absolute top-0 left-0 -z-10 text-cyan-400 animate-glitch-2" 
        aria-hidden="true"
      >
        {children}
      </span>
      <span 
        className="absolute top-0 left-0 -z-20 text-pink-500 animate-glitch-3" 
        aria-hidden="true"
      >
        {children}
      </span>
    </div>
  );
};