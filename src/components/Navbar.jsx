// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import content from '../content.json';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);
  const {details} =  content ;
  // Define the sections to include in the navbar with their display labels
  const navbarSections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experiences', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'opensource', label: 'Open Source' },
    { id: 'competitiveWebsites', label: 'CP' }
     // Add Projects section
  ];

  // Filter out sections that are not present in content.json
  const availableSections = navbarSections.filter(section => content[section.id] !== undefined);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <h1 className="text-lg font-bold text-gray-800 dark:text-white">{details.name}</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {availableSections.map((section) => (
            <li key={section.id}>
              <Link
                to={section.id}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-800 dark:text-white hover:text-blue-500 text-sm transition duration-300 ease-in-out"
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-20" onClick={toggleNav}>
          {!nav ? <FaBars className="text-lg text-gray-800 dark:text-white" /> : <FaTimes className="text-lg text-gray-800 dark:text-white" />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-800 flex flex-col justify-center items-center space-y-6 transition-all duration-300 ease-in-out'
          }
        >
          {availableSections.map((section) => (
            <li key={section.id} className="text-lg">
              <Link
                onClick={toggleNav}
                to={section.id}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-800 dark:text-white hover:text-blue-500 transition duration-300 ease-in-out"
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
