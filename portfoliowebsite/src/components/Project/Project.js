import React, { useState } from 'react';
import './Project.css';
import realOfferImage from '../../images/realOffer.png';
import cashFlowImage from '../../images/CapRateIO.png';

const projects = [
  {
    title: 'RealOffer.io',
    description: 'RealOffer revolutionizes the real estate experience, offering a seamless interface for managing listings, offers, and document workflows. A machine learning algorithm provides users with precise, data-driven pricing suggestions to inform buying and selling decisions.',
    technologies: 'React, Node.js, Express, MongoDB, Python, scikit-learn',
    image: realOfferImage,
    liveDemoLink: 'https://www.realoffer.io/',
  },
  {
    title: 'CapRate.io',
    description: 'CapRate.io is a rental property cash flow analysis tool designed for investors. It simplifies the process of calculating potential cash flow, capitalization rates, and return on investment for rental properties. CapRate.io offers users insightful and accurate financial analysis, empowering users to make informed investment decisions.',
    technologies: 'React, Node.js, Express, MongoDB',
    image: cashFlowImage,
    liveDemoLink: 'https://caprateio.vercel.app/'
    },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const { title, description, technologies, image, githubLink, liveDemoLink } = projects[currentIndex];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="carousel-container">
        <button className="carousel-button left" onClick={handlePrevClick}>‹</button>
        <div className="projects-container">
          <div className="project-card">
            <div className="project-content">
              <div className="project-image">
                <img src={image} alt={`${title} Project`} />
              </div>
              <div className="project-details">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Technologies: {technologies}</p>
                <div className="project-links">
                  <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-button right" onClick={handleNextClick}>›</button>
      </div>
    </section>
  );
};

export default Project;
