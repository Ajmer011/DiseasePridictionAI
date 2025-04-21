import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Profile.css';

const UserProfile = () => {
  const [avatar, setAvatar] = useState(null);
  const [userDetails] = useState({
    name: 'Ajmer thakur',
    email: 'ajmer@example.com',
    age: '21',
    gender: 'Male',
    height: '170 cm',
    weight: '65 kg',
    medicalHistory: 'No chronic conditions.',
    exercise: '5 days/week',
    sleep: '7 hours/day',
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user-profile">
      <motion.h1
        className="title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        👤 Your Health Profile
      </motion.h1>

      <motion.div
        className="avatar-preview"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {avatar ? (
          <img src={avatar} alt="Avatar" className="avatar" />
        ) : (
          <div className="avatar-placeholder">Upload Avatar</div>
        )}
      </motion.div>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file-input"
      />

      <motion.div
        className="user-info"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {Object.entries(userDetails).map(([key, value]) => (
          <p key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </p>
        ))}
      </motion.div>

      <motion.div
        className="lifestyle-graph"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3>Lifestyle Overview</h3>
        <div className="bar-graph">
          <div className="bar-container">
            <div className="bar-label">Exercise</div>
            <div className="bar-fill" style={{ width: '80%' }}></div>
          </div>
          <div className="bar-container">
            <div className="bar-label">Sleep</div>
            <div className="bar-fill sleep" style={{ width: '70%' }}></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
