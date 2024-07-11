import { Helmet } from "react-helmet";
import Project from "../components/Project";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="animate-fadeIn">
      <Helmet title="Projects | Tingyu Liu"></Helmet>
      <h3 className="mb-3 text-3xl font-bold leading-loose text-green dark:text-gray-300">
        Projects
      </h3>
      <div></div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.link} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
