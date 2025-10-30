import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="navbar-logo">Ajay Rapeti</div>
        <div className="navbar-menu">
          <button onClick={() => scrollToSection('projects')} className="nav-link">My Work</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">Resume</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
