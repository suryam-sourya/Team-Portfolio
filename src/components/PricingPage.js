// src/components/tech/TechPage.js
import React from 'react';
import { NavBar } from './NavBar'; // Reuse NavBar
import Pricing from './Pricing.js';
import { Footer } from './Footer';

export const PricingPage = () => {
  return (
    <div className="tech-page">
      <NavBar /> 
      <Pricing/>    
      <Footer className="tech-footer" /> {/* Add the tech-footer class */}
    </div>
  );
};
