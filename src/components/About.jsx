import React from "react";
import { motion as Motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Award, Code, Heart } from "lucide-react";
import bg2 from "../assets/imgs/BG-2.webp";
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
  return (
    <section
      id="about"
      className="min-h-screen w-full py-24 px-4 relative"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/30" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mb-4" />
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
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
            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-cyan-400/40 shadow-lg flex-shrink-0"
                >
                  <img
                    src={myPic}
                    alt="Manoj Kumar"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </Motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                    <Code className="w-6 h-6 text-cyan-400" /> Who I Am
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-2">
                    I'm Manoj Kumar, a full-stack developer working with modern web technologies. My work centers on React, Node.js, and Python.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Experience across AI/ML and Android helps me approach problems from multiple perspectives and choose practical solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="glass-card p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Focus Areas</h4>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((int, idx) => (
                  <Motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, color: "#22d3ee" }}
                    className="flex items-center gap-3 text-white/80 transition-colors"
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
            <div className="glass-card p-6">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-cyan-400" /> Education Journey
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
                      <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-1">
                        <img
                          src={edu.image}
                          alt={edu.degree}
                          className="w-12 h-12 object-cover rounded-full border-2 border-cyan-400/30"
                        />
                        <div>
                          <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                          <p className="text-cyan-300 text-sm">{edu.institution}</p>
                        </div>
                      </div>
                      <p className="text-white/60 text-sm mb-1">{edu.period} | {edu.score}</p>
                      <p className="text-white/70 text-sm leading-relaxed">{edu.description}</p>
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
