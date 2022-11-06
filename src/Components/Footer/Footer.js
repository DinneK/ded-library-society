import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="name-container">
        <h4>By:</h4>
        <h4>
          <a
            href="https://www.linkedin.com/in/danielle-sweeny-75b50b84/"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Danielle Sweeny</h4>
          </a>
          <a
            href="https://www.linkedin.com/in/emilyjmiles/"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Emily Miles</h4>
          </a>
          <a
            href="https://www.linkedin.com/in/dinne-kopelevich-174584a/"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Dinne Kopelevich</h4>
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
