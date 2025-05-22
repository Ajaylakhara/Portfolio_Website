import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
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
  
];

export default function Hero({ isDark = false }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className={`text-4xl md:text-8xl font-bold ${isDark ? "text-gray-900" : "text-white"}`}>
          Hi, I'm Ajay Lakhara
        </h1>
        <p className={`text-3xl md:text-2xl ${isDark ? "text-gray-600" : "text-gray-400"} mt-4`}>
          Full-Stack Developer & UI/UX Designer
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://github.com/Ajaylakhara" // Update to your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${isDark ? "text-gray-500 hover:text-gray-200" : "text-gray-300 hover:text-gray-900"} transition-colors duration-300`}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ajay-lakhara-9159b0190/" // Update to your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${isDark ? "text-gray-400 hover:text-gray-200" : "text-gray-200 hover:text-gray-900"} transition-colors duration-300`}
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-6 flex text-xl justify-center gap-4">
          <Link
            to="projects"
            smooth
            duration={500}
            className={`px-6 py-3 ${isDark ? "bg-black text-white hover:bg-white hover:text-black" : "bg-white text-black hover:bg-black hover:text-white"}  rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400`}
          >
            Explore My Work
          </Link>
          <a
            href="../../public/Ajay_Lakhara_Resume.pdf"
            download="Ajay_Lakhara_Resume.pdf" // Updated filename
            className={`px-6 py-3 ${isDark ? "bg-white text-black hover:bg-black hover:text-white" : "bg-black  text-white hover:bg-white hover:text-black "} rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400`}
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      <div className={`w-full  relative overflow-hidden ${isDark ? "border-black" : "border-white"} border-y py-4 mt-12`}>
        <div className="flex w-max animate-marquee gap-6">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${isDark ? "bg-black text-white" : "bg-white text-black"} shadow-md`}
            >
              <img
                src={skill.img}
                alt={skill.name}
                width="18"
                height="18"
                className="text-transparent"
              />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}