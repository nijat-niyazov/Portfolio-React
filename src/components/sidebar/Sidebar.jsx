import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './sidebar.scss';
import logo from '../../assets/images/logo-s.png';
import logoSub from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="navbar">

      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
        <img className="sub-logo" src={logoSub} alt="logoSub" />
      </Link>
      
      <nav className="nav-elements">
        <NavLink to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink to="about" className="about-link">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink to="/contact" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul className="social-links">
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/nijatniyazov/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.github.com/nijat-niyazov/">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/nidzhat-niyazov/">
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
