import React from 'react';
import profile from '../assets/profile-pic.jpg'

function AboutMe() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div id="about-me" class="row">
          <div className="col-12 col-lg-4 jumbo-img">
            <img id="profile" src={profile} alt="Keri Price" />
          </div>
          <div className="col-12 col-lg-8 jumbo-text">
            <h1 className="display-4">Hello! I'm <strong id="name">Keri Price</strong>.</h1>
            <h2 className="lead">Full Stack Web Developer</h2>
            <p>
              I'm a web developer located in Charlotte, NC. I'm always looking for the next
              problem to solve and puzzle to crack. I'm a fast learner and can quickly pick up
              the patterns in new languages and applications. As a graduate of the UNCC Full Stack Coding
              Bootcamp, I am trained in MERN Full Stack Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;