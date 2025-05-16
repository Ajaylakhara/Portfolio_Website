import { motion } from "framer-motion";
import React, { useState } from "react";
import Hostpial  from "../assets/projecting/Hosital.jpg";
import TaskManagment  from "../assets/projecting/TaskMang.jpg";
import Agnet from "../assets/projecting/Agnet.jpg";

const projects = [
  {
    title: "Hospital Management System",
    tech: ["React", "ASP.NET", "SQL Server"],
    desc: "A web application for managing hospital operations.",
    img: Hostpial,
    link: "https://devrajchatribin.netlify.app/projects/indicov",
  },
  {
    title: "Task Manager",
    tech: ["React", "Node.js", "MongoDB"],
    desc: "A task management app for organizing daily tasks.",
    
    img: TaskManagment,
    link: "https://devrajchatribin.netlify.app/projects/design-and-code",
  },
  {
    title: "Portfolio Website",
    tech: ["React", "Tailwind"],
    desc: "A personal portfolio showcasing skills and projects.",
    img: "",
    link: "",
  },
  {
    title: "Agent management system",
    tech: ["React", "Node.js", "MongoDB"],
    desc: "A web application for managing agents and their tasks.",
    img: Agnet,
    link: "https://devrajchatribin.netlify.app/projects/snapalyzer",
  },

];

const techCategories = [
  "All",
  ...new Set(projects.flatMap((project) => project.tech)),
];

const Projects = ({ isDark = false }) => {
  const [showMore, setShowMore] = useState(false);
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(selectedTech));

  const displayedProjects = showMore
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className={`py-20 ${
        isDark ? "bg-white" : "bg-black"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-6xl font-bold text-center mb-8 ${
            isDark ? "text-black" : "text-white"
          }`}
        >
          My Projects
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {techCategories.map((tech, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 
                ${
                  selectedTech === tech
                    ? isDark
                      ? "bg-white text-black"
                      : "text-white bg-black"
                    : isDark
                    ? "bg-gray-900 hover:bg-white hover:text-black text-gray-200"
                    : "bg-gray-200 text-gray-900 hover:bg-black  hover:text-white"
                }`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`${
                isDark ? "bg-black" : "bg-white"
              } p-6 rounded-lg shadow-lg`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                } mt-2`}
              >
                {project.desc}
              </p>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                } mt-2`}
              >
                Tech: {project.tech.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block mt-4 px-4 py-2  rounded-lg ${
                  isDark
                    ? "bg-white text-black hover:bg-black hover:text-white"
                    : "bg-black  text-white hover:bg-white hover:text-black"
                } transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400`}
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length > 3 && (
          <button
            className={`mt-8 px-6 py-3 ${
              isDark
                ? "bg-black text-white hover:bg-white hover:text-black"
                : "bg-white text-black  hover:bg-black hover:text-white"
            }  rounded-lg block mx-auto transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200`}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less ↑" : "View More ↓"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
