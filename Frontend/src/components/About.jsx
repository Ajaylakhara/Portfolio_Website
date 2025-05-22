import React from "react";
import { motion } from "framer-motion";


export default function About({ isDark = false }) {
  return (
    <div>
      <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`py-20 ${ isDark ? "bg-white" : "bg-black"} text-center transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        <h2 className={`text-6xl font-bold ${isDark ?"text-black ": "text-white"} mb-6`}>About Me</h2>
        <div className={`max-w-screen mx-auto ${isDark ? "bg-white " : "bg-black"} p-6 rounded-lg `}>
          <p className={` text-2xl ${isDark ? "text-gray-900" :"text-gray-200"}`}>
            I'm Ajay Lakhara,  
             detail-oriented Full Stack Developer and UI/UX designer currently pursuing a Bachelor's degree in Electronics and Communication Engineering. With hands-on experience in both hardware systems and modern web development, I bring a unique blend of engineering knowledge and software development expertise. I specialize in building responsive, scalable web applications using React.js, Tailwind CSS, Node.js, ASP.NET, and MongoDB/SQL Server. My technical skill set is complemented by strong problem-solving abilities, a quick learning mindset, and a proactive approach to tackling complex challenges. I’m enthusiastic about creating efficient digital solutions, collaborating across teams, and continuously growing in the field of software engineering.


          </p>
        </div>
      </div>
    </motion.section>
    </div>
  )
}
