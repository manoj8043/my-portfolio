
import React from 'react'

function Navbar() {

   const navItems = [
    
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div><nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Clicking this scrolls to top (home section) */}
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => scrollToSection('home')}
      >
        Manoj kumar Chinthala
      </h1>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer text-white/80 hover:text-white transition font-medium"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav></div>
  )
}

export default Navbar
