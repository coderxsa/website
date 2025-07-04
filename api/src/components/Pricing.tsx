import React from 'react';
import { Check, Crown, Zap, Star } from 'lucide-react';

const Pricing = () => {
  const whatsappPlans = [
    {
      name: "WhatsApp Bot - 7 Days",
      price: "1000",
      description: "Perfect for testing and short-term projects",
      features: [
        "Full Bot Panel Access",
        "Auto-Reply System",
        "Basic Analytics",
        "7 Days Access"
      ],
      icon: Zap,
      color: "from-green-500 to-emerald-600",
      link: "https://play.google.com/store/apps/details?id=com.coderx.creditsocial"
    },
    {
      name: "WhatsApp Bot - 30 Days",
      price: "4600",
      description: "Best value for extended usage",
      features: [
        "Full Bot Panel Access",
        "Auto-Reply System",
        "Basic Analytics",
        "30 Days Access"
      ],
      icon: Crown,
      color: "from-green-600 to-teal-600",
      popular: true,
      link: "https://play.google.com/store/apps/details?id=com.coderx.creditsocial"
    }
  ];

  const fortnitePlans = [
    {
      name: "Fortnite Bot Lobbies",
      price: "1000",
      description: "Premium lobby access",
      features: [
        "10 Bot Lobbies",
        "5h Uptime",
        "Multiple Regions",
        "Fast Matchmaking",
        "Priority Support",
        "Instant Access"
      ],
      icon: Star,
      color: "from-purple-500 to-pink-600",
      link: "https://play.google.com/store/apps/details?id=com.coderx.creditsocial"
    }
  ];

  return (
    <section id="pricing" className="py-16 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include premium features and professional support.
          </p>
        </div>

        {/* WhatsApp Bot Pricing */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">WhatsApp Bot Panel</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whatsappPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${plan.popular ? 'border-green-400 shadow-lg shadow-green-400/20' : 'border-gray-700 hover:border-gray-600'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Best Value
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">coins</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full bg-gradient-to-r ${plan.color} hover:opacity-90 px-6 py-3 rounded-lg font-semibold transition-all duration-300`}
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Fortnite Bot Pricing */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Fortnite Bot Lobbies</h3>
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              {fortnitePlans.map((plan, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">coins</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Check className="h-5 w-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center w-full bg-gradient-to-r ${plan.color} hover:opacity-90 px-6 py-3 rounded-lg font-semibold transition-all duration-300`}
                  >
                    Choose Plan
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
