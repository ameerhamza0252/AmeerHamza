
import React from 'react';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center pointer-events-none">
        <div className="text-white font-black text-2xl tracking-tighter pointer-events-auto cursor-pointer">
          GRAVITY<span className="text-cyan-400">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-white/70 font-semibold pointer-events-auto">
          <a href="#" className="hover:text-white transition-colors">Vision</a>
          <a href="#" className="hover:text-white transition-colors">Tech</a>
          <a href="#" className="hover:text-white transition-colors">Connect</a>
        </div>
      </nav>

      <main>
        <Hero />
        
        {/* Placeholder for content below hero to demonstrate scrolling */}
        <section className="bg-gray-950 py-32 px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Dynamic Flow", desc: "Particles react in real-time to your presence, creating a unique signature." },
              { title: "AI Curated", desc: "Headlines and vision statements generated on the fly by Gemini 3." },
              { title: "Performance First", desc: "Canvas-based rendering ensures silky smooth 60fps animations." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 border-t border-white/5 py-12 px-8 text-center">
        <p className="text-gray-600 text-sm">© 2024 Gravity Interactive. Engineered for the future.</p>
      </footer>
    </div>
  );
};

export default App;
