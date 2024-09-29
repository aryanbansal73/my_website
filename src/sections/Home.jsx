// src/sections/Home.jsx
import React from 'react';
import content from '../content.json';

const Home = () => {
  const { home } = content;

  return (
    <section id="home" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white">{home.greeting}</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">{home.description}</p>
      </div>
    </section>
  );
};

export default Home;