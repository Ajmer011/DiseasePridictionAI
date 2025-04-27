import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaHome, FaFacebook, FaTwitter, FaLinkedin, FaSkype } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <div className="page-wrapperA">
      {/* Top Bar */}
      <div className="top-barA">
        <div className="social-iconsA">
          <FaFacebook /><FaTwitter /><FaLinkedin /><FaSkype />
        </div>
        <div className="contact-infoA">
          <div><FaPhoneAlt />+91 95169-91004</div>
          <div><FaHome /> Your address goes here</div>
          <Link to="/login"> <button className="quote-btnA">Log-In</button></Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbarA">
        <div className="logoA">AI-Prediction</div>
        <div className="nav-linksA">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service ▾</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-sectionA">
        <div className="hero-overlayA">
          <h1>AI-Prediction with the help of<br />Machine Learning</h1>
          <p>The disease might hide the person underneath, but there's still a person in there who needs your love and attention.</p>
          <Link to="/main"><button className="get-started-btnA">Get Start</button></Link>
        </div>
      </div>
    </div>
  );
}
