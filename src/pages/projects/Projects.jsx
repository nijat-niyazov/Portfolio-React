import React from 'react';
import Loader from 'react-loaders';
import { AnimatedLets } from '../../components/exporter';
import { animatedLetters } from '../../utils/exporter';
import './portfolio.scss';
import portfolioData from '../../data/portfolio.json';
import Project from './Project';

const Projects = () => {
  const { className, arr: portfolio } = animatedLetters('Projects');

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLets
            startPoint={15}
            stringArr={portfolio}
            className={className}
          />
        </h1>
        <section className="projects-box">
          {portfolioData?.portfolio.map((project, i) => (
            <Project key={i} data={project} />
          ))}
        </section>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
