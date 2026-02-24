
import React from 'react';

const projects = [
  {
    title: "GreenSpace Volunteers",
    description: "A React +Sanity CMS platform for a non-profit environmental organization called GreenSpace Volunteers.",
    tech: ["React", "TypeScript", "Tailwind", "Sanity"],
    link: "https://greenspacevolunteers.com"
  },
      {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my work and skills in web development.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "https://portfolio-ivory-sigma-64.vercel.app/"
  },
  {
    title: "Deep Research AI System",
    description: "An AI-powered research platform that analyzes complex datasets and generates actionable insights using multiple Agents",
    tech: ["OpenAI SDK","AI Agents", "Python", "Streamlit UI"],
    link:"https://github.com/ameerhamza0252/DeepSearch-"
  },
  {
    title: "Blockchain Video Streaming",
    description: "A decentralized video streaming platform leveraging blockchain for secure content delivery and fair revenue distribution.",
    tech: ["React", "IPFS","ERC20","Solidity","Ganache"],
    link:"https://github.com/ameerhamza0252/BBVS"
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
          {/*<button className="text-cyan-400 font-bold flex items-center gap-2 group">
            View All Projects <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>*/}
        </div>
        
        <div className="flex flex-row flex-wrap justify-center gap-4 w-full p-8">
          {projects.map((project, i) => (
            <div key={i} className="rounded-3xl max-w-[500px] bg-white/5 border border-white/10 flex p-6 hover:border-cyan-400/30 transition-all duration-500">
              <div className="relative z-10 rounded-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-300 uppercase tracking-widest">{t}</span>
                  ))}
                </div>
                <h2 className="text-3xl sm:text-xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <a href={project.link}  className={`px-6 py-2 bg-white text-black font-bold text-sm rounded-full transform scale-0 group-hover:scale-100 transition-transform origin-left ${project.link ? 'visible' : 'hidden'} `}>
                  Explore Project<svg className="inline-block w-8 h-4 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
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
