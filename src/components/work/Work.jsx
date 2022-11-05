import React from 'react';
import 'animate.css';
import './work.css';

function Work() {
  return (
    <>
      <section>
        <h1 id="w0rk" className="work">
          My <span>wo</span>rk
        </h1>
        <div className="grid">
          <div className="grid_item grid_1 ">
            <h2>Meet app</h2>
            <p className="card_text">
              Serverless PWA App made using React.Uses Google api to fetch data
              for events.Developed using TDD approach.
            </p>
          </div>

          <div className="grid_item grid_2 ">
            <h2>myFlix Movie app</h2>
            <p className="card_text">
              This is a simple movie app built with React-Redux for client side,
              and Mongo-Express for REST API, which app uses,to fetch movie data
            </p>
          </div>

          <div className="grid_item grid_3 ">
            <h2>Pokedex App</h2>
            <p className="card_text">
              This is a simple JavaScript app,called Pokedex,that fetches a list
              of 150 Pokemons from external public API.
            </p>
          </div>

          <div className="grid_item grid_4 ">
            <h2>Chat App</h2>
            <p className="card_text">
              This is a React Native App developed using Expo. Within app itself
              user should be able to use chat interface,share images and
              location.
            </p>
          </div>

          <div className="grid_item grid_5 ">
            <h2>myFlix Movie app (Angular)</h2>
            <p className="card_text">
              This is a simple movie app built with Angular for client side, and
              Mongo-Express for REST API, that app uses,to fetch data about
              movies.
            </p>
          </div>

          <div className="grid_item grid_6 ">
            <h2>myFlix REST API</h2>
            <p className="card_text">
              This is an REST API for application called myFlix (Both React and
              Angular ), that interacts with database and store data about
              movies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
