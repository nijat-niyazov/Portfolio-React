import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-s.png';
import AnimatedLets from '../../components/animateLets/AnimatedLets';
import './home.scss';

const Home = () => {
  const [letters, setLetters] = useState('text-animate');
  // const nameArr = ['n', 'i', 'y', 'a', 'z', 'o', 'v'];
  const nameArr = ['i', 'j', 'a', 't'];
  const jobArr = [
    'r',
    'e',
    'a',
    'c',
    't',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  const h1 = ['H', 'i'];
  const me = ['I', "'", 'm'];

  useEffect(() => {
    setTimeout(() => {
      setLetters('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLets className={letters} stringArr={h1} startPoint={10} />
          , <br />
          <AnimatedLets className={letters} stringArr={me} startPoint={12} />
          <img src={logo} alt="logo" />
          {/* ijat */}
          <AnimatedLets
            className={letters}
            stringArr={nameArr}
            startPoint={15}
          />
          <br />
          <AnimatedLets
            className={letters}
            stringArr={jobArr}
            startPoint={19}
          />
          {/* and I'm Front-End Engineer */}
        </h1>
        <h2> with skills Javascript && React </h2>
        <Link to="/contact" className="flat-btn">
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Home;
