import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = {
    'Languages': ['Python', 'R', 'JavaScript', 'Java', 'SQL', 'C'],
    'Frameworks & Libraries': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'React.js', 'Node.js', 'Django', 'Seaborn', 'Plotly'],
    'Databases': ['MySQL', 'PostgreSQL', 'MongoDB'],
    'Tools': ['Git', 'GitHub', 'Power BI', 'Postman', 'Figma', 'Docker', 'Kubernetes'],
    'Environments': ['VS Code', 'Jupyter Notebook', 'Google Colab', 'Kaggle']
  };

  const certifications = [
    'Advanced R Programming for Data Analytics in Business (Elite) – NPTEL',
    'Cloud Computing (Elite) – NPTEL',
    'Data Science Course Completion Certificate – Netzwerk Academy'
  ];

  const leadership = [
    {
      role: 'Student Co-ordinator, ISTE Club',
      description: 'Led workshops and technical quizzes integrating applied Machine Learning concepts.'
    },
    {
      role: 'Student Co-ordinator, SAC Club',
      description: 'Directed cross-disciplinary technical design projects.'
    },
    {
      role: 'Student  Placement Co-ordinator',
      description: 'Collaborated with recruiters, increasing student placement opportunities and industry partnerships.'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Hello, I'm <strong>Ajay Rapeti</strong>, an entrepreneur at heart, a problem solver with a vibrant following, 
            a passionate designer with a rich background in technology.
          </p>
          <p className="about-text">
            As an AI/ML Engineer and Founder of <strong>CareerVista AI</strong>, I have a real passion for creating 
            solutions that people love to use. I believe good design is about making complicated things simple and 
            putting the user's needs at the heart of every project.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="section-icon">
            <FaGraduationCap />
          </div>
          <h3 className="subsection-title">Education</h3>
          <div className="education-card">
            <h4>Bachelor of Technology in Computer Science Engineering (Data Science)</h4>
            <p className="institution">Anil Neerukonda Institute of Technology and Sciences (ANITS)</p>
            <p className="location">Andhra Pradesh, India</p>
           <strong> <p className="period">Dec 2021 – May 2025 | CGPA: 8.81 / 10</p> </strong>
            <div className="coursework">
              <strong>Key Course Work:</strong>
              <p>Data Structures & Algorithms, DBMS, OOP, Operating Systems, Machine Learning, Statistics, 
              Programming Concepts for DataScience, Natural Language Processing, Web Technologies, Computer Networks</p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="subsection-title">Technical Skills</h3>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                className="skill-category"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h4 className="skill-category-title">{category}</h4>
                <div className="skill-tags">
                  {items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="certifications-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="section-icon">
            <FaAward />
          </div>
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p>{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          className="leadership-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="section-icon">
            <FaUsers />
          </div>
          <h3 className="subsection-title">Leadership & Clubs</h3>
          <div className="leadership-grid">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                className="leadership-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h4>{item.role}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="experience-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="subsection-title">Experience</h3>
          
          <div className="experience-card">
            <div className="experience-header">
              <h4>Founder & AI/ML Engineer</h4>
              <span className="experience-period">Jul 2025 – Present</span>
            </div>
            <p className="experience-company">CareerVista AI</p>
            <ul className="experience-points">
              <li>Founded an AI-powered career guidance startup providing personalized recommendations for high school students</li>
              <li>Integrated 14+ LLMs achieving 90% prediction accuracy</li>
              <li>Built full-stack platform with React.js, Node.js, TypeScript, and MongoDB</li>
              <li>Deployed architecture with OAuth security</li>
              <li>Impact: Served 100+ users and recommended 150+ scholarships</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <h4>Full Stack Web Developer Intern</h4>
              <span className="experience-period">Apr 2024 – Jul 2024</span>
            </div>
            <p className="experience-company">Edumoon</p>
            <ul className="experience-points">
              <li>Designed interactive Figma prototypes for mentorship platform</li>
              <li>Conducted user research and usability testing</li>
              <li>Delivered high-fidelity MVP improving interface intuitiveness</li>
              <li>
                <a 
                  href="https://www.figma.com/proto/eEp9ZjG9cLJ6zgj18Olb7n/Project-design?node-id=2315-2&node-type=canvas&t=UkoW9j8slIO9PAHQ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2315%3A2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-purple)', fontWeight: 600, textDecoration: 'underline' }}
                >
                  View Figma Prototype →
                </a>
              </li>
              <li>
                <a 
                  href="https://drive.google.com/file/d/156Bj_rU_pW8NM_fx076LDESheJ90CY5s/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-purple)', fontWeight: 600, textDecoration: 'underline' }}
                >
                  View Internship Certificate →
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
