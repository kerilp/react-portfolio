import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-dark">
      <p id="logo">&lt;<span id="kp">kp</span>/&gt;</p>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a href="#about-me"
          onClick={() => handlePageChange("AboutMe")}
          className={ currentPage === "AboutMe" ? "active" : "inactive" }>
            About Me</a>
        </li>
        <li className="nav-item">
          <a href="#my-work"
          onClick={() => handlePageChange("MyWork")}
          className={ currentPage === "MyWork" ? "active" : "inactive" }>
            Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={ currentPage === "Contact" ? "active" : "inactive" }>Contact</a>
        </li>
        <li className="nav-item">
          <a href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={ currentPage === "Resume" ? "active" : "inactive" }>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;