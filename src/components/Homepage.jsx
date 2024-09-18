// src/components/Homepage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AppIcon from './AppIcon';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Projects from '../pages/Projects';
import './Homepage.css';
import galleryIcon from '../assets/galleryIcon.png'; 


const apps = [
  { id: 1, name: 'About', icon: 'path/to/about-icon.png', component: <About /> },
  { id: 2, name: 'Gallery', icon: {galleryIcon}, component: <Gallery /> },
  { id: 3, name: 'Projects', icon: 'path/to/projects-icon.png', component: <Projects /> },
  { id: 4, name: 'Contact', icon: 'path/to/contact-icon.png', component: <div>Contact Component</div> },
  { id: 5, name: 'Resume', icon: 'path/to/resume-icon.png', component: <div>Resume Component</div> },
];

const Homepage = () => {
  const [selectedApp, setSelectedApp] = useState(apps[0]); 

  const handleAppSwitch = (app) => {
    setSelectedApp(app); 
  };

  return (
    <div className="homepage-container">
      {/* Toolbar */}
      <div className="toolbar">
        <div>Logo</div>
        <div>Toolbar Content (TBD)</div>
      </div>

      {/* Top Section: App Menu */}
      <motion.div className="app-bar" whileHover={{ scale: 1.05 }}>
        {apps.map((app) => (
          <AppIcon
            key={app.id}
            name={app.name}
            icon={app.icon}
            onHover={() => handleAppSwitch(app)} 
          />
        ))}
      </motion.div>

      {/* Bottom Section: Display Selected App */}
      <div className="app-content">
        {selectedApp.component}
      </div>
    </div>
  );
};

export default Homepage;