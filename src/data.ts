import deadpoets from "./assets/movies/deadpoets.jpg";
import harrypotter from "./assets/movies/harrypotter.jpg";
import loveOfFire from "./assets/movies/loveOfFire.jpg";
import haijieriji from "./assets/movies/haijieriji.jpg";
import yuzhou from "./assets/movies/yuzhoutansuobianjibu.jpg";
const skills = {
  Languages:
    "javascript(Vue.js, React.js), typescript, Node.js(Express.js), HTML5, CSS3(SASS, tailwindCSS), JSON, MySQL",
  Bundle: "Webpack, Vite, Rollup, grunt",
  Testing: "Jest, React Testing Library",
  Libraries: "Element UI, Vant, Ant design, Bootstrap, Material UI",
  Debug: "Chrome DevTools, Charles",
  VersionControl: "Git, Github",
};

const experienceList = [
  {
    position: "Senior Frontend Developer",
    company: "AISpeech",
    companyUrl: "https://www.aispeech.com/",
    startTime: "April 2021",
    endTime: "Jan 2023",
    location: "suzhou,China",
    logo: "aispeech.png",
    responsibilities: [
      "Led the development of subway applications and a sound detection system.",
      "Managed frontend engineers and participated in departmental technical seminars.",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Zhongyan",
    companyUrl: "https://www.wenjuan.com/",
    startTime: "June 2020",
    endTime: "Mar 2021",
    location: "suzhou,China",
    logo: "zhongyan.png",
    responsibilities: [
      "Led the development of an enterprise exam system and an online exam application.",
      "Managed frontend interns and conducted technical sharing sessions.",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Yunxuetang",
    companyUrl: "https://www.yxt.com/",
    startTime: "Oct 2017",
    endTime: "Mar 2020",
    location: "suzhou,China",
    logo: "yunxuetang.png",
    responsibilities: [
      "Led the development of the Mentorship project for the enterprise learning platform.",
      "Separated sub-projects from the main project.",
      "Organized code reviews.",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Deyun",
    companyUrl: "",
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
    name: "Tingyu's website",
    link: "https://github.com/tingyuliu0920/tingyuliu.dev",
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
    name: "海街日记",
    picture: haijieriji,
    line: "在人群里划一艘船，晕倒在柔软的云里，说无关紧要的事。",
  },
  {
    name: "宇宙探索编辑部",
    picture: yuzhou,
    line: "生命没有意义，生命的存在本身就是意义。",
  },
  {
    name: "Harry Potter",
    picture: harrypotter,
    line: "It's not our abilities that show what we truly are.It is our choices.",
  },
];
const articles = [
  {
    title: "Our stories in Egypt",
    magazine: "悦游CondeNastTraveler",
    url: "https://mp.weixin.qq.com/s/ofTvY7u6QsbDflQoCoXBhg",
  },
];
export { skills, projects, experienceList, movies, articles };
