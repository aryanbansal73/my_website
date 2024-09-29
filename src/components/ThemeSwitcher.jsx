// src/components/ThemeSwitcher.jsx
import React from 'react';

const ThemeSwitcher = ({ theme, setTheme }) => {
  const themes = ['theme-default', 'theme-dark']; // Add more themes as needed

  return (
    <div className="fixed bottom-5 right-5 flex space-x-2">
      {themes.map((th) => (
        <button
          key={th}
          onClick={() => setTheme(th)}
          className={`w-4 h-4 rounded-full ${th === 'theme-default' ? 'bg-blue-500' : 'bg-gray-800'}`}
          title={th.replace('theme-', '')}
        ></button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
