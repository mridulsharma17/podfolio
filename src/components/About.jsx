import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './About.css';

const AnimatedCounter = ({ end, duration = 2, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="counter-item">
      <h3 className="counter-value">{count}+</h3>
      <p className="counter-label">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div 
          className="about-glass-card glass-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-text-content">
            <p>
              Hello! I'm an aspiring Software Developer focused on building resilient, scalable, 
              and elegantly designed applications. My passion lies at the intersection of complex 
              backend logic and fluid frontend interfaces.
            </p>
            <p>
              I specialize in robust architectures and performance optimization, primarily working with 
              <strong> Android Development</strong> and modern frameworks. Constantly challenging 
              myself with algorithmic problem-solving is my way of sharpening my technical intuition.
            </p>
          </div>

          <div className="counters-container">
            <AnimatedCounter end={100} label="LeetCode" />
            <AnimatedCounter end={10} label="Projects" />
            <AnimatedCounter end={3} label="Hackathons" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
