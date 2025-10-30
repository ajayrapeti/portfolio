import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaCertificate, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';
import './Research.css';

const researchData = [
  {
    title: 'Personalized Diet Recommendation System',
    institution: 'ANITS',
    period: 'Jul 2024 – Sep 2024',
    description: 'Developed a personalized diet planning system integrating machine learning and healthcare data to recommend nutrition plans. Implemented KNN with cosine similarity and Random Forest models achieving 94% accuracy.',
    achievements: [
      'Achieved 94% accuracy with cross-validation',
      'Presented at IEM-HEALS 2024',
      'Certificate of Participation'
    ],
    presentationLink: 'https://drive.google.com/file/d/1nKpCPaOTvlkwdiIRGSwm2mugp3vywAFH/view?usp=sharing',
    certificateLink: 'https://drive.google.com/file/d/1RBRRXCgO1lCK_T7-j_G9ixumXjoHcjF6/view?usp=drive_link',
    color: 'blue'
  },
  {
    title: 'Federated Learning-Based Attendance System',
    institution: 'ANITS',
    period: 'Jan 2025 – Apr 2025',
    description: 'Architected a privacy-preserving attendance solution leveraging federated learning and deep learning. Applied MTCNN for face detection and InsightFace embeddings for recognition.',
    achievements: [
      'Presented at ICACTEA-2025',
      'Certificate of Presentation',
      'Proposed blockchain integration for audit trails'
    ],
    paperLink: 'https://drive.google.com/file/d/1jiIvytn0Z00fpWZ1TJSwG3qVpW-u4q0r/view?usp=drive_link',
    certificateLink: 'https://drive.google.com/file/d/1l0sIKZvtd0tpvkHbFLMuaPBRgFTOrsED/view?usp=drive_link',
    color: 'purple'
  }
];

const Research = () => {
  return (
    <section className="research" id="research">
      <div className="research-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Research Experience</h2>
          <p className="section-subtitle">Published papers and conference presentations</p>
        </motion.div>

        <div className="research-grid">
          {researchData.map((research, index) => (
            <motion.div
              key={index}
              className={`research-card research-${research.color}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="research-header">
                <h3 className="research-title">{research.title}</h3>
                <p className="research-meta">
                  {research.institution} | {research.period}
                </p>
              </div>
              
              <p className="research-description">{research.description}</p>
              
              <div className="research-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {research.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="research-links">
                {research.presentationLink && (
                  <a href={research.presentationLink} target="_blank" rel="noopener noreferrer" className="research-link">
                    <FaFileAlt /> Presentation
                  </a>
                )}
                {research.paperLink && (
                  <a href={research.paperLink} target="_blank" rel="noopener noreferrer" className="research-link">
                    <FaFilePdf /> Research Paper
                  </a>
                )}
                {research.certificateLink && (
                  <a href={research.certificateLink} target="_blank" rel="noopener noreferrer" className="research-link">
                    <FaCertificate /> Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
