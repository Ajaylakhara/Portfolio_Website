import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const FlowDiagram = ({ steps }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs relative overflow-hidden">
      {/* Structural layout parameters */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6321]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        <div>
          <h3 className="text-lg font-black text-[#060612] uppercase tracking-wider">
            User Experience Architecture
          </h3>
          <p className="text-sm text-gray-500 mt-1">Detailed execution node sequence proving logical interface paths.</p>
        </div>

        {/* Visual Line Connectors Grid (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((node, i) => (
            <motion.div
              key={node.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col bg-[#F5F4F3] border border-gray-200/60 p-5 rounded-2xl group hover:border-[#FF6321]/30 transition-all duration-300"
            >
              {/* Connector Arrow for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-[#FF6321] bg-white w-7 h-7 rounded-full items-center justify-center border border-gray-200 shadow-xs transform group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} strokeWidth={3} />
                </div>
              )}

              {/* Header Step Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#FF6321] text-white text-[10px] font-black flex items-center justify-center">
                  0{node.step}
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Process Node
                </span>
              </div>

              {/* Title & Desc */}
              <h4 className="text-sm font-black text-[#060612] mb-1.5 tracking-tight group-hover:text-[#FF6321] transition-colors">
                {node.title}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                {node.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Loop Checklist */}
        <div className="border-t border-gray-100 pt-6">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              UX Validation Checklist:
            </span>
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <CheckCircle size={14} className="text-emerald-500" />
              <span>Frictionless Path Routing</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <CheckCircle size={14} className="text-emerald-500" />
              <span>Optimized Visual Loops</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <CheckCircle size={14} className="text-emerald-500" />
              <span>Fitts's Law Adherence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDiagram;
