import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle, Users, Target, Lightbulb, TrendingUp, Sparkles, MessageSquare } from 'lucide-react';
import { projects } from '../data/projects';
import { MetricsGrid } from '../components/MetricsGrid';
import { InfoSidebar } from '../components/InfoSidebar';
import { VisualTabs } from '../components/VisualTabs';
import { VisualSlider } from '../components/VisualSlider';

const CaseStudy = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // Scroll to top on route change to maintain clean UX
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/404" />;
  }

  // Fallback parameter mappings if the current project is a legacy entry
  const displayTitle = project.outcomeTitle || `${project.title}: Optimizing Digital Capabilities`;
  const displayProblem = project.detailedProblem || project.problem;
  const displayGoal = project.detailedGoal || `Modernize current systems to build high-performance React applications, cutting-edge responsive layouts, and outstanding SEO rankings.`;
  const displayPersona = project.userPersona || `Digital curators, recruiters, and sector managers looking for high-fidelity interactive user experiences.`;

  return (
    <div className="pt-32 pb-24 bg-[#F5F4F3] min-h-screen text-[#060612] selection:bg-[#FF6321]/30 selection:text-[#FF6321]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Back Link Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-[#FF6321] transition-colors duration-300"
          >
            <ArrowLeft size={14} strokeWidth={2.5} />
            Back to Showcase
          </Link>
        </motion.div>

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-left"
          >
            {/* Category tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6321]/10 border border-[#FF6321]/15">
              <Sparkles size={12} className="text-[#FF6321]" />
              <span className="text-[10px] font-black text-[#FF6321] uppercase tracking-widest">
                {project.category} Case Study
              </span>
            </div>

            {/* Outcome Title */}
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-4xl text-[#060612]">
              {displayTitle}
            </h1>

            {/* Sub-description */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              {project.description}
            </p>

            {/* Primary metrics grid */}
            <MetricsGrid metrics={project.metrics} />
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 2. DUAL COLUMN STRUCTURE (STORY vs SIDEBAR) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

          {/* LEFT: STORYTELLING BLOCKS (2/3 Col) */}
          <div className="lg:col-span-2 space-y-12 text-left">

            {/* PROBLEM block */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs relative group hover:border-[#FF6321]/10 transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={20} />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-red-600 uppercase tracking-widest block">
                    The Challenge & Friction
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-[#060612] tracking-tight">
                    Identifying the Pain Points
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {displayProblem}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* PERSONA / AUDIENCE block */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs relative group hover:border-[#FF6321]/10 transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#FF6321]/10 text-[#FF6321] flex items-center justify-center flex-shrink-0">
                  <Users size={20} />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-[#FF6321] uppercase tracking-widest block">
                    Target User Demographics
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-[#060612] tracking-tight">
                    Who We Designed For
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {displayPersona}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* GOAL block */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs relative group hover:border-[#FF6321]/10 transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#FF6321]/10 text-[#FF6321] flex items-center justify-center flex-shrink-0">
                  <Target size={20} />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-[#FF6321] uppercase tracking-widest block">
                    Success Metrics Blueprint
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-[#060612] tracking-tight">
                    Project Milestones & Goals
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {displayGoal}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* SOLUTION block */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs relative group hover:border-[#FF6321]/10 transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={20} />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block">
                    Engineering and Interface Resolution
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-[#060612] tracking-tight">
                    Designing the Solution
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {project.solution || project.ui}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* IMPACT block */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#060612] p-8 rounded-3xl text-white relative group shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6321]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex gap-4 items-start relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#FF6321]/20 text-[#FF6321] flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-[#FF6321] uppercase tracking-widest block">
                    Final Business & Product Impact
                  </span>
                  <h2 className="text-xl md:text-2xl font-black tracking-tight">
                    Measurable Outcomes
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                    {project.impact || project.result}
                  </p>
                </div>
              </div>
            </motion.section>

          </div>

          {/* RIGHT: STICKY METADATA SIDEBAR (1/3 Col) */}
          <div className="lg:col-span-1 lg:sticky lg:top-28">
            <InfoSidebar project={project} />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE VISUAL TABS (UI, FLOWS, WIREFRAMES) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <VisualTabs project={project} />
        </motion.div>

        {/* ========================================================================= */}
        {/* 4. BEFORE vs AFTER SLIDER */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <VisualSlider />
        </motion.div>

        {/* ========================================================================= */}
        {/* 5. FINAL RECRUITER CTA PANEL */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 md:p-12 bg-white rounded-3xl border border-gray-200 text-center relative overflow-hidden space-y-6"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6321] to-amber-500" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6321]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] font-black text-[#FF6321] uppercase tracking-widest">
              Recruiter Handshake
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#060612] tracking-tight">
              Looking to upgrade your engineering resources?
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              If this case study proves the level of UI/UX thinking and robust frontend code compilation you expect for your team, let's connect and review standard positions!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#060612] hover:bg-black text-white px-8 py-3.5 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              <MessageSquare size={16} />
              <span>Discuss Integration</span>
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-3.5 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              <span>Explore Other Projects</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CaseStudy;
