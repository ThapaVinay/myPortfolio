import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  ngo,
  shopify,
  notebook,
  face,
  tripguide,
  threejs,
  codeclause,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Social Work Internship",
    company_name: "Ghanshyam Oli Child Welfare Society",
    icon: ngo,
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2022",
    points: [
      "Designed and delivered engaging educational sessions to students in primary government schools.",
      "Organized and administered scholarship examinations in various schools",
      "Prepared comprehensive reports detailing the impact of various initiatives, aiding in program evaluation and future planning.",
      "Collaborated with local authorities, schools, and families to identify and address cases of child labour, advocating for children's rights to education and a safe environment.",
    ],
  },
  {
    title: "Web Development Internship",
    company_name: "CodeClause",
    icon: codeclause,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "Developed a dynamic web application using React that allows users to upload images and seamlessly remove the background using an external API.",
      "Designed and implemented a comprehensive attendance system leveraging Flask, Python, and Firebase for a seamless face detection and tracking experience.",
      "Utilized Git for version control, maintaining a clean and organized codebase through effective branching and merging strategies.",
      "Demonstrated a strong commitment to continuous learning by quickly acquiring skills in new technologies and frameworks as required by project needs.",
    ],
  },

];

const projects = [
  {
    name: "myNoteBook",
    description:
      "Your notebook on the cloud. It is an app in which users can save their notes online and can retrieve them anytime they want. It will make use of MERN stack {mongoDB, reactJS, nodeJS and expressJS).}",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: notebook,
    source_code_link: "https://github.com/ThapaVinay/myNoteBook.git",
  },
  {
    name: "Face Attendance System",
    description:
      "The Face Detection Attendance System is a powerful Flask application that utilizes face detection technology to automate attendance management. ",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "machine learning",
        color: "pink-text-gradient",
      },
    ],
    image: face,
    source_code_link: "https://github.com/ThapaVinay/CodeClause_Face_Detection_Attendance_System",
  },
  {
    name: "FlaskGPT",
    description:
      "It is a ChatGPT clone web application built using Flask and Tailwind CSS. The application allows users to interact with a language model based on OpenAI's GPT architecture to generate responses to text input.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ThapaVinay/FlaskGPT",
  },
];

export {  technologies, experiences, projects };