import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { TypewriterText } from './components/TypewriterText';
import { GlitchText } from './components/GlitchText';
import { LoadingScreen } from './components/LoadingScreen';
import { SectionCard } from './components/SectionCard';
import { SocialLink } from './components/SocialLink';
import { Heart, Coffee } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };

  const titleVariations = [
    "CѲДЄЯЖ$А",
    "CODERXSA",
    "C0D3RX5A",
    "ⱧȺȻꝀɆɌ",
    "╔═══╗╔═══╗╔═══╗╔═══╗╔═══╗╔═══╗"
  ];

  useEffect(() => {
    // Preload any assets here if needed
    const timer = setTimeout(() => {
      if (isLoading) {
        handleLoadingComplete();
      }
    }, 5000); // Fallback timeout

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-green-400 font-mono overflow-x-hidden">
      <ParticleBackground />
      
      <div className={`relative z-10 transition-all duration-1000 ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Header Section */}
        <header className="text-center py-12 px-4">
          <div className="mb-8">
            <GlitchText className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
              <TypewriterText texts={titleVariations} />
            </GlitchText>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-2xl text-cyan-400 mb-4 animate-pulse">
              Welcome My Cunts!! I'm the main dev on Nebula.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto" />
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 pb-20">
          {/* Store Section */}
          <SectionCard title="CODERX Store" icon="🛒">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SocialLink href="https://coderx-movies.onrender.com/">
                🎬 Movies
              </SocialLink>
              <SocialLink href="https://www.youtube.com/@coderxsa">
                📺 YouTube
              </SocialLink>
              <SocialLink href="https://github.com/coderxsa">
                💻 GitHub
              </SocialLink>
              <SocialLink href="https://whatsapp.com/channel/0029VayIXEaISTkIAQEeFL2q">
                💬 WhatsApp
              </SocialLink>
              <SocialLink href="https://coderxsa-obf.onrender.com/">
                🔐 Node.js Encrypt Files
              </SocialLink>
            </div>
          </SectionCard>

          {/* Host Bot Section */}
          <SectionCard title="Host Bot" icon="🧪">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SocialLink href="https://play.google.com/store/apps/details?id=com.coderx.creditsocial">
                🤖 Host Nebula
              </SocialLink>
            </div>
          </SectionCard>

          {/* Additional Features Section */}
          <SectionCard title="Featured Projects" icon="⭐">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/30 backdrop-blur-sm border border-green-400/20 rounded-lg p-4">
                <h3 className="text-cyan-400 font-bold mb-2">🎭 Nebula Bot</h3>
                <p className="text-sm text-gray-300">Advanced Discord bot with multiple features</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-green-400/20 rounded-lg p-4">
                <h3 className="text-cyan-400 font-bold mb-2">🔒 File Encryption</h3>
                <p className="text-sm text-gray-300">Secure your Node.js files with our encryption tool</p>
              </div>
            </div>
          </SectionCard>
        </main>

        {/* Footer */}
        <footer className="relative border-t border-green-400/30 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-green-400 flex items-center space-x-2">
                <span>Made with</span>
                <Heart className="text-red-500 animate-pulse" size={16} />
                <span>by CODERXSA | © 2025</span>
              </p>
              
              <a
                href="https://pay.yoco.com/coderxsa?amount=15&reference=Donation"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 bg-green-400 text-black px-6 py-3 
                         rounded-lg font-bold text-lg hover:bg-cyan-400 hover:scale-105 
                         transition-all duration-300 shadow-lg hover:shadow-green-400/50"
              >
                <Coffee size={20} />
                <span>Donate / Support</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;