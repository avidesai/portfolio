import React from 'react';
import './Education.css';

// Import your images
import utaustin from '../../images/utaustin.png';
import oregonstate from '../../images/oregonstate.png';

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div>
        <img src={utaustin} alt="" className="education-logo" />
        <h3>University of Texas at Austin</h3>
        <h4>M.S. Artificial Intelligence</h4>
        <p>Graduating December 2025 (Expected)</p>
      </div>
      <div>
        <img src={oregonstate} alt="" className="education-logo" />
        <h3>Oregon State University</h3>
        <h4>B.S. Computer Science</h4>
        <p>Graduated June 2024</p>
        <hr className="custom-hr" />
        <p>Cum laude distinction</p>
        <p>Human Computer Interaction focus</p>
      </div>
    </section>
  );
};

export default Education;