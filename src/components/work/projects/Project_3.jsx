import React from 'react';
import { Link } from 'react-scroll';

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
              Pokedex is a simple JavaScript application made with HTML, CSS and
              vanilla JavaScript. Users can filter the Pokemons by name and view
              their details on demand through modals. This application was a
              personal project and part of the Career Foundry course. The aim
              was to get familiar with public APIs, and to implement bootstrap.
            </p>

            <br></br>
            <p className="text_headers">Building UI:</p>
            <br></br>
            <p>
              As mentioned above, to build UI I used Bootstrap and CSS. For the
              layout I used Bootstraps grid system as it was very easy to
              implement. Also adding few classes more, it is easy to adapt grid
              to be responsive on every screen. I found also some very useful
              components like Navbars and Buttons.
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
                  alt="jquery"
                  className="contrast_icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
                  alt="bootsap icon"
                />
              </li>
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

export default Project_3;
