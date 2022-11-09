import React from 'react';

import './projects.css';

import image1 from '../../../img/projects/project3/poke1.png';
import image2 from '../../../img/projects/project3/poke2.png';

function Project_3({ handleProjects }) {
  return (
    <>
      <h1 className="header">Pokedex App</h1>
      <div className="container">
        <div className="images">
          <img src={image1} alt="meet project" />

          <img src={image2} alt="meet project" />
        </div>

        <div className="moda_info_section">
          <div className="modal_text">
            <p>
              This is a simple Pokedex app made using vanilla JavaScript, with
              some jQuery. It fetches data from public API. Developing this app,
              I learned basics of jQuery and Bootstrap. I used Bootstrap to
              style the app.It took me one week to finish this application.
            </p>
          </div>
          <div className="modal_list">
            <p className="p_modal">Tech used</p>
            <ul className="tech_used">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Bootstrap v4.3.1</li>
            </ul>
          </div>
          <div className="links">
            <div className="content_buttons">
              <a
                className="a-button-modal"
                href="https://github.com/navi5599/simple-js-app"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                className="a-button-modal"
                href="https://pkmn-pokedex.netlify.app/"
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

export default Project_3;
