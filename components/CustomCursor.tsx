
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('button, a, input, textarea'));
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)` }}
    >
      <div className={`relative w-10 h-10 rounded-full border border-cyan-400/50 transition-all duration-300 flex items-center justify-center ${isHovering ? 'scale-150 border-cyan-400 border-dashed animate-spin' : ''} ${isClicking ? 'scale-75' : ''}`}>
        <div className={`w-1 h-1 rounded-full bg-cyan-400 transition-all duration-200 ${isClicking ? 'scale-[3]' : ''}`} />
      </div>
      <div className={`absolute -top-4 -right-4 text-[8px] font-mono text-cyan-400/60 font-bold transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
        0xRUN
      </div>
    </div>
  );
};

export default CustomCursor;
