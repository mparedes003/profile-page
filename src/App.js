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
          <h3>Michelle Paredes</h3>
          <p>Santa Monica, California</p>
          <p>
            Full Stack Web & Computer Science Student at &nbsp;
            <a
              className="projects"
              href="https://learn.lambdaschool.com/syllabus/cs-fsw"
              target="_blank"
            >
              Lambda School
            </a>
          </p>
          <a className="projects" href="https://github.com/mparedes003">
            GitHub
          </a>
          <br />
          <a
            className="projects"
            href="https://www.linkedin.com/in/michellegparedes/"
          >
            Linkedin
          </a>
        </div>
        <div className="profile-body">
          <h3>About</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
