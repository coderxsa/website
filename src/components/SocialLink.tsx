import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, children, external = true }) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative overflow-hidden bg-black/20 backdrop-blur-sm border border-green-400/30 
                 rounded-lg p-4 text-green-400 hover:text-black hover:bg-green-400 
                 transition-all duration-300 transform hover:scale-105 hover:-rotate-1
                 flex items-center justify-between"
    >
      <span className="font-semibold text-sm md:text-base">{children}</span>
      {external && (
        <ExternalLink 
          size={16} 
          className="opacity-60 group-hover:opacity-100 transition-opacity" 
        />
      )}
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                      transition-transform duration-700" />
    </a>
  );
};