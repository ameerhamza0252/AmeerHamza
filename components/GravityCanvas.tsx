
import React, { useRef, useEffect } from 'react';
import { Particle } from '../types';

const GravityCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0, active: false });

  const createParticles = (width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 2000), 150);
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < count; i++) {
      const hue = Math.floor(Math.random() * 360);
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 2,
        color: `hsla(${hue}, 90%, 65%, 0.9)`,
        angle: Math.random() * Math.PI * 2,
        // Using distance as a preferred orbital radius
        distance: Math.random() * 100 + 100 
      });
    }
    particles.current = newParticles;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouse.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    handleResize();

    let animationId: number;

    const animate = () => {
      // Create a deeper trail for more "flow"
      ctx.fillStyle = 'rgba(3, 7, 18, 0.12)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach(p => {
        if (mouse.current.active) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 600) {
            // Orbital Physics
            // 1. Centripetal Force (Pull towards center/orbit ring)
            const targetRadius = p.distance;
            const distError = dist - targetRadius;
            const pullStrength = 0.0020;
            p.vx -= dx * pullStrength * (distError / 100);
            p.vy -= dy * pullStrength * (distError / 100);

            // 2. Tangential Force (Rotation)
            // Perpendicular vector to (dx, dy) is (-dy, dx)
            const orbitSpeed = 0.1;
            const speedFactor = Math.max(0.1, (600 - dist) / 600);
            p.vx += (-dy / dist) * orbitSpeed * speedFactor;
            p.vy += (dx / dist) * orbitSpeed * speedFactor;
          }
          
          // Friction to prevent infinite acceleration
          p.vx *= 0.98;
          p.vy *= 0.98;
        } else {
          // Idle floating movement
          p.vx += (Math.random() - 0.5) * 0.05;
          p.vy += (Math.random() - 0.5) * 0.05;
          p.vx *= 0.995;
          p.vy *= 0.995;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Soft boundaries
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        // Draw particle with enhanced neon glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.closePath();
        
        // Optional: Draw subtle connections between particles that are close
        // (Removed to keep the "revolving dots" focus cleaner)
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default GravityCanvas;
