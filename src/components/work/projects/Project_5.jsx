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
          <div className="modal_text">
            <p>
              This is a movie application made using Angular. The app has
              features like registering and logging into the app, searching for
              movies and adding them to favorite list. Also, you will be able to
              update and delete your account.
            </p>

            <p>
              This application was a personal project and part of the Career
              Foundry course. The aim was to create a full-stack Application
              using MEAN stack. While developing this project I learned about
              SPA (single page apps), and how to build them with Angular and
              Angular materials
            </p>

            <p>
              I faced challenges during the development stage: Passing data
              between components, and implementing loaders. To understand better
              how passing data works, I contacted my Tutor for help. With help
              of a tutor, I managed to acquire this skill. To deal with loaders,
              I decided to use help and ideas from google, and try to implement
              them myself. This turned out successful.
            </p>
          </div>
          <div className="modal_list">
            <p className="p_modal">Tech used</p>
            <ul className="tech_used">
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
                  alt="html icon"
                />
              </li>
              <li>
                {' '}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
                  alt="css icon"
                />
              </li>
              <li>
                {' '}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="javascript icon"
                />
              </li>
              <li>
                {' '}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg"
                  alt="angular icon"
                />
              </li>
            </ul>
          </div>
          <div className="links">
            <div className="content_buttons">
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
