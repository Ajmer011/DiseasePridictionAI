import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="full-screen-wrapper">
      {/* Navbar */}
      <motion.nav 
        className="hnavbar"
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }}
      >
        <h1>HealthPredictor AI</h1>
        <div className="menu">
          <a href="#" className="nav-btn">Home</a>
          <a href="dashboard" className="nav-btn">Dashboard</a>
          <a href="help" className="nav-btn">Help</a>
          <a href="predict" className="nav-btn">Predict-Info</a>
          <a href="history" className="nav-btn">History</a>
          <a href="#features11" className="nav-btn">Feedback</a>
          <a href="profile"   className="go-to-profile-button">
           
              
                👤 My Profile
             
           </a>
         
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <motion.div 
          className="hero"
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="hero-content" id="predict">
            <div className="hero-text">
              <h2>Predict Diseases <span>with AI Precision</span></h2>
              <p>Enter your symptoms and get intelligent, fast, and reliable health insights.</p>

              <div className="search-container">
                <input type="text" placeholder="Enter symptoms..." />
                <button>Check Now</button>
              </div>


    


               <Link to="/predict"><button className="cta-btn">Start Diagnosis →</button> </Link>
            </div>

            <div className="hero-image">
              <img src="https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_776422_17123165547518811.jpg" alt="AI Healthcare" />
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="features"
          id="features"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6, duration: 0.8 }}
        >
        <div className="feature-cards">
            <h3>AI-Based Predictions</h3>
            <p>Our ML models analyze symptoms and provide likely diseases instantly.</p>
          </div>
          <div className="feature-cards">
            <h3>Track Health History</h3>
            <p>Save your predictions and track progress over time with ease.</p>
          </div>
          <div className="feature-cards">
            <h3>Detailed Explanations</h3>
            <p>Understand the reasoning behind each prediction with medical insights.</p>
          </div>
        </motion.div>

        {/* Dummy Scroll Section */}
        <div className="scroll-space">
          Secure_Wave
        </div>

        {/* Footer */}
        <motion.footer 
          className="hfooter"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="hfooter-content" id="about">
            <h2>HealthPredictor AI</h2>
            <p>Your intelligent health partner powered by AI and data science.</p>

            <div className="hfooter-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>

            <div className="social-icons">
              <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="https://github.com/yourusername" target="_blank"><i className="fab fa-github"></i></a>
            </div>

            <p className="copyright">
              © {new Date().getFullYear()} HealthPredictor AI. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
