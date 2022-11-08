import React from 'react';

import './projects.css';

import image1 from '../../../img/projects/project1/meet1.png';
import image2 from '../../../img/projects/project1/meet2.png';

function Project_1({ handleProjects }) {
  return (
    <>
      <h1 className="header">Meet app</h1>
      <div className="container">
        <div className="images">
          <img src={image1} alt="meet project" />

          <img src={image2} alt="meet project" />
        </div>

        <div className="moda_info_section">
          <div class="modal_text">
            <p>
              Meet app is PWA type of application made using React.This project
              was part of Career Foundry Full-stack web dev course.To make this
              app, I used TDD (test driven development) approach.Obviously, this
              was first time I got chance to work with stuff like AWS Lambda and
              serverless.I also got chance to learn how to deal with Google
              APIs, as i was using it to fetch data for my events.It took me
              about 2 weeks to complete this application.
            </p>
          </div>
          <div class="modal_list">
            <p class="p_modal">Tech used</p>
            <ul className="tech_used">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React v18.2</li>
              <li>AWS Lambda</li>
            </ul>
          </div>
          <div className="links">
            <div class="content_buttons">
              <a
                className="a-button-modal"
                href="https://github.com/navi5599/meet"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                className="a-button-modal"
                href="https://navi5599.github.io/meet/"
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

export default Project_1;
