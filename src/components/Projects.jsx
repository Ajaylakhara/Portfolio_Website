import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { projects } from "../data/projects";

const categories = ["All", "UI Design", "Mobile App", "Branding", "Web Design"];

const Projects = ({ isDark = false }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxProject, setLightboxProject] = useState(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const handleCardClick = (id) => {
    const project = projects.find(p => p.id === id);
    if (project?.category === "Branding") {
      setLightboxProject(project);
    } else {
      const url = project?.liveLink || project?.githubLink;
      if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  };

  const handleButtonClick = (e, url) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Split into two rows for the double-marquee effect
  const half = Math.ceil(filteredProjects.length / 2);
  const topRowSource = filteredProjects.slice(0, half);
  const bottomRowSource = filteredProjects.slice(half);

  // Duplicate arrays based on screen size to keep DOM tree small on mobile devices
  // Use 1x on mobile (enough for seamless loop with CSS animation), 4x on desktop
  const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 768;
  const duplicationFactor = isMobileDevice ? 1 : 4;
  const topRow = Array(duplicationFactor).fill(topRowSource).flat();
  const bottomRow = Array(duplicationFactor).fill(bottomRowSource).flat();

  return (
    <section id="projects" className="py-32 overflow-hidden relative bg-[#F8F9FA]">
      {/* Container for Header and Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-[#111111]">
            Selected Works
          </h2>
          <p className="text-[#FF6321] font-bold tracking-widest uppercase text-sm">
            UI/UX Designs • Logos • Branding • Interfaces
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 relative z-20"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#FF6321] text-white shadow-lg shadow-[#FF6321]/30"
                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200/80 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* The Flowing Sliders */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative w-full flex flex-col gap-6 overflow-hidden pb-10"
        >
          {/* Top Marquee */}
          <div className="flex gap-6 pr-6 w-max animate-flow">
            {topRow.map((project, index) => (
              <div
                key={`top-${project.id}-${index}`}
                onClick={() => handleCardClick(project.id)}
                className="relative group w-[300px] md:w-[450px] h-[220px] md:h-[320px] rounded-[24px] overflow-hidden flex-shrink-0 cursor-pointer shadow-lg hover:scale-[1.03] hover:shadow-2xl border border-black/5 bg-white transition-all duration-300"
              >
                <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                  {project.img ? (
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium italic bg-gray-50">
                      No image available
                    </div>
                  )}

                  {project.category === "Branding" && (
                    <div className="absolute bottom-3 left-3 right-3 bg-white/85 backdrop-blur-md border border-gray-150 py-2 px-3 rounded-xl shadow-sm z-10 group-hover:opacity-0 transition-opacity duration-300">
                      <span className="text-[10px] font-black text-[#111111] tracking-wider block text-center uppercase">
                        {project.title}
                      </span>
                    </div>
                  )}

                  {/* Premium Interactive Hover Overlay */}
                  <div className="absolute inset-0 bg-[#060612]/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out p-6 flex flex-col justify-center text-white z-20">
                    {project.category === "Branding" ? (
                      <div className="space-y-2 text-center">
                        <span className="text-[10px] font-black tracking-widest text-[#FF6321] uppercase">Logo Identity</span>
                        <h3 className="text-xl md:text-2xl font-black tracking-tight text-white leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    ) : (
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          {/* Tech stack badges */}
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {(project.techStack || project.tags || []).slice(0, 3).map((tag) => (
                              <span key={tag} className="text-[8px] uppercase tracking-wider bg-white/10 text-white/90 border border-white/10 px-2 py-0.5 rounded font-semibold">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Project title */}
                          <h3 className="text-lg md:text-xl font-black tracking-tight text-white leading-tight mb-1">
                            {project.title}
                          </h3>

                          {/* 1-line description */}
                          <p className="text-gray-300 text-xs leading-relaxed font-medium line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        {/* Dual action buttons */}
                        <div className="flex gap-2">
                          {project.liveLink && (
                            <button
                              onClick={(e) => handleButtonClick(e, project.liveLink)}
                              className="flex-1 bg-[#FF6321] hover:bg-[#e05d00] hover:shadow-[0_0_20px_rgba(255,99,33,0.4)] text-white text-[10px] font-bold px-3 py-2 rounded-lg inline-flex items-center justify-center gap-1 transition-all duration-300"
                            >
                              <span>Live</span>
                              <ExternalLink size={10} />
                            </button>
                          )}
                          {project.githubLink && (
                            <button
                              onClick={(e) => handleButtonClick(e, project.githubLink)}
                              className="flex-1 border border-white/20 hover:border-white/40 hover:bg-white/10 text-white text-[10px] font-bold px-3 py-2 rounded-lg inline-flex items-center justify-center gap-1 transition-all duration-300"
                            >
                              <Github size={10} />
                              <span>Code</span>
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Marquee (moving in reverse) */}
          <div className="flex gap-6 pr-6 w-max animate-flow" style={{ animationDuration: "50s", animationDirection: "reverse" }}>
            {bottomRow.map((project, index) => (
              <div
                key={`bottom-${project.id}-${index}`}
                onClick={() => handleCardClick(project.id)}
                className="relative group w-[300px] md:w-[450px] h-[220px] md:h-[320px] rounded-[24px] overflow-hidden flex-shrink-0 cursor-pointer shadow-lg hover:scale-[1.03] hover:shadow-2xl border border-black/5 bg-white transition-all duration-300"
              >
                <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                  {project.img ? (
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium italic bg-gray-50">
                      No image available
                    </div>
                  )}

                  {project.category === "Branding" && (
                    <div className="absolute bottom-3 left-3 right-3 bg-white/85 backdrop-blur-md border border-gray-150 py-2 px-3 rounded-xl shadow-sm z-10 group-hover:opacity-0 transition-opacity duration-300">
                      <span className="text-[10px] font-black text-[#111111] tracking-wider block text-center uppercase">
                        {project.title}
                      </span>
                    </div>
                  )}

                  {/* Premium Interactive Hover Overlay */}
                  <div className="absolute inset-0 bg-[#060612]/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out p-6 flex flex-col justify-center text-white z-20">
                    {project.category === "Branding" ? (
                      <div className="space-y-2 text-center">
                        <span className="text-[10px] font-black tracking-widest text-[#FF6321] uppercase">Logo Identity</span>
                        <h3 className="text-xl md:text-2xl font-black tracking-tight text-white leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    ) : (
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          {/* Tech stack badges */}
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {(project.techStack || project.tags || []).slice(0, 3).map((tag) => (
                              <span key={tag} className="text-[8px] uppercase tracking-wider bg-white/10 text-white/90 border border-white/10 px-2 py-0.5 rounded font-semibold">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Project title */}
                          <h3 className="text-lg md:text-xl font-black tracking-tight text-white leading-tight mb-1">
                            {project.title}
                          </h3>

                          {/* 1-line description */}
                          <p className="text-gray-300 text-xs leading-relaxed font-medium line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        {/* Dual action buttons */}
                        <div className="flex gap-2">
                          {project.liveLink && (
                            <button
                              onClick={(e) => handleButtonClick(e, project.liveLink)}
                              className="flex-1 bg-[#FF6321] hover:bg-[#e05d00] hover:shadow-[0_0_20px_rgba(255,99,33,0.4)] text-white text-[10px] font-bold px-3 py-2 rounded-lg inline-flex items-center justify-center gap-1 transition-all duration-300"
                            >
                              <span>Live</span>
                              <ExternalLink size={10} />
                            </button>
                          )}
                          {project.githubLink && (
                            <button
                              onClick={(e) => handleButtonClick(e, project.githubLink)}
                              className="flex-1 border border-white/20 hover:border-white/40 hover:bg-white/10 text-white text-[10px] font-bold px-3 py-2 rounded-lg inline-flex items-center justify-center gap-1 transition-all duration-300"
                            >
                              <Github size={10} />
                              <span>Code</span>
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </AnimatePresence>

      {/* Lightbox Modal for Brand Logos */}
      <AnimatePresence>
        {lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxProject(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex flex-col items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxProject(null);
              }}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <X size={24} />
            </button>

            {/* Modal Image container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] flex flex-col items-center select-none"
            >
              {/* Image with AL Watermark */}
              <div className="relative overflow-hidden rounded-3xl border border-gray-200/50 shadow-2xl bg-white p-6 flex items-center justify-center">
                <img
                  src={lightboxProject.image}
                  alt={lightboxProject.title}
                  className="max-h-[60vh] w-auto max-w-full object-contain pointer-events-none rounded-xl"
                />
                {lightboxProject.hasWatermark && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
                    <span className="text-[#060612]/[0.07] text-5xl md:text-7xl font-black tracking-widest uppercase border-4 border-[#060612]/[0.04] rounded-2xl px-6 py-3 rotate-[-30deg] backdrop-blur-[0.5px]">
                      AL
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom details showing ONLY title */}
              <div className="mt-6 text-center space-y-2 px-4">
                <span className="text-[10px] font-black tracking-widest text-[#FF6321] uppercase block">Logo Identity</span>
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                  {lightboxProject.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
