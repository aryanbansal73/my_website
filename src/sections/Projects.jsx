// src/sections/Projects.jsx
import React from 'react';
import content from '../content.json';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineLink } from 'react-icons/ai';

const Projects = () => {
  const { projects } = content;

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <ul className="mb-4">
                {project.tech.map((tech, i) => (
                  <li key={i} className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-500">
                    <FaGithub className="text-2xl" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-500">
                    <AiOutlineLink className="text-2xl" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
