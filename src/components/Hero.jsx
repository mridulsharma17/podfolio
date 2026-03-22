import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <div className="hero-content">
          <motion.div
            className="greeting"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to my universe
          </motion.div>

          <motion.h1
            className="name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            mridul sharma
          </motion.h1>

          <motion.h2
            className="title text-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack & Android Developer
          </motion.h2>

          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting scalable applications with clean and efficient code.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="https://linkedin.com/in/mridul-sharma171" className="btn btn-glow" target="_blank" rel="noopener noreferrer">
              Hire Me
              <ArrowRight size={18} />
            </a>
            <a href="https://drive.google.com/file/d/1MXTVuGJRUQyoNkY89Epr8dUAXHxPvXsl/view?usp=sharing" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <Download size={18} /> Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="profile-container">
            <div className="profile-glow"></div>
            <img src="/assets/mridul_profile.jpg" alt="Mridul Sharma" className="profile-photo" />
            <div className="floating-badge glass-panel badge-1">
              <span>🚀</span> Android Developer
            </div>
            <div className="floating-badge glass-panel badge-2">
              <span>💻</span> CS Student
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
