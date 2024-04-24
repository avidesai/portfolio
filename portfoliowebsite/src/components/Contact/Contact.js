import React from 'react';
import './Contact.css';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';

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
        <div className="button-container">
          <a className="resume-button" href="https://docs.google.com/document/d/1gdfyFdoNI6umqGu6U-4Mc7L4ezLXGb8qlnKlJf0zcic/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
