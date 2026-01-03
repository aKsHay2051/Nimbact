import React from 'react';

const steps = [
  {
    name: 'Step 1',
    title: 'Discovery & Strategy',
    description: 'We start by understanding your vision, goals, and audience to build a comprehensive project strategy.'
  },
  {
    name: 'Step 2',
    title: 'Design & Development',
    description: 'Our team designs a seamless user experience and develops a robust, scalable application with clean code.'
  },
  {
    name: 'Step 3',
    title: 'Launch & Optimization',
    description: 'We deploy your application and provide ongoing support and optimization to ensure its long-term performance.'
  }
];

const Process = () => {
  return (
    <section id="process" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Our Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            A streamlined and transparent process to bring your vision to life.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index}>
              <p className="text-sm font-semibold text-gray-900">{step.name}</p>
              <h3 className="mt-2 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
