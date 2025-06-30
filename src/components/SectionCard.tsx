import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SectionCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const SectionCard: React.FC<SectionCardProps> = ({ 
  title, 
  icon, 
  children, 
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full max-w-4xl mx-auto mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 bg-black/20 backdrop-blur-sm border border-green-400/30 rounded-xl 
                   hover:border-green-400/60 hover:bg-green-400/10 transition-all duration-300
                   flex items-center justify-between group"
      >
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{icon}</span>
          <span className="text-xl font-bold text-green-400 group-hover:text-cyan-400 transition-colors">
            {title}
          </span>
        </div>
        <div className="text-green-400 group-hover:text-cyan-400 transition-colors">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-4 bg-black/10 backdrop-blur-sm border-x border-b border-green-400/20 rounded-b-xl">
          {children}
        </div>
      </div>
    </div>
  );
};