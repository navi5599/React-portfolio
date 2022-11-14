import React from 'react';
import { Link } from 'react-scroll';

import './projects.css';

import image1 from '../../../img/projects/project6/api1.png';
import image2 from '../../../img/projects/project6/api2.png';

function Project_6({ handleProjects }) {
  return (
    <>
      <h1 className="header">
        My Flix REST <span>API</span>
      </h1>
      <div className="container">
        <div className="images">
          <img src={image1} alt="meet project" />

          <img src={image2} alt="meet project" />
        </div>

        <div className="moda_info_section">
          <div className="modal_text">
            <p>
              This is an REST API for application called <span>myFlix</span>{' '}
              that interacts with database and store data about different
              movies. The users will be able to sign up,update their personal
              information,and create a list of their favorite movies.
              Documentation is available and is made with <span>Swagger</span>.
            </p>

            <br></br>
            <p>
              This application was a personal project and part of the Career
              Foundry course. The aim was to create a RESTfull API that would be
              used later on in both React and Angular apps.
            </p>
            <br></br>
            <p className="text_headers">Building API:</p>
            <br></br>
            <p>
              API is built using <span>Node</span> and <span>Express</span>{' '}
              framework. In order to make API, I needed first to learn one of
              the most common patterns of architecture for web services/APIs -
              Representational State Transfer <span>(REST)</span>. So in
              general, the job of a REST API is to read an HTTP request and
              apply the appropriate CRUD (Create, Read, Update or
              Delete)operation. To make those HTTP requests actually work, and
              get some data back, I used MongoDB to store the data about movies.
            </p>

            <br></br>
            <p className="text_headers">Completion:</p>
            <br></br>
            <p>
              To complete this API, it took me more two weeks. To achieve this,
              and to improve and manage my workspace, I used <span>Kanban</span>{' '}
              approach. It helped me a lot to stay on track and finish this
              project in reasonable time.
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
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
                  alt="css icon"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="javascript icon"
                />
              </li>
              <li>
                <img
                  className="contrast_icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="node icon"
                />
              </li>
              <li>
                <img
                  className="contrast_icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="mongo icon"
                />
              </li>
              <li>
                <img
                  className="contrast_icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                  alt="express icon"
                />
              </li>
            </ul>
          </div>
          <div className="links">
            <div className="content_buttons">
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

export default Project_6;
