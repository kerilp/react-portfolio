import React from 'react';
import resume from '../assets/keri-price-resume.pdf';

function Resume() {
  return (
    <div id="resume">
      <h2 className="display-4 headers">My Skills</h2>
      <ul id="skills">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>APIs</li>
        <li>MySQL</li>
        <li>NoSQL</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
        <li>Express JS</li>
        <li>React JS</li>
        <li>Node JS</li>
      </ul>
      <a id="download" href={resume} download>
        Download My Resume
      </a>
    </div>
  );
};

export default Resume;