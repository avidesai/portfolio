import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
        <div className="download-resume">
            <a href="https://docs.google.com/document/d/1aTn2UgOyVpR1acOiXIxfiVqIVzAqHQlkk58bYZO6f-Y/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      <div>
        <h3>Charm Industrial</h3>
        <h4>San Francisco, CA</h4>
        <div className="experience-details">
          <p className="experience-title">Software Engineering Intern</p>
          <p className="experience-date">June 2022 – September 2022</p>
        </div>
        <ul>
          <li>Improved the usability and safety of a Python GUI used to operate Charm’s biomass reactors, resulting in a 20% increase in operator efficiency.</li>
          <li>Designed and tested a version control test suite to ensure consistency and viability of internal software updates, reducing potential errors by 15%.</li>
        </ul>
      </div>
      <div>
        <h3>Canvas</h3>
        <h4>San Francisco, CA</h4>
        <div className="experience-details">
          <p className="experience-title">Robotics Intern</p>
          <p className="experience-date">June 2021 – September 2021</p>
        </div>
        <ul>
          <li>Developed a coverage path planning tool with exclusion zone avoidance capabilities, resulting in a 22% reduction in labor costs for robot manipulation in complex environments.</li>
          <li>Prototyped a computer vision tool to detect and classify errors caused by the robot, enhancing project quality and minimizing rework.</li>
        </ul>
      </div>
      <div>
        <h3>Charisma Robotics Lab</h3>
        <h4>Corvallis, OR</h4>
        <div className="experience-details">
          <p className="experience-title">Undergraduate Researcher</p>
          <p className="experience-date">December 2020 – June 2021</p>
        </div>
        <ul>
          <li>Implemented the A* path planning algorithm to enable efficient indoor navigation for a multi-robot system.</li>
        </ul>
      </div>
      <div>
        <h3>Uplift</h3>
        <h4>Menlo Park, CA</h4>
        <div className="experience-details">
          <p className="experience-title">Software Engineering Intern</p>
          <p className="experience-date">June 2019 – August 2019</p>
        </div>
        <ul>
          <li>Developed a sandbox website using React.js to assist travel partners with integrating Uplift’s "Buy Now Pay Later" travel financing API.</li>
          <li>Created comprehensive documentation to onboard Uplift's API onto travel partners' websites, facilitating smooth integration for Wincruise, Southwest Airlines, and AirCanada.</li>
        </ul>
      </div>
      <div>
        <h3>Human Computer Interaction Group</h3>
        <h4>Stanford, CA</h4>
        <div className="experience-details">
          <p className="experience-title">Research Intern</p>
          <p className="experience-date">June 2018 – August 2018</p>
        </div>
        <ul>
          <li>Conducted research and prototyped hardware designs for the Creativity in Cars project, exploring the impact of interactive Amazon Echo games on creative ideation during car trips.</li>
        </ul>
      </div>
      <div>
        <h3>NASA Ames Research Center</h3>
        <h4>Moffett Field, CA</h4>
        <div className="experience-details">
          <p className="experience-title">Software Engineering Intern</p>
          <p className="experience-date">July 2017 – August 2017</p>
        </div>
        <ul>
          <li>Upgraded the GUI and functionality of Astrobee's ground data Java application, enhancing the efficiency of ground control operations for the autonomous free-flying robot.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
