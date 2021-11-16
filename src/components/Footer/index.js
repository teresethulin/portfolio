import React from 'react';
import { Link } from '@reach/router';
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
        <Link to="/">
          <img src={GitHub} alt="Github" className="icon" />
        </Link>
        <Link to="/">
          <img src={LinkedIn} alt="LinkedIn" className="icon" />
        </Link>
        <Link to="/">
          <img src={Codepen} alt="Codepen" className="icon" />
        </Link>
        <Link to="/">
          <img src={Behance} alt="Behance" className="icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
