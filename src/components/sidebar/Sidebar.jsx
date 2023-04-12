import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './sidebar.scss';
// import logo from '../../assets/images/logo-s.png';
// import logo from '../../assets/images/n-400.png';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faClose,
  faEnvelope,
  faHome,
  faLock,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/n-400.png';
import { animatedLetters } from '../../utils/exporter';
import { AnimatedLets } from '../exporter';

const Sidebar = () => {
  const { className, arr } = animatedLetters('ijat');

  const [showNav, setShowNav] = useState(false);

  return (
    <div className="navbar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={logo} alt="logo" />
        <div className="name">
          <AnimatedLets startPoint={15} className={className} stringArr={arr} />
        </div>
      </Link>

      <nav className={showNav ? 'mobile show' : 'mobile'}>
        <div className="links">
          <NavLink
            to="/"
            className="home-link"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            to="about"
            className="about-link"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            to="/contact"
            className="contact-link"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          <NavLink
            to="/projects"
            className="portfolio-link"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <NavLink
            to="/dashboard"
            className="dashboard-link"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faLock} color="#4d4d4d" />
          </NavLink>
        </div>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>

      <ul className="social-links">
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/nijatniyazov/">
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.github.com/nijat-niyazov/">
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/nidzhat-niyazov/">
            <FontAwesomeIcon
              icon={faFacebook}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
