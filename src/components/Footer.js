import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import email from '../assets/mail.png';

function Footer() {
  return (
    <footer>
      <div>
        <a className="icon" href="https://github.com/kerilp">
        <img src={github} alt="github icon"/>
        </a>
        <a className="icon" href="https://www.linkedin.com/in/keri-price-240545219/">
          <img src={linkedin} alt="linkedin icon"/>
        </a>
        <a className="icon" href="mailto:klprice128@gmail.com">
          <img src={email} alt="email icon"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;