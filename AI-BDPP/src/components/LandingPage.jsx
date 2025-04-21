import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function WelcomePage() {
  const title = (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="page-title"
    >
      Welcome to HealthPredict AI
    </motion.h1>
  );

  const description = (
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="page-intro"
    >
      Use artificial intelligence to predict diseases early by analyzing your lifestyle and medical history.
    </motion.p>
  );

  const buttons = (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="action-buttons"
    >
      <Link to="/main"><button className="btn-primary">Get Started</button></Link>
      <Link to="/login"><button className="btn-secondary">Login</button></Link>
      <button className="btn-outline">Learn More</button>
    </motion.div>
  );

  const container = (
    <div className="page-wrapper">
      {title}
      {description}
      {buttons}
    </div>
  );

  return container;
}
