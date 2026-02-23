
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';


const App: React.FC = () => {
  return (
   
    <div className="min-h-screen bg-gray-950 text-white selection:bg-cyan-500/30 overflow-x-hidden">
       <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-gray-950 border-t border-white/5 py-16 px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-white font-black text-2xl tracking-tighter mb-2">
              AMEER<span className="text-cyan-400">.</span>
            </div>
            <p className="text-gray-500 text-sm font-mono tracking-widest uppercase">
              Handcrafted with Next.js & TypeScript
            </p>
          </div>
          
          <div className="text-gray-600 text-xs font-medium text-center md:text-right">
            <p>© 2024 Ameer Hamza. Built for the modern web.</p>
            <p className="mt-2 text-gray-700">All rights reserved. Code is poetry in motion.</p>
          </div>
        </div>
        
        {/* Footer Ambient Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
      </footer>
    </div>
  );
};

export default App;
