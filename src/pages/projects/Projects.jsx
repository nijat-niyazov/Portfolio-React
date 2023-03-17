import axios from 'axios';
import Loader from 'react-loaders';
import { useLoaderData } from 'react-router-dom';
import { AnimatedLets } from '../../components/exporter';
import { animatedLetters } from '../../utils/exporter';
import './portfolio.scss';
import Project from './Project';

const Projects = () => {
  const { className, arr: portfolio } = animatedLetters('Projects');
  const projects = useLoaderData();

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
          {projects?.map((project, i) => (
            <Project key={i} data={project} />
          ))}
        </section>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;

export const projectLoder = async () => {
  try {
    const { data } = await axios.get('data/portfolio.json');
    if (data) {
      return data.projects;
    }
  } catch {
    err => console.error(err.message);
    return err.message;
  }
};
