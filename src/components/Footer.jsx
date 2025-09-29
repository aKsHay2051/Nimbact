import React, { useState } from 'react';

const TextHoverEffect = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-3xl font-bold text-blue-900 relative z-10">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="inline-block transition-all duration-300"
            style={{
              transform: isHovered ? `translateY(-8px) rotate(${Math.random() * 10 - 5}deg)` : 'translateY(0) rotate(0deg)',
              transitionDelay: `${index * 0.03}s`,
              color: isHovered ? '#10b981' : '#1e3a8a'
            }}
          >
            {char}
          </span>
        ))}
      </h3>
      
      {/* Animated background blur effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 opacity-0 blur-xl transition-opacity duration-500 -z-10"
        style={{
          opacity: isHovered ? 0.3 : 0,
          transform: 'scale(1.2)'
        }}
      />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <TextHoverEffect text="DevLuz" />
            <p className="mt-4 text-gray-600 leading-relaxed">
              Building modern web solutions with cutting-edge technologies.
            </p>
            
         
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#services" 
                  className="text-gray-600 hover:text-emerald-500 transition-all duration-200 inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  className="text-gray-600 hover:text-emerald-500 transition-all duration-200 inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Process
                </a>
              </li>
              <li>
                <a 
                  href="#tech" 
                  className="text-gray-600 hover:text-emerald-500 transition-all duration-200 inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Tech Stack
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="text-gray-600 hover:text-emerald-500 transition-all duration-200 inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.fiverr.com/s/ZmvdGqa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-500 transition-all duration-200 inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Fiverr
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER || ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-500 transition-all duration-200 inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-600 hover:text-emerald-500 transition-all duration-200 inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} DevLuz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;