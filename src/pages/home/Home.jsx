import React from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import './home.scss';
import logo from '../../assets/images/n-400.png';
import { AnimatedLets } from '../../components/exporter';
import { useLetterAnimations } from '../../utils/letters';
// import Logo from './logo/Logo';

const Home = () => {
  const { className, arr: hi } = useLetterAnimations("Hi, I'm");
  const { arr: name } = useLetterAnimations('ijat');
  const { arr: introduce } = useLetterAnimations("and I'm a");
  const { arr: job } = useLetterAnimations('React developer');

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLets
              className={className}
              stringArr={hi}
              startPoint={10}
            />
            <img className="letter-n" src={logo} alt="logo" />
            <AnimatedLets
              className={className}
              stringArr={name}
              startPoint={15}
            />
            <br />
            <AnimatedLets
              className={className}
              stringArr={introduce}
              startPoint={19}
            />
            <br />
            <AnimatedLets
              className={className}
              stringArr={job}
              startPoint={19}
            />
          </h1>
          <h2> with skills Javascript && React </h2>
          <Link to="/contact" className="flat-btn">
            Contact me
          </Link>
        </div>
        {/* <Logo /> */}
      </div>
      <Loader type="ball-spin-fade-loader" />
    </>
  );
};

export default Home;
