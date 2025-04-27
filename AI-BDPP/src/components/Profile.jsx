import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Profile.css';

const UserProfile = () => {
  const [avatar, setAvatar] = useState(null);
  const [userDetails] = useState({
    name: 'Ajmer Thakur',
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
    <div className="user-profile6">
      <motion.h1
        className="title6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        👤 Your Health Profile
      </motion.h1>

      <motion.div
        className="avatar-preview6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {avatar ? (
          <img src={avatar} alt="Avatar" className="avatar6" />
        ) : (
          <div className="avatar-placeholder6">Upload Avatar</div>
        )}
      </motion.div>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file-input6"
      />

      <motion.div
        className="user-info6"
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
        className="lifestyle-graph6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3>Lifestyle Overview</h3>
        <div className="bar-graph6">
          <div className="bar-container6">
            <div className="bar-label6">Exercise</div>
            <div className="bar-fill6" style={{ width: '80%' }}></div>
          </div>
          <div className="bar-container6">
            <div className="bar-label6">Sleep</div>
            <div className="bar-fill6 sleep6" style={{ width: '70%' }}></div>
          </div>
        </div>
      </motion.div>

      {/* Edit Profile Button */}
      <motion.div
        className="edit-profile-btn-container6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Link to="/edit"> <motion.button
          className="edit-profile-btn6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✏️ Edit Profile
        </motion.button></Link>
      </motion.div>
    </div>
  );
};

export default UserProfile;
