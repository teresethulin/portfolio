import React from 'react';
import GitHub from '../../assets/icons/github-logo.svg';
import LinkedIn from '../../assets/icons/linkedin-logo.svg';
import Codepen from '../../assets/icons/codepen.svg';
import Behance from '../../assets/icons/behance-logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="caption">
        Designed & developed by Terese Thulin using Contentful and React
        {' | © '}
        {new Date().getUTCFullYear()}
      </p>
      <div className="icons-wrapper">
        <a href="https://github.com/teresethulin">
          <img src={GitHub} alt="Github" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/teresethulin/">
          <img src={LinkedIn} alt="LinkedIn" className="icon" />
        </a>
        <a href="https://codepen.io/teresethulin">
          <img src={Codepen} alt="Codepen" className="icon" />
        </a>
        <a href="https://www.behance.net/teresethulin">
          <img src={Behance} alt="Behance" className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
