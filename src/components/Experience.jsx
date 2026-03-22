import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import './Experience.css';

const timelineData = [
  {
    id: 1,
    type: 'school',
    title: 'High School',
    organization: 'Saraswati Vidya Mandir Sr. Sec. School, Mandi',
    date: 'April 2020 - March 2021',
    description: 'Completed High School with 79.4%.'
  },
  {
    id: 2,
    type: 'school',
    title: 'Intermediate',
    organization: 'Saraswati Vidya Mandir Sr. Sec. School, Mandi',
    date: 'April 2022 - March 2023',
    description: 'Completed Higher Secondary Education with 76.6%.'
  },
  {
    id: 3,
    type: 'school',
    title: 'B.Tech - Computer Science and Engineering',
    organization: 'Lovely Professional University, Jalandhar, Punjab',
    date: 'August 2023 - Present',
    description: 'Currently pursuing my degree with a CGPA of 7.6. Focusing on core CS concepts, software engineering principles, and participating in hackathons.'
  },
  {
    id: 4,
    type: 'training',
    title: 'Placement Ace: Java Bootcamp',
    organization: 'LPU CPE',
    date: 'June 2025 - July 2025',
    description: 'Completed a structured Java Bootcamp focused on competitive programming using LeetCode and Codeforces. Strengthened core OOP, DSA, and algorithms.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {timelineData.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-dot glow-icon">
                {item.type === 'school' ? <GraduationCap size={20} /> : <Code size={20} />}
              </div>
              
              <div className="timeline-content glass-panel">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <h4 className="text-gradient">{item.organization}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
