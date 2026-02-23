
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-8 bg-gray-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter">
          READY TO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">COLLABORATE?</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          Currently seeking new challenges and innovative projects. Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        <div className="flex flex-col items-center gap-12">
          <a 
            href="mailto:hello@ameerhamza.dev" 
            className="group relative text-3xl md:text-6xl font-bold text-white transition-all duration-300"
          >
            <span className="relative z-10">hello@ameerhamza.dev</span>
            <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500" />
          </a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-2xl mt-8">
            {[
              { label: 'LinkedIn', url: '#' },
              { label: 'GitHub', url: '#' },
              { label: 'Twitter', url: '#' },
              { label: 'Instagram', url: '#' }
            ].map(social => (
              <a 
                key={social.label} 
                href={social.url} 
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-gray-400 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
