// src/sections/OpenSource.jsx
import React from 'react';
import content from '../content.json';

const OpenSource = () => {
  const { opensource } = content;

  return (
    <section id="opensource" className="py-20 bg-gray-100 dark:bg-gray-900 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">Open Source Contributions</h2>
        <div className="mt-10 space-y-6">
          {opensource.map((proj, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{proj.project}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;

