
import bg3 from '../assets/imgs/bg3.jpg'
import Project1 from '../assets/imgs/Project1.png'
import Error from '../assets/imgs/Error.jpg'
function Projects() {
  const projects = [
  {
    title: "Portfolio Website",
        desc: "A fully responsive and animated personal portfolio built using React and Tailwind CSS. Includes smooth navigation, hero section, project showcase, and contact form.",

    img: Project1, // update with correct relative path
    link: "#",
  },
  {
    title: "E-Commerce UI",
    desc: "A modern e-commerce user interface design using React. Features product listings, filters, and an intuitive layout ready for integration with a backend.",
    img: Error, // update with correct relative path
    link: "#",
  },
];


const internships = [
  {
    role: "Devloper Intern (Major Project)",
    org: "DRDO",
    period: "May 2023 – Aug 2023",
    desc: "Led the development of 'Mission Data Analysis and Reporting System' for defense analytics and reporting."
  },
  {
    role: "MERN Full Stack Developer Intern",
    org: "BRN Infotech",
    period: "Oct 2024 – Mar 2024",
    desc:  "Workedonreal-time projects using HTML, CSS, JavaScript, Bootstrap, Git, and TypeScript."
  },
  {
    role: "AI & ML Intern",
    org: "AICTE Eduskills",
    period: "Sep 2023 – Nov 2023",
    desc: "Worked on machine learning models and explored AI basics."
  },
  {
    role: "Android Developer Intern",
    org: "AICTE Eduskills",
    period: "Jan 2024 – Mar 2024",
    desc: "Built Android UI screens and integrated basic Kotlin functionality."
  }
];
  return (
    <div> <section
      id="projects"
      className="min-h-screen w-full bg-cover bg-center py-24 px-4"
      style={{ backgroundImage: `url(${bg3})` }}
    >
      {/* Projects */}
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-card w-full max-w-md p-6 rounded-3xl text-center"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            <p className="text-white/80 text-sm mb-3">{project.desc}</p>
            <a
              href={project.link}
              className="text-blue-400 hover:underline text-sm"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* Internships */}
      <h2 className="text-4xl font-bold text-center mb-10">Internships</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {internships.map((item, index) => (
          <div key={index} className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-semibold">{item.role} – <span className="text-blue-300">{item.org}</span></h3>
            <p className="text-sm text-white/60 mb-1">{item.period}</p>
            <p className="text-white/80 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
</div>
  )
}

export default Projects