import React from 'react';
import './Projects.css'; 
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const [projectsRef, isProjectsVisible] = useScrollAnimation();

  const projectList = [
    { id: 1, title: 'Shift Happens', description: 'Description for project 1',link: '/project1', imageUrl: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Flick', description: 'Description for project 2', link: '/project2',imageUrl: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Breed Finder', description: 'Description for project 3', link: '/project3',imageUrl: 'https://via.placeholder.com/300' },
    { id: 4, title: 'Alphard Survey', description: 'Description for project 4', link: '/project4', imageUrl: 'https://via.placeholder.com/300' },
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