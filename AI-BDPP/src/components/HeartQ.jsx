import React, { useState } from "react";
import "./HeartQ.css";

const MedicalFormOptions = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Medical Form Submitted Successfully!");
  };

  return (
    <div className="form-container">
      <h1 className="title">Patient Medical Assessment</h1>
      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-group">
          <label>Age (in years)</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            placeholder="Eg: 45"
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="1">Male (1)</option>
            <option value="0">Female (0)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Chest Pain Type</label>
          <select name="cp" value={formData.cp} onChange={handleChange} required>
            <option value="">Select Chest Pain Level</option>
            <option value="0">0 - No Chest Pain</option>
            <option value="1">1 - Mild Chest Pain</option>
            <option value="2">2 - Moderate Chest Pain</option>
            <option value="3">3 - Severe Chest Pain</option>
          </select>
        </div>

        <div className="form-group">
          <label>Resting Blood Pressure (mmHg)</label>
          <select name="trestbps" value={formData.trestbps} onChange={handleChange} required>
            <option value="">Select Resting BP</option>
            <option value="110">110 mmHg - Normal</option>
            <option value="125">125 mmHg - Elevated</option>
            <option value="135">135 mmHg - Stage 1 Hypertension</option>
            <option value="145">145 mmHg - Stage 2 Hypertension</option>
          </select>
        </div>

        <div className="form-group">
          <label>Cholesterol Level (mg/dl)</label>
          <select name="chol" value={formData.chol} onChange={handleChange} required>
            <option value="">Select Cholesterol Level</option>
            <option value="180">180 mg/dl - Desirable</option>
            <option value="220">220 mg/dl - Borderline High</option>
            <option value="260">260 mg/dl - High</option>
          </select>
        </div>

        <div className="form-group">
          <label>Fasting Blood Sugar (FBS)</label>
          <select name="fbs" value={formData.fbs} onChange={handleChange} required>
            <option value="">Select FBS Level</option>
            <option value="0">0 - ≤120 mg/dl (Normal)</option>
            <option value="1">1 - ≤120 mg/dl (High)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Resting ECG Result</label>
          <select name="restecg" value={formData.restecg} onChange={handleChange} required>
            <option value="">Select ECG Result</option>
            <option value="0">0 - Normal</option>
            <option value="1">1 - Abnormal</option>
            <option value="2">2 - Severe Abnormality</option>
          </select>
        </div>

        <div className="form-group">
          <label>Max Heart Rate Achieved</label>
          <input
            type="number"
            name="thalach"
            value={formData.thalach}
            onChange={handleChange}
            required
            placeholder="Eg: 150 bpm"
          />
        </div>

        <div className="form-group">
          <label>Exercise Induced Angina</label>
          <select name="exang" value={formData.exang} onChange={handleChange} required>
            <option value="">Select Response to Exercise</option>
            <option value="1">1 - Yes (Chest Pain on Exercise)</option>
            <option value="0">0 - No</option>
          </select>
        </div>

        <div className="form-group">
          <label>ST Depression (Oldpeak)</label>
          <input
            type="number"
            step="0.1"
            name="oldpeak"
            value={formData.oldpeak}
            onChange={handleChange}
            placeholder="Eg: 1.5 (Normal < 2)"
            required
          />
        </div>

        <div className="form-group">
          <label>Slope of Peak Exercise ST Segment</label>
          <select name="slope" value={formData.slope} onChange={handleChange} required>
            <option value="">Select Slope Type</option>
            <option value="0">0 - Downsloping</option>
            <option value="1">1 - Flat</option>
            <option value="2">2 - Upsloping</option>
          </select>
        </div>

        <div className="form-group">
          <label>Major Vessels Colored (CA)</label>
          <select name="ca" value={formData.ca} onChange={handleChange} required>
            <option value="">Select Number of Vessels</option>
            <option value="0">0 - None</option>
            <option value="1">1 - One Vessel</option>
            <option value="2">2 - Two Vessels</option>
            <option value="3">3 - Three Vessels</option>
          </select>
        </div>

        <div className="form-group">
          <label>Thalassemia Condition</label>
          <select name="thal" value={formData.thal} onChange={handleChange} required>
            <option value="">Select Thalassemia Type</option>
            <option value="1">1 - Normal</option>
            <option value="2">2 - Fixed Defect</option>
            <option value="3">3 - Reversible Defect</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit Form</button>
      </form>
    </div>
  );
};

export default MedicalFormOptions;
