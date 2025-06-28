import React from 'react'
import bg4 from '../assets/imgs/bg4.jpg'
import pythonCert from '../assets/imgs/pythonCert.png'
import cCert from '../assets/imgs/cCert.png'
import dtAyCert from '../assets/imgs/dtAyCert.png';

const certifications = [
  {
    title: "Cisco Python Essentials",
    img: pythonCert,
  },
  {
    title: "Foundational C# with Microsoft",
    img: cCert,
  },
  {
    title: " AWS Academy Data Analytics",
    img: dtAyCert,
  },
  // more 
];
function Skills() {
  return (
    <div>
    <section
        id="skills"
        className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start px-4 pt-24 pb-16"
        style={{ backgroundImage: `url(${bg4})` }}
      >
        <h2 className="text-4xl font-bold text-center mb-2">Certifications</h2>
        <div className="w-32 h-1 bg-white/60 mx-auto rounded-full mb-8" />

        {/* Certifications Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card w-[150px] h-[250px] flex flex-col items-center justify-start p-4 text-center"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-[125px] h-[125px] object-contain mb-3 rounded-lg"
              />
              <p className="text-sm font-medium text-white/90">{cert.title}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Skills & Tools</h2>
          <div className="w-24 h-1 bg-white/60 mx-auto rounded-full mb-6" />
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Here are some technologies I've worked with recently and feel confident using:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm text-white/90">
            {[
              "HTML & CSS",
              "JavaScript (ES6+)",
              "React.js",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Git & GitHub",
            ].map((skill, i) => (
              <div key={i} className="bg-white/5 py-4 px-6 rounded-lg shadow">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
</div>
  )
}

export default Skills