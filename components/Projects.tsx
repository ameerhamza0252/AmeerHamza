
import React from 'react';

const projects = [
  {
    title: "GreenSpace Volunteers",
    description: "A React +Sanity CMS platform for a non-profit environmental organization called GreenSpace Volunteers.",
    tech: ["React", "TypeScript", "Tailwind", "Sanity"],
    link: "https://greenspacevolunteers.com"
  },
  {
    title: "Deep Research AI System",
    description: "An AI-powered research platform that analyzes complex datasets and generates actionable insights using muultiple Agents",
    tech: ["OpenAI SDK", "Streamlit UI", "Python", "AI Agents"],
    link: "#"
  },
  {
    title: "Blockchain Based Video Streaming Platform",
    description: "A decentralized video streaming platform leveraging blockchain for secure content delivery and fair revenue distribution.",
    tech: ["React", "Web3", "Tailwind CSS", "IPFS","ERC20","Solidity","Ganache"],
    link: "#"
  },
    {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my work and skills in web development.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "https://portfolio-ivory-sigma-64.vercel.app/"
  },

];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-8 bg-[#020617]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Selected <span className="text-purple-500">Works</span></h2>
            <p className="text-gray-400 max-w-md">Pushing the boundaries of web development one pixel at a time.</p>
          </div>
          <button className="text-cyan-400 font-bold flex items-center gap-2 group">
            View All Projects <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 aspect-video flex items-end p-8 hover:border-cyan-400/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-20 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-300 uppercase tracking-widest">{t}</span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <a href={project.link} className="px-6 py-2 bg-white text-black font-bold text-sm rounded-full transform scale-0 group-hover:scale-100 transition-transform origin-left">
                  Explore Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
