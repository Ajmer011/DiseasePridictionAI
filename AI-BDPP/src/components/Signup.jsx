import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import "./Signup.css"; // Import the CSS file

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="registration-container2">
      <motion.div
        className="registration-box2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2>Disease Prediction</h2>
        <p>Stay safe, stay connected</p>

        <form>
          {/* Input Fields */}
          {[ 
            { icon: <FaUser />, type: "text", placeholder: "Full Name" },
            { icon: <FaEnvelope />, type: "email", placeholder: "Email" },
            { icon: <FaPhone />, type: "tel", placeholder: "Phone Number" },
            { icon: <FaMapMarkerAlt />, type: "text", placeholder: "Your Location" }
          ].map((field, index) => (
            <div key={index} className="input-container2">
              <span className="icon2">{field.icon}</span>
              <input type={field.type} placeholder={field.placeholder} />
            </div>
          ))}

          {/* Gender Selection */}
          <div className="input-container2">
            <span className="icon2">🚻</span>
            <select className="gender-select2">
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Password Field */}
          <div className="input-container2">
            <span className="icon2"><FaLock /></span>
            <input type={showPassword ? "text" : "password"} placeholder="Password" />
            <span className="password-toggle2" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
            </span>
          </div>

          {/* Register Button */}
          <motion.button className="register-btn2" whileHover={{ scale: 1.05 }}>
            Register
          </motion.button>
        </form>

        {/* Social Logins */}
        <div className="social-btns2">
          <button className="social-btn2 google">
            <FcGoogle />
          </button>
          <button className="social-btn2 facebook">
            <FaFacebookF />
          </button>
          <button className="social-btn2 github">
            <FaGithub />
          </button>
        </div>

        {/* Login Link */}
        <p className="login-text2">
          Already have an account? <Link to="/Login">login</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Registration;
