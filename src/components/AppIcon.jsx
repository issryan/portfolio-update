import React from 'react';
import { motion } from 'framer-motion';
import './AppIcon.css';

const AppIcon = ({ name, icon, onHover }) => {
  return (
    <motion.div
      className="app-icon"
      whileHover={{ scale: 1.2 }}
      onMouseEnter={onHover}
    >
      <img src={icon} alt={name} className="icon-image" />
      <p>{name}</p>
    </motion.div>
  );
};

export default AppIcon;