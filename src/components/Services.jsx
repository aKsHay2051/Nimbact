import React from "react";
import { logEvent } from "../utils/analytics";

const Services = () => {
  const whatsappNumber =
    process.env.REACT_APP_WHATSAPP_NUMBER?.replace(/\D/g, "") || "";

  const services = [
    {
      title: "Web Application Development",
      description:
        "Custom web applications built with modern technologies. Scalable solutions designed to meet your business requirements.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Full-Stack Development",
        "Database Integration",
        "API Development",
        "Cloud Deployment"
      ],
    },
    {
      title: "Business Websites",
      description:
        "Professional websites for businesses of all sizes. Modern, responsive designs that help establish your online presence.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
        </svg>
      ),
      features: [
        "Responsive Design",
        "Content Management",
        "SEO Optimization",
        "Analytics Integration"
      ],
    },
    {
      title: "Technical Support & Maintenance",
      description:
        "Ongoing technical support and maintenance services to keep your applications running smoothly and up-to-date.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: [
        "Performance Monitoring",
        "Security Updates",
        "Bug Fixes",
        "Feature Enhancements"
      ],
    },
  ];

  const handleConsultation = () => {
    logEvent(
      "Consultation Requested",
      "Consultation Requested",
      "Consultation Requested"
    );
    window.location.href = `https://wa.me/${whatsappNumber}`;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Main heading gradient to brand colors */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-emerald-600 bg-clip-text text-transparent sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions designed to help your business succeed online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
                    {/* Checkmark icon color changed to vibrant green */}
                    <svg
                      className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={handleConsultation}
                className="w-full bg-gradient-to-r from-blue-700 to-emerald-600 text-white py-2 px-4 rounded-lg hover:from-blue-800 hover:to-emerald-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Request Consultation
              </button>
            </div>
          ))}
        </div>       
      </div>
    </section>
  );
};

export default Services;