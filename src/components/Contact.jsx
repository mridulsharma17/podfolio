import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(data.message || 'Failed to send message. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      setStatus(`Network Crash: ${err.message} - Backend might be offline.`);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-grid">
          <motion.div 
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:mridulsharma1712006@gmail.com">mridulsharma1712006@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <span>+91-7876800396</span>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <span>India</span>
                </div>
              </div>
            </div>

            <div className="social-links-contact">
              <a href="https://github.com/mridulsharma17" className="social-icon" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
              <a href="https://linkedin.com/in/mridul-sharma171" className="social-icon" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group row">
                <div className="input-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Hello Mridul..." rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-glow submit-btn">
                Send Message <Send size={18} />
              </button>
              {status && <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: status.includes('success') ? '#10b981' : '#ef4444' }}>{status}</p>}
              <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                * Your message will be sent directly to my personal email inbox (mridulsharma1712006@gmail.com) using NodeMailer.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
