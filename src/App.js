import React from "react";
import profile_pic from "./profile_pic.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div className="sidebar">
          <img
            src={profile_pic}
            className="photo"
            alt="Michelle Paredes Photo"
          />
          <h1>Michelle Paredes</h1>
          <p>Santa Monica, California</p>
          <p>
            Full Stack Web <br /> & <br /> Computer Science Student <br /> at
            &nbsp;
            <a
              className="projects"
              href="https://learn.lambdaschool.com/syllabus/cs-fsw"
            >
              Lambda School
            </a>
          </p>

          <a
            className="projects"
            href="https://www.linkedin.com/in/michellegparedes/"
          >
            <i class="fab fa-linkedin" />
          </a>
          <a className="projects" href="https://github.com/mparedes003">
            <i class="fab fa-github" />
          </a>
        </div>
        <div className="profile-body">
          <h3>
            <i class="fas fa-info-circle" />
            About
          </h3>
          <p>
            Hi! I'm Michelle. I'm a Full-Stack Web and Software Developer with a
            passion for learning new technologies, making new applications,
            debugging, problem solving and living in the terminal.
          </p>
          <h3>
            <i class="far fa-dot-circle" />
            Technical Skills
          </h3>
          <p>
            Web Development --> HTML, CSS, React, Django, REST APIs, Node,
            Express, Javascript, Python, C
          </p>

          <p>Download Resume</p>

          <h3>
            <i class="fas fa-history" />
            Recent Projects
          </h3>
          <a
            className="projects"
            href="https://cineview.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CineView
          </a>
          <br />

          <a
            className="projects"
            href="https://your-notes.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lambda Notes
          </a>

          <h3>
            <i class="far fa-envelope" />Contact
          </h3>
          <a className="projects" href="mailto:michelle.g.paredes@gmail.com">
            <p>michelle.g.paredes@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
