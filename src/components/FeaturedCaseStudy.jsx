import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowUpRight, Github, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
const baseUrl = import.meta.env.BASE_URL || "/";
const MedicareHubImg = `${baseUrl}optimized/projecting/medicare.webp`;

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setCount(value);
      return;
    }

    const target = parseInt(match[1], 10);
    let startTime;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.floor(easedProgress * target);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value, duration]);

  const match = value.match(/^(\d+)(.*)$/);
  const suffix = match ? match[2] : "";

  return (
    <span ref={ref} className="inline-flex">
      {match ? count : value}
      {suffix}
    </span>
  );
};

const FeaturedCaseStudy = () => {
  // Animation variants for container stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section
      id="case-study"
      className="py-24 relative overflow-hidden bg-white transition-colors duration-300"
    >
      {/* Background Glow Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ff6a00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* SECTION HEADER - LEFT ALIGNED */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <span className="text-sm text-[#ff6a00] uppercase tracking-widest font-semibold bg-[#ff6a00]/10 px-3 py-1.5 rounded-full inline-block">
            Featured Case Study
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-black mt-4 text-[#111827] tracking-tight leading-tight"
          >
            <span className="text-[#FF6321]">Seamless Doctor Scheduling</span> with MedicareHub Portal
          </motion.h2>
          <div className="w-16 h-[3px] bg-[#FF6321] mt-4 rounded-full" />
          <p className="text-gray-600 max-w-2xl mt-4 text-base md:text-lg leading-relaxed">
            A premium, high-performance platform engineered to streamline appointment booking, minimize patient scheduling delays, and centralize healthcare records.
          </p>
        </motion.div>

        {/* MAIN 2-COLUMN GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">

          {/* LEFT SIDE: LAYERED IMAGE MOCKUP */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative group w-full aspect-[4/3] max-w-[550px] mx-auto z-20"
          >
            {/* Backdrop Gradient Blur Blob */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#ff6a00]/15 to-amber-500/15 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Glass Card Container with Shadow Depth */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-black/5 bg-white p-2 transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-1">
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-[#fafafa] border border-gray-100">
                <img 
                  src={MedicareHubImg} 
                  alt="MedicareHub Health Portal Interface" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Soft Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

                {/* Interactive Tech Stack Overlay in Image corner */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 opacity-90">
                  <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider rounded border border-white/10">React.js</span>
                  <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider rounded border border-white/10">Node.js Backend</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: STORYTELLING CONTENT CONTAINER */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-[520px] mx-auto lg:mx-0 space-y-8 text-left"
          >

            {/* Project Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-[#111827] tracking-tight">
                Product Ecosystem & Healthcare Booking Integration
              </h3>
            </motion.div>

            {/* STORYTELLING THREE-PART FLOW */}
            <motion.div variants={itemVariants} className="space-y-4">

              {/* Problem Block */}
              <div className="flex gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10 hover:border-red-500/20 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0">
                  <AlertTriangle size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-widest block">The Problem</span>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Cluttered healthcare forms, scheduling conflicts, and slow interface load times caused frustration and patient drop-offs.
                  </p>
                </div>
              </div>

              {/* Solution Block */}
              <div className="flex gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 hover:border-emerald-500/20 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <Lightbulb size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">The Solution</span>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Engineered an intuitive, real-time booking platform featuring dynamic consultant search and rapid appointment slots.
                  </p>
                </div>
              </div>

              {/* Impact Block */}
              <div className="flex gap-4 p-4 rounded-xl bg-[#ff6a00]/5 border border-[#ff6a00]/10 hover:border-[#ff6a00]/20 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#ff6a00]/10 flex items-center justify-center text-[#ff6a00] flex-shrink-0">
                  <TrendingUp size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#ff6a00] uppercase tracking-widest block">The Impact</span>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Slashed average booking friction by 50%, guaranteed 99.9% scheduling reliability, and optimized clinic patient intake workflows.
                  </p>
                </div>
              </div>

            </motion.div>

            {/* KEY FEATURES LIST (ICON + TEXT ROW) */}
            <motion.div variants={itemVariants} className="space-y-3 pt-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
                Key Operational Features
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Real-time specialist calendars",
                  "Instant doctor filtration",
                  "Smart appointment slotting",
                  "Secure digital vitals logs"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-[#ff6a00]/10 flex items-center justify-center text-[#ff6a00] flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* TECH STACK TAGS */}
            <motion.div variants={itemVariants} className="space-y-2.5">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
                Production-Grade Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Node.js Backend", "Tailwind CSS", "Framer Motion"].map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-white text-gray-700 border border-gray-200 shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* STATS ROW (MINI CARDS) */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-2">
              {[
                { number: "99%", label: "Page Speed Index" },
                { number: "50%", label: "Faster Booking" },
                { number: "30k+", label: "Daily Vitals Logged" }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3.5 rounded-xl text-center border border-[#e7e2dd] shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-[#ff6a00]/30"
                >
                  <div className="text-xl md:text-2xl font-black text-[#ff6a00] tracking-tight">
                    <Counter value={stat.number} />
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-[#69686e] mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA BUTTONS ROW */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => window.open("https://medicarehub-health.vercel.app/", "_blank")}
                className="inline-flex items-center gap-2 bg-[#FF6321] hover:bg-[#e05d00] text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-[#FF6321]/20 hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:shadow-[#FF6321]/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={18} />
              </button>
              
              <button 
                onClick={() => window.open("https://github.com/Ajaylakhara/Medicare_health_frontend", "_blank")}
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 hover:text-[#111827] px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-pointer"
              >
                <Github size={18} />
                <span>View Code</span>
              </button>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
