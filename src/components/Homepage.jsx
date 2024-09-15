import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AppIcon from './AppIcon';
import About from '../pages/About'; 
import Gallery from '../pages/Gallery'; 
import Projects from '../pages/Projects'; 
import './Homepage.css';

const apps = [
  { id: 1, name: 'About', icon: 'path/to/about-icon.png', component: <About /> },
  { id: 2, name: 'Gallery', icon: 'path/to/gallery-icon.png', component: <Gallery /> },
  { id: 3, name: 'Projects', icon: 'path/to/projects-icon.png', component: <Projects /> },
  { id: 4, name: 'Contact', icon: 'path/to/contact-icon.png', component: <div>Contact Component</div> },
  { id: 5, name: 'Resume', icon: 'path/to/resume-icon.png', component: <div>Resume Component</div> },
  { id: 6, name: 'LinkedIn', icon: 'path/to/linkedin-icon.png', component: <div>LinkedIn Component</div> },
];

const Homepage = () => {
  const [selectedApp, setSelectedApp] = useState(apps[0]);

  const expandContent = () => {
    document.getElementById('app-content').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage-container">
      {/* Toolbar */}
      <div className="toolbar">
        <div>Logo</div>
        <div>Toolbar Content (TBD)</div>
      </div>

      {/* Background overlay */}
      <div className="homepage-overlay"></div>

      {/* Top Section: App Menu */}
      <motion.div className="app-bar" whileHover={{ scale: 1.05 }}>
        {apps.map((app) => (
          <AppIcon 
            key={app.id} 
            name={app.name} 
            icon={app.icon} 
            onHover={() => setSelectedApp(app)} 
          />
        ))}
      </motion.div>

      {/* Bottom Section: Dynamic Content */}
      <div 
        id="app-content" 
        className="app-content"
        onWheel={expandContent} // Trigger expansion on scroll
      >
        {selectedApp.component}
      </div>
    </div>
  );
};

export default Homepage;