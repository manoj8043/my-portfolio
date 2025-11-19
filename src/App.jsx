import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import "./App.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import SnowEffect from "./components/SnowEffect.jsx";

// Lazy loading heavy sections
const About = lazy(() => import("./components/About.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));

const AppContent = () => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // 🔹 Modern Loading Screen with Winter Theme
  if (isLoading) {
    return (
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-slate-100 flex items-center justify-center relative overflow-hidden"
      >
        {/* Snow during loading */}
        {theme === 'winter' && <SnowEffect />}
        
        <div className="text-center space-y-4 relative z-10">
          <Motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto"
          />
          <h1 className="text-3xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Manoj
            </span>{" "}
            <span className="text-white">Kumar</span>
          </h1>
          <p className="text-white/70">Crafting amazing web experiences...</p>
        </div>
      </Motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen text-slate-800 bg-gradient-to-b from-blue-50 via-sky-100 to-blue-100 relative overflow-x-hidden"
      >
        {/* Snow Effect for Winter Theme */}
        {theme === 'winter' && (
          <>
            <SnowEffect />
          </>
        )}

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="overflow-hidden relative z-10">
          <Hero />
          <Suspense
            fallback={<div className="text-center py-10">Loading...</div>}
          >
            <About />
            <Projects />
            <Skills />
            <Contact />
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />
      </Motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
