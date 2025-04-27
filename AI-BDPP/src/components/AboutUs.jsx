import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';




const AboutUs = () => {
  const developers = [
    {
      
      name: 'Aastha Rathore',
      role: 'Machine Learning',
      imgSrc: '/Images/ajmer.jpg', 
      
    }
    ,
    
    {
      name: 'Radhika Singh',
      role: 'Backend handler',
      img: 'https://via.placeholder.com/150',
    },
    {
      name: 'Rohit Bamne',
      role: 'Planning',
      img: 'https://via.placeholder.com/150',
    },
    {
      name: 'Ajmer Lodhi',
      role: 'Frontend Developer',
      img: 'https://via.placeholder.com/150',
    },
    {
      name: 'Abhishek Gupta',
      role: 'chatbot',
      img: 'https://via.placeholder.com/150',
    },
  ];

  const features = [
    {
      title: "🎯 Our Mission",
      text: "Empowering lives through early detection of heart risks using smart technology.",
    },
    {
      title: "🧠 Smart Tech",
      text: "Backed by AI & ML, our predictions are accurate, secure, and user-first.",
    },
    {
      title: "🤝 Meet Our Team",
      text: "Engineers and med-tech minds building the future of preventive healthcare.",
    },
    {
      title: "🔐 Privacy First",
      text: "Your data stays yours — secure, anonymous, and never stored.",
    },
  ];

  return (
    
    <div className="about-us-container3">
      <button className="back-button3" onClick={() => window.history.back()}>
        Back
      </button>

      

      <h1 className="about-us-heading3">About Us</h1>
      <p className="about-us-description3">
        We are a passionate team of developers, designers, and innovators creating solutions for the future.
      </p>
      

      <div className="team-cards3">
        {developers.map((dev, index) => (
          <motion.div 
            key={index}
            className="card3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <img src={dev.img} alt={dev.name} className="card-img3" />
            <div className="card-body3">
              <h3 className="card-title3">{dev.name}</h3>
              <p className="card-role3">{dev.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      

      <div className="cards-container3">
        {features.map((item, i) => (
          <motion.div
            className="glass-card3"
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
    
  );
  
};

export default AboutUs;
