import React from 'react';

import './projects.css';

import image1 from '../../../img/projects/project2/flix1.png';
import image2 from '../../../img/projects/project2/flix2.png';

function Project_2({ handleProjects }) {
  return (
    <>
      <h1 className="header">my Flix Movie App</h1>
      <div className="container">
        <div className="images">
          <img src={image1} alt="meet project" />

          <img src={image2} alt="meet project" />
        </div>

        <div className="moda_info_section">
          <div class="modal_text">
            <p>
              This is a movie application made using React.App have features
              like, registering and logging into app, searching for movies and
              adding them into favorites. Also you will be able to update and
              delete account.I also used Redux to handle states of the app,
              which helped me to get insight into redux and how it works.It took
              me about 2 weeks to complete this application.
            </p>
          </div>
          <div class="modal_list">
            <p class="p_modal">Tech used</p>
            <ul className="tech_used">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React v18.2</li>
              <li>Redux v4.2.0</li>
            </ul>
          </div>
          <div className="links">
            <div class="content_buttons">
              <a
                className="a-button-modal"
                href="https://github.com/navi5599/myFlix-client"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                className="a-button-modal"
                href="https://myflix-movie.netlify.app/"
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

export default Project_2;
