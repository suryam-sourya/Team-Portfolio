import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logoCodeDploy.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            className={scrolled ? "scrolled-logo" : "default-logo"}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Link to="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Link>
            <Link to="/tech-stack" className={activeLink === 'tech-stack' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tech-stack')}>
            Technologies
            </Link>
            <Nav.Link href="/#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Services</Nav.Link>
            
            <Nav.Link href="/#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Our Work</Nav.Link>
            
            {/* Add the Tech Stack link here */}
            
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/codedeploy/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.instagram.com/codedeploy_?igsh=NHcxejk2eDM0YW02" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <HashLink to='/#connect'>
              <button className="vvd"><span>Start a Project</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
