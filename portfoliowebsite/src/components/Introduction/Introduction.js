import React from 'react';
import './Introduction.css';
import profilePic from '../../images/profile.png'; // Add your profile image in the images directory

const Introduction = () => {
  return (
    <section id="about">
      <div className="profile-pic-container">
        <img src={profilePic} alt="Avi Desai" className="profile-pic" />
      </div>
      <h1>Avi Desai</h1>
      <p>
        Hello, I'm Avi &#128075;
        I am a passionate software developer with a strong interest in machine learning and intelligent systems. I enjoy working on challenging projects and leveraging my skills in various technologies to solve problems. Let's build something exceptional together!
      </p>
    </section>
  );
};

export default Introduction;
