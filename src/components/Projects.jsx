import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaVideo } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    id: '01',
    title: 'CareerVista AI',
    subtitle: 'AI-Powered Career Guidance Platform',
    description: 'Founded an AI-powered career guidance startup providing personalized recommendations for high school students using predictive analytics and LLMs. Integrated 14+ LLMs (Meta LLaMA 3.3-70B, Microsoft Phi-3, Mistral 7B, Qwen 2-7B) achieving 90% prediction accuracy.',
    tech: ['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'LLMs'],
    color: 'blue',
    live: 'https://career-vista-ai-12.vercel.app/',
    video: 'https://drive.google.com/file/d/1h-NaNA6WzBNtf79UQYr1NgjFAFYBqEc_/view?usp=drive_link',
    image: '/projects/careervista.jpg'
  },
  {
    id: '02',
    title: 'Federated Learning Attendance System',
    subtitle: 'Privacy-Preserving Face Recognition',
    description: 'Architected a privacy-preserving attendance solution leveraging federated learning and deep learning. Applied MTCNN for face detection and InsightFace embeddings for recognition while preserving local data privacy.',
    tech: ['Python', 'Django', 'PyTorch', 'OpenCV', 'InsightFace', 'MTCNN', 'FedAvg'],
    color: 'orange',
    github: 'https://github.com/ajayrapeti/AI_ATTENDANCE-BASED-ON-FEDERATED-LEARNING',
    image: '/projects/federated-learning.jpg' // Add your screenshot here
  },
  {
    id: '03',
    title: 'Sensovision',
    subtitle: 'Real-Time Face & Emotion Detection',
    description: 'Developed an AI-powered real-time face and emotion detection system that identifies faces, detects emotions (happy, sad, fear, anger), and provides session-based analytics with exportable reports.',
    tech: ['Python', 'Flask', 'OpenCV', 'DeepFace', 'NumPy', 'Pandas'],
    color: 'purple',
    github: 'https://github.com/ajayrapeti/Sensovision',
    image: '/projects/sensovision.jpg' // Add your screenshot here
  },
  {
    id: '04',
    title: 'Personal Finance Tracker',
    subtitle: 'Income & Expense Management System',
    description: 'Developed a full-stack web application to track and manage users\' income and expenses, visualize financial activity over time, and display real-time balance insights on a personal dashboard.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Chart.js'],
    color: 'green',
    github: 'https://github.com/ajayrapeti/financial-management-analysis',
    image: '/projects/finance-tracker.jpg' // Add your screenshot here
  },
  {
    id: '05',
    title: 'Dental Image Segmentation',
    subtitle: 'AI-Based Dental Radiograph Analysis',
    description: 'Implemented an AI-based dental radiograph analysis system using SAM (Segment Anything Model) and attention-enhanced DenseNet201 architecture, achieving 93.93% classification accuracy.',
    tech: ['Python', 'TensorFlow', 'PyTorch', 'SAM', 'DenseNet201', 'OpenCV'],
    color: 'pink',
    github: 'https://github.com/ajayrapeti/segmented_dental_radiology',
    image: '/projects/dental-segmentation.jpg' // Add your screenshot here
  },
  {
    id: '06',
    title: 'Student Assignment Portal',
    subtitle: 'Academic Communication Platform',
    description: 'Developed a capstone MERN application to streamline communication between students and educators. The platform enables students to submit grade-related queries and receive detailed responses.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    color: 'teal',
    github: 'https://github.com/ajayrapeti/assignment_portal',
    image: '/projects/assignment-portal.jpg' // Add your screenshot here
  },
  {
    id: '07',
    title: 'iPhone Sentiment Analysis',
    subtitle: 'BERT Transformer Model',
    description: 'Developed a machine learning model using BERT transformers in PyTorch to classify iPhone user reviews as positive, negative, or neutral, achieving ~90% accuracy on 3,062 reviews.',
    tech: ['Python', 'PyTorch', 'BERT', 'Hugging Face', 'Pandas'],
    color: 'indigo',
    github: 'https://github.com/ajayrapeti/iphone_customersurvey_nlp',
    image: '/projects/sentiment-analysis.jpg' // Add your screenshot here
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className={`project-card project-${project.color}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="project-number">{project.id}</div>
            <div className="project-content-wrapper">
              <div className="project-left">
                <h2 className="project-title">{project.title}</h2>
                <h3 className="project-subtitle">{project.subtitle}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> View Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.video && (
                    <a href={project.video} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaVideo /> Watch Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="project-right">
                <div className="project-mockup">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="project-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className="mockup-placeholder" style={{ display: project.image ? 'none' : 'flex' }}>
                    <span className="mockup-icon">💻</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
