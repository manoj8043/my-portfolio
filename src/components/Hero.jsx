import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

const Hero = () => {
  const { theme } = useTheme();
  const [text, setText] = useState("");
  const fullText = "I build clean, fast, and scalable web apps.";
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-gradient-to-b from-sky-200 via-blue-100 to-white"
    >
      {/* Winter Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300/50 via-blue-100/80 to-white/90" />
      
      {/* Frosted Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-white/10" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-blue-600 to-sky-500 drop-shadow-lg">
            Manoj
          </span>
          .
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl font-medium text-slate-700 mb-6 h-12 flex items-center justify-center"
        >
          {text}
          <span className="animate-pulse ml-1">|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 font-medium"
        >
          Full-stack software developer skilled in React, Node.js, Python, Java, Spring Boot, SQL, AI/ML, and AWS. Building robust applications across the full stack.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="group bg-white/80 backdrop-blur-md border-2 border-blue-300/50 text-slate-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-white/90 hover:border-blue-400 transition-all duration-300 flex items-center gap-2 hover:scale-105"
          >
            View My Work
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                "/Manoj_Kumar_Chinthala_Resume_Web_DEVELOPER.pdf",
                "_blank"
              )
            }
            className="group border-2 border-slate-400/50 bg-white/40 backdrop-blur-md text-slate-700 hover:bg-white/60 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105"
          >
            View Resume
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {["React", "Java", "Python", "Spring Boot", "AWS", "SQL", "AI/ML"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/70 backdrop-blur-md border border-blue-300/50 rounded-full text-sm text-slate-700 font-medium shadow-sm hover:bg-white/90 hover:shadow-md transition-all"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection("about")}
          className="text-slate-600 hover:text-slate-800 transition-colors drop-shadow-lg"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
