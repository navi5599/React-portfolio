import React from 'react';
import './home.css';
import 'animate.css';
import img from '../../img/removebg.png';

function Home() {
  return (
    <>
      <div className="home">
        <h1 className="hello animate__animated animate__fadeInDown">
          Hel<span>l</span>
          <span>o</span>!
        </h1>

        <div className="text_section">
          <img
            src={img}
            alt=""
            className="image animate__animated animate__fadeInUp"
          />
          <div className="text animate__animated animate__fadeInUp">
            <p>
              My name is <span>Ivan Kelava</span>. I am a{' '}
              <span>passionate</span> full stack developer from Croatia, based
              in Germany.
            </p>
            <p>Take a look around to get to know me better..</p>
            <br></br>
            <p>Check out some of my code</p>
            <br></br>
            <a href="#" target="_self" class="code_link code">
              Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
