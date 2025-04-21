import React from 'react';
import { motion } from 'framer-motion';
import './Aboutwork.css';

const ModelInfo = () => {
  const featuresUsed = [
    'Age',
    'Gender',
    'Chest Pain Type',
    'Resting Blood Pressure',
    'Cholesterol',
    'Fasting Blood Sugar',
    'ECG Results',
    'Heart Rate',
    'Exercise Induced Angina',
    'Oldpeak (ST depression)',
    'Slope of ST segment',
  ];

  const confidenceScore = 87; // Simulated example

  return (
    <div className="model-info-container">
      <motion.h1
        className="model-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🧠 How Our ML Model Works
      </motion.h1>

      <motion.div
        className="explanation-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h2>In Simple Terms</h2>
        <p>
          Our machine learning model learns from past medical data to understand patterns and relationships.
          Based on the details you enter (like age, blood pressure, cholesterol, etc.), it predicts the
          likelihood of heart disease.
        </p>
        <p>
          It doesn't diagnose you — it gives you a probability based on similar data from the past.
        </p>
      </motion.div>

      <motion.div
        className="features-section"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2>🔍 Features Used in Prediction</h2>
        <ul>
          {featuresUsed.map((feature, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="confidence-score"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className='Head'><h2>📊 Confidence Level</h2></div>
        <div className="score-bar">
          
          <div className="score-fill" style={{ width: `${confidenceScore}%` }}>
            {confidenceScore}%
          </div>
        </div>
        <div className='Head'>  <p>This shows how confident the model is about the prediction.</p></div>
      </motion.div>

      <motion.div
        className="external-links"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <a
          href="https://github.com/yourusername/heart-disease-predictor"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          💻 View GitHub Repo
        </a>
        <a
          href="https://yourblog.com/behind-the-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          📰 Read 'Behind the Tech'
        </a>
      </motion.div>
    </div>
  );
};

export default ModelInfo;
