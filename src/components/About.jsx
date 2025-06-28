import React from 'react'
import bg2 from '../assets/imgs/bg2.jpg'
import btechImg from '../assets/imgs/btechImg.jpg'
import interImg from '../assets/imgs/interImg.png'
import sscImg from '../assets/imgs/sscImg.jpg'
import Navbar from '../components/Navbar.jsx'


function About() {
  return (
    <div><Navbar></Navbar>
      <section id="about" className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center px-4 relative"
          style={{ backgroundImage: `url(${bg2})` }}>
       <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <p className="text-center text-white/80 text-lg leading-relaxed mb-16">
           I’m Manoj Kumar, a passionate Frontend Developer with a creative mindset and a knack for turning ideas into clean, functional, and visually appealing web experiences. I specialize in crafting responsive interfaces using modern web technologies like React, Tailwind CSS, and JavaScript.

  With a strong foundation in Computer Science, I have completed my B.Tech from Nalla Malla Reddy Engineering College. My learning journey includes virtual internships in AI/ML and Android development, which gave me a multidisciplinary view of software development.

  I love solving real-world problems through code and continuously strive to learn and evolve. Whether it’s building a dynamic portfolio, designing intuitive dashboards, or optimizing user flows, I focus on performance, accessibility, and modern design.

  When I'm not coding, I enjoy photography, exploring tech trends, traveling, and cooking.

        </p>

        {/* Education Section */}
         <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* BTech */}
          <div className="glass-card text-white flex flex-col items-center">
            <img src={btechImg} alt="B.Tech" className="w-28 h-28 object-cover rounded-full mb-4" />
            <h4 className="text-xl font-semibold">B.Tech - CSE</h4>
            <p className="text-white/70 text-center">Nalla Malla Reddy Engineering College</p>
            <p className="text-white/50 text-sm">2019 – 2024 | CGPA: 6.5</p>
          </div>

          {/* Intermediate */}
          <div className="glass-card text-white flex flex-col items-center">
            <img src={interImg} alt="Intermediate" className="w-28 h-28 object-cover rounded-full mb-4" />
            <h4 className="text-xl font-semibold">Intermediate - MPC</h4>
            <p className="text-white/70 text-center">TS Model School & Junior College</p>
            <p className="text-white/50 text-sm">2017 – 2019 | 80.9%</p>
          </div>

          {/* SSC */}
          <div className="glass-card text-white flex flex-col items-center">
            <img src={sscImg} alt="SSC" className="w-28 h-28 object-cover rounded-full mb-4" />
            <h4 className="text-xl font-semibold">SSC</h4>
            <p className="text-white/70 text-center">TS Model School</p>
            <p className="text-white/50 text-sm">2016 – 2017 | GPA: 9.2</p>
          </div>
        </div>
      </div>
    </section>
</div>
  )
}

export default About