// Experience.js

import React, { useState } from 'react';
import './Experience.css';
import charm from '../../images/charm.jpeg';
import canvas from '../../images/canvas.jpeg';
import charisma from '../../images/charisma.jpg';
import iras from '../../images/iras.png';
import uplift from '../../images/uplift.png';
import hci from '../../images/hci.jpeg';
import nasa from '../../images/nasa.png';

const getYearFromDate = (dateString) => {
  const year = dateString.split(' ')[1]; // Assuming the year is always the second word
  return year;
};

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'NASA Ames Research Center',
      location: 'Moffett Field, CA',
      position: 'Software Engineering Intern',
      date: 'July 2017 – August 2017',
      url: 'https://www.nasa.gov/ames',
      description: [
        'Upgraded the Java-based user interface for the ISS\'s robotic assistant, Astrobee, improving user interaction and control.',
        'Collaborated in a fast-paced Agile/Scrum team to prototype new features rapidly, achieving timely and effective software updates.',
      ],
      image: nasa,
    },
    {
      id: 2,
      title: 'Human Computer Interaction Group',
      location: 'Stanford University',
      position: 'Research Intern',
      date: 'June 2018 – August 2018',
      url: 'https://hci.stanford.edu/',
      description: [
        'Conducted research and prototyped hardware designs for the Creativity in Cars project, exploring the impact of interactive Amazon Echo games on creative ideation during car trips.',
      ],
      image: hci,
    },
    {
      id: 3,
      title: 'Uplift',
      location: 'Menlo Park, CA',
      position: 'Software Engineering Intern',
      date: 'June 2019 – August 2019',
      url: 'https://www.uplift.com/',
      description: [
        'Developed a full-stack web application, enabling customers to seamlessly integrate Uplift\'s payments API into their own websites.',
        'Utilized React.js, Node.js to create a robust onboarding platform, improving API integration process and enhancing user experience.',
      ],
      image: uplift,
    },
    {
      id: 4,
      title: 'Charisma Robotics Lab',
      location: 'Oregon State University',
      position: 'Undergraduate Researcher',
      date: 'December 2020 – June 2021',
      url: 'https://www.charismarobotics.com/',
      description: [
        'Implemented the A* path planning algorithm in Python to facilitate efficient navigation of a multi-robot system.',
        'Utilized computer vision to localize robots in the environment.',
      ],
      image: charisma,
    },
    {
      id: 5,
      title: 'Canvas',
      location: 'San Francisco, CA',
      position: 'Robotics Software Engineering Intern',
      date: 'June 2021 – September 2021',
      url: 'https://www.canvas.build/',
      description: [
        'Engineered a motion-planning algorithm in Python, boosting robotic operational efficiency by 22%.',
        'Prototyped a computer vision system using OpenCV to identify robot-induced errors during construction tasks.',
      ],
      image: canvas,
    },
    {
      id: 6,
      title: 'Charm Industrial',
      location: 'San Francisco, CA',
      position: 'Software Engineering Intern',
      date: 'June 2022 – September 2022',
      url: 'https://charmindustrial.com/',
      description: [
        'Revamped a Python user interface, improving efficiency and safety for an industrial control system.',
        'Performed comprehensive unit testing to ensure code quality.',
      ],
      image: charm,
    },
    {
      id: 7,
      title: 'Intelligent and Reliable Autonomous Systems Group',
      location: 'Oregon State University',
      position: 'Undergraduate Researcher',
      date: 'September 2023 – December 2023',
      url: 'https://www.sandhyasai.com/group',
      description: [
        'Developed a Python-based reinforcement learning algorithm to train an agent, achieving human-level performance in Atari game environments.',
      ],
      image: iras,
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleExperienceClick = (experienceId) => {
    setSelectedExperience(experienceId);
  };

  return (
    <section id="experience">
      <h2>Experiences</h2>
      <h4>Click on a work experience below to learn more &#128071;</h4>
      <div className="timeline">
        <div className="timeline-line"></div>
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className={`timeline-item ${selectedExperience === experience.id ? 'active' : ''}`}
            onClick={() => handleExperienceClick(experience.id)}
          >
            <img
              src={experience.image}
              alt={experience.title}
              className={`timeline-image ${selectedExperience === experience.id ? 'active' : ''}`}
            />
            <h5 className="year-text">{getYearFromDate(experience.date)}</h5>
          </div>
        ))}
      </div>

      {experiences.map((experience) => (
        <div
          key={experience.id}
          className={`experience-card ${selectedExperience === experience.id ? 'active' : ''}`}
        >
          <h3>
            <a href={experience.url} target="_blank" rel="noopener noreferrer">
              {experience.title}
            </a>
          </h3>
          <h4>{experience.location}</h4>
          <div className="experience-details">
            <p className="experience-title">{experience.position}</p>
            <p className="experience-date">{experience.date}</p>
          </div>
          <ul>
            {experience.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;