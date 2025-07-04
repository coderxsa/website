import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, Calendar, Activity, Server, Wifi } from 'lucide-react';

const AnimatedSchedule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [serverLoad, setServerLoad] = useState({
    cpu: 23,
    memory: 45,
    network: 67
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setServerLoad({
        cpu: Math.floor(Math.random() * 30) + 15,
        memory: Math.floor(Math.random() * 20) + 40,
        network: Math.floor(Math.random() * 40) + 50
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const schedule = [
    { day: "Monday", status: "active", uptime: "99.9%", hours: "24/7", load: Math.floor(Math.random() * 30) + 70 },
    { day: "Tuesday", status: "active", uptime: "99.8%", hours: "24/7", load: Math.floor(Math.random() * 30) + 70 },
    { day: "Wednesday", status: "active", uptime: "99.9%", hours: "24/7", load: Math.floor(Math.random() * 30) + 70 },
    { day: "Thursday", status: "active", uptime: "99.7%", hours: "24/7", load: Math.floor(Math.random() * 30) + 70 },
    { day: "Friday", status: "active", uptime: "99.9%", hours: "24/7", load: Math.floor(Math.random() * 30) + 70 },
    { day: "Saturday", status: "active", uptime: "99.8%", hours: "24/7", load: Math.floor(Math.random() * 30) + 70 },
    { day: "Sunday", status: "active", uptime: "99.9%", hours: "24/7", load: Math.floor(Math.random() * 30) + 70 }
  ];

  const currentDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

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

        <div className="max-w-6xl mx-auto">
          {/* Live Server Status */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Current Time</h3>
                <Clock className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-2xl font-mono text-blue-400">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="text-sm text-gray-400 mt-1">
                {currentTime.toLocaleDateString()}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Server Load</h3>
                <Server className="h-5 w-5 text-green-400" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">CPU</span>
                  <span className="text-white">{serverLoad.cpu}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${serverLoad.cpu}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Network Status</h3>
                <Wifi className="h-5 w-5 text-purple-400" />
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Optimal</span>
              </div>
              <div className="text-sm text-gray-400 mt-1">
                {serverLoad.network}ms latency
              </div>
            </div>
          </div>

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
                  <Activity className="h-6 w-6 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">24/7 Support</h3>
                  <p className="text-gray-400">Round-the-clock assistance</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                    item.day === currentDay 
                      ? 'bg-blue-600/20 border border-blue-400/30' 
                      : 'bg-gray-700/30 hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-5 w-5 text-blue-400" />
                    <span className={`font-semibold ${item.day === currentDay ? 'text-blue-400' : 'text-white'}`}>
                      {item.day}
                      {item.day === currentDay && <span className="ml-2 text-xs bg-blue-500 px-2 py-1 rounded-full">Today</span>}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">{item.hours}</span>
                    </div>
                    <div className="text-green-400 font-semibold">
                      {item.uptime}
                    </div>
                    <div className="text-blue-400 font-mono">
                      {item.load}% load
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

export default AnimatedSchedule;