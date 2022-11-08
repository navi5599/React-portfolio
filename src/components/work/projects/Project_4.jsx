import React from 'react';

import './projects.css';

import image1 from '../../../img/projects/project4/MergedImages.png';

function Project_4({ handleProjects }) {
  return (
    <>
      <h1 className="header">Chat App</h1>
      <div className="container">
        <div className="images">
          <img src={image1} alt="meet project" />
        </div>

        <div className="moda_info_section">
          <div class="modal_text">
            <p>
              Chat App is a Mobile application made using React Native.This
              project was part of Career Foundry Full-stack web dev course.To
              make this app, I used Open source platform Expo. This was first
              time I got chance to work with Expo and its utilities.It took me
              about 1 week to complete this application. To find out more,
              please visit Github, and follow instructions to get app running.
            </p>
          </div>
          <div class="modal_list">
            <p class="p_modal">Tech used</p>
            <ul className="tech_used">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React Native</li>
              <li>Expo</li>
            </ul>
          </div>
          <div className="links">
            <div class="content_buttons">
              <a
                className="a-button-modal"
                href="https://github.com/navi5599/Chat_App"
                target="_blank"
                rel="noreferrer"
              >
                Github
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

export default Project_4;
