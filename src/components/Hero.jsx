import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-greeting">Hello,</h1>
          <h1 className="hero-name">Ajay here! </h1>
          
          <p className="hero-description">
            I'm a <span className="highlight">🎓 B.Tech Computer Science (Data Science) graduate</span> and <span className="highlight">Founder of CareerVista AI</span>, a pre-seed startup transforming career guidance through AI and LLM-powered predictive modeling.
          </p>
          
          <p className="hero-description">
            Skilled in <strong>Machine Learning, NLP, Full-Stack Development</strong>, and <strong>Cloud-Native Systems</strong>. Driven by a passion for data-driven innovation and advancing the frontiers of Artificial Intelligence.
          </p>
          
          <p className="hero-tagline">
            All things ML · Full-Stack Development · Data Science · AI Innovation.<br />
            Yep, I do them all.
          </p>
          
          <p className="hero-quote">
            Let's build experiences that are not just functional but also inspiring. 
            Experiences that live, breathe, and make a difference.
          </p>
          
          <div className="hero-tagline-section">
            <p className="tagline-text">Hallo Zusammen! 🦁</p>
            <div className="social-icons">
              <a href="https://linkedin.com/in/ajay-rapeti" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ajayrapeti" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="mailto:ajayrapeti117@email.com" className="social-icon">
                <FaEnvelope />
              </a>
              <a href="tel:+918106054591" className="social-icon">
                <FaPhone />
              </a>
            </div>
          </div>
          
          <div className="hero-buttons">
            <a href="https://drive.google.com/file/d/1yLs5pg7pY7HZ5X85QjLg_GlOHKEAWvw7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary">Resume</a>
            <a href="mailto:ajayrapeti117@email.com" className="btn-secondary">ajayrapeti117@email.com</a>
          </div>
        </motion.div>
        
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-container">
            <img src="/profile.jpg" alt="Ajay Rapeti" className="profile-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
