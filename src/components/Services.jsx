import React from 'react';

const services = [
  {
    title: 'Web Application Development',
    description: 'We build scalable, secure, and high-performance web applications tailored to your specific business needs.'
  },
  {
    title: 'Business & Landing Pages',
    description: 'We create beautiful, responsive, and conversion-optimized websites that effectively tell your brand story.'
  },
  {
    title: 'Support & Maintenance',
    description: 'We provide ongoing technical support and performance monitoring to ensure your digital assets are always running smoothly.'
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We offer a range of services to help you build and grow your digital presence.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
