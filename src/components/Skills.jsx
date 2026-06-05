import React from 'react';
import { Code2, Server, Database, Wrench, Container } from 'lucide-react';

const Skills = ({ isDark }) => {
  const categoryIcons = {
    frontend: Code2,
    backend: Server,
    database: Database,
    tools: Wrench,
    DevOps: Container
  };

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools & Other',
    DevOps: 'DevOps'
  };

  const skills = {
    frontend: [
      { name: 'JavaScript', percent: 85 },
      { name: 'React', percent: 80 },
      { name: 'Tailwind CSS', percent: 75 },
      { name: 'Next.js', percent: 70 }
    ],
    backend: [
      { name: 'Node.js', percent: 80 },
      { name: 'Express.js', percent: 75 },
      { name: 'Spring boot', percent: 70 },
      { name: 'REST APIs', percent: 75 }
    ],
    database: [
      { name: 'MySQL', percent: 82 },
      { name: 'MongoDB', percent: 85 },
      { name: 'PostgreSQL', percent: 70 },
      { name: 'Redis', percent: 70 }

    ],
    tools: [
      { name: 'Github', percent: 85 },
      { name: 'Postman ', percent: 80 },
      { name: 'VS Code', percent: 90 },
      { name: 'Intellij', percent: 90 },
    ],
    DevOps: [
      { name: 'AWS', percent: 75 },
      { name: 'GCP', percent: 75 },
      { name: 'Docker', percent: 70 },
      { name: 'Kubernetes', percent: 60 },
      { name: 'GitHub Actions', percent: 60 },
    ]
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-16 bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">Skills</h2>
        
        <div className="grid grid-cols-5 gap-6">
          {Object.entries(skills).map(([category, skillList]) => {
            const IconComponent = categoryIcons[category];
            return (
              <div key={category} className={`rounded-2xl ${isDark ? 'bg-gray-800/40' : 'bg-white/40'} backdrop-blur-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105`}>
                <div className="flex items-center space-x-3 mb-6">
                  <IconComponent className="w-6 h-6 text-fuchsia-500" />
                  <h3 className="text-xl font-bold text-fuchsia-500">{categoryLabels[category]}</h3>
                </div>
                <div className="space-y-4">
                  {skillList.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.percent}%</span>
                      </div>
                      <div className={`w-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                        <div className="h-full bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 rounded-full transition-all duration-1000" style={{ width: `${skill.percent}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;