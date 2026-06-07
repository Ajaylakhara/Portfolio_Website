import React from 'react';
import { motion } from 'framer-motion';

export const MetricsGrid = ({ metrics }) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:border-[#FF6321]/30 hover:shadow-lg transition-all duration-300 relative group"
        >
          {/* Subtle accent border glow */}
          <div className="absolute inset-0 bg-[#FF6321]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="relative z-10">
            <h4 className="text-3xl md:text-4xl font-black text-[#FF6321] tracking-tight mb-2">
              {metric.value}
            </h4>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-snug">
              {metric.label}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MetricsGrid;
