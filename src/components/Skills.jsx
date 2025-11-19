import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Palette,
  Brain,
  Award,
  Cloud,
  Users,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import pythonCert from "../assets/imgs/pythonCert.png";
import cCert from "../assets/imgs/cCert.png";
import dtAyCert from "../assets/imgs/dtAyCert.png";

const certifications = [
  {
    title: "Cisco Python Essentials",
    img: pythonCert,
    issuer: "Cisco",
    year: "2023",
  },
  {
    title: "Foundational C# with Microsoft",
    img: cCert,
    issuer: "Microsoft",
    year: "2023",
  },
  {
    title: "AWS Academy Data Analytics",
    img: dtAyCert,
    issuer: "Amazon Web Services",
    year: "2023",
  },
];

const skillCategories = [
  {
    name: "Frontend & Web",
    icon: Palette,
    skills: [
      { name: "React.js / Next.js", level: 90, color: "from-blue-500 to-cyan-500" },
      {
        name: "JavaScript (ES6+)",
        level: 87,
        color: "from-yellow-500 to-orange-500",
      },
      { name: "HTML & CSS", level: 95, color: "from-orange-500 to-red-500" },
      { name: "Tailwind CSS", level: 90, color: "from-cyan-500 to-blue-500" },
      {
        name: "Responsive UI/UX",
        level: 92,
        color: "from-green-500 to-emerald-500",
      },
    ],
  },
  {
    name: "Backend & Platforms",
    icon: Code,
    skills: [
      {
        name: "Node.js & Express",
        level: 82,
        color: "from-green-500 to-emerald-500",
      },
      { name: "Java", level: 80, color: "from-orange-500 to-red-500" },
      { name: "Spring Boot", level: 76, color: "from-rose-500 to-pink-500" },
      { name: "Python (APIs, automation)", level: 78, color: "from-blue-500 to-indigo-500" },
      { name: "Secure REST/GraphQL APIs", level: 86, color: "from-purple-500 to-pink-500" },
    ],
  },
  {
    name: "Databases & Data",
    icon: Database,
    skills: [
      { name: "SQL Fundamentals", level: 85, color: "from-yellow-500 to-amber-500" },
      { name: "MySQL", level: 82, color: "from-blue-500 to-indigo-500" },
      { name: "MongoDB", level: 78, color: "from-green-500 to-emerald-500" },
      { name: "Data Modeling & ORM", level: 76, color: "from-purple-500 to-indigo-500" },
      { name: "Analytics & Reporting", level: 74, color: "from-cyan-500 to-blue-500" },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 78, color: "from-orange-500 to-yellow-500" },
      { name: "CI/CD (GitHub Actions)", level: 72, color: "from-blue-500 to-cyan-500" },
      { name: "Docker & Containers", level: 70, color: "from-emerald-500 to-green-500" },
      { name: "Serverless Deployments", level: 74, color: "from-purple-500 to-pink-500" },
      { name: "Monitoring & Observability", level: 68, color: "from-gray-500 to-slate-500" },
    ],
  },
  {
    name: "AI/ML & Intelligent Apps",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 75, color: "from-cyan-500 to-blue-500" },
      { name: "AI/ML Pipelines", level: 70, color: "from-indigo-500 to-purple-500" },
      { name: "Data Analysis (NumPy/Pandas)", level: 78, color: "from-green-500 to-emerald-500" },
      { name: "Model Deployment", level: 65, color: "from-pink-500 to-rose-500" },
      { name: "Generative AI & LLMs", level: 60, color: "from-orange-500 to-red-500" },
    ],
  },
  {
    name: "Professional Skills",
    icon: Users,
    skills: [
      {
        name: "Problem Solving",
        level: 90,
        color: "from-cyan-500 to-blue-500",
      },
      {
        name: "Team Collaboration",
        level: 88,
        color: "from-green-500 to-emerald-500",
      },
      {
        name: "Communication",
        level: 85,
        color: "from-purple-500 to-pink-500",
      },
      {
        name: "Time Management",
        level: 82,
        color: "from-orange-500 to-yellow-500",
      },
      {
        name: "Learning Agility",
        level: 92,
        color: "from-indigo-500 to-purple-500",
      },
    ],
  },
];

function Skills() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="skills"
      className="min-h-screen w-full py-24 px-4 relative bg-gradient-to-b from-white via-blue-50 to-sky-100"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-blue-50/80 to-white/90" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg max-w-3xl mx-auto font-medium">
            Full-stack software developer experienced across web, backend,
            cloud, data, and AI/ML ecosystems—always leveling up to build
            production-grade products end-to-end.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === idx
                    ? "bg-gradient-to-r from-blue-500 to-sky-400 text-white shadow-lg shadow-blue-400/40"
                    : "bg-white/70 text-slate-700 hover:bg-white/90 border-2 border-blue-300/50 backdrop-blur-md"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {cat.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Bars */}
        <div className="glass-card p-8 rounded-2xl mb-16 bg-white/70 backdrop-blur-xl border border-blue-200/50 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-800 font-medium">{skill.name}</span>
                  <span className="text-blue-600 text-sm font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-3 border border-blue-200/50">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                      damping: 15,
                      delay: idx * 0.1,
                    }}
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-blue-500" />
            Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-card p-6 rounded-2xl group hover:border-blue-400/50 transition-all duration-300 bg-white/70 backdrop-blur-xl border border-blue-200/50 shadow-xl hover:shadow-2xl"
              >
                <div className="relative mb-4">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-32 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-1">
                  {cert.title}
                </h4>
                <p className="text-blue-600 text-sm font-medium">{cert.issuer}</p>
                <p className="text-slate-500 text-sm">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
