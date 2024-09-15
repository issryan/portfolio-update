import React from 'react';
import { motion } from 'framer-motion';
import AppIcon from './AppIcon'; 
import './Homepage.css';

const apps = [
  { id: 1, name: 'About', icon: 'path/to/about-icon.png', route: '/about' },
  { id: 2, name: 'Gallery', icon: 'path/to/gallery-icon.png', route: '/gallery' },
  { id: 3, name: 'Projects', icon: 'path/to/projects-icon.png', route: '/projects' },
  { id: 4, name: 'LinkedIn', icon: 'path/to/linkedin-icon.png', action: 'external', link: 'https://www.linkedin.com/in/your-profile' },
  { id: 5, name: 'Resume', icon: 'path/to/resume-icon.png', action: 'download', file: '/path/to/your-resume.pdf' },
  { id: 6, name: 'Contact', icon: 'path/to/contact-icon.png', route: '/contact' },
];

const Homepage = () => {
  return (
    <div className="homepage-container">
      <motion.div className="app-bar" whileHover={{ scale: 1.05 }}>
        {apps.map((app) => (
          <AppIcon key={app.id} name={app.name} icon={app.icon} route={app.route} />
        ))}
      </motion.div>
    </div>
  );
};

export default Homepage;