import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Loader from 'react-loaders';
import { AnimatedLets } from '../../components/exporter';
import { useLetterAnimations } from '../../utils/letters';
import './about.scss';

const About = () => {
  const { className, arr } = useLetterAnimations('About me');

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLets
              className={className}
              stringArr={arr}
              startPoint={15}
            />

            <p>
              I'm very ambitious front-end developer looking for a role in
              established IT company with the opportunity to work with the
              latest technologies on challenging and diverse projects.
            </p>
            <p>
              I'm quietly confident, naturally curious, and perpetually working
              on improving my chops one design problem at a time.
            </p>
            <p>
              If I need to define myself in one sentence that would be a family
              person, father of a beautiful daughter, a sports fanatic,
              photography enthusiast, and tech-obsessed!!!
            </p>
          </h1>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#61dbfb" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#f0db4f " />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faSass} color="#f2ece4 " />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#171515" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
