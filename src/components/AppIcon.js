import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AppIcon.css';

const AppIcon = ({ name, icon, route, action, link, file }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (action === 'external') {
      // Open external link (e.g., LinkedIn)
      window.open(link, '_blank');
    } else if (action === 'download') {
      // Download file (e.g., Resume)
      const linkElement = document.createElement('a');
      linkElement.href = file;
      linkElement.download = file.substring(file.lastIndexOf('/') + 1);
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    } else {
      // Default to internal routing
      navigate(route);
    }
  };

  return (
    <motion.div
      className="app-icon"
      whileHover={{ scale: 1.2 }}
      onClick={handleClick}
    >
      <img src={icon} alt={name} className="icon-image" />
      <p>{name}</p>
    </motion.div>
  );
};

export default AppIcon;