import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Briefcase, Tag, Mail } from 'lucide-react';

export const InfoSidebar = ({ project }) => {
  const { role, duration, techStack, liveLink, githubLink } = project;

  return (
    <div className="space-y-8 sticky top-28">
      {/* Overview Meta Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6"
      >
        <h3 className="text-lg font-black text-[#060612] tracking-tight uppercase border-b border-gray-100 pb-3 flex items-center gap-2">
          <span>Project Parameters</span>
        </h3>

        <div className="space-y-5">
          {/* Role block */}
          {role && (
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#FF6321]/10 flex items-center justify-center text-[#FF6321] flex-shrink-0">
                <Briefcase size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">My Role</p>
                <p className="text-sm font-semibold text-[#060612] mt-0.5">{role}</p>
              </div>
            </div>
          )}

          {/* Duration block */}
          {duration && (
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#FF6321]/10 flex items-center justify-center text-[#FF6321] flex-shrink-0">
                <Calendar size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Timeline</p>
                <p className="text-sm font-semibold text-[#060612] mt-0.5">{duration}</p>
              </div>
            </div>
          )}

          {/* Tools Grid */}
          {techStack && techStack.length > 0 && (
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#FF6321]/10 flex items-center justify-center text-[#FF6321] flex-shrink-0">
                <Tag size={16} />
              </div>
              <div className="w-full">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Technologies</p>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-semibold rounded bg-[#F5F4F3] text-gray-700 border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Recruiter Quick Link Callouts */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="space-y-3"
      >
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-[#FF6321] hover:bg-[#e05d00] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,99,33,0.3)] transition-all duration-300 transform hover:scale-[1.02] cursor-pointer shadow-lg shadow-[#FF6321]/10"
          >
            <span>Launch Live Product</span>
            <ExternalLink size={16} />
          </a>
        )}

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-white text-gray-700 border border-gray-300 hover:text-[#060612] hover:bg-gray-50 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
          >
            <Github size={16} />
            <span>Explore Codebase</span>
          </a>
        )}

        <a
          href="mailto:ajaylakhara748@gmail.com?subject=Inquiry%20regarding%20your%20portfolio"
          className="w-full py-4 bg-[#060612] hover:bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
        >
          <Mail size={16} />
          <span>Hire Me / Contact</span>
        </a>
      </motion.div>
    </div>
  );
};

export default InfoSidebar;
