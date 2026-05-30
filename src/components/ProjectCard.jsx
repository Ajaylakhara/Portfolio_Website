import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleCardClick = () => {
    if (project.category === "Branding") {
      setLightboxOpen(true);
    } else {
      const url = project.liveLink || project.githubLink;
      if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  };

  const handleButtonClick = (e, url) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      onClick={handleCardClick}
      className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      {/* Static Visual Area */}
      <div className="aspect-[16/10] w-full overflow-hidden bg-gray-50 relative">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium italic">
            No image available
          </div>
        )}
      </div>

      {/* Static Info Area */}
      <div className="p-8">
        {project.category === "Branding" ? (
          <div className="space-y-1">
            <span className="text-[10px] font-black tracking-widest text-[#FF6321] uppercase block">Logo Identity</span>
            <h3 className="text-2xl font-black text-secondary tracking-tight">
              {project.title}
            </h3>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-2 mb-4">
              {(project.techStack || project.tags || []).slice(0, 3).map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors tracking-tight">
              {project.title}
            </h3>
            <p className="text-gray-500 font-medium line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </>
        )}
      </div>

      {/* Premium Interactive Hover Overlay */}
      <div className="absolute inset-0 bg-[#060612]/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out p-8 flex flex-col justify-center text-white z-20">
        {project.category === "Branding" ? (
          <div className="space-y-2 text-center">
            <span className="text-[10px] font-black tracking-widest text-[#FF6321] uppercase">Logo Identity</span>
            <h3 className="text-2xl font-black tracking-tight text-white leading-tight">
              {project.title}
            </h3>
          </div>
        ) : (
          <div className="flex flex-col justify-between h-full w-full">
            <div>
              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {(project.techStack || project.tags || []).map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-wider bg-white/10 text-white/90 border border-white/10 px-2.5 py-1 rounded-md font-semibold">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project title */}
              <h3 className="text-2xl font-black mb-3 tracking-tight text-white leading-tight">
                {project.title}
              </h3>

              {/* 1-line description */}
              <p className="text-gray-300 text-sm leading-relaxed font-medium line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Dual action buttons */}
            <div className="flex gap-3 mt-4">
              {project.liveLink && (
                <button
                  onClick={(e) => handleButtonClick(e, project.liveLink)}
                  className="flex-1 bg-[#FF6321] hover:bg-[#e05d00] hover:shadow-[0_0_20px_rgba(255,99,33,0.4)] text-white text-xs font-bold px-4 py-3 rounded-xl inline-flex items-center justify-center gap-1.5 transition-all duration-300"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </button>
              )}
              {project.githubLink && (
                <button
                  onClick={(e) => handleButtonClick(e, project.githubLink)}
                  className="flex-1 border border-white/20 hover:border-white/40 hover:bg-white/10 text-white text-xs font-bold px-4 py-3 rounded-xl inline-flex items-center justify-center gap-1.5 transition-all duration-300"
                >
                  <Github size={14} />
                  <span>View Code</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Brand Logos */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex flex-col items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
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
                  src={project.image}
                  alt={project.title}
                  className="max-h-[60vh] w-auto max-w-full object-contain pointer-events-none rounded-xl"
                />
                {project.hasWatermark && (
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
                  {project.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
