// src/sections/Competitive.jsx
import React from 'react';
import content from '../content.json';
import { ReactComponent as CodeforcesIcon } from '../icons/codeforces.svg'; // Import SVG as React component
import { ReactComponent as LeetcodeIcon }  from '../icons/leetcode.svg'; // Import SVG as React component

const competitiveIcons = {
  Codeforces: CodeforcesIcon,
  LeetCode: LeetcodeIcon
};

const Competitive = () => {
    const { competitiveWebsites } = content;
  
    return (
        <section id="competitive" className="py-20 bg-gray-100 dark:bg-gray-900 px-4">
        <div className="container mx-auto">
          
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-10">Competitive Programming</h2>
          <div className="flex flex-wrap justify-center space-x-4">
            {competitiveWebsites.map((site, index) => {
              const IconComponent = competitiveIcons[site.name] || CodeforcesIcon; // Fallback to a generic icon
              return (
                <div key={index} className="flex flex-col items-center space-y-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"> {/* Changed to flex-col and added space-y-2 */}
                  <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-blue-600 dark:text-blue-400" />
                  <div>
                    <a href={site.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-800 dark:text-white hover:text-blue-500">
                      {site.name}: {site.handle}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  

export default Competitive;
