import { motion as Motion } from "framer-motion";
import { useState } from "react";
import Hospital from "../assets/projecting/Hosital.jpg"; 
import TaskManagement from "../assets/projecting/TaskMang.jpg"; 
import Agent from "../assets/projecting/Agnet.jpg"
 import   portfolio from "../assets/projecting/Hosital.jpg"; 
const projects = [
  {
    title: "Hospital Management System",
    tech: ["React", "ASP.NET", "SQL Server"],
    desc: "A web application for managing hospital operations.",
    img: Hospital,
    link: "",
  },
  {
    title: "Task Manager",
    tech: ["React", "Node.js", "MongoDB"],
    desc: "A task management app for organizing daily tasks.",
    img: TaskManagement,
    link: "https://task-management-system-5j25nzqnt-ajay-lakharas-projects.vercel.app",
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
    tech: ["React", "Node.js", "MongoDB"],
    desc: "A web application for managing agents and their tasks.",
    img: Agent,
    link: "",
  },
];

const techCategories = [
  "All",
  ...new Set(projects.flatMap((project) => project.tech)),
];

const ProjectCard = ({ project, isDark, index }) => (
  <Motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
    whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
    className={`${isDark ? "bg-black" : "bg-white"} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
  >
    {project.img ? (
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md mb-4 transform hover:scale-105 transition-transform duration-300"
      />
    ) : (
      <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-md mb-4 text-gray-500">
        No image available
      </div>
    )}
    <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-800"} mb-2`}>
      {project.title}
    </h3>
    <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"} mb-3`}>
      {project.desc}
    </p>
    <p className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-500"} mb-4`}>
      <span className={isDark ? "text-white" : "text-black"}>Tech:</span> {project.tech.join(", ")}
    </p>
    {project.link ? (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block px-5 py-2 ${
          isDark
            ? "bg-white text-black hover:bg-black hover:text-white"
            : "bg-black text-white hover:bg-white hover:text-black"
        } rounded-lg font-semibold transition-colors duration-300`}
      >
        View Project →
      </a>
    ) : (
      <span
        className={`inline-block px-5 py-2 cursor-not-allowed opacity-50 rounded-lg font-semibold ${
          isDark ? "bg-gray-700 text-gray-300" : "bg-gray-300 text-gray-600"
        }`}
      >
        No Link
      </span>
    )}
  </Motion.div>
);

const Projects = ({ isDark = false }) => {
  const [showMore, setShowMore] = useState(false);
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(selectedTech));

  const displayedProjects = showMore ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className={`py-20 min-h-screen transition-colors duration-300 ${
        isDark ? "bg-white" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-6">
        <Motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-6xl font-extrabold text-center mb-15 leading-tight ${
            isDark
              ? "bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent"
              : "bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent"
          }`}
        >
          My Projects
        </Motion.h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {techCategories.map((tech, index) => (
            <Motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={selectedTech === tech}
              className={`px-5 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300 ${
                selectedTech === tech
                  ? isDark
                    ? "bg-white text-black border-0 "
                    : "bg-black text-white  border-0"
                  : isDark
                  ? "bg-black text-white hover:bg-white hover:text-black"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </Motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} isDark={isDark} index={index} />
          ))}
        </div>

        {filteredProjects.length > 3 && (
          <Motion.button
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
          </Motion.button>
        )}
      </div>
    </section>
  );
};

export default Projects;
