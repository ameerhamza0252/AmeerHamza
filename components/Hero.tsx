
import React, { useState, useEffect } from 'react';
import GravityCanvas from './GravityCanvas';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-950 px-4 py-16 overflow-hidden">
      <GravityCanvas />
      <div className="relative z-10 text-center max-w-5xl bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-sm  rounded-3xl p-8">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="text-cyan-400 font-mono font-bold sm:text-sm tracking-widest uppercase">Full Stack Developer</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-tight mb-8 tracking-tighter">
          AMEER <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">HAMZA</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
          Crafting high-performance digital experiences with React, Next.js, and AI Solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#projects" className="px-10 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            View My Work
          </a>
          <a href="#contact" className="px-10 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
            Let's Talk
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 animate-pulse">
        <span className="text-[10px] font-mono text-white tracking-widest uppercase mb-2">Scroll To Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
