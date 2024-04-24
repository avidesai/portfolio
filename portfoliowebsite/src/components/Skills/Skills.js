import React from 'react';
import './Skills.css';
import pythonImage from '../../images/python.png';
import cppImage from '../../images/cpp.png';
import reactImage from '../../images/react.png';
import nodeImage from '../../images/node.png';
import sqlImage from '../../images/sql.png';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>
          <img src={pythonImage} alt="Python" />
          Python
        </li>
        <li>
          <img src={cppImage} alt="C++" />
          C++
        </li>
        <li>
          <img src={reactImage} alt="React" />
          React
        </li>
        <li>
          <img src={nodeImage} alt="Node.js" />
          Node.js
        </li>
        <li>
          <img src={sqlImage} alt="SQL" />
          SQL
        </li>
      </ul>
    </section>
  );
};


export default Skills;
