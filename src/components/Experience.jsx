import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, ChevronDown, Award, AlertCircle, Settings, CheckCircle2 } from "lucide-react";

const timelineData = [
  {
    id: "decent-infoways",
    year: "Sep 2025 - Present",
    role: "UI/UX Developer",
    company: "Decent Infoways",
    icon: Briefcase,
    metricBadge: "+35% Hand-off Speed",
    impactHeadline: "Engineered responsive Figma systems and React interfaces, reducing design-to-dev cycles by 35%.",
    bullets: [
      "Architected and delivered 20+ responsive Figma design systems with micro-interactions, cohesive typography, and variables.",
      "Translated Figma components into highly reusable React.js and Tailwind CSS code, cutting stylesheet size by 50%.",
      "Optimized critical client user journeys and navigation pathways, yielding a 22% boost in customer session retention rates."
    ],
    uxStory: {
      problem: "High design-to-code regression and disjointed mobile viewports led to prolonged release schedules.",
      action: "Created a unified design language in Figma and coded matching React libraries, aligning designer wireframes with actual DOM outputs.",
      result: "Accelerated production velocity by 35% and raised mobile-responsiveness feedback scores from clients by 40%."
    }
  },
  {
    id: "infoelegant-solutions",
    year: "Jan 2025 - Apr 2025",
    role: "Web Developer Intern",
    company: "InfoElegant Solutions",
    icon: Briefcase,
    metricBadge: "45% Faster Retrieval",
    impactHeadline: "Developed full-stack React and ASP.NET/Node.js product portals, driving a 45% latency improvement.",
    bullets: [
      "Refactored relational database queries and ASP.NET/Node.js controllers, yielding a 45% retrieval performance gain.",
      "Redesigned high-density client dashboards in Figma, lowering onboarding complexity and user task friction.",
      "Built performant RESTful API modules, verified connection boundaries using Postman, and synced visual states using React Hooks."
    ],
    uxStory: {
      problem: "Complex data dashboards suffered from high database query latencies, prompting customer support tickets.",
      action: "Identified query bottlenecks, refactored data pipeline indexes, and redesigned charts to reduce interface cognitive load.",
      result: "Shaved 1.8 seconds off dashboard initial paint speeds and reduced dashboard support queries by 30%."
    }
  },
  {
    id: "hasmukh-goswami",
    year: "Completed in 2025",
    role: "Bachelor of Engineering in ECE",
    company: "Hasmukh Goswami Engineering College",
    icon: GraduationCap,
    metricBadge: "B.E. Degree",
    impactHeadline: "Acquired rigorous systems training, blending logical circuit schemas with frontend visual architectures.",
    bullets: [
      "Acquired comprehensive knowledge of digital logic design, microcontrollers, and system architecture structures.",
      "Leveraged logical circuit principles to engineer structured state systems and clean component rendering models in React."
    ],
    uxStory: null
  },
  {
    id: "govt-polytechnic",
    year: "Completed in 2021",
    role: "Diploma in ECE",
    company: "Government Polytechnic",
    icon: GraduationCap,
    metricBadge: "Diploma Degree",
    impactHeadline: "Studied electronics circuit theories and communication systems logic engineering.",
    bullets: [
      "Specialized in electronic device systems, logic gates, and transmission standards.",
      "Cultivated deep technical discipline in system workflows, signals, and structured architecture designs."
    ],
    uxStory: null
  }
];

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section 
      id="experience" 
      className="py-24 md:py-32 bg-[#F5F4F3] text-[#060612] overflow-hidden relative border-b border-gray-200/50"
    >
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block uppercase tracking-widest text-[#FF6321] text-xs font-bold bg-[#FF6321]/10 px-3 py-1 rounded-full mb-3">
            Career Timeline & Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#060612] tracking-tight mb-4">
            Product-Level Experience
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Every role is defined by design consistency, system optimization, and measurable engineering results.
          </p>
        </div>

        {/* Timeline Content */}
        <div className="relative w-full">
          
          {/* Vertical Track Line */}
          <div 
            className="absolute left-6 md:left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] bg-gray-200/80" 
            aria-hidden="true"
          />

          {/* Timeline Milestones */}
          <div className="space-y-16 md:space-y-24">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              const isExpanded = expandedCard === item.id;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={item.id} 
                  className="relative grid grid-cols-1 md:grid-cols-2 items-center w-full"
                >
                  
                  {/* Timeline Bullet Node Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-white border-2 border-gray-200 shadow-sm flex items-center justify-center text-gray-500 z-10">
                    <IconComponent size={14} />
                  </div>

                  {/* alternating cards wrapper layout */}
                  <div className={`flex w-full ${
                    isEven 
                      ? "md:justify-end justify-start pl-16 md:pl-0 md:pr-16 justify-self-end" 
                      : "md:justify-start justify-start pl-16 md:pl-16 justify-self-start md:col-start-2"
                  }`}>
                    {/* Experience Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                      className="w-full max-w-[480px] bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative group"
                    >
                      {/* Header Row: Role, Duration, Badge */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6321]">
                            {item.year}
                          </span>
                          <h3 className="text-lg md:text-xl font-extrabold text-[#060612] leading-snug">
                            {item.role}
                          </h3>
                          <span className="text-gray-500 text-sm font-semibold">
                            {item.company}
                          </span>
                        </div>

                        {/* Performance Metric Badge */}
                        <div className="self-start sm:self-center">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FF6321]/10 text-[#FF6321] text-xs font-extrabold rounded-full tracking-wider border border-[#FF6321]/20">
                            <Award size={12} />
                            {item.metricBadge}
                          </span>
                        </div>
                      </div>

                      {/* Impact Headline */}
                      <p className="text-gray-900 font-semibold text-sm mb-4 leading-relaxed">
                        {item.impactHeadline}
                      </p>

                      {/* Bullet Points */}
                      <ul className="space-y-2.5 mb-6">
                        {item.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 text-xs leading-relaxed">
                            <span className="text-[#FF6321] text-xs mt-1">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Collapsible UX Story block */}
                      {item.uxStory && (
                        <div className="border-t border-gray-100 pt-4">
                          <button
                            onClick={() => toggleExpand(item.id)}
                            className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#FF6321] uppercase tracking-wider transition-colors duration-200"
                          >
                            <span>{isExpanded ? "Hide UX Story" : "View UX Case Story"}</span>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={14} />
                            </motion.div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="p-5 rounded-2xl bg-[#F5F4F3] border border-gray-200/50 space-y-4">
                                  <div className="flex flex-col gap-4">
                                    {/* Problem */}
                                    <div className="space-y-1">
                                      <div className="flex items-center gap-1.5 text-red-600 font-extrabold text-[10px] uppercase tracking-wider">
                                        <AlertCircle size={10} />
                                        <span>The Friction</span>
                                      </div>
                                      <p className="text-gray-600 text-[11px] leading-relaxed">
                                        {item.uxStory.problem}
                                      </p>
                                    </div>

                                    {/* Action */}
                                    <div className="space-y-1">
                                      <div className="flex items-center gap-1.5 text-[#FF6321] font-extrabold text-[10px] uppercase tracking-wider">
                                        <Settings size={10} />
                                        <span>Strategic Action</span>
                                      </div>
                                      <p className="text-gray-600 text-[11px] leading-relaxed">
                                        {item.uxStory.action}
                                      </p>
                                    </div>

                                    {/* Result */}
                                    <div className="space-y-1">
                                      <div className="flex items-center gap-1.5 text-emerald-600 font-extrabold text-[10px] uppercase tracking-wider">
                                        <CheckCircle2 size={10} />
                                        <span>Product Outcome</span>
                                      </div>
                                      <p className="text-gray-600 text-[11px] leading-relaxed">
                                        {item.uxStory.result}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}

                    </motion.div>
                  </div>
                  
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;

