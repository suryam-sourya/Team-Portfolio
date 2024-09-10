// src/components/tech/TechPage.js
import React from 'react';
import { NavBar } from './NavBar'; // Reuse NavBar
import { Tech } from './Tech'; // Your Tech component
import { Footer } from './Footer';

export const TechPage = () => {
  return (
    <div className="tech-page">
      <NavBar /> 
      <Tech />    
      <Footer className="tech-footer" /> {/* Add the tech-footer class */}
    </div>
  );
};
