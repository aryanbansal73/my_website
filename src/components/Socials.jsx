// src/components/Socials.jsx
import React from 'react';
import content from '../content.json';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const Socials = () => {
  const { socials } = content;

  const socialIcons = {
    twitter: <FaTwitter className="w-6 h-6" />,
    linkedin: <FaLinkedin className="w-6 h-6" />,
    github: <FaGithub className="w-6 h-6" />,
    youtube: <FaYoutube className="w-6 h-6" />
    // Add more as needed
  };

  return (
    <div className="flex space-x-6">
      {Object.entries(socials).map(([platform, link]) => (
        <a
          key={platform}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
          aria-label={platform}
        >
          {socialIcons[platform] || null}
        </a>
      ))}
    </div>
  );
};

export default Socials;
