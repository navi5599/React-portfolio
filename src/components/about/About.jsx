import React from 'react';
import Scroll from '../scrollButton/Scroll';

import './about.css';

import en_cv from '../../cv/Ivan_Kelava_EN.pdf';
import de_cv from '../../cv/Ivan_Kelava_DE.pdf';
import profile from '../../img/portrait.jpeg';

function About() {
  return (
    <>
      <div id="white" className="white">
        <Scroll />
      </div>

      <h1 id="about" className="about_heading">
        About <span>me</span>!
      </h1>

      <div className="profile">
        <img
          src={profile}
          className="profile_portrait"
          alt="A Photograph of me"
        />
        <div className="profile-text">
          <p className="dark_text">
            My name is <span>Ivan Kelava</span>. I am a <span>passionate</span>{' '}
            Full stack developer from Croatia, based in Germany. By profession,
            I am ecological technician, which speaks already for itself. I love{' '}
            <span>nature</span>, and everything about it. But the thing is, I
            love <span>technology</span> even more, and that is the reason why i
            decided to change my career.
          </p>
          <p>
            <br />
            <br />I am addicted to researching, and learning new things, and
            this is also one of the reasons why I <span>enjoy</span> in doing
            what I do. I like the Industry, and I like people in it. My goal
            here is to make the <span>web</span> a better place!
          </p>
          <br></br>
          <br></br>

          <p>Here you can download my CV </p>
          <div className="downloads">
            <a
              href={en_cv}
              target="_self"
              className="download_cv_btn code "
              download
            >
              English CV
            </a>
            <a
              href={de_cv}
              target="_self"
              className="download_cv_btn code deutsch "
              download
            >
              German CV
            </a>
          </div>
        </div>
      </div>

      <div className="skills">
        <p>Skills and tools I use</p>
        <ul className="icon_list">
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="react icon"
            />
          </li>
          <li>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg"
              alt="angular icon"
            />
          </li>
          <li>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
              alt="bootsap icon"
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
    </>
  );
}

export default About;
