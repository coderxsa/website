import React from 'react';
import { MessageCircle, Gamepad2, ExternalLink, Bot } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "WhatsApp Bot Panel",
      description: "Advanced WhatsApp automation with custom commands, auto-replies, and bulk messaging capabilities.",
      features: ["Custom Commands", "Auto-Reply", "Bulk Messaging", "Analytics Dashboard"],
      color: "from-blue-500 to-cyan-600",
      link: "#whatsapp"
    },
    {
      icon: Gamepad2,
      title: "Fortnite Bot Lobbies",
      description: "Premium Fortnite lobby services with guaranteed uptime and professional support.",
      features: ["24/7 Uptime", "Multiple Regions", "Fast Matchmaking", "Priority Support"],
      color: "from-purple-500 to-pink-600",
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-gray-600">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Bot className="h-4 w-4 text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300`}>
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

export default Services;