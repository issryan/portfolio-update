import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Project One',
      description: 'This is a brief description of Project One.',
      imageUrl: 'path/to/project-one-image.jpg',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'This is a brief description of Project Two.',
      imageUrl: 'path/to/project-two-image.jpg',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'This is a brief description of Project Three.',
      imageUrl: 'path/to/project-three-image.jpg',
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'This is a brief description of Project Four.',
      imageUrl: 'path/to/project-four-image.jpg',
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <Link to={`/projects/${project.id}`} className="project-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;