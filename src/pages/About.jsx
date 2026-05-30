import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Download } from "lucide-react";

const About = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1"
          >
            <div className="bg-surface border border-white/10 rounded-3xl p-8 sticky top-32 overflow-hidden group">
              <div className="aspect-square w-full rounded-2xl bg-gray-800 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                   <p className="text-xs uppercase tracking-widest font-bold text-accent mb-1">Developer & Designer</p>
                   <p className="text-xl font-bold">Ajay Lakhara</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail size={18} />
                  <span className="text-sm">ajaylakhara748@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                   <span className="text-accent text-lg">📍</span>
                   <span className="text-sm">Ahmedabad, India</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://linkedin.com/in/ajay-lakhara-9159b0190/" target="_blank" className="p-3 bg-background border border-white/10 rounded-xl text-gray-400 hover:text-accent hover:border-accent transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/Ajaylakhara" target="_blank" className="p-3 bg-background border border-white/10 rounded-xl text-gray-400 hover:text-accent hover:border-accent transition-all">
                  <Github size={20} />
                </a>
                <a href="/Ajay_Lakhara_Resume.pdf" download className="flex-grow flex items-center justify-center gap-2 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-all">
                  <Download size={18} /> Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <div className="md:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-gray-900 leading-tight">
                Combining design thinking <br /> with <span className="text-[#FF6321]">production-grade React.</span>
              </h1>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  I am a hybrid UI/UX Developer and Frontend Engineer dedicated to turning complex user needs into highly engaging, intuitive, and performant web products. Currently, I work as a UI/UX Developer at Decent Infoways, bridging Figma design systems with responsive code to deliver unified visual architectures.
                </p>
                <p>
                  My engineering background provides a solid systems foundation, allowing me to approach frontend architectures, component structures, and state management with structural discipline. By combining standard UX design methodologies with advanced frontend optimizations, I ensure every pixel serves a purpose and every interaction feels fluid.
                </p>
                <p>
                  Whether I'm wireframing highly interactive user flows in Figma, tuning React render loops for smooth performance, or managing client API pipelines, I remain laser-focused on accessibility, search engine optimization, and pixel-perfection.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 py-8 border-t border-gray-200">
              <div>
                <h3 className="font-bold mb-4 text-[#FF6321] uppercase tracking-widest text-xs">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">B.E. in Electronics & Communication</p>
                    <p className="text-xs text-gray-500">HG Engineering College (Completed 2025)</p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">Diploma in ECE</p>
                    <p className="text-xs text-gray-500">Government Polytechnic (Completed 2021)</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-[#FF6321] uppercase tracking-widest text-xs">Experience</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">UI/UX Developer</p>
                    <p className="text-xs text-gray-500">Decent Infoways (Sep 2025 - Present)</p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">Web Developer Intern</p>
                    <p className="text-xs text-gray-500">InfoElegant Solutions (Jan 2025 - Apr 2025)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
