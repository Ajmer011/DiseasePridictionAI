import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="full-screen-wrapper7">
      {/* Navbar */}
      <motion.nav 
        className="hnavbar7"
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }}
      >
        <h2>HealthPredictor Using AI</h2>
        <div className="menu7">
          <a href="#" className="nav-btn7">Home</a>
          <a href="dashboard" className="nav-btn7">Dashboard</a>
          <a href="help" className="nav-btn7">Help</a>
          <a href="Feedback" className="nav-btn7">Feedback</a>
          <a href="aboutus" className="nav-btn7">AboutUs</a>
          <a href="history" className="nav-btn7">History</a>
          <a href="about" className="nav-btn7">Features</a>
          <a href="profile" className="go-to-profile-button7">👤 My Profile</a>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="main-content7">
        {/* Hero Section */}
        <motion.div 
          className="hero7"
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="hero-content7" id="predict">
            <div className="hero-text7">
              <h2>Predict Diseases <span>with AI Precision</span></h2>
              <p>Enter your symptoms and get intelligent, fast, and reliable health insights.</p>

              <div className="search-container7">
                <input type="text" placeholder="Enter symptoms..." />
                <button>Check Now</button>
              </div>

              <Link to="/predict"><button className="cta-btn7">Start Diagnosis →</button> </Link>
            </div>

            <div className="hero-image7">
              <img src="https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_776422_17123165547518811.jpg" alt="AI Healthcare" />
            </div>
          </div>
        </motion.div>

        {/* Disease Check Options Section */}
        <motion.div 
          className="disease-options7"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading7">Choose a Checkup</h2>
          <div className="disease-cards-container7">

            <Link to="/heart" className="disease-card7" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5ZkCoOh9KKDY5Qp_rLdEbmOMNadNceKndg&s')" }}>
              <div className="disease-overlay7">
                <h3>Heart Disease</h3>
                <p>Predict heart-related issues with advanced AI models.</p>
              </div>
            </Link>

            <Link to="/predict-diabetes" className="disease-card7" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/diabetes-concept-glucose-meter_23-2148778120.jpg')" }}>
              <div className="disease-overlay7">
                <h3>Diabetes</h3>
                <p>Check for early signs of Diabetes with smart prediction.</p>
              </div>
            </Link>

            <Link to="/predict-tb" className="disease-card7" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-render-medical-icon-tuberculosis-tb-disease_107791-16027.jpg')" }}>
              <div className="disease-overlay7">
                <h3>TB (Tuberculosis)</h3>
                <p>AI-powered tuberculosis risk analysis and insights.</p>
              </div>
            </Link>

            <Link to="/predict-sugar" className="disease-card7" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/doctor-holding-blood-sugar-level-test-strip_23-2148891007.jpg')" }}>
              <div className="disease-overlay7">
                <h3>Blood Sugar</h3>
                <p>Analyze your blood sugar conditions in one click.</p>
              </div>
            </Link>

          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="features7"
          id="features"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="feature-cards7">
            <h3>AI-Based Predictions</h3>
            <p>Our ML models analyze symptoms and provide likely diseases instantly.</p>
          </div>
          <div className="feature-cards7">
            <h3>Track Health History</h3>
            <p>Save your predictions and track progress over time with ease.</p>
          </div>
          <div className="feature-cards7">
            <h3>Detailed Explanations</h3>
            <p>Understand the reasoning behind each prediction with medical insights.</p>
          </div>
        </motion.div>

        {/* Dummy Scroll Section */}
        <div className="scroll-space7">
          Secure_Wave
        </div>

        {/* Chatbot Button */}
        <div className="chatbot-button7" onClick={() => setShowChatbot(!showChatbot)}>
          💬 Chatbot
        </div>

        {/* Footer */}
        <motion.footer 
          className="hfooter7"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="hfooter-content7" id="about">
            <h2>HealthPredictor AI</h2>
            <p>Your intelligent health partner powered by AI and data science.</p>

            <div className="hfooter-links7">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>

            <div className="social-icons7">
              <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="https://github.com/yourusername" target="_blank"><i className="fab fa-github"></i></a>
            </div>

            <p className="copyright7">
              © {new Date().getFullYear()} HealthPredictor AI. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
