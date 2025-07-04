import React from 'react';
import { Clock, CheckCircle, Calendar } from 'lucide-react';

const Schedule = () => {
  const schedule = [
    { day: "Monday", status: "active", uptime: "99.9%", hours: "24/7" },
    { day: "Tuesday", status: "active", uptime: "99.8%", hours: "24/7" },
    { day: "Wednesday", status: "active", uptime: "99.9%", hours: "24/7" },
    { day: "Thursday", status: "active", uptime: "99.7%", hours: "24/7" },
    { day: "Friday", status: "active", uptime: "99.9%", hours: "24/7" },
    { day: "Saturday", status: "active", uptime: "99.8%", hours: "24/7" },
    { day: "Sunday", status: "active", uptime: "99.9%", hours: "24/7" }
  ];

  return (
    <section id="schedule" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Service Schedule
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our services run 24/7 with guaranteed uptime and professional monitoring.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">99.9% Uptime</h3>
                  <p className="text-gray-400">Guaranteed service availability</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">24/7 Support</h3>
                  <p className="text-gray-400">Round-the-clock assistance</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-5 w-5 text-blue-400" />
                    <span className="font-semibold text-white">{item.day}</span>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">{item.hours}</span>
                    </div>
                    <div className="text-green-400 font-semibold">
                      {item.uptime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;