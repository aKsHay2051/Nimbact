import React from 'react';

const About = () => {
  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Rapid Development",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Modern Solutions",
      description: "Latest technologies and best practices"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Competitive Pricing",
      description: "Quality solutions that fit your budget"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Direct Communication",
      description: "Work directly with the development team"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-emerald-600 bg-clip-text text-transparent sm:text-5xl mb-4">
            About DevLuz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A fresh perspective on web development, combining modern technology with dedicated service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-blue-700 to-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                Our Story
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              Building the Future, One Project at a Time
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              DevLuz represents a new generation of web development talent. We combine cutting-edge technical skills with fresh perspectives to deliver solutions that meet modern business needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              While we're building our portfolio, we bring enthusiasm, dedication, and a commitment to excellence in every project. Our focus is on creating meaningful digital experiences that help businesses grow and succeed online.
            </p>
            
            <div className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-700 to-emerald-600 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-900">Core Strengths</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-700 font-medium">Full-Stack Expertise</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-700 font-medium">Responsive Design</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-700 font-medium">Modern Frameworks</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-700 font-medium">Cloud Deployment</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-600 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Commitment</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-white rounded-xl">
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Support</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-2">Fast</div>
                  <div className="text-sm text-gray-600 font-medium">Delivery</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-white rounded-xl">
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent mb-2">Modern</div>
                  <div className="text-sm text-gray-600 font-medium">Technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-emerald-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-gray-600">
                {value.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;