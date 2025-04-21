import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Auth.css';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  const formContent = (
    <div className="auth-container">
      <motion.div 
        className="form-wrapper"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="form-title">{isLogin ? 'Login' : 'Signup'} to HealthPredict AI</h2>

        <form className="auth-form">
          {!isLogin && (
            <>
              <input type="text" placeholder="Full Name" required />
              <input type="number" placeholder="Age" required />
              <select required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <select required>
                <option value="">Role</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </>
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          {isLogin && (
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="forgot-password"
              onClick={() => alert('Redirect to Forgot Password flow')}
            >
              Forgot Password?
            </motion.p>
          )}

          <motion.button whileHover={{ scale: 1.05 }} className="submit-btn">
            {isLogin ? 'Login' : 'Signup'}
          </motion.button>
        </form>

        <div className="social-login">
          <p>Or continue with</p>
          <div className="social-icons">
            <FaGoogle className="social-icon" />
            <FaFacebookF className="social-icon" />
            <FaGithub className="social-icon" />
            <FaLinkedinIn className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </div>

        <p className="toggle-msg">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span onClick={toggleForm} className="toggle-link">
            {isLogin ? ' Signup' : ' Login'}
          </span>
        </p>
      </motion.div>
    </div>
  );

  return formContent;
}