// src/components/AppIcon.jsx
import React from 'react';
import './AppIcon.css';

const AppIcon = ({ name, icon, onHover }) => {
  return (
    <div className="app-icon" onMouseEnter={onHover}>
      <img src={icon} alt={name} className="icon-image" />
      <p>{name}</p>
    </div>
  );
};

export default AppIcon;