import { motion } from 'framer-motion';
import { Award, Trophy, Scroll } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Certifications
        </motion.h2>

        <div className="achievements-grid">
          <motion.div 
            className="achievement-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, boxShadow: '0 0 25px rgba(251, 191, 36, 0.2)' }}
          >
            <div className="achievement-icon icon-gold"><Trophy size={32} /></div>
            <div className="achievement-info">
              <h3>Track Prize Winner</h3>
              <p className="achievement-event">Electrothon 8.0 (NIT Hamirpur)</p>
              <p className="achievement-desc">Awarded Best Use of Google Gemini API for implementing innovative AI features in a competitive national-level hackathon.</p>
            </div>
          </motion.div>

          <motion.div 
            className="achievement-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 0 25px rgba(96, 165, 250, 0.2)' }}
          >
            <div className="achievement-icon icon-blue"><Award size={32} /></div>
            <div className="achievement-info">
              <h3>100+ LeetCode Problems</h3>
              <p className="achievement-event">Algorithmic Problem Solving</p>
              <p className="achievement-desc">Demonstrating strong problem-solving skills in Data Structures and Algorithms, focusing on optimal time and space complexities.</p>
            </div>
          </motion.div>

          <motion.div 
            className="achievement-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: '0 0 25px rgba(139, 92, 246, 0.2)' }}
          >
            <div className="achievement-icon icon-purple"><Scroll size={32} /></div>
            <div className="achievement-info">
              <h3>Certifications</h3>
              <ul className="cert-list">
                <li><a href="#">Cloud Computing - IIT Kharagpur</a></li>
                <li><a href="#">Java Programming - NeoColab</a></li>
                <li><a href="#">DSA - NeoColab</a></li>
                <li><a href="#">C Programming - CipherSchools</a></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
