import React from 'react';
import { Link } from 'react-scroll';

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
          <div className="modal_text">
            <p>
              Meet app is PWA type of application made using React.This project
              was part of Career Foundry Full-stack web development course. App
              has features like: Displaying upcoming events and searching for
              the same. Expanding event card to view more info about upcoming
              event.
            </p>

            <br></br>
            <p>
              To make this app, I used TDD (test driven development)
              approach.Obviously, this was first time I got chance to work with
              stuff like AWS Lambda and serverless.I also got chance to learn
              how to deal with Google APIs, as I was using it to fetch data for
              my events.It took me about 2 weeks to complete this application.
            </p>
            <br></br>
            <p className="text_headers">Google API:</p>
            <br></br>
            <p>
              First time I met with APIs, is in Movie project where I made API
              myself. This time I used Googles API to fetch data about upcoming
              events. Since Google Calendar APi is a protected API, I also
              needed to implement 0Auth token authorization. To issue OAuth2
              tokens I used AWS Lambda functions.
            </p>
            <br></br>
            <p className="text_headers">Building UI:</p>
            <br></br>
            <p>
              For the frontend part I used JavaScript library React. To style
              the app I used pure CSS, and for the layout I used flexbox. For
              the data visualization I used Recharts library. Recharts provides
              some really fancy scatter and pie charts, and is well documented.
            </p>

            <br></br>
            <p className="text_headers">Completion:</p>
            <br></br>
            <p>
              To complete this app, it took me about one week. To achieve this,
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
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                  alt="react icon"
                />
              </li>
              <li>
                <img
                  className="contrast_icon"
                  alt="aws icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                />
              </li>
            </ul>
          </div>
          <div className="links">
            <div className="content_buttons">
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

export default Project_1;
