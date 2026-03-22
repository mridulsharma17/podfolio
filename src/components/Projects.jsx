import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'SOS Alert System – Emergency Safety App',
    description: 'Android-based SOS emergency application enabling real-time connection between users in distress and nearby volunteers. Integrated Firebase Realtime Database for SOS alert broadcasting, user-volunteer mapping, and real-time chat communication. Managed request states and ensured seamless real-time synchronization.',
    tech: ['Kotlin', 'Android Studio', 'Jetpack Compose', 'Firebase', 'OOP'],
    image: '/assets/sos_alert.png',
    github: 'https://github.com/mridulsharma17/SOS-Emergency-Assistance-Application',
    demo: 'https://drive.google.com/file/d/1gPVE6oHAsRcjGDln5ipP5oOgqoGARWX5/view?usp=sharing',
    highlight: true,
    date: 'Feb 2026 - Mar 2026'
  },
  {
    id: 2,
    title: 'BattleBoard 3D - Interactive Chess Game',
    description: 'Created a 3D chess game in Godot with realistic rendering, dynamic lighting, and smooth camera controls. Executed complete game logic, including move validation, turn-based system, and accurate piece behavior with optimized collision detection.',
    tech: ['Godot', 'GDScript', 'OOP'],
    image: '/assets/battleboard.png',
    github: 'https://github.com/mridulsharma17/3d-chess',
    date: 'Dec 2025 - Present'
  },
  {
    id: 3,
    title: 'Wallet Manager',
    description: 'Developed an Android-based Wallet Manager application to efficiently track daily expenses and maintain a structured transaction history. Implemented support for multiple payment modes such as cash and UPI. Utilized file handling techniques for persistent data storage and designed a user-friendly interface for seamless financial tracking.',
    tech: ['Android', 'Java/Kotlin', 'File Handling', 'UI/UX'],
    image: '/assets/wallet_manager.png',
    github: 'https://github.com/mridulsharma17/Wallet-Balance-Manager',
    demo: 'https://drive.google.com/file/d/1RPnj7ZV7F9jQZU4cNpMDNNDDvEd3ZOZ7/view?usp=sharing'
  },
  {
    id: 4,
    title: 'AquaVision – Groundwater Monitoring System',
    description: 'Enhanced a backend system to track and analyze groundwater levels across Punjab and Himachal Pradesh using monthly data. Designed RESTful APIs for data retrieval and processing, enabling efficient backend operations and seamless report generation. Implemented automated report delivery via email using Nodemailer.',
    tech: ['HTML', 'CSS', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    image: '/assets/aquavision.png',
    github: 'https://github.com/harshraj001/AquaVision',
    date: 'Oct 2025 - Nov 2025'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Works
        </motion.h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`project-glass-card glass-panel ${project.highlight ? 'highlight-card' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-hover-overlay">
                  <span>Explore Details</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.date}</p>
                <div className="project-tags">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="glass-tag">{tech}</span>
                  ))}
                  {project.tech.length > 3 && <span className="glass-tag">+{project.tech.length - 3}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-glass-content glass-panel"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-closebtn" 
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>
              
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-cover" />
              
              <div className="modal-details">
                <h3>{selectedProject.title}</h3>
                <p style={{ color: 'var(--primary-hover)', marginBottom: '1rem', fontSize: '0.95rem' }}>{selectedProject.date}</p>
                <p>{selectedProject.description}</p>
                
                <div className="modal-tech-stack">
                  <h4>Tech Stack:</h4>
                  <div className="project-tags">
                    {selectedProject.tech.map((tech, i) => (
                      <span key={i} className="glass-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-links">
                  {selectedProject.github && (
                    <a href={selectedProject.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                      <Github size={18} /> Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} className="btn btn-glow" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
