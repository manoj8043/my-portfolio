import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Palette, Brain, Award } from "lucide-react";
import bg4 from "../assets/imgs/BG-4.webp";
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
    name: "Frontend Development",
    icon: Palette,
    skills: [
      { name: "React.js", level: 90, color: "from-blue-500 to-cyan-500" },
      {
        name: "JavaScript (ES6+)",
        level: 85,
        color: "from-yellow-500 to-orange-500",
      },
      { name: "HTML & CSS", level: 95, color: "from-orange-500 to-red-500" },
      { name: "Tailwind CSS", level: 88, color: "from-cyan-500 to-blue-500" },
      {
        name: "Responsive Design",
        level: 92,
        color: "from-green-500 to-emerald-500",
      },
    ],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: [
      { name: "Node.js", level: 80, color: "from-green-500 to-emerald-500" },
      { name: "Express.js", level: 75, color: "from-gray-500 to-slate-500" },
      { name: "Python", level: 70, color: "from-blue-500 to-indigo-500" },
      { name: "RESTful APIs", level: 85, color: "from-purple-500 to-pink-500" },
      { name: "Authentication", level: 78, color: "from-red-500 to-pink-500" },
    ],
  },
  {
    name: "Database & Tools",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 75, color: "from-green-500 to-emerald-500" },
      { name: "Git & GitHub", level: 85, color: "from-gray-500 to-slate-500" },
      { name: "Postman", level: 80, color: "from-orange-500 to-red-500" },
      { name: "VS Code", level: 90, color: "from-blue-500 to-indigo-500" },
      { name: "Deployment", level: 70, color: "from-purple-500 to-indigo-500" },
    ],
  },
  {
    name: "Soft Skills",
    icon: Brain,
    skills: [
      {
        name: "Problem Solving",
        level: 88,
        color: "from-cyan-500 to-blue-500",
      },
      {
        name: "Team Collaboration",
        level: 85,
        color: "from-green-500 to-emerald-500",
      },
      {
        name: "Communication",
        level: 82,
        color: "from-purple-500 to-pink-500",
      },
      {
        name: "Time Management",
        level: 80,
        color: "from-orange-500 to-yellow-500",
      },
      {
        name: "Learning Agility",
        level: 90,
        color: "from-indigo-500 to-purple-500",
      },
    ],
  },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="skills"
      className="min-h-screen w-full bg-cover bg-center py-24 px-4 relative"
      style={{ backgroundImage: `url(${bg4})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-indigo-900/30" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Here are the technologies and skills I've worked with. I'm
            constantly learning and expanding my skill set.
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
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/20"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {cat.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Bars */}
        <div className="glass-card p-8 rounded-2xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyan-400 text-sm font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
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
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-cyan-400" />
            Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-card p-6 rounded-2xl group hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="relative mb-4">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-32 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {cert.title}
                </h4>
                <p className="text-cyan-300 text-sm">{cert.issuer}</p>
                <p className="text-white/60 text-sm">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
