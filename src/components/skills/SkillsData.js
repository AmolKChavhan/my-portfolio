import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiPostman,
  SiJest,
  SiMysql,
  SiGitlab,
  SiVisualstudiocode,
  SiAtlassian,
  SiNpm,
  SiChromecast,
  SiAntdesign,
  SiRedux,
  SiMui,
  SiBitbucket,
} from "react-icons/si";
import { TbJson } from "react-icons/tb";

const SkillsData = [
  {
    category: "Front-End",
    color: "#f24e1e",
    items: [
      { name: "React.js", icon: <FaReact />, color: "#61dafb" },
      { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#2965f1" },
      { name: "JavaScript", icon: <FaJsSquare />, color: "#f7df1e" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#563d7c" },
      { name: "Redux", icon: <SiRedux />, color: "#764abc" },
      { name: "Material-UI", icon: <SiMui />, color: "#007fff" },
      { name: "Ant Design", icon: <SiAntdesign />, color: "#1890ff" },
      {
        name: "Cross-Browser Compatibility",
        icon: <SiChromecast />,
        color: "#4285f4",
      },
    ],
  },
  {
    category: "Back-End",
    color: "#61dafb",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#6cc24a" },
      { name: "Express", icon: <SiExpress />, color: "#000000" },
      { name: "MySQL", icon: <SiMysql />, color: "#0288d1" },
      { name: "JSON Parsing", icon: <TbJson />, color: "#f7df1e" },
    ],
  },
  {
    category: "Tools",
    color: "#6cc24a",
    items: [
      { name: "Git", icon: <FaGitAlt />, color: "#f1502f" },
      { name: "GitHub", icon: <FaGithub />, color: "#333" },
      { name: "Bitbucket", icon: <SiBitbucket />, color: "#0052cc" },
      { name: "Jest", icon: <SiJest />, color: "#8c2c3c" },
      { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
      { name: "GitLab", icon: <SiGitlab />, color: "#fca326" },
      { name: "JIRA", icon: <SiAtlassian />, color: "#0052cc" },
      { name: "Node Package Manager (NPM)", icon: <SiNpm />, color: "#cb3837" },
      {
        name: "Visual Studio Code",
        icon: <SiVisualstudiocode />,
        color: "#0078d4",
      },
    ],
  },
];

export default SkillsData;
