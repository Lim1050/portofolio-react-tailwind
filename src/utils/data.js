import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

export const PROFILE_DATA = {
  profilePicture: "https://via.placeholder.com/150", // Ganti dengan URL foto asli jika ada
  name: "Salim P Ramadhan",
  tagline:
    "Fullstack developer with 4+ years of experience in building web applications using Laravel, React, and Node.js. Passionate about clean code, AI, cybersecurity, and scalable systems.",
  jobTitle: "Full Stack Developer",
  location: "Indonesia",
  yearsOfExperience: 4,
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "PHP",
    "Bootstrap",
    "Tailwind CSS",
    "React.js",
    "Node.js",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Elasticsearch",
    "Git",
    "Linux Server",
    "RESTful API",
  ],
  email: "salim.ramadhan@example.com", // Ganti dengan email Anda
  phone: "+62 812-3456-7890", // Ganti dengan nomor Anda
  website: "https://lim.dev", // Ganti dengan website/portofolio pribadi jika ada
};

export const SKILLS = [
  {
    id: "01",
    icon: IoLogoJavascript,
    title: "JavaScript",
    comment:
      "Experienced in building dynamic frontend interactions and backend logic using modern JavaScript.",
  },
  {
    id: "02",
    icon: IoLogoHtml5,
    title: "HTML",
    comment:
      "Strong foundation in semantic HTML for creating accessible and structured web content.",
  },
  {
    id: "03",
    icon: IoLogoReact,
    title: "React JS",
    comment:
      "Specialized in building responsive SPA interfaces and component-based architecture using React.",
  },
  {
    id: "04",
    icon: IoLogoNodejs,
    title: "Node JS",
    comment:
      "Used for building efficient server-side applications and RESTful APIs with Express.",
  },
  {
    id: "05",
    icon: SiMongodb,
    title: "MongoDB",
    comment:
      "Capable of managing NoSQL data in scalable applications with Mongoose and aggregation pipelines.",
  },
  {
    id: "06",
    icon: RiTailwindCssFill,
    title: "Tailwind CSS",
    comment:
      "Utilized for building utility-first, custom-designed frontend UIs in React-based projects.",
  },
];

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "PT Teknologi Karya Mandiri",
    position: "Server Engineer",
    duration: "2022 – Present",
    description:
      "Responsible for maintaining server infrastructure, performing real-time monitoring using ELK Stack, and ensuring high availability of services in Linux-based environments.",
  },
  {
    id: "02",
    company: "Freelance Web Development",
    position: "Full Stack Web Developer",
    duration: "2020 – Present",
    description:
      "Developed various web applications using Laravel, React, Node.js, and PostgreSQL. Handled both frontend and backend development including RESTful APIs, UI/UX design, and deployment to production servers.",
  },
];

export const ABOUT_ME_DATA = {
  introduction:
    "Hi, I'm Salim P Ramadhan, a Full Stack Developer and Server Engineer passionate about building robust web applications and managing efficient server infrastructure.",
  background:
    "I hold a Bachelor's degree in Informatics Engineering from Universitas Krisnadwipayana. With a strong foundation in both frontend and backend development, I bring a balanced approach to creating scalable systems.",
  skills:
    "I'm proficient in JavaScript, React.js, Laravel, Node.js, MySQL, PostgreSQL, and Linux server management. I have hands-on experience building RESTful APIs and deploying secure applications.",
  projects:
    "Some of my notable projects include a real-time server administration system, freelance web applications for various clients, and an internal monitoring system using the ELK Stack.",
  interests:
    "Outside of tech, I enjoy learning about cybersecurity, exploring AI technologies, and reading up on systems architecture. I also have an interest in photography and visual design.",
  careerGoals:
    "In the future, I aim to contribute to cutting-edge web technologies, grow in the field of cybersecurity, and work on impactful digital solutions within global tech teams.",
  stats: {
    yearsOfExperience: "4+",
    numberOfProjects: 25,
    certificationsEarned: 5,
  },
};
