import React from 'react';

export const WireframeMockup = ({ project }) => {
  const isFintech = project?.id === "fintech-dashboard";
  const isHospital = project?.id === "hospital-management";
  const isTask = project?.id === "task-manager";

  // Renders a blueprint grid matching the type of project to showcase amazing architectural details
  const renderDashboardWireframe = () => (
    <div className="space-y-4">
      {/* Mock Stats Cards Row */}
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((idx) => (
          <div key={idx} className="bg-white border-2 border-dashed border-gray-300 p-4 rounded-xl space-y-2">
            <div className="w-12 h-2.5 bg-gray-300 rounded-sm" />
            <div className="w-20 h-5 bg-gray-200 rounded-sm" />
            <div className="w-16 h-2 bg-gray-100 rounded-sm" />
          </div>
        ))}
      </div>

      {/* Main Panel Content split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white border-2 border-dashed border-gray-300 p-4 rounded-2xl h-48 flex flex-col justify-between">
          <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-200">
            <div className="w-32 h-3 bg-gray-300 rounded-sm" />
            <div className="w-12 h-3 bg-gray-200 rounded-sm" />
          </div>
          {/* Simulated chart skeleton */}
          <div className="w-full flex-grow flex items-end justify-between pt-4 px-4 gap-1.5 h-24">
            <div className="w-full h-8 bg-gray-200 rounded-sm border border-dashed border-gray-300" />
            <div className="w-full h-16 bg-gray-200 rounded-sm border border-dashed border-gray-300" />
            <div className="w-full h-20 bg-gray-200 rounded-sm border border-dashed border-gray-300" />
            <div className="w-full h-12 bg-gray-200 rounded-sm border border-dashed border-gray-300" />
            <div className="w-full h-28 bg-[#FF6321]/20 rounded-sm border border-dashed border-[#FF6321]/30" />
            <div className="w-full h-24 bg-gray-200 rounded-sm border border-dashed border-gray-300" />
          </div>
        </div>

        <div className="bg-white border-2 border-dashed border-gray-300 p-4 rounded-2xl space-y-4">
          <div className="w-24 h-3 bg-gray-300 rounded-sm pb-1 border-b border-dashed border-gray-200" />
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between items-center py-1">
                <div className="flex gap-2 items-center">
                  <div className="w-3.5 h-3.5 bg-gray-200 rounded-full" />
                  <div className="w-16 h-2.5 bg-gray-300 rounded-sm" />
                </div>
                <div className="w-8 h-2 bg-gray-200 rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderKanbanWireframe = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {["To Do", "In Progress", "Done"].map((column, cidx) => (
        <div key={cidx} className="bg-white border-2 border-dashed border-gray-300 p-4 rounded-2xl space-y-3">
          <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-200">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{column}</span>
            <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center text-[8px] font-black text-gray-500">
              {cidx === 0 ? 3 : cidx === 1 ? 2 : 5}
            </div>
          </div>
          <div className="space-y-3">
            {[1, 2].map((card) => (
              <div key={card} className="bg-gray-50 border border-dashed border-gray-200 p-3 rounded-xl space-y-2.5">
                <div className="w-3/4 h-2.5 bg-gray-300 rounded-sm" />
                <div className="w-1/2 h-2 bg-gray-200 rounded-sm" />
                <div className="flex justify-between pt-1">
                  <div className="flex gap-1">
                    <div className="w-8 h-2 bg-[#FF6321]/20 rounded-xs" />
                    <div className="w-6 h-2 bg-gray-200 rounded-xs" />
                  </div>
                  <div className="w-4 h-4 bg-gray-300 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#F5F4F3] border border-gray-200 p-6 rounded-3xl space-y-4">
      {/* Mock Browser Header */}
      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 bg-red-400 rounded-full" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 bg-green-400 rounded-full" />
        </div>
        <div className="bg-white border border-gray-200 px-8 py-0.5 rounded-md text-[10px] text-gray-400 font-mono select-none">
          schematic://{project?.id || "wireframe"}.blueprint
        </div>
        <div className="w-8 h-3.5 bg-gray-200 rounded-sm" />
      </div>

      {/* Blueprint Grid Container */}
      <div className="bg-[#FAF9F9] p-4 rounded-2xl">
        {isTask ? renderKanbanWireframe() : renderDashboardWireframe()}
      </div>

      {/* Blueprint Legend */}
      <div className="flex justify-between items-center pt-2">
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
            <span className="w-2.5 h-2.5 bg-white border border-dashed border-gray-300 rounded-sm" /> Grid Wireframe
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
            <span className="w-2.5 h-2.5 bg-[#FF6321]/20 rounded-sm" /> Critical User Touchpoint
          </div>
        </div>
        <span className="text-[9px] text-gray-400 font-mono uppercase tracking-widest">
          Scale: 1:1 Layout Blueprint
        </span>
      </div>
    </div>
  );
};

export default WireframeMockup;
