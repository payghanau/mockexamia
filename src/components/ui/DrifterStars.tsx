
import React, { useEffect, useRef } from 'react';

type DrifterStarsProps = {
  className?: string;
  starCount?: number;
  starSize?: number;
  starColor?: string;
  speed?: number;
};

const DrifterStars = ({
  className = '',
  starCount = 100,
  starSize = 2,
  starColor = '#4f7df0',
  speed = 0.5
}: DrifterStarsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let stars: { x: number; y: number; z: number; size: number; color: string }[] = [];
    
    // Set canvas to be full viewport
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialize the stars
    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * starSize + 0.1,
          color: starColor
        });
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        
        // Update z-coordinate (depth)
        star.z -= speed;
        
        // If star is too close, reset it to far away
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
        
        // Calculate the position and size based on z-coordinate
        const scaleFactor = 1000 / star.z;
        const x = star.x;
        const y = star.y;
        const r = star.size * scaleFactor;
        
        // Draw the star
        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.min(1, (1000 - star.z) / 1000);
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Handle window resize
    window.addEventListener('resize', () => {
      setCanvasSize();
      initStars();
    });
    
    setCanvasSize();
    initStars();
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [starCount, starSize, starColor, speed]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 pointer-events-none ${className}`}
    />
  );
};

export default DrifterStars;
