import React from "react";
import "./Footer.css";
import githubLogo from '../../assets/GitHub-Logo.svg';
import linkedinLogo from '../../assets/LinkedIn-Logo.svg';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="name-container">
        <h4>Danielle Sweeny</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/danielle-sweeny-75b50b84/">
            <img src={ linkedinLogo } alt="LinkedIn logo" height='50vh' />
          </a>
          <a href="https://github.com/dsweeny1">
            <img src={ githubLogo } alt="LinkedIn logo" height='50vh' />
          </a>
        </div>
      </div>
      <div className="name-container">
        <h4>Emily Miles</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/emilyjmiles/" >
            <img src={ linkedinLogo } alt="LinkedIn logo" height='50vh' />
          </a>
          <a href="https://github.com/emilyjmiles">
            <img src={ githubLogo } alt="LinkedIn logo" height='50vh' />
          </a>
        </div>
      </div>
      <div className="name-container">
        <h4>Dinne Kopelevich</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/dinne-kopelevich-174584a/" >
            <img src={ linkedinLogo } alt="LinkedIn logo" height='50vh' />
          </a>
          <a href="https://github.com/DinneK" >
            <img src={ githubLogo } alt="LinkedIn logo" height='50vh' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;