
import React, { useState, useEffect } from 'react';
import GravityCanvas from './GravityCanvas';
import { fetchHeroContent } from '../services/geminiService';
import { HeroContent } from '../types';

const Hero: React.FC = () => {
  const [content, setContent] = useState<HeroContent>({
    headline: "Gravity of Innovation",
    subheadline: "Move your cursor to experience the force of the future."
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchHeroContent();
      setContent(data);
      setLoading(false);
    };
    loadContent();
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-950 px-4">
      {/* Background Animation */}
      <GravityCanvas />

      {/* Glassy Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl backdrop-blur-sm bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
        {loading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-12 w-64 bg-white/10 mx-auto rounded-lg"></div>
            <div className="h-4 w-48 bg-white/10 mx-auto rounded-lg"></div>
          </div>
        ) : (
          <>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 leading-tight mb-6">
              {content.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto mb-10">
              {content.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Get Started
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </>
        )}
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Mouse Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-gray-500 text-sm font-semibold tracking-widest uppercase">
        <span className="mb-2">Move Your Mouse</span>
        <div className="w-1 h-6 bg-gradient-to-b from-white to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
