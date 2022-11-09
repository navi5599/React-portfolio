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
          <div className="modal_text">
            <p>
              This is a movie application made using React. The app has features
              like registering and logging into the app, searching for movies
              and adding them to favorite list. Also, you will be able to update
              and delete your account.
            </p>
            <br></br>
            <p>
              This application was a personal project and part of the Career
              Foundry course. The aim was to create a full-stack Application
              using MERN stack. While developing this project I learned how APIs
              work, and how to implement them into any React app.
            </p>
            <br></br>
            <p>
              I faced challenges during the development stage: Managing the
              state using Redux, and dealing with validation and handling them.
              To better understand how Redux handles states, I asked my Tutor
              for help, and he helped me understand it better and implement it
              the right way into the app. The validation I handled myself, as I
              estimated that I can work it out with a few ideas from Google. It
              took me about two weeks to complete this app
            </p>
          </div>
          <div className="modal_list">
            <p className="p_modal">Tech used</p>
            <ul className="tech_used">
              <li>
                {' '}
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
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                  alt="react icon"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  alt="redux icon"
                />
              </li>
            </ul>
          </div>
          <div className="links">
            <div className="content_buttons">
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
