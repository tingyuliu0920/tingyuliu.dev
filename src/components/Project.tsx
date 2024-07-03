import { AiOutlineArrowRight } from "react-icons/ai";

interface Project {
  name: string;
  link: string;
  description: string;
  time: string;
  tags: string[];
}
interface ProjectProps {
  data: Project;
}
const Project = ({ data }: ProjectProps) => {
  const { name, description, link, time, tags } = data;
  return (
    <div className="rounded-xl border-2 border-solid border-gray-200 p-[20px] dark:border-gray-400">
      <div className="mb-[10px] flex justify-between">
        <h6 className="font-sm text-xl sm:text-xl">{name}</h6>
        <span className="text-gray-700 dark:text-gray-400">{time}</span>
      </div>
      <p className="mb-[10px]">{description}</p>
      <div>
        {tags.map((tag) => (
          <span
            className="border-1 mr-1 inline-block rounded-md border-slate-600 bg-slate-200 px-1 py-0 text-sm font-medium text-gray-600 shadow-md"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="text-right">
        <a href={link}>
          More <AiOutlineArrowRight style={{ display: "inline-block" }} />
        </a>
      </div>
    </div>
  );
};

export default Project;
