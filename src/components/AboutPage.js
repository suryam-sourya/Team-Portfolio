import React from 'react';
import { NavBar } from './NavBar'; // Reuse NavBar
import { About } from './About'; // Your About component
import { Footer } from './Footer';

export const AboutPage = () => {
  return (
    <>
      <NavBar /> 
      <div><About /></div>
           
     <Footer/>
    </>
    
  );
};
