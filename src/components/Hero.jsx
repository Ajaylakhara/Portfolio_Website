import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiFigma, FiLayout, FiPenTool, FiSliders, FiEye, FiMonitor,
  FiCode, FiTerminal, FiGitBranch, FiZap, FiDatabase, FiPackage,
} from "react-icons/fi";

import HtmlLogo from "../assets/Images/html-5.png";
import CssLogo from "../assets/Images/css-3.png";
import JsLogo from "../assets/Images/js.png";
import ReactLogo from "../assets/Images/physics.png";
import NodeLogo from "../assets/Images/nodejs.png";
import TailwindLogo from "../assets/Images/Tailwind CSS.png";
import python from "../assets/Images/icons8-python-144.png";
import CSharp from "../assets/Images/icons8-c-sharp-logo-64.png";
import bootstrap from "../assets/Images/bootstrap_5968672.png";
import Express from "../assets/Images/icons8-express-js-64.png";
import MongoDB from "../assets/Images/MongoDB.png";
import Git from "../assets/Images/icons8-git-96.png";
import Figma from "../assets/Images/figma_5968705.png";
import VsCode from "../assets/Images/icons8-vs-code-96.png";
import sqlserver from "../assets/Images/database_4248443.png";

const baseUrl = import.meta.env.BASE_URL || "/";

/* ─── Category background design tokens ─── */
const CATEGORY_BG = {
  design:      "#FFF1EE",  // warm peach
  development: "#EEF4FF",  // cool blue
  tools:       "#F0FFF4",  // mint green
  logic:       "#FFFBE6",  // soft yellow
};

const Typewriter = ({ words }) => {
  const [text, setText] = useState(words[0] || "");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 120;

    if (!isDeleting && text === currentWord) {
      typingSpeed = 2000; // Pause at end of word
      const timer = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timer);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <>
      {text}
      <span className="inline-block w-[3px] h-[0.95em] align-middle ml-1 bg-[#FF6321] animate-pulse" />
    </>
  );
};

/* ─── UI/UX Developer Skill Icons (Simple Icons CDN with brand colors) ─── */
const LEFT_ICONS = [
  { src: HtmlLogo, label: "HTML5", bg: "#FFF1EE" },
  { src: CssLogo, label: "CSS3", bg: "#EEF4FF" },
  { src: JsLogo, label: "JavaScript", bg: "#FFFBE6" },
  { src: ReactLogo, label: "React", bg: "#EEFCFF" },
  { src: NodeLogo, label: "Node.js", bg: "#EEFFEF" },
  { src: TailwindLogo, label: "Tailwind", bg: "#EEFAFF" },
  { src: python, label: "Python", bg: "#FFF9EE" },
  { src: CSharp, label: "C#", bg: "#F4EEFF" },
];
const RIGHT_ICONS = [
  { src: bootstrap, label: "Bootstrap", bg: "#F5EEFF" },
  { src: Express, label: "Express", bg: "#F0F0F0" },
  { src: MongoDB, label: "MongoDB", bg: "#F0FFF4" },
  { src: Git, fill: "#fe6321", label: "Git", bg: "#FFF0F0" },
  { src: Figma, label: "Figma", bg: "#FFF1EE" },
  { src: VsCode, label: "VS Code", bg: "#EEF8FF" },
  { src: sqlserver, label: "SQL Server", bg: "#FFF3EE" },
];

/* ─── Left ring: Design-focused (6 unique icons) ─── */
const RING_LEFT_ICONS = [
  { icon: FiFigma,   label: "UI/UX Design",     category: "design",      bg: CATEGORY_BG.design },
  { icon: FiLayout,  label: "Responsive Layout", category: "design",      bg: CATEGORY_BG.design },
  { icon: FiPenTool, label: "Visual Design",     category: "design",      bg: CATEGORY_BG.design },
  { icon: FiSliders, label: "Design Systems",    category: "design",      bg: CATEGORY_BG.design },
  { icon: FiEye,     label: "Accessibility",     category: "development", bg: CATEGORY_BG.development },
  { icon: FiMonitor, label: "Cross-platform UI", category: "development", bg: CATEGORY_BG.development },
];

