import React from "react";
import { Link } from 'react-router-dom';
import "./Login.css"; // Ensure this CSS uses the updated class names ending with '1'

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function LoginForm() {
  return (
    <motion.form
      className="auth-form1"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="form-heading1">Login to HealthPredict AI</h2>

      <div className="form-group1">
        <FaEnvelope className="icon1" />
        <input type="email" placeholder="Email" required />
      </div>

      <div className="form-group1">
        <FaLock className="icon1" />
        <input type="password" placeholder="Password" required />
      </div>

      <motion.p
        whileHover={{ scale: 1.05 }}
        className="forgot-password1"
        onClick={() => alert("Redirect to Forgot Password flow")}
      >
        Forgot Password?
      </motion.p>

      <motion.button whileHover={{ scale: 1.03 }} className="submit-btn1">
        Login
      </motion.button>

      <div className="social-login1">
       <Link to="/signup"> <motion.p
        whileHover={{ scale: 1.05 }}
        className="forgot-password1"
        onClick={() => alert("Redirect to Forgot Password flow")}
      >
        Already Have an account ? Sign-Up
      </motion.p></Link>
        <div className="social-icons1">
          <FaGoogle className="social-icon1" />
          <FaFacebookF className="social-icon1" />
          <FaGithub className="social-icon1" />
          <FaLinkedinIn className="social-icon1" />
          <FaTwitter className="social-icon1" />
        </div>
      </div>
    </motion.form>
  );
}
