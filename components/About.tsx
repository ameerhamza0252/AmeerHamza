
import React from 'react';

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", 
  "TailwindCSS", "Sanity CMS", "Vercel", "Git", 
  "CI/CD", "AWS", "Figma", "Redux"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-8 bg-gray-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-sm">
            <span className="text-cyan-400 font-mono text-xs font-bold tracking-widest uppercase">The Vision</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
            Building interfaces that <span className="text-cyan-400 italic font-serif">feel</span> as good as they <span className="text-purple-500">perform</span>.
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            As a Senior Software Engineer, I specialize in bridging the gap between design and engineering. My focus is on creating high-performance, accessible, and scalable web applications using modern technologies like Next.js and Sanity CMS.
          </p>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            I believe in the power of clean code, automated workflows, and continuous integration to deliver value quickly and reliably.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-mono text-gray-300 hover:border-cyan-400/40 hover:text-white transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-[3rem] blur-2xl" />
          <div className="relative h-full w-full bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-sm p-12 flex flex-col justify-center items-center text-center">
            <div className="text-8xl mb-8"><img src="./200.webp" alt="Profile" className="rounded-md w-40 h-40 object-cover" /></div>
            <h3 className="text-2xl font-bold text-white mb-4">Engineering Excellence</h3>
            <p className="text-gray-400">Transforming complex problems into elegant, user-centric solutions through modern software architecture.</p>
            
            <div className="mt-12 grid grid-cols-3 gap-8 w-full">
              <div>
                <div className="text-3xl font-black text-white">Multiple</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
