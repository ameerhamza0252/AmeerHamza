
import React, { useRef, useEffect } from 'react';
import { Particle } from '../types';

const TRAIL_LENGTH = 15;

const GravityCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0, active: false });

  const createParticles = (width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 8000),20);
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < count; i++) {
      const hue = 180 + Math.random() * 100; // Cyan to Purple range
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        size: Math.random() * 2 + 2, // Back to smaller dot sizes
        color: `hsla(${hue}, 90%, 65%, 1)`,
        distance: Math.random() * 100 + 100,
        history: []
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
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Semi-transparent background for trails
      ctx.clearRect(0, 0, canvas.width, canvas.height); 

      particles.current.forEach(p => {
        // Trail History
        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > TRAIL_LENGTH) p.history.shift();

        if (mouse.current.active) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 500) {
            // Orbital Physics
            const targetRadius = p.distance;
            const distError = dist - targetRadius;
            
            // Centripetal
            const pullStrength = 0.002;
            p.vx -= dx * pullStrength * (distError / 50);
            p.vy -= dy * pullStrength * (distError / 50);

            // Tangential (Rotation)
            const orbitSpeed = 0.2;
            const speedFactor = Math.max(0.1, (800 - dist) / 800);
            p.vx += (-dy / dist) * orbitSpeed * speedFactor;
            p.vy += (dx / dist) * orbitSpeed * speedFactor;
          }
          p.vx *= 0.985;
          p.vy *= 0.985;
        } else {
          p.vx += (Math.random() - 0.5) * 0.1;
          p.vy += (Math.random() - 0.5) * 0.1;
          p.vx *= 0.995;
          p.vy *= 0.995;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap Screen
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        // Draw Trail (as lines for smoother visual)
        if (p.history.length > 1) {
          ctx.beginPath();
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          for (let i = 0; i < p.history.length - 1; i++) {
            const opacity = (i / p.history.length) * 0.5;
            const point = p.history[i];
            const nextPoint = p.history[i + 1];
            
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(nextPoint.x, nextPoint.y);
            ctx.lineWidth = p.size * (i / p.history.length);
            ctx.strokeStyle = p.color.replace('1)', `${opacity})`);
            ctx.stroke();
          }
        }

        // Draw Main Head
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 0;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
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

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default GravityCanvas;
