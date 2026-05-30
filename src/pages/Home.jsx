import React, { Suspense } from "react";
import Hero from "../components/Hero";

// Lazy load below-the-fold components
const FeaturedCaseStudy = React.lazy(() => import("../components/FeaturedCaseStudy"));
const Projects = React.lazy(() => import("../components/Projects"));
const Experience = React.lazy(() => import("../components/Experience"));
const WorkProcess = React.lazy(() => import("../components/WorkProcess"));
const About = React.lazy(() => import("../components/About"));
const Contact = React.lazy(() => import("../components/Contact"));

// Height-Matched Skeletal Placeholders
const ProjectsSkeleton = () => (
  <div className="min-h-[550px] md:min-h-[850px] w-full flex flex-col items-center justify-center bg-[#F8F9FA] border-b border-gray-200/30 animate-pulse py-20 px-6 relative overflow-hidden">
    <div className="h-10 w-64 bg-gray-200/80 rounded-full mb-6" />
    <div className="h-4 w-96 bg-gray-200/80 rounded-full mb-16" />
    <div className="flex gap-6 w-full max-w-6xl overflow-hidden px-4">
      {[1, 2, 3].map(i => (
        <div key={i} className="w-[300px] md:w-[450px] h-[220px] md:h-[320px] bg-white rounded-[24px] flex-shrink-0 border border-gray-150 p-2 shadow-sm">
          <div className="w-full h-full bg-gray-100/70 rounded-[16px]" />
        </div>
      ))}
    </div>
  </div>
);

const AboutSkeleton = () => (
  <div className="min-h-[1400px] md:min-h-[750px] w-full flex flex-col items-center justify-center bg-[#F5F4F3] border-b border-gray-200/30 animate-pulse py-20 px-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full max-w-6xl">
      <div className="lg:col-span-5 h-[320px] bg-white rounded-[32px] border border-gray-150 shadow-sm" />
      <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
        <div className="h-6 w-48 bg-gray-200/80 rounded-full" />
        <div className="h-12 w-full bg-gray-200/80 rounded-2xl" />
        <div className="h-20 w-full bg-gray-200/80 rounded-2xl" />
        <div className="h-14 w-full bg-gray-200/80 rounded-2xl" />
      </div>
    </div>
  </div>
);

const ExperienceSkeleton = () => (
  <div className="min-h-[1500px] md:min-h-[900px] w-full flex flex-col items-center justify-center bg-[#F5F4F3] border-b border-gray-200/30 animate-pulse py-20 px-6">
    <div className="h-6 w-48 bg-gray-200/80 rounded-full mb-6" />
    <div className="h-10 w-64 bg-gray-200/80 rounded-full mb-16" />
    <div className="w-full max-w-4xl space-y-12">
      {[1, 2].map(i => (
        <div key={i} className={`flex w-full ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
          <div className="w-full max-w-[480px] h-[280px] bg-white rounded-[24px] border border-gray-150 shadow-sm" />
        </div>
      ))}
    </div>
  </div>
);

const WorkProcessSkeleton = () => (
  <div className="min-h-[1100px] md:min-h-[650px] w-full flex flex-col items-center justify-center bg-[#f9f9f9] border-b border-gray-200/30 animate-pulse py-20 px-6">
    <div className="h-6 w-32 bg-gray-200/80 rounded-full mb-4" />
    <div className="h-10 w-96 bg-gray-200/80 rounded-full mb-16" />
    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white bg-white shadow-sm flex items-center justify-center">
      <div className="w-48 h-48 rounded-full bg-gray-100/50" />
    </div>
  </div>
);

const FeaturedCaseStudySkeleton = () => (
  <div className="min-h-[1100px] md:min-h-[650px] w-full flex flex-col items-center justify-center bg-white border-b border-gray-200/30 animate-pulse py-20 px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full max-w-6xl">
      <div className="h-[340px] md:h-[400px] bg-gray-100/60 rounded-[24px] shadow-sm border border-gray-150 p-2">
        <div className="w-full h-full bg-gray-200/50 rounded-[16px]" />
      </div>
      <div className="flex flex-col gap-6 justify-center">
        <div className="h-6 w-40 bg-gray-200/80 rounded-full" />
        <div className="h-10 w-full bg-gray-200/80 rounded-2xl" />
        <div className="h-24 w-full bg-gray-200/80 rounded-2xl" />
      </div>
    </div>
  </div>
);

const ContactSkeleton = () => (
  <div className="min-h-[750px] md:min-h-[700px] w-full flex flex-col items-center justify-center bg-white animate-pulse py-20 px-6">
    <div className="h-6 w-32 bg-gray-200/80 rounded-full mb-4" />
    <div className="h-10 w-[420px] bg-gray-200/80 rounded-full mb-16" />
    <div className="w-full max-w-xl h-[340px] bg-white rounded-[24px] border border-gray-150 shadow-sm" />
  </div>
);

const Home = ({ isDark }) => {
  return (
    <div className={`bg-background ${isDark ? 'dark' : ''}`}>
      <Hero />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<AboutSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<ExperienceSkeleton />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<WorkProcessSkeleton />}>
        <WorkProcess />
      </Suspense>
      <Suspense fallback={<FeaturedCaseStudySkeleton />}>
        <FeaturedCaseStudy />
      </Suspense>
      <Suspense fallback={<ContactSkeleton />}>
        <Contact isDark={isDark} />
      </Suspense>
    </div>
  );
};

export default Home;
