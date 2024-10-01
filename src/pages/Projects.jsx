import React from 'react';
import './Projects.css'; 
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const [projectsRef, isProjectsVisible] = useScrollAnimation();

  const projectList = [
    { 
      id: 1, 
      title: 'Shift Happens', 
      description: 'A shift scheduling web app with conflict detection and employee availability features.', 
      link: '/project1', 
      liveLink: 'https://live-link.com', 
      githubLink: 'https://github.com/repo1',
      imageUrl: 'https://via.placeholder.com/300',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    { 
      id: 2, 
      title: 'Flick', 
      description: 'A social media app for sharing favorite flicks with friends.', 
      link: '/project2',
      liveLink: 'https://live-link.com', 
      githubLink: 'https://github.com/repo2',
      imageUrl: 'https://via.placeholder.com/300',
      tags: ['React', 'MongoDB', 'CSS']
    },
    { 
      id: 3, 
      title: 'Breed Finder', 
      description: 'An AI-powered app to identify dog breeds using machine learning.', 
      link: '/project3',
      liveLink: 'https://live-link.com', 
      githubLink: 'https://github.com/repo3',
      imageUrl: 'https://via.placeholder.com/300',
      tags: ['Python', 'Flask', 'MongoDB']
    }
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
            
            {/* Tags for the technology stack */}
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            {/* Buttons for live link and GitHub */}
            <div className="button-container">
              <a href={project.liveLink} className="project-link">Live Link</a>
              <a href={project.githubLink} className="project-github">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;