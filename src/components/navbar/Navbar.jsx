import React from 'react';
import './Navbar.css';
import AppIcon from '../AppIcon';

const apps = [
  { id: 1, name: 'About', icon: 'path/to/about-icon.png', route: '/about' },
  { id: 2, name: 'Gallery', icon: 'path/to/gallery-icon.png', route: '/gallery' },
  { id: 3, name: 'Projects', icon: 'path/to/projects-icon.png', route: '/projects' },
  { id: 4, name: 'Contact', icon: 'path/to/contact-icon.png', route: '/contact' },
  { id: 5, name: 'Resume', icon: 'path/to/resume-icon.png', route: '/resume' },
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