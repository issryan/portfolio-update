// src/pages/Projects.jsx
import React from 'react';
import './Projects.css'; // Import the CSS file for styling
import useScrollAnimation from '../hooks/useScrollAnimation'; // Import the custom hook

const Projects = () => {
  const [projectsRef, isProjectsVisible] = useScrollAnimation();

  const projectList = [
    { id: 1, title: 'Project 1', description: 'Description for project 1', imageUrl: 'path/to/project1.png' },
    { id: 2, title: 'Project 2', description: 'Description for project 2', imageUrl: 'path/to/project2.png' },
    { id: 3, title: 'Project 3', description: 'Description for project 3', imageUrl: 'path/to/project3.png' },
    { id: 4, title: 'Project 4', description: 'Description for project 4', imageUrl: 'path/to/project4.png' },
  ];

  return (
    <section
      ref={projectsRef}
      className={`projects-page ${isProjectsVisible ? 'fade-in' : 'preview'}`}
    >
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <button className="project-link">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;