import { collection, getDocs } from 'firebase/firestore';
import Loader from 'react-loaders';
import { useLoaderData } from 'react-router-dom';
import { AnimatedLets } from '../../components/exporter';
import { animatedLetters } from '../../utils/exporter';
import { database } from '../../utils/firebase';
import './portfolio.scss';
import Project from './Project';
const publicEnvVar = import.meta.env.VITE_MY_ENV_VARIABLE;

const Projects = () => {
  const { className, arr: portfolio } = animatedLetters('Projects');
  const projects = useLoaderData();

  return (
    <>
      <div className="container portfolio-page">
        <p>{publicEnvVar}</p>
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

export const projectsLoader = async () => {
  try {
    const data = await getDocs(collection(database, 'projects'));
    if (data) {
      const projects = data.docs.map(doc => doc.data());
      // console.log(projects);
      return projects;
    }
  } catch (err) {
    console.error(err.message);
  }
};
