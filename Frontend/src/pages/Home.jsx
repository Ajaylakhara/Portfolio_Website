// import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/skills";
import Projects from "../components/Projects";
// import Blog from "../components/Blog";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
// import AIChatbot from "../AI/AIChatbot";


export default function Home({isDark = (false)}) {
  return (
    <div>
      <div className="space-y-20">
        {" "}
        {/* Added spacing between sections */}
        <section id="hero" className="min-h-screen">
          <Hero isDark={isDark} />
        </section>
        <section id="about" className="py-20">
          <About isDark={isDark} />
        </section>
        <section id="skills" className="py-20">
          <Skills isDark={isDark} />
        </section>
        <section id="projects" className="py-20">
          <Projects isDark={isDark} />
        </section>
        {/* <section id="blog" className="py-20">
          <Blog isDark={isDark} />
        </section> */}
        <section id="testimonials" className="py-20">
          <Testimonials isDark={isDark} />
        </section>
        <section id="contact" className="py-20">
          <Contact isDark={isDark} />
        </section>
        {/* <section>
        <AIChatbot isDark={isDark} />
        </section> */}
      </div>
    </div>
  );
}
