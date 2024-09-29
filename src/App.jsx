// src/App.jsx
import React, { useEffect, useState, lazy, Suspense } from 'react'; // Added lazy and Suspense
import Navbar from './components/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher';
import Landing from './sections/Landing';
import About from './sections/About';
import Skills from './sections/Skills';
import Experiences from './sections/Experiences';
import Footer from './components/Footer';
// import ContentForm from './components/form';
import content from './content.json';

// Lazy load components
const Projects = lazy(() => import('./sections/Projects'));
const OpenSource = lazy(() => import('./sections/OpenSource'));
const Competitive = lazy(() => import('./sections/Competitive'));

const App = () => {
  const [theme, setTheme] = useState('theme-default');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Navbar />
      {/* <ThemeSwitcher theme={theme} setTheme={setTheme} /> */}
      <Landing />
      <About />
      <Skills />
      <Experiences />
      <Suspense fallback={<div>Loading...</div>}> {/* Added Suspense for lazy loading */}
        {content.projects && <Projects />} {/* Projects Section */}
        {content.opensource && content.opensource.length > 0 && <OpenSource />}
        {content.competitiveWebsites && <Competitive />} {/* Competitive Section */}
      </Suspense>
      {/* <ContentForm/> */}
      <Footer />
    </div>
  );
};

export default App;