/* ─── Right ring: Development & Tools (6 unique icons) ─── */
const RING_RIGHT_ICONS = [
  { icon: FiCode,      label: "Frontend Dev",    category: "development", bg: CATEGORY_BG.development },
  { icon: FiTerminal,  label: "CLI & DevOps",    category: "tools",       bg: CATEGORY_BG.tools },
  { icon: FiGitBranch, label: "Version Control", category: "tools",       bg: CATEGORY_BG.tools },
  { icon: FiZap,       label: "Performance",     category: "logic",       bg: CATEGORY_BG.logic },
  { icon: FiDatabase,  label: "Backend & DB",    category: "development", bg: CATEGORY_BG.development },
  { icon: FiPackage,   label: "Build Workflow",  category: "tools",       bg: CATEGORY_BG.tools },
];

const IconCard = ({ src, bg = "#fff", style = {}, isWhiteIcon = false }) => {
  const cardBg = isWhiteIcon ? "#fe6321" : bg;
  return (
    <div
      style={{
        width: 54,
        height: 54,
        background: cardBg,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.3), 0px 0px 0px 1px rgba(255,255,255,0.08)",
        flexShrink: 0,
        ...style,
      }}
    >
      <img src={src} alt="Icon" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
    </div>
  );
};

/* ─── Ring Icon Card: SVG-based, hover scale + glow, no rotation conflict ─── */
const RingIconCard = ({ icon: Icon, label, bg = "#FFF1EE", style = {} }) => (
  <div
    title={label}
    style={{
      width: 54,
      height: 54,
      background: bg,
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.1)",
      flexShrink: 0,
      cursor: "pointer",
      transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s ease",
      ...style,
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "scale(1.18)";
      e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,99,33,0.35), 0 0 0 1.5px rgba(255,99,33,0.2)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.1)";
    }}
  >
    <Icon size={28} color="#FF6321" />
  </div>
);

/* ─── Circle Arm Group ─── */
// The Framer structure: a large circle (border only) centered off-screen,
// with 6 arms at 0°/30°/60°/90°/120°/150°. Each arm has 2 icon cards.
// The whole group is rotated ±354.71° ≈ ∓5.29°.
// We render only the VISIBLE icons (those whose x > 0 for left circle).
const CircleArms = React.memo(({ side }) => {
  const isLeft = side === "left";
  const R = 700; // circle radius in px
  const OFFSET = 180; // how far center is pushed off-screen
  const globalRot = isLeft ? -5.29 : 5.29; // degrees, from Framer HTML

  const baseAngles = [0, 30, 60, 90, 120, 150];
  const icons = isLeft ? LEFT_ICONS : RIGHT_ICONS;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: "50%",
        // Center offset: push LEFT circle 180px past the left edge
        //               push RIGHT circle 180px past the right edge
        [isLeft ? "left" : "right"]: -OFFSET,
        transform: "translateY(-50%)",
        width: 0,
        height: 0,
        zIndex: 1,
      }}
    >
      {/* 3 Concentric Circles: 1000px / 1400px / 1800px diameter, 10px border each */}
      {[500, 1000, 1500].map((r, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width:  r * 2,
            height: r * 2,
            top:  -r,
            left: -r,
            border: `10px solid rgba(0,0,0,${0.09 - i * 0.02})`,
            background: "transparent",
          }}
        />
      ))}

      {/* Icon cards at each arm endpoint */}
      {baseAngles.map((base, i) => {
        const totalAngle = ((base + globalRot) * Math.PI) / 180;

        // For LEFT circle: icons on the RIGHT side of the circle (positive x)
        // For RIGHT circle: icons on the LEFT side (negative x, mirrored)
        const ix = isLeft
          ? R * Math.sin(totalAngle)       // x relative to center (positive = visible)
          : -R * Math.sin(totalAngle);     // mirrored for right side
        const iy = -R * Math.cos(totalAngle); // y relative to center

        // Only show icons that land on the INWARD-facing visible arc
        const inward = isLeft ? ix > 80 : ix < -80;
        if (!inward) return null;
        if (Math.abs(iy) > 550) return null; // too far off-screen vertically

        const iconData = icons[i % icons.length];
        return (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            style={{
              position: "absolute",
              left: ix - 26,
              top: iy - 26,
              pointerEvents: "auto",
            }}
          >
            <IconCard 
              src={iconData.src} 
              bg={iconData.bg} 
              isWhiteIcon={iconData.isWhiteIcon} 
            />
          </motion.div>
        );
      })}
    </div>
  );
});


