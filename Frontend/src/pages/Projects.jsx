import { motion } from "framer-motion";
import { useState } from "react";
import Hostpial from "../assets/projecting/Hosital.jpg";
import TaskManagment from "../assets/projecting/TaskMang.jpg";
import Agnet from "../assets/projecting/Agnet.jpg";
import portfolio from "../assets/projecting/Portfolio.png"; // Placeholder for portfolio image

const fallbackImage = "https://via.placeholder.com/400x300?text=No+Image";

const projects = [
  {
    title: "Hospital Management System",
    tech: ["React", "ASP.NET", "SQL Server","Tailwind"],
    desc: "A web application for managing hospital operations.",
    img: Hostpial,
    link: "https://devrajchatribin.netlify.app/projects/indicov",
  },
  {
    title: "Task Manager",
    tech: ["React", "Node.js", "MongoDB","Tailwind"],
    desc: "A task management app for organizing daily tasks.",
    img: TaskManagment,
    link: "https://devrajchatribin.netlify.app/projects/design-and-code",
  },
  {
    title: "Portfolio Website",
    tech: ["React", "Tailwind"],
    desc: "A personal portfolio showcasing skills and projects.",
    img: portfolio, 
    link: "https://ajaylakhara.github.io/Portfolio_Website/",
  },
  {
    title: "Agent management system",
    tech: ["React", "Node.js", "MongoDB","Tailwind"],
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
      className={`py-20 min-h-screen transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-6xl font-extrabold text-center mb-15 leading-tight ${
            isDark
              ? " bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent"
              : " bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent"
          }`}
        >
          My Projects
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {techCategories.map((tech, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300 ${
                selectedTech === tech
                  ? isDark
                    ? "bg-white text-black ring-2 ring-gray-900"
                    : "bg-black text-white ring-2 ring-gray-200"
                  : isDark
                  ? "bg-black text-white hover:bg-white hover:text-black"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              className={`${
                isDark ? "bg-black" : "bg-white"
              } p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <img
                src={project.img || fallbackImage}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4 transform hover:scale-105 transition-transform duration-300"
              />
              <h3
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                } mb-2`}
              >
                {project.title}
              </h3>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                } mb-3`}
              >
                {project.desc}
              </p>
              <p
                className={`text-sm font-medium ${
                  isDark ? "text-gray-400" : "text-gray-500"
                } mb-4`}
              >
                <span className={isDark ? "text-white" : "text-black"}>
                  Tech:
                </span>{" "}
                {project.tech.join(", ")}
              </p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-5 py-2 ${
                    isDark
                      ? "bg-white text-black hover:bg-black hover:text-white "
                      : "bg-black text-white hover:bg-white hover:text-black "
                  } rounded-lg font-semibold transition-colors duration-300`}
                >
                  View Project →
                </a>
              ) : (
                <span
                  className={`inline-block px-5 py-2 opacity-50 cursor-not-allowed ${
                    isDark
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  } rounded-lg font-semibold`}
                >
                  No Link Available
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {filteredProjects.length > 3 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-12 px-8 py-3 ${
              isDark
                ? "bg-black hover:bg-white text-white hover:text-black"
                : "bg-white hover:bg-black text-black hover:text-white"
            } rounded-full font-semibold shadow-md block mx-auto transition-colors duration-300`}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less ↑" : "View More ↓"}
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default Projects;
