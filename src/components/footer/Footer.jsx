import React from 'react';
import tweeter from '../../img/twitter.png';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import './footer.css';

function Footer() {
  return (
    <div>
      <footer className="page-footer">
        <p>Find me on</p>
        <div className="social-media">
          <a
            href="https://github.com/navi5599"
            rel="noreferrer"
            target="_blank"
          >
            <img src={github} className="github-icon" alt="Github icon" />
          </a>
          <a href="https://twitter.com" rel="noreferrer" target="_blank">
            <img src={tweeter} className="twitter-icon" alt="Twitter icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ivan-kelava-68527023b/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={linkedin} className="linkedin-icon" alt="LinkedIn icon" />
          </a>
        </div>
        <div className="footer_text">
          <p>Designed and coded by Ivan Kelava</p>

          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
