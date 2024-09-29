// src/sections/Landing.jsx
import React, { useEffect, useState } from 'react'; // Import useState
import { Link } from 'react-scroll';
import content from '../content.json';
// import particlesJS from 'particles.js'; // Import particlesJS
import 'particles.js/particles';
const particlesJS = window.particlesJS;

const Landing = () => {
    const { landing } = content;
    const [particlesInitialized, setParticlesInitialized] = useState(false); // State to track particles initialization
  
    // Initialize particlesJS on component mount
    useEffect(() => {
        const landingSection = document.getElementById('landing');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setParticlesInitialized(true); // Set to true when in view
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

        if (landingSection) {
            observer.observe(landingSection);
        }

        return () => {
            if (landingSection) {
                observer.unobserve(landingSection);
            }
        };
    }, []);

    // Initialize particlesJS only once
    useEffect(() => {
        if (particlesInitialized) {
            particlesJS("particles-js", {
                particles: {
                    number: { value: 300, density: { enable: true, value_area: 500 } },
                    color: { value: "#000000" },
                    shape: {
                        type: "polygon",
                        stroke: { width: 1, color: "#000000" },
                        polygon: { nb_sides: 5 },
                    },
                    opacity: { value: 1, random: false },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 100,
                        color: "#000000",
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 10,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                    },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onclick: { enable: true, mode: "push" },
                        onhover: { enable: true, mode: "repulse" },
                        onDiv: {
                            selectors: "#landing h1, #move_to_about",
                            enable: true,
                            mode: "bubble",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: { distance: 200, line_linked: { opacity: 0.6 } },
                        bubble: { distance: 250, size: 10, duration: 1, opacity: 2, speed: 50 },
                        repulse: { distance: 100, duration: 0.3 },
                        push: { particles_nb: 3 },
                        remove: { particles_nb: 2 },
                    },
                },
                retina_detect: true,
            });
        }
    }, [particlesInitialized]);
  
    return (
        <section id="landing" className="h-screen flex flex-col justify-center items-center bg-cover bg-center px-4 relative" style={{ userSelect: 'none' }}>
          {particlesInitialized && <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white relative z-10">{landing.title}</h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300 relative z-10">{landing.subtitle}</p>
          <Link 
              id='move_to_about'
              to="about"
              smooth={true}
              duration={500}
              className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl relative z-10"
          >
            {landing.cta}
          </Link>
        </section>
    );
};


export default Landing;
