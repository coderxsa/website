import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Premium Bot Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Professional automation solutions for WhatsApp, Telegram, and Fortnite lobbies. 
            Boost your productivity with our cutting-edge bot technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105">
              <Zap className="h-5 w-5" />
              <span>Get Started</span>
              <ChevronRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-gray-600 hover:border-blue-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-800">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;