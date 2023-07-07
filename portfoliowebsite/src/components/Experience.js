import React, { useState } from 'react';
import charm from '../images/charm.jpeg';
import canvas from '../images/canvas.jpeg';
import charisma from '../images/charisma.png';
import uplift from '../images/uplift.png';
import hci from '../images/hci.jpeg';
import nasa from '../images/nasa.png';

const Experience = () => {
  const experiences = [
    {
      id: 6,
      title: 'NASA Ames Research Center',
      location: 'Moffett Field, CA',
      position: 'Software Engineering Intern',
      date: 'July 2017 – August 2017',
      description: [
        'Upgraded the GUI and functionality of Astrobee\'s ground data Java application, enhancing the efficiency of ground control operations for the autonomous free-flying robot.',
      ],
      image: nasa,
    },
    {
      id: 5,
      title: 'Human Computer Interaction Group',
      location: 'Stanford University',
      position: 'Research Intern',
      date: 'June 2018 – August 2018',
      description: [
        'Conducted research and prototyped hardware designs for the Creativity in Cars project, exploring the impact of interactive Amazon Echo games on creative ideation during car trips.',
      ],
      image: hci,
    },
    {
      id: 4,
      title: 'Uplift',
      location: 'Menlo Park, CA',
      position: 'Software Engineering Intern',
      date: 'June 2019 – August 2019',
      description: [
        'Developed a sandbox website using React.js to assist travel partners with integrating Uplift’s "Buy Now Pay Later" travel financing API.',
        'Created comprehensive documentation to onboard Uplift\'s API onto travel partners\' websites, facilitating smooth integration for Wincruise, Southwest Airlines, and AirCanada.',
      ],
      image: uplift,
    },
    {
      id: 3,
      title: 'Charisma Robotics Lab',
      location: 'Oregon State University',
      position: 'Undergraduate Researcher',
      date: 'December 2020 – June 2021',
      description: [
        'Implemented the A* path planning algorithm to enable efficient indoor navigation for a multi-robot system.',
      ],
      image: charisma,
    },
    {
      id: 2,
      title: 'Canvas',
      location: 'San Francisco, CA',
      position: 'Robotics Intern',
      date: 'June 2021 – September 2021',
      description: [
        'Developed a coverage path planning tool with exclusion zone avoidance capabilities, resulting in a 22% reduction in labor costs for robot manipulation in complex environments.',
        'Prototyped a computer vision tool to detect and classify errors caused by the robot, enhancing project quality and minimizing rework.',
      ],
      image: canvas,
    },
    {
      id: 1,
      title: 'Charm Industrial',
      location: 'San Francisco, CA',
      position: 'Software Engineering Intern',
      date: 'June 2022 – September 2022',
      description: [
        'Improved the usability and safety of a Python GUI used to operate Charm’s biomass reactors, resulting in a 20% increase in operator efficiency.',
        'Designed and tested a version control test suite to ensure consistency and viability of internal software updates, reducing potential errors by 15%.',
      ],
      image: charm,
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleExperienceClick = (experienceId) => {
    setSelectedExperience(experienceId);
  };

  return (
    <section id="experience">
      <h2>Experiences</h2>
      <h4>Click on a company below to learn more &#128071;</h4>
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
          </div>
        ))}
      </div>

      {experiences.map((experience) => (
        <div
          key={experience.id}
          className={`experience-card ${selectedExperience === experience.id ? 'active' : ''}`}
        >
          <h3>{experience.title}</h3>
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