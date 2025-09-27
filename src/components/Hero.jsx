import React from "react";

const Hero = () => {
  const availabilityStatus =
    process.env.REACT_APP_AVAILABILITY_STATUS || "available";

  const getStatusConfig = (status) => {
    switch (status) {
      case "busy":
        return {
          message: "Currently Focused on Existing Projects",
          // Keeping red for universal understanding of 'busy'
          styles: "bg-red-100 text-red-800",
          dotStyle: "bg-red-500",
        };
      case "limited":
        return {
          message: "Taking Select Projects",
          // Keeping yellow for universal understanding of 'limited'
          styles: "bg-yellow-100 text-yellow-800",
          dotStyle: "bg-yellow-500",
        };
      case "available":
      default:
        return {
          message: "Ready for New Adventures!",
          // Using vibrant green from logo for 'available'
          styles: "bg-emerald-100 text-emerald-800",
          dotStyle: "bg-emerald-500",
        };
    }
  };

  const statusConfig = getStatusConfig(availabilityStatus);

  return (
    <div className="relative min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-emerald-50 to-white overflow-hidden">
      {" "}
      {/* Background gradient adjusted */}
      {/* Enhanced animated background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Blob colors adjusted to match logo palette */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl animate-blob"></div>
        <div className="absolute top-32 -left-24 w-96 h-96 bg-emerald-100 rounded-full opacity-50 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-48 left-48 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl animate-blob animation-delay-4000"></div>
        {/* Radial gradient adjusted to use a subtle shade of the logo's blue */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(29,78,216,0.04),transparent)]"></div>{" "}
        {/* Using rgba for blue-700 (approx) */}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <div className="inline-block animate-fade-in-up">
            <span
              className={`inline-flex items-center px-4 py-1 rounded-full text-sm font-medium ${statusConfig.styles} mb-8 shadow-sm hover:shadow-md transition-shadow duration-200`}
            >
              {statusConfig.message}
              <span
                className={`ml-2 h-2 w-2 rounded-full ${statusConfig.dotStyle} animate-pulse`}
              ></span>
            </span>
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-fade-in-up animation-delay-200">
            <span className="block">DEDICATED EXPERTISE VERIFIED.</span>
            {/* The core benefit of working with you on a gradient */}
            <span className="block bg-gradient-to-r from-blue-800 to-emerald-600 bg-clip-text text-transparent">
              LEADING USABILITY ZONES.
            </span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl animate-fade-in-up animation-delay-400">
            We are **DevLuz: Fresh Minds Building Amazing Web Experiences.** We
            deliver trust and high performance by turning complex ideas into
            digital platforms focused on real-world effectiveness.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10 animate-fade-in-up animation-delay-600">
            <div className="rounded-md shadow-lg">
              <a
                href="#contact"
                className="group relative w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-700 to-emerald-600 hover:from-blue-800 hover:to-emerald-700 transform transition-all duration-300 hover:scale-105 md:py-4 md:text-lg md:px-10 overflow-hidden"
              >
                {" "}
                {/* Primary button gradient from logo colors */}
                <span className="relative z-10">Let's Chat!</span>
                {/* Inner hover gradient reversed for a subtle effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-emerald-600 to-blue-700 transition-transform duration-300"></div>
                <svg
                  className="relative z-10 ml-2 -mr-1 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-3 rounded-md shadow-lg sm:mt-0 sm:ml-3">
              <a
                href="#services"
                className="group w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-gray-50 transform transition-all duration-300 hover:scale-105 md:py-4 md:text-lg md:px-10"
              >
                {" "}
                {/* Secondary button text color to deep blue */}
                <span>See What We Do</span>
                <svg
                  className="ml-2 -mr-1 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {" "}
              {/* Scroll indicator color to a mid-blue */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        {/* New startup-focused highlight section */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 animate-fade-in-up animation-delay-800">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="text-2xl mb-2">🚀</div>
            <div className="font-semibold text-gray-900">Fast & Eager</div>
            <div className="text-sm text-gray-600">
              Quick turnaround with fresh energy
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="text-2xl mb-2">💡</div>
            <div className="font-semibold text-gray-900">Modern Approach</div>
            <div className="text-sm text-gray-600">
              Latest tech, creative solutions
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="text-2xl mb-2">🤝</div>
            <div className="font-semibold text-gray-900">Personal Touch</div>
            <div className="text-sm text-gray-600">
              Direct communication, real relationships
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
