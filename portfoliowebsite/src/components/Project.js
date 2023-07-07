import React from 'react';
import butter from '../images/butter.png';
import adgenius from '../images/adgenius.png';

const Project = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        <div className="project-card">
          <div className="project-image">
            <img src={butter} alt="Project 1" />
          </div>
          <div className="project-details">
            <h3>butter.</h3>
            <p>A betting app for socially trending events</p>
            <div className="project-links">
              <a href="https://github.com/avidesai/butterV2" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://avidesai.github.io/butterV2/" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img src={adgenius} alt="Project 2" />
          </div>
          <div className="project-details">
            <h3>AdGenius</h3>
            <p>AI powered social media marketing agent</p>
            <div className="project-links">
              <a href="https://github.com/avidesai/AI-Marketing" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://avidesai.github.io/AI-Marketing/" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
