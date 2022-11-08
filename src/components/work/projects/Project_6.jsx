import React from 'react';

import './projects.css';

import image1 from '../../../img/projects/project6/api1.png';
import image2 from '../../../img/projects/project6/api2.png';

function Project_6({ handleProjects }) {
  return (
    <>
      <h1 className="header">My Flix REST API</h1>
      <div className="container">
        <div className="images">
          <img src={image1} alt="meet project" />

          <img src={image2} alt="meet project" />
        </div>

        <div className="moda_info_section">
          <div class="modal_text">
            <p>
              This is RESTful API that I developed using Node and Express, and
              for database I used MongoDB. This is first time I got chance to
              learn some of backend logic. To find out more, refer to Live demo
              link, there is full documentation available.
            </p>
          </div>
          <div class="modal_list">
            <p class="p_modal">Tech used</p>
            <ul className="tech_used">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node.js v16.15.1</li>
              <li>MongoDB v5.0.7</li>
              <li>Express</li>
            </ul>
          </div>
          <div className="links">
            <div class="content_buttons">
              <a
                className="a-button-modal"
                href="https://github.com/navi5599/myFlix-app"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                className="a-button-modal"
                href="https://my-flix-app-1910.herokuapp.com/api-doc/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
            <button className="back_button" onClick={handleProjects}>
              Go back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project_6;
