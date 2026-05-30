import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            My <span className="text-accent">Projects</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A showcase of my work in full-stack development, UI/UX design, and technical engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
