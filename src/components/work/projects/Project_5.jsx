import React from 'react';

import './projects.css';

import image1 from '../../../img/projects/project5/angular1.png';
import image2 from '../../../img/projects/project5/angular2.png';

function Project_5({ handleProjects }) {
  return (
    <>
      <h1 className="header">My Flix Movie App-Angular</h1>
      <div className="container">
        <div className="images">
          <img src={image1} alt="meet project" />

          <img src={image2} alt="meet project" />
        </div>

        <div className="moda_info_section">
          <div class="modal_text">
            <p>
              This is a movie application, similar the one made with React,
              instead, I used Angular as framework.App have features like,
              registering and logging into app, searching for movies and adding
              them into favorites. Also you will be able to update and delete
              account. Data is fetched from API that I made, and is available in
              works section. To style app I used Angular's materials. It took me
              two weeks to finish this app.
            </p>
          </div>
          <div class="modal_list">
            <p class="p_modal">Tech used</p>
            <ul className="tech_used">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Angular v14.2.0</li>
              <li>Angular materials</li>
            </ul>
          </div>
          <div className="links">
            <div class="content_buttons">
              <a
                className="a-button-modal"
                href="https://github.com/navi5599/myFlix-Angular"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                className="a-button-modal"
                href="https://navi5599.github.io/myFlix-Angular/welcome"
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

export default Project_5;
