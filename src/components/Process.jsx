import React from "react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Understand Your Needs",
      description:
        "We start with a friendly chat to learn about your goals and what you want from your website.",
    },
    {
      number: "02",
      title: "Design & Build",
      description:
        "We create a modern, responsive website that matches your business style and requirements.",
    },
    {
      number: "03",
      title: "Launch & Support",
      description:
        "We deliver your site and provide ongoing help with updates and maintenance if needed.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Main heading gradient to brand colors */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-emerald-600 bg-clip-text text-transparent sm:text-4xl">
            Our Simple Process
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We keep things clear and straightforward — no jargon, just simple
            steps to get your website live.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-emerald-600 text-white rounded-lg flex items-center justify-center font-semibold mx-auto mb-4 shadow-md">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

   
      </div>
    </section>
  );
};

export default Process;