import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer({ isDark }) {
  return (
    <footer className="py-6 border-t border-black/5 dark:border-white/5 bg-background">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-4 text-center">
        <div className="text-gray-600 text-sm font-medium">
          © {new Date().getFullYear()} Ajay Lakhara. All rights reserved.
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/Ajaylakhara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ajay-lakhara-9159b0190/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:ajaylakhara748@gmail.com"
            className="text-gray-600 hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
