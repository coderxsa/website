import React from 'react';
import Header from './components/Header';
import AnimatedHero from './components/AnimatedHero';
import AnimatedServices from './components/AnimatedServices';
import Pricing from './components/Pricing';
import LiveStats from './components/LiveStats';
import AnimatedSchedule from './components/AnimatedSchedule';
import Terms from './components/Terms';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <AnimatedHero />
        <AnimatedServices />
        <Pricing />
        <LiveStats />
        <AnimatedSchedule />
        <Terms />
        <Footer />
      </div>
    </div>
  );
}

export default App;