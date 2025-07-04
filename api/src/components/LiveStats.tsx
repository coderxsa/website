import React, { useState, useEffect } from 'react';
import { Users, Activity, Zap, TrendingUp, Server, Clock } from 'lucide-react';

const LiveStats = () => {
  const [stats, setStats] = useState({
    activeUsers: 1,
    totalMessages: 1,
    uptime: 99.9,
    serversOnline: 12,
    dailyLobbies: 1,
    responseTime: 0.3
  });

  const [animatedStats, setAnimatedStats] = useState({
    activeUsers: 0,
    totalMessages: 0,
    uptime: 0,
    serversOnline: 0,
    dailyLobbies: 0,
    responseTime: 0
  });

  // Animate counters on mount
  useEffect(() => {
    const duration = 60000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const animateValue = (start: number, end: number, callback: (value: number) => void) => {
      let current = start;
      const increment = (end - start) / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
          current = end;
          clearInterval(timer);
        }
        callback(Math.floor(current * 10) / 10);
      }, stepDuration);
    };

    // Animate all stats
    animateValue(0, stats.activeUsers, (value) => 
      setAnimatedStats(prev => ({ ...prev, activeUsers: Math.floor(value) }))
    );
    animateValue(0, stats.totalMessages, (value) => 
      setAnimatedStats(prev => ({ ...prev, totalMessages: Math.floor(value) }))
    );
    animateValue(0, stats.uptime, (value) => 
      setAnimatedStats(prev => ({ ...prev, uptime: value }))
    );
    animateValue(0, stats.serversOnline, (value) => 
      setAnimatedStats(prev => ({ ...prev, serversOnline: Math.floor(value) }))
    );
    animateValue(0, stats.dailyLobbies, (value) => 
      setAnimatedStats(prev => ({ ...prev, dailyLobbies: Math.floor(value) }))
    );
    animateValue(0, stats.responseTime, (value) => 
      setAnimatedStats(prev => ({ ...prev, responseTime: value }))
    );
  }, []);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3) - 1,
        totalMessages: prev.totalMessages + Math.floor(Math.random() * 5) + 1,
        dailyLobbies: prev.dailyLobbies + Math.floor(Math.random() * 2),
        responseTime: Math.max(0.1, prev.responseTime + (Math.random() - 0.5) * 0.1)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Update animated values when stats change
  useEffect(() => {
    setAnimatedStats(stats);
  }, [stats]);

  const statItems = [
    {
      icon: Users,
      label: "Active Users",
      value: animatedStats.activeUsers.toLocaleString(),
      color: "from-blue-500 to-cyan-500",
      pulse: true
    },
    {
      icon: Activity,
      label: "Messages Today",
      value: animatedStats.totalMessages.toLocaleString(),
      color: "from-green-500 to-emerald-500",
      pulse: false
    },
    {
      icon: TrendingUp,
      label: "Uptime",
      value: `${animatedStats.uptime.toFixed(1)}%`,
      color: "from-purple-500 to-pink-500",
      pulse: true
    },
    {
      icon: Server,
      label: "Servers Online",
      value: animatedStats.serversOnline.toString(),
      color: "from-orange-500 to-red-500",
      pulse: true
    },
    {
      icon: Zap,
      label: "Daily Lobbies",
      value: animatedStats.dailyLobbies.toLocaleString(),
      color: "from-indigo-500 to-purple-500",
      pulse: false
    },
    {
      icon: Clock,
      label: "Response Time",
      value: `${animatedStats.responseTime.toFixed(1)}s`,
      color: "from-teal-500 to-cyan-500",
      pulse: false
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Live Statistics
          </h2>
          <p className="text-xl text-gray-300">
            Real-time data from our premium bot services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {statItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 mx-auto ${item.pulse ? 'animate-pulse' : ''}`}>
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1 font-mono">
                  {item.value}
                </div>
                <div className="text-sm text-gray-400">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Activity Feed */}
        {/* Live Activity Feed 
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Activity className="h-5 w-5 text-green-400 mr-2 animate-pulse" />
              Live Activity Feed
            </h3>
            <div className="space-y-3">
              <LiveActivityItem 
                action="WhatsApp Bot activated"
                user="User #1247"
                time="2 seconds ago"
                type="success"
              />
              <LiveActivityItem 
                action="Fortnite lobby created"
                user="User #892"
                time="8 seconds ago"
                type="info"
              />
              <LiveActivityItem 
                action="Message sent successfully"
                user="User #1156"
                time="15 seconds ago"
                type="success"
              />
              <LiveActivityItem 
                action="New user registered"
                user="User #1248"
                time="23 seconds ago"
                type="new"
              />
            </div>
            
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

const LiveActivityItem = ({ action, user, time, type }: {
  action: string;
  user: string;
  time: string;
  type: 'success' | 'info' | 'new';
}) => {
  const colors = {
    success: 'text-green-400',
    info: 'text-blue-400',
    new: 'text-purple-400'
  };

  return (
    <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg animate-fade-in">
      <div className="flex items-center space-x-3">
        <div className={`w-2 h-2 rounded-full ${colors[type]} animate-pulse`}></div>
        <span className="text-gray-300">{action}</span>
        <span className="text-gray-500 text-sm">by {user}</span>
      </div>
      <span className="text-gray-400 text-sm">{time}</span>
    </div>
  );
};

export default LiveStats;