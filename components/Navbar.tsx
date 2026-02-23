
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-center">
      <div className="text-white font-black text-2xl pointer-events-auto">
        AMEER<span className="text-cyan-400">.</span>
      </div>
      <div className="hidden md:flex gap-10 text-white/50 font-bold text-sm tracking-widest uppercase pointer-events-auto">
        <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
        <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
        <a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a>
        <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
        <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
      </div>
      <div className="pointer-events-auto">
        <button className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
