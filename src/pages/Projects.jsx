import React from 'react';
import './Projects.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const [projectsRef, isProjectsVisible] = useScrollAnimation();

  const projectList = [
    {
      id: 1,
      title: 'Shift Happens',
      description: 'A shift scheduling app with smart auto-scheduling features.',
      liveLink: 'https://example.com/shift-happens',
      repoLink: 'https://github.com/issryan/ShiftHappens',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      title: 'Flick',
      description: 'A social media app built for sharing short videos and images.',
      liveLink: 'https://projectflick.netlify.app',
      repoLink: 'https://github.com/project-flick/Flick',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      title: 'Breed Finder',
      description: 'An AI-powered app to identify dog breeds from pictures.',
      liveLink: 'https://example.com/breed-finder',
      repoLink: 'https://github.com/issryan/BreedFinder',
      imageUrl: 'https://via.placeholder.com/300'
    },
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
            <div className="button-group">
              <a href={project.liveLink} className="project-link-button" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href={project.repoLink} className="project-link-button" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;