import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Brain, Zap } from "lucide-react";
import ProfileCard from "./ProfileCard";

const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  const numericString = value.replace(/[^0-9]/g, "");
  const numericValue = parseInt(numericString, 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const duration = 2000; // 2 seconds

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // easeOutQuad easing
        const easeProgress = progress * (2 - progress);

        setCount(Math.floor(easeProgress * numericValue));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const highlightCards = [
  {
    title: "UI/UX + Frontend Synergy",
    description: "Translating complex design systems into responsive, pixel-perfect React components with 100% design fidelity.",
    icon: Layers,
  },
  {
    title: "Design Thinking",
    description: "Applying user journey mapping, WCAG accessibility, and interaction friction analysis to maximize conversions.",
    icon: Brain,
  },
  {
    title: "Performance Mindset",
    description: "Tuning React renders, optimizing backend API loops, and delivering blazing-fast page loads under 1.5s.",
    icon: Zap,
  },
];

const stats = [
  { value: "20+", label: "Figma Interfaces Coded" },
  { value: "35%", label: "Faster Design Handoffs" },
  { value: "45%", label: "Improved Data Latency" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#F5F4F3] text-[#060612] overflow-hidden flex flex-col items-center">
      {/* Subtle Noise overlay for premium aesthetic */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Top Row: Hero Intro + Profile Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Profile Card */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex justify-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#FF6321]/5 blur-[80px] rounded-full pointer-events-none"></div>
              <ProfileCard />
            </motion.div>

            {/* Right Column: Bio Details */}
            <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col space-y-6">
              <div className="space-y-3">
                <span className="inline-block uppercase tracking-widest text-[#FF6321] text-xs font-bold bg-[#FF6321]/10 px-3 py-1 rounded-full">
                  Senior UI/UX & Frontend Strategist
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#060612] leading-tight">
                  Bridging Figma precision with <span className="text-[#FF6321] drop-shadow-sm">performant engineering</span>
                </h2>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                I am a hybrid UI/UX Developer and Frontend Engineer dedicated to turning complex user needs into highly engaging, intuitive, and performant web products. Working at the intersection of aesthetic design systems and clean React architectures, I help businesses reduce interaction friction, accelerate page-load speeds, and build lasting digital brand value.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200/60 my-2">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-extrabold text-[#060612] tracking-tight">
                      <Counter value={stat.value} />
                    </span>
                    <span className="text-xs md:text-sm text-gray-500 font-medium leading-snug mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Three Pillar Cards */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h3 className="text-2xl font-bold text-[#060612] mb-2">Core Product Anchors</h3>
              <p className="text-sm text-gray-500">Every design decision and line of code is structured around three fundamental disciplines.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlightCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#FF6321]/30 transition-all duration-300 shadow-sm hover:shadow-xl cursor-default group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#FF6321]/10 text-[#FF6321] flex items-center justify-center mb-6 group-hover:bg-[#FF6321] group-hover:text-white transition-all duration-300">
                      <IconComponent size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-[#060612] mb-3 group-hover:text-[#FF6321] transition-colors duration-300">
                      {card.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

