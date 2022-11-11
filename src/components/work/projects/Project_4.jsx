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
              use of an actual application. <span>React</span> was a perfect fit
              for this kind of app, and therefore I decided to use React with
              help of Redux. I like the concept of React, its building structure
              with components, and the freedom it gives to the developer to
              choose from a variety of React tools and packages.
            </p>
            <br></br>
            <p className="text_headers">Challenges:</p>
            <br></br>
            <p>
              I faced challenges during the development stage: Managing the
              state using Redux. Understanding how state works in React was not
              big of a problem, but when I needed to do the same thing using
              Redux, it got complicated pretty easily. The method of logging
              changes into the console wasn´t that much of use, but whit the
              help of <span>Redux devtools</span> I managed to understand how to
              handle
              <span> states</span> using the Redux store. This was also
              opportunity to make use of <span>Google</span> and to read and
              understand other developers code. Most of the time I found myself
              using <span>Stackoverflow</span> as it was really helpful.
            </p>
            <br></br>
            <p className="text_headers">Completion:</p>
            <br></br>
            <p>
              To complete this app, it took me more than any other achievement
              on Career Foundry course, about two weeks. It was because I spent
              more time to deal with mentioned challenges. To achieve this, and
              to improve and manage my workspace, I used <span>Kanban</span>{' '}
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
