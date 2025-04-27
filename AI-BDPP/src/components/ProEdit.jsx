import React, { useState } from 'react';
import './Proedit.css';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    medicalHistory: '',
    exercise: '',
    sleep: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-sidebar">
        <h2>Profile</h2>
        <ul>
          <li>Edit Profile</li>
          <li>Security</li>
          <li>Settings</li>
        </ul>
      </div>

      <div className="edit-profile-content">
        <h1>Edit Profile</h1>
        <div className="profile-image">
          <img src="https://via.placeholder.com/100" alt="Profile" />
          <span className="edit-icon">✏️</span>
        </div>

        <form className="edit-form">
          <div className="input-row">
            <label>Full Name</label>
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
          </div>
          <div className="input-row">
            <label>Email</label>
            <input type="email" name="email" value={profile.email} onChange={handleChange} />
          </div>
          <div className="input-row">
            <label>Age</label>
            <input type="number" name="age" value={profile.age} onChange={handleChange} />
          </div>
          <div className="input-row">
            <label>Gender</label>
            <select name="gender" value={profile.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="input-row">
            <label>Height (cm)</label>
            <input type="text" name="height" value={profile.height} onChange={handleChange} />
          </div>
          <div className="input-row">
            <label>Weight (kg)</label>
            <input type="text" name="weight" value={profile.weight} onChange={handleChange} />
          </div>
          <div className="input-row">
            <label>Medical History</label>
            <textarea name="medicalHistory" value={profile.medicalHistory} onChange={handleChange} />
          </div>
          <div className="input-row">
            <label>Exercise Routine</label>
            <textarea name="exercise" value={profile.exercise} onChange={handleChange} />
          </div>
          <div className="input-row">
            <label>Sleep Pattern</label>
            <textarea name="sleep" value={profile.sleep} onChange={handleChange} />
          </div>

          <div className="edit-buttons">
            <button className="cancel-btn" type="button">Back to Home</button>
            <button className="save-btn" type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
