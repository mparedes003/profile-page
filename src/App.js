import React from 'react';
import profile_pic1 from './profile_pic1.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='App-body'>
        <div className='sidebar'>
          <img
            src={profile_pic1}
            className='photo'
            alt='Michelle Paredes Photo'
          />
          <h1>Michelle Paredes</h1>
          <p>Santa Monica, California</p>
          <p>
            Full Stack Web <br /> & <br /> Computer Science Alumna <br /> of
            &nbsp;
            <a
              className='projects'
              href='https://learn.lambdaschool.com/syllabus/cs-fsw'
            >
              Lambda School
            </a>
          </p>

          <a
            className='projects'
            href='https://www.linkedin.com/in/michellegparedes/'
          >
            <i class='fab fa-linkedin' />
          </a>
          <a className='projects' href='https://github.com/mparedes003'>
            <i class='fab fa-github' />
          </a>
        </div>
        <div className='profile-body'>
          <h3>
            <i class='fas fa-info-circle' />
            About
          </h3>
          <p>
            <span className='intro'>Hi! I'm Michelle.</span> I'm a Full-Stack
            Web and Software Developer with a passion for learning new
            technologies, making new applications, debugging, problem solving
            and living in the terminal.
          </p>
          <h3>
            <i class='far fa-dot-circle' />
            Technical Skills
          </h3>
          <p>
            <i class='fas fa-code' />
            Web Development <i class='fas fa-long-arrow-alt-right' />
            <i class='fab fa-html5' />
            HTML, <i class='fab fa-css3-alt' />
            CSS, <i class='fab fa-react' />
            React, Django, REST APIs, <i class='fab fa-node-js' /> Node,
            Express, <i class='fab fa-js-square' /> Javascript,{' '}
            <i class='fab fa-python' /> Python, C
          </p>

          <h3>
            <i class='fas fa-history' />
            Recent Projects
          </h3>
          <div className='project'>
            <a
              className='projects'
              href='https://github.com/Lambda-School-Labs/labs10-movie-reviews'
            >
              <i class='fab fa-github' /> CineView
            </a>{' '}
            <a
              className='projects'
              href='https://cineview.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='fab fa-chrome' /> Webpage
            </a>{' '}
            <a
              className='projects'
              href='https://www.youtube.com/watch?v=Yz7zt-JNJu8&feature=youtu.be'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='fab fa-youtube' /> Demo
            </a>
          </div>
          <div className='project'>
            <a
              className='projects'
              href='https://github.com/mparedes003/front-end-project-week'
            >
              <i class='fab fa-github' /> Lambda Notes Front End
            </a>{' '}
            <a
              className='projects'
              href='https://your-notes.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='fab fa-chrome' /> Webpage
            </a>{' '}
            <br />
            <a
              className='projects'
              href='https://github.com/mparedes003/back-end-project-week'
            >
              <i class='fab fa-github' /> Lambda Notes Back End
            </a>
          </div>
          <h3>
            <i class='far fa-envelope' />
            Contact
          </h3>
          <a className='projects' href='mailto:michelle.g.paredes@gmail.com'>
            <p className='email'>michelle.g.paredes@gmail.com</p>
          </a>
          <div className='favicon-ack'>
            <a
              target='_blank'
              href='https://icons8.com/icons/set/samurai-helmet'
            >
              Samurai Helmet icon
            </a>{' '}
            icon by{' '}
            <a target='_blank' href='https://icons8.com'>
              Icons8
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
