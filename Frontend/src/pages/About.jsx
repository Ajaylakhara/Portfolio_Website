import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Angular",
  "Redux",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Cypress",
  "Docker",
  "Firebase",
  "AWS",
  "GSAP",
  "Framer Motion",
  "Figma",
  "Tailwind CSS",
  "GIT",
];

const designProcess = [
  {
    step: "01. Discovery",
    desc: "Understanding client needs and project goals.",
  },
  {
    step: "02. Design",
    desc: "Creating wireframes and visual designs.",
  },
  {
    step: "03. Development",
    desc: "Building responsive and functional websites.",
  },
  {
    step: "04. Testing",
    desc: "Ensuring functionality across devices and browsers.",
  },
  {
    step: "05. Quality Assurance",
    desc: "Optimizing load times, SEO, and file efficiency.",
  },
];

const About = ({ isDark = false }) => {
  return (
    <motion.section
      className={`py-20 min-h-screen transition-colors duration-300 
      `}
    >
      <div className="container mx-auto px-6">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1
            className={`text-5xl font-extrabold leading-tight ${
              isDark
                ? " bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent"
                : " bg-gradient-to-r from-gray-100 to-gray-600 bg-clip-text text-transparent"
            }`}
          >
            A Creative Developer & Digital Designer
          </h1>
          <p
            className={`mt-4 text-xl max-w-2xl mx-auto ${
              isDark ? "text-gray-600" : "text-gray-300"
            }`}
          >
            I collaborate with brands globally to design impactful,
            mission-focused websites that drive results and achieve business
            goals.
          </p>
        </motion.div>

        {/* Skills Section */}
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
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Work History Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2
            className={`text-4xl font-bold text-center mb-8 ${
              isDark ? "text-gray-800" : "text-gray-200"
            }`}
          >
            Experience
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto text-center ${
              isDark ? "text-gray-600" : "text-gray-400"
            }`}
          >
            I have worked with some of the most innovative industry leaders to
            help build their top-notch products.
          </p>
        </motion.div>

        {/* Design Process Section */}
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
            My Design Process
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

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2
            className={`text-4xl font-bold text-center mb-8 ${
              isDark ? "text-black" : "text-white"
            }`}
          >
            Awards & Recognition
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto text-center ${
              isDark ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Help & Reviews: Get your portfolio and projects reviewed by industry
            experts and mentors.
          </p>
        </motion.div>

        {/* Community Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2
            className={`text-4xl font-bold text-center mb-8 ${
              isDark ? "text-gray-800" : "text-gray-300"
            }`}
          >
            Building a Tech Community
          </h2>
          <div
            className={`max-w-3xl mx-auto p-6 
            }`}
          >
            <p
              className={`text-lg ${
                isDark ? "text-gray-600" : "text-gray-300"
              } mb-4`}
            >
              I founded{" "}
              <span className={isDark ? "text-blue-600" : "text-blue-400"}>
                Design & Code
              </span>
              , a global community with a mission to connect designers and
              developers to create a happy community eager to learn, innovate,
              and grow together. We welcome all designers and developers:
              beginners, intermediates, and experts willing to learn together.
              We encourage sharing resources and learning experiences,
              organizing events, and providing feedback for our members to grow
              as they learn.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p
                  className={`text-2xl font-bold ${
                    isDark ? "text-blue-600" : "text-blue-400"
                  }`}
                >
                  10k+
                </p>
                <p className={isDark ? "text-gray-700" : "text-gray-200"}>
                  Community Members
                </p>
              </div>
              <div>
                <p
                  className={`text-2xl font-bold ${
                    isDark ? "text-blue-600" : "text-blue-400"
                  }`}
                >
                  50+
                </p>
                <p className={isDark ? "text-gray-700" : "text-gray-200"}>
                  Events Conducted
                </p>
              </div>
              <div>
                <p
                  className={`text-2xl font-bold ${
                    isDark ? "text-blue-600" : "text-blue-400"
                  }`}
                >
                  3+
                </p>
                <p className={isDark ? "text-gray-700" : "text-gray-200"}>
                  Years
                </p>
              </div>
            </div>
            <a
              href="https://designandcode.community" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block mt-6 px-6 py-3 ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-800 text-white"
                  : "bg-blue-500 hover:bg-blue-200 text-white"
              } rounded-full font-semibold transition-colors duration-300`}
            >
              Join Community
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
