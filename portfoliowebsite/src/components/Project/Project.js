import React from 'react';
import './Project.css';
import realOfferImage from '../../images/realOffer.png'; // Add the image for RealOffer to your images directory

const Project = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <div className="project-content">
            <div className="project-image">
              <img src={realOfferImage} alt="RealOffer Project" />
            </div>
            <div className="project-details">
              <h3>RealOffer</h3>
              <p>RealOffer revolutionizes the real estate experience, offering a seamless interface for managing listings, offers, and document workflows.</p>
              <p>A machine learning algorithm provide users with precise, data-driven pricing suggestions to inform buying and selling decisions.</p>
              <p>Technologies: React, Node.js, Express, MongoDB, Python, scikit-learn</p>
              <div className="project-links">
                <a href="https://github.com/avidesai/RealOffer" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://avidesai.github.io/RealOffer/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
        {/* You can add more project cards in this format if you have other projects to showcase */}
      </div>
    </section>
  );
};

export default Project;
