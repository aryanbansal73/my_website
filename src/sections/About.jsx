// src/sections/About.jsx
import React from 'react';
import content from '../content.json';
import profileImage from '../my_pic.jpg';

const About = () => {
    const { about } = content;
  
    console.log('Image path:', about.image); 
  
    return (
      <section id="about" className="py-20 px-4 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <img 
            src= {profileImage}
            alt="Profile" 
            className="w-48 h-48 rounded-full object-cover mb-8 md:mb-0 md:mr-8"  
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">About Me</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">{about.bio}</p>
          </div>
        </div>
      </section>
    );
  };

export default About;
