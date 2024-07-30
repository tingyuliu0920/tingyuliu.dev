import { Helmet } from "react-helmet";
import Project from "../components/Project";
import { projects } from "../data";
import Title from "../components/Title";

const Projects = () => {
  return (
    <div className="animate-fadeIn">
      <Helmet title="Projects | Tingyu Liu"></Helmet>
      <Title size="text-3xl">Projects</Title>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.link} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
