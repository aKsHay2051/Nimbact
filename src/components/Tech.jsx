import React from 'react';
import { DiReact, DiNodejs, DiPostgresql, DiMongodb, DiAws } from 'react-icons/di';
import { SiNextdotjs, SiTailwindcss, SiVercel } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: <DiReact size={48} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={48} /> },
  { name: 'Node.js', icon: <DiNodejs size={48} /> },
  { name: 'PostgreSQL', icon: <DiPostgresql size={48} /> },
  { name: 'MongoDB', icon: <DiMongodb size={48} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} /> },
  { name: 'AWS', icon: <DiAws size={48} /> },
  { name: 'Vercel', icon: <SiVercel size={48} /> },
];

const Tech = () => {
  return (
    <section id="tech" className="bg-gray-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Our Technology Stack</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We work with modern technologies to build high-quality digital products.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 text-gray-600">
          {technologies.map(tech => (
            <div key={tech.name} className="flex items-center justify-center flex-col">
              {tech.icon}
              <p className="mt-2 text-sm font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
