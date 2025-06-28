import bg1 from '../assets/imgs/BG-3.webp';
import Contact from '../components/Contact';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';


function Hero() {
  
  const scrollToMain = () => {
    const section = document.getElementById("main-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

 
  return (
    
    <div>
     
        <section id="home"
      className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center px-4 relative"
      style={{ backgroundImage: `url(${bg1})` }}>
      <div className="glass-card animate-fade-in-up text-white max-w-2xl w-full text-center p-10 rounded-2xl border border-white/20 shadow-2xl">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Hi, I'm Manoj</h1>
        <p className="text-white/80 text-lg font-light drop-shadow">
         I build responsive, modern web apps using React and Tailwind — blending clean design with smooth performance.”
        </p>
        
      </div>

      {/* Scroll Button */}
      <button
        onClick={scrollToMain}
        className="absolute bottom-8 text-white/80 hover:text-white transition"
      >
        ↓ Scroll Down
      </button>

      {/* ID Placeholder (Optional) */}
      <p className="absolute bottom-2 right-4 text-xs text-white/40">
        ID: fbsf9fsf9s97f9sd9sv
      </p>
      
    </section>
    <About></About>
    <Projects></Projects>
    <Skills></Skills>
    <Contact></Contact>
    <Footer></Footer>
    </div>
    
    
  );
}

export default Hero;
