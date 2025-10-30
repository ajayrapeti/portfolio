import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaLink } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-hero"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title">Connect with me :)</h2>
          <p className="contact-subtitle">
            I'm here for inquiries, collaborations & job opportunities! ✨
          </p>
        </motion.div>

        <div className="contact-cards">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>Email Me</h3>
            <p>Shoot me an email, I'll get back to you asap.</p>
            <a href="mailto:ajayrapeti117@email.com" className="contact-button">
              ajayrapeti117@email.com
            </a>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Connect on LinkedIn</h3>
            <p>Let's connect and share valuable insights.</p>
            <a href="https://linkedin.com/in/ajay-rapeti" target="_blank" rel="noopener noreferrer" className="contact-button">
              linkedin.com/in/ajay-rapeti
            </a>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Stay Social</h3>
            <p>Catch all the latest updates with me.</p>
            <div className="social-icons-grid">
              <a href="https://linkedin.com/in/ajay-rapeti" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ajayrapeti" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaGithub />
              </a>
              <a href="mailto:ajayrapeti117@email.com" className="social-icon-link">
                <FaEnvelope />
              </a>
              <a href="tel:+918106054591" className="social-icon-link">
                <FaPhone />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="get-in-touch"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Get in touch</h3>
          <div className="touch-info">
            <a href="mailto:ajayrapeti117@email.com" className="touch-email">
              ajayrapeti117@email.com
            </a>
            <a href="https://drive.google.com/file/d/1yLs5pg7pY7HZ5X85QjLg_GlOHKEAWvw7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="touch-resume">
              💬 Resume-Ajay-Rapeti.pdf
            </a>
          </div>
          <div className="touch-socials">
            <a href="https://linkedin.com/in/ajay-rapeti" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ajayrapeti" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:ajayrapeti117@email.com">
              <FaEnvelope />
            </a>
            <a href="tel:+918106054591">
              <FaPhone />
            </a>
          </div>
        </motion.div>

        <footer className="footer">
          <p>© 2025 Ajay Rapeti. Built with React & ❤️</p>
          <p>📍 Andhra Pradesh, India</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
