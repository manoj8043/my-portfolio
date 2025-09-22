import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Calendar, Code, Globe } from "lucide-react";
import bg3 from "../assets/imgs/BG-3.webp";
import project1Img from "../assets/imgs/Project1.png";
import qrRestroImg from "../assets/imgs/QRRestro.png";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Spice Palace – Restaurant Ordering Platform",
      desc: "Menu ordering where customers browse the menu and order from their Device. Real-time updates, auth, responsive UI (MERN).",
      img: qrRestroImg,
      link: "https://spice-palace-restaurant-ordering-pl.vercel.app/",
      code: "https://github.com/manoj8043/QResto-QR-based-Restaurant-Ordering-Platform",
      category: "fullstack",
      tech: ["React", "Node.js", "MongoDB", "Express", "QR Code"],
      featured: true,
    },
    {
      title: "NoteNest – Notes App (MERN)",
      desc: "Full-stack notes app with JWT auth, protected routes, and CRUD. Deployed on Vercel/Render.",
      img: project1Img,
      link: "https://note-nest.vercel.app",
      code: "https://github.com/manoj8043/NoteNest",
      category: "fullstack",
      tech: ["React", "Node.js", "MongoDB", "JWT", "CRUD"],
      featured: true,
    },
    // {
    //   title: "Portfolio Website",
    //   desc: "Fully responsive and animated portfolio built with React + Tailwind, smooth nav & project showcase.",
    //   img: project1Img,
    //   link: "#home",
    //   code: "https://github.com/manoj8043/my-portfolio",
    //   category: "frontend",
    //   tech: ["React", "Tailwind CSS", "Framer Motion", "Responsive"],
    //   featured: false,
    // },
  ];

  const internships = [
    {
      role: "Developer Intern (Major Project)",
      org: "DRDO",
      period: "May 2023 – Aug 2023",
      desc: "Led development of Mission Data Analysis & Reporting System for defense analytics and reporting.",
      tech: ["Python", "Data Analysis", "Reporting Systems"],
      icon: Code,
    },
    {
      role: "MERN Full Stack Developer Intern",
      org: "BRN Infotech",
      period: "Oct 2024 – Mar 2025",
      desc: "Worked on real-time projects using HTML, CSS, JavaScript, TypeScript, Bootstrap, and Git.",
      tech: ["MERN Stack", "TypeScript", "Bootstrap", "Git"],
      icon: Globe,
    },
    {
      role: "AI & ML Intern",
      org: "AICTE Eduskills",
      period: "Sep 2023 – Nov 2023",
      desc: "Built basic ML models and explored data workflows.",
      tech: ["Python", "Machine Learning", "Data Science"],
      icon: Code,
    },
    {
      role: "Android Developer Intern",
      org: "AICTE Eduskills",
      period: "Jan 2024 – Mar 2024",
      desc: "Built Android UI screens and integrated Kotlin functionality.",
      tech: ["Android", "Kotlin", "UI/UX", "Mobile Development"],
      icon: Globe,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="min-h-screen w-full py-24 px-4 relative"
      style={{ backgroundImage: `url(${bg3})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-purple-900/30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Selected projects demonstrating core skills and practices.
          </p>
        </Motion.div>

        {/* Filter Buttons */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <Motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={activeFilter === filter.id}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/20"
              }`}
            >
              {filter.label}
            </Motion.button>
          ))}
        </Motion.div>

        {/* Projects Grid */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <Motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
                className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-black/60 to-black/30"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white text-center py-2 rounded-lg text-sm font-medium transition"
                    >
                      <Globe className="w-4 h-4 inline mr-1" />
                      Live Demo
                    </a>
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 border border-white/20 text-white text-center py-2 rounded-lg hover:bg-white/10 transition text-sm font-medium"
                      >
                        <Github className="w-4 h-4 inline mr-1" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </Motion.div>
            ))}
          </AnimatePresence>
        </Motion.div>

        {/* Internships Timeline */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-12">
            Professional Experience
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {internships.map((item, idx) => (
              <Motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="glass-card bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="text-cyan-300 text-sm font-medium">
                      {item.org}
                    </p>
                    <p className="text-white/60 text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4 inline" /> {item.period}
                    </p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/10 text-white/70 rounded-md text-xs border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default Projects;
