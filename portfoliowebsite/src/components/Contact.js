import React from 'react';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div>
        <p>avidesaiusa@gmail.com</p>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/avidesai" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/avidesai" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