/* ═══════════════════════════════════════════════ */
const Hero = () => {
  const [isLg, setIsLg] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  // Lazy-import motion values only on desktop to avoid mobile bundle overhead
  const mouseXRef = useRef(null);
  const mouseYRef = useRef(null);
  const bgStyleRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const lg = window.innerWidth >= 1024;
    setIsLg(lg);
    setIsMounted(true);
  }, []);

  const handleMouseMove = isLg ? (e) => {
    if (!mouseXRef.current) return;
    const x = (e.clientX - window.innerWidth / 2) * 0.03;
    const y = (e.clientY - window.innerHeight / 2) * 0.03;
    if (mouseXRef.current) {
      mouseXRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  } : undefined;

  const isMobileInit = typeof window !== 'undefined' && window.innerWidth < 768;

  const container = {
    hidden: { opacity: 0 },
    // Removed delayChildren and reduced stagger to minimize LCP delay
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  // On mobile: skip entry animation to allow immediate LCP paint
  const motionInitial = isMobileInit ? false : "hidden";
  const motionAnimate = "show";

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-white"
      style={{ minHeight: "100vh", padding: "180px 0 120px" }}
    >
      {/* BACKGROUND RINGS — desktop only, deferred until after hydration */}
      {isLg && isMounted && (
        <div ref={mouseXRef} className="absolute inset-0 pointer-events-none hidden lg:block" style={{ zIndex: 0, willChange: "transform", transition: "transform 0.1s linear" }}>

          {/* ── LEFT rings: center anchored at LEFT edge (x=0, y=50%) ── */}
          {[220, 320, 420].map((r, i) => (
            <div
              key={`L${i}`}
              className="absolute rounded-full"
              style={{
                width: r * 2, height: r * 2,
                top: "50%", right: -r + i * 20,
                transform: "translateY(-50%)",
                border: `10px solid rgba(0,0,0,${0.06 - i * 0.015})`,
              }}
            />
          ))}

          {/* LEFT orbiting icons — orbits middle ring (r=320), center at (0, 50%) */}
          <div
            style={{ position: "absolute", left: 0, top: "50%", width: 0, height: 0, zIndex: 5, willChange: "transform" }}
            className="animate-spin-clockwise"
          >
            {RING_LEFT_ICONS.map((icon, i) => {
              const angle = (360 / RING_LEFT_ICONS.length) * i;
              const r = 320;
              const rad = (angle * Math.PI) / 180;
              const x = r * Math.cos(rad);
              const y = r * Math.sin(rad);

              return (
                <div key={`L-icon-${i}`} style={{ position: "absolute", left: x - 26, top: y - 26 }}>
                  <div className="animate-spin-counter-clockwise">
                    <RingIconCard icon={icon.icon} label={icon.label} bg={icon.bg} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── RIGHT rings: center anchored at RIGHT edge (x=100%, y=50%) ── */}
          {[220, 320, 420].map((r, i) => (
            <div
              key={`R${i}`}
              className="absolute rounded-full"
              style={{
                width: r * 2, height: r * 2,
                top: "50%", left: -r,
                transform: "translateY(-50%)",
                border: `10px solid rgba(0,0,0,${0.06 - i * 0.015})`,
              }}
            />
          ))}

          {/* RIGHT orbiting icons — orbits middle ring (r=320), center at (100%, 50%) */}
          <div
            style={{ position: "absolute", right: 0, top: "50%", width: 0, height: 0, zIndex: 5, willChange: "transform" }}
            className="animate-spin-counter-clockwise-slow"
          >
            {RING_RIGHT_ICONS.map((icon, i) => {
              const angle = (360 / RING_RIGHT_ICONS.length) * i;
              const r = 320;
              const rad = (angle * Math.PI) / 180;
              const x = r * Math.cos(rad);
              const y = r * Math.sin(rad);

              return (
                <div key={`R-icon-${i}`} style={{ position: "absolute", left: x - 26, top: y - 26 }}>
                  <div className="animate-spin-clockwise-slow">
                    <RingIconCard icon={icon.icon} label={icon.label} bg={icon.bg} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* Main Content */}
      <motion.div
        variants={container}
        initial={motionInitial}
        animate={motionAnimate}
        className="relative flex flex-col items-center w-full px-4"
        style={{ zIndex: 10 }}
      >
        {/* Text & Actions Wrapper */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          gap: "24px", 
          maxWidth: "700px", 
          margin: "0 auto" 
        }}>
          
          {/* Badge */}
          <motion.div variants={item}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 100,
              background: "#FFFFFF", border: "1px solid #E5E7EB",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6321" }}></span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#4B5563", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                UI/UX Designer
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={item} style={{
            fontSize: "clamp(42px, 6vw, 64px)", fontWeight: 700,
            lineHeight: 1.15, color: "#111827", letterSpacing: "-0.02em",
            margin: 0
          }}>
            Designing Interfaces That People Love to <span style={{ color: "#FF6321" }}><Typewriter words={["Experience", "Explore", "Interact With", "Navigate"]} /></span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-gray-600 dark:text-gray-400 font-medium text-center max-w-2xl leading-relaxed text-lg md:text-xl"
          >
            I build scalable web applications with clean UI and real-world impact.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} style={{ 
            display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginTop: "8px" 
          }}>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(255, 99, 33, 0.25)" }} 
              whileTap={{ scale: 0.97 }}
              style={{
                background: "#FF6321", color: "#ffffff", padding: "0 32px",
                borderRadius: "12px", fontWeight: 600, fontSize: "16px", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", height: "52px"
              }}
            >
              See Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)" }} 
              whileTap={{ scale: 0.97 }}
              style={{
                background: "#ffffff", color: "#111827", padding: "0 32px",
                borderRadius: "12px", fontWeight: 600, fontSize: "16px", 
                border: "1px solid #E5E7EB", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", height: "52px"
              }}
            >
              Let’s Collaborate
            </motion.button>
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <motion.div variants={item} style={{ width: "100%", maxWidth: "1000px", marginTop: "100px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "center", marginBottom: 36 }}>
            <div style={{ flex: 1, maxWidth: 90, borderTop: "1px dashed rgba(160,153,146,0.3)" }} />
            <p style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "#9CA3AF", whiteSpace: "nowrap" }}>
              Core <strong style={{ color: "#111827" }}>Skills</strong> & Tools
            </p>
            <div style={{ flex: 1, maxWidth: 90, borderTop: "1px dashed rgba(160,153,146,0.3)" }} />
          </div>
          <div style={{ position: "relative", overflow: "hidden", width: "100%", padding: "10px 0" }}>
            <div
              style={{ display: "flex", gap: 60, whiteSpace: "nowrap", width: "max-content", paddingRight: 60 }}
              className="animate-flow"
            >
              {/* Mobile: 1x to minimize DOM, Desktop: 4x for seamless loop */}
              {(isMobileInit
                ? [...LEFT_ICONS, ...RIGHT_ICONS]
                : [...LEFT_ICONS, ...RIGHT_ICONS, ...LEFT_ICONS, ...RIGHT_ICONS]
              ).map((icon, i) => (
                <div 
                  key={i} 
                  style={{ display: "flex", alignItems: "center", gap: 12, opacity: 0.6, cursor: "pointer", transition: "all 0.3s ease" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.opacity = 1;
                    e.currentTarget.querySelector('img').style.filter = "grayscale(0%)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.opacity = 0.6;
                    e.currentTarget.querySelector('img').style.filter = "grayscale(100%)";
                  }}
                >
                  <img 
                    src={icon.src} 
                    alt={icon.label} 
                    loading="lazy"
                    style={{ width: 34, height: 34, objectFit: "contain", filter: "grayscale(100%)", transition: "all 0.3s ease" }} 
                  />
                  <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em", color: "#111827" }}>
                    {icon.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
