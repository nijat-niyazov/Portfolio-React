import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './sidebar.scss';
// import logo from '../../assets/images/logo-s.png';
// import logo from '../../assets/images/n-400.png';
import logo from '../../assets/images/n-400.png';
import logoSub from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { animatedLetters } from '../../utils/exporter';
import { AnimatedLets } from '../exporter';

const Sidebar = () => {
  const { className, arr } = animatedLetters('ijat');

  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
        <div className="name">
          <AnimatedLets startPoint={15} className={className} stringArr={arr} />
        </div>
      </Link>

      <nav className="nav-elements">
        <NavLink to="/" className="home-link">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink to="about" className="about-link">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink to="/contact" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink to="/portfolio" className="portfolio-link">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
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
