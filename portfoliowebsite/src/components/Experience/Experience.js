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
        'Upgraded the GUI and functionality of Astrobee\'s ground data Java application, enhancing the efficiency of ground control operations for the autonomous free-flying robot.',
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
        'Developed a sandbox website using React.js to assist travel partners with integrating Uplift’s "Buy Now Pay Later" travel financing API.',
        'Created comprehensive documentation to onboard Uplift\'s API onto travel partners\' websites, facilitating smooth integration for Wincruise, Southwest Airlines, and AirCanada.',
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
        'Implemented the A* path planning algorithm to enable efficient indoor navigation for a multi-robot system.',
      ],
      image: charisma,
    },
    {
      id: 5,
      title: 'Canvas',
      location: 'San Francisco, CA',
      position: 'Robotics Intern',
      date: 'June 2021 – September 2021',
      url: 'https://www.canvas.build/',
      description: [
        'Developed a coverage path planning tool with exclusion zone avoidance capabilities, resulting in a 22% reduction in labor costs for robot manipulation in complex environments.',
        'Prototyped a computer vision tool to detect and classify errors caused by the robot, enhancing project quality and minimizing rework.',
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
        'Improved the usability and safety of a Python interface used to operate Charm’s biomass reactors, resulting in a 20% increase in operator efficiency.',
        'Designed and tested a version control test suite to ensure consistency and viability of internal software updates, reducing potential errors by 15%.',
      ],
      image: charm,
    },
    {
      id: 7,
      title: 'Intelligent and Reliable Autonomous Systems (IRAS) Group',
      location: 'Oregon State University',
      position: 'Undergraduate Researcher',
      date: 'September 2023 – December 2023',
      url: 'https://www.sandhyasai.com/group',
      description: [
        'Designed and implemented a comprehensive Markov Decision Process (MDP) for an Atari game, integrating human eye position data as a heuristic.',
        'Leveraged human feedback data to train agents, achieving gameplay that emulates human strategies and decision-making.',
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
            <h5>{getYearFromDate(experience.date)}</h5>
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