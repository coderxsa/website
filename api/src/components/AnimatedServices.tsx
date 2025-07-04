import React, { useState, useEffect } from 'react';
import { MessageCircle, Gamepad2, ExternalLink, Bot, Activity, Users } from 'lucide-react';

const AnimatedServices = () => {
  const [activeService, setActiveService] = useState(0);
  const [serviceStats, setServiceStats] = useState({
    whatsapp: { users: 1, messages: 1 },
    fortnite: { lobbies: 1, players: 1 }
  });

  // Auto-rotate active service
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Simulate live stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setServiceStats(prev => ({
        whatsapp: {
          users: prev.whatsapp.users + Math.floor(Math.random() * 1),
          messages: prev.whatsapp.messages + Math.floor(Math.random() * 10) + 5
        },
        fortnite: {
          lobbies: prev.fortnite.lobbies + Math.floor(Math.random() * 1),
          players: prev.fortnite.players + Math.floor(Math.random() * 1) + 1
        }
      }));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: MessageCircle,
      title: "WhatsApp Bot Panel",
      description: "Advanced WhatsApp automation with custom commands, auto-replies, and bulk messaging capabilities.",
      features: ["Auto-Reply", "Bulk Messaging", "Analytics Dashboard"],
      color: "from-blue-500 to-cyan-600",
      stats: [
        { label: "Active Users", value: serviceStats.whatsapp.users, icon: Users },
        { label: "Messages Sent", value: serviceStats.whatsapp.messages, icon: Activity }
      ],
      link: "#whatsapp"
    },
    {
      icon: Gamepad2,
      title: "Fortnite Bot Lobbies",
      description: "Premium Fortnite lobby services with guaranteed uptime and professional support.",
      features: ["5h Uptime", "Multiple Regions", "Fast Matchmaking", "Priority Support"],
      color: "from-purple-500 to-pink-600",
      stats: [
        { label: "Active Lobbies", value: serviceStats.fortnite.lobbies, icon: Activity },
        { label: "Players Online", value: serviceStats.fortnite.players, icon: Users }
      ],
      link: "#fortnite"
    }
  ];

  return (
    <section id="services" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional automation solutions designed to streamline your workflow and enhance productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 transform border ${
                activeService === index 
                  ? 'scale-105 border-blue-400 shadow-lg shadow-blue-400/20' 
                  : 'border-gray-700 hover:border-gray-600 hover:scale-102'
              }`}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-transform duration-300 ${activeService === index ? 'animate-pulse' : ''}`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              {/* Live Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {service.stats.map((stat, idx) => (
                  <div key={idx} className="bg-gray-700/30 rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <stat.icon className="h-4 w-4 text-blue-400 mr-1" />
                      <span className="text-lg font-bold text-white font-mono">
                        {stat.value.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Bot className="h-4 w-4 text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105`}>
                <span>Launch Service</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedServices;