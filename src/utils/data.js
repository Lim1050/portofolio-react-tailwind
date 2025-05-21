import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoReact,
  IoLogoPython,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import {
  SiPhp,
  SiBootstrap,
  SiTailwindcss,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiElasticsearch,
  SiGit,
  SiLinux,
  SiApachenetbeanside,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

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
    icon: IoLogoHtml5,
    title: "HTML",
    comment:
      "Strong foundation in semantic HTML for creating structured web content.",
  },
  {
    id: "02",
    icon: IoLogoCss3,
    title: "CSS",
    comment:
      "Experienced in styling and layout design using modern CSS techniques.",
  },
  {
    id: "03",
    icon: IoLogoJavascript,
    title: "JavaScript",
    comment:
      "Skilled in dynamic frontend and backend logic using modern JavaScript.",
  },
  {
    id: "04",
    icon: IoLogoPython,
    title: "Python",
    comment:
      "Used for scripting, automation, and backend development in web applications.",
  },
  {
    id: "05",
    icon: SiPhp,
    title: "PHP",
    comment:
      "Experienced in building server-side applications using native PHP and frameworks.",
  },
  {
    id: "06",
    icon: SiBootstrap,
    title: "Bootstrap",
    comment:
      "Utilized for rapid UI development with responsive and mobile-first components.",
  },
  {
    id: "07",
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    comment:
      "Utility-first CSS framework used for custom UI design in React projects.",
  },
  {
    id: "08",
    icon: IoLogoReact,
    title: "React.js",
    comment:
      "Specialized in SPA development with component-based architecture.",
  },
  {
    id: "09",
    icon: IoLogoNodejs,
    title: "Node.js",
    comment:
      "Efficient backend development with Express for RESTful API services.",
  },
  {
    id: "10",
    icon: SiLaravel,
    title: "Laravel",
    comment:
      "Built scalable backend systems using Laravel’s elegant PHP framework.",
  },
  {
    id: "11",
    icon: SiMysql,
    title: "MySQL",
    comment:
      "Used for managing relational data with complex query optimization.",
  },
  {
    id: "12",
    icon: SiPostgresql,
    title: "PostgreSQL",
    comment:
      "Experience with advanced SQL features and database performance tuning.",
  },
  {
    id: "13",
    icon: SiMongodb,
    title: "MongoDB",
    comment: "Proficient in NoSQL data modeling and aggregation pipelines.",
  },
  {
    id: "14",
    icon: SiElasticsearch,
    title: "Elasticsearch",
    comment: "Used for implementing full-text search and real-time analytics.",
  },
  {
    id: "15",
    icon: SiGit,
    title: "Git",
    comment:
      "Version control with Git for efficient team collaboration and CI/CD.",
  },
  {
    id: "16",
    icon: SiLinux,
    title: "Linux Server",
    comment:
      "Comfortable managing Linux environments for deployment and server maintenance.",
  },
  {
    id: "17",
    icon: FaServer,
    title: "RESTful API",
    comment:
      "Designed and implemented RESTful APIs for frontend-backend communication.",
  },
];

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "PT Technology Karya Mandiri",
    position: "Server Engineer",
    duration: "2022 – Present",
    description:
      "Responsible for maintaining server infrastructure, performing real-time monitoring using Grafana, and ensuring high availability of services in Linux-based environments.",
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
