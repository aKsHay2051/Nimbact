import React from 'react';
import { Braces, Server, Database, Cloud } from 'lucide-react';

const tech = [
  { category: 'Frontend', names: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'], icon: <Braces size={24} className="text-accent" /> },
  { category: 'Backend', names: ['Node.js', 'Express', 'tRPC', 'Next-Auth'], icon: <Server size={24} className="text-accent" /> },
  { category: 'Database', names: ['PostgreSQL', 'MongoDB', 'Prisma', 'MySQL'], icon: <Database size={24} className="text-accent" /> },
  { category: 'DevOps', names: ['Docker', 'AWS', 'Vercel', 'Firebase'], icon: <Cloud size={24} className="text-accent" /> },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">Technology We Use</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-dark/70">
            We leverage a modern, robust, and scalable tech stack to deliver exceptional results.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {tech.map((category) => (
            <div key={category.category} className="bg-light-contrast rounded-xl shadow-card p-6 text-center">
              <div className="bg-accent/10 p-3 rounded-lg inline-block mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-dark mb-4">{category.category}</h3>
              <div className="space-y-2">
                {category.names.map((name) => (
                  <p key={name} className="text-dark/70">{name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
