import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PersonalInfo.css';

const steps = [
  'Personal Info',
  'Lifestyle',
  'Medical History',
  'Symptoms'
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    height: '',
    weight: '',
    smoking: '',
    alcohol: '',
    activity: '',
    sleep: '',
    diet: '',
    chronic: '',
    diseases: '',
    family: '',
    symptoms: []
  });

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const calculateHealthScore = () => {
    let score = 100;
    if (formData.smoking === 'yes') score -= 20;
    if (formData.alcohol === 'yes') score -= 10;
    if (formData.activity === 'none') score -= 15;
    if (formData.sleep < 6) score -= 10;
    if (formData.chronic) score -= 15;
    return Math.max(score, 0);
  };

  const healthScore = calculateHealthScore();

  return (
    <div className="multi-step-forms11">
      <motion.h2
        key={step}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="step-title11"
      >
        {steps[step]}
      </motion.h2>

      <div className="stepper11">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`step11 ${i === step ? 'active11' : i < step ? 'completed11' : ''}`}
          >
            {s}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          className="step-content11"
        >
          {step === 0 && (
            <>
              <input type="number" placeholder="Age" value={formData.age} onChange={e => updateField('age', e.target.value)} />
              <select value={formData.gender} onChange={e => updateField('gender', e.target.value)}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input type="number" placeholder="Height (cm)" value={formData.height} onChange={e => updateField('height', e.target.value)} />
              <input type="number" placeholder="Weight (kg)" value={formData.weight} onChange={e => updateField('weight', e.target.value)} />
            </>
          )}
          {step === 1 && (
            <>
              <select value={formData.smoking} onChange={e => updateField('smoking', e.target.value)}>
                <option value="">Smoking?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <select value={formData.alcohol} onChange={e => updateField('alcohol', e.target.value)}>
                <option value="">Alcohol?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <select value={formData.activity} onChange={e => updateField('activity', e.target.value)}>
                <option value="">Physical Activity Level</option>
                <option value="none">None</option>
                <option value="moderate">Moderate</option>
                <option value="active">Active</option>
              </select>
              <input type="number" placeholder="Sleep (hrs/day)" value={formData.sleep} onChange={e => updateField('sleep', e.target.value)} />
              <input type="text" placeholder="Diet (e.g., veg/non-veg/mixed)" value={formData.diet} onChange={e => updateField('diet', e.target.value)} />
            </>
          )}
          {step === 2 && (
            <>
              <input type="text" placeholder="Chronic Conditions (comma-separated)" value={formData.chronic} onChange={e => updateField('chronic', e.target.value)} />
              <input type="text" placeholder="Previous Diseases" value={formData.diseases} onChange={e => updateField('diseases', e.target.value)} />
              <input type="text" placeholder="Family Medical History" value={formData.family} onChange={e => updateField('family', e.target.value)} />
            </>
          )}
          {step === 3 && (
            <>
              <label>Symptoms:</label>
              <input type="text" placeholder="Type symptoms separated by commas" value={formData.symptoms} onChange={e => updateField('symptoms', e.target.value.split(','))} />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <motion.div className="health-score11" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <p>Live Health Score:</p>
        <motion.div
          className="score-bar11"
          initial={{ width: 0 }}
          animate={{ width: `${healthScore}%` }}
          transition={{ duration: 0.8 }}
        >
          {healthScore}
        </motion.div>
      </motion.div>

      <div className="buttons11">
        {step > 0 && <button onClick={handlePrev}>Back</button>}
        {step < steps.length - 1 ? <button onClick={handleNext}>Next</button> : <button onClick={() => alert('Form submitted!')}>Submit</button>}
      </div>
    </div>
  );
};

export default MultiStepForm;
