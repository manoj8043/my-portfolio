import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Calendar, Code, Globe } from "lucide-react";
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
      className="min-h-screen w-full py-24 px-4 relative bg-gradient-to-b from-sky-100 via-blue-50 to-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-blue-50/80 to-white/90" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg max-w-3xl mx-auto font-medium">
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
                  ? "bg-gradient-to-r from-blue-500 to-sky-400 text-white shadow-lg shadow-blue-400/40"
                  : "bg-white/70 text-slate-700 hover:bg-white/90 border-2 border-blue-300/50 backdrop-blur-md"
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
                className="relative group rounded-2xl overflow-hidden bg-white/80 backdrop-blur-xl border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium border border-blue-300/50"
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
                      className="flex-1 bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 text-white text-center py-2 rounded-lg text-sm font-medium transition shadow-lg hover:shadow-xl"
                    >
                      <Globe className="w-4 h-4 inline mr-1" />
                      Live Demo
                    </a>
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 border-2 border-blue-300/50 bg-white/50 backdrop-blur-sm text-slate-700 text-center py-2 rounded-lg hover:bg-white/80 transition text-sm font-medium hover:border-blue-400"
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
          <h2 className="text-4xl font-bold text-slate-800 mb-12">
            Professional Experience
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {internships.map((item, idx) => (
              <Motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="glass-card bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-blue-200/50 shadow-xl hover:shadow-2xl flex flex-col gap-4 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-400 to-sky-400 text-white rounded-xl shadow-lg">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-slate-800">
                      {item.role}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium">
                      {item.org}
                    </p>
                    <p className="text-slate-500 text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4 inline" /> {item.period}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs border border-blue-300/50 font-medium"
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
