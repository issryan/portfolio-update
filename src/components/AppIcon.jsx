// src/components/AppIcon.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AppIcon.css';

const AppIcon = ({ name, icon, route }) => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="app-icon" onClick={() => navigate(route)}>
      <img src={icon} alt={`${name} icon`} className="icon-image" />
      <p>{name}</p>
    </div>
  );
};

export default AppIcon;