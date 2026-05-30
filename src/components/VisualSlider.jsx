import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const VisualSlider = ({ beforeImg, afterImg, beforeLabel = "Legacy Interface", afterLabel = "Optimized UI" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  // Standard interactive placeholder SVGs if images are absent (to keep UI pristine)
  const defaultBefore = (
    <div className="absolute inset-0 bg-[#E5E7EB] text-gray-400 flex flex-col items-center justify-center p-8 text-center select-none">
      <svg className="w-16 h-16 opacity-30 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <span className="font-bold text-sm">Legacy Grid Layout</span>
      <span className="text-xs max-w-xs mt-1">High structural layout latency, fragmented telemetry and dense forms</span>
    </div>
  );

  const defaultAfter = (
    <div className="absolute inset-0 bg-[#FF6321]/5 text-[#FF6321] flex flex-col items-center justify-center p-8 text-center select-none">
      <svg className="w-16 h-16 opacity-40 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      <span className="font-extrabold text-sm">ApexWealth Optimizations</span>
      <span className="text-xs max-w-xs mt-1">Featherlight dynamic charts, micro-seconds update filters, and unified records</span>
    </div>
  );

  return (
    <div className="my-16 space-y-4">
      <div className="text-left">
        <h3 className="text-xl font-black text-[#060612] tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF6321]" /> Before vs After Comparison
        </h3>
        <p className="text-sm text-gray-500 mt-1">Drag the slider horizontally to toggle between the original and premium design iterations.</p>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={(e) => {
          isDragging.current = true;
          handleMove(e.clientX);
        }}
        onTouchStart={() => {
          isDragging.current = true;
        }}
        className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden select-none border border-gray-200 bg-[#F5F4F3] cursor-ew-resize shadow-md select-none"
      >
        {/* BEFORE LAYER (Background) */}
        {beforeImg ? (
          <img src={beforeImg} alt="Original Design" className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" />
        ) : (
          defaultBefore
        )}

        {/* AFTER LAYER (Clipped Foreground) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75 select-none pointer-events-none"
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
        >
          {afterImg ? (
            <img src={afterImg} alt="Optimized Design" className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" />
          ) : (
            defaultAfter
          )}
        </div>

        {/* SPLIT SPLINE BAR */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#FF6321] cursor-ew-resize flex items-center justify-center z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-9 h-9 bg-white text-[#FF6321] rounded-full flex items-center justify-center shadow-2xl border border-gray-100 font-black pointer-events-auto">
            ↔
          </div>
        </div>

        {/* Dynamic Labels */}
        <span className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/60 text-white text-[10px] font-bold uppercase rounded-md tracking-wider backdrop-blur-xs select-none">
          {beforeLabel}
        </span>
        <span className="absolute bottom-4 right-4 px-3 py-1.5 bg-[#FF6321] text-white text-[10px] font-bold uppercase rounded-md tracking-wider shadow-lg select-none">
          {afterLabel}
        </span>
      </div>
    </div>
  );
};

export default VisualSlider;
