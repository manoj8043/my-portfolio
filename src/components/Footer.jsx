import {Mail, Twitter, Instagram, Linkedin, Github,} from 'lucide-react';

const Footer = () => {
  
  return (<footer className="w-full bg-black/90 text-white py-6 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Manoj Kumar. All rights reserved.</p>
        <div className="flex space-x-6">
          <a
            href="mailto:manojchinthala12@gmail.com"
            className="hover:text-blue-300 transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://twitter.com/ManojKumar_Iam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>  
          <a
            href="https://instagram.com/manoj.12.11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://linkedin.com/in/manoj-kumar-chinthala-5524161ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/manoj8043"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


