import React from 'react';
import './Skills.css';
import pythonImage from '../../images/python.png';
import javascriptImage from '../../images/javascript.png';
import reactImage from '../../images/react.png';
import nodeImage from '../../images/node.png';
import mongodbImage from '../../images/mongodb.png';
import pytorchImage from '../../images/pytorch.png';
import opencvImage from '../../images/opencv.png';
import pathplanningImage from '../../images/pathplanning.webp';

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
          <img src={javascriptImage} alt="JavaScript" />
          JavaScript
        </li>
        <li>
          <img src={reactImage} alt="React" />
          React.js
        </li>
        <li>
          <img src={nodeImage} alt="Node.js" />
          Node.js
        </li>
        <li>
          <img src={mongodbImage} alt="MongoDB" />
          MongoDB
        </li>
        <li>
          <img src={pytorchImage} alt="PyTorch" />
          PyTorch
        </li>
        <li>
          <img src={pathplanningImage} alt="Path Planning" />
          Path Planning
        </li>
        <li>
          <img src={opencvImage} alt="Computer Vision" />
          Computer Vision
        </li>
        
      </ul>
    </section>
  );
};


export default Skills;
