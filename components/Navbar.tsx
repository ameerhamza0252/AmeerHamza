
import React from 'react';

const Navbar: React.FC = () => {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show navbar if user scrolls down more than 120px
      if (window.scrollY > 5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on unmount to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-center gap-10 items-center  bg-white/5 border border-white/10 backdrop-blur-sm  ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="text-white font-black text-2xl pointer-events-auto backdrop-blur-md bg-white/5 px-4 py-2 rounded-full">
        AMEER<span className="text-cyan-400">.</span>
      </div>
      <div className="hidden md:flex gap-10 text-white/50 font-bold text-sm tracking-widest uppercase pointer-events-auto">
        <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
        <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
        <a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a>
        <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
        <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
      </div>

    </nav>
  );
};  

export default Navbar;
