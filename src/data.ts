import aispeech from "./assets/companys/aispeech.png";
import zhongyan from "./assets/companys/zhongyan.png";
import yunxuetang from "./assets/companys/yunxuetang.png";
import deadpoets from "./assets/movies/deadpoets.jpg";
import harrypotter from "./assets/movies/harrypotter.jpg";
import loveOfFire from "./assets/movies/loveOfFire.jpg";

const skills = {
  Languages:
    "javascript(Vue.js, React.js), typescript, Node.js, HTML5, CSS3(SASS, tailwindCSS), JSON",
  Bundle: "Webpack, Vite, Rollup, grunt",
  Testing: "Jest, React Testing Library",
  Libraries: "Element UI, Vant, Ant design, Bootstrap, Material UI",
  Debug: "Chrome DevTools, Charles",
  VersionControl: "Git",
};

const experienceList = [
  {
    position: "Senior Frontend Developer",
    company: "AISpeech",
    startTime: "April 2021",
    endTime: "Jan 2023",
    location: "suzhou,China",
    logo: aispeech,
    responsibilities: [
      "Led the development of subway applications and a sound detection system.",
      "Managed frontend engineers and participated in departmental technical seminars.",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Zhongyan",
    startTime: "June 2020",
    endTime: "Mar 2021",
    location: "suzhou,China",
    logo: zhongyan,
    responsibilities: [
      "Led the development of an enterprise exam system and an online exam application.",
      "Managed frontend interns and conducted technical sharing sessions.",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Yunxuetang",
    startTime: "Oct 2017",
    endTime: "Mar 2020",
    location: "suzhou,China",
    logo: yunxuetang,
    responsibilities: [
      "Led the development of the Mentorship project for the enterprise learning platform.",
      "Separated sub-projects from the main project.",
      "Organized code reviews.",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Deyun",
    startTime: "Mar 2016",
    endTime: "Sep 2017",
    location: "Wuxi,China",
    responsibilities: [
      "Led the development of multiple projects using jQuery.",
    ],
  },
];
const projects = [
  {
    name: "Anne's website",
    link: "https://github.com/anne0920/pilipala",
    tags: ["Reactjs", "mui", "tailwindCSS", "vite"],
    description: "My personal website",
    time: "2024",
  },
];
const movies = [
  {
    name: "Fire of Love",
    picture: loveOfFire,
    line: "You fall hard for what you know, harder for what you don't.",
  },
  {
    name: "Dead Poets Society",
    picture: deadpoets,
    line: "And medicine, law, business, engineering, these are noble pursuits, and necessary to sustain life.But poetry, beauty, romance, love these are what we stay live for.",
  },
  {
    name: "Harry Potter",
    picture: harrypotter,
    line: "It's not our abilities that show what we truly are.It is our choices.",
  },
];
export { skills, projects, experienceList, movies };
