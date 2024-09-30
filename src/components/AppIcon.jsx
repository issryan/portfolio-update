// src/components/AppIcon.jsx

import React from 'react';
import './AppIcon.css';

const AppIcon = ({ name, icon, onHover, isActive }) => {
  return (
    <div
      className={`app-icon ${isActive ? 'active' : ''}`} 
      onMouseEnter={onHover}
    >
      <img src={icon} alt={`${name} icon`} className="icon-image" />
      <p>{name}</p>
    </div>
  );
};

export default AppIcon;