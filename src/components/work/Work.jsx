import React, { useState } from 'react';

import 'animate.css';
import './work.css';
import Project_1 from './projects/Project_1';
import Project_2 from './projects/Project_2';
import Project_3 from './projects/Project_3';
import Project_4 from './projects/Project_4';
import Project_5 from './projects/Project_5';
import Project_6 from './projects/Project_6';

function Work() {
  const [id, setId] = useState('');
  const [showGrid, setShowGrid] = useState(true);
  const [showProject, setShowProject] = useState(false);

  const handleProjects = (event) => {
    console.log(event.currentTarget.id);
    setId(event.currentTarget.id);
    setShowGrid(!showGrid);
    setShowProject(!showProject);
  };

  return (
    <>
      <section>
        <h1 id="w0rk" className="work">
          My <span>wo</span>rk
        </h1>
        {showGrid ? (
          <div className="grid">
            <div
              id="project_1"
              className="grid_item grid_1 "
              onClick={handleProjects}
            >
              <h2>Meet app</h2>
            </div>

            <div
              id="project_2"
              className="grid_item grid_2 "
              onClick={handleProjects}
            >
              <h2>Movie app React</h2>
            </div>

            <div
              id="project_3"
              className="grid_item grid_3 "
              onClick={handleProjects}
            >
              <h2>Pokedex App</h2>
            </div>

            <div
              id="project_4"
              className="grid_item grid_4 "
              onClick={handleProjects}
            >
              <h2>Chat App</h2>
            </div>

            <div
              id="project_5"
              className="grid_item grid_5 "
              onClick={handleProjects}
            >
              <h2>Movie app Angular</h2>
            </div>

            <div
              id="project_6"
              className="grid_item grid_6 "
              onClick={handleProjects}
            >
              <h2>myFlix REST API</h2>
            </div>
          </div>
        ) : (
          ''
        )}

        {showProject && id === 'project_1' ? (
          <Project_1 handleProjects={handleProjects} />
        ) : (
          ''
        )}
        {showProject && id === 'project_2' ? (
          <Project_2 handleProjects={handleProjects} />
        ) : (
          ''
        )}
        {showProject && id === 'project_3' ? (
          <Project_3 handleProjects={handleProjects} />
        ) : (
          ''
        )}
        {showProject && id === 'project_4' ? (
          <Project_4 handleProjects={handleProjects} />
        ) : (
          ''
        )}
        {showProject && id === 'project_5' ? (
          <Project_5 handleProjects={handleProjects} />
        ) : (
          ''
        )}
        {showProject && id === 'project_6' ? (
          <Project_6 handleProjects={handleProjects} />
        ) : (
          ''
        )}
      </section>
    </>
  );
}

export default Work;
