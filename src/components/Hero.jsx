import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Build, launch, and scale your digital products.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600">
            We partner with visionary founders and businesses to craft exceptional web experiences that drive results.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a 
              href="#contact" 
              className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="#services" 
              className="text-gray-600 font-semibold hover:text-gray-900 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
