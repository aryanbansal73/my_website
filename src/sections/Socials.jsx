// src/sections/Socials.jsx
import React from 'react';
import content from '../content.json';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const Socials = () => {
  const { socials } = content;

  const socialIcons = {
    twitter: <FaTwitter className="w-6 h-6" />,
    linkedin: <FaLinkedin className="w-6 h-6" />,
    github: <FaGithub className="w-6 h-6" />,
    youtube: <FaYoutube className="w-6 h-6" />,
    // Add more as needed
  };

  return (
    <section id="socials" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">Connect with Me</h2>
        <div className="mt-10 flex justify-center space-x-6">
          {Object.entries(socials).map(([platform, link]) => (
            <a key={platform} href={link} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-500">
              {socialIcons[platform] || null}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;

