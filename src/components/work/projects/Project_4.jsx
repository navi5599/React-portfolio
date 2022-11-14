import React from 'react';
import { Link } from 'react-scroll';

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
          <div className="modal_text">
            <p>
              This is a React Native app developed using open source platform
              Expo. It is a simple Chat app with features like: Homescreen where
              user can chose name and color of background. Sending messages,
              location or send photos, either from library or taken with phone
              camera.
            </p>

            <br></br>
            <p>
              This application was a personal project and part of the Career
              Foundry course. The aim was to create a mobile app using React
              Native. Chat app interface is build with Gifted chat library. To
              store all the data I used Google Firebase, and for the local
              storage i used React Native`s async storage, as this is its own
              system.
            </p>

            <br></br>
            <p className="text_headers">Challenges:</p>
            <br></br>
            <p>
              I faced challenges during the development stage: Storing images
              into Google Firebase. After implementing Google firestore, I made
              functions that would update and eventually store messages into
              Firebase. The problem I encountered is that messages would be
              saved successfully, but when sending images, they wouldn`t be
              displayed. Luckily, solution was pretty easy, as I didn`t defined
              any image property in the function where I update message. That
              way image couldn`t be passed to the messages and eventually
              couldn`t be stored to the firebase.
            </p>
            <br></br>
            <p className="text_headers">Completion:</p>
            <br></br>
            <p>
              To complete this app, it took me about two weeks. To achieve this,
              and to improve and manage my workspace, I used <span>Kanban</span>{' '}
              approach. It helped me a lot to stay on track and finish this
              project in reasonable time.
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              </li>
              <li>Expo</li>
            </ul>
          </div>
          <div className="links">
            <div className="content_buttons">
              <a
                className="a-button-modal"
                href="https://github.com/navi5599/Chat_App"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
            <Link to="w0rk" smooth={true} duration={500}>
              <button className="back_button" onClick={handleProjects}>
                Go back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project_4;
