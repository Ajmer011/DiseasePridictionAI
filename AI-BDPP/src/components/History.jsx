import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './History.css'; // Import your CSS file

// Sample data for predictions (replace with actual data or API)
const samplePredictions = [
  {
    id: 1,
    disease: 'Heart Disease',
    severity: 'High',
    date: '2025-04-15',
    report: 'Detailed report of the heart disease prediction...',
  },
  {
    id: 2,
    disease: 'Diabetes',
    severity: 'Moderate',
    date: '2025-04-10',
    report: 'Detailed report of the diabetes prediction...',
  },
  {
    id: 3,
    disease: 'Cancer',
    severity: 'Critical',
    date: '2025-04-12',
    report: 'Detailed report of the cancer prediction...',
  },
  // Add more sample predictions here...
];

const PastPredictions = () => {
  const [filteredPredictions, setFilteredPredictions] = useState(samplePredictions);
  const [filters, setFilters] = useState({
    date: '',
    disease: '',
    severity: '',
  });

  // Handle changes in filter inputs
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Filter predictions based on selected filters
  const applyFilters = () => {
    let filtered = samplePredictions;

    if (filters.date) {
      filtered = filtered.filter((prediction) =>
        prediction.date.includes(filters.date)
      );
    }

    if (filters.disease) {
      filtered = filtered.filter((prediction) =>
        prediction.disease.toLowerCase().includes(filters.disease.toLowerCase())
      );
    }

    if (filters.severity) {
      filtered = filtered.filter((prediction) =>
        prediction.severity.toLowerCase().includes(filters.severity.toLowerCase())
      );
    }

    setFilteredPredictions(filtered);
  };

  // Back button handler
  const handleBackClick = () => {
    window.history.back(); // Navigate back to the previous page
  };

  return (
    <div className="past-predictions">
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Past Predictions
      </motion.h2>

      {/* Filter options */}
      <div className="filters">
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
          placeholder="Filter by date"
        />
        <input
          type="text"
          name="disease"
          value={filters.disease}
          onChange={handleFilterChange}
          placeholder="Filter by disease"
        />
        <input
          type="text"
          name="severity"
          value={filters.severity}
          onChange={handleFilterChange}
          placeholder="Filter by severity"
        />
        <button onClick={applyFilters}>Apply Filters</button>
      </div>

      {/* Display predictions with animations */}
      <motion.div
        className="predictions-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredPredictions.length > 0 ? (
          filteredPredictions.map((prediction) => (
            <motion.div
              className="prediction-card"
              key={prediction.id}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h3>{prediction.disease}</h3>
              <p><strong>Severity:</strong> {prediction.severity}</p>
              <p><strong>Date:</strong> {prediction.date}</p>
              <button
                onClick={() => alert(prediction.report)}
                className="view-report-btn"
              >
                View Full Report
              </button>
            </motion.div>
          ))
        ) : (
          <p>No predictions found.</p>
        )}
      </motion.div>
    </div>
  );
};

export default PastPredictions;
