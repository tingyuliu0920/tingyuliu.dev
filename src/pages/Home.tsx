import { skills } from "../data";
import avator from "../assets/Anne.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Popover, Typography } from "@mui/material";
import { useState } from "react";
import { useDocumentTitle } from "../router";
const Home = () => {
  useDocumentTitle("Anne is pilipala");
  const email = "rubyll0920@gmail.com";

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
    <div>
      <div className="flex animate-debounce flex-col-reverse items-center justify-between p-10 sm:animate-fadeIn sm:flex-row">
        <div className="mt-6 text-center sm:mr-6 sm:mt-0 sm:w-2/3 sm:text-left">
          <section className="mb-[10px] animate-fadeIn">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
              Hello, I'm Anne.
            </h1>
            <p className="mt-4 text-lg">
              I'm a passionate frontend developer with experience in building
              responsive and interactive web applications. I love working with
              modern web technologies and continuously improving my skills.
            </p>
          </section>
          <div className="sm: flex items-center justify-center sm:justify-start">
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-3 cursor-pointer text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/
juniperliu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-3 cursor-pointer text-xl" />
            </a>
            <MdEmail className="cursor-pointer text-xl" onClick={handleCopy} />
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
            <img src={avator} alt="Your Avatar" />
          </div>
        </div>
      </div>
      <div className="mb-[50px] animate-fadeIn px-[10px]">
        <h3 className="text-center text-2xl font-bold leading-loose text-green sm:text-left dark:text-gray-300">
          Skills
        </h3>
        <ul>
          {Object.entries(skills).map(([category, value]) => (
            <li key={category} className="whitespace-normal text-pretty py-1">
              <span className="font-bold">{category}: </span>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
