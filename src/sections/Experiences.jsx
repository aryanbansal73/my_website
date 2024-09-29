// src/sections/Experiences.jsx
import React from 'react';
import content from '../content.json';

const Experiences = () => {
  const { experiences } = content;

  return (
    <section id="experiences" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center text-gray-800 dark:text-white mb-10">Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              
              <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white">{experience.company}</h3>
              <h4 className="text-lg font-medium text-center text-gray-600 dark:text-gray-300 mb-2">{experience.title}</h4>
              <p className="text-center text-gray-500 dark:text-gray-400 mb-4">{experience.duration}</p>
              <p className="text-gray-600 dark:text-gray-300 text-center">
              {Array.isArray(experience.description) ? (
                <ul className="list-disc list-inside">
                  {experience.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                experience.description
              )}
            </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
