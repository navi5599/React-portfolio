import React from 'react';
import { Link } from 'react-scroll';

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

            <br></br>
            <p>
              This application was a personal project and part of the Career
              Foundry course. The aim was to create a full-stack Application
              using MEAN stack. While developing this project I learned how APIs
              work, and how to implement them into any Angular app.
            </p>
            <br></br>
            <p className="text_headers">Building API:</p>
            <br></br>
            <p>
              To learn how APIs work, I needed to make one myself. I developed
              RESTful API using <span>Nodejs</span> and <span>Express</span>. In
              order to understand better the HTTP requests I spent extra time
              using Postman and testing those. Also, this was the time when I
              first learned about HTTP authentication and JWT authentication.
            </p>
            <br></br>
            <p className="text_headers">Building UI:</p>
            <br></br>
            <p>
              After making an <span>API</span>, it was necessary to build some
              user interface so that users could make those requests and make
              use of an actual application. As i already used React for one of
              mine identical apps, I decided to use another JavaScript
              framework, Angular. To develop interface I used Angular Materials,
              as it provides some really nice and reusable components, such as
              dialogs, buttons and cards.
            </p>

            <br></br>
            <p className="text_headers">Completion:</p>
            <br></br>
            <p>
              To complete this app, it took me more than one week. To achieve
              this, and to improve and manage my workspace, I used{' '}
              <span>Kanban</span> approach. It helped me a lot to stay on track
              and finish this project in reasonable time.
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

export default Project_5;
