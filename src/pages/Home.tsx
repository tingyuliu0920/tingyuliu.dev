import { skills } from "../data";
import avator from "../assets/me.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Popover, Typography } from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Experience from "../components/Experience";
const Home = () => {
  const email = "tingyuliu.dev@gmail.com";

  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const handleCopy = async (event: React.MouseEvent<SVGSVGElement>) => {
    try {
      const ele = event.currentTarget;
      await navigator.clipboard.writeText(email);
      setAnchorEl(ele);
      setOpen(true);
      setTimeout(() => {
        setAnchorEl(null);
        setOpen(false);
      }, 600);
    } catch (error) {
      console.error("Copy failed.");
    }
  };
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Helmet title="Tingyu Liu"></Helmet>
      <div className="mb-[20px] flex animate-debounce flex-col-reverse items-center justify-between px-4 py-10 sm:animate-fadeIn sm:flex-row">
        <div className="mt-6 text-left sm:mr-6 sm:mt-0 sm:w-2/3">
          <section className="mb-[10px] animate-fadeIn">
            <h1 className="text-center text-3xl font-bold text-gray-800 sm:text-left dark:text-gray-200">
              Hello, I'm Tingyu
            </h1>
            <p className="mt-4 text-lg">
              I'm a web developer who enjoys solving problems and continuously
              learning.
              <br /> This website is mainly about my coding experience and a few
              pieces of my life. I hope you have a great experience here. 🌻
            </p>
          </section>
          <div className="sm: flex items-center justify-start text-lg">
            You can find me on&nbsp;
            <a
              href="https://github.com/tingyuliu0920"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-1 cursor-pointer text-lg" />
            </a>
            ,&nbsp;
            <a
              href="https://www.linkedin.com/in/
tingyuliu0920"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-1 cursor-pointer text-lg" />
            </a>
            or via&nbsp;
            <MdEmail className="cursor-pointer text-lg" onClick={handleCopy} />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                "& .MuiTypography-root ": {
                  padding: "6px",
                },
              }}
            >
              <Typography sx={{ p: 2 }}>Email copyed.</Typography>
            </Popover>
          </div>
        </div>
        <div className="flex items-center justify-end sm:w-1/4">
          <div className="h-36 w-36 overflow-hidden rounded-full sm:h-auto sm:w-auto sm:rounded-sm">
            <img src={avator} alt="me" />
          </div>
        </div>
      </div>
      <div className="mb-[40px] animate-fadeIn px-[10px]">
        <h3 className="text-2xl font-bold leading-loose text-green dark:text-gray-300">
          Skills
        </h3>
        <ul>
          {Object.entries(skills).map(([category, value]) => (
            <li key={category} className="whitespace-normal py-1">
              <span className="font-bold">{category}:&nbsp;&nbsp;</span>
              {value}
            </li>
          ))}
        </ul>
      </div>
      <Experience />
    </>
  );
};

export default Home;
