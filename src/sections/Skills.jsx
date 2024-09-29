// src/sections/Skills.jsx
import React from 'react';
import content from '../content.json';
import { getIconComponent } from '../utils/iconMapper';

const Skills = () => {
  const { skills } = content;

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 px-4">
      <div className="container mx-auto text-center"> {/* Center alignment for section */}
        <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-10">Skills</h2> {/* Title centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center"> {/* Responsive grid layout */}
          {Object.entries(skills).map(([category, skillsList]) => (
            <div key={category} className="w-full max-w-sm"> {/* Constrain max width */}
              <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-200 mb-6 capitalize">{category}</h3>
              <ul className="space-y-4">
                {skillsList.map((skill) => (
                  <li key={skill.name} className="flex justify-center items-center space-x-4"> {/* Align each skill icon and name */}
                    {getIconComponent(skill.icon, skill.name)}
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
