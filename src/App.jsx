import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Layout } from './components/exporter';
import './globalStyles/App.scss';
import { About, Contact, Home, Main, Projects } from './pages/exporter';
import { projectsLoader } from './pages/projects/Projects';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" loader={projectsLoader} element={<Projects />} />
        <Route path="dashboard" element={<Main />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
