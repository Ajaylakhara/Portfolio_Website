import React from "react";
import { motion } from "framer-motion";
import HtmlLogo from "../assets/Images/html-5.png";
import CssLogo from "../assets/Images/css-3.png";
import JsLogo from "../assets/Images/js.png";
import ReactLogo from "../assets/Images/physics.png";
import NodeLogo from "../assets/Images/nodejs.png";
import TailwindLogo from "../assets/Images/Tailwind CSS.png";
import python from "../assets/Images/icons8-python-144.png";
import CSharp from "../assets/Images/icons8-c-sharp-logo-64.png";
import bootstrap from "../assets/Images/bootstrap_5968672.png";
import Express from "../assets/Images/icons8-express-js-64.png";
import MongoDB from "../assets/Images/MongoDB.png";
import Git from "../assets/Images/icons8-git-96.png";
import Figma from "../assets/Images/figma_5968705.png";
import VsCode from "../assets/Images/icons8-vs-code-96.png";
import sqlserver from "../assets/Images/database_4248443.png";


const skills = [
  { name: "JavaScript", img: JsLogo },
  { name: "React", img: ReactLogo },
  { name: "Node.js", img: NodeLogo },
  { name: "Tailwind CSS", img: TailwindLogo },
  { name: "HTML", img: HtmlLogo },
  { name: "CSS", img: CssLogo },
  { name: "Python", img: python },
  { name: "C#", img: CSharp },
  { name: "Bootstrap", img: bootstrap },
  { name: "Express.js", img: Express },
  { name: "MongoDB", img: MongoDB },
  { name: "Git", img: Git },
  { name: "Figma", img: Figma },
  { name: "VS Code", img: VsCode },
  {name: "SQL Server", img: sqlserver},
  
];

const Skills = ({ isDark = false }) => {
  return (
    <section id="skills" className={`py-20 ${isDark ? "bg-white" : "bg-black"} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-4xl font-bold text-center mb-8 ${isDark ? "text-black" : "text-white"}`}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`flex flex-col items-center ${isDark ? "bg-black" : "bg-white"} p-4 rounded-lg shadow-lg`}
            >
              <img src={skill.img} alt={skill.name} width="50" height="50" className="mb-2" />
              <p className={`${isDark ? "text-white" : "text-black"} font-semibold`}>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
