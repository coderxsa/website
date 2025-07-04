import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Users, MessageCircle, Gamepad2 } from 'lucide-react';

const AnimatedHero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'WhatsApp Automation',
    'Fortnite Bot Lobbies',
    'Premium Support',
    'Professional Services'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentText.length) {
          setTypedText(currentText.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, texts]);

  const [floatingIcons] = useState([
    { icon: MessageCircle, x: 10, y: 20, delay: 0 },
    { icon: Gamepad2, x: 85, y: 15, delay: 1 },
    { icon: Users, x: 15, y: 70, delay: 2 },
    { icon: Zap, x: 80, y: 75, delay: 3 }
  ]);

  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="absolute opacity-10 animate-bounce"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: '3s'
          }}
        >
          <item.icon className="h-12 w-12 text-blue-400" />
        </div>
      ))}

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Premium Bot Services
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-2 h-8">
            <span>Professional </span>
            <span className="text-blue-400 font-semibold">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed animate-slide-up">
            Boost your productivity with our cutting-edge automation technology and 24/7 premium support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <Zap className="h-5 w-5" />
              <span>Get Started</span>
              <ChevronRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-gray-600 hover:border-blue-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg">
              Learn More
            </button>
          </div>

          {/* Animated Stats Bar */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-fade-in-delay-1">
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div className="text-center animate-fade-in-delay-2">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
            <div className="text-center animate-fade-in-delay-3">
              <div className="text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-sm text-gray-400">Happy Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;