import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

// Lazy loading heavy sections
const About = lazy(() => import("./components/About.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // 🔹 Modern Loading Screen
  if (isLoading) {
    return (
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center"
      >
        <div className="text-center space-y-4">
          <Motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full mx-auto"
          />
          <h1 className="text-3xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
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
        className="min-h-screen text-white bg-black"
      >
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="overflow-hidden">
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
}

export default App;
