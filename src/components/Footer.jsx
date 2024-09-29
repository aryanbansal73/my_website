// src/components/Footer.jsx
import React from 'react';
import Socials from './Socials';
import content from '../content.json';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const { contact } = content;
  const {details} =  content ;

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Contact Information and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Details */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <ul>
              <li className="flex items-center mb-2">
                <FaEnvelope className="mr-2" />
                <a href={`mailto:${contact.email}`} className="hover:underline">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center mb-2">
                <FaPhone className="mr-2" />
                <a href={`tel:${contact.phone}`} className="hover:underline">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
            <Socials />
          </div>
        </div>

        {/* Additional Footer Links and Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          {/* Quick Links */}
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="landing"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:underline"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="experiences"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:underline"
                >
                  Experiences
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <p>&copy; {new Date().getFullYear()} {details.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
