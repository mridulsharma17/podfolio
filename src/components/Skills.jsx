import { motion } from 'framer-motion';
import { Code2, MonitorPlay, Wrench, Users } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    id: 1,
    title: 'Languages',
    icon: <Code2 size={24} />,
    items: ['C++', 'Python', 'Java', 'GDScript', 'Kotlin']
  },
  {
    id: 2,
    title: 'Technologies',
    icon: <MonitorPlay size={24} />,
    items: ['HTML', 'CSS', 'Bootstrap', 'Node.js', 'React.js', 'Tailwind']
  },
  {
    id: 3,
    title: 'Tools & Platforms',
    icon: <Wrench size={24} />,
    items: ['Firebase', 'MySQL', 'VS Code', 'Android Studio', 'Godot']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Arsenal
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.id}
              className="skill-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-header">
                <div className="skill-icon glow-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.items.map((item, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-bullet"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
