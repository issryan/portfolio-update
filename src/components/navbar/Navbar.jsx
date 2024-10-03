import React from 'react';
import './Navbar.css';
import AppIcon from '../AppIcon';
import galleryicon from '../../assets/galleryIcon.png';

const apps = [
  { id: 1, name: 'About', icon: 'path/to/about-icon.png', route: '/about' },
  { id: 2, name: 'Projects', icon: 'path/to/projects-icon.png', route: '/projects' },
  { id: 3, name: 'Gallery', icon: {galleryicon} },
  { id: 4, name: 'Resume', icon: 'path/to/resume-icon.png', route: '/resume' },
];

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="app-bar">
        {apps.map((app) => (
          <AppIcon key={app.id} name={app.name} icon={app.icon} route={app.route} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;