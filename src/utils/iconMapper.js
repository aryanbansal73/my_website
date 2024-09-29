// src/utils/iconMapper.js
import React from 'react';
import { FaJava } from "react-icons/fa";

import {
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiGit,
  SiDocker,
  SiWebpack,
  SiPython,
  SiFlask,
  SiPandas,
  SiTensorflow,
  SiLinux,
  SiMysql,
  SiMongodb,
  SiKubernetes,
  SiC,
  SiCplusplus,
  SiJavascript
  // Import additional icons as needed
} from 'react-icons/si';
import { FaQuestion } from 'react-icons/fa'; // Default Icon

// Mapping of skill names to their corresponding icon components
const skillNameToIcon = {
  React: SiReact,
  Angular: SiAngular,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  Django: SiDjango,
  Git: SiGit,
  Docker: SiDocker,
  Webpack: SiWebpack,
  Python: SiPython,
  Flask: SiFlask, // Added Flask
  Pandas: SiPandas, // Added Pandas
  Tensorflow: SiTensorflow, // Added Tensorflow
  Linux: SiLinux, // Added Linux
  SQL: SiMysql, // Added SQL
  MongoDB: SiMongodb, // Added MongoDB
  Kubernetes: SiKubernetes, // Added Kubernete
  C: SiC, // Added C
  Cplusplus: SiCplusplus, // Added C++
  Java: FaJava, // Added Java
  Javascript: SiJavascript, // Added JavaScript
  // Add more mappings as necessary
};

/**
 * Retrieves the corresponding icon component based on the skill name or icon identifier.
 * @param {string} iconName - The name of the icon component (e.g., 'SiReact').
 * @param {string} skillName - The name of the skill (e.g., 'React').
 * @returns {React.Component} - The icon component or a default icon if not found.
 */
export const getIconComponent = (iconName, skillName) => {
  if (iconName) {
    // Attempt to use the provided iconName
    const IconComponent = skillNameToIcon[iconName];
    if (IconComponent) {
      return <IconComponent className="text-2xl" />;
    } else {
      console.warn(`Icon "${iconName}" not found for skill "${skillName}". Falling back to default icon.`);
    }
  }

  // Fallback: Attempt to map skillName to an icon
  const FallbackIcon = skillNameToIcon[skillName];
  if (FallbackIcon) {
    return <FallbackIcon className="text-2xl" />;
  }

  // Final Fallback: Use the default icon
  console.warn(`No icon found for skill "${skillName}". Using default icon.`);
  return <FaQuestion className="text-2xl" />;
};
