import React, { useState } from 'react';
import './Contactus.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container5">
      <button className="back-button5" onClick={() => window.history.back()}>
        Back
      </button>

      <h1 className="contact-heading5">Contact Us</h1>
      <p className="contact-description5">Got a question, suggestion, or just want to say hi? Reach out to us!</p>

      <motion.form
        className="contact-form5"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="input-group5">
          <label htmlFor="name" className="input-label5">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="input-field5"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group5">
          <label htmlFor="email" className="input-label5">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input-field5"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group5">
          <label htmlFor="message" className="input-label5">Message</label>
          <textarea
            id="message"
            name="message"
            className="input-field5"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <motion.button
          type="submit"
          className="submit-button5"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {submitted && (
        <motion.div
          className="thank-you-message5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Thank you for contacting us!</h2>
          <p>We’ll get back to you as soon as possible.</p>
        </motion.div>
      )}

      <div className="contact-info5">
        <h2 className="info-heading5">Our Contact Information</h2>
        <p className="info-text5">
          Email: support@example.com<br />
          Phone: +91 98765 43210<br />
          Address: Tech Park, Sector 5, Bhopal, India
        </p>
      </div>

      <div className="social-icons5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg className="icon5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22 12a10 10 0 1 0-11.6 9.87v-6.99H7.9v-2.88h2.5V9.5c0-2.48 1.48-3.85 3.75-3.85 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.88h-2.34v6.99A10 10 0 0 0 22 12" />
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg className="icon5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.46 6c-.77.35-1.6.59-2.46.7a4.3 4.3 0 0 0 1.88-2.37c-.84.5-1.77.86-2.76 1.05A4.26 4.26 0 0 0 16 4c-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.11.99-3.55-.18-6.7-1.88-8.8-4.47a4.28 4.28 0 0 0-.58 2.15c0 1.48.75 2.78 1.88 3.54a4.26 4.26 0 0 1-1.94-.54v.05c0 2.07 1.47 3.8 3.42 4.2a4.32 4.32 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.98A8.56 8.56 0 0 1 2 19.54 12.05 12.05 0 0 0 8.29 21c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.36-.02-.54A8.38 8.38 0 0 0 22.46 6z" />
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg className="icon5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7m0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3m5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m5.2-.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />
          </svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg className="icon5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M8.5 17v-7H6v7h2.5m-1.25-8.25c.8 0 1.25-.55 1.25-1.25S8.05 6.25 7.25 6.25 6 6.8 6 7.5s.45 1.25 1.25 1.25M18 17v-3.75c0-2.01-2.15-1.86-2.15 0V17H13.5v-7h2.15v1c.9-1.5 4.35-1.6 4.35 1.43V17H18z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contact;
