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

const designProcess = [
  {
    step: "01. Requirements & Planning",
    desc: "Gather project requirements, define goals, and plan milestones for both frontend and backend development.",
  },
  {
    step: "02. UI/UX Design",
    desc: "Design wireframes and high-fidelity mockups focusing on intuitive user experiences and responsive layouts.",
  },
  {
    step: "03. Frontend Development",
    desc: "Build dynamic, responsive UIs using React, Tailwind CSS, and other modern web technologies.",
  },
  {
    step: "04. Backend Development",
    desc: "Implement APIs, databases, and server logic using Node.js, Express, and MongoDB or SQL.",
  },
  {
    step: "05. Testing & Deployment",
    desc: "Perform unit testing, integration testing, and deploy the full-stack app using CI/CD pipelines or platforms like Vercel/Render.",
  },
];

const contactInfo = {
  email: "ajaylakhara748@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ajay-lakhara-9159b0190/",
  Github: "https://github.com/Ajaylakhara",
  resume: "/Ajay_Lakhara_Resume.pdf",
};

const About = ({ isDark = false }) => {
  return (
    <motion.section className="py-20 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1
            className={`text-5xl font-extrabold leading-tight ${
              isDark
                ? "bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gray-100 to-gray-600 bg-clip-text text-transparent"
            }`}
          >
            A Full-Stack Developer & UI/UX Designer
          </h1>
          <p
            className={`mt-4 text-xl py-2 mx-auto ${
              isDark ? "text-gray-600" : "text-gray-300"
            }`}
          >
            I'm Ajay Lakhara, a detail-oriented Full Stack Developer and UI/UX
            designer currently pursuing a Bachelor's degree in Electronics and
            Communication Engineering. With hands-on experience in both hardware
            systems and modern web development, I bring a unique blend of
            engineering knowledge and software development expertise. I
            specialize in building responsive, scalable web applications using
            React.js, Tailwind CSS, Node.js, ASP.NET, and MongoDB/SQL Server. My
            technical skill set is complemented by strong problem-solving
            abilities, a quick learning mindset, and a proactive approach to
            tackling complex challenges. I’m enthusiastic about creating
            efficient digital solutions, collaborating across teams, and
            continuously growing in the field of software engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2
            className={`text-4xl font-bold text-center mb-8 ${
              isDark ? "text-gray-900" : "text-white"
            }`}
          >
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium shadow-md ${
                  isDark
                    ? "bg-gray-900 text-white hover:bg-white hover:text-black"
                    : "bg-white text-gray-900 hover:bg-black hover:text-white"
                } transition-colors duration-300`}
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  width="20"
                  height="30"
                  className="inline mr-2"
                />
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2
            className={`text-4xl font-bold text-center mb-8 ${
              isDark ? "text-black" : "text-white"
            }`}
          >
            My Web Developer Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {designProcess.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className={`p-6 rounded-xl shadow-lg ${
                  isDark ? "bg-black" : "bg-white"
                }`}
              >
                <h3
                  className={`text-xl font-semibold ${
                    isDark ? "text-white" : "text-black"
                  } mb-2`}
                >
                  {item.step}
                </h3>
                <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 text-center"
        >
          <h2
            className={`text-6xl font-semibold mb-4 ${
              isDark ? "text-gray-900" : "text-white"
            }`}
          >
            Contact Me
          </h2>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className={`text-2xl ${
                isDark
                  ? "text-gray-500 hover:text-gray-200"
                  : "text-gray-300 hover:text-gray-900"
              } transition-colors duration-300`}
            >
              {" "}
              Email
            </a>
            <a
              href={contactInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${
                isDark
                  ? "text-gray-500 hover:text-gray-200"
                  : "text-gray-300 hover:text-gray-900"
              } transition-colors duration-300`}
            >
              LinkedIn
            </a>
            <a
              href={contactInfo.Github}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${
                isDark
                  ? "text-gray-500 hover:text-gray-200"
                  : "text-gray-300 hover:text-gray-900"
              } transition-colors duration-300`}
            >
              GitHub
            </a>
          </div>
          <div className="mt-6 flex text-xl justify-center gap-4">
            <a
              href={contactInfo.resume}
              download="Ajay_Lakhara_Resume.pdf"
              className={`px-6 py-3 ${isDark ? "bg-white text-black hover:bg-black hover:text-white" : "bg-black  text-white hover:bg-white hover:text-black "} rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
