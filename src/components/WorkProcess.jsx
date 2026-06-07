import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform, useMotionValue, animate } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: 'Research',
    subLabel: 'DISCOVERY • ANALYSIS',
    description: 'We dive deep into your brand, target audience, and market landscape to build a solid foundation.'
  },
  {
    id: 2,
    title: 'Define',
    subLabel: 'STRATEGY • PLANNING',
    description: 'Synthesizing insights to create a clear roadmap, defining project goals, and establishing core requirements.'
  },
  {
    id: 3,
    title: 'Design',
    subLabel: 'UI/UX • PROTOTYPING',
    description: 'Crafting intuitive user experiences and premium visual interfaces that resonate with your users.'
  },
  {
    id: 4,
    title: 'Test',
    subLabel: 'VALIDATION • ITERATION',
    description: 'Rigorous usability testing and refinement to ensure the product meets the highest standards.'
  },
  {
    id: 5,
    title: 'Optimization',
    subLabel: 'TESTING • CONTINUOUS IMPROVEMENT',
    description: 'We refine, test, and enhance your product to drive ongoing growth and impact.'
  }
];

const StepNode = ({ step, isActive, ringRadius, wheelRotation }) => {
  const stepSpacing = 35; // degrees between steps
  const angle = (step.id - 3) * stepSpacing;
  const angleRad = (angle * Math.PI) / 180;

  const trackRadius = ringRadius * 1.05;
  const nodeRadius = trackRadius - 5;

  // Calculate relative X and Y positions inside the wheel container
  const xOff = nodeRadius * Math.sin(angleRad);
  const yOff = -nodeRadius * Math.cos(angleRad);

  // Compute the exact counter-rotation so active step content stays upright (0° tilt in viewport)
  const nodeViewportRotation = useTransform(wheelRotation, (val) => val + angle);
  const counterRotation = useTransform(nodeViewportRotation, (val) => -val);

  return (
    <div
      className="absolute z-30 pointer-events-none"
      style={{
        left: `calc(50% + ${xOff}px)`,
        top: `calc(50% + ${yOff}px)`,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
      }}
    >
      <motion.div
        animate={{
          scale: isActive ? 1.08 : 0.9,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        style={{
          rotate: isActive ? counterRotation : 0,
        }}
        className="pointer-events-auto"
      >
        {isActive ? (
          <div className="relative flex flex-col items-center justify-center -mt-8">
            <span className="absolute bottom-[115%] text-[10px] font-bold text-[#69686e] tracking-wider uppercase whitespace-nowrap">
              Step
            </span>
            <div
              className="w-12 h-12 md:w-14 md:h-14 bg-[#ff6321] rounded-[8px] flex items-center justify-center text-white font-bold text-lg md:text-xl border border-[#cf4e17]"
              style={{
                boxShadow: "0px 4px 10px rgba(255, 99, 33, 0.25), inset 0px 1px 1px rgba(255,255,255,0.15)"
              }}
            >
              0{step.id}
            </div>
          </div>
        ) : (
          <div
            className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-[8px] flex items-center justify-center text-[#69686e] font-bold text-sm md:text-base border border-[#e7e2dd] transition-shadow duration-300 hover:shadow-md"
            style={{ boxShadow: "0px 2.5px 6px 0px rgba(6, 6, 18, 0.06)" }}
          >
            0{step.id}
          </div>
        )}
      </motion.div>
    </div>
  );
};

// ── DESKTOP STEPPER COMPONENT ──
const DesktopWorkProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [ringRadius, setRingRadius] = useState(380);
  const containerRef = useRef(null);

  // Monitor screen resizing for layout optimization
  useEffect(() => {
    const handleResize = () => {
      setRingRadius(window.innerWidth < 768 ? 250 : 380);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll progress through the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate closest active step dynamically based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let step = 1;
    if (latest < 0.125) step = 1;
    else if (latest < 0.375) step = 2;
    else if (latest < 0.625) step = 3;
    else if (latest < 0.875) step = 4;
    else step = 5;

    if (step !== activeStep) {
      setActiveStep(step);
    }
  });

  const currentStepData = steps.find(s => s.id === activeStep);
  const stepSpacing = 35; // degrees between steps

  // Motion value for snapping wheel rotation
  const wheelRotation = useMotionValue((3 - activeStep) * 35);

  // Animate the wheel rotation smoothly when activeStep changes
  useEffect(() => {
    const targetRotation = (3 - activeStep) * 35;
    const controls = animate(wheelRotation, targetRotation, {
      type: "spring",
      stiffness: 85,
      damping: 18,
      mass: 0.8
    });
    return () => controls.stop();
  }, [activeStep, wheelRotation]);

  // Smooth scroll snapping listener to snap to steps on user scroll
  useEffect(() => {
    let scrollTimeout = null;
    let isSnapping = false;
    let isUserScrolling = false;

    const setUserScrolling = () => {
      isUserScrolling = true;
    };

    const handleScroll = () => {
      if (!containerRef.current || isSnapping) return;
      if (!isUserScrolling) return; // Only snap if scroll was user-initiated

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = window.scrollY + rect.top;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      const totalScrollable = containerHeight - viewportHeight;

      const currentScrollY = window.scrollY;
      const relativeScroll = currentScrollY - containerTop;

      // Only snap if we are within the scrolling zone (with safety margins)
      const safetyMargin = 50; // pixels
      if (relativeScroll < -safetyMargin || relativeScroll > totalScrollable + safetyMargin) {
        isUserScrolling = false;
        return;
      }

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        const stepHeight = 0.5 * viewportHeight;
        const rawStep = relativeScroll / stepHeight;
        const roundedStep = Math.round(rawStep);

        const targetStepIndex = Math.max(0, Math.min(4, roundedStep));
        const targetScrollY = containerTop + targetStepIndex * stepHeight;

        if (Math.abs(currentScrollY - targetScrollY) > 5) {
          isSnapping = true;
          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth"
          });

          setTimeout(() => {
            isSnapping = false;
            isUserScrolling = false;
          }, 600);
        } else {
          isUserScrolling = false;
        }
      }, 150);
    };

    window.addEventListener("wheel", setUserScrolling, { passive: true });
    window.addEventListener("touchmove", setUserScrolling, { passive: true });
    window.addEventListener("keydown", setUserScrolling, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", setUserScrolling);
      window.removeEventListener("touchmove", setUserScrolling);
      window.removeEventListener("keydown", setUserScrolling);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <section id="process" ref={containerRef} className="relative h-[300vh] bg-[#f9f9f9] text-gray-900 font-sans">
      {/* Sticky container stays in viewport as user scrolls */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

        <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 text-center relative z-10 pt-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center justify-center gap-2 mb-4 text-[#69686e] text-xs font-bold tracking-[0.2em] uppercase">
              <span>&gt;</span>
              <span>Process</span>
              <span>&lt;</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827]">
              A collaborative approach
            </h2>
          </motion.div>

          {/* Ring Dial Container */}
          <div className="relative w-full h-[500px] mx-auto overflow-hidden flex justify-center">

            {/* The Track (Circular border line) */}
            <div
              className="absolute pointer-events-none rounded-full"
              style={{
                width: ringRadius * 2.1,
                height: ringRadius * 2.1,
                bottom: -ringRadius, // shifted up
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#eeecea",
                border: "10px solid #ffffff",
                boxShadow: "inset 0px 0px 6px 0px rgba(6, 6, 18, 0.12)"
              }}
            />

            {/* Blurred Overlay at bottom to smoothly fade the arc into the background */}
            <div
              className="absolute bottom-0 left-0 w-full h-[150px] pointer-events-none z-10"
              style={{
                backgroundColor: "#f9f9f9",
                filter: "blur(35px)",
                transform: "translateY(20%)"
              }}
            />

            {/* Continuous Rotating Wheel Container */}
            <motion.div
              style={{
                position: "absolute",
                width: ringRadius * 2.1,
                height: ringRadius * 2.1,
                bottom: -ringRadius,
                left: "50%",
                x: "-50%",
                rotate: wheelRotation,
                transformOrigin: "center center",
              }}
              className="pointer-events-none"
            >
              {steps.map((step) => (
                <StepNode
                  key={step.id}
                  step={step}
                  isActive={activeStep === step.id}
                  ringRadius={ringRadius}
                  wheelRotation={wheelRotation}
                />
              ))}
            </motion.div>

            {/* Center Content (Inside the ring) */}
            <div className="absolute top-[160px] left-1/2 -translate-x-1/2 w-full max-w-[450px] flex flex-col items-center text-center z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStepData.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center px-4"
                >
                  <h3 className="text-[32px] font-bold text-[#111827] mb-3">
                    {currentStepData.title}
                  </h3>
                  <p className="text-[#69686e] text-base leading-relaxed mb-6 max-w-[340px]">
                    {currentStepData.description}
                  </p>

                  <div className="text-[11px] font-bold tracking-[0.15em] text-[#69686e] uppercase mb-8 border-b border-dashed border-[rgba(6,6,18,0.1)] pb-4 px-4 w-full flex items-center justify-center gap-2">
                    <span>{currentStepData.subLabel.split(' • ')[0]}</span>
                    <div className="w-[4px] h-[4px] rounded-full bg-[#69686e]"></div>
                    <span>{currentStepData.subLabel.split(' • ')[1]}</span>
                  </div>

                  <a href="#contact" className="inline-block px-8 py-3.5 bg-[#ff6321] text-white font-medium rounded-[8px] transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
                    style={{
                      boxShadow: "0px 0px 0px 1px #cf4e17, inset 0px 1.4px 1px 0px rgba(255, 255, 255, 0.08), 0px 1.4px 4px 0px rgba(6, 6, 18, 0.3)"
                    }}>
                    Start your project
                  </a>
                </motion.div>
              </AnimatePresence>

              {/* Pagination */}
              <div className="mt-8 flex flex-col items-center">
                <div className="flex gap-1.5 items-center justify-center">
                  <span className="text-xs font-bold text-[#69686e]">0{activeStep}</span>
                  <span className="text-xs font-bold text-[#69686e]">/ 0{steps.length}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-3">
                  {steps.map(step => (
                    <div
                      key={step.id}
                      className={`transition-all duration-300 rounded-full ${activeStep === step.id
                          ? 'w-1.5 h-1.5 bg-[#ff6321]'
                          : 'w-1.5 h-1.5 bg-[rgb(238,236,234)] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)]'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// ── MOBILE STEPPER COMPONENT (Zero framer-motion scroll hooks) ──
const MobileWorkProcess = () => {
  return (
    <section className="bg-[#f9f9f9] text-gray-900 py-20 px-6">
      <div className="max-w-md mx-auto space-y-12">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3 text-[#69686e] text-[10px] font-bold tracking-[0.2em] uppercase">
            <span>&gt;</span>
            <span>Process</span>
            <span>&lt;</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#111827]">
            A collaborative approach
          </h2>
        </div>

        {/* Steps List */}
        <div className="space-y-6">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#ff6321] text-white flex items-center justify-center font-bold text-sm shadow-md shadow-[#ff6321]/20">
                  0{step.id}
                </span>
                <div>
                  <h3 className="font-bold text-[#111827] text-lg leading-tight">{step.title}</h3>
                  <p className="text-[9px] font-bold text-[#69686e] tracking-wider uppercase mt-0.5">{step.subLabel}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4 text-center">
          <a
            href="#contact"
            className="inline-block w-full py-4 bg-[#ff6321] text-white font-bold rounded-xl text-center shadow-lg shadow-[#ff6321]/20 hover:bg-[#e05d00] transition-all duration-300 hover-glow-orange"
            style={{
              boxShadow: "0px 0px 0px 1px #cf4e17, inset 0px 1.4px 1px 0px rgba(255, 255, 255, 0.08)"
            }}
          >
            Start your project
          </a>
        </div>

      </div>
    </section>
  );
};

// ── MAIN WORKPROCESS (CSS-based responsive facade, no JS detection = no CLS) ──
const WorkProcess = () => {
  return (
    <>
      {/* Mobile: shown below md breakpoint */}
      <div className="block md:hidden">
        <MobileWorkProcess />
      </div>
      {/* Desktop: shown at md+ breakpoint */}
      <div className="hidden md:block">
        <DesktopWorkProcess />
      </div>
    </>
  );
};

export default WorkProcess;
