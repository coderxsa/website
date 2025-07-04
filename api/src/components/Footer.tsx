import React from 'react';
import { Code2, Mail, MessageCircle, Send, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CODERXSA-SERVICES
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional automation solutions for modern businesses. We provide cutting-edge bot services 
              for WhatsApp and gaming platforms with guaranteed uptime and premium support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><MessageCircle className="h-4 w-4 mr-2" />WhatsApp Bot Panel</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fortnite Bot Lobbies</a></li>
              <li><a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                support@coderxsa.com
              </li>
              <li className="flex items-center text-gray-400">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Support
              </li>
              <li>
                <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                  <Send className="h-4 w-4 mr-2" />
                  Telegram Channel
                </a>
              </li>
              <li className="text-gray-400">24/7 Live Chat</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 CODERXSA-SERVICES. All rights reserved. | <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a> | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;