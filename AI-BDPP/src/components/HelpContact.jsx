import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import './HelpContact.css';

const PlatformHelp = () => {
  const [feedback, setFeedback] = useState('');
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFeedback('');
      }, 2500);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email && contact.message) {
      setContactSubmitted(true);
      setTimeout(() => {
        setContactSubmitted(false);
        setContact({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <div className="platform-help-fullscreen">
      <motion.h1
        className="main-title"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🧠 Platform Help & Support
      </motion.h1>

      

      <motion.section className="help-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
      <div className='Description'>  <h2>🛠 How to Use</h2>
        <ul>
          <li>Login and set up your profile with basic health details.</li>
          <li>Upload any reports if needed.</li>
          <li>View AI-based health predictions with explanations.</li>
          <li>Track lifestyle activities like sleep and exercise.</li>
        </ul>
        </div>
      </motion.section>

      

      <motion.section className="help-section" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
        <h2>🔐 Privacy & Data Security</h2>
        <p>Your data is encrypted, never sold, and used only to provide personalized health insights and predictions.</p>
      </motion.section>

      <motion.section className="help-section feedback-form" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <h2>💬 Feedback</h2>
        <form onSubmit={handleFeedbackSubmit}>
          <textarea
            placeholder="Your feedback helps us improve..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button type="submit">Submit</button>
          {submitted && <span className="thanks-msg">Thanks for your feedback! 😊</span>}
        </form>
      </motion.section>

      <motion.section className="help-section emergency" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <h2>🚨 Emergency Contacts</h2>
        <div className='Description'>  <ul>
          <li><strong>Ambulance:</strong> 102</li>
          <li><strong>Mental Health:</strong> 9152987821</li>
          <li><strong>Police:</strong> 100</li>
          <li><strong>Health Helpline:</strong> 1075</li>
        </ul>
        </div>
      </motion.section>

      <motion.section className="help-section contact-platform" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
        <h2>📩 Contact the Platform</h2>
        <form onSubmit={handleContactSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            value={contact.message}
            onChange={(e) => setContact({ ...contact, message: e.target.value })}
            required
          />
          <button type="submit">Send Message</button>
          {contactSubmitted && <span className="thanks-msg">Message sent! We'll reach out shortly 🚀</span>}
        </form>
      </motion.section>
      <section className="social-media-links">
  <h3>🌐 Connect With Us</h3>
  <div className="icons">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
      <FaFacebookF />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">
      <FaTwitter />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin">
      <FaLinkedinIn />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
      <FaInstagram />
    </a>
  </div>
</section>

    </div>
  );
};

export default PlatformHelp;
