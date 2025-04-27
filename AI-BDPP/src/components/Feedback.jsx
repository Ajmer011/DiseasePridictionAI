import React, { useState } from 'react';
import './Feedback.css';
import { motion } from 'framer-motion';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., send the data to a server
    setSubmitted(true);
  };

  return (
    <div className="feedback-container4">
      <button className="back-button4" onClick={() => window.history.back()}>
        Back
      </button>

      <h1 className="feedback-heading4">We Value Your Feedback</h1>
      <p className="feedback-description4">
        Your opinion helps us improve. Please share your thoughts with us!
      </p>

      <motion.form
        className="feedback-form4"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="input-group4">
          <label htmlFor="name" className="input-label4">Name</label>
          <input
            type="text"
            id="name"
            className="input-field4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group4">
          <label htmlFor="email" className="input-label4">Email</label>
          <input
            type="email"
            id="email"
            className="input-field4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group4">
          <label htmlFor="feedback" className="input-label4">Your Feedback</label>
          <textarea
            id="feedback"
            className="input-field4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>

        <motion.button
          type="submit"
          className="submit-button4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          Submit Feedback
        </motion.button>
      </motion.form>

      {submitted && (
        <motion.div
          className="thank-you-message4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Thank you for your feedback!</h2>
          <p>Your thoughts help us create better experiences. We appreciate your input!</p>
        </motion.div>
      )}

      <div className="feedback-info4">
        <h2 className="info-heading4">Why Your Feedback Matters</h2>
        <p className="info-text4">
          Feedback is one of the most powerful tools we have to improve our service and products. Whether it's praise or constructive criticism, we value every opinion. Your insights help us understand how we can serve you better, enhance user experiences, and provide even more meaningful solutions.
        </p>
        
        <h2 className="info-heading4">What Happens Next?</h2>
        <p className="info-text4">
          Once we receive your feedback, our team will review it and consider it as part of our continuous efforts to improve. If we need any clarification or additional information, we’ll reach out to you directly. We are committed to creating a better experience based on your thoughts and suggestions!
        </p>

        <h2 className="info-heading4">Your Privacy is Our Priority</h2>
        <p className="info-text4">
          We take your privacy seriously. All feedback provided is confidential and used solely for improving our service. Your email and any personal information shared will never be shared with third parties.
        </p>
      </div>
    </div>
  );
};

export default Feedback;
