import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  const asciiArt = [
    "  ▄████▄   ▒█████  ▓█████▄ ▓█████  ██▀███  ▒██   ██▒",
    " ▒██▀ ▀█  ▒██▒  ██▒▒██▀ ██▌▓█   ▀ ▓██ ▒ ██▒▒▒ █ █ ▒░",
    " ▒▓█    ▄ ▒██░  ██▒░██   █▌▒███   ▓██ ░▄█ ▒░░  █   ░",
    " ▒▓▓▄ ▄██▒▒██   ██░░▓█▄   ▌▒▓█  ▄ ▒██▀▀█▄   ░ █ █ ▒ ",
    " ▒ ▓███▀ ░░ ████▓▒░░▒████▓ ░▒████▒░██▓ ▒██▒▒██▒ ▒██▒",
    " ░ ░▒ ▒  ░░ ▒░▒░▒░  ▒▒▓  ▒ ░░ ▒░ ░░ ▒▓ ░▒▓░▒▒ ░ ░▓ ░",
    "   ░  ▒     ░ ▒ ▒░  ░ ▒  ▒  ░ ░  ░  ░▒ ░ ▒░░░   ░▒ ░",
    " ░        ░ ░ ░ ▒   ░ ░  ░    ░     ░░   ░  ░    ░  ",
    " ░ ░          ░ ░     ░       ░  ░   ░      ░    ░  "
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % asciiArt.length);
    }, 200);

    return () => clearInterval(lineInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="text-green-400 font-mono text-xs md:text-sm lg:text-base mb-8 text-center">
        {asciiArt.map((line, index) => (
          <div
            key={index}
            className={`transition-opacity duration-200 ${
              index <= currentLine ? 'opacity-100' : 'opacity-30'
            }`}
          >
            {line}
          </div>
        ))}
      </div>
      
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="text-green-400 font-mono text-lg">
        INITIALIZING... {progress}%
      </div>
      
      <div className="text-green-400 font-mono text-sm mt-2 animate-pulse">
        Loading CODERXSA systems...
      </div>
    </div>
  );
};