import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({ children, className = '', style }: CardProps) {
  return (
    <div className="group relative" style={style}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
      <div 
        className={`
          relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-lg p-6 
          hover:border-cyan-500/30 transition-all duration-300 
          hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] 
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
}