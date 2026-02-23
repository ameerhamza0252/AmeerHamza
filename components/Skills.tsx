
import React, { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 90},
  { name: 'TypeScript/JavaScript', level: 92 },
  { name: 'AI', level: 85 },
  { name: 'Sanity CMS', level: 88},
  { name: 'Vercel', level: 95},
  { name: 'Tailwind CSS', level: 90 },
  { name: 'SQL', level: 80 },
];

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: disconnect after it becomes visible to keep the animation state
          // observer.disconnect();
        } else {
          // Optional: reset if you want it to re-animate when scrolling back
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-8 bg-gray-950 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-400/20 bg-purple-400/5 backdrop-blur-sm">
            <span className="text-purple-400 font-mono text-xs font-bold tracking-widest uppercase">The Toolkit</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Core <span className="text-cyan-400">Expertise</span>
          </h2>
          <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">Engineered for Performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-700 group transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-cyan-400 font-mono text-sm font-bold tracking-tighter">
                  {isVisible ? skill.level : 0}%
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">{skill.name}</h3>
              
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden relative">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-[1500ms] cubic-bezier(0.34, 1.56, 0.64, 1)"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    boxShadow: isVisible ? '0 0 20px rgba(34,211,238,0.4)' : 'none'
                  }}
                />
                
                {/* Secondary highlight line */}
                <div 
                  className="absolute top-0 left-0 h-full w-full opacity-30 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] animate-[shimmer_3s_infinite]"
                  style={{ transform: 'translateX(-100%)' }}
                />
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Efficiency</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <div 
                      key={dot} 
                      className={`w-1 h-1 rounded-full transition-colors duration-500 ${isVisible && dot <= (skill.level / 20) ? 'bg-cyan-400' : 'bg-gray-800'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
