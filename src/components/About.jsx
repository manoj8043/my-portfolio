import React from "react";
import { motion as Motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Award, Code, Heart } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import btechImg from "../assets/imgs/btechImg.jpg";
import interImg from "../assets/imgs/interImg.png";
import sscImg from "../assets/imgs/sscImg.jpg";
import myPic from "../assets/imgs/Mypic.jpg";

const education = [
  {
    degree: "B.Tech - Computer Science & Engineering",
    institution: "Nalla Malla Reddy Engineering College",
    period: "2019 – 2024",
    score: "CGPA: 6.5",
    image: btechImg,
    description:
      "Specialized in Computer Science with focus on software development, algorithms, and system design.",
  },
  {
    degree: "Intermediate - MPC",
    institution: "TS Model School & Junior College",
    period: "2017 – 2019",
    score: "80.9%",
    image: interImg,
    description:
      "Strong foundation in mathematics and sciences that supports my analytical approach to problem-solving.",
  },
  {
    degree: "SSC",
    institution: "TS Model School",
    period: "2016 – 2017",
    score: "GPA: 9.2",
    image: sscImg,
    description:
      "Excellent academic foundation with focus on core subjects and extracurricular activities.",
  },
];

const interests = [
  { icon: Code, text: "Web Development" },
  { icon: Heart, text: "Problem Solving" },
  { icon: Award, text: "Continuous Learning" },
  { icon: MapPin, text: "Travel & Photography" },
];

function About() {
  const { theme } = useTheme();
  return (
    <section
      id="about"
      className="min-h-screen w-full py-24 px-4 relative bg-gradient-to-b from-white via-blue-50 to-sky-100"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-blue-50/80 to-white/90" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Full-stack developer focused on building maintainable, accessible, and performant web applications.
          </p>
        </Motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Profile & Personal Info */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Who I am + Profile Pic side-by-side */}
            <div className="glass-card p-6 bg-white/70 backdrop-blur-xl border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-blue-300/60 shadow-xl flex-shrink-0 ring-2 ring-blue-200/30"
                >
                  <img
                    src={myPic}
                    alt="Manoj Kumar"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </Motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-3 flex items-center gap-3">
                    <Code className="w-6 h-6 text-blue-500" /> Who I Am
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    I'm Manoj Kumar, a full-stack developer working with modern web technologies. My work centers on React, Node.js, and Python.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Experience across AI/ML and Android helps me approach problems from multiple perspectives and choose practical solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="glass-card p-6 bg-white/70 backdrop-blur-xl border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all">
              <h4 className="text-xl font-semibold text-slate-800 mb-4">Focus Areas</h4>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((int, idx) => (
                  <Motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, color: "#7dd3fc" }}
                    className="flex items-center gap-3 text-slate-600 transition-colors hover:text-blue-600"
                  >
                    <int.icon className="w-5 h-5" />
                    <span className="text-sm">{int.text}</span>
                  </Motion.div>
                ))}
              </div>
            </div>
          </Motion.div>

          {/* Right: Education */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 lg:ml-4"
          >
            <div className="glass-card p-6 bg-white/70 backdrop-blur-xl border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-500" /> Education Journey
              </h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <Motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full flex items-center justify-center shadow-lg">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-1">
                        <img
                          src={edu.image}
                          alt={edu.degree}
                          className="w-12 h-12 object-cover rounded-full border-2 border-blue-300/30"
                        />
                        <div>
                          <h4 className="text-lg font-semibold text-slate-800">{edu.degree}</h4>
                          <p className="text-blue-600 text-sm font-medium">{edu.institution}</p>
                        </div>
                      </div>
                      <p className="text-slate-500 text-sm mb-1">{edu.period} | {edu.score}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </Motion.div>
                ))}
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
