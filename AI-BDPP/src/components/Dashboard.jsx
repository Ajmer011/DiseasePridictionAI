import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="logo">💖 HealthPredict</div>
        <div className="nav-links">
      
    <a href="#">🏠 Home</a>
    <a href="#">🔁 History</a>
    <a href="#">👤 Profile</a>
    <a href="#">⚙ Settings</a>

        </div>
      </nav>

      <main className="main-content">
        <div className="card">
          <h1>Good Afternoon, Ajmer! 👋</h1>
          <p className="subheading">Here’s your latest prediction summary</p>

          <div className="health-score">
            <p>🩺 Health Score</p>
            <div className="score-bar">
              <div className="fill" style={{ width: "75%" }}></div>
            </div>
            <p className="status">Status: Normal</p>
          </div>

          <div className="recent">
            <p>Recent Predictions:</p>
            <div className="pills">
              <span className="pill normal">Normal</span>
              <span className="pill high">High Risk</span>
              <span className="pill low">Low Risk</span>
            </div>
          </div>

          <button className="action-btn">➕ New Prediction</button>
        </div>
      </main>

      <footer className="footer">© 2025 Ajmer's Dashboard</footer>
    </div>
  );
};

export default Dashboard;
