import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, GitBranch, LayoutGrid } from 'lucide-react';
import FlowDiagram from './FlowDiagram';
import WireframeMockup from './WireframeMockup';

export const VisualTabs = ({ project }) => {
  const [activeTab, setActiveTab] = useState('ui');

  const tabs = [
    { id: 'ui', label: 'UI Interface', icon: Monitor },
    { id: 'flow', label: 'User Flow Map', icon: GitBranch },
    { id: 'wireframe', label: 'Wireframe Spec', icon: LayoutGrid }
  ];

  return (
    <div className="my-16 space-y-8">
      {/* Tab Switcher Headers */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-4 gap-4">
        <div className="text-left">
          <h3 className="text-xl font-black text-[#060612] tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6321]" /> Interactive Deliverables
          </h3>
          <p className="text-sm text-gray-500 mt-1">Select views to investigate high-fidelity screens, workflow, or blueprints.</p>
        </div>

        {/* Dynamic Buttons */}
        <div className="flex bg-[#F5F4F3] p-1.5 rounded-2xl border border-gray-200 self-start sm:self-auto relative">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors duration-300 z-10 cursor-pointer ${isActive ? 'text-white' : 'text-gray-500 hover:text-[#060612]'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-[#FF6321] rounded-xl z-[-1]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Canvas */}
      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === 'ui' && (
            <motion.div
              key="ui-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* High-Fi Interface Rendering in Mock Browser */}
              <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-md">
                {/* Simulated browser header */}
                <div className="bg-[#F5F4F3] border-b border-gray-200 px-6 py-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <div className="bg-white border border-gray-200 px-6 py-0.5 rounded-md text-[10px] text-gray-400 font-mono select-none overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px] sm:max-w-none">
                    https://{project.id}.ajaylakhara.com
                  </div>
                  <div className="w-4 h-4 bg-gray-200 rounded-full" />
                </div>

                <div className="p-4 bg-[#FAF9F9]">
                  {project.image ? (
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full object-cover object-top border border-gray-200 shadow-xs max-h-[500px]"
                        loading="lazy"
                      />
                      {project.hasWatermark && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
                          <span className="text-gray-500/20 text-6xl md:text-8xl font-black tracking-widest uppercase border-4 border-gray-500/10 rounded-2xl px-6 py-3 rotate-[-30deg] backdrop-blur-[1px]">
                            AL
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/9] flex flex-col items-center justify-center text-gray-400 italic bg-[#FAF9F9] rounded-2xl border border-dashed border-gray-300 p-8">
                      <Monitor size={48} className="text-gray-300 mb-2" strokeWidth={1} />
                      <span className="font-bold text-sm text-[#060612] not-italic">Interface Visual Pending</span>
                      <span className="text-xs text-gray-500 not-italic max-w-xs text-center mt-1">High-fidelity interface updates are currently syncing to our production assets directory.</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'flow' && (
            <motion.div
              key="flow-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <FlowDiagram steps={project.userFlow} />
            </motion.div>
          )}

          {activeTab === 'wireframe' && (
            <motion.div
              key="wireframe-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <WireframeMockup project={project} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VisualTabs;
